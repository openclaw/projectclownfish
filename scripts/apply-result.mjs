#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { assertAllowedOwner, hasSecuritySignalText, parseArgs, parseJob, repoRoot, validateJob } from "./lib.mjs";

const MAINTAINER_AUTHOR_ASSOCIATIONS = new Set(["OWNER", "MEMBER", "COLLABORATOR"]);
const CLOSE_ACTIONS = new Set([
  "close",
  "close_duplicate",
  "close_superseded",
  "close_fixed_by_candidate",
  "close_low_signal",
  "post_merge_close",
]);
const MERGE_ACTIONS = new Set(["merge_candidate", "merge_canonical"]);
const CLOSE_CLASSIFICATIONS = new Set(["duplicate", "superseded", "fixed_by_candidate", "low_signal"]);
const PASSING_CHECK_CONCLUSIONS = new Set(["SUCCESS", "SKIPPED", "NEUTRAL"]);
const CLEAN_MERGE_STATES = new Set(["CLEAN"]);
const HUMAN_REVIEW_LABEL = "clownfish:human-review";
const MERGE_READY_LABEL = "clownfish:merge-ready";

const args = parseArgs(process.argv.slice(2));
const jobPath = args._[0];
const resultPathArg = args._[1];
const latest = Boolean(args.latest);
const dryRun = Boolean(args["dry-run"] || process.env.CLOWNFISH_APPLY_DRY_RUN === "1");
const allowMissingUpdatedAt = Boolean(args["allow-missing-updated-at"]);
const reportPathArg = args["report"];

if (!jobPath) {
  console.error("usage: node scripts/apply-result.mjs <job.md> [result.json] [--latest] [--dry-run]");
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
  throw new Error("refusing apply: job frontmatter mode is not execute or autonomous");
}
if (process.env.CLOWNFISH_ALLOW_EXECUTE !== "1") {
  throw new Error("refusing apply: CLOWNFISH_ALLOW_EXECUTE must be 1");
}
const resultPath = resultPathArg ? path.resolve(resultPathArg) : findLatestResultPath();
const result = JSON.parse(fs.readFileSync(resultPath, "utf8"));
if (result.repo !== job.frontmatter.repo) {
  throw new Error(`result repo ${result.repo} does not match job repo ${job.frontmatter.repo}`);
}
if (result.cluster_id !== job.frontmatter.cluster_id) {
  throw new Error(
    `result cluster ${result.cluster_id} does not match job cluster ${job.frontmatter.cluster_id}`,
  );
}
if (!["execute", "autonomous"].includes(result.mode)) {
  throw new Error(`refusing apply: result mode is ${result.mode}`);
}
if (result.mode !== job.frontmatter.mode) {
  throw new Error(`refusing apply: result mode ${result.mode} does not match job mode ${job.frontmatter.mode}`);
}

const report = {
  repo: result.repo,
  cluster_id: result.cluster_id,
  dry_run: dryRun,
  result_path: path.relative(repoRoot(), resultPath),
  applied_at: new Date().toISOString(),
  actions: [],
};

const allowedRefs = new Set(
  [
    ...(job.frontmatter.cluster_refs ?? []),
    ...(job.frontmatter.canonical ?? []),
    ...(job.frontmatter.candidates ?? []),
  ]
    .map((ref) => normalizeIssueRef(ref, result.repo))
    .filter(Boolean),
);
const maintainerCloseRefs = new Set(
  (job.frontmatter.maintainer_close_refs ?? [])
    .map((ref) => normalizeIssueRef(ref, result.repo))
    .filter(Boolean),
);

for (const action of result.actions ?? []) {
  if (!isApplicatorAction(action)) continue;
  report.actions.push(applyAction({ job, result, action, dryRun, allowMissingUpdatedAt }));
}

const reportPath =
  typeof reportPathArg === "string"
    ? path.resolve(reportPathArg)
    : path.join(path.dirname(resultPath), "apply-report.json");
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));

