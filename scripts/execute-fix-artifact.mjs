#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { assertAllowedOwner, parseArgs, parseJob, repoRoot, validateJob } from "./lib.mjs";
import {
  externalMessageProvenance,
  repairContributorBranchComment,
  replacementPrBody,
  replacementSourceCloseComment,
  replacementSourceLinkComment,
} from "./external-messages.mjs";

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
const requestedCodexTimeoutMs = Number(process.env.CLOWNFISH_FIX_CODEX_TIMEOUT_MS ?? 25 * 60 * 1000);
const fixStepTimeoutMs = Number(process.env.CLOWNFISH_FIX_STEP_TIMEOUT_MS ?? 30 * 60 * 1000);
const fixTimeoutReserveMs = Number(process.env.CLOWNFISH_FIX_TIMEOUT_RESERVE_MS ?? 5 * 60 * 1000);
const codexTimeoutMs = Math.min(requestedCodexTimeoutMs, Math.max(60 * 1000, fixStepTimeoutMs - fixTimeoutReserveMs));
const codexPreflightTimeoutMs = Number(process.env.CLOWNFISH_FIX_PREFLIGHT_TIMEOUT_MS ?? 2 * 60 * 1000);
const codexReasoningEffort = String(process.env.CLOWNFISH_CODEX_REASONING_EFFORT ?? "medium");
const codexServiceTier = String(process.env.CLOWNFISH_CODEX_SERVICE_TIER ?? "fast").trim();
const maxEditAttempts = Math.max(1, Number(process.env.CLOWNFISH_FIX_EDIT_ATTEMPTS ?? 3));
const maxReviewAttempts = Math.max(1, Number(process.env.CLOWNFISH_CODEX_REVIEW_ATTEMPTS ?? 2));
const maxRebaseAttempts = Math.max(4, Number(process.env.CLOWNFISH_REBASE_REPAIR_ATTEMPTS ?? 4));
const resolveReviewThreads = process.env.CLOWNFISH_RESOLVE_REVIEW_THREADS !== "0";
const skipCodexWritePreflight = process.env.CLOWNFISH_SKIP_CODEX_WRITE_PREFLIGHT === "1";
const allowExpensiveValidation = process.env.CLOWNFISH_ALLOW_EXPENSIVE_VALIDATION === "1";
const installTargetDeps = process.env.CLOWNFISH_INSTALL_TARGET_DEPS !== "0";
const allowBroadFixArtifacts = process.env.CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS === "1";
const closeSupersededSourcePrs = process.env.CLOWNFISH_CLOSE_SUPERSEDED_SOURCE_PRS === "1";
const maxAutonomousFixFiles = Math.max(1, Number(process.env.CLOWNFISH_MAX_AUTONOMOUS_FIX_FILES ?? 8));
const maxAutonomousFixSurfaces = Math.max(1, Number(process.env.CLOWNFISH_MAX_AUTONOMOUS_FIX_SURFACES ?? 4));
const maxActivePrsPerArea = Number(process.env.CLOWNFISH_MAX_ACTIVE_PRS_PER_AREA ?? 50);
const CLOWNFISH_LABEL = "clownfish";
const CLOWNFISH_LABEL_COLOR = "F97316";
const CLOWNFISH_LABEL_DESCRIPTION = "Tracked by Clownfish automation";
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

