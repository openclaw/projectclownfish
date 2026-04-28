#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { githubActionsRunUrl, parseArgs, repoRoot } from "./lib.mjs";

const DASHBOARD_START = "<!-- projectclownfish-dashboard:start -->";
const DASHBOARD_END = "<!-- projectclownfish-dashboard:end -->";
const CLOSE_APPLICATOR_ACTIONS = new Set([
  "close",
  "close_duplicate",
  "close_superseded",
  "close_fixed_by_candidate",
  "close_low_signal",
  "post_merge_close",
]);
const MERGE_APPLICATOR_ACTIONS = new Set(["merge_candidate", "merge_canonical"]);
const APPLICATOR_ACTIONS = new Set([...CLOSE_APPLICATOR_ACTIONS, ...MERGE_APPLICATOR_ACTIONS]);
const POST_FLIGHT_APPLY_ACTIONS = new Set(["finalize_fix_pr", "post_merge_closeout"]);
const PR_INFO_CACHE = new Map();
const ISSUE_INFO_CACHE = new Map();
const archivedClusters = readArchivedClusters();

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
  const postFlightReport = readSiblingJson(runDir, "post-flight-report.json") ?? { actions: [] };
  const fixReport = readSiblingJson(runDir, "fix-execution-report.json") ?? { actions: [] };
  const clusterPlan = readSiblingJson(runDir, "cluster-plan.json");
  const runId = String(args["run-id"] ?? inferRunId(resultPath) ?? "");
  const metadata = runId ? metadataByRunId.get(runId) : undefined;
  const previousRecord = runId ? readExistingRunRecord(runId) : null;
  const runUrl =
    String(args["run-url"] ?? metadata?.url ?? "") ||
    previousRecord?.run_url ||
    (runId ? githubActionsRunUrl(runId) : null);
  const headSha = String(args["head-sha"] ?? metadata?.headSha ?? metadata?.head_sha ?? previousRecord?.head_sha ?? "");
  const workflowConclusion = String(args.conclusion ?? metadata?.conclusion ?? previousRecord?.workflow_conclusion ?? "");
  const workflowStatus = String(metadata?.status ?? previousRecord?.workflow_status ?? "");
  const repo = String(result.repo ?? "unknown/unknown");
  const owner = repo.split("/")[0] || "unknown";
  const clusterId = String(result.cluster_id ?? path.basename(runDir));
  const applyActions = uniquePlainActionRows([
    ...(applyReport.actions ?? []),
    ...(postFlightReport.actions ?? []).filter(isPostFlightApplyAction).map(postFlightToApplyAction),
  ].filter(isApplicatorAction));
  const fixActions = (fixReport.actions ?? []).map(sanitizeFixAction);
  const report = {
    repo,
    cluster_id: clusterId,
    mode: result.mode ?? null,
    run_id: runId || null,
    run_url: runUrl,
    head_sha: headSha || null,
    workflow_conclusion: workflowConclusion || null,
    workflow_status: workflowStatus || null,
    workflow_created_at: metadata?.createdAt ?? metadata?.created_at ?? previousRecord?.workflow_created_at ?? null,
    workflow_updated_at: metadata?.updatedAt ?? metadata?.updated_at ?? previousRecord?.workflow_updated_at ?? null,
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
    fix_counts: countBy(fixActions, (action) => String(action.status ?? "unknown")),
    apply_counts: countBy(applyActions, (action) => String(action.status ?? "unknown")),
    needs_human: Array.isArray(result.needs_human) ? result.needs_human : [],
    fix_actions: fixActions,
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
    fix_counts: report.fix_counts,
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
  const fixActions = (report.fix_actions ?? [])
    .map((action) => `| ${action.action || ""} | ${action.status || ""} | ${action.target || action.pr || ""} | ${action.branch || ""} | ${action.reason || ""} |`)
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
fix_executed: ${report.fix_counts.executed ?? 0}
fix_failed: ${report.fix_counts.failed ?? 0}
fix_blocked: ${report.fix_counts.blocked ?? 0}
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
| Fix executed | ${report.fix_counts.executed ?? 0} |
| Fix failed | ${report.fix_counts.failed ?? 0} |
| Fix blocked | ${report.fix_counts.blocked ?? 0} |
| Applied executions | ${report.apply_counts.executed ?? 0} |
| Apply blocked | ${report.apply_counts.blocked ?? 0} |
| Apply skipped | ${report.apply_counts.skipped ?? 0} |
| Needs human | ${report.needs_human.length} |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
${fixActions || "| _None_ |  |  |  |  |"}

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
  const closedDir = path.join(repoRoot(), "jobs", owner, "closed");
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
  const allLatestByCluster = latestClusterRecords(records).sort(sortNewestRecordFirst);
  const latestByCluster = allLatestByCluster.filter((record) => !archivedClusters.has(record.cluster_id));
  const archivedLatestByCluster = allLatestByCluster.filter((record) => archivedClusters.has(record.cluster_id));
  const trackedPrRows = buildTrackedPrRows(records);
  const latestApplyRows = latestByCluster.flatMap((record) =>
    (record.apply_actions ?? []).filter(isApplicatorAction).map((action) => ({ record, action })),
  );
  const latestFixRows = latestByCluster.flatMap((record) =>
    (record.fix_actions ?? []).map((action) => ({ record, action })),
  );
  const fixRows = uniqueFixRows(
    records.flatMap((record) => (record.fix_actions ?? []).map((action) => ({ record, action }))),
  );
  const applyRows = uniqueActionRows(
    records.flatMap((record) =>
      (record.apply_actions ?? []).filter(isApplicatorAction).map((action) => ({ record, action })),
    ),
  );
  const executedRows = applyRows.filter((row) => row.action.status === "executed");
  const closedRows = executedRows.filter((row) => CLOSE_APPLICATOR_ACTIONS.has(String(row.action.action ?? "")));
  const mergedRows = executedRows.filter((row) => MERGE_APPLICATOR_ACTIONS.has(String(row.action.action ?? "")));
  const closureRows = hydrateClosureRows(closedRows).sort(sortNewestClosureRowFirst);
  const blockedRows = applyRows.filter((row) => row.action.status === "blocked");
  const skippedRows = applyRows.filter((row) => row.action.status === "skipped");
  const latestBlockedRows = latestApplyRows.filter((row) => row.action.status === "blocked");
  const latestSkippedRows = latestApplyRows.filter((row) => row.action.status === "skipped");
  const latestFailedFixRows = latestFixRows.filter((row) => ["blocked", "failed"].includes(String(row.action.status ?? "")));
  const needsHumanRows = latestByCluster.filter((record) => (record.needs_human ?? []).length > 0);
  const inspectionRows = buildInspectionRows({
    latestByCluster,
    latestFailedFixRows,
    latestBlockedRows,
    latestSkippedRows,
  });
  const finalizerReport = readFinalizerReport();
  const cleanClusters = latestByCluster.filter(
    (record) =>
      record.workflow_conclusion === "success" &&
      (record.needs_human ?? []).length === 0 &&
      (record.fix_actions ?? []).every((action) => !["blocked", "failed"].includes(action.status)) &&
      (record.apply_actions ?? []).every((action) => !["blocked", "failed"].includes(action.status)),
  );
  const workflowState =
    latestByCluster.some((record) => record.workflow_conclusion === "failure")
      ? "Failed clusters need inspection"
      : latestFailedFixRows.length > 0
        ? "Fix execution needs repair"
      : latestBlockedRows.length > 0
        ? "Blocked actions need triage"
        : needsHumanRows.length > 0
          ? "Human review needed"
          : "Clean";
  const mutationRows = applyRows.filter((row) =>
    ["executed", "blocked", "skipped"].includes(String(row.action.status ?? "")),
  );
  const duplicateCloses = countRows(closedRows, (row) => row.action.classification === "duplicate");
  const supersededCloses = countRows(closedRows, (row) => row.action.classification === "superseded");
  const fixedByCandidateCloses = countRows(
    closedRows,
    (row) => row.action.classification === "fixed_by_candidate",
  );
  const lowSignalCloses = countRows(closedRows, (row) => row.action.classification === "low_signal");
  const totals = {
    clusters: latestByCluster.length,
    archivedClusters: archivedLatestByCluster.length,
    runs: records.length,
    success: latestByCluster.filter((record) => record.workflow_conclusion === "success").length,
    failure: latestByCluster.filter((record) => record.workflow_conclusion === "failure").length,
    cancelled: latestByCluster.filter((record) => record.workflow_conclusion === "cancelled").length,
    cleanClusters: cleanClusters.length,
    closed: closedRows.length,
    merged: mergedRows.length,
    trackedPrs: trackedPrRows.length,
    openTrackedPrs: countRows(trackedPrRows, (row) => row.state === "open"),
    closedUnmergedTrackedPrs: countRows(
      trackedPrRows,
      (row) => row.state === "closed" && !row.merged,
    ),
    blocked: blockedRows.length,
    skipped: skippedRows.length,
    fixAttempts: fixRows.length,
    fixExecuted: countRows(fixRows, (row) => row.action.status === "executed"),
    fixFailed: countRows(fixRows, (row) => row.action.status === "failed"),
    fixBlocked: countRows(fixRows, (row) => row.action.status === "blocked"),
    latestFixProblemClusters: new Set(latestFailedFixRows.map((row) => row.record.cluster_id)).size,
    needsHumanClusters: needsHumanRows.length,
    mutationAttempts: mutationRows.length,
    duplicateCloses,
    supersededCloses,
    fixedByCandidateCloses,
    lowSignalCloses,
  };
  const dashboard = `## Dashboard

Last dashboard update: ${formatTimestamp(new Date().toISOString())}

${DASHBOARD_START}
State: ${workflowState}

Scope: ${totals.clusters} active latest cluster reports. ${totals.archivedClusters} policy-archived cluster(s) are excluded from health stats; run attempts are tracked as audit history only.

| Metric | Count | Rate |
| --- | ---: | ---: |
${renderMetricRow("Latest clusters reviewed", totals.clusters, "100%")}
${renderMetricRow("Policy-archived clusters", totals.archivedClusters, "audit")}
${renderMetricRow("Clean completed clusters", totals.cleanClusters, percent(totals.cleanClusters, totals.clusters))}
${renderMetricRow("Needs-human clusters", totals.needsHumanClusters, percent(totals.needsHumanClusters, totals.clusters))}
${renderMetricRow("Latest successful clusters", totals.success, percent(totals.success, totals.clusters))}
${renderMetricRow("Latest failed clusters", totals.failure, percent(totals.failure, totals.clusters))}
${renderMetricRow("Latest cancelled clusters", totals.cancelled, percent(totals.cancelled, totals.clusters))}
${renderMetricRow("Run attempts archived", totals.runs, "audit")}
${renderMetricRow("Fix action attempts", totals.fixAttempts, "audit")}
${renderMetricRow("Fix actions executed", totals.fixExecuted, percent(totals.fixExecuted, totals.fixAttempts))}
${renderMetricRow("Fix actions failed", totals.fixFailed, percent(totals.fixFailed, totals.fixAttempts))}
${renderMetricRow("Fix actions blocked", totals.fixBlocked, percent(totals.fixBlocked, totals.fixAttempts))}
${renderMetricRow("Latest clusters with fix failures", totals.latestFixProblemClusters, percent(totals.latestFixProblemClusters, totals.clusters))}
${renderMetricRow("Distinct PRs touched", totals.trackedPrs, "100%")}
${renderMetricRow("Open PRs tracked", totals.openTrackedPrs, percent(totals.openTrackedPrs, totals.trackedPrs))}
${renderMetricRow(
  "Closed unmerged PRs tracked",
  totals.closedUnmergedTrackedPrs,
  percent(totals.closedUnmergedTrackedPrs, totals.trackedPrs),
)}
${renderMetricRow("Completed close actions", totals.closed, percent(totals.closed, totals.mutationAttempts))}
${renderMetricRow("Completed merge actions", totals.merged, percent(totals.merged, totals.mutationAttempts))}
${renderMetricRow("Duplicate closes", totals.duplicateCloses, percent(totals.duplicateCloses, totals.closed))}
${renderMetricRow("Superseded closes", totals.supersededCloses, percent(totals.supersededCloses, totals.closed))}
${renderMetricRow(
  "Fixed-by-candidate closes",
  totals.fixedByCandidateCloses,
  percent(totals.fixedByCandidateCloses, totals.closed),
)}
${renderMetricRow("Low-signal PR closes", totals.lowSignalCloses, percent(totals.lowSignalCloses, totals.closed))}
${renderMetricRow("Blocked mutation attempts", totals.blocked, percent(totals.blocked, totals.mutationAttempts))}
${renderMetricRow("Skipped mutation attempts", totals.skipped, percent(totals.skipped, totals.mutationAttempts))}

### Clusters Needing Inspection

| Cluster | State | Source job | Reason | Report | Run |
| --- | --- | --- | --- | --- | --- |
${renderInspectionRows(inspectionRows.slice(0, 25))}

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
${renderFixFailureRows(latestFailedFixRows.slice(0, 25))}

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
${renderBlockedReasonRows([...latestBlockedRows, ...latestSkippedRows])}

### Open PR Finalizer Queue

| PR | Title | Cluster | Branch | Blockers | Next action |
| --- | --- | --- | --- | --- | --- |
${renderFinalizerRows(finalizerReport)}

### Latest ProjectClownfish Closures

| Target | Type | Title | Closed | Action | Cluster | Report | Run |
| --- | --- | --- | --- | --- | --- | --- | --- |
${renderRecentClosureRows(closureRows.slice(0, 25))}
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
  fs.writeFileSync(path.join(repoRoot(), "apply-report.json"), `${JSON.stringify(uniquePlainActionRows(rows), null, 2)}\n`, "utf8");
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

function readExistingRunRecord(runId) {
  const filePath = path.join(repoRoot(), "results", "runs", `${runId}.json`);
  if (!fs.existsSync(filePath)) return null;
  return readJson(filePath);
}

function readArchivedClusters() {
  const filePath = path.join(repoRoot(), "results", "archived-clusters.json");
  if (!fs.existsSync(filePath)) return new Set();
  const data = readJson(filePath);
  const rows = Array.isArray(data) ? data : data.archived_clusters;
  return new Set((Array.isArray(rows) ? rows : []).map((row) => String(row.cluster_id ?? row)).filter(Boolean));
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
  return preferFinalResultPaths(out);
}

function preferFinalResultPaths(paths) {
  const byRunAndCluster = new Map();
  for (const resultPath of paths.sort()) {
    const runId = inferRunId(resultPath);
    const clusterId = readResultClusterId(resultPath);
    const key = runId && clusterId ? `${runId}:${clusterId}` : resultPath;
    const previous = byRunAndCluster.get(key);
    if (!previous || resultPathScore(resultPath) > resultPathScore(previous)) {
      byRunAndCluster.set(key, resultPath);
    }
  }
  return [...byRunAndCluster.values()].sort();
}

function resultPathScore(resultPath) {
  const runDir = path.dirname(resultPath);
  let score = 0;
  if (fs.existsSync(path.join(runDir, "fix-execution-report.json"))) score += 8;
  if (fs.existsSync(path.join(runDir, "post-flight-report.json"))) score += 4;
  if (fs.existsSync(path.join(runDir, "apply-report.json"))) score += 2;
  if (!resultPath.includes("projectclownfish-worker-")) score += 1;
  return score;
}

function readResultClusterId(resultPath) {
  try {
    return String(readJson(resultPath).cluster_id ?? "");
  } catch {
    return "";
  }
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
  const match = String(filePath).match(/projectclownfish(?:-worker)?-(\d+)-\d+/);
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
    title: action.title ?? action.target_title ?? action.pr_title ?? null,
    idempotency_key: action.idempotency_key ?? null,
    reason: action.reason ?? null,
    merged_at: action.merged_at ?? null,
    merge_commit_sha: action.merge_commit_sha ?? null,
    live_state: action.live_state ?? null,
    live_updated_at: action.live_updated_at ?? null,
  };
}

function sanitizeFixAction(action) {
  return {
    action: action.action ?? null,
    status: action.status ?? null,
    target: action.target ?? null,
    pr: action.pr ?? action.pr_url ?? null,
    branch: action.branch ?? action.head_branch ?? null,
    source_action: action.source_action ?? null,
    source_status: action.source_status ?? null,
    repair_strategy: action.repair_strategy ?? null,
    reason: action.reason ?? null,
    title: action.title ?? null,
    url: action.url ?? action.pr_url ?? null,
  };
}

function isApplicatorAction(action) {
  return APPLICATOR_ACTIONS.has(String(action?.action ?? ""));
}

function isPostFlightApplyAction(action) {
  const actionName = String(action?.action ?? "");
  if (!POST_FLIGHT_APPLY_ACTIONS.has(actionName)) return false;
  if (actionName === "finalize_fix_pr") return Boolean(action?.pr);
  return Boolean(action?.target);
}

function postFlightToApplyAction(action) {
  if (String(action.action ?? "") === "post_merge_closeout") {
    return {
      target: action.target,
      action: action.source_action ?? "post_merge_close",
      status: action.status,
      classification: "post_merge_closeout",
      canonical: action.canonical ?? null,
      candidate_fix: action.candidate_fix ?? null,
      title: action.title ?? null,
      reason: action.reason ?? null,
      merged_at: null,
      merge_commit_sha: action.merge_commit_sha ?? null,
      live_state: action.live_state ?? null,
      live_updated_at: null,
    };
  }
  return {
    target: action.pr,
    action: "merge_canonical",
    status: action.status,
    classification: "fix_pr",
    title: action.title ?? null,
    reason: action.reason ?? null,
    merged_at: action.merged_at ?? null,
    merge_commit_sha: action.merge_commit_sha ?? null,
    live_state: action.status === "executed" ? "merged" : null,
    live_updated_at: null,
  };
}

function sortNewestRecordFirst(left, right) {
  return String(right.published_at ?? "").localeCompare(String(left.published_at ?? ""));
}

function countRows(rows, predicate) {
  return rows.filter(predicate).length;
}

function renderRecentClosureRows(rows) {
  if (rows.length === 0) return "| _None yet_ |  |  |  |  |  |  |  |";
  return rows
    .map((row) =>
      [
        markdownTableLink(row.action.target || "target", row.url),
        tableCell(row.kind),
        tableCell(row.title),
        tableCell(row.closed_at ? formatTimestamp(row.closed_at) : "executed"),
        tableCell(row.action.action),
        markdownTableLink(row.record.cluster_id, clusterReportPath(row.record)),
        markdownTableLink("report", clusterReportPath(row.record)),
        markdownTableLink(row.record.run_id || "run", row.record.run_url),
      ].join(" | "),
    )
    .map((row) => `| ${row} |`)
    .join("\n");
}

function buildInspectionRows({ latestByCluster, latestFailedFixRows, latestBlockedRows, latestSkippedRows }) {
  const byCluster = new Map();
  for (const record of latestByCluster) {
    if (record.workflow_conclusion === "failure") {
      addInspectionRow(byCluster, record, "workflow failure", record.summary || "cluster worker failed");
    }
    for (const item of record.needs_human ?? []) {
      addInspectionRow(byCluster, record, "needs human", inspectionReason(item) || record.summary);
    }
  }
  for (const row of latestFailedFixRows) {
    addInspectionRow(byCluster, row.record, `fix ${row.action.status}`, actionReason(row.action));
  }
  for (const row of [...latestBlockedRows, ...latestSkippedRows]) {
    addInspectionRow(byCluster, row.record, `apply ${row.action.status}`, actionReason(row.action));
  }
  return [...byCluster.values()].sort((left, right) =>
    String(right.record.published_at ?? "").localeCompare(String(left.record.published_at ?? "")),
  );
}

function addInspectionRow(byCluster, record, state, reason) {
  if (!record?.cluster_id) return;
  const current = byCluster.get(record.cluster_id);
  const next = { record, state, reason: compactReason(reason || record.summary || "inspection needed") };
  if (!current || inspectionRank(next.state) > inspectionRank(current.state)) {
    byCluster.set(record.cluster_id, next);
  }
}

function inspectionRank(state) {
  if (String(state).startsWith("workflow")) return 5;
  if (String(state).startsWith("fix failed")) return 4;
  if (String(state).startsWith("fix blocked")) return 3;
  if (String(state).startsWith("apply blocked")) return 2;
  return 1;
}

function renderInspectionRows(rows) {
  if (rows.length === 0) return "| _None_ |  |  |  |  |  |";
  return rows
    .map(({ record, state, reason }) =>
      [
        markdownTableLink(record.cluster_id, clusterReportPath(record)),
        tableCell(state),
        tableCell(record.source_job ?? ""),
        tableCell(reason),
        markdownTableLink("report", clusterReportPath(record)),
        markdownTableLink(record.run_id || "run", record.run_url),
      ].join(" | "),
    )
    .map((row) => `| ${row} |`)
    .join("\n");
}

function renderFixFailureRows(rows) {
  if (rows.length === 0) return "| _None_ |  |  |  |  |  |";
  return rows
    .map(({ record, action }) =>
      [
        markdownTableLink(record.cluster_id, clusterReportPath(record)),
        tableCell(action.status),
        tableCell(action.target ?? ""),
        tableCell(action.pr ?? action.url ?? action.branch ?? ""),
        tableCell(actionReason(action)),
        markdownTableLink(record.run_id || "run", record.run_url),
      ].join(" | "),
    )
    .map((row) => `| ${row} |`)
    .join("\n");
}

function renderBlockedReasonRows(rows) {
  const counts = new Map();
  for (const row of rows) {
    const reason = compactReason(actionReason(row.action) || "unknown");
    const current = counts.get(reason);
    counts.set(reason, {
      reason,
      count: (current?.count ?? 0) + 1,
      record: current?.record ?? row.record,
    });
  }
  const ranked = [...counts.values()].sort((left, right) => right.count - left.count || left.reason.localeCompare(right.reason));
  if (ranked.length === 0) return "| _None_ | 0 |  |";
  return ranked
    .slice(0, 15)
    .map((row) =>
      [
        tableCell(row.reason),
        row.count,
        markdownTableLink(row.record.cluster_id, clusterReportPath(row.record)),
      ].join(" | "),
    )
    .map((row) => `| ${row} |`)
    .join("\n");
}

function renderFinalizerRows(report) {
  const prs = Array.isArray(report?.prs) ? report.prs : [];
  if (prs.length === 0) return "| _None_ |  |  |  |  |  |";
  return prs
    .slice(0, 25)
    .map((pr) =>
      [
        markdownTableLink(`#${pr.number}`, pr.url),
        tableCell(pr.title),
        tableCell(pr.cluster_id ?? ""),
        tableCell(pr.branch ?? ""),
        tableCell((pr.blockers ?? []).join(", ") || "ready"),
        tableCell(pr.recommended_next_action ?? ""),
      ].join(" | "),
    )
    .map((row) => `| ${row} |`)
    .join("\n");
}

