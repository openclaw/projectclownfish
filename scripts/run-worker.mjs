#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import {
  assertAllowedOwner,
  makeRunDir,
  parseArgs,
  parseJob,
  renderPrompt,
  repoRoot,
  validateJob,
} from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const jobPath = args._[0];
const mode = args.mode ?? "plan";
const dryRun = Boolean(args["dry-run"] || process.env.CLOWNFISH_DRY_RUN === "1");
const model = args.model ?? process.env.CLOWNFISH_MODEL ?? "gpt-5.4";
const codexTimeoutMs = Number(process.env.CLOWNFISH_CODEX_TIMEOUT_MS ?? 15 * 60 * 1000);
const codexReasoningEffort = String(process.env.CLOWNFISH_CODEX_REASONING_EFFORT ?? "medium");

if (!jobPath) {
  console.error("usage: node scripts/run-worker.mjs <job.md> --mode plan|execute|autonomous [--dry-run]");
  process.exit(2);
}
if (!["plan", "execute", "autonomous"].includes(mode)) {
  console.error("mode must be plan, execute, or autonomous");
  process.exit(2);
}

const job = parseJob(jobPath);
const errors = validateJob(job);
if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

assertAllowedOwner(job.frontmatter.repo, process.env.CLOWNFISH_ALLOWED_OWNER);

if ((mode === "execute" || mode === "autonomous") && !dryRun) {
  if (job.frontmatter.mode !== mode) {
    throw new Error(`refusing ${mode}: job frontmatter mode is not ${mode}`);
  }
  if (process.env.CLOWNFISH_ALLOW_EXECUTE !== "1") {
    throw new Error(`refusing ${mode}: CLOWNFISH_ALLOW_EXECUTE must be 1`);
  }
}

const runDir = makeRunDir(job, mode);
const promptPath = path.join(runDir, "prompt.md");
const resultPath = path.join(runDir, "result.json");
const transcriptPath = path.join(runDir, "codex.jsonl");
const promptContext = {};

if (!dryRun) {
  const plannerArgs = ["scripts/plan-cluster.mjs", jobPath, "--run-dir", runDir];
  const planner = spawnSync(process.execPath, plannerArgs, {
    cwd: repoRoot(),
    encoding: "utf8",
    env: process.env,
  });
  if (planner.status !== 0) {
    console.error(planner.stderr || planner.stdout);
    process.exit(planner.status ?? 1);
  }
  promptContext.clusterPlanPath = path.join(runDir, "cluster-plan.json");
  promptContext.fixArtifactPath = path.join(runDir, "fix-artifact.json");
} else if (mode === "autonomous") {
  const plannerArgs = ["scripts/plan-cluster.mjs", jobPath, "--run-dir", runDir, "--offline"];
  const planner = spawnSync(process.execPath, plannerArgs, {
    cwd: repoRoot(),
    encoding: "utf8",
    env: process.env,
  });
  if (planner.status !== 0) {
    console.error(planner.stderr || planner.stdout);
    process.exit(planner.status ?? 1);
  }
  promptContext.clusterPlanPath = path.join(runDir, "cluster-plan.json");
  promptContext.fixArtifactPath = path.join(runDir, "fix-artifact.json");
}

const prompt = renderPrompt(job, mode, promptContext);

fs.writeFileSync(promptPath, prompt);

if (dryRun) {
  const dryResult = {
    status: "planned",
    repo: job.frontmatter.repo,
    cluster_id: job.frontmatter.cluster_id,
    mode,
    summary: "dry run only; prompt rendered but Codex was not invoked",
    actions: [],
    prompt_path: path.relative(repoRoot(), promptPath),
  };
  fs.writeFileSync(resultPath, `${JSON.stringify(dryResult, null, 2)}\n`);
  console.log(JSON.stringify(dryResult, null, 2));
  process.exit(0);
}

const codexArgs = [
  "exec",
  "--cd",
  repoRoot(),
  "--model",
  model,
  "--sandbox",
  "read-only",
  "-c",
  'approval_policy="never"',
  "-c",
  `model_reasoning_effort=${JSON.stringify(codexReasoningEffort)}`,
  "--output-schema",
  path.join(repoRoot(), "schemas", "codex-result.schema.json"),
  "--output-last-message",
  resultPath,
  "--ephemeral",
  "--json",
];

codexArgs.push("-");

const child = spawnSync("codex", codexArgs, {
  cwd: repoRoot(),
  input: prompt,
  encoding: "utf8",
  env: codexEnv(),
  timeout: codexTimeoutMs,
});

fs.writeFileSync(transcriptPath, child.stdout ?? "");
if (child.stderr) fs.writeFileSync(path.join(runDir, "codex.stderr.log"), child.stderr);

if (child.error?.code === "ETIMEDOUT") {
  writeBlockedResult(`Codex worker timed out after ${codexTimeoutMs}ms`);
  console.error(`Codex worker timed out after ${codexTimeoutMs}ms`);
  process.exit(0);
}

if (child.status !== 0) {
  const detail = child.stderr || child.stdout || `Codex worker exited ${child.status}`;
  writeBlockedResult(detail.trim());
  console.error(detail);
  process.exit(0);
}

console.log(`result: ${path.relative(repoRoot(), resultPath)}`);

function codexEnv() {
  const env = { ...process.env };
  delete env.GH_TOKEN;
  delete env.GITHUB_TOKEN;
  delete env.CLOWNFISH_GH_TOKEN;
  delete env.CLOWNFISH_READ_GH_TOKEN;
  delete env.CLOWNFISH_CODEX_GH_TOKEN;
  return env;
}

function writeBlockedResult(summary) {
  if (fs.existsSync(resultPath)) return;
  const result = {
    status: "blocked",
    repo: job.frontmatter.repo,
    cluster_id: job.frontmatter.cluster_id,
    mode,
    summary,
    actions: [],
    needs_human: [summary],
    canonical: null,
    canonical_issue: null,
    canonical_pr: null,
    fix_artifact: null,
  };
  fs.writeFileSync(resultPath, `${JSON.stringify(result, null, 2)}\n`);
}
