#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { assertAllowedOwner, hasSecuritySignalText, parseArgs, parseJob, repoRoot, validateJob } from "./lib.mjs";
import { externalMessageProvenance, postMergeCloseoutComment } from "./external-messages.mjs";

const PASSING_CHECK_CONCLUSIONS = new Set(["SUCCESS", "SKIPPED", "NEUTRAL"]);
const CLEAN_MERGE_STATES = new Set(["CLEAN", "HAS_HOOKS"]);
const FIX_PR_MERGE_STATES = new Set(["CLEAN", "HAS_HOOKS", "UNSTABLE"]);
const FIX_PR_ACTIONS = new Set(["open_fix_pr", "repair_contributor_branch"]);
const FIX_PR_READY_STATUSES = new Set(["opened", "pushed"]);
const POST_MERGE_CLOSE_ACTIONS = new Set(["close_duplicate", "close_superseded", "close_fixed_by_candidate", "post_merge_close"]);
const DEFAULT_IGNORED_CHECKS = ["auto-response", "Labeler", "Stale"];
const CLOWNFISH_LABEL = "clownfish";
const CLOWNFISH_LABEL_COLOR = "F97316";
const CLOWNFISH_LABEL_DESCRIPTION = "Tracked by Clownfish automation";
const POST_FLIGHT_WAIT_MS = numberEnv("CLOWNFISH_POST_FLIGHT_WAIT_MS", 10 * 60 * 1000);
const POST_FLIGHT_POLL_MS = numberEnv("CLOWNFISH_POST_FLIGHT_POLL_MS", 15 * 1000);

const args = parseArgs(process.argv.slice(2));
const jobPath = args._[0];
const resultPathArg = args._[1];
const latest = Boolean(args.latest);
const dryRun = Boolean(args["dry-run"] || process.env.CLOWNFISH_POST_FLIGHT_DRY_RUN === "1");

if (!jobPath) {
  console.error("usage: node scripts/post-flight.mjs <job.md> [result.json] [--latest] [--dry-run]");
  process.exit(2);
}
if (!resultPathArg && !latest) {
  console.error("result path is required unless --latest is set");
  process.exit(2);
}

const job = parseJob(jobPath);
const errors = validateJob(job);
if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

assertAllowedOwner(job.frontmatter.repo, process.env.CLOWNFISH_ALLOWED_OWNER);

if (!["execute", "autonomous"].includes(job.frontmatter.mode)) {
  throw new Error("refusing post-flight: job frontmatter mode is not execute or autonomous");
}
if (process.env.CLOWNFISH_ALLOW_EXECUTE !== "1") {
  throw new Error("refusing post-flight: CLOWNFISH_ALLOW_EXECUTE must be 1");
}

const resultPath = resultPathArg ? path.resolve(resultPathArg) : findLatestResultPath();
const result = JSON.parse(fs.readFileSync(resultPath, "utf8"));
if (result.repo !== job.frontmatter.repo) {
  throw new Error(`result repo ${result.repo} does not match job repo ${job.frontmatter.repo}`);
}
if (result.cluster_id !== job.frontmatter.cluster_id) {
  throw new Error(`result cluster ${result.cluster_id} does not match job cluster ${job.frontmatter.cluster_id}`);
}
if (!["execute", "autonomous"].includes(result.mode)) {
  throw new Error(`refusing post-flight: result mode is ${result.mode}`);
}

const fixReport = readSiblingJson(resultPath, "fix-execution-report.json");
const report = {
  repo: result.repo,
  cluster_id: result.cluster_id,
  dry_run: dryRun,
  result_path: path.relative(repoRoot(), resultPath),
  post_flight_at: new Date().toISOString(),
  actions: [],
};

if (!fixReport) {
  report.actions.push({ action: "post_flight", status: "skipped", reason: "no fix-execution-report.json" });
  writeReport(report, resultPath);
  process.exit(0);
}

for (const action of fixReport.actions ?? []) {
  if (!FIX_PR_ACTIONS.has(String(action.action ?? ""))) continue;
  const finalized = finalizeFixPr(action);
  report.actions.push(finalized);
  if (finalized.status === "executed") {
    report.actions.push(...finalizePostMergeCloseouts(action, finalized));
  }
}

if (report.actions.length === 0) {
  report.actions.push({ action: "post_flight", status: "skipped", reason: "no ProjectClownfish fix PR actions to finalize" });
}

writeReport(report, resultPath);

