import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const SECURITY_SIGNAL_PATTERN =
  /\b(vulnerabilit(?:y|ies)|cve-\d+|ghsa|advisory|exploit|ssrf|xss|csrf|rce|(?:sql|command|code|prompt)\s*injection|auth(?:entication)?\s*bypass|privilege\s+escalation|sensitive\s+data|security\s+(?:issue|bug|fix|patch|advisory|triage|review)|(?:secretref|secret|credential|api[-_\s]?key|private[-_\s]?key|token).{0,80}(?:leak(?:ed|age)?|expos(?:e|ed|ure)|plaintext|plain[-_\s]?text)|(?:leak(?:ed|age)?|expos(?:e|ed|ure)|plaintext|plain[-_\s]?text).{0,80}(?:secretref|secret|credential|api[-_\s]?key|private[-_\s]?key|token))\b/i;
const PROMPT_ARTIFACT_MAX_CHARS = Number(process.env.CLOWNFISH_PROMPT_ARTIFACT_MAX_CHARS ?? 320_000);
const PROMPT_STRING_MAX_CHARS = Number(process.env.CLOWNFISH_PROMPT_STRING_MAX_CHARS ?? 700);
const DEFAULT_MAX_LIVE_WORKERS = 50;
const DEFAULT_CAPACITY_POLL_MS = 30_000;
const DEFAULT_CAPACITY_TIMEOUT_MS = 30 * 60 * 1000;
const ACTIVE_WORKFLOW_STATUSES = ["queued", "in_progress", "waiting", "requested", "pending"];

export function repoRoot() {
  return path.resolve(import.meta.dirname, "..");
}

export function currentProjectRepo() {
  return (
    process.env.CLOWNFISH_REPO ||
    process.env.GITHUB_REPOSITORY ||
    repoFromOriginRemote() ||
    "openclaw/clownfish"
  );
}

export function githubActionsRunUrl(runId) {
  return `https://github.com/${currentProjectRepo()}/actions/runs/${runId}`;
}

export function readMaxLiveWorkers(args = {}) {
  return readPositiveInteger(
    args["max-live-workers"] ?? args.max_live_workers ?? process.env.CLOWNFISH_MAX_LIVE_WORKERS ?? DEFAULT_MAX_LIVE_WORKERS,
    "max-live-workers",
  );
}

export function liveWorkerCapacity({
  repo = currentProjectRepo(),
  workflow = "cluster-worker.yml",
  requested = 1,
  maxLiveWorkers = DEFAULT_MAX_LIVE_WORKERS,
} = {}) {
  const requestedCount = readNonNegativeInteger(requested, "requested");
  const max = readPositiveInteger(maxLiveWorkers, "max-live-workers");
  const activeRuns = listActiveWorkflowRuns({ repo, workflow });
  return {
    repo,
    workflow,
    active: activeRuns.length,
    requested: requestedCount,
    max_live_workers: max,
    available: Math.max(0, max - activeRuns.length),
    active_runs: activeRuns,
  };
}

export function assertLiveWorkerCapacity(options = {}) {
  const capacity = liveWorkerCapacity(options);
  if (capacity.requested > capacity.max_live_workers) {
    throw new Error(
      `refusing dispatch: requested ${capacity.requested} ${capacity.workflow} workers exceeds max-live-workers=${capacity.max_live_workers}`,
    );
  }
  if (capacity.active + capacity.requested > capacity.max_live_workers) {
    throw new Error(
      `refusing dispatch: ${capacity.active} active ${capacity.workflow} workers + ${capacity.requested} requested would exceed max-live-workers=${capacity.max_live_workers}`,
    );
  }
  return capacity;
}