function findLatestResultPath() {
  const runsRoot = path.join(repoRoot(), ".projectclownfish", "runs");
  if (!fs.existsSync(runsRoot)) {
    throw new Error("no run directory exists");
  }
  const candidates = [];
  for (const runName of fs.readdirSync(runsRoot)) {
    const candidate = path.join(runsRoot, runName, "result.json");
    if (!fs.existsSync(candidate)) continue;
    candidates.push({ path: candidate, mtimeMs: fs.statSync(candidate).mtimeMs });
  }
  candidates.sort((left, right) => right.mtimeMs - left.mtimeMs);
  if (!candidates[0]) throw new Error("no result.json files found");
  return candidates[0].path;
}

function readFixExecutionReport() {
  const reportPath = path.join(path.dirname(resultPath), "fix-execution-report.json");
  if (!fs.existsSync(reportPath)) return null;
  return JSON.parse(fs.readFileSync(reportPath, "utf8"));
}

function applyAction({ job, result, action, dryRun, allowMissingUpdatedAt }) {
  const target = normalizeIssueRef(action.target, result.repo);
  const actionName = String(action.action ?? "");
  const classification = normalizeClassification(action);
  const canonical = normalizeIssueRef(action.canonical ?? action.duplicate_of, result.repo);
  const candidateFix = normalizeIssueRef(
    action.candidate_fix ?? action.fixed_by ?? action.fix_candidate,
    result.repo,
  );
  const idempotencyKey =
    typeof action.idempotency_key === "string" && action.idempotency_key.trim()
      ? action.idempotency_key.trim()
      : defaultIdempotencyKey(result.cluster_id, target, actionName, classification);
  const base = {
    target: `#${target}`,
    action: actionName,
    classification,
    canonical: canonical ? `#${canonical}` : undefined,
    candidate_fix: candidateFix ? `#${candidateFix}` : undefined,
    idempotency_key: idempotencyKey,
  };

  if (!target) return { ...base, status: "failed", reason: "target must look like #123" };
  if (action.status !== "planned") {
    return {
      ...base,
      status: "skipped",
      source_status: action.status ?? null,
      reason: action.reason ?? `action status is ${action.status}`,
    };
  }
  if (MERGE_ACTIONS.has(actionName)) {
    return applyMergeAction({ job, result, action, dryRun, allowMissingUpdatedAt, target, base });
  }
  if (!CLOSE_ACTIONS.has(actionName)) {
    return { ...base, status: "skipped", reason: "action is not an applicator action" };
  }

  return applyCloseAction({ job, result, action, dryRun, allowMissingUpdatedAt, target, base, actionName, classification, canonical, candidateFix, idempotencyKey });
}