function actionReason(action) {
  return compactReason(
    [
      action?.code,
      action?.reason,
    ]
      .filter(Boolean)
      .join(": "),
  );
}

function inspectionReason(item) {
  if (typeof item === "string") return item;
  if (!item || typeof item !== "object") return "";
  return item.reason ?? item.summary ?? item.title ?? item.ref ?? JSON.stringify(item);
}

function compactReason(value) {
  return truncate(String(value ?? "").replace(/\s+/g, " ").trim(), 160);
}

function readFinalizerReport() {
  const filePath = path.join(repoRoot(), "results", "finalize-open-prs.json");
  if (!fs.existsSync(filePath)) return null;
  try {
    return readJson(filePath);
  } catch {
    return null;
  }
}

function buildTrackedPrRows(records) {
  const byPull = new Map();
  for (const record of records) {
    addTrackedPrRef(byPull, record, record.canonical_pr, { source: "canonical_pr", explicitPull: true });
    addTrackedPrRef(byPull, record, record.canonical, { source: "canonical", explicitPull: isPullUrl(record.canonical) });

    for (const action of record.actions ?? []) {
      const title = action.title ?? action.target_title ?? action.pr_title ?? null;
      addTrackedPrRef(byPull, record, action.target, {
        source: "target",
        explicitPull: false,
        title,
      });
      addTrackedPrRef(byPull, record, action.canonical, {
        source: "canonical",
        explicitPull: isPullUrl(action.canonical),
        title,
      });
      addTrackedPrRef(byPull, record, action.candidate_fix, {
        source: "candidate_fix",
        explicitPull: isPullUrl(action.candidate_fix),
        title,
      });
    }

    for (const action of record.apply_actions ?? []) {
      const actionName = String(action.action ?? "");
      const title = action.title ?? action.target_title ?? action.pr_title ?? null;
      const projectClownfishMerged =
        MERGE_APPLICATOR_ACTIONS.has(actionName) && action.status === "executed";
      addTrackedPrRef(byPull, record, action.target, {
        source: "apply_target",
        explicitPull: false,
        title,
        assumedMerged: projectClownfishMerged,
        projectClownfishMerged,
        projectClownfishMergedAt: action.merged_at ?? null,
        merged_at: projectClownfishMerged ? action.merged_at ?? null : null,
      });
      addTrackedPrRef(byPull, record, action.canonical, {
        source: "apply_canonical",
        explicitPull: isPullUrl(action.canonical),
        title,
      });
      addTrackedPrRef(byPull, record, action.candidate_fix, {
        source: "apply_candidate_fix",
        explicitPull: isPullUrl(action.candidate_fix),
        title,
      });
    }
  }

  return hydrateTrackedPrRows([...byPull.values()]).sort(sortNewestPrRowFirst);
}