function finalizeFixPr(action) {
  const base = {
    action: "finalize_fix_pr",
    source_action: action.action,
    source_status: action.status,
    target: action.pr_url ?? action.target ?? null,
  };

  if (!FIX_PR_READY_STATUSES.has(String(action.status ?? ""))) {
    return { ...base, status: "skipped", reason: `fix PR action status is ${action.status ?? "missing"}` };
  }

  const parsed = parsePullRequestUrl(action.pr_url ?? action.target);
  if (!parsed || parsed.repo !== result.repo) {
    return { ...base, status: "blocked", reason: "fix PR URL is missing or outside target repo" };
  }

  const policyBlock = validateMergePolicy();
  if (policyBlock) return { ...base, status: "blocked", pr: `#${parsed.number}`, reason: policyBlock };

  const deadline = Date.now() + POST_FLIGHT_WAIT_MS;
  let pull;
  let view;
  let prBase;
  let mergeBlock = "";
  let waitedMs = 0;
  for (;;) {
    pull = fetchPullRequest(result.repo, parsed.number);
    view = fetchPullRequestView(result.repo, parsed.number);
    prBase = { ...base, pr: `#${parsed.number}`, title: view.title ?? pull.title ?? null };
    const mergedAt = pull.merged_at ?? view.mergedAt ?? null;
    if (mergedAt) {
      return {
        ...prBase,
        status: "executed",
        reason: "already merged",
        merged_at: mergedAt,
        merge_commit_sha: pull.merge_commit_sha ?? view.mergeCommit?.oid ?? null,
        waited_ms: waitedMs,
      };
    }

    mergeBlock = validateMergeableFixPr({ pull, view, preflight: action.merge_preflight });
    if (!mergeBlock) break;
    if (dryRun || !shouldWaitForMergeReadiness({ mergeBlock, view }) || Date.now() >= deadline) {
      return {
        ...prBase,
        status: "blocked",
        reason: mergeBlock,
        mergeable: view.mergeable ?? null,
        merge_state_status: view.mergeStateStatus ?? null,
        review_decision: view.reviewDecision ?? null,
        waited_ms: waitedMs,
      };
    }
    const sleepFor = Math.min(POST_FLIGHT_POLL_MS, Math.max(0, deadline - Date.now()));
    sleepMs(sleepFor);
    waitedMs += sleepFor;
  }

  if (dryRun) {
    return {
      ...prBase,
      status: "planned",
      reason: "dry run",
      merge_method: "squash",
      waited_ms: waitedMs,
    };
  }

  if (process.env.CLOWNFISH_ALLOW_MERGE !== "1") {
    labelForClownfishReview(result.repo, parsed.number);
    return {
      ...prBase,
      status: "blocked",
      reason: "merge requires CLOWNFISH_ALLOW_MERGE=1; labeled clownfish",
      merge_method: "squash",
      waited_ms: waitedMs,
    };
  }

  try {
    ghWithRetry(["pr", "merge", String(parsed.number), "--repo", result.repo, "--squash"]);
  } catch (error) {
    const detail = commandErrorText(error);
    if (isRecoverableMergeRace(detail)) {
      const latestView = fetchPullRequestView(result.repo, parsed.number);
      return {
        ...prBase,
        status: "blocked",
        reason: `merge attempt needs branch refresh: ${compactText(detail, 500)}`,
        mergeable: latestView.mergeable ?? null,
        merge_state_status: latestView.mergeStateStatus ?? null,
        review_decision: latestView.reviewDecision ?? null,
        retry_recommended: true,
        waited_ms: waitedMs,
      };
    }
    throw error;
  }
  const merged = fetchPullRequest(result.repo, parsed.number);
  return {
    ...prBase,
    status: "executed",
    reason: "merged by ProjectClownfish post-flight",
    merged_at: merged.merged_at ?? null,
    merge_commit_sha: merged.merge_commit_sha ?? null,
    merge_method: "squash",
    waited_ms: waitedMs,
  };
}

function finalizePostMergeCloseouts(fixAction, finalized) {
  const fixPr = parsePullRequestUrl(fixAction.pr_url ?? fixAction.target);
  if (!fixPr) return [];
  const fixRef = `#${fixPr.number}`;
  const fixUrl = `https://github.com/${result.repo}/pull/${fixPr.number}`;
  const closeouts = [];
  for (const action of result.actions ?? []) {
    const actionName = String(action.action ?? "");
    if (!POST_MERGE_CLOSE_ACTIONS.has(actionName)) continue;
    if (!["blocked", "planned"].includes(String(action.status ?? ""))) continue;
    const target = normalizeIssueRef(action.target);
    if (!target || target === fixPr.number) continue;
    const candidateFix = normalizeIssueRef(action.candidate_fix ?? action.fixed_by ?? action.fix_candidate);
    if (candidateFix !== fixPr.number) continue;
    closeouts.push(finalizePostMergeCloseout({ action, actionName, target, fixRef, fixUrl, finalized }));
  }
  return closeouts;
}

