#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { assertAllowedOwner, hasSecuritySignalText, parseArgs, parseJob, repoRoot, validateJob } from "./lib.mjs";

const FIX_ACTIONS = new Set(["fix_needed", "build_fix_artifact", "open_fix_pr"]);
const REPAIR_STRATEGIES = new Set(["repair_contributor_branch", "replace_uneditable_branch", "new_fix_pr"]);
const NON_EXECUTABLE_REPAIR_STRATEGIES = new Set(["already_fixed_on_main", "needs_human"]);
const DEFAULT_BASE_BRANCH = "main";

const args = parseArgs(process.argv.slice(2));
const jobPath = args._[0];
const resultPathArg = args._[1];
const latest = Boolean(args.latest);
const dryRun = Boolean(args["dry-run"] || process.env.CLOWNFISH_FIX_DRY_RUN === "1");
const model = String(args.model ?? process.env.CLOWNFISH_MODEL ?? "gpt-5.5");
const codexTimeoutMs = Number(process.env.CLOWNFISH_FIX_CODEX_TIMEOUT_MS ?? 30 * 60 * 1000);
const codexPreflightTimeoutMs = Number(process.env.CLOWNFISH_FIX_PREFLIGHT_TIMEOUT_MS ?? 2 * 60 * 1000);
const codexReasoningEffort = String(process.env.CLOWNFISH_CODEX_REASONING_EFFORT ?? "medium");
const maxEditAttempts = Math.max(1, Number(process.env.CLOWNFISH_FIX_EDIT_ATTEMPTS ?? 3));
const maxReviewAttempts = Math.max(1, Number(process.env.CLOWNFISH_CODEX_REVIEW_ATTEMPTS ?? 2));
const resolveReviewThreads = process.env.CLOWNFISH_RESOLVE_REVIEW_THREADS !== "0";
const skipCodexWritePreflight = process.env.CLOWNFISH_SKIP_CODEX_WRITE_PREFLIGHT === "1";
const allowExpensiveValidation = process.env.CLOWNFISH_ALLOW_EXPENSIVE_VALIDATION === "1";
const installTargetDeps = process.env.CLOWNFISH_INSTALL_TARGET_DEPS !== "0";
const strictTargetValidation =
  process.env.CLOWNFISH_STRICT_TARGET_VALIDATION === "1" ||
  String(process.env.CLOWNFISH_TARGET_VALIDATION_MODE ?? "changed-only") === "strict";
const defaultCodexWriteSandbox = process.env.GITHUB_ACTIONS === "true" ? "danger-full-access" : "workspace-write";
const codexWriteSandbox = String(process.env.CLOWNFISH_CODEX_WRITE_SANDBOX ?? defaultCodexWriteSandbox);
const defaultCodexReviewSandbox = process.env.GITHUB_ACTIONS === "true" ? "danger-full-access" : "read-only";
const codexReviewSandbox = String(process.env.CLOWNFISH_CODEX_REVIEW_SANDBOX ?? defaultCodexReviewSandbox);
const codexWriteNetworkAccess = parseBooleanEnv(
  process.env.CLOWNFISH_CODEX_WRITE_NETWORK_ACCESS,
  process.env.GITHUB_ACTIONS === "true",
);
const codexReviewNetworkAccess = parseBooleanEnv(process.env.CLOWNFISH_CODEX_REVIEW_NETWORK_ACCESS, false);
let workRoot = "";
let targetDir = "";

if (!jobPath) {
  console.error("usage: node scripts/execute-fix-artifact.mjs <job.md> [result.json] [--latest] [--dry-run]");
  process.exit(2);
}
if (!resultPathArg && !latest) {
  console.error("result path is required unless --latest is set");
  process.exit(2);
}

const job = parseJob(jobPath);
const jobErrors = validateJob(job);
if (jobErrors.length > 0) {
  console.error(jobErrors.join("\n"));
  process.exit(1);
}

assertAllowedOwner(job.frontmatter.repo, process.env.CLOWNFISH_ALLOWED_OWNER);

if (!["execute", "autonomous"].includes(job.frontmatter.mode)) {
  throw new Error("refusing fix execution: job frontmatter mode is not execute or autonomous");
}
if (process.env.CLOWNFISH_ALLOW_EXECUTE !== "1") {
  throw new Error("refusing fix execution: CLOWNFISH_ALLOW_EXECUTE must be 1");
}
if (process.env.CLOWNFISH_ALLOW_FIX_PR !== "1") {
  throw new Error("refusing fix execution: CLOWNFISH_ALLOW_FIX_PR must be 1");
}
if (!job.frontmatter.allowed_actions.includes("fix") || !job.frontmatter.allowed_actions.includes("raise_pr")) {
  throw new Error("refusing fix execution: job must allow fix and raise_pr");
}
if ((job.frontmatter.blocked_actions ?? []).includes("fix") || job.frontmatter.allow_fix_pr !== true) {
  throw new Error("refusing fix execution: fix is blocked by job frontmatter");
}

const resultPath = resultPathArg ? path.resolve(resultPathArg) : findLatestResultPath();
const result = JSON.parse(fs.readFileSync(resultPath, "utf8"));
if (result.repo !== job.frontmatter.repo) {
  throw new Error(`result repo ${result.repo} does not match job repo ${job.frontmatter.repo}`);
}
if (result.cluster_id !== job.frontmatter.cluster_id) {
  throw new Error(`result cluster ${result.cluster_id} does not match job cluster ${job.frontmatter.cluster_id}`);
}
if (result.mode !== job.frontmatter.mode) {
  throw new Error(`result mode ${result.mode} does not match job mode ${job.frontmatter.mode}`);
}

const rawFixArtifact = result.fix_artifact;
const executableFixArtifact = executableReplacementFixArtifact(rawFixArtifact, result);
const promotedReplacement = executableFixArtifact !== rawFixArtifact;
const plannedFixActions = (result.actions ?? []).filter((action) => isExecutableFixAction(action, promotedReplacement));
const report = {
  repo: result.repo,
  cluster_id: result.cluster_id,
  dry_run: dryRun,
  result_path: path.relative(repoRoot(), resultPath),
  executed_at: new Date().toISOString(),
  policy_override: promotedReplacement
    ? "promoted needs_human uneditable-source fix artifact to replace_uneditable_branch"
    : null,
  actions: [],
};

if (plannedFixActions.length === 0) {
  report.status = "skipped";
  report.reason = "no planned fix actions";
  writeReport(report, resultPath);
  process.exit(0);
}

const repairStrategy = String(executableFixArtifact?.repair_strategy ?? "");
if (NON_EXECUTABLE_REPAIR_STRATEGIES.has(repairStrategy)) {
  report.status = "skipped";
  report.reason = `fix_artifact.repair_strategy ${repairStrategy} is not executable`;
  report.actions.push({
    action: "execute_fix",
    status: "skipped",
    repair_strategy: repairStrategy,
    reason: "worker marked the fix path as non-executable; closure actions may still apply",
  });
  writeReport(report, resultPath);
  process.exit(0);
}

const fixArtifact = validateFixArtifact(executableFixArtifact);
const securityBlock = validateFixSecurityScope({ job, resultPath, fixArtifact, plannedFixActions });
if (securityBlock) {
  report.status = "skipped";
  report.reason = securityBlock.reason;
  report.actions.push({
    action: "execute_fix",
    status: "skipped",
    repair_strategy: fixArtifact.repair_strategy,
    reason: securityBlock.reason,
    evidence: securityBlock.evidence,
  });
  writeReport(report, resultPath);
  process.exit(0);
}

workRoot =
  typeof args["work-dir"] === "string"
    ? path.resolve(args["work-dir"])
    : fs.mkdtempSync(path.join(os.tmpdir(), "projectclownfish-fix-"));
targetDir =
  typeof args["target-dir"] === "string"
    ? path.resolve(args["target-dir"])
    : path.join(workRoot, result.repo.replace("/", "-"));
fs.mkdirSync(workRoot, { recursive: true });

ensureTargetCheckout(result.repo, targetDir);
setupGitIdentity(targetDir);

const writePreflight = runCodexWritePreflight();
report.preflight = writePreflight;
if (writePreflight.status === "blocked") {
  report.status = "blocked";
  report.reason = writePreflight.reason;
  report.actions.push({
    action: "execute_fix",
    status: "blocked",
    repair_strategy: fixArtifact.repair_strategy,
    reason: writePreflight.reason,
    evidence: writePreflight.evidence,
  });
  writeReport(report, resultPath);
  process.exit(0);
}