function applyCloseAction({
  job,
  result,
  action,
  dryRun,
  allowMissingUpdatedAt,
  target,
  base,
  actionName,
  classification,
  canonical,
  candidateFix,
  idempotencyKey,
}) {
  const closePolicyBlock = validateClosePolicy({ job, actionName });
  if (closePolicyBlock) return { ...base, status: "blocked", reason: closePolicyBlock };
  const fixFirstBlock = validateFixFirstClose({ job, result, actionName, classification, candidateFix });
  if (fixFirstBlock) return { ...base, status: "blocked", reason: fixFirstBlock };
  if (!CLOSE_CLASSIFICATIONS.has(classification)) {
    return {
      ...base,
      status: "blocked",
      reason: "auto-closure requires duplicate, superseded, fixed_by_candidate, or low_signal classification",
    };
  }
  if (actionName === "post_merge_close" && job.frontmatter.allow_post_merge_close !== true) {
    return { ...base, status: "blocked", reason: "post-merge close requires allow_post_merge_close: true" };
  }
  if (!job.frontmatter.candidates.map(normalizeIssueRef).includes(target)) {
    return { ...base, status: "blocked", reason: "target is not listed in job candidates" };
  }
  if (classification === "low_signal" || actionName === "close_low_signal") {
    const lowSignalBlock = validateLowSignalIntent({ job, action, actionName, classification });
    if (lowSignalBlock) return { ...base, status: "blocked", reason: lowSignalBlock };
  }
  const explicitSupersededByCandidate =
    actionName === "close_superseded" &&
    classification === "superseded" &&
    !canonical &&
    candidateFix &&
    maintainerCloseRefs.has(target);
  if ((classification === "duplicate" || classification === "superseded") && !canonical && !explicitSupersededByCandidate) {
    return { ...base, status: "blocked", reason: "closure requires canonical or duplicate_of" };
  }
  const isPostMergeFixedClose = actionName === "post_merge_close" && classification === "fixed_by_candidate";
  if (canonical && !allowedRefs.has(canonical) && !isPostMergeFixedClose) {
    return { ...base, status: "blocked", reason: "canonical is not listed in job refs" };
  }
  if (classification === "fixed_by_candidate" && !candidateFix) {
    return { ...base, status: "blocked", reason: "closure requires candidate_fix" };
  }
  if (candidateFix && !allowedRefs.has(candidateFix) && !isPostMergeFixedClose) {
    return { ...base, status: "blocked", reason: "candidate fix is not listed in job refs" };
  }
  if (actionName === "post_merge_close" || explicitSupersededByCandidate) {
    const candidateBlock = validateMergedCandidateFix(result.repo, candidateFix);
    if (candidateBlock) return { ...base, status: "blocked", reason: candidateBlock };
  }
  if (canonical === target || candidateFix === target) {
    return { ...base, status: "blocked", reason: "target cannot close against itself" };
  }
  const replacementCloseoutBlock = validateReplacementCloseout({ result, actionName, target });
  if (replacementCloseoutBlock) return { ...base, status: "blocked", reason: replacementCloseoutBlock };

  const live = fetchIssue(result.repo, target);
  const kind = live.pull_request ? "pull_request" : "issue";
  const authorAssociation = normalizeAuthorAssociation(live.author_association);
  if (hasSecuritySignal(live)) {
    return {
      ...base,
      status: "blocked",
      reason: "security-sensitive target requires central security triage",
      live_state: live.state,
    };
  }
  if (MAINTAINER_AUTHOR_ASSOCIATIONS.has(authorAssociation) && !maintainerCloseRefs.has(target)) {
    return {
      ...base,
      status: "blocked",
      reason: `target author association is ${authorAssociation}`,
      live_state: live.state,
    };
  }
  if (classification === "low_signal") {
    const lowSignalBlock = validateLowSignalLiveState(result.repo, target, live, kind);
    if (lowSignalBlock) {
      return {
        ...base,
        status: "blocked",
        reason: lowSignalBlock,
        live_state: live.state,
        live_updated_at: live.updated_at,
      };
    }
  }

  const expectedUpdatedAt = action.target_updated_at ?? action.live_updated_at;
  if (!expectedUpdatedAt && !allowMissingUpdatedAt) {
    return {
      ...base,
      status: "blocked",
      reason: "missing target_updated_at; rerun the worker against live GitHub state",
      live_state: live.state,
      live_updated_at: live.updated_at,
    };
  }
  if (expectedUpdatedAt && expectedUpdatedAt !== live.updated_at) {
    return {
      ...base,
      status: "blocked",
      reason: "target changed since worker review",
      expected_updated_at: expectedUpdatedAt,
      live_updated_at: live.updated_at,
      live_state: live.state,
    };
  }

  const comment = renderCloseComment({ action, classification, result, target, live });
  const marker = idempotencyMarker(result.cluster_id, target, idempotencyKey);
  const body = comment.includes(marker) ? comment : `${comment.trim()}\n\n${marker}`;
  const existingComment = findExistingComment(result.repo, target, marker, body);

  if (live.state !== "open") {
    return {
      ...base,
      status: existingComment ? "executed" : "skipped",
      reason: existingComment ? "already closed with matching projectclownfish comment" : "already closed",
      live_state: live.state,
    };
  }

  if (dryRun) {
    return {
      ...base,
      status: "planned",
      reason: "dry run",
      live_state: live.state,
      live_updated_at: live.updated_at,
      comment,
    };
  }

  if (!existingComment) {
    postIssueComment(result.repo, target, body);
  }
  closeIssueOrPullRequest(result.repo, target, kind, classification);

  return {
    ...base,
    status: "executed",
    reason: closeReasonText(classification),
    live_state: "closed",
    live_updated_at: live.updated_at,
  };
}