function finalizePostMergeCloseout({ action, actionName, target, fixRef, fixUrl, finalized }) {
  const base = {
    action: "post_merge_closeout",
    source_action: actionName,
    target: `#${target}`,
    canonical: action.canonical ?? undefined,
    candidate_fix: fixRef,
    fix_pr: fixUrl,
  };
  const live = fetchIssue(result.repo, target);
  if (live.state !== "open") {
    return {
      ...base,
      status: live.state === "closed" ? "executed" : "skipped",
      reason: live.state === "closed" ? "target already closed after canonical fix merged" : `target is ${live.state}`,
      live_state: live.state,
      merge_commit_sha: finalized.merge_commit_sha ?? null,
    };
  }
  if (hasSecuritySignalText(live.title, live.body, live.labels ?? [])) {
    return { ...base, status: "blocked", reason: "security-sensitive target requires central security triage" };
  }
  if (dryRun) {
    return { ...base, status: "planned", reason: "dry run", merge_commit_sha: finalized.merge_commit_sha ?? null };
  }

  ghBestEffort(["issue", "edit", String(target), "--repo", result.repo, "--add-label", "clownfish"]);
  ghWithRetry([
    "issue",
    "comment",
    String(target),
    "--repo",
    result.repo,
    "--body",
    postMergeCloseoutComment({
      actionName,
      fixUrl,
      provenance: externalMessageProvenance({
        reviewedSha: finalized.merge_commit_sha ?? action.commit ?? result.reviewed_sha ?? result.head_sha,
      }),
    }),
  ]);
  if (live.pull_request) {
    ghWithRetry(["pr", "close", String(target), "--repo", result.repo]);
  } else {
    ghWithRetry(["issue", "close", String(target), "--repo", result.repo, "--reason", "completed"]);
  }
  const after = fetchIssue(result.repo, target);
  return {
    ...base,
    status: after.state === "closed" ? "executed" : "blocked",
    reason: after.state === "closed" ? "closed after canonical fix merged" : `target is ${after.state}`,
    live_state: after.state,
    merge_commit_sha: finalized.merge_commit_sha ?? null,
  };
}

function validateMergePolicy() {
  if (!job.frontmatter.allowed_actions.includes("merge")) return "job does not allow merge";
  if ((job.frontmatter.blocked_actions ?? []).includes("merge")) return "merge is blocked by job frontmatter";
  if (job.frontmatter.allow_merge !== true) return "merge requires allow_merge: true";
  return "";
}

function labelForClownfishReview(repo, number) {
  ensureLabel(repo, CLOWNFISH_LABEL, CLOWNFISH_LABEL_COLOR, CLOWNFISH_LABEL_DESCRIPTION);
  ghBestEffort(["issue", "edit", String(number), "--repo", repo, "--add-label", CLOWNFISH_LABEL]);
}

function ensureLabel(repo, name, color, description) {
  try {
    ghWithRetry(["label", "create", name, "--repo", repo, "--color", color, "--description", description], 2);
  } catch (error) {
    if (!/already exists/i.test(commandErrorText(error))) return;
  }
}

function validateMergeableFixPr({ pull, view, preflight }) {
  if (pull.state !== "open") return `pull request is ${pull.state}`;
  if (pull.draft || view.isDraft) return "pull request is draft";
  if (String(view.baseRefName ?? pull.base?.ref ?? "") !== "main") return "pull request base is not main";
  if (hasSecuritySignalText(pull.title, pull.body, pull.labels ?? [])) {
    return "security-sensitive PR requires central security triage";
  }
  if (view.mergeable !== "MERGEABLE") return `mergeable state is ${view.mergeable || "unknown"}`;
  if (!FIX_PR_MERGE_STATES.has(String(view.mergeStateStatus ?? ""))) {
    return `merge state status is ${view.mergeStateStatus || "unknown"}`;
  }
  if (["CHANGES_REQUESTED", "REVIEW_REQUIRED"].includes(String(view.reviewDecision ?? ""))) {
    return `review decision is ${view.reviewDecision}`;
  }

  const preflightBlock = validateMergePreflight(preflight);
  if (preflightBlock) return preflightBlock;

  const threadBlock = validateResolvedReviewThreads(result.repo, pull.number);
  if (threadBlock) return threadBlock;

  const checkBlock = shouldRequirePrChecks() ? validateStatusChecks(view.statusCheckRollup ?? []) : "";
  if (checkBlock) return checkBlock;

  return "";
}