if (process.env.CLOWNFISH_ALLOW_FIX_PR !== "1") {
  throw new Error("refusing fix execution: CLOWNFISH_ALLOW_FIX_PR must be 1");
}
if (!job.frontmatter.allowed_actions.includes("fix") || !job.frontmatter.allowed_actions.includes("raise_pr")) {
  throw new Error("refusing fix execution: job must allow fix and raise_pr");
}
if ((job.frontmatter.blocked_actions ?? []).includes("fix") || job.frontmatter.allow_fix_pr !== true) {
  throw new Error("refusing fix execution: fix is blocked by job frontmatter");
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
const scopeBlock = validateAutonomousFixScope({ job, fixArtifact });
if (scopeBlock) {
  report.status = "blocked";
  report.reason = scopeBlock.reason;
  report.actions.push({
    action: "execute_fix",
    status: "blocked",
    repair_strategy: fixArtifact.repair_strategy,
    reason: scopeBlock.reason,
    evidence: scopeBlock.evidence,
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

const validationPreflight = preflightTargetValidationPlan({ fixArtifact, targetDir, baseBranch: DEFAULT_BASE_BRANCH });
report.validation_preflight = validationPreflight;
if (validationPreflight.status === "blocked") {
  report.status = "blocked";
  report.reason = validationPreflight.reason;
  report.actions.push({
    action: "execute_fix",
    status: "blocked",
    code: validationPreflight.code,
    repair_strategy: fixArtifact.repair_strategy,
    reason: validationPreflight.reason,
    required: validationPreflight.required,
    available_scripts: validationPreflight.available_scripts,
    target_branch: validationPreflight.target_branch,
    source_pr: validationPreflight.source_pr,
  });
  writeReport(report, resultPath);
  process.exit(0);
}

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
      if (!shouldFallbackToReplacementAfterRepairError(error)) throw error;
      const fallbackTargetDir = prepareFallbackReplacementCheckout(targetDir);
      outcome = executeReplacementBranch({ fixArtifact, targetDir: fallbackTargetDir, supersedeSources: true, fallbackReason: error.message });
    }
  } else {
    outcome = executeReplacementBranch({
      fixArtifact,
      targetDir,
      supersedeSources: fixArtifact.repair_strategy === "replace_uneditable_branch",
    });
  }
} catch (error) {
  if (fixArtifact.allow_no_pr === true && /Codex produced no target repo changes/i.test(String(error?.message ?? error))) {
    outcome = {
      action: "open_fix_pr",
      status: "skipped",
      repair_strategy: fixArtifact.repair_strategy,
      reason: "Codex produced no target repo changes; treating this allow_no_pr artifact as an audited no-PR outcome",
    };
  } else {
    if (!isBlockedFixError(error)) throw error;
    outcome = {
      action: "execute_fix",
      status: "blocked",
      repair_strategy: fixArtifact.repair_strategy,
      reason: error.message,
    };
  }
}

report.status = outcome.status;
if (outcome.reason && !report.reason) report.reason = outcome.reason;
report.actions.push(outcome);
writeReport(report, resultPath);

function isBlockedFixError(error) {
  return /Codex produced no target repo changes|Codex \/review did not pass|Codex (?:fix worker|review-fix worker|rebase-fix worker|\/review) timed out|Codex (?:fix worker|review-fix worker|rebase-fix worker|\/review) failed|could not repair rebase conflicts|validation command failed|base branch advanced after validation/i.test(
    String(error?.message ?? error),
  );
}

function shouldFallbackToReplacementAfterRepairError(error) {
  const message = String(error?.message ?? error);
  if (/validation command failed|Codex |no merge base/i.test(message)) return false;
  return /maintainer_can_modify=false|missing head repo\/ref|source PR #\d+ is (?:closed|merged)|permission denied|permission to [^\s]+ denied|remote rejected|could not push|repository not found|not found/i.test(
    message,
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
      "Clownfish policy: useful uneditable or unsafe source PRs are replaced with a narrow credited PR when fix execution is explicitly enabled.",
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
  const baseBranch = String(process.env.CLOWNFISH_FIX_BASE_BRANCH ?? DEFAULT_BASE_BRANCH);
  const sourcePr = firstSourcePullRequest(fixArtifact);
  const pull = fetchPullRequest(sourcePr.number);
  if (pull.state !== "open") throw new Error(`source PR #${sourcePr.number} is ${pull.state}`);
  if (!pull.head?.repo?.full_name || !pull.head?.ref) throw new Error(`source PR #${sourcePr.number} is missing head repo/ref`);
  const sameRepoBranch = pull.head.repo.full_name === result.repo;
  if (pull.maintainer_can_modify !== true && !sameRepoBranch) {
    throw new Error(`source PR #${sourcePr.number} has maintainer_can_modify=false`);
  }

  const branch = safeBranchName(`projectclownfish/repair-${result.cluster_id}-${sourcePr.number}`);
  run("git", ["fetch", "origin", `${baseBranch}:refs/remotes/origin/${baseBranch}`], { cwd: targetDir });
  run("git", ["fetch", `https://github.com/${pull.head.repo.full_name}.git`, `${pull.head.ref}:${branch}`], { cwd: targetDir });
  run("git", ["checkout", branch], { cwd: targetDir });
  ensureMergeBaseAvailable({ targetDir, baseBranch });
  let rebased = rebaseRecoverableReplacementBranch({ targetDir, branch, baseBranch, fixArtifact });
  if (!sameRepoBranch && !dryRun) {
    ghAuthSetupGit(targetDir);
    assertRepairBranchWritable({ targetDir, pull, rebased });
  }
  prepareTargetToolchain(targetDir);

  const prep = editValidatePrepareMerge({ fixArtifact, targetDir, branch, mode: "repair", baseBranch });
  if (refreshValidatedBranchBase({ targetDir, branch, baseBranch })) {
    rebased = true;
    prep.commit = currentHead(targetDir);
  }
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
  const pushArgs = repairBranchPushArgs({ pull, rebased });
  run("git", pushArgs, { cwd: targetDir });
  const threadResolution = prepareReviewThreadsForMerge({ repo: result.repo, number: sourcePr.number, targetDir });
  const comment = repairContributorBranchComment({
    sourcePrUrl: sourcePr.url,
    validationCommands: fixArtifact.validation_commands,
    provenance: externalMessageProvenance({
      model,
      reasoning: codexReasoningEffort,
      reviewedSha: prep.commit,
    }),
  });
  run("gh", ["pr", "comment", String(sourcePr.number), "--repo", result.repo, "--body", comment], { cwd: targetDir, env: ghEnv() });
  return {
    action: "repair_contributor_branch",
    status: "pushed",
    target: sourcePr.url,
    head_repo: pull.head.repo.full_name,
    head_ref: pull.head.ref,
    rebased,
    commit: prep.commit,
    merge_preflight: prep.merge_preflight,
    review_threads: threadResolution,
  };
}

function repairBranchPushArgs({ pull, rebased }) {
  const remote = `https://github.com/${pull.head.repo.full_name}.git`;
  if (!rebased) return ["push", remote, `HEAD:${pull.head.ref}`];
  const headSha = String(pull.head?.sha ?? "");
  if (!/^[0-9a-f]{40}$/i.test(headSha)) {
    throw new Error(`cannot force-with-lease repair branch ${pull.head.ref}: source head sha is missing`);
  }
  return ["push", `--force-with-lease=refs/heads/${pull.head.ref}:${headSha}`, remote, `HEAD:${pull.head.ref}`];
}

function assertRepairBranchWritable({ targetDir, pull, rebased }) {
  const args = repairBranchPushArgs({ pull, rebased });
  run("git", ["push", "--dry-run", ...args.slice(1)], { cwd: targetDir });
}

function prepareFallbackReplacementCheckout(sourceTargetDir) {
  const fallbackTargetDir = path.join(workRoot, `${path.basename(sourceTargetDir)}-replacement-${Date.now()}`);
  ensureTargetCheckout(result.repo, fallbackTargetDir);
  setupGitIdentity(fallbackTargetDir);
  return fallbackTargetDir;
}

function executeReplacementBranch({ fixArtifact, targetDir, supersedeSources, fallbackReason }) {
  const baseBranch = String(process.env.CLOWNFISH_FIX_BASE_BRANCH ?? DEFAULT_BASE_BRANCH);
  const contributorCredits = sourceContributorCredits({ fixArtifact, targetDir });
  const branch = replacementBranchName(result.cluster_id);
  const areaCapacityBlock = validateActivePrAreaCapacity({ fixArtifact, targetDir, branch });
  if (areaCapacityBlock) {
    return {
      action: "open_fix_pr",
      status: "blocked",
      branch,
      repair_strategy: fixArtifact.repair_strategy,
      ...areaCapacityBlock,
    };
  }
  run("git", ["fetch", "origin", baseBranch], { cwd: targetDir });
  const branchState = checkoutRecoverableReplacementBranch({ targetDir, branch, baseBranch });
  if (branchState.resumed) rebaseRecoverableReplacementBranch({ targetDir, branch, baseBranch, fixArtifact });
  prepareTargetToolchain(targetDir);

  if (!dryRun) ghAuthSetupGit(targetDir);
  const prep = editValidatePrepareMerge({
    fixArtifact,
    targetDir,
    branch,
    mode: "replacement",
    fallbackReason,
    baseBranch,
    contributorCredits,
    allowExistingChanges: branchState.resumed && branchHasBaseDiff({ targetDir, baseBranch }),
    pushCheckpoint: dryRun ? null : () => pushRecoverableBranch({ targetDir, branch }),
  });
  if (refreshValidatedBranchBase({ targetDir, branch, baseBranch })) {
    prep.commit = currentHead(targetDir);
  }
  const provenance = externalMessageProvenance({
    model,
    reasoning: codexReasoningEffort,
    reviewedSha: prep.commit,
  });
  const body = replacementPrBody({ fixArtifact, fallbackReason, clusterId: result.cluster_id, provenance });
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
      contributor_credit: contributorCredits.map(publicContributorCredit),
    };
  }

  pushRecoverableBranch({ targetDir, branch });
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
  if (prNumber) ensurePullRequestOpen({ number: prNumber, targetDir });
  if (prNumber) labelReplacementPullRequest({ number: prNumber, targetDir });
  if (prNumber) prep.merge_preflight.target = `#${prNumber}`;
  const threadResolution = prNumber
    ? prepareReviewThreadsForMerge({ repo: result.repo, number: prNumber, targetDir })
    : { status: "blocked", reason: "replacement PR URL did not include a PR number" };

  const supersededSources = supersedeSources
    ? supersededReplacementSources(fixArtifact).filter((source) => pullRequestNumberFromUrl(source) !== prNumber)
    : [];
  const supersededSourceActions = [];
  if (supersededSources.length > 0) {
    for (const source of supersededSources) {
      const parsed = parsePullRequestUrl(source);
      if (!parsed || parsed.repo !== result.repo) continue;
      supersededSourceActions.push(
        closeSupersededSourcePrs
          ? closeSupersededSourcePr({ source, parsed, replacementPrUrl: prUrl, targetDir, contributorCredits, provenance })
          : linkReplacementSourcePr({ source, parsed, replacementPrUrl: prUrl, targetDir, provenance }),
      );
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
    superseded_source_actions: supersededSourceActions,
    contributor_credit: contributorCredits.map(publicContributorCredit),
  };
}