export function waitForLiveWorkerCapacity(options = {}) {
  const requestedCount = readNonNegativeInteger(options.requested ?? 1, "requested");
  const max = readPositiveInteger(options.maxLiveWorkers ?? DEFAULT_MAX_LIVE_WORKERS, "max-live-workers");
  if (requestedCount > max) {
    throw new Error(
      `refusing dispatch: requested ${requestedCount} ${options.workflow ?? "cluster-worker.yml"} workers exceeds max-live-workers=${max}`,
    );
  }
  const pollMs = readPositiveInteger(
    options.pollMs ?? process.env.CLOWNFISH_LIVE_WORKER_CAPACITY_POLL_MS ?? DEFAULT_CAPACITY_POLL_MS,
    "capacity poll ms",
  );
  const timeoutMs = readPositiveInteger(
    options.timeoutMs ?? process.env.CLOWNFISH_LIVE_WORKER_CAPACITY_TIMEOUT_MS ?? DEFAULT_CAPACITY_TIMEOUT_MS,
    "capacity timeout ms",
  );
  const deadline = Date.now() + timeoutMs;
  let latest = null;

  while (Date.now() <= deadline) {
    latest = liveWorkerCapacity(options);
    if (latest.requested <= latest.max_live_workers && latest.active + latest.requested <= latest.max_live_workers) {
      return latest;
    }
    sleepMs(Math.min(pollMs, Math.max(1, deadline - Date.now())));
  }

  throw new Error(
    `timed out waiting for ${options.workflow ?? "cluster-worker.yml"} capacity: ${latest?.active ?? "unknown"} active + ${requestedCount} requested exceeds max-live-workers=${max}`,
  );
}

export function listActiveWorkflowRuns({ repo = currentProjectRepo(), workflow = "cluster-worker.yml" } = {}) {
  const runs = [];
  for (const status of ACTIVE_WORKFLOW_STATUSES) {
    const workflowRuns = ghJson([
      "api",
      "--method",
      "GET",
      `repos/${repo}/actions/workflows/${encodeURIComponent(workflow)}/runs`,
      "-f",
      `status=${status}`,
      "-f",
      "per_page=100",
      "--jq",
      ".workflow_runs",
    ]);
    if (Array.isArray(workflowRuns)) runs.push(...workflowRuns.map((run) => normalizeWorkflowRun(run, status)));
  }
  return [...new Map(runs.map((run) => [String(run.databaseId ?? run.id), run])).values()].sort(
    (left, right) => Date.parse(right.createdAt ?? "") - Date.parse(left.createdAt ?? ""),
  );
}