function addTrackedPrRef(byPull, record, value, options = {}) {
  const pull = parseGithubPullRef(record.repo, value);
  if (!pull) return;
  addTrackedPrRow(byPull, {
    record,
    repo: pull.repo,
    number: pull.number,
    title: options.title ?? null,
    assumedMerged: Boolean(options.assumedMerged),
    merged_at: options.merged_at ?? null,
    first_seen_at: record.workflow_created_at ?? record.published_at ?? null,
    projectClownfishMerged: Boolean(options.projectClownfishMerged),
    projectClownfishMergedAt: options.projectClownfishMergedAt ?? null,
    sources: new Set([options.source ?? "ref"]),
    explicitPull: Boolean(options.explicitPull),
  });
}

function addTrackedPrRow(byPull, row) {
  const key = `${row.repo}#${row.number}`;
  const previous = byPull.get(key);
  if (!previous || preferTrackedPrRow(row, previous)) {
    byPull.set(key, mergeTrackedPrRows(row, previous));
  } else if (previous) {
    byPull.set(key, mergeTrackedPrRows(previous, row));
  }
}

function mergeTrackedPrRows(primary, secondary) {
  if (!secondary) return primary;
  return {
    ...primary,
    title: primary.title ?? secondary.title ?? null,
    assumedMerged: Boolean(primary.assumedMerged || secondary.assumedMerged),
    merged_at: primary.merged_at ?? secondary.merged_at ?? null,
    first_seen_at: earlierIso(primary.first_seen_at, secondary.first_seen_at),
    projectClownfishMerged: Boolean(primary.projectClownfishMerged || secondary.projectClownfishMerged),
    projectClownfishMergedAt: primary.projectClownfishMergedAt ?? secondary.projectClownfishMergedAt ?? null,
    sources: new Set([...(primary.sources ?? []), ...(secondary.sources ?? [])]),
    explicitPull: Boolean(primary.explicitPull || secondary.explicitPull),
  };
}

