#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { currentProjectRepo, parseArgs, parseSimpleYaml, repoRoot } from "./lib.mjs";

const DEFAULT_LABEL = "clownfish";
const FIX_PR_STATUSES = new Set(["opened", "pushed", "executed", "blocked", "planned"]);
const APPLY_STATUSES = new Set(["executed"]);
const CLOSE_ACTIONS = new Set([
  "close",
  "close_duplicate",
  "close_superseded",
  "close_fixed_by_candidate",
  "close_low_signal",
  "post_merge_close",
]);
const MERGE_ACTIONS = new Set(["merge_candidate", "merge_canonical"]);
const MUTATION_ACTIONS = new Set([...CLOSE_ACTIONS, ...MERGE_ACTIONS]);

const args = parseArgs(process.argv.slice(2));
const labelName = String(args.label ?? DEFAULT_LABEL);
const apply = Boolean(args.apply || args.execute);
const live = Boolean(args.live || apply);
const includeOpenBranches = args["open-branches"] !== false && args["open-branches"] !== "false";
const reportPath = path.resolve(String(args.report ?? path.join(repoRoot(), "results", "clownfish-label-backfill.json")));
const inputs = args._.length > 0 ? args._ : [
  path.join(repoRoot(), "results", "runs"),
  path.join(repoRoot(), "jobs", "openclaw", "closed"),
];

if (labelName !== DEFAULT_LABEL) {
  throw new Error(`refusing to use label ${labelName}; ProjectClownfish label is exactly "${DEFAULT_LABEL}"`);
}
if (apply && process.env.CLOWNFISH_ALLOW_EXECUTE !== "1") {
  throw new Error("refusing to label targets: CLOWNFISH_ALLOW_EXECUTE must be 1");
}

const targets = new Map();
const sourceFiles = [];

for (const input of inputs) {
  collectTargetsFromInput(path.resolve(input));
}
if (includeOpenBranches && live) {
  collectOpenClownfishPullRequests();
}

const labelExists = live ? githubLabelExists() : null;
if (apply && !labelExists) {
  createGithubLabel();
}

const rows = [];
for (const target of [...targets.values()].sort(sortTarget)) {
  rows.push(labelTarget(target));
}

const summary = {
  status: apply ? "applied" : "dry_run",
  label: labelName,
  live,
  apply,
  project_repo: currentProjectRepo(),
  generated_at: new Date().toISOString(),
  source_files: sourceFiles.sort(),
  totals: {
    targets: rows.length,
    planned: rows.filter((row) => row.status === "planned").length,
    labeled: rows.filter((row) => row.status === "labeled").length,
    already_labeled: rows.filter((row) => row.status === "already_labeled").length,
    missing: rows.filter((row) => row.status === "missing").length,
    failed: rows.filter((row) => row.status === "failed").length,
    skipped: rows.filter((row) => row.status === "skipped").length,
  },
  targets: rows,
};

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, `${JSON.stringify(summary, null, 2)}\n`);
writeMarkdownReport(summary, reportPath.replace(/\.json$/i, ".md"));
console.log(JSON.stringify(summary, null, 2));

function collectTargetsFromInput(inputPath) {
  if (!fs.existsSync(inputPath)) return;
  const stat = fs.statSync(inputPath);
  if (stat.isFile()) {
    collectTargetsFromFile(inputPath);
    return;
  }

  const normalized = path.relative(repoRoot(), inputPath);
  if (normalized === path.join("results", "runs")) {
    for (const name of fs.readdirSync(inputPath)) {
      if (name.endsWith(".json")) collectPublishedRun(path.join(inputPath, name));
    }
    return;
  }
  if (normalized === path.join("jobs", "openclaw", "closed") || normalized === path.join("closed", "openclaw")) {
    for (const name of fs.readdirSync(inputPath)) {
      if (name.endsWith(".md")) collectClosedRecord(path.join(inputPath, name));
    }
    return;
  }

  for (const entry of fs.readdirSync(inputPath, { recursive: true })) {
    const filePath = path.join(inputPath, String(entry));
    if (!fs.statSync(filePath).isFile()) continue;
    if (path.basename(filePath) === "result.json") collectRawRun(filePath);
    if (filePath.includes(`${path.sep}results${path.sep}runs${path.sep}`) && filePath.endsWith(".json")) {
      collectPublishedRun(filePath);
    }
    if (isClosedRecordPath(filePath) && filePath.endsWith(".md")) {
      collectClosedRecord(filePath);
    }
  }
}

function collectTargetsFromFile(filePath) {
  if (path.basename(filePath) === "result.json") {
    collectRawRun(filePath);
  } else if (filePath.endsWith(".json")) {
    collectPublishedRun(filePath);
  } else if (filePath.endsWith(".md") && isClosedRecordPath(filePath)) {
    collectClosedRecord(filePath);
  }
}