function applyMergeAction({ job, result, action, dryRun, allowMissingUpdatedAt, target, base }) {
  const policyBlock = validateMergePolicy({ job, action });
  if (policyBlock) return { ...base, status: "blocked", reason: policyBlock };
  if (!allowedRefs.has(target)) {
    return { ...base, status: "blocked", reason: "merge target is not listed in job refs" };
  }
  if (action.target_kind !== "pull_request") {
    return { ...base, status: "blocked", reason: "merge action requires pull_request target_kind" };
  }

  const live = fetchIssue(result.repo, target);
  if (!live.pull_request) {
    return { ...base, status: "blocked", reason: "merge target is not a pull request", live_state: live.state };
  }
  if (hasSecuritySignal(live)) {
    return {
      ...base,
      status: "blocked",
      reason: "security-sensitive target requires central security triage",
      live_state: live.state,
    };
  }

  const expectedUpdatedAt = action.target_updated_at ?? action.live_updated_at;
  if (!expectedUpdatedAt && !allowMissingUpdatedAt) {
    return {
      ...base,
      status: "blocked",
      reason: "missing target_updated_at; rerun the worker against live GitHub state",
      live_state: live.state,
      live_updated_at: live.updated_at,
    };
  }
  if (expectedUpdatedAt && expectedUpdatedAt !== live.updated_at) {
    return {
      ...base,
      status: "blocked",
      reason: "target changed since worker review",
      expected_updated_at: expectedUpdatedAt,
      live_updated_at: live.updated_at,
      live_state: live.state,
    };
  }

  const pullRequest = fetchPullRequest(result.repo, target);
  const view = fetchPullRequestView(result.repo, target);
  const mergedAt = pullRequest.merged_at ?? view.mergedAt ?? null;
  if (mergedAt) {
    return {
      ...base,
      status: "executed",
      reason: "already merged",
      live_state: "merged",
      live_updated_at: live.updated_at,
      merged_at: mergedAt,
      merge_commit_sha: pullRequest.merge_commit_sha ?? view.mergeCommit?.oid ?? null,
    };
  }

  const mergeBlock = validateMergeablePullRequest({ pullRequest, view });
  if (mergeBlock) {
    return {
      ...base,
      status: "blocked",
      reason: mergeBlock,
      live_state: live.state,
      live_updated_at: live.updated_at,
    };
  }
  const mergePreflightBlock = validateMergePreflight({ result, target });
  if (mergePreflightBlock) {
    return {
      ...base,
      status: "blocked",
      reason: mergePreflightBlock,
      live_state: live.state,
      live_updated_at: live.updated_at,
    };
  }

  if (process.env.CLOWNFISH_ALLOW_MERGE !== "1") {
    if (!dryRun) labelForHumanMergeReview(result.repo, target);
    return {
      ...base,
      status: "blocked",
      reason: "merge requires CLOWNFISH_ALLOW_MERGE=1; labeled for human review",
      live_state: live.state,
      live_updated_at: live.updated_at,
      merge_method: "squash",
    };
  }

  if (dryRun) {
    return {
      ...base,
      status: "planned",
      reason: "dry run",
      live_state: live.state,
      live_updated_at: live.updated_at,
      merge_method: "squash",
    };
  }

  ghWithRetry(["pr", "merge", String(target), "--repo", result.repo, "--squash"]);
  const merged = fetchPullRequest(result.repo, target);
  return {
    ...base,
    status: "executed",
    reason: "merged by projectclownfish",
    live_state: "merged",
    live_updated_at: live.updated_at,
    merged_at: merged.merged_at ?? null,
    merge_commit_sha: merged.merge_commit_sha ?? null,
    merge_method: "squash",
  };
}