function preferTrackedPrRow(candidate, current) {
  if (candidate.assumedMerged && !current.assumedMerged) return true;
  if (!candidate.assumedMerged && current.assumedMerged) return false;
  return String(candidate.record.published_at ?? "").localeCompare(String(current.record.published_at ?? "")) > 0;
}

function hydrateTrackedPrRows(rows) {
  const infoByPull = githubPullInfo(rows);
  return rows
    .map((row) => {
      const info = infoByPull.get(`${row.repo}#${row.number}`);
      if (!info && !row.explicitPull) return null;
      const projectClownfishMerged = Boolean(row.projectClownfishMerged);
      const merged = Boolean(row.merged_at || info?.merged);
      const mergedAt = row.merged_at ?? info?.merged_at ?? null;
      const state = merged ? "merged" : normalizePullState(info?.state) ?? "tracked";
      return {
        ...row,
        title: row.title ?? info?.title ?? `PR #${row.number}`,
        url: info?.html_url ?? githubPullUrl(row.repo, row.number),
        state,
        merged,
        merged_at: mergedAt,
        projectClownfishMerged,
        projectClownfishMergedAt: row.projectClownfishMergedAt ?? null,
      };
    })
    .filter(Boolean);
}

function sortNewestPrRowFirst(left, right) {
  return String(right.merged_at ?? right.record.published_at ?? "").localeCompare(
    String(left.merged_at ?? left.record.published_at ?? ""),
  );
}