let outcome;
try {
  if (fixArtifact.repair_strategy === "repair_contributor_branch") {
    try {
      outcome = executeRepairBranch({ fixArtifact, targetDir });
    } catch (error) {
      report.actions.push({
        action: "repair_contributor_branch",
        status: "failed",
        reason: error.message,
      });
      outcome = executeReplacementBranch({ fixArtifact, targetDir, supersedeSources: true, fallbackReason: error.message });
    }
  } else {
    outcome = executeReplacementBranch({
      fixArtifact,
      targetDir,
      supersedeSources: fixArtifact.repair_strategy === "replace_uneditable_branch",
    });
  }
} catch (error) {
  if (!isBlockedFixError(error)) throw error;
  outcome = {
    action: "execute_fix",
    status: "blocked",
    repair_strategy: fixArtifact.repair_strategy,
    reason: error.message,
  };
}

report.status = outcome.status;
if (outcome.reason && !report.reason) report.reason = outcome.reason;
report.actions.push(outcome);
writeReport(report, resultPath);

function isBlockedFixError(error) {
  return /Codex produced no target repo changes|Codex \/review did not pass|Codex (?:fix worker|review-fix worker|\/review) timed out|Codex (?:fix worker|review-fix worker|\/review) failed|validation command failed/i.test(
    String(error?.message ?? error),
  );
}

function isExecutableFixAction(action, promotedReplacement) {
  if (!FIX_ACTIONS.has(String(action.action ?? ""))) return false;
  if (action.status === "planned") return true;
  if (!promotedReplacement || action.status !== "blocked") return false;
  return ["fix_needed", "build_fix_artifact", "open_fix_pr"].includes(String(action.action ?? ""));
}

function executableReplacementFixArtifact(fixArtifact, workerResult) {
  if (!shouldPromoteNeedsHumanReplacement(fixArtifact, workerResult)) return fixArtifact;
  return {
    ...fixArtifact,
    repair_strategy: "replace_uneditable_branch",
    branch_update_blockers: uniqueStrings([
      ...(fixArtifact.branch_update_blockers ?? []),
      "ProjectClownfish policy: useful uneditable or unsafe source PRs are replaced with a narrow credited PR when fix execution is explicitly enabled.",
    ]),
    credit_notes: uniqueStrings([
      ...(fixArtifact.credit_notes ?? []),
      ...fixArtifact.source_prs.map((source) => `Replacement preserves source PR credit: ${source}`),
    ]),
  };
}

function shouldPromoteNeedsHumanReplacement(fixArtifact, workerResult) {
  if (!fixArtifact || typeof fixArtifact !== "object") return false;
  if (fixArtifact.repair_strategy !== "needs_human") return false;
  if (!Array.isArray(fixArtifact.source_prs) || fixArtifact.source_prs.length === 0) return false;
  if (!fixArtifact.source_prs.every((source) => parsePullRequestUrl(source)?.repo === workerResult.repo)) return false;

  const text = [
    fixArtifact.summary,
    fixArtifact.pr_body,
    ...(fixArtifact.branch_update_blockers ?? []),
    ...(fixArtifact.credit_notes ?? []),
    ...(workerResult.needs_human ?? []),
    ...(workerResult.actions ?? []).map((action) => `${action.action ?? ""} ${action.status ?? ""} ${action.reason ?? ""}`),
  ].join("\n");
  const hasReplacementDecision = /replace(?:ment)?(?: PR| fix| path)?|open a replacement|cannot safely update/i.test(text);
  const hasUneditableOrUnsafeSource =
    /maintainer_can_modify\s*=\s*false|uneditable|cannot safely update|branch is unsafe|draft|mergeability unknown|checks? (?:are )?(?:skipped|failing)/i.test(
      text,
    );
  const hasBlockedFixAction = (workerResult.actions ?? []).some(
    (action) =>
      ["fix_needed", "build_fix_artifact", "open_fix_pr"].includes(String(action.action ?? "")) &&
      action.status === "blocked",
  );
  return hasReplacementDecision && hasUneditableOrUnsafeSource && hasBlockedFixAction;
}

function executeRepairBranch({ fixArtifact, targetDir }) {
  const sourcePr = firstSourcePullRequest(fixArtifact);
  const pull = fetchPullRequest(sourcePr.number);
  if (pull.state !== "open") throw new Error(`source PR #${sourcePr.number} is ${pull.state}`);
  if (pull.maintainer_can_modify !== true) throw new Error(`source PR #${sourcePr.number} has maintainer_can_modify=false`);
  if (!pull.head?.repo?.full_name || !pull.head?.ref) throw new Error(`source PR #${sourcePr.number} is missing head repo/ref`);

  const branch = safeBranchName(`projectclownfish/repair-${result.cluster_id}-${sourcePr.number}`);
  run("git", ["fetch", `https://github.com/${pull.head.repo.full_name}.git`, `${pull.head.ref}:${branch}`], { cwd: targetDir });
  run("git", ["checkout", branch], { cwd: targetDir });
  prepareTargetToolchain(targetDir);

  const prep = editValidatePrepareMerge({ fixArtifact, targetDir, branch, mode: "repair" });
  prep.merge_preflight.target = `#${sourcePr.number}`;
  if (dryRun) {
    return {
      action: "repair_contributor_branch",
      status: "planned",
      target: sourcePr.url,
      commit: prep.commit,
      merge_preflight: prep.merge_preflight,
    };
  }

  ghAuthSetupGit(targetDir);
  run("git", ["push", `https://github.com/${pull.head.repo.full_name}.git`, `HEAD:${pull.head.ref}`], { cwd: targetDir });
  const threadResolution = prepareReviewThreadsForMerge({ repo: result.repo, number: sourcePr.number, targetDir });
  const comment = [
    "ProjectClownfish pushed a narrow repair to this branch so the original contributor path can stay canonical.",
    "",
    `Source PR: ${sourcePr.url}`,
    `Validation: ${fixArtifact.validation_commands.join("; ")}`,
    "Contributor credit is preserved in the branch history and PR context.",
  ].join("\n");
  run("gh", ["pr", "comment", String(sourcePr.number), "--repo", result.repo, "--body", comment], { cwd: targetDir, env: ghEnv() });
  return {
    action: "repair_contributor_branch",
    status: "pushed",
    target: sourcePr.url,
    head_repo: pull.head.repo.full_name,
    head_ref: pull.head.ref,
    commit: prep.commit,
    merge_preflight: prep.merge_preflight,
    review_threads: threadResolution,
  };
}

function executeReplacementBranch({ fixArtifact, targetDir, supersedeSources, fallbackReason }) {
  const baseBranch = String(process.env.CLOWNFISH_FIX_BASE_BRANCH ?? DEFAULT_BASE_BRANCH);
  run("git", ["fetch", "origin", baseBranch], { cwd: targetDir });
  const branch = replacementBranchName(result.cluster_id);
  const branchState = checkoutRecoverableReplacementBranch({ targetDir, branch, baseBranch });
  if (branchState.resumed) rebaseRecoverableReplacementBranch({ targetDir, branch, baseBranch });
  prepareTargetToolchain(targetDir);

  if (!dryRun) ghAuthSetupGit(targetDir);
  const prep = editValidatePrepareMerge({
    fixArtifact,
    targetDir,
    branch,
    mode: "replacement",
    fallbackReason,
    baseBranch,
    allowExistingChanges: branchState.resumed && branchHasBaseDiff({ targetDir, baseBranch }),
    pushCheckpoint: dryRun ? null : () => pushRecoverableBranch({ targetDir, branch }),
  });
  const body = replacementPrBody(fixArtifact, fallbackReason);
  if (dryRun) {
    return {
      action: "open_fix_pr",
      status: "planned",
      branch,
      resumed_branch: branchState.resumed,
      commit: prep.commit,
      checkpoint_commits: prep.checkpoint_commits,
      merge_preflight: prep.merge_preflight,
      supersede_sources: supersedeSources ? fixArtifact.source_prs ?? [] : [],
    };
  }

  run("git", ["push", "--force-with-lease", "origin", `HEAD:${branch}`], { cwd: targetDir });
  const bodyPath = path.join(workRoot, "replacement-pr-body.md");
  fs.writeFileSync(bodyPath, body);
  const prUrl =
    findOpenPullRequestForBranch(branch, targetDir) ||
    run(
      "gh",
      ["pr", "create", "--repo", result.repo, "--base", baseBranch, "--head", branch, "--title", fixArtifact.pr_title, "--body-file", bodyPath],
      { cwd: targetDir, env: ghEnv() },
    ).trim();
  const prNumber = pullRequestNumberFromUrl(prUrl);
  if (prNumber) prep.merge_preflight.target = `#${prNumber}`;
  const threadResolution = prNumber
    ? prepareReviewThreadsForMerge({ repo: result.repo, number: prNumber, targetDir })
    : { status: "blocked", reason: "replacement PR URL did not include a PR number" };

  const supersededSources = supersedeSources ? supersededReplacementSources(fixArtifact) : [];
  if (supersededSources.length > 0) {
    for (const source of supersededSources) {
      const parsed = parsePullRequestUrl(source);
      if (!parsed || parsed.repo !== result.repo) continue;
      const comment = [
        "ProjectClownfish could not safely update this branch, so it opened a narrow replacement PR instead.",
        "",
        `Replacement PR: ${prUrl}`,
        `Source PR: ${source}`,
        "Contributor credit is preserved in the replacement PR body and changelog plan.",
      ].join("\n");
      run("gh", ["pr", "comment", String(parsed.number), "--repo", result.repo, "--body", comment], {
        cwd: targetDir,
        env: ghEnv(),
      });
      run("gh", ["pr", "close", String(parsed.number), "--repo", result.repo], { cwd: targetDir, env: ghEnv() });
    }
  }

  return {
    action: "open_fix_pr",
    status: "opened",
    pr_url: prUrl,
    branch,
    resumed_branch: branchState.resumed,
    commit: prep.commit,
    checkpoint_commits: prep.checkpoint_commits,
    merge_preflight: prep.merge_preflight,
    review_threads: threadResolution,
    superseded_sources: supersededSources,
  };
}