function validateClosePolicy({ job, actionName }) {
  if (!job.frontmatter.allowed_actions.includes("close")) return "job does not allow close";
  if (!job.frontmatter.allowed_actions.includes("comment")) return "job does not allow close comments";
  if ((job.frontmatter.blocked_actions ?? []).includes("close")) return "close is blocked by job frontmatter";
  if ((job.frontmatter.blocked_actions ?? []).includes("comment")) return "comment is blocked by job frontmatter";
  if (!["close_low_signal", "post_merge_close"].includes(actionName) && job.frontmatter.allow_instant_close !== true) {
    return "instant close requires allow_instant_close: true";
  }
  return "";
}

function validateFixFirstClose({ job, result, actionName, classification, candidateFix }) {
  if (job.frontmatter.require_fix_before_close !== true) return "";
  if (["close_low_signal", "post_merge_close"].includes(actionName)) return "";

  const priorMerge = report.actions.some(
    (entry) => MERGE_ACTIONS.has(entry.action) && entry.status === "executed",
  );
  if (priorMerge) return "";

  if (candidateFix && isMergedCandidateFix(result.repo, candidateFix)) {
    return "";
  }

  const fixReport = readFixExecutionReport(result);
  const fixLanded = (fixReport?.actions ?? []).some((entry) =>
    ["open_fix_pr", "repair_contributor_branch"].includes(String(entry.action ?? "")) &&
    ["opened", "pushed"].includes(String(entry.status ?? "")),
  );
  if (fixLanded) return "";

  return "close requires ProjectClownfish fix PR opened/pushed or merge executed first";
}

function isMergedCandidateFix(repo, candidateFix) {
  try {
    return validateMergedCandidateFix(repo, candidateFix) === "";
  } catch {
    return false;
  }
}

function validateMergePolicy({ job, action }) {
  if (!job.frontmatter.allowed_actions.includes("merge")) return "job does not allow merge";
  if ((job.frontmatter.blocked_actions ?? []).includes("merge")) return "merge is blocked by job frontmatter";
  if (job.frontmatter.allow_merge !== true) return "merge requires allow_merge: true";
  if (!["merge_candidate", "merge_canonical"].includes(String(action.action ?? ""))) {
    return "unsupported merge action";
  }
  return "";
}

function labelForHumanMergeReview(repo, target) {
  ensureLabel(repo, HUMAN_REVIEW_LABEL, "B60205", "Needs maintainer review before ProjectClownfish can finish");
  ensureLabel(repo, MERGE_READY_LABEL, "0E8A16", "ProjectClownfish found a merge-ready candidate; human owns the final merge");
  ghBestEffort(["issue", "edit", String(target), "--repo", repo, "--add-label", HUMAN_REVIEW_LABEL]);
  ghBestEffort(["issue", "edit", String(target), "--repo", repo, "--add-label", MERGE_READY_LABEL]);
}

function ensureLabel(repo, name, color, description) {
  try {
    execFileSync("gh", ["label", "create", name, "--repo", repo, "--color", color, "--description", description], {
      cwd: repoRoot(),
      encoding: "utf8",
      env: process.env,
      stdio: ["ignore", "pipe", "pipe"],
      maxBuffer: 8 * 1024 * 1024,
    });
  } catch (error) {
    const detail = commandErrorText(error);
    if (!/already exists/i.test(detail)) return;
  }
}

function validateMergePreflight({ result, target }) {
  const preflight = findMergePreflight(result, target);
  if (!preflight) return "merge requires merge_preflight entry";
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
  const unresolvedThreadBlock = validateResolvedReviewThreads(result.repo, target);
  if (unresolvedThreadBlock) return unresolvedThreadBlock;
  return "";
}