function hydrateClosureRows(rows) {
  const infoByIssue = githubIssueInfo(rows);
  return rows.map((row) => {
    const target = parseGithubIssueRef(row.record.repo, row.action.target);
    const info = target ? infoByIssue.get(`${target.repo}#${target.number}`) : null;
    return {
      ...row,
      kind: info?.kind ?? "issue_or_pr",
      title: info?.title ?? row.action.title ?? row.action.reason ?? String(row.action.target ?? "closed target"),
      url: info?.html_url ?? (target ? githubIssueUrl(target.repo, target.number) : ""),
      closed_at: info?.closed_at ?? row.action.closed_at ?? row.record.workflow_updated_at ?? row.record.published_at ?? null,
    };
  });
}

function sortNewestClosureRowFirst(left, right) {
  return String(right.closed_at ?? right.record.published_at ?? "").localeCompare(
    String(left.closed_at ?? left.record.published_at ?? ""),
  );
}

function uniqueActionRows(rows) {
  const byKey = new Map();
  for (const row of rows) {
    const record = row.record ?? row;
    const action = row.action ?? row;
    const key = [
      record.repo,
      action.target,
      action.action,
    ].join(":");
    const previous = byKey.get(key);
    if (!previous || preferActionRow(row, previous)) {
      byKey.set(key, row);
    }
  }
  return [...byKey.values()];
}