function validateMergePreflight(preflight) {
  if (!preflight || typeof preflight !== "object") return "merge_preflight is missing";
  if (preflight.security_status !== "cleared") return "security preflight is not cleared";
  if (!Array.isArray(preflight.security_evidence) || preflight.security_evidence.length === 0) {
    return "security preflight evidence is missing";
  }
  if (preflight.comments_status !== "resolved") return "review comments are not resolved";
  if (!Array.isArray(preflight.comments_evidence) || preflight.comments_evidence.length === 0) {
    return "review comments resolution evidence is missing";
  }
  if (preflight.bot_comments_status !== "resolved") return "review-bot comments are not resolved";
  if (!Array.isArray(preflight.bot_comments_evidence) || preflight.bot_comments_evidence.length === 0) {
    return "review-bot comment resolution evidence is missing";
  }
  if (!Array.isArray(preflight.validation_commands) || preflight.validation_commands.length === 0) {
    return "merge validation commands are missing";
  }
  const codexReview = preflight.codex_review;
  if (!codexReview || codexReview.command !== "/review") return "Codex /review preflight is missing";
  if (!["passed", "clean"].includes(codexReview.status)) return `Codex /review status is ${codexReview.status || "missing"}`;
  if (codexReview.findings_addressed !== true) return "Codex /review findings are not addressed";
  if (!Array.isArray(codexReview.evidence) || codexReview.evidence.length === 0) {
    return "Codex /review evidence is missing";
  }
  return "";
}

function validateStatusChecks(checks) {
  if (!Array.isArray(checks) || checks.length === 0) return "no PR checks found";
  const ignored = ignoredCheckNames();
  const blockers = [];
  for (const check of checks) {
    const name = String(check.name ?? check.context ?? "unknown check");
    if (ignored.has(name)) continue;
    const status = String(check.status ?? check.state ?? "").toUpperCase();
    const conclusion = String(check.conclusion ?? "").toUpperCase();
    if (status && !["COMPLETED", "SUCCESS"].includes(status)) {
      blockers.push(`${name}: ${status}`);
      continue;
    }
    if (conclusion && !PASSING_CHECK_CONCLUSIONS.has(conclusion)) {
      blockers.push(`${name}: ${conclusion}`);
    }
  }
  if (blockers.length > 0) return `checks are not clean: ${blockers.slice(0, 5).join(", ")}`;
  return "";
}

function shouldWaitForMergeReadiness({ mergeBlock, view }) {
  const message = String(mergeBlock ?? "").toLowerCase();
  if (message.includes("mergeable state is unknown")) return true;
  if (message.includes("merge state status is unknown")) return true;
  if (message.includes("merge state status is unstable")) return hasPendingChecks(view.statusCheckRollup ?? []);
  if (message.includes("checks are not clean")) return hasPendingChecks(view.statusCheckRollup ?? []);
  return false;
}

function hasPendingChecks(checks) {
  const ignored = ignoredCheckNames();
  return (checks ?? []).some((check) => {
    const name = String(check.name ?? check.context ?? "unknown check");
    if (ignored.has(name)) return false;
    const status = String(check.status ?? check.state ?? "").toUpperCase();
    const conclusion = String(check.conclusion ?? "").toUpperCase();
    if (conclusion) return false;
    return Boolean(status) && !["COMPLETED", "SUCCESS"].includes(status);
  });
}

function ignoredCheckNames() {
  const configured = String(process.env.CLOWNFISH_POST_FLIGHT_IGNORE_CHECKS ?? DEFAULT_IGNORED_CHECKS.join(","));
  return new Set(
    configured
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
  );
}

function shouldRequirePrChecks() {
  return process.env.CLOWNFISH_POST_FLIGHT_REQUIRE_PR_CHECKS === "1";
}