function findMergePreflight(result, target) {
  const expected = `#${target}`;
  for (const item of result.merge_preflight ?? []) {
    if (normalizeIssueRef(item?.target, result.repo) === target || String(item?.target ?? "") === expected) {
      return item;
    }
  }
  return null;
}

function validateMergedCandidateFix(repo, candidateFix) {
  if (!candidateFix) return "post-merge close requires candidate_fix";
  const candidate = fetchPullRequest(repo, candidateFix);
  if (!candidate.merged_at) return "candidate fix is not merged";
  return "";
}

function validateResolvedReviewThreads(repo, target) {
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
    `number=${target}`,
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

function validateReplacementCloseout({ result, actionName, target }) {
  if (!["close_superseded", "close_fixed_by_candidate", "post_merge_close"].includes(actionName)) return "";
  const fixArtifact = result.fix_artifact;
  if (fixArtifact?.repair_strategy !== "replace_uneditable_branch") return "";
  const sourceTargets = new Set((fixArtifact.source_prs ?? []).map((ref) => normalizeIssueRef(ref, result.repo)));
  if (!sourceTargets.has(target)) return "";
  return "replacement PR closeout is handled by execute-fix after the replacement branch is pushed";
}

function validateMergeablePullRequest({ pullRequest, view }) {
  if (pullRequest.state !== "open") return `pull request is ${pullRequest.state}`;
  if (pullRequest.draft || view.isDraft) return "pull request is draft";
  if (String(view.baseRefName ?? pullRequest.base?.ref ?? "") !== "main") return "pull request base is not main";
  if (view.mergeable !== "MERGEABLE") return `mergeable state is ${view.mergeable || "unknown"}`;
  if (!CLEAN_MERGE_STATES.has(String(view.mergeStateStatus ?? ""))) {
    return `merge state status is ${view.mergeStateStatus || "unknown"}`;
  }
  if (["CHANGES_REQUESTED", "REVIEW_REQUIRED"].includes(String(view.reviewDecision ?? ""))) {
    return `review decision is ${view.reviewDecision}`;
  }
  const checkBlock = validateStatusChecks(view.statusCheckRollup ?? []);
  if (checkBlock) return checkBlock;
  return "";
}

function validateStatusChecks(checks) {
  if (!Array.isArray(checks) || checks.length === 0) return "no PR checks found";
  const blockers = [];
  for (const check of checks) {
    const name = check.name ?? check.context ?? "unknown check";
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

function isApplicatorAction(action) {
  return CLOSE_ACTIONS.has(String(action?.action ?? "")) || MERGE_ACTIONS.has(String(action?.action ?? ""));
}

function normalizeIssueRef(value, expectedRepo = "") {
  const text = String(value ?? "").trim();
  const shorthand = text.match(/^#?(\d+)$/);
  if (shorthand) return Number(shorthand[1]);

  const url = text.match(/^https:\/\/github\.com\/([^/]+\/[^/]+)\/(?:issues|pull)\/(\d+)(?:[/?#].*)?$/);
  if (!url) return 0;
  if (expectedRepo && url[1].toLowerCase() !== expectedRepo.toLowerCase()) return 0;
  return Number(url[2]);
}

function normalizeClassification(action) {
  const raw = String(action.classification ?? action.close_reason ?? action.reason ?? "").toLowerCase();
  if (raw.includes("low_signal") || raw.includes("low-signal") || raw.includes("low signal")) return "low_signal";
  if (raw.includes("fixed") || raw.includes("candidate")) return "fixed_by_candidate";
  if (raw.includes("superseded") || raw.includes("supersede")) return "superseded";
  if (raw.includes("duplicate") || raw.includes("dupe")) return "duplicate";
  if (action.action === "close_fixed_by_candidate") return "fixed_by_candidate";
  if (action.action === "close_low_signal") return "low_signal";
  if (action.action === "close_superseded") return "superseded";
  if (action.action === "close_duplicate") return "duplicate";
  if (action.action === "post_merge_close") return "fixed_by_candidate";
  return raw;
}

function defaultIdempotencyKey(clusterId, target, actionName, classification) {
  return sha256(`${clusterId}:${target}:${actionName}:${classification}`).slice(0, 24);
}

function idempotencyMarker(clusterId, target, key) {
  return `<!-- projectclownfish:close:${clusterId}:#${target}:${key} -->`;
}

function renderCloseComment({ action, classification, result, target, live }) {
  if (typeof action.comment === "string" && action.comment.trim()) return action.comment;
  const canonical = normalizeIssueRef(action.canonical ?? action.duplicate_of);
  const candidateFix = normalizeIssueRef(action.candidate_fix ?? action.fixed_by ?? action.fix_candidate);
  const title = typeof live.title === "string" ? live.title : `#${target}`;
  const evidence = Array.isArray(action.evidence) ? action.evidence : [];
  const evidenceLines = evidence
    .slice(0, 5)
    .map((item) => `- ${typeof item === "string" ? item : (item.detail ?? JSON.stringify(item))}`);
  const reason = action.reason ? String(action.reason).trim() : closeReasonText(classification);
  const lines = [`Thanks for this. Projectclownfish reviewed this cluster and is closing #${target}.`];
  lines.push("");
  if (classification === "duplicate" && canonical) {
    lines.push(
      `This appears to duplicate #${canonical}. I'm keeping #${canonical} as the canonical thread so fixes, validation, and follow-up stay in one place.`,
    );
  } else if (classification === "superseded" && canonical) {
    lines.push(
      `This is superseded by #${canonical}. I'm keeping that thread as the canonical path so the useful context and contributor credit stay visible.`,
    );
  } else if (classification === "superseded" && candidateFix) {
    lines.push(
      `This is superseded by landed fix #${candidateFix}. I'm closing this older overlap so validation and follow-up stay attached to the shipped path.`,
    );
  } else if (classification === "fixed_by_candidate" && candidateFix) {
    lines.push(
      `This is covered by candidate fix #${candidateFix}. I'm closing this thread so validation and follow-up stay attached to that fix path.`,
    );
  } else if (classification === "low_signal") {
    lines.push(
      "This falls under the low-signal PR cleanup policy: the PR does not currently present a reviewable OpenClaw fix with maintainer signal, current validation, or a focused product path. Please reopen from a clean branch with a scoped summary, linked issue or rationale, and validation if this is still needed.",
    );
  } else {
    lines.push(reason);
  }
  lines.push("");
  lines.push(`Cluster: \`${result.cluster_id}\``);
  lines.push(`Reviewed item: #${target} - ${title}`);
  if (evidenceLines.length) lines.push("", "Evidence:", ...evidenceLines);
  lines.push(
    "",
    "If this has a different reproduction path or still reproduces after the canonical fix lands, reply and we can reopen or split it back out.",
  );
  return lines.join("\n");
}

function closeReasonText(classification) {
  switch (classification) {
    case "duplicate":
      return "duplicate of the canonical thread";
    case "superseded":
      return "superseded by the canonical candidate";
    case "fixed_by_candidate":
      return "covered by the candidate fix";
    case "low_signal":
      return "low-signal PR cleanup";
    default:
      return "closed by projectclownfish";
  }
}

function validateLowSignalIntent({ job, action, actionName, classification }) {
  if (job.frontmatter.triage_policy !== "low_signal_prs") {
    return "low-signal close requires triage_policy: low_signal_prs";
  }
  if (job.frontmatter.allow_low_signal_pr_close !== true) {
    return "low-signal close requires allow_low_signal_pr_close: true";
  }
  if (actionName !== "close_low_signal" || classification !== "low_signal") {
    return "low-signal close requires close_low_signal action and low_signal classification";
  }
  if (action.target_kind !== "pull_request") {
    return "low-signal close requires pull_request target_kind";
  }
  return "";
}

function validateLowSignalLiveState(repo, target, live, kind) {
  if (kind !== "pull_request") return "low-signal cleanup may only close pull requests";
  if (hasSecuritySignal(live)) return "security-sensitive target requires human triage";
  if (Array.isArray(live.assignees) && live.assignees.length > 0) {
    return "assigned PR has maintainer/human signal";
  }

  const pullRequest = fetchPullRequest(repo, target);
  if ((pullRequest.requested_reviewers ?? []).length > 0 || (pullRequest.requested_teams ?? []).length > 0) {
    return "requested reviewers or teams indicate active review signal";
  }

  const maintainerComments = ghPaged(`repos/${repo}/issues/${target}/comments`).filter((comment) =>
    MAINTAINER_AUTHOR_ASSOCIATIONS.has(normalizeAuthorAssociation(comment.author_association)),
  );
  if (maintainerComments.length > 0) return "maintainer issue comment blocks low-signal auto-close";

  const maintainerReviews = ghPaged(`repos/${repo}/pulls/${target}/reviews`).filter((review) =>
    MAINTAINER_AUTHOR_ASSOCIATIONS.has(normalizeAuthorAssociation(review.author_association)),
  );
  if (maintainerReviews.length > 0) return "maintainer PR review blocks low-signal auto-close";

  return "";
}

function hasSecuritySignal(issue) {
  return hasSecuritySignalText(issue.title, issue.body, issue.labels ?? []);
}

function fetchIssue(repo, number) {
  return ghJson(["api", `repos/${repo}/issues/${number}`]);
}

function fetchPullRequest(repo, number) {
  return ghJson(["api", `repos/${repo}/pulls/${number}`]);
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

function findExistingComment(repo, number, marker, body) {
  const comments = ghPaged(`repos/${repo}/issues/${number}/comments`);
  return comments.find((comment) => comment.body?.includes(marker) || comment.body === body);
}

function postIssueComment(repo, number, body) {
  const payloadPath = writePayload(`comment-${number}`, { body });
  ghWithRetry(["api", `repos/${repo}/issues/${number}/comments`, "--method", "POST", "--input", payloadPath]);
}

function closeIssueOrPullRequest(repo, number, kind, classification) {
  if (kind === "pull_request") {
    ghWithRetry(["pr", "close", String(number), "--repo", repo]);
    return;
  }
  const stateReason = classification === "fixed_by_candidate" ? "completed" : "not_planned";
  const payloadPath = writePayload(`close-${number}`, { state: "closed", state_reason: stateReason });
  ghWithRetry(["api", `repos/${repo}/issues/${number}`, "--method", "PATCH", "--input", payloadPath]);
}

function writePayload(name, value) {
  const dir = path.join(repoRoot(), ".projectclownfish", "payloads");
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${name}-${Date.now()}.json`);
  fs.writeFileSync(file, JSON.stringify(value), "utf8");
  return file;
}

function ghJson(ghArgs) {
  const text = ghWithRetry(ghArgs);
  return JSON.parse(text || "null");
}

function ghPaged(apiPath) {
  const pages = ghJson(["api", apiPath, "--paginate", "--slurp"]);
  if (!Array.isArray(pages)) return [];
  return pages.flatMap((page) => (Array.isArray(page) ? page : []));
}

function ghWithRetry(ghArgs, attempts = 6) {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      return execFileSync("gh", ghArgs, {
        cwd: repoRoot(),
        encoding: "utf8",
        env: process.env,
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
    return ghWithRetry(ghArgs);
  } catch {
    return "";
  }
}

function commandErrorText(error) {
  const stderr = String(error?.stderr ?? "").trim();
  return stderr || error?.message || String(error);
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

function normalizeAuthorAssociation(value) {
  return typeof value === "string" && value.trim() ? value.trim().toUpperCase() : "NONE";
}

function sha256(text) {
  return createHash("sha256").update(text).digest("hex");
}
