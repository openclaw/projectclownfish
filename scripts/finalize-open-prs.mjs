#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import {
  assertLiveWorkerCapacity,
  currentProjectRepo,
  hasDeterministicSecuritySignal,
  parseArgs,
  parseJob,
  readMaxLiveWorkers,
  repoRoot,
  resolveJobPath,
  waitForLiveWorkerCapacity,
} from "./lib.mjs";

const DEFAULT_TARGET_REPO = "openclaw/openclaw";
const DEFAULT_HEAD_PREFIX = "clownfish/";
const PASSING_CHECK_CONCLUSIONS = new Set(["SUCCESS", "SKIPPED", "NEUTRAL"]);
const CLEAN_MERGE_STATES = new Set(["CLEAN", "HAS_HOOKS"]);
const DEFAULT_IGNORED_CHECKS = ["auto-response", "Labeler", "Stale"];
const REVIEW_BOTS = ["Greptile", "Codex", "Asile", "CodeRabbit", "Copilot"];
const MERGEABILITY_POLL_MS = numberEnv("CLOWNFISH_FINALIZER_MERGEABILITY_POLL_MS", 5000);
const MERGEABILITY_POLL_ATTEMPTS = numberEnv("CLOWNFISH_FINALIZER_MERGEABILITY_POLL_ATTEMPTS", 3);

const args = parseArgs(process.argv.slice(2));
const repo = String(args.repo ?? process.env.CLOWNFISH_TARGET_REPO ?? DEFAULT_TARGET_REPO);
const clownfishRepo = String(args["clownfish-repo"] ?? process.env.CLOWNFISH_REPO ?? currentProjectRepo());
const headPrefix = String(args["head-prefix"] ?? DEFAULT_HEAD_PREFIX);
const label = String(args.label ?? process.env.CLOWNFISH_LABEL ?? "clownfish");
const writeReport = Boolean(args["write-report"]);
const execute = Boolean(args.execute);
const dispatchRepairs = Boolean(args["dispatch-repairs"] || args.dispatch || execute);
const workflow = String(args.workflow ?? process.env.CLOWNFISH_FINALIZER_WORKFLOW ?? "cluster-worker.yml");
const runner = String(args.runner ?? process.env.CLOWNFISH_WORKER_RUNNER ?? "blacksmith-4vcpu-ubuntu-2404");
const executionRunner = String(
  args["execution-runner"] ?? args.execution_runner ?? process.env.CLOWNFISH_EXECUTION_RUNNER ?? "blacksmith-16vcpu-ubuntu-2404",
);
const requestedMode = typeof args.mode === "string" ? args.mode : null;
const model = String(args.model ?? process.env.CLOWNFISH_MODEL ?? "gpt-5.5");
const maxPrs = Number(args["max-prs"] ?? args.limit ?? 5);
const maxLiveWorkers = readMaxLiveWorkers(args);
const waitForCapacity = Boolean(args["wait-for-capacity"]);
const allowRepeat = Boolean(args["allow-repeat"]);

if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo)) {
  throw new Error(`repo must be owner/repo, got ${repo}`);
}
if (!Number.isInteger(maxPrs) || maxPrs < 1) {
  throw new Error("--max-prs must be a positive integer");
}

const records = loadPublishedRecords();
const openPulls = listOpenPullRequests(repo, headPrefix);
const prs = openPulls.map((pull) => classifyPullRequest(hydratePullRequest(repo, pull), records));
const dispatchCandidates = dispatchRepairs ? selectDispatchCandidates(prs).slice(0, maxPrs) : [];
const report = {
  repo,
  clownfish_repo: clownfishRepo,
  head_prefix: headPrefix,
  label,
  generated_at: new Date().toISOString(),
  count: prs.length,
  summary: summarize(prs),
  dispatch: {
    enabled: dispatchRepairs,
    execute,
    workflow,
    runner,
    execution_runner: executionRunner,
    model,
    max_prs: maxPrs,
    candidates: dispatchCandidates.map(summarizeDispatchCandidate),
  },
  prs,
};