function repoFromOriginRemote() {
  try {
    const remote = execFileSync("git", ["config", "--get", "remote.origin.url"], {
      cwd: repoRoot(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    const sshMatch = remote.match(/^git@github\.com:([^/]+\/[^/.]+)(?:\.git)?$/);
    if (sshMatch) return sshMatch[1];
    const httpsMatch = remote.match(/^https:\/\/github\.com\/([^/]+\/[^/.]+)(?:\.git)?$/);
    if (httpsMatch) return httpsMatch[1];
  } catch {
    return null;
  }
  return null;
}

function ghJson(ghArgs) {
  const env = { ...process.env, NO_COLOR: "1", CLICOLOR: "0" };
  delete env.FORCE_COLOR;
  const text = execFileSync("gh", ghArgs, {
    cwd: repoRoot(),
    env,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 64 * 1024 * 1024,
  });
  return JSON.parse(stripAnsi(text) || "null");
}

function stripAnsi(text) {
  return text.replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
}

function normalizeWorkflowRun(run, fallbackStatus) {
  return {
    databaseId: run.databaseId ?? run.database_id ?? run.id,
    status: run.status ?? fallbackStatus,
    conclusion: run.conclusion ?? null,
    createdAt: run.createdAt ?? run.created_at ?? null,
    url: run.url ?? run.html_url ?? null,
    displayTitle: run.displayTitle ?? run.display_title ?? run.name ?? null,
  };
}

function readPositiveInteger(value, name) {
  const number = Number(value);
  if (!Number.isInteger(number) || number < 1) {
    throw new Error(`${name} must be a positive integer`);
  }
  return number;
}

function readNonNegativeInteger(value, name) {
  const number = Number(value);
  if (!Number.isInteger(number) || number < 0) {
    throw new Error(`${name} must be a non-negative integer`);
  }
  return number;
}

function sleepMs(milliseconds) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

export function readText(relativePath) {
  return fs.readFileSync(path.join(repoRoot(), relativePath), "utf8");
}

export function resolveJobPath(filePath) {
  const absolute = path.resolve(filePath);
  if (fs.existsSync(absolute)) return absolute;

  const normalized = String(filePath).replace(/\\/g, "/");
  const legacy = normalized.match(/(?:^|\/)jobs\/([^/]+)\/([^/]+\.md)$/);
  if (legacy && !["inbox", "outbox"].includes(legacy[2])) {
    for (const candidate of [
      path.join(repoRoot(), "jobs", legacy[1], "inbox", legacy[2]),
      path.join(repoRoot(), "jobs", legacy[1], "outbox", "finalized", legacy[2]),
      path.join(repoRoot(), "jobs", legacy[1], "outbox", "stuck", legacy[2]),
    ]) {
      if (fs.existsSync(candidate)) return candidate;
    }
  }

  return absolute;
}

export function parseJob(filePath) {
  const absolute = resolveJobPath(filePath);
  const raw = fs.readFileSync(absolute, "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`missing YAML frontmatter: ${filePath}`);
  }
  return {
    path: absolute,
    relativePath: path.relative(repoRoot(), absolute),
    frontmatter: parseSimpleYaml(match[1]),
    body: match[2].trim(),
    raw,
  };
}

export function parseSimpleYaml(text) {
  const out = {};
  let currentKey = null;

  for (const line of text.split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;

    const listMatch = line.match(/^\s+-\s+(.*)$/);
    if (listMatch && currentKey) {
      if (!Array.isArray(out[currentKey])) out[currentKey] = [];
      out[currentKey].push(parseScalar(listMatch[1]));
      continue;
    }

    const kv = line.match(/^([A-Za-z0-9_-]+):(?:\s*(.*))?$/);
    if (!kv) {
      throw new Error(`unsupported YAML line: ${line}`);
    }

    currentKey = kv[1];
    const value = kv[2] ?? "";
    out[currentKey] = value === "" ? [] : parseScalar(value);
  }

  return out;
}

function parseScalar(value) {
  const trimmed = value.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (trimmed === "null") return null;
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed
      .slice(1, -1)
      .split(",")
      .map((part) => parseScalar(part))
      .filter((part) => part !== "");
  }
  return trimmed;
}

export function validateJob(job) {
  const errors = [];
  const fm = job.frontmatter;
  const commitFindingJob = fm.source === "clawsweeper_commit";

  requireString(errors, fm, "repo");
  requireString(errors, fm, "cluster_id");
  requireString(errors, fm, "mode");
  requireArray(errors, fm, "allowed_actions");
  if (!commitFindingJob) requireArray(errors, fm, "candidates");

  if (typeof fm.repo === "string" && !/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(fm.repo)) {
    errors.push("repo must be owner/repo");
  }
  if (fm.mode && !["plan", "execute", "autonomous"].includes(fm.mode)) {
    errors.push("mode must be plan, execute, or autonomous");
  }
  for (const key of [
    "allowed_actions",
    "blocked_actions",
    "require_human_for",
    "canonical",
    "candidates",
    "cluster_refs",
    "maintainer_close_refs",
  ]) {
    if (fm[key] !== undefined && !Array.isArray(fm[key])) {
      errors.push(`${key} must be a list`);
    }
  }
  for (const action of fm.allowed_actions ?? []) {
    if (!["comment", "label", "close", "merge", "fix", "raise_pr"].includes(action)) {
      errors.push(`unsupported allowed action: ${action}`);
    }
  }
  for (const ref of [...(fm.canonical ?? []), ...(fm.candidates ?? [])]) {
    if (!/^#?[0-9]+$/.test(String(ref))) {
      errors.push(`candidate refs must look like #123: ${ref}`);
    }
  }
  for (const ref of fm.cluster_refs ?? []) {
    if (!isGithubRef(ref)) {
      errors.push(`cluster_refs must look like #123 or a GitHub issue/PR URL: ${ref}`);
    }
  }
  for (const ref of fm.maintainer_close_refs ?? []) {
    if (!isGithubRef(ref)) {
      errors.push(`maintainer_close_refs must look like #123 or a GitHub issue/PR URL: ${ref}`);
    }
  }
  for (const key of [
    "allow_instant_close",
    "allow_low_signal_pr_close",
    "allow_fix_pr",
    "allow_merge",
    "allow_post_merge_close",
    "allow_broad_fix_artifacts",
    "require_fix_before_close",
    "security_sensitive",
  ]) {
    if (fm[key] !== undefined && typeof fm[key] !== "boolean") {
      errors.push(`${key} must be true or false`);
    }
  }
  for (const key of [
    "canonical_hint",
    "target_checkout",
    "triage_policy",
    "security_policy",
    "source",
    "commit_sha",
    "clawsweeper_report_repo",
    "clawsweeper_report_path",
  ]) {
    if (fm[key] !== undefined && typeof fm[key] !== "string") {
      errors.push(`${key} must be a string`);
    }
  }
  if (commitFindingJob && !/^[0-9a-f]{40}$/i.test(String(fm.commit_sha ?? ""))) {
    errors.push("commit finding jobs require commit_sha");
  }
  if (fm.security_sensitive === true) {
    errors.push("security_sensitive jobs are out of scope for ProjectClownfish; route them to central security triage");
  }

  return errors;
}

function requireString(errors, object, key) {
  if (typeof object[key] !== "string" || object[key].trim() === "") {
    errors.push(`${key} is required`);
  }
}

function requireArray(errors, object, key) {
  if (!Array.isArray(object[key]) || object[key].length === 0) {
    errors.push(`${key} must be a non-empty list`);
  }
}

export function renderPrompt(job, requestedMode, context = {}) {
  const mode = requestedMode ?? job.frontmatter.mode;
  const modePrompt =
    mode === "autonomous"
      ? "prompts/autonomous.md"
      : mode === "execute"
        ? "prompts/execute.md"
        : "prompts/plan-only.md";
  const parts = [
    readText("prompts/worker-system.md"),
    readText(modePrompt),
    "## Security boundary",
    readText("instructions/security-boundary.md"),
    "## Dedupe policy",
    readText("instructions/dedupe.md"),
    "## Closure policy",
    readText("instructions/closure-policy.md"),
    "## Merge policy",
    readText("instructions/merge-policy.md"),
    ...(job.frontmatter.triage_policy === "low_signal_prs"
      ? ["## Low-signal PR policy", readText("instructions/low-signal-prs.md")]
      : []),
    "## Job file",
    "```md",
    job.raw.trim(),
    "```",
  ];

  for (const [title, filePath] of [
    ["Cluster preflight artifact", context.clusterPlanPath],
    ["Fix artifact", context.fixArtifactPath],
  ]) {
    if (!filePath) continue;
    const absolute = path.resolve(filePath);
    const artifact = promptArtifactText(title, absolute);
    parts.push(
      `## ${title}`,
      `Path: \`${path.relative(repoRoot(), absolute)}\``,
      artifact.compacted
        ? `Note: compacted for the Codex input budget; use counts, refs, timestamps, review-bot excerpts, and safety gates as authoritative.`
        : "",
      "```json",
      artifact.text,
      "```",
    );
  }

  parts.push(
    "## Required final output",
    "Return JSON matching `schemas/codex-result.schema.json` and nothing else.",
  );

  return parts.join("\n\n");
}

function promptArtifactText(title, absolutePath) {
  const raw = fs.readFileSync(absolutePath, "utf8").trim();
  if (raw.length <= PROMPT_ARTIFACT_MAX_CHARS) return { text: raw, compacted: false };
  try {
    const parsed = JSON.parse(raw);
    const compacted = title === "Cluster preflight artifact" ? compactClusterPlan(parsed) : compactDeep(parsed);
    const compactText = JSON.stringify(compacted, null, 2);
    if (compactText.length <= PROMPT_ARTIFACT_MAX_CHARS) return { text: compactText, compacted: true };
    return {
      text: JSON.stringify(
        {
          _prompt_compacted: true,
          _prompt_truncated: true,
          _prompt_reason: `artifact exceeded ${PROMPT_ARTIFACT_MAX_CHARS} characters after compaction`,
          summary: compactDeep(compacted, { arrayLimit: 20, stringLimit: 300 }),
        },
        null,
        2,
      ),
      compacted: true,
    };
  } catch {
    return {
      text: `${raw.slice(0, PROMPT_ARTIFACT_MAX_CHARS - 120)}\n... [artifact truncated for Codex input budget]`,
      compacted: true,
    };
  }
}

function compactClusterPlan(plan) {
  return compactDeep({
    _prompt_compacted: true,
    repo: plan.repo,
    cluster_id: plan.cluster_id,
    mode: plan.mode,
    source_job: plan.source_job,
    generated_at: plan.generated_at,
    offline: plan.offline,
    main: plan.main,
    security_boundary: plan.security_boundary,
    scope: plan.scope,
    canonical_candidates: plan.canonical_candidates,
    safety_gates: plan.safety_gates,
    items: (plan.items ?? []).map(compactPlanItem),
  });
}

function compactPlanItem(item) {
  const pull = item.pull_request;
  return {
    repo: item.repo,
    ref: item.ref,
    number: item.number,
    kind: item.kind,
    state: item.state,
    title: item.title,
    url: item.url,
    author: item.author,
    author_association: item.author_association,
    labels: item.labels,
    updated_at: item.updated_at,
    closed_at: item.closed_at,
    body_excerpt: item.body_excerpt,
    security_sensitive: item.security_sensitive,
    comments_count: item.comments_count,
    comments_hydrated: item.comments_hydrated,
    comments_truncated: item.comments_truncated,
    maintainer_comments: (item.maintainer_comments ?? []).slice(0, 6),
    bot_comments: (item.bot_comments ?? []).slice(0, 8),
    comments: (item.comments ?? []).slice(0, 4),
    classification_hint: item.classification_hint,
    pull_request: pull
      ? {
          draft: pull.draft,
          merged: pull.merged,
          merged_at: pull.merged_at,
          merge_commit_sha: pull.merge_commit_sha,
          mergeable: pull.mergeable,
          mergeable_state: pull.mergeable_state,
          base_ref: pull.base_ref,
          head_ref: pull.head_ref,
          head_repo: pull.head_repo,
          head_sha: pull.head_sha,
          maintainer_can_modify: pull.maintainer_can_modify,
          changed_files: pull.changed_files,
          additions: pull.additions,
          deletions: pull.deletions,
          files: (pull.files ?? []).slice(0, 40),
          commits: (pull.commits ?? []).slice(0, 10),
          reviews: (pull.reviews ?? []).slice(0, 12),
          review_comments_count: pull.review_comments_count,
          review_comments_hydrated: pull.review_comments_hydrated,
          review_comments_truncated: pull.review_comments_truncated,
          review_comments: (pull.review_comments ?? []).slice(0, 8),
          review_bot_comments: (pull.review_bot_comments ?? []).slice(0, 16),
          checks: pull.checks,
        }
      : null,
  };
}

function compactDeep(value, options = {}) {
  const arrayLimit = options.arrayLimit ?? 80;
  const stringLimit = options.stringLimit ?? PROMPT_STRING_MAX_CHARS;
  if (typeof value === "string") {
    const normalized = value.replace(/\s+/g, " ").trim();
    return normalized.length > stringLimit ? `${normalized.slice(0, stringLimit - 3)}...` : normalized;
  }
  if (Array.isArray(value)) {
    return value.slice(0, arrayLimit).map((item) => compactDeep(item, options));
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, compactDeep(item, options)]));
  }
  return value;
}