function editValidatePrepareMerge({
  fixArtifact,
  targetDir,
  branch,
  mode,
  fallbackReason,
  baseBranch = DEFAULT_BASE_BRANCH,
  allowExistingChanges = false,
  pushCheckpoint = null,
}) {
  let producedChanges = allowExistingChanges;
  let previousSummary = "";
  const checkpointCommits = [];
  const repositoryContext = buildRepositoryContext({ fixArtifact, targetDir });
  if (!producedChanges) {
    for (let attempt = 1; attempt <= maxEditAttempts; attempt += 1) {
      const prompt = buildFixPrompt({
        fixArtifact,
        branch,
        mode,
        fallbackReason,
        attempt,
        previousNoDiff: attempt > 1,
        previousSummary,
        repositoryContext,
      });
      const summaryPath = path.join(workRoot, `${mode}-codex-summary-${attempt}.md`);
      const codexResult = spawnSync(
        "codex",
        [
          "exec",
          "--cd",
          targetDir,
          "--model",
          model,
          "--sandbox",
          codexWriteSandbox,
          ...codexWriteSandboxConfigArgs(),
          "-c",
          'approval_policy="never"',
          "-c",
          `model_reasoning_effort=${JSON.stringify(codexReasoningEffort)}`,
          "--output-last-message",
          summaryPath,
          "--ephemeral",
          "--json",
          "-",
        ],
        {
          cwd: targetDir,
          input: prompt,
          encoding: "utf8",
          env: codexEnv(),
          timeout: codexTimeoutMs,
        },
      );
      fs.writeFileSync(path.join(workRoot, `${mode}-codex-${attempt}.jsonl`), codexResult.stdout ?? "");
      if (codexResult.stderr) fs.writeFileSync(path.join(workRoot, `${mode}-codex-${attempt}.stderr.log`), codexResult.stderr);
      if (codexResult.error?.code === "ETIMEDOUT") {
        throw new Error(`Codex fix worker timed out after ${codexTimeoutMs}ms`);
      }
      if (codexResult.status !== 0) {
        throw new Error(codexResult.stderr || codexResult.stdout || "Codex fix worker failed");
      }

      producedChanges = Boolean(run("git", ["status", "--porcelain"], { cwd: targetDir }).trim());
      if (producedChanges) break;
      previousSummary = readTextIfExists(summaryPath).trim();
    }
  }
  if (!producedChanges) {
    const suffix = previousSummary ? ` Last Codex summary: ${compactText(previousSummary, 360)}` : "";
    throw new Error(`Codex produced no target repo changes after ${maxEditAttempts} edit attempt(s).${suffix}`);
  }

  const firstCheckpoint = commitCheckpointIfNeeded({
    targetDir,
    message: fixArtifact.pr_title,
  });
  if (firstCheckpoint) {
    checkpointCommits.push(firstCheckpoint);
    pushCheckpoint?.();
  }

  const codexReview = validateAndReviewLoop({
    fixArtifact,
    targetDir,
    mode,
    baseBranch,
    onReviewFix: (attempt) => {
      const checkpoint = commitCheckpointIfNeeded({
        targetDir,
        message: `fix(clownfish): address review for ${result.cluster_id} (${attempt})`,
      });
      if (checkpoint) {
        checkpointCommits.push(checkpoint);
        pushCheckpoint?.();
      }
    },
  });
  const finalCheckpoint = commitCheckpointIfNeeded({
    targetDir,
    message: `fix(clownfish): finalize ${result.cluster_id}`,
  });
  if (finalCheckpoint) {
    checkpointCommits.push(finalCheckpoint);
    pushCheckpoint?.();
  }
  const commit = run("git", ["rev-parse", "HEAD"], { cwd: targetDir }).trim();
  return {
    commit,
    checkpoint_commits: checkpointCommits,
    merge_preflight: buildMergePreflight({ fixArtifact, codexReview }),
  };
}