if (execute && dispatchRepairs) {
  report.dispatch = executeDispatches(dispatchCandidates, report.dispatch);
}
if (writeReport) writeReports(report);
console.log(JSON.stringify(report, null, 2));

function listOpenPullRequests(targetRepo, prefix) {
  const fields = ["number", "title", "url", "headRefName", "updatedAt", "labels"].join(",");
  const pullsByNumber = new Map();
  for (const pull of [
    ...ghJson([
      "pr",
      "list",
      "--repo",
      targetRepo,
      "--state",
      "open",
      "--label",
      label,
      "--limit",
      "200",
      "--json",
      fields,
    ]),
    ...ghJson([
      "pr",
      "list",
      "--repo",
      targetRepo,
      "--state",
      "open",
      "--limit",
      "200",
      "--json",
      fields,
    ]),
  ]) {
    pullsByNumber.set(pull.number, pull);
  }
  return [...pullsByNumber.values()].filter(
    (pull) => String(pull.headRefName ?? "").startsWith(prefix) || hasLabel(pull.labels ?? [], label),
  );
}

function hydratePullRequest(targetRepo, pull) {
  let view = fetchPullRequestView(targetRepo, pull.number);
  for (let attempt = 1; attempt < MERGEABILITY_POLL_ATTEMPTS && hasUnknownMergeability(view); attempt += 1) {
    sleepMs(MERGEABILITY_POLL_MS);
    view = fetchPullRequestView(targetRepo, pull.number);
  }
  const threadState = fetchReviewThreadState(targetRepo, pull.number);
  return { ...pull, ...view, threadState };
}

function fetchPullRequestView(targetRepo, number) {
  return ghJson([
    "pr",
    "view",
    String(number),
    "--repo",
    targetRepo,
    "--json",
    [
      "baseRefName",
      "body",
      "comments",
      "headRefName",
      "headRefOid",
      "isDraft",
      "labels",
      "mergeable",
      "mergeStateStatus",
      "number",
      "reviewDecision",
      "reviews",
      "state",
      "statusCheckRollup",
      "title",
      "updatedAt",
      "url",
    ].join(","),
  ]);
}

function classifyPullRequest(pull, publishedRecords) {
  const clusterId = clusterIdFromBranch(pull.headRefName);
  const relatedRecords = findRelatedRecords({ pull, clusterId, records: publishedRecords });
  const latestRecord = relatedRecords[0] ?? null;
  const latestApplyAction = latestRecord ? latestApplyActionForPull(latestRecord, pull.number) : null;
  const checkState = summarizeChecks(pull.statusCheckRollup ?? []);
  const reviewBotState = summarizeReviewBotActivity(pull);
  const blockers = [];

  if (pull.isDraft) blockers.push("draft");
  if (String(pull.baseRefName ?? "") !== "main") blockers.push(`base is ${pull.baseRefName || "unknown"}`);
  if (hasDeterministicPullSecuritySignal(pull)) blockers.push("security_hold");
  if (isSecurityRoutedAction(latestApplyAction)) blockers.push("security_route");
  if (pull.mergeable === "UNKNOWN") {
    blockers.push("mergeability_unknown");
  } else if (pull.mergeable !== "MERGEABLE") {
    blockers.push(`needs_rebase:${pull.mergeable || "unknown"}`);
  }
  if (pull.mergeStateStatus === "UNKNOWN") {
    blockers.push("merge_state_unknown");
  } else if (!CLEAN_MERGE_STATES.has(String(pull.mergeStateStatus ?? ""))) {
    blockers.push(`needs_merge_state:${pull.mergeStateStatus || "unknown"}`);
  }
  if (["CHANGES_REQUESTED", "REVIEW_REQUIRED"].includes(String(pull.reviewDecision ?? ""))) {
    blockers.push(`needs_review:${pull.reviewDecision}`);
  }
  if (pull.threadState.status !== "clean") blockers.push(pull.threadState.reason);
  if (checkState.blockers.length > 0) blockers.push(`needs_checks:${checkState.blockers.slice(0, 3).join("; ")}`);
  if (!hasPublishedMergePreflightProof({ pull, relatedRecords })) blockers.push("needs_merge_preflight");
  if (relatedRecords.length === 0) blockers.push("needs_result_backfill");

  return {
    number: pull.number,
    title: pull.title,
    url: pull.url,
    branch: pull.headRefName,
    head_sha: pull.headRefOid ?? null,
    cluster_id: clusterId,
    job_path: clusterId ? existingJobPath(clusterId) : null,
    updated_at: pull.updatedAt,
    mergeable: pull.mergeable ?? null,
    merge_state_status: pull.mergeStateStatus ?? null,
    review_decision: pull.reviewDecision ?? null,
    security_hold: blockers.includes("security_hold") || blockers.includes("security_route"),
    checks: checkState,
    review_threads: pull.threadState,
    review_bots: reviewBotState,
    latest_record: latestRecord
      ? {
          run_id: latestRecord.run_id ?? null,
          run_url: latestRecord.run_url ?? null,
          cluster_id: latestRecord.cluster_id ?? null,
          published_at: latestRecord.published_at ?? null,
          workflow_conclusion: latestRecord.workflow_conclusion ?? null,
          apply_action: latestApplyAction,
        }
      : null,
    blockers: uniqueStrings(blockers),
    recommended_next_action: recommendedNextAction({ pull, checkState, blockers }),
  };
}