function labelReplacementPullRequest({ number, targetDir }) {
  ensureLabel(result.repo, CLOWNFISH_LABEL, CLOWNFISH_LABEL_COLOR, CLOWNFISH_LABEL_DESCRIPTION, targetDir);
  addLabel(result.repo, number, CLOWNFISH_LABEL, targetDir);
}

function ensureLabel(repo, name, color, description, targetDir) {
  try {
    run("gh", ["label", "create", name, "--repo", repo, "--color", color, "--description", description], {
      cwd: targetDir,
      env: ghEnv(),
    });
  } catch (error) {
    if (!/already exists/i.test(String(error?.message ?? error))) throw error;
  }
}

function addLabel(repo, number, name, targetDir) {
  run("gh", ["issue", "edit", String(number), "--repo", repo, "--add-label", name], {
    cwd: targetDir,
    env: ghEnv(),
  });
}

function linkReplacementSourcePr({ source, parsed, replacementPrUrl, targetDir, provenance }) {
  const base = { source, pr: `#${parsed.number}`, action: "link_replacement_source" };
  const view = fetchSourcePullRequestView({ repo: result.repo, number: parsed.number, targetDir });
  if (view.mergedAt || view.state === "MERGED") {
    return { ...base, status: "skipped", reason: "already merged", merged_at: view.mergedAt ?? null };
  }
  if (view.state === "CLOSED") {
    return { ...base, status: "skipped", reason: "already closed" };
  }

  const comment = replacementSourceLinkComment({ replacementPrUrl, sourcePrUrl: source, provenance });
  run("gh", ["pr", "comment", String(parsed.number), "--repo", result.repo, "--body", comment], {
    cwd: targetDir,
    env: ghEnv(),
  });
  return { ...base, status: "executed", reason: "linked replacement PR without closing source PR" };
}

