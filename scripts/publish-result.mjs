#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { parseArgs, repoRoot } from "./lib.mjs";

const DASHBOARD_START = "<!-- projectclownfish-dashboard:start -->";
const DASHBOARD_END = "<!-- projectclownfish-dashboard:end -->";

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
    apply_counts: countBy(applyReport.actions ?? [], (action) => String(action.status ?? "unknown")),
    needs_human: Array.isArray(result.needs_human) ? result.needs_human : [],
    apply_actions: (applyReport.actions ?? []).map(sanitizeApplyAction),
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
  const latestByCluster = latestClusterRecords(records);
  const totals = {
    clusters: latestByCluster.length,
    runs: records.length,
    success: records.filter((record) => record.workflow_conclusion === "success").length,
    failure: records.filter((record) => record.workflow_conclusion === "failure").length,
    cancelled: records.filter((record) => record.workflow_conclusion === "cancelled").length,
    executed: sum(records, (record) => record.apply_counts?.executed ?? 0),
    blocked: sum(records, (record) => record.apply_counts?.blocked ?? 0),
    skipped: sum(records, (record) => record.apply_counts?.skipped ?? 0),
    needsHuman: sum(records, (record) => record.needs_human?.length ?? 0),
  };
  const dashboard = `## Dashboard

Last dashboard update: ${formatTimestamp(new Date().toISOString())}

${DASHBOARD_START}
| Metric | Count |
| --- | ---: |
| Cluster reports | ${totals.clusters} |
| Published runs | ${totals.runs} |
| Successful runs | ${totals.success} |
| Failed runs | ${totals.failure} |
| Cancelled runs | ${totals.cancelled} |
| Executed close actions | ${totals.executed} |
| Blocked apply actions | ${totals.blocked} |
| Skipped apply actions | ${totals.skipped} |
| Needs-human entries | ${totals.needsHuman} |
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
  const records = readRunRecords();
  const rows = records.flatMap((record) =>
    (record.apply_actions ?? []).map((action) => ({
      run_id: record.run_id,
      run_url: record.run_url,
      cluster_id: record.cluster_id,
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