function recommendedNextAction({ pull, checkState, blockers }) {
  if (blockers.includes("security_hold") || blockers.includes("security_route")) return "route to central security triage";
  if (pull.isDraft) return "undraft only after worker confirms the fix is complete";
  if (blockers.some((blocker) => blocker.startsWith("needs_rebase"))) {
    return "resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review";
  }
  if (blockers.includes("mergeability_unknown") || blockers.includes("merge_state_unknown")) {
    return "refresh exact PR mergeability before deciding; do not merge while GitHub reports unknown";
  }
  if (checkState.blockers.length > 0) return "repair failing checks or document unrelated main flake with touched-surface proof";
  if (blockers.some((blocker) => blocker.startsWith("needs_review") || blocker.includes("review threads"))) {
    return "address unresolved human and review-bot comments, then rerun review";
  }
  if (blockers.includes("needs_merge_preflight")) {
    return "backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded";
  }
  if (blockers.length === 0) return "safe merge candidate after exact-SHA refresh";
  return "manual inspection";
}

function summarize(prs) {
  const out = {
    open_prs: prs.length,
    ready_candidates: 0,
    security_hold: 0,
    needs_rebase: 0,
    mergeability_unknown: 0,
    needs_checks: 0,
    needs_review: 0,
    needs_merge_preflight: 0,
    needs_result_backfill: 0,
  };
  for (const pr of prs) {
    if (pr.blockers.length === 0) out.ready_candidates += 1;
    if (pr.security_hold || pr.blockers.includes("security_route")) out.security_hold += 1;
    if (pr.blockers.some((blocker) => blocker.startsWith("needs_rebase"))) out.needs_rebase += 1;
    if (pr.blockers.includes("mergeability_unknown") || pr.blockers.includes("merge_state_unknown")) {
      out.mergeability_unknown += 1;
    }
    if (pr.blockers.some((blocker) => blocker.startsWith("needs_checks"))) out.needs_checks += 1;
    if (pr.blockers.some((blocker) => blocker.startsWith("needs_review") || blocker.includes("review threads"))) {
      out.needs_review += 1;
    }
    if (pr.blockers.includes("needs_merge_preflight")) out.needs_merge_preflight += 1;
    if (pr.blockers.includes("needs_result_backfill")) out.needs_result_backfill += 1;
  }
  return out;
}

