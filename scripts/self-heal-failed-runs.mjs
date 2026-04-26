#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import { parseArgs, parseJob, repoRoot, validateJob } from "./lib.mjs";

const DEFAULT_REPO = "openclaw/projectclownfish";
const DEFAULT_WORKFLOW = "cluster-worker.yml";
const DEFAULT_RUNNER = process.env.CLOWNFISH_WORKER_RUNNER ?? "blacksmith-4vcpu-ubuntu-2404";
const DEFAULT_EXECUTION_RUNNER = process.env.CLOWNFISH_EXECUTION_RUNNER ?? "blacksmith-16vcpu-ubuntu-2404";
const QUEUED_STATUSES = new Set(["queued", "requested", "waiting", "pending"]);

const args = parseArgs(process.argv.slice(2));
const repo = String(args.repo ?? DEFAULT_REPO);
const workflow = String(args.workflow ?? DEFAULT_WORKFLOW);
const runner = String(args.runner ?? DEFAULT_RUNNER);
const executionRunner = String(args["execution-runner"] ?? args.execution_runner ?? DEFAULT_EXECUTION_RUNNER);
const model = String(args.model ?? process.env.CLOWNFISH_MODEL ?? "gpt-5.5");
const maxJobs = Number(args["max-jobs"] ?? args.limit ?? 5);
const execute = Boolean(args.execute);
const openExecuteWindow = Boolean(args["open-execute-window"] || args.live);
const allowRepeat = Boolean(args["allow-repeat"]);
const requestedMode = typeof args.mode === "string" ? args.mode : null;

if (!Number.isInteger(maxJobs) || maxJobs < 1) {
  throw new Error("--max-jobs must be a positive integer");
}

const candidates = selectCandidates().slice(0, maxJobs);
const summary = {
  status: execute ? "dispatching" : "dry_run",
  repo,
  workflow,
  runner,
  execution_runner: executionRunner,
  model,
  max_jobs: maxJobs,
  candidates: candidates.map((candidate) => summarizeCandidate(candidate)),
};

if (candidates.length === 0) {
  summary.status = "no_candidates";
  console.log(JSON.stringify(summary, null, 2));
  process.exit(0);
}

if (!execute) {
  console.log(JSON.stringify(summary, null, 2));
  process.exit(0);
}

let executeWindowOpened = false;
const dispatchStartedAt = new Date(Date.now() - 5000).toISOString();
const headSha = currentHeadSha();
const ledger = readSelfHealLedger();
const batchId = `self-heal-${new Date().toISOString().replace(/[:.]/g, "-")}`;
const attempts = candidates.map((candidate) => ({
  batch_id: batchId,
  source_run_id: candidate.run_id,
  cluster_id: candidate.cluster_id,
  source_job: candidate.source_job,
  mode: candidate.mode,
  runner,
  execution_runner: executionRunner,
  model,
  workflow,
  repo,
  dispatched_at: new Date().toISOString(),
  dispatched_run_ids: [],
  status: "pending",
}));

try {
  if (openExecuteWindow) {
    setExecuteGate("1");
    setFixGate("1");
    executeWindowOpened = true;
  } else {
    assertExecuteGateOpenIfNeeded(candidates);
  }

  for (let i = 0; i < candidates.length; i += 1) {
    dispatchCandidate(candidates[i]);
    attempts[i].status = "dispatched";
  }

  const observedRuns = openExecuteWindow
    ? waitForStartedRuns({
        expectedCount: candidates.length,
        headSha,
        since: dispatchStartedAt,
      })
    : [];
  const observedRunIds = observedRuns.map((run) => String(run.databaseId));
  for (const attempt of attempts) {
    attempt.dispatched_run_ids = observedRunIds;
    attempt.observed_runs = observedRuns.map((run) => ({
      run_id: String(run.databaseId),
      status: run.status,
      conclusion: run.conclusion ?? null,
      created_at: run.createdAt,
      url: run.url,
    }));
  }

  appendAttempts(ledger, attempts);
  writeSelfHealLedger(ledger);

  summary.status = "dispatched";
  summary.batch_id = batchId;
  summary.observed_runs = attempts[0]?.observed_runs ?? [];
  console.log(JSON.stringify(summary, null, 2));
} finally {
  if (executeWindowOpened) {
    setExecuteGate("0");
    setFixGate("0");
  }
}

function selectCandidates() {
  const records = readRunRecords();
  const attempts = readSelfHealLedger().attempts ?? [];
  const attemptedJobs = new Set(attempts.map((attempt) => attempt.source_job).filter(Boolean));
  const latestByJob = new Map();

  for (const record of records) {
    const sourceJob = record.source_job;
    if (!sourceJob) continue;
    const current = latestByJob.get(sourceJob);
    if (!current || runSortKey(record) > runSortKey(current)) {
      latestByJob.set(sourceJob, record);
    }
  }

  return [...latestByJob.values()]
    .filter((record) => record.workflow_conclusion === "failure")
    .filter((record) => allowRepeat || !attemptedJobs.has(record.source_job))
    .map((record) => {
      const job = parseJob(record.source_job);
      const errors = validateJob(job);
      if (errors.length > 0) {
        throw new Error(`invalid job ${record.source_job}: ${errors.join("; ")}`);
      }
      return {
        ...record,
        mode: requestedMode ?? record.mode ?? job.frontmatter.mode,
      };
    })
    .sort((left, right) => runSortKey(right) - runSortKey(left));
}