function isClosedRecordPath(filePath) {
  const relative = path.relative(repoRoot(), filePath).split(path.sep).join("/");
  return (
    relative.startsWith("jobs/openclaw/closed/") ||
    relative.startsWith("closed/openclaw/")
  );
}

function collectPublishedRun(filePath) {
  const record = readJson(filePath);
  if (!record || typeof record !== "object" || !record.repo || !record.cluster_id) return;
  noteSource(filePath);
  collectApplyActions(record.repo, record.cluster_id, record.run_id, record.run_url, record.apply_actions ?? []);
  collectFixActions(record.repo, record.cluster_id, record.run_id, record.run_url, record.fix_actions ?? []);
}

function collectRawRun(resultPath) {
  const runDir = path.dirname(resultPath);
  const result = readJson(resultPath);
  if (!result || typeof result !== "object" || !result.repo || !result.cluster_id) return;
  noteSource(resultPath);
  const clusterPlan = readSiblingJson(runDir, "cluster-plan.json");
  const runId = clusterPlan?.run_id ?? null;
  collectApplyActions(result.repo, result.cluster_id, runId, null, readSiblingJson(runDir, "apply-report.json")?.actions ?? []);
  collectApplyActions(
    result.repo,
    result.cluster_id,
    runId,
    null,
    (readSiblingJson(runDir, "post-flight-report.json")?.actions ?? []).map(postFlightToApplyAction),
  );
  collectFixActions(result.repo, result.cluster_id, runId, null, readSiblingJson(runDir, "fix-execution-report.json")?.actions ?? []);
}

function collectClosedRecord(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return;
  const record = parseSimpleYaml(match[1]);
  const repo = String(record.repo ?? "");
  const clusterId = String(record.cluster_id ?? "");
  if (!repo || !clusterId) return;
  noteSource(filePath);
  addTarget(record.target, repo, {
    cluster_id: clusterId,
    run_id: record.run_id ?? null,
    run_url: null,
    reason: `closed_record:${record.action ?? "unknown"}`,
    source: relative(filePath),
  });
}

function collectApplyActions(repo, clusterId, runId, runUrl, actions) {
  for (const action of actions ?? []) {
    const actionName = String(action.action ?? "");
    if (!MUTATION_ACTIONS.has(actionName)) continue;
    if (!APPLY_STATUSES.has(String(action.status ?? ""))) continue;
    addTarget(action.target ?? action.pr ?? action.url, repo, {
      cluster_id: clusterId,
      run_id: runId,
      run_url: runUrl,
      reason: `${actionName}:${action.status}`,
      source: "apply_action",
    });
  }
}

function collectFixActions(repo, clusterId, runId, runUrl, actions) {
  for (const action of actions ?? []) {
    const status = String(action.status ?? "");
    const ref = action.pr ?? action.pr_url ?? action.url ?? null;
    if (!ref || !FIX_PR_STATUSES.has(status)) continue;
    addTarget(ref, repo, {
      cluster_id: clusterId,
      run_id: runId,
      run_url: runUrl,
      reason: `${action.action ?? "fix_pr"}:${status}`,
      source: "fix_action",
    });
  }
}