function summarizeChecks(checks) {
  const ignored = ignoredCheckNames();
  const counts = {};
  const blockers = [];
  for (const check of checks) {
    const name = String(check.name ?? check.context ?? "unknown check");
    const workflow = String(check.workflowName ?? "");
    const ignoredCheck = ignored.has(name) || ignored.has(workflow);
    const status = String(check.status ?? check.state ?? "").toUpperCase();
    const conclusion = String(check.conclusion ?? "").toUpperCase();
    const key = conclusion || status || "UNKNOWN";
    counts[key] = (counts[key] ?? 0) + 1;
    if (ignoredCheck) continue;
    if (status && !["COMPLETED", "SUCCESS"].includes(status)) {
      blockers.push(`${displayCheckName(check)}:${status}`);
      continue;
    }
    if (conclusion && !PASSING_CHECK_CONCLUSIONS.has(conclusion)) {
      blockers.push(`${displayCheckName(check)}:${conclusion}`);
    }
  }
  return {
    total: checks.length,
    counts,
    blockers,
  };
}

function hasDeterministicPullSecuritySignal(pull) {
  return hasDeterministicSecuritySignal({
    labels: pull.labels ?? [],
    comments: [
      (pull.comments ?? []).map((comment) => comment.body),
      (pull.reviews ?? []).map((review) => review.body),
    ],
  });
}

function displayCheckName(check) {
  const workflow = String(check.workflowName ?? "");
  const name = String(check.name ?? check.context ?? "unknown check");
  return workflow && workflow !== name ? `${workflow} / ${name}` : name;
}

function hasUnknownMergeability(view) {
  return view?.mergeable === "UNKNOWN" || view?.mergeStateStatus === "UNKNOWN";
}

function summarizeReviewBotActivity(pull) {
  const botPattern = new RegExp(`\\b(${REVIEW_BOTS.map(escapeRegExp).join("|")})\\b`, "i");
  const comments = [
    ...(pull.comments ?? []).map((comment) => ({ source: "comment", ...comment })),
    ...(pull.reviews ?? []).map((review) => ({ source: "review", ...review })),
  ];
  const botComments = comments.filter((comment) => {
    const author = String(comment.author?.login ?? comment.author?.name ?? "");
    return botPattern.test(author) || botPattern.test(String(comment.body ?? ""));
  });
  return {
    count: botComments.length,
    latest: botComments
      .slice(-3)
      .map((comment) => ({
        source: comment.source,
        author: comment.author?.login ?? null,
        url: comment.url ?? null,
        submitted_at: comment.submittedAt ?? comment.createdAt ?? null,
      })),
  };
}

function fetchReviewThreadState(targetRepo, number) {
  const [owner, name] = targetRepo.split("/");
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
  try {
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
    if (threads?.pageInfo?.hasNextPage) {
      return { status: "blocked", reason: "too many review threads to prove resolved", unresolved_count: null, examples: [] };
    }
    const unresolved = (threads?.nodes ?? []).filter((thread) => thread && !thread.isResolved);
    return {
      status: unresolved.length === 0 ? "clean" : "blocked",
      reason: unresolved.length === 0 ? null : "unresolved review threads remain",
      unresolved_count: unresolved.length,
      examples: unresolved.slice(0, 3).map((thread) => thread.comments?.nodes?.[0]?.url ?? `${thread.path}:${thread.line ?? "?"}`),
    };
  } catch (error) {
    return {
      status: "unknown",
      reason: `review threads could not be fetched: ${compactText(error.message, 180)}`,
      unresolved_count: null,
      examples: [],
    };
  }
}

function hasPublishedMergePreflightProof({ pull, relatedRecords }) {
  for (const record of relatedRecords) {
    if (latestApplyActionForPull(record, pull.number)?.status === "executed") return true;
    for (const action of record.fix_actions ?? []) {
      const prRef = String(action.pr ?? action.url ?? action.target ?? "");
      if (prRef.includes(`/pull/${pull.number}`) && action.merge_preflight) return true;
    }
  }
  return false;
}

function findRelatedRecords({ pull, clusterId, records }) {
  const pullRef = `#${pull.number}`;
  const pullUrl = pull.url;
  return records
    .filter((record) => {
      if (clusterId && record.cluster_id === clusterId) return true;
      if (recordContains(record, pullRef) || recordContains(record, pullUrl)) return true;
      return false;
    })
    .sort((left, right) => String(right.published_at ?? "").localeCompare(String(left.published_at ?? "")));
}