function validateResolvedReviewThreads(repo, number) {
  const [owner, name] = repo.split("/");
  const query = `
    query($owner: String!, $name: String!, $number: Int!) {
      repository(owner: $owner, name: $name) {
        pullRequest(number: $number) {
          reviewThreads(first: 100) {
            pageInfo { hasNextPage }
            nodes {
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
  const data = ghJson([
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
  ]);
  const threads = data?.data?.repository?.pullRequest?.reviewThreads;
  if (threads?.pageInfo?.hasNextPage) return "too many review threads to prove resolved";
  const unresolved = (threads?.nodes ?? []).filter((thread) => thread && !thread.isResolved);
  if (unresolved.length === 0) return "";
  const examples = unresolved
    .slice(0, 3)
    .map((thread) => thread.comments?.nodes?.[0]?.url ?? `${thread.path}:${thread.line ?? "?"}`);
  return `unresolved review threads remain: ${examples.join(", ")}`;
}

function fetchPullRequest(repo, number) {
  return ghJson(["api", `repos/${repo}/pulls/${number}`]);
}

function fetchIssue(repo, number) {
  return ghJson(["api", `repos/${repo}/issues/${number}`]);
}

function fetchPullRequestView(repo, number) {
  return ghJson([
    "pr",
    "view",
    String(number),
    "--repo",
    repo,
    "--json",
    [
      "baseRefName",
      "isDraft",
      "mergeable",
      "mergeCommit",
      "mergeStateStatus",
      "mergedAt",
      "reviewDecision",
      "state",
      "statusCheckRollup",
      "title",
      "updatedAt",
      "url",
    ].join(","),
  ]);
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

function readSiblingJson(resultPath, name) {
  const file = path.join(path.dirname(resultPath), name);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function writeReport(report, resultPath) {
  const reportPath = path.join(path.dirname(resultPath), "post-flight-report.json");
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify(report, null, 2));
}

function parsePullRequestUrl(value) {
  const match = String(value ?? "").match(/^https:\/\/github\.com\/([^/]+\/[^/]+)\/pull\/(\d+)(?:[/?#].*)?$/i);
  if (!match) return null;
  return { repo: match[1], number: Number(match[2]) };
}

function ghJson(ghArgs) {
  const text = ghWithRetry(ghArgs);
  return JSON.parse(stripAnsi(text) || "null");
}

function ghWithRetry(ghArgs, attempts = 6) {
  const env = { ...process.env, NO_COLOR: "1", CLICOLOR: "0" };
  delete env.FORCE_COLOR;
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      return execFileSync("gh", ghArgs, {
        cwd: repoRoot(),
        encoding: "utf8",
        env,
        maxBuffer: 64 * 1024 * 1024,
        stdio: ["ignore", "pipe", "pipe"],
      }).trim();
    } catch (error) {
      lastError = error;
      if (!shouldRetryGh(error) || attempt === attempts - 1) throw error;
      sleepMs(Math.min(120_000, 10_000 * 2 ** attempt));
    }
  }
  throw lastError;
}

function ghBestEffort(ghArgs) {
  try {
    ghWithRetry(ghArgs, 2);
  } catch {
    // Labels are useful for operator visibility, but should not block a proven closeout.
  }
}

function normalizeIssueRef(value) {
  const text = String(value ?? "").trim();
  const match =
    text.match(/^#(\d+)$/) ??
    text.match(/^(\d+)$/) ??
    text.match(/github\.com\/[^/]+\/[^/]+\/(?:issues|pull)\/(\d+)(?:[/?#].*)?$/i);
  return match ? Number(match[1]) : 0;
}

function stripAnsi(text) {
  return String(text ?? "").replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
}

function compactText(text, maxChars) {
  const value = stripAnsi(String(text ?? "")).replace(/\s+/g, " ").trim();
  if (value.length <= maxChars) return value;
  return `${value.slice(0, maxChars - 3)}...`;
}

function commandErrorText(error) {
  return [
    error?.stderr,
    error?.stdout,
    error instanceof Error ? error.message : String(error ?? ""),
  ]
    .filter(Boolean)
    .join("\n")
    .trim();
}

function isRecoverableMergeRace(message) {
  return /pull request has merge conflicts|merge conflict|base branch was modified|head branch was modified|not mergeable/i.test(
    String(message ?? ""),
  );
}

function shouldRetryGh(error) {
  const stderr = String(error?.stderr ?? "");
  const message = `${error instanceof Error ? error.message : String(error)}\n${stderr}`;
  return (
    message.includes("was submitted too quickly") ||
    message.includes("secondary rate") ||
    message.includes("API rate limit exceeded") ||
    message.includes("Base branch was modified") ||
    message.includes("Head branch was modified")
  );
}

function sleepMs(milliseconds) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

function numberEnv(name, fallback) {
  const value = Number(process.env[name] ?? fallback);
  if (!Number.isFinite(value) || value < 0) return fallback;
  return value;
}
