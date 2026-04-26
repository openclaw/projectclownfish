#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { parseArgs, repoRoot } from "./lib.mjs";

const DASHBOARD_START = "<!-- projectclownfish-dashboard:start -->";
const DASHBOARD_END = "<!-- projectclownfish-dashboard:end -->";
const CLOSE_APPLICATOR_ACTIONS = new Set([
  "close",
  "close_duplicate",
  "close_superseded",
  "close_fixed_by_candidate",
  "close_low_signal",
]);
const MERGE_APPLICATOR_ACTIONS = new Set(["merge_candidate", "merge_canonical"]);
const APPLICATOR_ACTIONS = new Set([...CLOSE_APPLICATOR_ACTIONS, ...MERGE_APPLICATOR_ACTIONS]);

const args = parseArgs(process.argv.slice(2));
const inputs = args._.length > 0 ? args._ : [path.join(repoRoot(), ".projectclownfish", "runs")];
const metadataByRunId = readRunMetadata(args["runs-json"]);
const published = [];

for (const input of inputs) {
  for (const resultPath of findResultPaths(path.resolve(input))) {
    const record = publishResult(resultPath);
    published.push(record);
  }
}

writeAggregateApplyReport();
updateDashboard();

console.log(JSON.stringify({ published: published.length, records: published }, null, 2));

function publishResult(resultPath) {
  const runDir = path.dirname(resultPath);
  const result = readJson(resultPath);
  const applyReport = readSiblingJson(runDir, "apply-report.json") ?? { actions: [] };
  const clusterPlan = readSiblingJson(runDir, "cluster-plan.json");
  const runId = String(args["run-id"] ?? inferRunId(resultPath) ?? "");
  const metadata = runId ? metadataByRunId.get(runId) : undefined;
  const runUrl =
    String(args["run-url"] ?? metadata?.url ?? "") ||
    (runId ? `https://github.com/openclaw/projectclownfish/actions/runs/${runId}` : null);
  const headSha = String(args["head-sha"] ?? metadata?.headSha ?? metadata?.head_sha ?? "");
  const workflowConclusion = String(args.conclusion ?? metadata?.conclusion ?? "");
  const workflowStatus = String(metadata?.status ?? "");
  const repo = String(result.repo ?? "unknown/unknown");
  const owner = repo.split("/")[0] || "unknown";
  const clusterId = String(result.cluster_id ?? path.basename(runDir));
  const applyActions = (applyReport.actions ?? []).filter(isApplicatorAction);
  const report = {
    repo,
    cluster_id: clusterId,
    mode: result.mode ?? null,
    run_id: runId || null,
    run_url: runUrl,
    head_sha: headSha || null,
    workflow_conclusion: workflowConclusion || null,
    workflow_status: workflowStatus || null,
    result_status: result.status ?? null,
    source_job: clusterPlan?.source_job ?? null,
    published_at: new Date().toISOString(),
    canonical: result.canonical ?? null,
    canonical_issue: result.canonical_issue ?? null,
    canonical_pr: result.canonical_pr ?? null,
    summary: result.summary ?? "",
    actions: summarizeActions(result.actions),
    action_counts: countBy(result.actions ?? [], (action) => String(action.action ?? "unknown")),
    action_status_counts: countBy(result.actions ?? [], (action) => String(action.status ?? "unknown")),
    apply_counts: countBy(applyActions, (action) => String(action.status ?? "unknown")),
    needs_human: Array.isArray(result.needs_human) ? result.needs_human : [],
    apply_actions: applyActions.map(sanitizeApplyAction),
  };

  const reportDir = path.join(repoRoot(), "results", owner);
  fs.mkdirSync(reportDir, { recursive: true });
  fs.writeFileSync(path.join(reportDir, `${slug(clusterId)}.md`), renderClusterReport(report), "utf8");

  const runDirOut = path.join(repoRoot(), "results", "runs");
  fs.mkdirSync(runDirOut, { recursive: true });
  if (runId) {
    fs.writeFileSync(path.join(runDirOut, `${runId}.json`), `${JSON.stringify(report, null, 2)}\n`, "utf8");
  }

  for (const action of report.apply_actions.filter((action) => action.status === "executed")) {
    writeClosedRecord(report, action, owner);
  }

  return {
    cluster_id: report.cluster_id,
    run_id: report.run_id,
    result_status: report.result_status,
    workflow_conclusion: report.workflow_conclusion,
    apply_counts: report.apply_counts,
  };
}