function latestApplyActionForPull(record, number) {
  return (
    (record.apply_actions ?? []).find((action) => action.target === `#${number}`) ??
    (record.actions ?? []).find((action) => action.target === `#${number}`) ??
    null
  );
}

function recordContains(value, needle) {
  if (!needle) return false;
  if (typeof value === "string") return value.includes(needle);
  if (Array.isArray(value)) return value.some((item) => recordContains(item, needle));
  if (value && typeof value === "object") return Object.values(value).some((item) => recordContains(item, needle));
  return false;
}

function loadPublishedRecords() {
  const runsDir = path.join(repoRoot(), "results", "runs");
  if (!fs.existsSync(runsDir)) return [];
  return fs
    .readdirSync(runsDir)
    .filter((name) => name.endsWith(".json"))
    .flatMap((name) => {
      const file = path.join(runsDir, name);
      try {
        const data = JSON.parse(fs.readFileSync(file, "utf8"));
        return Array.isArray(data) ? data : [data];
      } catch {
        return [];
      }
    })
    .filter((record) => record && typeof record === "object");
}

function existingJobPath(clusterId) {
  for (const relative of [
    path.join("jobs", "openclaw", "inbox", `${clusterId}.md`),
    path.join("jobs", "openclaw", `${clusterId}.md`),
    path.join("jobs", "openclaw", "outbox", "finalized", `${clusterId}.md`),
    path.join("jobs", "openclaw", "outbox", "stuck", `${clusterId}.md`),
  ]) {
    const resolved = resolveJobPath(relative);
    if (fs.existsSync(resolved)) return path.relative(repoRoot(), resolved);
  }
  return null;
}

function selectDispatchCandidates(openPrs) {
  const attempted = new Set(
    allowRepeat
      ? []
      : readDispatchLedger().attempts
          ?.filter((attempt) => attempt.status === "dispatched")
          .map((attempt) => attempt.idempotency_key)
          .filter(Boolean) ?? [],
  );
  return openPrs
    .filter((pr) => isDispatchableFinalizerPr(pr))
    .map((pr) => dispatchCandidateFromPr(pr))
    .filter((candidate) => allowRepeat || !attempted.has(candidate.idempotency_key));
}

function isDispatchableFinalizerPr(pr) {
  if (!pr.job_path) return false;
  if (pr.security_hold || pr.blockers.includes("security_hold") || pr.blockers.includes("security_route") || pr.blockers.includes("draft")) return false;
  return pr.blockers.some((blocker) =>
    /^(needs_rebase|needs_merge_state|needs_checks|needs_review|needs_merge_preflight|needs_result_backfill)|review threads/.test(
      blocker,
    ),
  );
}

function dispatchCandidateFromPr(pr) {
  const mode = resolveDispatchMode(pr.job_path);
  return {
    pr: pr.number,
    url: pr.url,
    title: pr.title,
    branch: pr.branch,
    head_sha: pr.head_sha,
    cluster_id: pr.cluster_id,
    job_path: pr.job_path,
    mode,
    blockers: pr.blockers,
    recommended_next_action: pr.recommended_next_action,
    idempotency_key: `finalize-open-prs:${repo}#${pr.number}:${pr.head_sha || pr.branch || "unknown"}`,
  };
}

function resolveDispatchMode(jobPath) {
  if (requestedMode) return requestedMode;
  const job = parseJob(jobPath);
  const mode = String(job.frontmatter.mode ?? "");
  return ["execute", "autonomous"].includes(mode) ? mode : "autonomous";
}

function summarizeDispatchCandidate(candidate) {
  return {
    pr: candidate.pr,
    url: candidate.url,
    cluster_id: candidate.cluster_id,
    job_path: candidate.job_path,
    branch: candidate.branch,
    head_sha: candidate.head_sha,
    mode: candidate.mode,
    blockers: candidate.blockers,
    idempotency_key: candidate.idempotency_key,
  };
}