function collectOpenClownfishPullRequests() {
  const repo = process.env.CLOWNFISH_TARGET_REPO ?? "openclaw/openclaw";
  const pulls = ghJson([
    "pr",
    "list",
    "--repo",
    repo,
    "--state",
    "open",
    "--limit",
    "1000",
    "--json",
    "number,title,headRefName,url,updatedAt",
  ]);
  for (const pull of pulls ?? []) {
    if (!String(pull.headRefName ?? "").startsWith("clownfish/")) continue;
    addTarget(pull.url ?? `https://github.com/${repo}/pull/${pull.number}`, repo, {
      cluster_id: String(pull.headRefName).replace(/^clownfish\//, ""),
      run_id: null,
      run_url: null,
      reason: "open_clownfish_branch",
      source: "github_open_prs",
    });
  }
}

function addTarget(value, defaultRepo, source) {
  const parsed = parseGithubRef(value, defaultRepo);
  if (!parsed) return;
  const key = `${parsed.repo}#${parsed.number}`;
  const existing = targets.get(key) ?? {
    repo: parsed.repo,
    number: parsed.number,
    ref: `#${parsed.number}`,
    url: `https://github.com/${parsed.repo}/issues/${parsed.number}`,
    sources: [],
  };
  existing.sources.push(source);
  targets.set(key, existing);
}

function labelTarget(target) {
  const base = {
    repo: target.repo,
    target: target.ref,
    url: target.url,
    sources: target.sources,
  };
  if (!live) return { ...base, status: "planned", reason: "live verification disabled" };

  let item;
  try {
    item = fetchIssue(target.repo, target.number);
  } catch (error) {
    return { ...base, status: "failed", reason: ghErrorMessage(error) };
  }
  if (!item?.number) return { ...base, status: "missing", reason: "target not found" };

  const labels = (item.labels ?? []).map((label) => label.name);
  const kind = item.pull_request ? "pull_request" : "issue";
  const verified = {
    ...base,
    kind,
    title: item.title ?? null,
    state: item.state ?? null,
    labels,
    url: item.html_url ?? target.url,
  };
  if (labels.includes(labelName)) {
    return { ...verified, status: "already_labeled", reason: "label already present" };
  }
  if (!apply) {
    return { ...verified, status: "planned", reason: `would add ${labelName}` };
  }

  try {
    execFileSync("gh", ["issue", "edit", String(target.number), "--repo", target.repo, "--add-label", labelName], {
      cwd: repoRoot(),
      encoding: "utf8",
      env: process.env,
      stdio: ["ignore", "pipe", "pipe"],
      maxBuffer: 8 * 1024 * 1024,
    });
    return { ...verified, status: "labeled", reason: `added ${labelName}` };
  } catch (error) {
    return { ...verified, status: "failed", reason: ghErrorMessage(error) };
  }
}

function postFlightToApplyAction(action) {
  if (action?.action !== "finalize_fix_pr") return action;
  return {
    target: action.pr ?? action.target,
    action: "merge_canonical",
    status: action.status,
    classification: "fix_pr",
    reason: action.reason,
  };
}

function parseGithubRef(value, defaultRepo) {
  const text = String(value ?? "").trim();
  const urlMatch = text.match(/^https:\/\/github\.com\/([^/]+\/[^/]+)\/(?:issues|pull)\/(\d+)(?:[/?#].*)?$/i);
  if (urlMatch) return { repo: urlMatch[1], number: Number(urlMatch[2]) };
  const refMatch = text.match(/^#?(\d+)$/);
  if (refMatch && defaultRepo) return { repo: defaultRepo, number: Number(refMatch[1]) };
  return null;
}

function githubLabelExists() {
  const repo = process.env.CLOWNFISH_TARGET_REPO ?? "openclaw/openclaw";
  const labels = ghJson(["label", "list", "--repo", repo, "--limit", "1000", "--json", "name"]);
  return (labels ?? []).some((label) => label.name === labelName);
}

function createGithubLabel() {
  const repo = process.env.CLOWNFISH_TARGET_REPO ?? "openclaw/openclaw";
  execFileSync(
    "gh",
    ["label", "create", labelName, "--repo", repo, "--color", "0E8A16", "--description", "Tracked by Clownfish automation"],
    { cwd: repoRoot(), encoding: "utf8", env: process.env, stdio: ["ignore", "pipe", "pipe"] },
  );
}

function fetchIssue(repo, number) {
  return ghJson(["api", `repos/${repo}/issues/${number}`]);
}

function readSiblingJson(runDir, filename) {
  const direct = path.join(runDir, filename);
  if (fs.existsSync(direct)) return readJson(direct);
  for (const entry of fs.readdirSync(runDir, { recursive: true })) {
    const candidate = path.join(runDir, String(entry));
    if (path.basename(candidate) === filename && fs.statSync(candidate).isFile()) return readJson(candidate);
  }
  return null;
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

function ghJson(ghArgs) {
  const text = execFileSync("gh", ghArgs, {
    cwd: repoRoot(),
    encoding: "utf8",
    env: process.env,
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 64 * 1024 * 1024,
  });
  return JSON.parse(text || "null");
}

function ghErrorMessage(error) {
  const stderr = String(error?.stderr ?? "").trim();
  return stderr || error?.message || String(error);
}

function noteSource(filePath) {
  const rel = relative(filePath);
  if (!sourceFiles.includes(rel)) sourceFiles.push(rel);
}

function relative(filePath) {
  return path.relative(repoRoot(), filePath);
}

function sortTarget(left, right) {
  return left.repo.localeCompare(right.repo) || left.number - right.number;
}

function writeMarkdownReport(summary, filePath) {
  const rows = summary.targets
    .slice(0, 200)
    .map((target) => `| ${target.target} | ${target.kind ?? ""} | ${target.state ?? ""} | ${target.status} | ${target.reason} | ${target.url} |`)
    .join("\n");
  const body = `# Clownfish Label Backfill

Label: \`${summary.label}\`

Mode: ${summary.status}

| Metric | Count |
| --- | ---: |
| Targets | ${summary.totals.targets} |
| Planned | ${summary.totals.planned} |
| Labeled | ${summary.totals.labeled} |
| Already labeled | ${summary.totals.already_labeled} |
| Missing | ${summary.totals.missing} |
| Failed | ${summary.totals.failed} |

| Target | Type | State | Status | Reason | URL |
| --- | --- | --- | --- | --- | --- |
${rows || "| _None_ |  |  |  |  |  |"}
`;
  fs.writeFileSync(filePath, body, "utf8");
}