function buildFixPrompt({
  fixArtifact,
  branch,
  mode,
  fallbackReason,
  attempt,
  previousNoDiff,
  previousSummary,
  repositoryContext,
}) {
  return [
    "You are editing the target repository for ProjectClownfish.",
    "",
    "Rules:",
    "- this is a writable checkout; make concrete file edits before returning;",
    "- make the narrowest code change that satisfies the fix artifact;",
    "- start by inspecting the repository paths below with rg/git ls-files/sed;",
    "- if likely_files are stale, missing, or glob-like, discover the real nearby files and edit those;",
    "- preserve contributor credit in changelog/docs when the fix is user-facing;",
    "- address review-bot concerns named in the artifact;",
    "- resolve actionable human review comments, bot comments, and requested changes named in the artifact;",
    "- prepare the PR so it can pass the ProjectClownfish merge_preflight gate;",
    "- do not commit, push, open PRs, close PRs, or call gh;",
    "- ProjectClownfish will checkpoint and push your edits to the recovery branch after you return;",
    "- do not inspect or print environment variables, credentials, tokens, or secrets;",
    "- do not change auth, approval, sandbox, or trust-boundary semantics unless the artifact explicitly asks for that boundary change;",
    "- exec-adjacent bugs are allowed when the fix is ordinary correctness or hardening and does not redefine the security boundary;",
    "- before returning, verify `git status --porcelain` would show changed files.",
    "",
    `Mode: ${mode}`,
    `Branch: ${branch}`,
    `Edit attempt: ${attempt ?? 1} of ${maxEditAttempts}`,
    previousNoDiff
      ? "Previous attempt produced no target repo diff. This time make the smallest concrete code/test change that satisfies the artifact; do not return analysis only."
      : "",
    previousSummary ? `Previous no-diff summary: ${compactText(previousSummary, 1200)}` : "",
    fallbackReason ? `Fallback reason: ${fallbackReason}` : "",
    "",
    "Repository discovery context:",
    "```text",
    repositoryContext,
    "```",
    "",
    "Fix artifact:",
    "```json",
    JSON.stringify(fixArtifact, null, 2),
    "```",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildRepositoryContext({ fixArtifact, targetDir }) {
  const files = run("git", ["ls-files"], { cwd: targetDir })
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const scoredCandidates = scoreRepositoryFiles({ files, fixArtifact }).slice(0, 80);
  const candidates = scoredCandidates.map((entry) => `${entry.file} (${entry.score})`);
  const snippets = buildRepositorySnippets({ targetDir, candidates: scoredCandidates.slice(0, 12), fixArtifact });
  const packageScripts = readPackageScripts(targetDir);
  return [
    `candidate_files (${candidates.length}):`,
    ...(candidates.length > 0 ? candidates : ["none matched; use rg across the repo to find the real implementation files"]),
    "",
    "candidate_file_excerpts:",
    snippets || "none; inspect candidate files directly before editing",
    "",
    `validation_commands: ${(fixArtifact.validation_commands ?? []).join(" ; ")}`,
    `package_scripts: ${packageScripts.join(", ") || "none"}`,
  ].join("\n");
}

function buildRepositorySnippets({ targetDir, candidates, fixArtifact }) {
  const tokens = discoveryTokens(fixArtifact).slice(0, 40);
  const out = [];
  for (const candidate of candidates) {
    const pathname = path.join(targetDir, candidate.file);
    if (!fs.existsSync(pathname)) continue;
    const stat = fs.statSync(pathname);
    if (!stat.isFile() || stat.size > 220_000) continue;
    const content = fs.readFileSync(pathname, "utf8");
    const excerpt = focusedFileExcerpt(content, tokens);
    if (!excerpt) continue;
    out.push(`--- ${candidate.file} ---\n${excerpt}`);
    if (out.join("\n\n").length > 18_000) break;
  }
  return out.join("\n\n").slice(0, 18_000);
}

function focusedFileExcerpt(content, tokens) {
  const lines = content.split(/\r?\n/);
  const matched = new Set();
  const lowerTokens = tokens.map((token) => token.toLowerCase()).filter((token) => token.length >= 4);
  for (let index = 0; index < lines.length; index += 1) {
    const lower = lines[index].toLowerCase();
    if (lowerTokens.some((token) => lower.includes(token))) {
      for (let line = Math.max(0, index - 8); line <= Math.min(lines.length - 1, index + 18); line += 1) {
        matched.add(line);
      }
    }
  }
  const selected = matched.size > 0 ? [...matched].sort((a, b) => a - b) : lines.map((_, index) => index).slice(0, 80);
  const rendered = [];
  let previous = -2;
  for (const line of selected) {
    if (line !== previous + 1) rendered.push("...");
    rendered.push(`${line + 1}: ${lines[line]}`);
    previous = line;
    if (rendered.join("\n").length > 3_200) break;
  }
  return rendered.join("\n");
}

function scoreRepositoryFiles({ files, fixArtifact }) {
  const likelyFiles = (fixArtifact.likely_files ?? []).map((entry) => String(entry).trim()).filter(Boolean);
  const exactLikely = new Set(likelyFiles.filter((entry) => !entry.includes("*")));
  const literalHints = likelyFiles.map(literalPathHint).filter((entry) => entry.length >= 4);
  const tokens = discoveryTokens(fixArtifact);
  const out = [];
  for (const file of files) {
    const lower = file.toLowerCase();
    let score = 0;
    if (exactLikely.has(file)) score += 100;
    for (const hint of literalHints) {
      if (lower.includes(hint)) score += 15;
    }
    for (const token of tokens) {
      if (lower.includes(token)) score += 3;
    }
    if (/\.(test|spec)\.[cm]?[jt]sx?$/i.test(file)) score += 2;
    if (/\.(ts|tsx|js|jsx|mjs|cjs|md|mdx|json)$/i.test(file)) score += 1;
    if (score > 0) out.push({ file, score });
  }
  out.sort((left, right) => right.score - left.score || left.file.localeCompare(right.file));
  return out;
}

function literalPathHint(value) {
  return String(value)
    .toLowerCase()
    .replace(/\*\*?.*$/, "")
    .replace(/\/+$/, "");
}

function discoveryTokens(fixArtifact) {
  const common = new Set([
    "support",
    "supported",
    "current",
    "existing",
    "validation",
    "commands",
    "summary",
    "scope",
    "error",
    "errors",
  ]);
  const text = [
    fixArtifact.summary,
    fixArtifact.pr_title,
    fixArtifact.pr_body,
    ...(fixArtifact.affected_surfaces ?? []),
    ...(fixArtifact.likely_files ?? []),
  ].join("\n");
  const tokens = new Set();
  for (const match of text.toLowerCase().matchAll(/[a-z][a-z0-9_-]{3,}/g)) {
    const token = match[0].replace(/[-_]/g, "");
    if (token.length >= 4 && !common.has(token)) tokens.add(token);
  }
  return [...tokens].slice(0, 80);
}

function readPackageScripts(targetDir) {
  const packagePath = path.join(targetDir, "package.json");
  if (!fs.existsSync(packagePath)) return [];
  try {
    const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
    return Object.keys(pkg.scripts ?? {}).sort().slice(0, 80);
  } catch {
    return [];
  }
}

function readTextIfExists(filePath) {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";
}

function compactText(value, maxLength) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  return text.length > maxLength ? `${text.slice(0, maxLength - 3)}...` : text;
}

function runCodexWritePreflight() {
  if (skipCodexWritePreflight) {
    return {
      status: "skipped",
      reason: "CLOWNFISH_SKIP_CODEX_WRITE_PREFLIGHT=1",
      sandbox: codexWriteSandbox,
    };
  }

  const smokeDir = fs.mkdtempSync(path.join(workRoot, "codex-write-preflight-"));
  const summaryPath = path.join(workRoot, "codex-write-preflight-summary.md");
  const expectedPath = path.join(smokeDir, "preflight.txt");
  const prompt = [
    "You are running a ProjectClownfish Codex write preflight.",
    "",
    "Create or overwrite `preflight.txt` in the current directory with exactly:",
    "",
    "ok",
    "",
    "Do not inspect environment variables, credentials, tokens, or secrets.",
    "Do not call gh, git push, open PRs, or mutate anything outside the current directory.",
  ].join("\n");
  const child = spawnSync(
    "codex",
    [
      "exec",
      "--cd",
      smokeDir,
      "--model",
      model,
      "--sandbox",
      codexWriteSandbox,
      ...codexWriteSandboxConfigArgs(),
      "-c",
      'approval_policy="never"',
      "-c",
      `model_reasoning_effort=${JSON.stringify(codexReasoningEffort)}`,
      "--output-last-message",
      summaryPath,
      "--ephemeral",
      "--json",
      "--skip-git-repo-check",
      "-",
    ],
    {
      cwd: smokeDir,
      input: prompt,
      encoding: "utf8",
      env: codexEnv(),
      timeout: codexPreflightTimeoutMs,
      maxBuffer: 16 * 1024 * 1024,
    },
  );
  fs.writeFileSync(path.join(workRoot, "codex-write-preflight.jsonl"), child.stdout ?? "");
  if (child.stderr) fs.writeFileSync(path.join(workRoot, "codex-write-preflight.stderr.log"), child.stderr);

  if (child.error?.code === "ETIMEDOUT") {
    return blockedCodexWritePreflight(
      `Codex write preflight timed out after ${codexPreflightTimeoutMs}ms`,
      child.stderr || child.stdout,
    );
  }
  if (child.status !== 0) {
    return blockedCodexWritePreflight("Codex write preflight failed", child.stderr || child.stdout);
  }
  const written = readTextIfExists(expectedPath).trim();
  if (written !== "ok") {
    return blockedCodexWritePreflight(
      "Codex write preflight did not create the expected file",
      readTextIfExists(summaryPath) || child.stderr || child.stdout,
    );
  }
  return {
    status: "passed",
    sandbox: codexWriteSandbox,
    timeout_ms: codexPreflightTimeoutMs,
    evidence: [`Codex wrote ${path.basename(expectedPath)} in an isolated preflight directory.`],
  };
}

function blockedCodexWritePreflight(reason, detail) {
  const failureClass = classifyCodexFailure(detail);
  return {
    status: "blocked",
    reason: `${reason}: ${compactText(detail || "no Codex output", 900)}`,
    failure_class: failureClass,
    sandbox: codexWriteSandbox,
    timeout_ms: codexPreflightTimeoutMs,
    evidence: [`Codex write preflight failed before target repo mutation; class=${failureClass}`],
  };
}

function classifyCodexFailure(detail) {
  const text = String(detail ?? "");
  if (/bwrap|loopback|uid map|sandbox wrapper|sandbox startup|operation not permitted/i.test(text)) {
    return "sandbox_unavailable";
  }
  if (/auth|login|api key|401|403|unauthorized|forbidden/i.test(text)) {
    return "auth_unavailable";
  }
  return "codex_unavailable";
}

function codexWriteSandboxConfigArgs() {
  return codexWorkspaceSandboxConfigArgs(codexWriteSandbox, codexWriteNetworkAccess);
}

function codexReviewSandboxConfigArgs() {
  return codexWorkspaceSandboxConfigArgs(codexReviewSandbox, codexReviewNetworkAccess);
}

function codexWorkspaceSandboxConfigArgs(sandbox, networkAccess) {
  if (sandbox !== "workspace-write") return [];
  return ["-c", `sandbox_workspace_write.network_access=${networkAccess ? "true" : "false"}`];
}

function parseBooleanEnv(value, fallback) {
  if (value == null || value === "") return fallback;
  if (/^(1|true|yes|on)$/i.test(String(value))) return true;
  if (/^(0|false|no|off)$/i.test(String(value))) return false;
  return fallback;
}

function validateAndReviewLoop({ fixArtifact, targetDir, mode, baseBranch = DEFAULT_BASE_BRANCH, onReviewFix = null }) {
  let lastReview = null;
  let validationCommands = [];
  for (let attempt = 1; attempt <= maxReviewAttempts; attempt += 1) {
    validationCommands = runAllowedValidationCommands(fixArtifact.validation_commands, targetDir, baseBranch);
    runDiffCheck({ targetDir, baseBranch });
    lastReview = runCodexReview({ fixArtifact, targetDir, mode, attempt, baseBranch, validationCommands });
    lastReview.validation_commands_run = validationCommands;
    if (isCleanCodexReview(lastReview)) return lastReview;
    if (attempt === maxReviewAttempts) break;
    runCodexReviewFix({ fixArtifact, targetDir, mode, review: lastReview, attempt });
    onReviewFix?.(attempt);
  }
  const summary =
    lastReview?.summary ??
    (Array.isArray(lastReview?.findings) ? lastReview.findings.map((finding) => finding.summary ?? finding).join("; ") : "unknown");
  throw new Error(`Codex /review did not pass after ${maxReviewAttempts} attempt(s): ${summary}`);
}

function runDiffCheck({ targetDir, baseBranch }) {
  run("git", ["diff", "--check", `origin/${baseBranch}...HEAD`], { cwd: targetDir });
  run("git", ["diff", "--check"], { cwd: targetDir });
}

function runCodexReview({ fixArtifact, targetDir, mode, attempt, baseBranch = DEFAULT_BASE_BRANCH, validationCommands = [] }) {
  const outputPath = path.join(workRoot, `${mode}-codex-review-${attempt}.json`);
  const schemaPath = codexReviewSchemaPath();
  const prompt = [
    "/review",
    "",
    `Review the current ProjectClownfish fix branch diff against origin/${baseBranch} before it can be merged.`,
    "",
    "Required checks:",
    "- security-sensitive issues are resolved or absent;",
    "- human PR/review comments from the artifact are addressed;",
    "- review-bot comments from Greptile, Codex, Asile, CodeRabbit, Copilot, and similar bots are addressed;",
    "- code is narrow, safe, and merge-ready;",
    "- validation commands are sufficient for the changed surface.",
    "",
    "Validation policy:",
    "- `pnpm check:changed` plus git diff checks is sufficient local proof for OpenClaw changed-surface fixes;",
    "- do not require full CI, full test suites, e2e/live/docker lanes, or unrelated flaky main checks to pass;",
    "- block only when the changed-lane proof fails or the current diff plausibly caused the failure.",
    "",
    `Validation commands actually run: ${validationCommands.join("; ") || "none"}`,
    `Original artifact validation commands: ${(fixArtifact.validation_commands ?? []).join("; ")}`,
    "",
    "Return JSON only. If anything blocks merge, include actionable findings.",
    "",
    "Fix artifact:",
    "```json",
    JSON.stringify(fixArtifact, null, 2),
    "```",
  ].join("\n");
  const child = spawnSync(
    "codex",
    [
      "exec",
      "--cd",
      targetDir,
      "--model",
      model,
      "--sandbox",
      codexReviewSandbox,
      ...codexReviewSandboxConfigArgs(),
      "-c",
      'approval_policy="never"',
      "-c",
      `model_reasoning_effort=${JSON.stringify(codexReasoningEffort)}`,
      "--output-schema",
      schemaPath,
      "--output-last-message",
      outputPath,
      "--ephemeral",
      "--json",
      "-",
    ],
    {
      cwd: targetDir,
      input: prompt,
      encoding: "utf8",
      env: codexEnv(),
      timeout: codexTimeoutMs,
    },
  );
  fs.writeFileSync(path.join(workRoot, `${mode}-codex-review-${attempt}.jsonl`), child.stdout ?? "");
  if (child.stderr) fs.writeFileSync(path.join(workRoot, `${mode}-codex-review-${attempt}.stderr.log`), child.stderr);
  if (child.error?.code === "ETIMEDOUT") throw new Error(`Codex /review timed out after ${codexTimeoutMs}ms`);
  if (child.status !== 0) throw new Error(child.stderr || child.stdout || "Codex /review failed");
  if (!fs.existsSync(outputPath)) {
    const stdout = compactText(child.stdout, 800);
    const stderr = compactText(child.stderr, 800);
    throw new Error(
      `Codex /review failed: structured output was not written to ${path.basename(outputPath)}; stdout=${stdout || "empty"}; stderr=${stderr || "empty"}`,
    );
  }
  try {
    return JSON.parse(fs.readFileSync(outputPath, "utf8"));
  } catch (error) {
    throw new Error(`Codex /review failed: invalid structured output in ${path.basename(outputPath)}: ${error.message}`);
  }
}

function runCodexReviewFix({ fixArtifact, targetDir, mode, review, attempt }) {
  const prompt = [
    "Address every actionable finding from Codex /review.",
    "",
    "Rules:",
    "- keep the patch narrow;",
    "- do not commit, push, open PRs, close PRs, or call gh;",
    "- rerun is handled by ProjectClownFish after your edits;",
    "- if a finding is false-positive, adjust comments/tests only when that makes the proof clearer.",
    "",
    "Codex /review findings:",
    "```json",
    JSON.stringify(review, null, 2),
    "```",
    "",
    "Fix artifact:",
    "```json",
    JSON.stringify(fixArtifact, null, 2),
    "```",
  ].join("\n");
  const child = spawnSync(
    "codex",
    [
      "exec",
      "--cd",
      targetDir,
      "--model",
      model,
      "--sandbox",
      codexWriteSandbox,
      ...codexWriteSandboxConfigArgs(),
      "-c",
      'approval_policy="never"',
      "-c",
      `model_reasoning_effort=${JSON.stringify(codexReasoningEffort)}`,
      "--output-last-message",
      path.join(workRoot, `${mode}-codex-review-fix-${attempt}.md`),
      "--ephemeral",
      "--json",
      "-",
    ],
    {
      cwd: targetDir,
      input: prompt,
      encoding: "utf8",
      env: codexEnv(),
      timeout: codexTimeoutMs,
    },
  );
  fs.writeFileSync(path.join(workRoot, `${mode}-codex-review-fix-${attempt}.jsonl`), child.stdout ?? "");
  if (child.stderr) fs.writeFileSync(path.join(workRoot, `${mode}-codex-review-fix-${attempt}.stderr.log`), child.stderr);
  if (child.error?.code === "ETIMEDOUT") throw new Error(`Codex review-fix worker timed out after ${codexTimeoutMs}ms`);
  if (child.status !== 0) throw new Error(child.stderr || child.stdout || "Codex review-fix worker failed");
}

function isCleanCodexReview(review) {
  const status = String(review?.status ?? "").toLowerCase();
  const findings = Array.isArray(review?.findings) ? review.findings : [];
  return ["passed", "clean"].includes(status) && findings.length === 0 && review?.findings_addressed === true;
}

function buildMergePreflight({ fixArtifact, codexReview }) {
  const validationCommands = codexReview.validation_commands_run?.length
    ? codexReview.validation_commands_run
    : fixArtifact.validation_commands;
  return {
    target: null,
    security_status: "cleared",
    security_evidence: ["ProjectClownfish scoped security scan found no security-sensitive fix target, source PR, or fix artifact scope."],
    comments_status: "resolved",
    comments_evidence: ["Agentic fix pass addressed human PR/review comments named in the fix artifact."],
    bot_comments_status: "resolved",
    bot_comments_evidence: ["Agentic fix pass addressed Greptile/Codex/Asile/CodeRabbit/Copilot-style findings named in the fix artifact."],
    codex_review: {
      command: "/review",
      status: codexReview.status === "clean" ? "clean" : "passed",
      findings_addressed: true,
      evidence: codexReview.evidence?.length
        ? codexReview.evidence
        : [`Codex /review passed after agentic fix loop: ${codexReview.summary ?? "clean"}`],
    },
    validation_commands: validationCommands,
  };
}

function codexReviewSchemaPath() {
  const schemaPath = path.join(workRoot, "codex-review.schema.json");
  if (fs.existsSync(schemaPath)) return schemaPath;
  fs.writeFileSync(
    schemaPath,
    `${JSON.stringify(
      {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        type: "object",
        required: ["status", "summary", "findings", "findings_addressed", "evidence"],
        additionalProperties: false,
        properties: {
          status: { type: "string", enum: ["passed", "clean", "failed", "blocked"] },
          summary: { type: "string" },
          findings: {
            type: "array",
            items: {
              type: "object",
              required: ["severity", "summary", "evidence"],
              additionalProperties: false,
              properties: {
                severity: { type: "string", enum: ["critical", "high", "medium", "low"] },
                summary: { type: "string" },
                evidence: { type: "string" },
              },
            },
          },
          findings_addressed: { type: "boolean" },
          evidence: { type: "array", items: { type: "string" } },
        },
      },
      null,
      2,
    )}\n`,
  );
  return schemaPath;
}

function replacementPrBody(fixArtifact, fallbackReason) {
  const lines = [
    fixArtifact.pr_body.trim(),
    "",
    "ProjectClownfish replacement details:",
    `- Cluster: ${result.cluster_id}`,
    `- Source PRs: ${(fixArtifact.source_prs ?? []).join(", ") || "none"}`,
    `- Credit: ${fixArtifact.credit_notes.join("; ")}`,
    `- Validation: ${fixArtifact.validation_commands.join("; ")}`,
  ];
  if (fallbackReason) lines.push(`- Repair fallback: ${fallbackReason}`);
  return `${lines.join("\n")}\n`;
}

function supersededReplacementSources(fixArtifact) {
  if (Array.isArray(fixArtifact.supersede_source_prs) && fixArtifact.supersede_source_prs.length > 0) {
    return fixArtifact.supersede_source_prs.filter((source) => parsePullRequestUrl(source)?.repo === result.repo);
  }

  const blockerText = (fixArtifact.branch_update_blockers ?? []).join("\n");
  const directUneditableSources = (fixArtifact.source_prs ?? []).filter((source) => {
    const parsed = parsePullRequestUrl(source);
    if (!parsed || parsed.repo !== result.repo) return false;
    const sourcePattern = new RegExp(`(?:#|pull/)${parsed.number}(?!\\d)[\\s\\S]{0,220}`, "i");
    const sourceBlocker = blockerText.match(sourcePattern)?.[0] ?? "";
    return /maintainer_can_modify\s*=\s*false|uneditable|cannot safely update|branch is unsafe|mergeability unknown/i.test(
      sourceBlocker,
    );
  });
  return directUneditableSources.length > 0 ? directUneditableSources : (fixArtifact.source_prs ?? []).slice(0, 1);
}

function validateFixArtifact(fixArtifact) {
  if (!fixArtifact || typeof fixArtifact !== "object") {
    throw new Error("fix execution requires fix_artifact");
  }
  for (const key of ["summary", "pr_title", "pr_body"]) {
    if (typeof fixArtifact[key] !== "string" || !fixArtifact[key].trim()) {
      throw new Error(`fix_artifact.${key} is required`);
    }
  }
  for (const key of ["affected_surfaces", "likely_files", "linked_refs", "validation_commands", "credit_notes"]) {
    if (!Array.isArray(fixArtifact[key]) || fixArtifact[key].length === 0) {
      throw new Error(`fix_artifact.${key} must be a non-empty list`);
    }
  }
  if (typeof fixArtifact.changelog_required !== "boolean") {
    throw new Error("fix_artifact.changelog_required must be boolean");
  }
  if (!REPAIR_STRATEGIES.has(fixArtifact.repair_strategy)) {
    throw new Error("fix_artifact.repair_strategy is not executable");
  }
  if (fixArtifact.repair_strategy !== "new_fix_pr" && (!Array.isArray(fixArtifact.source_prs) || fixArtifact.source_prs.length === 0)) {
    throw new Error("repair/replacement fix_artifact must list source_prs");
  }
  return fixArtifact;
}

function validateFixSecurityScope({ job, resultPath, fixArtifact, plannedFixActions }) {
  if (job.frontmatter.security_sensitive === true) {
    return {
      reason: "job is marked security_sensitive; route to central security handling",
      evidence: ["job.frontmatter.security_sensitive=true"],
    };
  }

  const clusterPlan = readSiblingJson(resultPath, "cluster-plan.json");
  const securityRefs = new Set(
    (clusterPlan?.security_boundary?.security_sensitive_items ?? [])
      .map(normalizeLocalRef)
      .filter(Boolean),
  );

  for (const action of plannedFixActions) {
    const target = normalizeLocalRef(action.target);
    if (target && securityRefs.has(target)) {
      return {
        reason: `fix action targets security-sensitive ref ${target}`,
        evidence: [`${target} appears in cluster-plan.security_boundary.security_sensitive_items`],
      };
    }
  }

  for (const source of fixArtifact.source_prs ?? []) {
    const sourceRef = normalizeLocalRef(source);
    if (sourceRef && securityRefs.has(sourceRef)) {
      return {
        reason: `fix artifact source PR ${sourceRef} is security-sensitive`,
        evidence: [`${sourceRef} appears in cluster-plan.security_boundary.security_sensitive_items`],
      };
    }
  }

  const fixSecurityText = {
    summary: fixArtifact.summary,
    affected_surfaces: fixArtifact.affected_surfaces,
    likely_files: fixArtifact.likely_files,
    validation_commands: fixArtifact.validation_commands,
    pr_title: fixArtifact.pr_title,
    pr_body: fixArtifact.pr_body,
    credit_notes: fixArtifact.credit_notes,
    branch_update_blockers: fixArtifact.branch_update_blockers,
  };
  if (hasSecuritySignalText(fixSecurityText)) {
    return {
      reason: "fix artifact scope itself contains security-sensitive signals",
      evidence: ["security scan matched fix_artifact summary/title/body/files/validation scope"],
    };
  }

  return null;
}

function readSiblingJson(resultPath, name) {
  const file = path.join(path.dirname(resultPath), name);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function normalizeLocalRef(value) {
  const text = String(value ?? "").trim();
  if (!text) return "";
  const githubMatch = text.match(/github\.com\/[^/\s]+\/[^/\s]+\/(?:issues|pull)\/(\d+)/i);
  if (githubMatch) return `#${githubMatch[1]}`;
  const hashMatch = text.match(/^#?(\d+)$/);
  if (hashMatch) return `#${hashMatch[1]}`;
  return "";
}

function ensureTargetCheckout(repo, targetDir) {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(path.dirname(targetDir), { recursive: true });
    run("gh", ["repo", "clone", repo, targetDir, "--", "--depth=1"], { cwd: repoRoot(), env: ghEnv() });
    return;
  }
  if (!fs.existsSync(path.join(targetDir, ".git"))) {
    throw new Error(`target dir is not a git checkout: ${targetDir}`);
  }
  const status = run("git", ["status", "--porcelain"], { cwd: targetDir }).trim();
  if (status) throw new Error(`target checkout has uncommitted changes: ${targetDir}`);
}

function prepareTargetToolchain(cwd) {
  if (!installTargetDeps) return;
  const packagePath = path.join(cwd, "package.json");
  if (!fs.existsSync(packagePath)) return;

  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  const packageManager = String(packageJson.packageManager ?? "pnpm@10.33.0");
  if (!packageManager.startsWith("pnpm@")) {
    throw new Error(`unsupported target package manager: ${packageManager}`);
  }

  const validationEnv = targetValidationEnv();
  run(
    "node",
    [
      "-e",
      "const major = Number(process.versions.node.split('.')[0]); if (major < 22) { console.error(`Node ${process.version} is too old for target validation`); process.exit(1); }",
    ],
    { cwd, env: validationEnv },
  );
  run("corepack", ["enable"], { cwd, env: validationEnv });
  run("corepack", ["prepare", packageManager, "--activate"], { cwd, env: validationEnv });
  const installArgs = [
    "install",
    "--frozen-lockfile",
    "--prefer-offline",
    "--config.engine-strict=false",
    "--config.enable-pre-post-scripts=true",
  ];
  try {
    run("pnpm", installArgs, { cwd, env: validationEnv });
  } catch (error) {
    if (!/ERR_PNPM_OUTDATED_LOCKFILE/i.test(String(error.message))) throw error;
    run("pnpm", installArgs.map((arg) => (arg === "--frozen-lockfile" ? "--no-frozen-lockfile" : arg)), {
      cwd,
      env: validationEnv,
    });
    restoreTargetLockfile(cwd);
  }
}

function restoreTargetLockfile(cwd) {
  const lockfile = "pnpm-lock.yaml";
  if (!fs.existsSync(path.join(cwd, lockfile))) return;
  run("git", ["checkout", "--", lockfile], { cwd });
}

function setupGitIdentity(cwd) {
  run("git", ["config", "user.name", process.env.CLOWNFISH_GIT_USER_NAME ?? "projectclownfish"], { cwd });
  run("git", ["config", "user.email", process.env.CLOWNFISH_GIT_USER_EMAIL ?? "projectclownfish@users.noreply.github.com"], { cwd });
}

function runAllowedValidationCommands(commands, cwd, baseBranch = DEFAULT_BASE_BRANCH) {
  const validationEnv = targetValidationEnv();
  const executed = [];
  for (const command of commands) {
    const resolvedCommands = resolveAllowedValidationCommands(command, cwd, baseBranch);
    for (const parts of resolvedCommands) {
      const rendered = parts.join(" ");
      if (executed.includes(rendered)) continue;
      try {
        run(parts[0], parts.slice(1), { cwd, env: validationEnv });
        executed.push(rendered);
      } catch (error) {
        throw new Error(`validation command failed (${parts.join(" ")}): ${compactText(error.message, 1200)}`);
      }
    }
  }
  return executed;
}

function targetValidationEnv() {
  return {
    ...process.env,
    CI: process.env.CI ?? "true",
    OPENCLAW_LOCAL_CHECK: process.env.OPENCLAW_LOCAL_CHECK ?? "0",
  };
}

function resolveAllowedValidationCommands(command, cwd, baseBranch = DEFAULT_BASE_BRANCH) {
  const parts = parseAllowedValidationCommand(command);
  const scripts = readPackageScriptSet(cwd);
  if (!strictTargetValidation && scripts.has("check:changed")) {
    return [["pnpm", "check:changed"]];
  }
  if (parts[0] === "npm" && parts[1] === "run" && parts[2] === "validate") {
    if (!scripts.has("validate") && scripts.has("check:changed")) {
      return [["pnpm", "check:changed"]];
    }
  }
  if (parts[0] === "pnpm") {
    const commandStart = parts[1] === "-s" || parts[1] === "--silent" ? 2 : 1;
    const pnpmScript = parts[commandStart];
    if (isExpensivePnpmValidation(parts, commandStart)) {
      return [["pnpm", "check:changed"]];
    }
    if (pnpmScript === "vitest" && parts[commandStart + 1] === "run") {
      return normalizePathValidationCommand(["pnpm", "test:serial", ...parts.slice(commandStart + 2)], cwd, baseBranch);
    }
    if (pnpmScript === "test" || pnpmScript === "test:serial") {
      return normalizePathValidationCommand(["pnpm", pnpmScript, ...parts.slice(commandStart + 1)], cwd, baseBranch);
    }
  }
  return [parts];
}

function isExpensivePnpmValidation(parts, commandStart) {
  if (allowExpensiveValidation) return false;
  const script = String(parts[commandStart] ?? "");
  if (script === "check" || script === "test:all") return true;
  if (script === "test" || script === "test:serial") {
    return !parts.slice(commandStart + 1).some(looksLikePathArgument);
  }
  return /^(?:test:(?:e2e|live|docker|install:e2e|parallels)(?::|$)|qa:e2e$|android:test:integration$)/.test(script);
}

function normalizePathValidationCommand(parts, cwd, baseBranch = DEFAULT_BASE_BRANCH) {
  const pathArgStart = 2;
  const pathArgs = parts.slice(pathArgStart).filter(looksLikePathArgument);
  if (pathArgs.length === 0) return [parts];

  const normalized = [];
  const missing = [];
  for (const arg of pathArgs) {
    const mapped = resolveRepoPathArgument(arg, cwd);
    if (mapped) normalized.push(mapped);
    else missing.push(arg);
  }

  if (missing.length === 0) {
    return [[...parts.slice(0, pathArgStart), ...uniqueStrings(normalized)]];
  }

  const changedTests = changedTestFiles(cwd, baseBranch);
  if (changedTests.length > 0) {
    return [["pnpm", "test:serial", ...changedTests]];
  }

  const scripts = readPackageScriptSet(cwd);
  if (scripts.has("check:changed")) {
    return [["pnpm", "check:changed"]];
  }

  return [[...parts.slice(0, pathArgStart), ...uniqueStrings(normalized)]];
}

function resolveRepoPathArgument(arg, cwd) {
  const clean = String(arg ?? "").trim();
  if (!clean || clean.startsWith("-")) return clean;
  if (fs.existsSync(path.join(cwd, clean))) return clean;

  const candidates = candidateRepoPaths(clean, cwd).filter((candidate) => fs.existsSync(path.join(cwd, candidate)));
  return candidates[0] ?? "";
}

function candidateRepoPaths(filePath, cwd) {
  const out = [];
  if (filePath.startsWith("src/web/")) {
    out.push(`extensions/whatsapp/src/${filePath.slice("src/web/".length)}`);
  }
  const basename = path.basename(filePath);
  if (basename) {
    const files = gitLsFiles(cwd);
    out.push(...files.filter((file) => path.basename(file) === basename));
  }
  return uniqueStrings(out);
}

function changedTestFiles(cwd, baseBranch = DEFAULT_BASE_BRANCH) {
  return gitChangedFiles(cwd, baseBranch).filter((file) => isTestFile(file) && fs.existsSync(path.join(cwd, file)));
}

function gitChangedFiles(cwd, baseBranch = DEFAULT_BASE_BRANCH) {
  const baseRef = `origin/${baseBranch}`;
  const committed = run("git", ["diff", "--name-only", `${baseRef}...HEAD`], { cwd })
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const uncommitted = run("git", ["status", "--porcelain"], { cwd })
    .split("\n")
    .map((line) => line.trim())
    .map((line) => line.replace(/^.. /, ""))
    .map((line) => line.split(" -> ").pop())
    .filter(Boolean);
  return uniqueStrings([...committed, ...uncommitted]);
}

function gitLsFiles(cwd) {
  return run("git", ["ls-files"], { cwd })
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function looksLikePathArgument(value) {
  const text = String(value ?? "");
  return !text.startsWith("-") && (text.includes("/") || /\.(?:[cm]?[jt]sx?|json|md|yml|yaml)$/.test(text));
}

function isTestFile(value) {
  return /(?:^|\/)[^/]*(?:test|spec|e2e)\.[cm]?[jt]sx?$/.test(String(value));
}

function uniqueStrings(values) {
  return [...new Set(values.filter(Boolean))];
}

function parseAllowedValidationCommand(command) {
  const text = String(command ?? "").trim();
  if (!text) throw new Error("empty validation command");
  if (/[`$;&|<>()[\]{}*?~]/.test(text)) {
    throw new Error(`unsafe validation command: ${text}`);
  }
  const parts = text.split(/\s+/);
  if (!["pnpm", "npm", "node", "git"].includes(parts[0])) {
    throw new Error(`unsupported validation command: ${text}`);
  }
  return parts;
}

function readPackageScriptSet(cwd) {
  const packagePath = path.join(cwd, "package.json");
  if (!fs.existsSync(packagePath)) return new Set();
  try {
    const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
    return new Set(Object.keys(pkg.scripts ?? {}));
  } catch {
    return new Set();
  }
}

function firstSourcePullRequest(fixArtifact) {
  for (const source of fixArtifact.source_prs ?? []) {
    const parsed = parsePullRequestUrl(source);
    if (parsed && parsed.repo === result.repo) return parsed;
  }
  throw new Error("fix_artifact.source_prs must include a source PR in the target repo");
}

function parsePullRequestUrl(value) {
  const match = String(value ?? "").match(/^https:\/\/github\.com\/([^/\s]+\/[^/\s]+)\/pull\/(\d+)/);
  if (!match) return null;
  return { repo: match[1], number: Number(match[2]), url: `https://github.com/${match[1]}/pull/${match[2]}` };
}

function pullRequestNumberFromUrl(value) {
  const parsed = parsePullRequestUrl(value);
  return parsed?.number ?? 0;
}

function fetchPullRequest(number) {
  return JSON.parse(run("gh", ["api", `repos/${result.repo}/pulls/${number}`], { cwd: repoRoot(), env: ghEnv() }));
}

function prepareReviewThreadsForMerge({ repo, number, targetDir }) {
  const before = fetchReviewThreads(repo, number);
  if (before.hasNextPage) return { status: "blocked", reason: "too many review threads to prove resolved" };
  const unresolved = before.threads.filter((thread) => !thread.isResolved);
  if (unresolved.length === 0) return { status: "resolved", unresolved_before: 0, resolved: 0 };
  if (!resolveReviewThreads) {
    return {
      status: "blocked",
      reason: "unresolved review threads remain and CLOWNFISH_RESOLVE_REVIEW_THREADS=0",
      unresolved_before: unresolved.length,
      examples: unresolved.slice(0, 3).map((thread) => thread.url ?? thread.id),
    };
  }
  for (const thread of unresolved) {
    resolveReviewThread(thread.id, targetDir);
  }
  const after = fetchReviewThreads(repo, number);
  const remaining = after.threads.filter((thread) => !thread.isResolved);
  if (remaining.length > 0) {
    return {
      status: "blocked",
      reason: "some review threads remained unresolved after resolution attempt",
      unresolved_before: unresolved.length,
      unresolved_after: remaining.length,
      examples: remaining.slice(0, 3).map((thread) => thread.url ?? thread.id),
    };
  }
  return { status: "resolved", unresolved_before: unresolved.length, resolved: unresolved.length };
}

function fetchReviewThreads(repo, number) {
  const [owner, name] = repo.split("/");
  const query = `
    query($owner: String!, $name: String!, $number: Int!) {
      repository(owner: $owner, name: $name) {
        pullRequest(number: $number) {
          reviewThreads(first: 100) {
            pageInfo { hasNextPage }
            nodes {
              id
              isResolved
              path
              line
              comments(first: 1) {
                nodes {
                  url
                  author { login }
                  body
                }
              }
            }
          }
        }
      }
    }
  `;
  const data = JSON.parse(
    run(
      "gh",
      [
        "api",
        "graphql",
        "-f",
        `owner=${owner}`,
        "-f",
        `name=${name}`,
        "-F",
        `number=${number}`,
        "-f",
        `query=${query}`,
      ],
      { cwd: repoRoot(), env: ghEnv() },
    ),
  );
  const threads = data?.data?.repository?.pullRequest?.reviewThreads;
  return {
    hasNextPage: Boolean(threads?.pageInfo?.hasNextPage),
    threads: (threads?.nodes ?? []).map((thread) => ({
      id: thread.id,
      isResolved: Boolean(thread.isResolved),
      path: thread.path,
      line: thread.line,
      url: thread.comments?.nodes?.[0]?.url ?? null,
      author: thread.comments?.nodes?.[0]?.author?.login ?? null,
      body: thread.comments?.nodes?.[0]?.body ?? "",
    })),
  };
}

function resolveReviewThread(threadId, cwd) {
  const mutation = `
    mutation($threadId: ID!) {
      resolveReviewThread(input: {threadId: $threadId}) {
        thread { id isResolved }
      }
    }
  `;
  run("gh", ["api", "graphql", "-f", `threadId=${threadId}`, "-f", `query=${mutation}`], { cwd, env: ghEnv() });
}

function replacementBranchName(clusterId) {
  return safeBranchName(`clownfish/${clusterId}`);
}

function checkoutRecoverableReplacementBranch({ targetDir, branch, baseBranch }) {
  if (remoteBranchExists({ targetDir, branch })) {
    run("git", ["fetch", "origin", `${branch}:refs/remotes/origin/${branch}`], { cwd: targetDir });
    run("git", ["checkout", "-B", branch, `origin/${branch}`], { cwd: targetDir });
    return { resumed: true, branch };
  }
  run("git", ["checkout", "-B", branch, `origin/${baseBranch}`], { cwd: targetDir });
  return { resumed: false, branch };
}

function rebaseRecoverableReplacementBranch({ targetDir, branch, baseBranch }) {
  const baseRef = `origin/${baseBranch}`;
  if (!branchHasBaseDiff({ targetDir, baseBranch })) return;
  if (isAncestor({ targetDir, ancestor: baseRef, descendant: "HEAD" })) return;
  if (fs.existsSync(path.join(targetDir, ".git", "shallow"))) {
    run("git", ["fetch", "--unshallow", "origin"], { cwd: targetDir });
  }
  try {
    run("git", ["rebase", baseRef], { cwd: targetDir });
  } catch (error) {
    spawnSync("git", ["rebase", "--abort"], { cwd: targetDir, env: process.env, encoding: "utf8" });
    throw new Error(`resumed branch ${branch} could not rebase onto ${baseRef}: ${compactText(error.message, 1200)}`);
  }
}

function isAncestor({ targetDir, ancestor, descendant }) {
  const child = spawnSync("git", ["merge-base", "--is-ancestor", ancestor, descendant], {
    cwd: targetDir,
    env: process.env,
    encoding: "utf8",
  });
  return child.status === 0;
}

function remoteBranchExists({ targetDir, branch }) {
  const child = spawnSync("git", ["ls-remote", "--exit-code", "--heads", "origin", branch], {
    cwd: targetDir,
    env: process.env,
    encoding: "utf8",
  });
  return child.status === 0;
}

function branchHasBaseDiff({ targetDir, baseBranch }) {
  return Boolean(run("git", ["diff", "--name-only", `origin/${baseBranch}...HEAD`], { cwd: targetDir }).trim());
}

function commitCheckpointIfNeeded({ targetDir, message }) {
  if (!run("git", ["status", "--porcelain"], { cwd: targetDir }).trim()) return "";
  run("git", ["add", "--all"], { cwd: targetDir });
  run("git", ["commit", "-m", message], { cwd: targetDir });
  return run("git", ["rev-parse", "HEAD"], { cwd: targetDir }).trim();
}

function pushRecoverableBranch({ targetDir, branch }) {
  run("git", ["push", "--force-with-lease", "origin", `HEAD:${branch}`], { cwd: targetDir });
}

function findOpenPullRequestForBranch(branch, cwd) {
  return run(
    "gh",
    ["pr", "list", "--repo", result.repo, "--head", branch, "--state", "open", "--json", "url", "--jq", ".[0].url // \"\""],
    { cwd, env: ghEnv() },
  ).trim();
}

function safeBranchName(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9/_-]+/g, "-")
    .replace(/\/+/g, "/")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
}

function findLatestResultPath() {
  const runsRoot = path.join(repoRoot(), ".projectclownfish", "runs");
  if (!fs.existsSync(runsRoot)) throw new Error("no run directory exists");
  const candidates = [];
  for (const runName of fs.readdirSync(runsRoot)) {
    const candidate = path.join(runsRoot, runName, "result.json");
    if (fs.existsSync(candidate)) candidates.push({ path: candidate, mtimeMs: fs.statSync(candidate).mtimeMs });
  }
  candidates.sort((left, right) => right.mtimeMs - left.mtimeMs);
  if (!candidates[0]) throw new Error("no result.json files found");
  return candidates[0].path;
}

function writeReport(report, resultPath) {
  const reportPath =
    typeof args.report === "string"
      ? path.resolve(args.report)
      : path.join(path.dirname(resultPath), "fix-execution-report.json");
  const debugDir = copyFixDebugArtifacts(path.dirname(reportPath));
  if (debugDir) {
    report.debug_artifacts = path.relative(repoRoot(), debugDir);
  }
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify(report, null, 2));
}

function copyFixDebugArtifacts(reportDir) {
  if (!workRoot || !fs.existsSync(workRoot)) return "";
  const debugDir = path.join(reportDir, "fix-executor-debug");
  let copied = 0;
  for (const entry of fs.readdirSync(workRoot, { withFileTypes: true })) {
    if (!entry.isFile()) continue;
    if (!/\.(jsonl|stderr\.log|md|json)$/i.test(entry.name)) continue;
    if (entry.name === "replacement-pr-body.md") continue;
    fs.mkdirSync(debugDir, { recursive: true });
    fs.copyFileSync(path.join(workRoot, entry.name), path.join(debugDir, entry.name));
    copied += 1;
  }
  return copied > 0 ? debugDir : "";
}

function ghAuthSetupGit(cwd) {
  run("gh", ["auth", "setup-git"], { cwd, env: ghEnv() });
}

function ghEnv() {
  return { ...process.env, GH_TOKEN: process.env.CLOWNFISH_GH_TOKEN || process.env.GH_TOKEN };
}

function codexEnv() {
  const env = { ...process.env };
  delete env.GH_TOKEN;
  delete env.GITHUB_TOKEN;
  delete env.OPENCLAW_GH_TOKEN;
  delete env.CLOWNFISH_GH_TOKEN;
  delete env.CLOWNFISH_READ_GH_TOKEN;
  delete env.CLOWNFISH_CODEX_GH_TOKEN;
  if (process.env.GITHUB_ACTIONS === "true") {
    delete env.OPENAI_API_KEY;
    delete env.CODEX_API_KEY;
  }
  return env;
}

function run(command, commandArgs, options = {}) {
  const child = spawnSync(command, commandArgs, {
    cwd: options.cwd,
    env: options.env ?? process.env,
    input: options.input,
    encoding: "utf8",
  });
  if (child.status !== 0) {
    const detail = child.stderr || child.stdout || `${command} exited ${child.status}`;
    throw new Error(detail.trim());
  }
  return child.stdout ?? "";
}