function executeDispatches(candidates, dispatchSummary) {
  const summary = {
    ...dispatchSummary,
    status: candidates.length === 0 ? "no_candidates" : "dispatching",
    dispatched_at: new Date().toISOString(),
    attempts: [],
  };
  if (candidates.length === 0) return summary;
  if (process.env.CLOWNFISH_ALLOW_EXECUTE !== "1") {
    throw new Error("refusing finalizer dispatch: CLOWNFISH_ALLOW_EXECUTE must be 1");
  }
  if (process.env.CLOWNFISH_ALLOW_FIX_PR !== "1") {
    throw new Error("refusing finalizer dispatch: CLOWNFISH_ALLOW_FIX_PR must be 1");
  }

  const capacity = waitForCapacity
    ? waitForLiveWorkerCapacity({ repo: clownfishRepo, workflow, requested: candidates.length, maxLiveWorkers })
    : assertLiveWorkerCapacity({ repo: clownfishRepo, workflow, requested: candidates.length, maxLiveWorkers });
  summary.live_worker_capacity_before_dispatch = capacity;

  const ledger = readDispatchLedger();
  const batchId = `finalize-open-prs-${new Date().toISOString().replace(/[:.]/g, "-")}`;
  for (const candidate of candidates) {
    const attempt = {
      batch_id: batchId,
      idempotency_key: candidate.idempotency_key,
      target_repo: repo,
      clownfish_repo: clownfishRepo,
      pr: candidate.pr,
      url: candidate.url,
      cluster_id: candidate.cluster_id,
      job_path: candidate.job_path,
      branch: candidate.branch,
      head_sha: candidate.head_sha,
      mode: candidate.mode,
      workflow,
      runner,
      execution_runner: executionRunner,
      model,
      blockers: candidate.blockers,
      dispatched_at: new Date().toISOString(),
      status: "pending",
    };
    dispatchRepair(candidate);
    attempt.status = "dispatched";
    summary.attempts.push(attempt);
    ledger.attempts.push(attempt);
  }
  writeDispatchLedger(ledger);
  summary.status = "dispatched";
  return summary;
}