function uniquePlainActionRows(rows) {
  const byKey = new Map();
  for (const row of rows) {
    const key = [
      row.repo,
      row.cluster_id,
      row.target,
      row.action,
    ].join(":");
    const previous = byKey.get(key);
    if (!previous || preferActionRow(row, previous)) {
      byKey.set(key, row);
    }
  }
  return [...byKey.values()];
}

function uniqueFixRows(rows) {
  const byKey = new Map();
  for (const row of rows) {
    const record = row.record ?? row;
    const action = row.action ?? row;
    const key = [
      record.repo,
      record.cluster_id,
      action.action,
      action.target,
      action.pr,
      action.branch,
      action.repair_strategy,
      action.source_action,
    ].join(":");
    const previous = byKey.get(key);
    if (!previous || preferActionRow(row, previous)) {
      byKey.set(key, row);
    }
  }
  return [...byKey.values()];
}

function preferActionRow(candidate, previous) {
  const candidateRecord = candidate.record && typeof candidate.record === "object" ? candidate.record : candidate;
  const previousRecord = previous.record && typeof previous.record === "object" ? previous.record : previous;
  const candidateAction = candidate.action && typeof candidate.action === "object" ? candidate.action : candidate;
  const previousAction = previous.action && typeof previous.action === "object" ? previous.action : previous;
  const candidateRank = actionStatusRank(candidateAction.status);
  const previousRank = actionStatusRank(previousAction.status);
  if (candidateRank !== previousRank) return candidateRank > previousRank;
  return String(candidateRecord.published_at ?? "").localeCompare(String(previousRecord.published_at ?? "")) > 0;
}