function renderClusterReport(report) {
  const actions = report.actions
    .slice(0, 80)
    .map(
      (action) =>
        `| ${action.target || ""} | ${action.action || ""} | ${action.status || ""} | ${action.classification || ""} | ${action.reason || ""} |`,
    )
    .join("\n");
  const applyActions = report.apply_actions
    .map(
      (action) =>
        `| ${action.target || ""} | ${action.action || ""} | ${action.status || ""} | ${action.classification || ""} | ${action.reason || ""} |`,
    )
    .join("\n");
  const needsHuman =
    report.needs_human.length > 0
      ? report.needs_human.map((item) => `- ${item}`).join("\n")
      : "- none";
  return `---
repo: ${quote(report.repo)}
cluster_id: ${quote(report.cluster_id)}
mode: ${quote(report.mode)}
run_id: ${quote(report.run_id)}
run_url: ${quote(report.run_url)}
head_sha: ${quote(report.head_sha)}
workflow_conclusion: ${quote(report.workflow_conclusion)}
result_status: ${quote(report.result_status)}
published_at: ${quote(report.published_at)}
canonical: ${quote(report.canonical)}
canonical_issue: ${quote(report.canonical_issue)}
canonical_pr: ${quote(report.canonical_pr)}
actions_total: ${report.actions.length}
apply_executed: ${report.apply_counts.executed ?? 0}
apply_blocked: ${report.apply_counts.blocked ?? 0}
apply_skipped: ${report.apply_counts.skipped ?? 0}
needs_human_count: ${report.needs_human.length}
---

# ${report.cluster_id}

Repo: ${report.repo}

Run: ${report.run_url ? markdownLink(report.run_url, report.run_url) : "unknown"}

Workflow conclusion: ${report.workflow_conclusion || "unknown"}

Worker result: ${report.result_status || "unknown"}

Canonical: ${report.canonical || report.canonical_issue || report.canonical_pr || "unknown"}

## Summary

${report.summary || "_No summary emitted._"}

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | ${report.actions.length} |
| Applied executions | ${report.apply_counts.executed ?? 0} |
| Apply blocked | ${report.apply_counts.blocked ?? 0} |
| Apply skipped | ${report.apply_counts.skipped ?? 0} |
| Needs human | ${report.needs_human.length} |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
${applyActions || "| _None_ |  |  |  |  |"}

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
${actions || "| _None_ |  |  |  |  |"}

## Needs Human

${needsHuman}
`;
}