function dispatchRepair(candidate) {
  execFileSync(
    "gh",
    [
      "workflow",
      "run",
      workflow,
      "--repo",
      clownfishRepo,
      "-f",
      `job=${candidate.job_path}`,
      "-f",
      `mode=${candidate.mode}`,
      "-f",
      `runner=${runner}`,
      "-f",
      `execution_runner=${executionRunner}`,
      "-f",
      `model=${model}`,
    ],
    {
      cwd: repoRoot(),
      encoding: "utf8",
      env: ghEnv(),
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
}

function readDispatchLedger() {
  const filePath = path.join(repoRoot(), "results", "finalize-open-prs-dispatch.json");
  if (!fs.existsSync(filePath)) return { attempts: [] };
  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return { attempts: Array.isArray(data.attempts) ? data.attempts : [] };
  } catch {
    return { attempts: [] };
  }
}

function writeDispatchLedger(ledger) {
  const resultsDir = path.join(repoRoot(), "results");
  fs.mkdirSync(resultsDir, { recursive: true });
  fs.writeFileSync(
    path.join(resultsDir, "finalize-open-prs-dispatch.json"),
    `${JSON.stringify({ attempts: ledger.attempts }, null, 2)}\n`,
  );
}

function clusterIdFromBranch(branch) {
  const branchText = String(branch ?? "");
  return branchText.startsWith(headPrefix) ? branchText.slice(headPrefix.length) : null;
}

function isSecurityRoutedAction(action) {
  if (!action) return false;
  return (
    String(action.action ?? "") === "route_security" ||
    String(action.classification ?? "") === "security_sensitive" ||
    /security-sensitive|central .*security|security triage/i.test(String(action.reason ?? ""))
  );
}

function ignoredCheckNames() {
  const configured = String(process.env.CLOWNFISH_FINALIZER_IGNORE_CHECKS ?? DEFAULT_IGNORED_CHECKS.join(","));
  return new Set(
    configured
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
  );
}

function writeReports(report) {
  const resultsDir = path.join(repoRoot(), "results");
  fs.mkdirSync(resultsDir, { recursive: true });
  fs.writeFileSync(path.join(resultsDir, "finalize-open-prs.json"), `${JSON.stringify(report, null, 2)}\n`);
  fs.writeFileSync(path.join(resultsDir, "finalize-open-prs.md"), renderMarkdown(report));
}

function renderMarkdown(report) {
  const rows = report.prs
    .map((pr) =>
      [
        markdownLink(`#${pr.number}`, pr.url),
        tableCell(pr.title),
        tableCell(pr.cluster_id ?? ""),
        tableCell(pr.mergeable ?? ""),
        tableCell(pr.merge_state_status ?? ""),
        tableCell(checkSummaryCell(pr.checks)),
        tableCell(pr.blockers.join(", ") || "ready"),
        tableCell(pr.recommended_next_action),
      ].join(" | "),
    )
    .map((row) => `| ${row} |`)
    .join("\n");
  const dispatchRows = (report.dispatch?.candidates ?? [])
    .map((candidate) =>
      [
        markdownLink(`#${candidate.pr}`, candidate.url),
        tableCell(candidate.cluster_id ?? ""),
        tableCell(candidate.job_path ?? ""),
        tableCell(candidate.mode ?? ""),
        tableCell((candidate.blockers ?? []).join(", ")),
      ].join(" | "),
    )
    .map((row) => `| ${row} |`)
    .join("\n");
  return [
    "# Open ProjectClownfish PR Finalizer",
    "",
    `Generated: ${report.generated_at}`,
    "",
    "## Summary",
    "",
    "| Metric | Count |",
    "| --- | ---: |",
    ...Object.entries(report.summary).map(([key, value]) => `| ${tableCell(key)} | ${value} |`),
    "",
    "## Dispatch",
    "",
    `Enabled: ${report.dispatch?.enabled ? "yes" : "no"}`,
    "",
    `Status: ${report.dispatch?.status ?? (report.dispatch?.enabled ? "dry_run" : "report_only")}`,
    "",
    "| PR | Cluster | Job | Mode | Blockers |",
    "| --- | --- | --- | --- | --- |",
    dispatchRows || "| _None_ |  |  |  |  |",
    "",
    "## Open PRs",
    "",
    "| PR | Title | Cluster | Mergeable | Merge State | Checks | Blockers | Next action |",
    "| --- | --- | --- | --- | --- | --- | --- | --- |",
    rows || "| _None_ |  |  |  |  |  |  |  |",
    "",
  ].join("\n");
}

function checkSummaryCell(checks) {
  const counts = Object.entries(checks.counts)
    .map(([key, value]) => `${key}:${value}`)
    .join(" ");
  return checks.blockers.length > 0 ? `${counts}; blockers:${checks.blockers.length}` : counts;
}

function tableCell(value) {
  return String(value ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, " ")
    .replace(/\|/g, "\\|")
    .trim();
}

function markdownLink(label, url) {
  return url ? `[${tableCell(label)}](${url})` : tableCell(label);
}

function uniqueStrings(values) {
  return [...new Set(values.filter(Boolean).map(String))];
}

function hasLabel(labels, expected) {
  return labels.some((item) => String(item.name ?? item).toLowerCase() === expected.toLowerCase());
}

function compactText(value, maxLength) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  return text.length > maxLength ? `${text.slice(0, maxLength - 3)}...` : text;
}

function sleepMs(milliseconds) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

function numberEnv(name, fallback) {
  const value = Number(process.env[name] ?? fallback);
  return Number.isFinite(value) && value >= 0 ? value : fallback;
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function ghJson(ghArgs) {
  const env = { ...process.env, NO_COLOR: "1", CLICOLOR: "0" };
  delete env.FORCE_COLOR;
  const text = execFileSync("gh", ghArgs, {
    cwd: repoRoot(),
    encoding: "utf8",
    env,
    maxBuffer: 64 * 1024 * 1024,
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
  return JSON.parse(stripAnsi(text) || "null");
}

function stripAnsi(text) {
  return text.replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
}
