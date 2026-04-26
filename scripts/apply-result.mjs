#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { assertAllowedOwner, parseArgs, parseJob, repoRoot, validateJob } from "./lib.mjs";

const MAINTAINER_AUTHOR_ASSOCIATIONS = new Set(["OWNER", "MEMBER", "COLLABORATOR"]);
const CLOSE_ACTIONS = new Set([
  "close",
  "close_duplicate",
  "close_superseded",
  "close_fixed_by_candidate",
  "close_low_signal",
]);
const CLOSE_CLASSIFICATIONS = new Set(["duplicate", "superseded", "fixed_by_candidate", "low_signal"]);

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
if (!job.frontmatter.allowed_actions.includes("close")) {
  throw new Error("refusing apply: job does not allow close");
}
if (!job.frontmatter.allowed_actions.includes("comment")) {
  throw new Error("refusing apply: job does not allow comment");
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
    return { ...base, status: "skipped", reason: `action status is ${action.status}` };
  }
  if (!CLOSE_ACTIONS.has(actionName)) {
    return { ...base, status: "skipped", reason: "action is not an auto-closure action" };
  }
  if (!CLOSE_CLASSIFICATIONS.has(classification)) {
    return {
      ...base,
      status: "blocked",
      reason: "auto-closure requires duplicate, superseded, fixed_by_candidate, or low_signal classification",
    };
  }
  if (!job.frontmatter.candidates.map(normalizeIssueRef).includes(target)) {
    return { ...base, status: "blocked", reason: "target is not listed in job candidates" };
  }
  if (classification === "low_signal" || actionName === "close_low_signal") {
    const lowSignalBlock = validateLowSignalIntent({ job, action, actionName, classification });
    if (lowSignalBlock) return { ...base, status: "blocked", reason: lowSignalBlock };
  }
  if ((classification === "duplicate" || classification === "superseded") && !canonical) {
    return { ...base, status: "blocked", reason: "closure requires canonical or duplicate_of" };
  }
  if (canonical && !allowedRefs.has(canonical)) {
    return { ...base, status: "blocked", reason: "canonical is not listed in job refs" };
  }
  if (classification === "fixed_by_candidate" && !candidateFix) {
    return { ...base, status: "blocked", reason: "closure requires candidate_fix" };
  }
  if (candidateFix && !allowedRefs.has(candidateFix)) {
    return { ...base, status: "blocked", reason: "candidate fix is not listed in job refs" };
  }
  if (canonical === target || candidateFix === target) {
    return { ...base, status: "blocked", reason: "target cannot close against itself" };
  }

  const live = fetchIssue(result.repo, target);
  const kind = live.pull_request ? "pull_request" : "issue";
  const authorAssociation = normalizeAuthorAssociation(live.author_association);
  if (MAINTAINER_AUTHOR_ASSOCIATIONS.has(authorAssociation)) {
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

function isApplicatorAction(action) {
  return CLOSE_ACTIONS.has(String(action?.action ?? ""));
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
  const text = [issue.title, issue.body, ...(issue.labels ?? []).map((label) => label.name ?? label)]
    .join("\n")
    .toLowerCase();
  return /\b(security|vulnerability|secret|credential|cve|ghsa)\b/.test(text);
}

function fetchIssue(repo, number) {
  return ghJson(["api", `repos/${repo}/issues/${number}`]);
}

function fetchPullRequest(repo, number) {
  return ghJson(["api", `repos/${repo}/pulls/${number}`]);
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

function shouldRetryGh(error) {
  const stderr = String(error?.stderr ?? "");
  const message = `${error instanceof Error ? error.message : String(error)}\n${stderr}`;
  return (
    message.includes("was submitted too quickly") ||
    message.includes("secondary rate") ||
    message.includes("API rate limit exceeded")
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