function writeClosedRecord(report, action, owner) {
  const targetNumber = String(action.target ?? "").replace(/^#/, "");
  if (!/^\d+$/.test(targetNumber)) return;
  const closedDir = path.join(repoRoot(), "closed", owner);
  fs.mkdirSync(closedDir, { recursive: true });
  const body = `---
repo: ${quote(report.repo)}
cluster_id: ${quote(report.cluster_id)}
run_id: ${quote(report.run_id)}
target: ${quote(action.target)}
action: ${quote(action.action)}
classification: ${quote(action.classification)}
closed_at: ${quote(report.published_at)}
---

# ${action.target} closed by ${report.cluster_id}

Run: ${report.run_url ? markdownLink(report.run_url, report.run_url) : "unknown"}

Reason: ${action.reason || "closed by ProjectClownfish applicator"}
`;
  fs.writeFileSync(path.join(closedDir, `${targetNumber}.md`), body, "utf8");
}

function updateDashboard() {
  const readmePath = path.join(repoRoot(), "README.md");
  if (!fs.existsSync(readmePath)) return;
  const readme = fs.readFileSync(readmePath, "utf8");
  const records = readRunRecords();
  const latestByCluster = latestClusterRecords(records).sort(sortNewestRecordFirst);
  const applyRows = latestByCluster.flatMap((record) =>
    (record.apply_actions ?? []).filter(isApplicatorAction).map((action) => ({ record, action })),
  );
  const executedRows = applyRows.filter((row) => row.action.status === "executed");
  const closedRows = executedRows.filter((row) => CLOSE_APPLICATOR_ACTIONS.has(String(row.action.action ?? "")));
  const mergedRows = executedRows.filter((row) => MERGE_APPLICATOR_ACTIONS.has(String(row.action.action ?? "")));
  const blockedRows = applyRows.filter((row) => row.action.status === "blocked");
  const skippedRows = applyRows.filter((row) => row.action.status === "skipped");
  const needsHumanRows = latestByCluster.filter((record) => (record.needs_human ?? []).length > 0);
  const cleanClusters = latestByCluster.filter(
    (record) =>
      record.workflow_conclusion === "success" &&
      (record.needs_human ?? []).length === 0 &&
      (record.apply_actions ?? []).every((action) => !["blocked", "failed"].includes(action.status)),
  );
  const workerActions = latestByCluster.flatMap((record) => record.actions ?? []);
  const workflowState =
    latestByCluster.some((record) => record.workflow_conclusion === "failure")
      ? "Failed clusters need inspection"
      : blockedRows.length > 0
        ? "Blocked actions need triage"
        : needsHumanRows.length > 0
          ? "Human review needed"
          : "Clean";
  const totals = {
    clusters: latestByCluster.length,
    runs: records.length,
    success: latestByCluster.filter((record) => record.workflow_conclusion === "success").length,
    failure: latestByCluster.filter((record) => record.workflow_conclusion === "failure").length,
    cancelled: latestByCluster.filter((record) => record.workflow_conclusion === "cancelled").length,
    cleanClusters: cleanClusters.length,
    closed: closedRows.length,
    merged: mergedRows.length,
    blocked: blockedRows.length,
    skipped: skippedRows.length,
    needsHumanClusters: needsHumanRows.length,
  };
  const dashboard = `## Dashboard

Last dashboard update: ${formatTimestamp(new Date().toISOString())}

${DASHBOARD_START}
### Workflow Status

Updated: ${formatTimestamp(new Date().toISOString())}

State: ${workflowState}

Scope: ${totals.clusters} latest cluster reports from ${totals.runs} run attempts. Dashboard totals use the latest report per cluster, not every retry.

### Cluster Health

| Metric | Count |
| --- | ---: |
| Latest successful clusters | ${totals.success} |
| Latest failed clusters | ${totals.failure} |
| Latest cancelled clusters | ${totals.cancelled} |
| Clean completed clusters | ${totals.cleanClusters} |
| Needs-human clusters | ${totals.needsHumanClusters} |
| Run attempts archived | ${totals.runs} |

### Action Outcomes

| Metric | Count |
| --- | ---: |
| Completed close actions | ${totals.closed} |
| Merged PRs | ${totals.merged} |
| Duplicate closes | ${countRows(closedRows, (row) => row.action.classification === "duplicate")} |
| Superseded closes | ${countRows(closedRows, (row) => row.action.classification === "superseded")} |
| Fixed-by-candidate closes | ${countRows(closedRows, (row) => row.action.classification === "fixed_by_candidate")} |
| Low-signal PR closes | ${countRows(closedRows, (row) => row.action.classification === "low_signal")} |
| Blocked mutation attempts | ${totals.blocked} |
| Skipped mutation attempts | ${totals.skipped} |

### Worker Decision Breakdown

| Decision | Count |
| --- | ---: |
${renderCountRows(countBy(workerActions, (action) => String(action.action ?? "unknown")), [
  "close_duplicate",
  "close_superseded",
  "close_fixed_by_candidate",
  "close_low_signal",
  "merge_candidate",
  "merge_canonical",
  "fix_needed",
  "build_fix_artifact",
  "needs_human",
  "keep_canonical",
  "keep_related",
  "keep_independent",
  "keep_closed",
])}

### Completed Close/Merge Ledger

| Target | Outcome | Cluster | Reason | Run |
| --- | --- | --- | --- | --- |
${renderActionLedger([...closedRows, ...mergedRows].slice(0, 25))}

### Blocked Actions

| Target | Action | Cluster | Reason | Run |
| --- | --- | --- | --- | --- |
${renderBlockedRows(blockedRows.slice(0, 20))}

### Needs Human Clusters

| Cluster | Reason | Run |
| --- | --- | --- |
${renderNeedsHumanRows(needsHumanRows.slice(0, 20))}
${DASHBOARD_END}`;

  let updated;
  const markerPattern = new RegExp(`${escapeRegExp(DASHBOARD_START)}[\\s\\S]*?${escapeRegExp(DASHBOARD_END)}`);
  if (markerPattern.test(readme)) {
    updated = readme.replace(/## Dashboard[\s\S]*?## How It Works/, `${dashboard}\n\n## How It Works`);
  } else if (/## How It Works/.test(readme)) {
    updated = readme.replace(/## How It Works/, `${dashboard}\n\n## How It Works`);
  } else {
    updated = `${readme.trim()}\n\n${dashboard}\n`;
  }
  fs.writeFileSync(readmePath, updated, "utf8");
}

function writeAggregateApplyReport() {
  const records = latestClusterRecords(readRunRecords());
  const rows = records.flatMap((record) =>
    (record.apply_actions ?? [])
      .filter(isApplicatorAction)
      .map((action) => ({
        repo: record.repo,
        run_id: record.run_id,
        run_url: record.run_url,
        cluster_id: record.cluster_id,
        published_at: record.published_at,
        ...action,
      })),
  );
  fs.writeFileSync(path.join(repoRoot(), "apply-report.json"), `${JSON.stringify(rows, null, 2)}\n`, "utf8");
}

function readRunRecords() {
  const dir = path.join(repoRoot(), "results", "runs");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".json"))
    .map((name) => readJson(path.join(dir, name)))
    .sort((left, right) => String(left.run_id ?? "").localeCompare(String(right.run_id ?? "")));
}

function latestClusterRecords(records) {
  const byCluster = new Map();
  for (const record of records) {
    const previous = byCluster.get(record.cluster_id);
    if (!previous || String(record.published_at).localeCompare(String(previous.published_at)) > 0) {
      byCluster.set(record.cluster_id, record);
    }
  }
  return [...byCluster.values()];
}

function findResultPaths(inputPath) {
  if (!fs.existsSync(inputPath)) return [];
  if (fs.statSync(inputPath).isFile()) {
    return path.basename(inputPath) === "result.json" ? [inputPath] : [];
  }
  const out = [];
  for (const entry of fs.readdirSync(inputPath, { recursive: true })) {
    const candidate = path.join(inputPath, String(entry));
    if (path.basename(candidate) === "result.json" && fs.statSync(candidate).isFile()) {
      out.push(candidate);
    }
  }
  return out.sort();
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function readSiblingJson(runDir, filename) {
  const direct = path.join(runDir, filename);
  if (fs.existsSync(direct)) return readJson(direct);
  for (const entry of fs.readdirSync(runDir, { recursive: true })) {
    const candidate = path.join(runDir, String(entry));
    if (path.basename(candidate) === filename && fs.statSync(candidate).isFile()) {
      return readJson(candidate);
    }
  }
  return null;
}

function readRunMetadata(filePath) {
  if (!filePath || typeof filePath !== "string" || !fs.existsSync(filePath)) return new Map();
  const data = readJson(filePath);
  const rows = Array.isArray(data) ? data : [data];
  return new Map(rows.map((row) => [String(row.databaseId ?? row.run_id ?? row.id), row]));
}

function inferRunId(filePath) {
  const match = String(filePath).match(/projectclownfish-(\d+)-\d+/);
  return match?.[1] ?? null;
}

function summarizeActions(actions) {
  return (Array.isArray(actions) ? actions : []).map((action) => ({
    target: action.target ?? null,
    action: action.action ?? null,
    status: action.status ?? null,
    classification: action.classification ?? null,
    canonical: action.canonical ?? action.duplicate_of ?? null,
    candidate_fix: action.candidate_fix ?? null,
    reason: action.reason ?? null,
  }));
}

function sanitizeApplyAction(action) {
  return {
    target: action.target ?? null,
    action: action.action ?? null,
    status: action.status ?? null,
    classification: action.classification ?? null,
    canonical: action.canonical ?? null,
    candidate_fix: action.candidate_fix ?? null,
    idempotency_key: action.idempotency_key ?? null,
    reason: action.reason ?? null,
    live_state: action.live_state ?? null,
    live_updated_at: action.live_updated_at ?? null,
  };
}

function isApplicatorAction(action) {
  return APPLICATOR_ACTIONS.has(String(action?.action ?? ""));
}

function sortNewestRecordFirst(left, right) {
  return String(right.published_at ?? "").localeCompare(String(left.published_at ?? ""));
}

function countRows(rows, predicate) {
  return rows.filter(predicate).length;
}

function renderCountRows(counts, preferredOrder) {
  const keys = [
    ...preferredOrder.filter((key) => counts[key]),
    ...Object.keys(counts)
      .filter((key) => !preferredOrder.includes(key))
      .sort(),
  ];
  return keys.length > 0
    ? keys.map((key) => `| ${formatActionLabel(key)} | ${counts[key]} |`).join("\n")
    : "| _None_ | 0 |";
}

function renderActionLedger(rows) {
  if (rows.length === 0) return "| _None_ |  |  |  |  |";
  return rows
    .map(({ record, action }) =>
      [
        markdownTableLink(action.target ?? "", githubItemUrl(record.repo, action.target)),
        formatActionLabel(action.action),
        markdownTableLink(record.cluster_id, clusterReportPath(record)),
        tableCell(action.reason || closeReasonFromAction(action)),
        markdownTableLink(record.run_id || "run", record.run_url),
      ].join(" | "),
    )
    .map((row) => `| ${row} |`)
    .join("\n");
}

function renderBlockedRows(rows) {
  if (rows.length === 0) return "| _None_ |  |  |  |  |";
  return rows
    .map(({ record, action }) =>
      [
        markdownTableLink(action.target ?? "", githubItemUrl(record.repo, action.target)),
        formatActionLabel(action.action),
        markdownTableLink(record.cluster_id, clusterReportPath(record)),
        tableCell(action.reason || "blocked"),
        markdownTableLink(record.run_id || "run", record.run_url),
      ].join(" | "),
    )
    .map((row) => `| ${row} |`)
    .join("\n");
}

function renderNeedsHumanRows(records) {
  if (records.length === 0) return "| _None_ |  |  |";
  return records
    .map((record) =>
      [
        markdownTableLink(record.cluster_id, clusterReportPath(record)),
        tableCell(firstNeedsHumanReason(record)),
        markdownTableLink(record.run_id || "run", record.run_url),
      ].join(" | "),
    )
    .map((row) => `| ${row} |`)
    .join("\n");
}

function firstNeedsHumanReason(record) {
  const first = record.needs_human?.[0];
  if (first) return truncate(first, 140);
  return truncate(record.summary || "needs human review", 140);
}

function closeReasonFromAction(action) {
  if (action.classification === "duplicate") return "duplicate close";
  if (action.classification === "superseded") return "superseded close";
  if (action.classification === "fixed_by_candidate") return "fixed by candidate";
  if (action.classification === "low_signal") return "low-signal PR cleanup";
  return "completed";
}

function formatActionLabel(value) {
  const text = String(value ?? "")
    .replaceAll("_", " ")
    .replace(/\bpr\b/gi, "PR");
  return text ? text[0].toUpperCase() + text.slice(1) : "Unknown";
}

function githubItemUrl(repo, ref) {
  const number = String(ref ?? "").replace(/^#/, "");
  if (!/^\d+$/.test(number) || !repo) return "";
  return `https://github.com/${repo}/issues/${number}`;
}

function clusterReportPath(record) {
  const owner = String(record.repo ?? "").split("/")[0] || "openclaw";
  return `results/${owner}/${slug(record.cluster_id)}.md`;
}

function markdownTableLink(label, url) {
  const safeLabel = tableCell(label || "unknown");
  return url ? `[${safeLabel}](${url})` : safeLabel;
}

function tableCell(value) {
  return truncate(String(value ?? "").replaceAll("|", "\\|").replace(/\s+/g, " ").trim(), 140);
}

function truncate(value, maxLength) {
  const text = String(value ?? "");
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3)}...`;
}

function countBy(values, keyFn) {
  const out = {};
  for (const value of Array.isArray(values) ? values : []) {
    const key = keyFn(value);
    out[key] = (out[key] ?? 0) + 1;
  }
  return out;
}

function sum(values, selector) {
  return values.reduce((total, value) => total + Number(selector(value) ?? 0), 0);
}

function quote(value) {
  if (value === null || value === undefined || value === "") return "null";
  return JSON.stringify(String(value));
}

function slug(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9_.-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120) || "unknown";
}

function markdownLink(label, url) {
  return `[${String(label).replaceAll("|", "\\|")}](${url})`;
}

function formatTimestamp(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "unknown";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC",
    timeZoneName: "short",
  }).format(date);
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