function actionStatusRank(status) {
  switch (status) {
    case "executed":
      return 6;
    case "merged":
      return 6;
    case "failed":
      return 5;
    case "blocked":
      return 4;
    case "skipped":
      return 3;
    case "planned":
      return 2;
    default:
      return 1;
  }
}

function githubPullInfo(rows) {
  const byRepo = new Map();
  for (const row of rows) {
    if (!row.repo || !row.number) continue;
    const key = `${row.repo}#${row.number}`;
    if (PR_INFO_CACHE.has(key)) continue;
    const numbers = byRepo.get(row.repo) ?? new Set();
    numbers.add(String(row.number));
    byRepo.set(row.repo, numbers);
  }

  for (const [repo, numbers] of byRepo) {
    for (const batch of chunks([...numbers], 50)) {
      for (const [key, info] of githubPullInfoBatch(repo, batch)) {
        PR_INFO_CACHE.set(key, info);
      }
      for (const number of batch) {
        const key = `${repo}#${number}`;
        if (!PR_INFO_CACHE.has(key)) PR_INFO_CACHE.set(key, null);
      }
    }
  }

  return new Map(rows.map((row) => [`${row.repo}#${row.number}`, PR_INFO_CACHE.get(`${row.repo}#${row.number}`)]));
}

function githubIssueInfo(rows) {
  const byRepo = new Map();
  for (const row of rows) {
    const target = parseGithubIssueRef(row.record?.repo ?? row.repo, row.action?.target ?? row.target);
    if (!target) continue;
    const key = `${target.repo}#${target.number}`;
    if (ISSUE_INFO_CACHE.has(key)) continue;
    const numbers = byRepo.get(target.repo) ?? new Set();
    numbers.add(String(target.number));
    byRepo.set(target.repo, numbers);
  }

  for (const [repo, numbers] of byRepo) {
    for (const batch of chunks([...numbers], 50)) {
      for (const [key, info] of githubIssueInfoBatch(repo, batch)) {
        ISSUE_INFO_CACHE.set(key, info);
      }
      for (const number of batch) {
        const key = `${repo}#${number}`;
        if (!ISSUE_INFO_CACHE.has(key)) ISSUE_INFO_CACHE.set(key, null);
      }
    }
  }

  return new Map(rows.map((row) => {
    const target = parseGithubIssueRef(row.record?.repo ?? row.repo, row.action?.target ?? row.target);
    return target ? [`${target.repo}#${target.number}`, ISSUE_INFO_CACHE.get(`${target.repo}#${target.number}`)] : ["", null];
  }));
}

function githubIssueInfoBatch(repo, numbers) {
  const [owner, name] = String(repo).split("/");
  if (!owner || !name || numbers.length === 0) return new Map();
  const fields = numbers
    .map(
      (number, index) =>
        `i${index}: issueOrPullRequest(number: ${Number(number)}) { __typename ... on Issue { number title state closedAt url } ... on PullRequest { number title state closedAt merged mergedAt url } }`,
    )
    .join("\n");
  const query = `query { repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) { ${fields} } }`;
  const body = runGhGraphql(query);
  if (!body) return new Map();
  const data = JSON.parse(body);
  const repository = data?.data?.repository ?? {};
  const out = new Map();
  numbers.forEach((number, index) => {
    const info = repository[`i${index}`];
    if (!info) return;
    out.set(`${repo}#${number}`, {
      html_url: info.url ?? githubIssueUrl(repo, number),
      kind: info.__typename === "PullRequest" ? "pull_request" : "issue",
      closed_at: info.closedAt ?? info.mergedAt ?? null,
      merged: Boolean(info.merged),
      merged_at: info.mergedAt ?? null,
      state: normalizePullState(info.state),
      title: info.title ?? null,
    });
  });
  return out;
}