export function hasSecuritySignalText(...values) {
  const text = values.flatMap(flattenSecurityText).join("\n");
  return SECURITY_SIGNAL_PATTERN.test(text);
}

function flattenSecurityText(value) {
  if (Array.isArray(value)) return value.flatMap(flattenSecurityText);
  if (value && typeof value === "object") {
    return Object.values(value).flatMap(flattenSecurityText);
  }
  return [String(value ?? "")];
}

function isGithubRef(value) {
  const text = String(value ?? "");
  return /^#?[0-9]+$/.test(text) || /^https:\/\/github\.com\/[^/]+\/[^/]+\/(?:issues|pull)\/[0-9]+/.test(text);
}

export function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith("--")) {
      args._.push(arg);
      continue;
    }
    const key = arg.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
    } else {
      args[key] = next;
      i += 1;
    }
  }
  return args;
}

export function assertAllowedOwner(repo, allowedOwner) {
  if (!allowedOwner) return;
  const owner = repo.split("/")[0];
  if (owner !== allowedOwner) {
    throw new Error(`repo owner ${owner} does not match CLOWNFISH_ALLOWED_OWNER=${allowedOwner}`);
  }
}

export function makeRunDir(job, mode) {
  const slug = `${path.basename(job.path, ".md")}-${mode}-${new Date().toISOString().replace(/[:.]/g, "-")}`;
  const dir = path.join(repoRoot(), ".projectclownfish", "runs", slug);
  fs.mkdirSync(dir, { recursive: true });
  return dir;
}