function closeSupersededSourcePr({ source, parsed, replacementPrUrl, targetDir, contributorCredits, provenance }) {
  const base = { source, pr: `#${parsed.number}`, action: "close_superseded_source" };
  const view = fetchSourcePullRequestView({ repo: result.repo, number: parsed.number, targetDir });
  if (view.mergedAt || view.state === "MERGED") {
    return { ...base, status: "skipped", reason: "already merged", merged_at: view.mergedAt ?? null };
  }
  if (view.state === "CLOSED") {
    return { ...base, status: "skipped", reason: "already closed" };
  }

  const comment = replacementSourceCloseComment({ replacementPrUrl, sourcePrUrl: source, provenance });
  run("gh", ["pr", "comment", String(parsed.number), "--repo", result.repo, "--body", comment], {
    cwd: targetDir,
    env: ghEnv(),
  });

  const closed = spawnSync("gh", ["pr", "close", String(parsed.number), "--repo", result.repo], {
    cwd: targetDir,
    env: ghEnv(),
    encoding: "utf8",
  });
  if (closed.status === 0) {
    return {
      ...base,
      status: "executed",
      reason: "closed in favor of credited replacement PR",
      replacement_pr: replacementPrUrl,
      contributor_credit: contributorCredits.map(publicContributorCredit),
    };
  }

  const detail = `${closed.stderr ?? ""}\n${closed.stdout ?? ""}`.trim();
  if (/already merged|can't be closed because it was already merged/i.test(detail)) {
    return { ...base, status: "skipped", reason: "already merged during close" };
  }
  throw new Error(detail || `gh pr close exited ${closed.status}`);
}

function ensurePullRequestOpen({ number, targetDir }) {
  const view = fetchSourcePullRequestView({ repo: result.repo, number, targetDir });
  if (view.mergedAt || view.state === "MERGED") {
    throw new Error(`replacement PR #${number} is already merged`);
  }
  if (view.state === "CLOSED") {
    run("gh", ["pr", "reopen", String(number), "--repo", result.repo], {
      cwd: targetDir,
      env: ghEnv(),
    });
  }
}

function fetchSourcePullRequestView({ repo, number, targetDir }) {
  return JSON.parse(
    run("gh", ["pr", "view", String(number), "--repo", repo, "--json", "author,state,mergedAt,title,url"], {
      cwd: targetDir,
      env: ghEnv(),
    }),
  );
}