function githubPullInfoBatch(repo, numbers) {
  const [owner, name] = String(repo).split("/");
  if (!owner || !name || numbers.length === 0) return new Map();
  const fields = numbers
    .map(
      (number, index) =>
        `p${index}: pullRequest(number: ${Number(number)}) { number title state merged mergedAt url }`,
    )
    .join("\n");
  const query = `query { repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) { ${fields} } }`;
  const body = runGhGraphql(query);
  if (!body) return new Map();
  const data = JSON.parse(body);
  const repository = data?.data?.repository ?? {};
  const out = new Map();
  numbers.forEach((number, index) => {
    const info = repository[`p${index}`];
    if (!info) return;
    out.set(`${repo}#${number}`, {
      html_url: info.url ?? githubPullUrl(repo, number),
      merged: Boolean(info.merged),
      merged_at: info.mergedAt ?? null,
      state: normalizePullState(info.state),
      title: info.title ?? null,
    });
  });
  return out;
}

function runGhGraphql(query) {
  const env = { ...process.env, NO_COLOR: "1", CLICOLOR: "0" };
  delete env.FORCE_COLOR;
  if (!env.GH_TOKEN && env.CLOWNFISH_READ_GH_TOKEN) env.GH_TOKEN = env.CLOWNFISH_READ_GH_TOKEN;
  if (!env.GH_TOKEN && env.GITHUB_TOKEN) env.GH_TOKEN = env.GITHUB_TOKEN;
  try {
    const text = execFileSync("gh", ["api", "graphql", "-f", `query=${query}`], {
      encoding: "utf8",
      env,
      maxBuffer: 8 * 1024 * 1024,
      stdio: ["ignore", "pipe", "ignore"],
    });
    return stripAnsi(text);
  } catch (error) {
    return stripAnsi(error.stdout || error.output?.[1]?.toString() || "");
  }
}

function stripAnsi(text) {
  return String(text ?? "").replace(/\u001b\[[0-?]*[ -/]*[@-~]/g, "");
}

function parseGithubPullRef(defaultRepo, value) {
  const text = String(value ?? "").trim();
  if (!text) return null;
  let match = text.match(/^#?(\d+)$/);
  if (match && defaultRepo) return { repo: defaultRepo, number: match[1] };
  match = text.match(/^([^/\s]+\/[^#\s]+)#(\d+)$/);
  if (match) return { repo: match[1], number: match[2] };
  match = text.match(/github\.com\/([^/\s]+)\/([^/\s]+)\/pull\/(\d+)/);
  if (match) return { repo: `${match[1]}/${match[2]}`, number: match[3] };
  return null;
}

function parseGithubIssueRef(defaultRepo, value) {
  const text = String(value ?? "").trim();
  if (!text) return null;
  let match = text.match(/^#?(\d+)$/);
  if (match && defaultRepo) return { repo: defaultRepo, number: match[1] };
  match = text.match(/^([^/\s]+\/[^#\s]+)#(\d+)$/);
  if (match) return { repo: match[1], number: match[2] };
  match = text.match(/github\.com\/([^/\s]+)\/([^/\s]+)\/(?:issues|pull)\/(\d+)/);
  if (match) return { repo: `${match[1]}/${match[2]}`, number: match[3] };
  return null;
}

function isPullUrl(value) {
  return /github\.com\/[^/\s]+\/[^/\s]+\/pull\/\d+/.test(String(value ?? ""));
}

function normalizePullState(state) {
  if (!state) return null;
  return String(state).toLowerCase();
}

function githubPullUrl(repo, ref) {
  const number = String(ref ?? "").replace(/^#/, "");
  if (!/^\d+$/.test(number) || !repo) return "";
  return `https://github.com/${repo}/pull/${number}`;
}

function githubIssueUrl(repo, ref) {
  const number = String(ref ?? "").replace(/^#/, "");
  if (!/^\d+$/.test(number) || !repo) return "";
  return `https://github.com/${repo}/issues/${number}`;
}

function earlierIso(left, right) {
  if (!left) return right ?? null;
  if (!right) return left ?? null;
  return String(left).localeCompare(String(right)) <= 0 ? left : right;
}

function renderMetricRow(metric, count, rate) {
  return `| ${tableCell(metric)} | ${count} | ${tableCell(rate)} |`;
}

function percent(count, total) {
  if (!total) return "0.0%";
  return `${((Number(count) / Number(total)) * 100).toFixed(1)}%`;
}

function chunks(values, size) {
  const out = [];
  for (let index = 0; index < values.length; index += size) {
    out.push(values.slice(index, index + size));
  }
  return out;
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