function dispatchCandidate(candidate) {
  const result = spawnSync(
    "gh",
    [
      "workflow",
      "run",
      workflow,
      "--repo",
      repo,
      "-f",
      `job=${candidate.source_job}`,
      "-f",
      `mode=${candidate.mode}`,
      "-f",
      `runner=${runner}`,
      "-f",
      `execution_runner=${executionRunner}`,
      "-f",
      `model=${model}`,
    ],
    { cwd: repoRoot(), encoding: "utf8", stdio: "pipe" },
  );
  if (result.status !== 0) {
    throw new Error(`failed to dispatch ${candidate.source_job}: ${result.stderr || result.stdout}`);
  }
  console.log(`dispatched ${candidate.source_job} from failed run ${candidate.run_id}`);
}

function waitForStartedRuns({ expectedCount, headSha, since }) {
  const deadline = Date.now() + 10 * 60 * 1000;
  let latest = [];
  while (Date.now() < deadline) {
    latest = listClusterRuns()
      .filter((run) => run.headSha === headSha)
      .filter((run) => Date.parse(run.createdAt) >= Date.parse(since))
      .sort((left, right) => Date.parse(left.createdAt) - Date.parse(right.createdAt));
    if (latest.length >= expectedCount && latest.every((run) => !QUEUED_STATUSES.has(run.status))) {
      return latest;
    }
    sleepMs(10_000);
  }
  return latest;
}

function assertExecuteGateOpenIfNeeded(candidates) {
  if (!candidates.some((candidate) => ["execute", "autonomous"].includes(candidate.mode))) return;
  const current = readExecuteGate();
  if (current !== "1") {
    throw new Error(
      "refusing write-mode self-heal: CLOWNFISH_ALLOW_EXECUTE is not 1; rerun with --open-execute-window or open the gate manually",
    );
  }
  const fixCurrent = readFixGate();
  if (fixCurrent !== "1") {
    throw new Error(
      "refusing write-mode self-heal: CLOWNFISH_ALLOW_FIX_PR is not 1; rerun with --open-execute-window or open both gates manually",
    );
  }
}

function readRunRecords() {
  const runsDir = path.join(repoRoot(), "results", "runs");
  if (!fs.existsSync(runsDir)) return [];
  return fs
    .readdirSync(runsDir)
    .filter((name) => name.endsWith(".json"))
    .map((name) => JSON.parse(fs.readFileSync(path.join(runsDir, name), "utf8")));
}

function readSelfHealLedger() {
  const file = selfHealLedgerPath();
  if (!fs.existsSync(file)) {
    return { updated_at: null, attempts: [] };
  }
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function appendAttempts(ledger, attempts) {
  ledger.updated_at = new Date().toISOString();
  ledger.attempts = [...(ledger.attempts ?? []), ...attempts];
}

function writeSelfHealLedger(ledger) {
  const file = selfHealLedgerPath();
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(ledger, null, 2)}\n`, "utf8");
}

function selfHealLedgerPath() {
  return path.join(repoRoot(), "results", "self-heal.json");
}

function listClusterRuns() {
  return ghJson([
    "run",
    "list",
    "--repo",
    repo,
    "--workflow",
    workflow,
    "--limit",
    "50",
    "--json",
    "databaseId,headSha,status,conclusion,createdAt,url",
  ]);
}

function readExecuteGate() {
  const variables = ghJson(["variable", "list", "--repo", repo, "--json", "name,value"]);
  return variables.find((variable) => variable.name === "CLOWNFISH_ALLOW_EXECUTE")?.value ?? "";
}

function readFixGate() {
  const variables = ghJson(["variable", "list", "--repo", repo, "--json", "name,value"]);
  return variables.find((variable) => variable.name === "CLOWNFISH_ALLOW_FIX_PR")?.value ?? "";
}

function setExecuteGate(value) {
  execFileSync("gh", ["variable", "set", "CLOWNFISH_ALLOW_EXECUTE", "--repo", repo, "--body", value], {
    cwd: repoRoot(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  console.log(`CLOWNFISH_ALLOW_EXECUTE=${value}`);
}

function setFixGate(value) {
  execFileSync("gh", ["variable", "set", "CLOWNFISH_ALLOW_FIX_PR", "--repo", repo, "--body", value], {
    cwd: repoRoot(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  console.log(`CLOWNFISH_ALLOW_FIX_PR=${value}`);
}

function currentHeadSha() {
  return execFileSync("git", ["rev-parse", "origin/main"], {
    cwd: repoRoot(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

function ghJson(ghArgs) {
  const text = execFileSync("gh", ghArgs, {
    cwd: repoRoot(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 64 * 1024 * 1024,
  });
  return JSON.parse(text || "null");
}

function runSortKey(record) {
  const runId = Number(record.run_id);
  if (Number.isFinite(runId) && runId > 0) return runId;
  return Date.parse(record.published_at ?? "") || 0;
}

function summarizeCandidate(candidate) {
  return {
    source_run_id: candidate.run_id,
    cluster_id: candidate.cluster_id,
    source_job: candidate.source_job,
    mode: candidate.mode,
    result_status: candidate.result_status,
    run_url: candidate.run_url,
  };
}

function sleepMs(milliseconds) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}