function editValidatePrepareMerge({
  fixArtifact,
  targetDir,
  branch,
  mode,
  fallbackReason,
  baseBranch = DEFAULT_BASE_BRANCH,
  contributorCredits = [],
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
          ...codexConfigArgs(),
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
    trailers: mode === "replacement" ? coAuthorTrailers(contributorCredits) : [],
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
        trailers: mode === "replacement" ? coAuthorTrailers(contributorCredits) : [],
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
    trailers: mode === "replacement" ? coAuthorTrailers(contributorCredits) : [],
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
    "- if the branch is stale or conflicts with current main, you may narrowly refactor/rebase touched implementation and tests to match current main;",
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
      ...codexConfigArgs(),
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

function codexConfigArgs() {
  const configs = ['approval_policy="never"', `model_reasoning_effort=${JSON.stringify(codexReasoningEffort)}`];
  if (codexServiceTier) configs.push(`service_tier=${JSON.stringify(codexServiceTier)}`);
  return configs.flatMap((config) => ["-c", config]);
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
  ensureMergeBaseAvailable({ targetDir, baseBranch });
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
      ...codexConfigArgs(),
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
    const fallbackReview = extractCodexReviewFromJsonl(child.stdout);
    if (fallbackReview) {
      fs.writeFileSync(outputPath, `${JSON.stringify(fallbackReview, null, 2)}\n`);
      return fallbackReview;
    }
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

function extractCodexReviewFromJsonl(stdout) {
  const candidates = [];
  for (const line of String(stdout ?? "").split(/\r?\n/)) {
    if (!line.trim()) continue;
    let event;
    try {
      event = JSON.parse(line);
    } catch {
      continue;
    }
    const text = event?.item?.type === "agent_message" ? event.item.text : undefined;
    if (typeof text === "string" && text.trim().startsWith("{")) candidates.push(text.trim());
  }
  for (const text of candidates.reverse()) {
    try {
      const parsed = JSON.parse(text);
      if (isCodexReview(parsed)) return parsed;
    } catch {
      // Keep scanning older candidate messages.
    }
  }
  return null;
}

function isCodexReview(value) {
  return (
    value &&
    typeof value === "object" &&
    typeof value.status === "string" &&
    typeof value.summary === "string" &&
    Array.isArray(value.findings) &&
    typeof value.findings_addressed === "boolean" &&
    Array.isArray(value.evidence)
  );
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
      ...codexConfigArgs(),
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

function sourceContributorCredits({ fixArtifact, targetDir }) {
  const byLogin = new Map();
  for (const source of fixArtifact.source_prs ?? []) {
    const parsed = parsePullRequestUrl(source);
    if (!parsed || parsed.repo !== result.repo) continue;
    const view = fetchSourcePullRequestView({ repo: result.repo, number: parsed.number, targetDir });
    const login = String(view.author?.login ?? "").trim();
    if (!login || view.author?.is_bot || isBotLogin(login)) continue;
    const key = login.toLowerCase();
    const existing = byLogin.get(key) ?? {
      login,
      name: safeTrailerName(login, login),
      email: `${login}@users.noreply.github.com`,
      sources: [],
    };
    const user = fetchGitHubUser(login, targetDir);
    if (user) {
      existing.name = safeTrailerName(user.name || user.login || login, login);
      existing.email = `${user.id}+${user.login}@users.noreply.github.com`;
    }
    existing.sources = uniqueStrings([...existing.sources, parsed.url]);
    byLogin.set(key, existing);
  }
  return [...byLogin.values()];
}

function fetchGitHubUser(login, targetDir) {
  try {
    const user = JSON.parse(run("gh", ["api", `users/${login}`], { cwd: targetDir, env: ghEnv() }));
    if (!user?.id || !user?.login) return null;
    return user;
  } catch {
    return null;
  }
}

function coAuthorTrailers(contributorCredits) {
  return contributorCredits.map((credit) => `Co-authored-by: ${credit.name} <${credit.email}>`);
}

function publicContributorCredit(credit) {
  return {
    login: credit.login,
    name: credit.name,
    sources: credit.sources,
    co_authored_by: `Co-authored-by: ${credit.name} <${credit.email}>`,
  };
}

function safeTrailerName(value, fallback = "Contributor") {
  const name = String(value ?? "")
    .replace(/[<>\r\n]/g, "")
    .trim();
  return name || fallback;
}

function isBotLogin(login) {
  return /\[bot\]$|bot$/i.test(String(login ?? ""));
}

function validateActivePrAreaCapacity({ fixArtifact, targetDir, branch }) {
  if (!Number.isFinite(maxActivePrsPerArea) || maxActivePrsPerArea < 1) return null;
  const areas = affectedAreasForFiles(fixArtifact.likely_files ?? []);
  if (areas.length === 0) return null;

  let activePrs;
  try {
    activePrs = listOpenClownfishPrAreas({ targetDir }).filter((pull) => pull.branch !== branch);
  } catch (error) {
    return {
      code: "active_area_pr_cap_unverified",
      reason: `could not verify active Clownfish PR area capacity: ${compactText(error.message, 500)}`,
      areas,
      max_active_prs_per_area: maxActivePrsPerArea,
    };
  }
  const blockedAreas = areas
    .map((area) => ({
      area,
      active: activePrs.filter((pull) => pull.areas.includes(area)),
    }))
    .filter((entry) => entry.active.length >= maxActivePrsPerArea);

  if (blockedAreas.length === 0) return null;
  const first = blockedAreas[0];
  return {
    code: "active_area_pr_cap",
    reason: `active Clownfish PR cap reached for ${first.area}: ${first.active.length}/${maxActivePrsPerArea} open PRs`,
    areas,
    max_active_prs_per_area: maxActivePrsPerArea,
    active_area_prs: first.active.slice(0, 10).map((pull) => ({
      pr: `#${pull.number}`,
      url: pull.url,
      title: pull.title,
      branch: pull.branch,
      areas: pull.areas,
    })),
  };
}

function listOpenClownfishPrAreas({ targetDir }) {
  const pulls = JSON.parse(
    run(
      "gh",
      ["pr", "list", "--repo", result.repo, "--state", "open", "--limit", "500", "--json", "number,title,url,headRefName,labels"],
      { cwd: targetDir, env: ghEnv() },
    ),
  );
  return pulls
    .filter((pull) => {
      const branch = String(pull.headRefName ?? "");
      const labels = (pull.labels ?? []).map((label) => String(label.name ?? label));
      return branch.startsWith("clownfish/") || labels.includes("clownfish");
    })
    .map((pull) => {
      const files = fetchPullRequestFilePaths({ targetDir, number: pull.number });
      return {
        number: pull.number,
        title: pull.title,
        url: pull.url,
        branch: String(pull.headRefName ?? ""),
        areas: affectedAreasForFiles(files),
      };
    });
}

function fetchPullRequestFilePaths({ targetDir, number }) {
  const view = JSON.parse(
    run("gh", ["pr", "view", String(number), "--repo", result.repo, "--json", "files"], {
      cwd: targetDir,
      env: ghEnv(),
    }),
  );
  return (view.files ?? []).map((file) => String(file.path ?? "")).filter(Boolean);
}

function affectedAreasForFiles(files) {
  return uniqueStrings(files.map(affectedAreaForFile).filter(Boolean));
}

function affectedAreaForFile(file) {
  const normalized = String(file ?? "").replaceAll("\\", "/").replace(/^\.\/+/, "");
  if (!normalized || normalized.includes("*")) return "";
  if (isBackpressureIgnoredFile(normalized)) return "";
  const parts = normalized.split("/").filter(Boolean);
  if (parts.length === 0) return "";
  if (["apps", "extensions", "packages"].includes(parts[0]) && parts[1]) return `${parts[0]}/${parts[1]}`;
  if (parts[0] === "src" && parts[1]) return `src/${parts[1]}`;
  if (parts[0] === "test" || parts[0] === "tests") return parts[0];
  if (parts[0] === "docs" || parts[0] === ".github" || parts[0] === "scripts") return parts[0];
  return parts[0];
}

function isBackpressureIgnoredFile(file) {
  return /(^|\/)(CHANGELOG|CHANGES|HISTORY|RELEASES|RELEASE_NOTES)(\.[A-Za-z0-9_-]+)?$/i.test(String(file ?? ""));
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

  return null;
}

function validateAutonomousFixScope({ job, fixArtifact }) {
  if (allowBroadFixArtifacts || job.frontmatter.allow_broad_fix_artifacts === true) return null;

  const likelyFiles = fixArtifact.likely_files ?? [];
  const affectedSurfaces = fixArtifact.affected_surfaces ?? [];
  const text = [
    fixArtifact.pr_title,
    fixArtifact.summary,
    fixArtifact.pr_body,
    ...affectedSurfaces,
    ...likelyFiles,
  ].join("\n");
  const featureSignal =
    /\bfeat(?:\(|:)|\bfeature\b|add(?:s|ing)?\s+(?:a |an )?(?:new |explicit )?|new config|configuration surface|public .*docs?|schema/i.test(
      text,
    );
  const crossesDocs = likelyFiles.some((file) => /^docs\//.test(String(file)));
  const crossesConfig = likelyFiles.some((file) => /\bconfig\b|schema|labels|help/i.test(String(file)));
  const crossesTests = likelyFiles.some((file) => /\.test\.[cm]?[jt]s$|\.spec\.[cm]?[jt]s$/i.test(String(file)));
  const crossesCore = likelyFiles.some((file) => /^src\//.test(String(file)));
  const crossSurfaceCount = [crossesDocs, crossesConfig, crossesTests, crossesCore].filter(Boolean).length;
  const tooManyFiles = likelyFiles.length > maxAutonomousFixFiles;
  const tooManySurfaces = affectedSurfaces.length > maxAutonomousFixSurfaces;

  if (!featureSignal || (!tooManyFiles && !tooManySurfaces && crossSurfaceCount < 3)) return null;

  return {
    reason:
      "fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1",
    evidence: [
      `pr_title=${fixArtifact.pr_title}`,
      `likely_files=${likelyFiles.length}/${maxAutonomousFixFiles}`,
      `affected_surfaces=${affectedSurfaces.length}/${maxAutonomousFixSurfaces}`,
      `cross_surface_count=${crossSurfaceCount}`,
      `sample_files=${likelyFiles.slice(0, 8).join(", ")}`,
    ],
  };
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
  ensureMergeBaseAvailable({ targetDir: cwd, baseBranch });
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
        const fallbackCommands = validationFallbackCommands({ parts, error, cwd, baseBranch });
        if (fallbackCommands.length > 0) {
          for (const fallbackParts of fallbackCommands) {
            const fallbackRendered = fallbackParts.join(" ");
            if (executed.includes(fallbackRendered)) continue;
            run(fallbackParts[0], fallbackParts.slice(1), { cwd, env: validationEnv });
            executed.push(fallbackRendered);
          }
          continue;
        }
        throw new Error(`validation command failed (${parts.join(" ")}): ${compactText(error.message, 1200)}`);
      }
    }
  }
  return executed;
}

function preflightTargetValidationPlan({ fixArtifact, targetDir, baseBranch = DEFAULT_BASE_BRANCH }) {
  const scripts = readPackageScriptSet(targetDir);
  const availableScripts = [...scripts].sort();
  const resolved = [];
  const requiredScripts = [];
  for (const command of fixArtifact.validation_commands ?? []) {
    const resolvedCommands = resolveAllowedValidationCommands(command, targetDir, baseBranch);
    for (const parts of resolvedCommands) {
      const rendered = parts.join(" ");
      if (!resolved.includes(rendered)) resolved.push(rendered);
      const script = packageScriptRequirement(parts);
      if (script) requiredScripts.push(script);
    }
  }

  const missing = requiredScripts.find((script) => !scripts.has(script.name));
  if (!missing) {
    return {
      status: "passed",
      resolved_commands: resolved,
      available_scripts: availableScripts,
    };
  }

  const sourcePr = (fixArtifact.source_prs ?? []).find((source) => parsePullRequestUrl(source)?.repo === result.repo) ?? null;
  return {
    status: "blocked",
    code: "validation_script_missing",
    required: missing.command,
    missing_script: missing.name,
    available_scripts: availableScripts,
    target_branch: fixArtifact.branch ?? fixArtifact.head_branch ?? null,
    source_pr: sourcePr,
    resolved_commands: resolved,
    reason: `validation_script_missing: required ${missing.command} is unavailable in target checkout`,
  };
}

function packageScriptRequirement(parts) {
  if (parts[0] === "npm" && parts[1] === "run" && parts[2]) {
    return { name: parts[2], command: parts.slice(0, 3).join(" ") };
  }
  if (parts[0] !== "pnpm") return null;
  let index = 1;
  if (parts[index] === "-s" || parts[index] === "--silent") index += 1;
  if (parts[index] === "run") index += 1;
  const script = parts[index];
  if (!script || ["exec", "dlx", "install", "add", "remove"].includes(script)) return null;
  return { name: script, command: ["pnpm", script].join(" ") };
}

function validationFallbackCommands({ parts, error, cwd, baseBranch }) {
  if (strictTargetValidation) return [];
  if (parts[0] !== "pnpm" || parts[1] !== "check:changed" || parts.length !== 2) return [];
  if (/no merge base/i.test(String(error?.message ?? ""))) {
    ensureMergeBaseAvailable({ targetDir: cwd, baseBranch });
    return [parts];
  }
  if (!isChangedGateStall(error)) return [];
  const changedTests = changedTestFiles(cwd, baseBranch);
  return [
    ["git", "diff", "--check", `origin/${baseBranch}...HEAD`],
    ...(changedTests.length > 0 ? [["pnpm", "test:serial", ...changedTests]] : []),
  ];
}

function isChangedGateStall(error) {
  return /no output for \d+ms|terminating stalled Vitest|stalled Vitest process/i.test(String(error?.message ?? ""));
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
    run("git", ["fetch", "origin", `+refs/heads/${branch}:refs/remotes/origin/${branch}`], { cwd: targetDir });
    run("git", ["checkout", "-B", branch, `origin/${branch}`], { cwd: targetDir });
    return { resumed: true, branch };
  }
  run("git", ["checkout", "-B", branch, `origin/${baseBranch}`], { cwd: targetDir });
  return { resumed: false, branch };
}

function rebaseRecoverableReplacementBranch({ targetDir, branch, baseBranch, fixArtifact }) {
  const baseRef = `origin/${baseBranch}`;
  if (!branchHasBaseDiff({ targetDir, baseBranch })) return false;
  if (isAncestor({ targetDir, ancestor: baseRef, descendant: "HEAD" })) return false;
  if (fs.existsSync(path.join(targetDir, ".git", "shallow"))) {
    run("git", ["fetch", "--unshallow", "origin"], { cwd: targetDir });
  }
  try {
    run("git", ["rebase", baseRef], { cwd: targetDir });
    return true;
  } catch (error) {
    try {
      resolveRecoverableRebaseConflicts({
        targetDir,
        branch,
        baseRef,
        fixArtifact,
        initialError: error.message,
      });
    } catch (repairError) {
      spawnSync("git", ["rebase", "--abort"], { cwd: targetDir, env: process.env, encoding: "utf8" });
      throw new Error(
        `branch ${branch} could not rebase onto ${baseRef}: ${compactText(repairError.message, 1200)}`,
      );
    }
    return true;
  }
}

function refreshValidatedBranchBase({ targetDir, branch, baseBranch }) {
  run("git", ["fetch", "origin", `${baseBranch}:refs/remotes/origin/${baseBranch}`], { cwd: targetDir });
  const baseRef = `origin/${baseBranch}`;
  if (isAncestor({ targetDir, ancestor: baseRef, descendant: "HEAD" })) return false;
  try {
    run("git", ["rebase", baseRef], { cwd: targetDir });
    return true;
  } catch (error) {
    spawnSync("git", ["rebase", "--abort"], { cwd: targetDir, env: process.env, encoding: "utf8" });
    throw new Error(
      `base branch advanced after validation and ${branch} needs a fresh rebase pass: ${compactText(error.message, 1200)}`,
    );
  }
}

function resolveRecoverableRebaseConflicts({ targetDir, branch, baseRef, fixArtifact, initialError }) {
  let lastError = initialError;
  for (let attempt = 1; attempt <= maxRebaseAttempts; attempt += 1) {
    const prompt = buildRebaseConflictPrompt({
      targetDir,
      branch,
      baseRef,
      fixArtifact,
      attempt,
      lastError,
    });
    const summaryPath = path.join(workRoot, `replacement-codex-rebase-fix-${attempt}.md`);
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
        ...codexConfigArgs(),
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
    fs.writeFileSync(path.join(workRoot, `replacement-codex-rebase-fix-${attempt}.jsonl`), child.stdout ?? "");
    if (child.stderr) {
      fs.writeFileSync(path.join(workRoot, `replacement-codex-rebase-fix-${attempt}.stderr.log`), child.stderr);
    }
    if (child.error?.code === "ETIMEDOUT") {
      throw new Error(`Codex rebase-fix worker timed out after ${codexTimeoutMs}ms`);
    }
    if (child.status !== 0) {
      throw new Error(child.stderr || child.stdout || "Codex rebase-fix worker failed");
    }

    run("git", ["add", "--all"], { cwd: targetDir });
    const continued = spawnSync("git", ["rebase", "--continue"], {
      cwd: targetDir,
      env: { ...process.env, GIT_EDITOR: "true", EDITOR: "true" },
      encoding: "utf8",
    });
    if (continued.status === 0) return;
    lastError = `${continued.stderr ?? ""}\n${continued.stdout ?? ""}`.trim();
  }
  throw new Error(`Codex could not repair rebase conflicts after ${maxRebaseAttempts} attempt(s): ${compactText(lastError, 1200)}`);
}

function buildRebaseConflictPrompt({ targetDir, branch, baseRef, fixArtifact, attempt, lastError }) {
  return [
    "You are resolving a ProjectClownfish rebase conflict in the target repository.",
    "",
    "Rules:",
    "- inspect `git status --short`, conflicted files, and nearby current-main code before editing;",
    "- resolve every conflict marker and preserve the narrow ProjectClownfish fix intent;",
    "- you may refactor touched implementation/tests when current main moved or renamed the code;",
    "- prefer current main structure over stale branch structure;",
    "- if the same implementation or test files conflict repeatedly, synthesize the final current-main-compatible version instead of preserving old checkpoint shape;",
    "- keep contributor credit/changelog entries from the fix artifact when still applicable;",
    "- for CHANGELOG.md conflicts, keep the current active-version structure, preserve one relevant single-line entry with credit, and remove stale duplicate conflict sides;",
    "- do not commit, push, open PRs, close PRs, call gh, or run `git rebase --continue`; ProjectClownfish handles that after your edits;",
    "- do not inspect or print environment variables, credentials, tokens, or secrets;",
    "- before returning, ensure no conflict markers remain.",
    "",
    `Branch: ${branch}`,
    `Rebase target: ${baseRef}`,
    `Rebase repair attempt: ${attempt} of ${maxRebaseAttempts}`,
    "",
    "Current git status:",
    "```text",
    safeGitStatus(targetDir),
    "```",
    "",
    "Previous rebase error:",
    "```text",
    compactText(lastError, 4000),
    "```",
    "",
    "Fix artifact:",
    "```json",
    JSON.stringify(fixArtifact, null, 2),
    "```",
  ].join("\n");
}

function safeGitStatus(targetDir) {
  const child = spawnSync("git", ["status", "--short"], {
    cwd: targetDir,
    env: process.env,
    encoding: "utf8",
  });
  return child.status === 0 ? child.stdout.trim() || "(clean)" : `${child.stderr ?? ""}\n${child.stdout ?? ""}`.trim();
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
  return Boolean(remoteBranchSha({ targetDir, branch }));
}

function remoteBranchSha({ targetDir, branch }) {
  const child = spawnSync("git", ["ls-remote", "--heads", "origin", branch], {
    cwd: targetDir,
    env: process.env,
    encoding: "utf8",
  });
  if (child.status !== 0) return "";
  const [sha] = child.stdout.trim().split(/\s+/);
  return /^[0-9a-f]{40}$/.test(sha ?? "") ? sha : "";
}

function branchHasBaseDiff({ targetDir, baseBranch }) {
  const range = `origin/${baseBranch}...HEAD`;
  const first = spawnSync("git", ["diff", "--name-only", range], {
    cwd: targetDir,
    env: process.env,
    encoding: "utf8",
  });
  if (first.status === 0) return Boolean(first.stdout.trim());
  const detail = `${first.stderr ?? ""}\n${first.stdout ?? ""}`;
  if (!/no merge base/i.test(detail)) throw new Error(detail.trim());

  fetchDeeperHistory({ targetDir, baseBranch });
  const retry = spawnSync("git", ["diff", "--name-only", range], {
    cwd: targetDir,
    env: process.env,
    encoding: "utf8",
  });
  if (retry.status === 0) return Boolean(retry.stdout.trim());
  const retryDetail = `${retry.stderr ?? ""}\n${retry.stdout ?? ""}`;
  if (/no merge base/i.test(retryDetail)) return true;
  throw new Error(retryDetail.trim());
}

function ensureMergeBaseAvailable({ targetDir, baseBranch }) {
  run("git", ["fetch", "origin", `${baseBranch}:refs/remotes/origin/${baseBranch}`], { cwd: targetDir });
  const baseRef = `origin/${baseBranch}`;
  const first = spawnSync("git", ["merge-base", baseRef, "HEAD"], {
    cwd: targetDir,
    env: process.env,
    encoding: "utf8",
  });
  if (first.status === 0 && first.stdout.trim()) return first.stdout.trim();

  fetchDeeperHistory({ targetDir, baseBranch });
  const retry = spawnSync("git", ["merge-base", baseRef, "HEAD"], {
    cwd: targetDir,
    env: process.env,
    encoding: "utf8",
  });
  if (retry.status === 0 && retry.stdout.trim()) return retry.stdout.trim();

  const detail = `${retry.stderr ?? ""}\n${retry.stdout ?? ""}`.trim();
  throw new Error(detail || `no merge base between ${baseRef} and HEAD`);
}

function fetchDeeperHistory({ targetDir, baseBranch }) {
  const shallow = spawnSync("git", ["rev-parse", "--is-shallow-repository"], {
    cwd: targetDir,
    env: process.env,
    encoding: "utf8",
  }).stdout.trim();
  if (shallow === "true" || fs.existsSync(path.join(targetDir, ".git", "shallow"))) {
    run("git", ["fetch", "--unshallow", "origin"], { cwd: targetDir });
  } else {
    run("git", ["fetch", "origin", "--prune"], { cwd: targetDir });
  }
  run("git", ["fetch", "origin", `${baseBranch}:refs/remotes/origin/${baseBranch}`], { cwd: targetDir });
}

function commitCheckpointIfNeeded({ targetDir, message, trailers = [] }) {
  if (!run("git", ["status", "--porcelain"], { cwd: targetDir }).trim()) return "";
  run("git", ["add", "--all"], { cwd: targetDir });
  const args = ["commit", "-m", message];
  for (const trailer of uniqueStrings(trailers)) args.push("-m", trailer);
  run("git", args, { cwd: targetDir });
  return run("git", ["rev-parse", "HEAD"], { cwd: targetDir }).trim();
}

function currentHead(targetDir) {
  return run("git", ["rev-parse", "HEAD"], { cwd: targetDir }).trim();
}

function pushRecoverableBranch({ targetDir, branch }) {
  let lastDetail = "";
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const remoteSha = remoteBranchSha({ targetDir, branch });
    const targetRef = `refs/heads/${branch}`;
    const args = remoteSha
      ? ["push", `--force-with-lease=${targetRef}:${remoteSha}`, "origin", `HEAD:${targetRef}`]
      : ["push", "origin", `HEAD:${targetRef}`];
    const pushed = spawnSync("git", args, {
      cwd: targetDir,
      env: process.env,
      encoding: "utf8",
    });
    if (pushed.status === 0) {
      if (fetchRemoteRecoverableBranch({ targetDir, branch, required: false })) return;
      lastDetail = `git push reported success, but refs/heads/${branch} was not visible on origin`;
      continue;
    }

    const detail = `${pushed.stderr ?? ""}\n${pushed.stdout ?? ""}`.trim();
    lastDetail = detail;
    if (!isRecoverablePushRejection(detail)) throw new Error(detail);

    if (!fetchRemoteRecoverableBranch({ targetDir, branch, required: false })) continue;
    const remoteRef = `refs/remotes/origin/${branch}`;
    if (isAncestor({ targetDir, ancestor: "HEAD", descendant: remoteRef })) return;
    if (!isAncestor({ targetDir, ancestor: remoteRef, descendant: "HEAD" })) {
      try {
        run("git", ["rebase", remoteRef], { cwd: targetDir });
      } catch (error) {
        spawnSync("git", ["rebase", "--abort"], { cwd: targetDir, env: process.env, encoding: "utf8" });
        throw new Error(`recoverable branch ${branch} diverged during push: ${compactText(error.message, 1200)}`);
      }
    }
  }
  throw new Error(lastDetail || `recoverable branch ${branch} push was rejected after retrying against the latest remote tip`);
}

function fetchRemoteRecoverableBranch({ targetDir, branch, required = true }) {
  const child = spawnSync("git", ["fetch", "origin", `+refs/heads/${branch}:refs/remotes/origin/${branch}`], {
    cwd: targetDir,
    env: process.env,
    encoding: "utf8",
  });
  if (child.status === 0) return true;
  const detail = `${child.stderr ?? ""}\n${child.stdout ?? ""}`.trim();
  if (!required && /couldn't find remote ref|could not find remote ref|not found/i.test(detail)) return false;
  throw new Error(detail || `failed to fetch remote branch ${branch}`);
}

function isRecoverablePushRejection(detail) {
  return /(?:non-fast-forward|fetch first|stale info|would clobber existing tag|rejected)/i.test(detail);
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
