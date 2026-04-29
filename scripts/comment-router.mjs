#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import {
  assertLiveWorkerCapacity,
  currentProjectRepo,
  parseArgs,
  parseJob,
  readMaxLiveWorkers,
  repoRoot,
  validateJob,
  waitForLiveWorkerCapacity,
} from "./lib.mjs";
import { parseCommand, parseTrustedAutomation, renderResponse, REPAIR_INTENTS } from "./comment-router-core.mjs";
import {
  appendLedger,
  assertRepo,
  commaSet,
  issueNumberFromUrl,
  positiveInteger,
  readLedger,
  stripAnsi,
  summarizeChecks,
  writeLedger,
  writePayload,
  writeReportFile,
} from "./comment-router-utils.mjs";

const DEFAULT_TARGET_REPO = "openclaw/openclaw";
const DEFAULT_HEAD_PREFIX = "clownfish/";
const DEFAULT_LABEL = "clownfish";
const DEFAULT_ALLOWED_ASSOCIATIONS = ["OWNER", "MEMBER", "COLLABORATOR"];
const DEFAULT_TRUSTED_BOTS = ["clawsweeper[bot]", "openclaw-clawsweeper[bot]"];
const DEFAULT_CLOWNFISH_AUTHORS = ["openclaw-clownfish", "openclaw-clownfish[bot]"];

const args = parseArgs(process.argv.slice(2));
const targetRepo = String(args.repo ?? process.env.CLOWNFISH_TARGET_REPO ?? DEFAULT_TARGET_REPO);
const clownfishRepo = String(args["clownfish-repo"] ?? process.env.CLOWNFISH_REPO ?? currentProjectRepo());
const workflow = String(args.workflow ?? process.env.CLOWNFISH_COMMENT_WORKFLOW ?? "cluster-worker.yml");
const runner = String(args.runner ?? process.env.CLOWNFISH_WORKER_RUNNER ?? "blacksmith-4vcpu-ubuntu-2404");
const executionRunner = String(
  args["execution-runner"] ?? args.execution_runner ?? process.env.CLOWNFISH_EXECUTION_RUNNER ?? "blacksmith-16vcpu-ubuntu-2404",
);
const model = String(args.model ?? process.env.CLOWNFISH_MODEL ?? "gpt-5.5");
const headPrefix = String(args["head-prefix"] ?? process.env.CLOWNFISH_HEAD_PREFIX ?? DEFAULT_HEAD_PREFIX);
const label = String(args.label ?? process.env.CLOWNFISH_LABEL ?? DEFAULT_LABEL);
const execute = Boolean(args.execute);
const writeReport = Boolean(args["write-report"] || execute);
const waitForCapacity = Boolean(args["wait-for-capacity"]);
const maxLiveWorkers = readMaxLiveWorkers(args);
const maxComments = positiveInteger(args["max-comments"] ?? process.env.CLOWNFISH_COMMENT_MAX_COMMENTS ?? 100, "max-comments");
const maxAutoRepairsPerHead = positiveInteger(
  args["max-auto-repairs-per-head"] ?? process.env.CLOWNFISH_CLAWSWEEPER_MAX_REPAIRS_PER_HEAD ?? 1,
  "max-auto-repairs-per-head",
);
const lookbackMinutes = positiveInteger(
  args["lookback-minutes"] ?? process.env.CLOWNFISH_COMMENT_LOOKBACK_MINUTES ?? 180,
  "lookback-minutes",
);
const since = String(args.since ?? new Date(Date.now() - lookbackMinutes * 60 * 1000).toISOString());
const allowedAssociations = new Set(
  String(process.env.CLOWNFISH_COMMENT_ALLOWED_ASSOCIATIONS ?? DEFAULT_ALLOWED_ASSOCIATIONS.join(","))
    .split(",")
    .map((value) => value.trim().toUpperCase())
    .filter(Boolean),
);
const trustedBots = commaSet(args["trusted-bots"] ?? process.env.CLOWNFISH_TRUSTED_BOTS ?? DEFAULT_TRUSTED_BOTS.join(","));
const clownfishAuthors = commaSet(
  args["clownfish-authors"] ?? process.env.CLOWNFISH_AUTHOR_LOGINS ?? DEFAULT_CLOWNFISH_AUTHORS.join(","),
);

assertRepo(targetRepo, "repo");
assertRepo(clownfishRepo, "clownfish-repo");

const ledger = readLedger(ledgerPath());
const processedCommentIds = new Set((ledger.commands ?? []).map((entry) => String(entry.comment_id)));
const plannedAutoRepairHeads = new Set();
const comments = listRecentComments().slice(0, maxComments);
const commands = [];

for (const comment of comments) {
  const parsed = parseCommand(comment.body) ?? parseTrustedAutomation(comment, { trustedAuthors: trustedBots });
  if (!parsed) continue;
  const issueNumber = issueNumberFromUrl(comment.issue_url);
  const command = {
    idempotency_key: idempotencyKey(parsed, issueNumber, comment.id),
    comment_id: String(comment.id),
    comment_url: comment.html_url,
    repo: targetRepo,
    issue_number: issueNumber,
    author: comment.user?.login ?? null,
    author_association: String(comment.author_association ?? "").toUpperCase(),
    created_at: comment.created_at,
    updated_at: comment.updated_at,
    trigger: parsed.trigger,
    command: parsed.command,
    intent: parsed.intent,
    trusted_bot: Boolean(parsed.trusted_bot),
    trusted_bot_author: parsed.trusted_bot_author ?? null,
    automation_source: parsed.automation_source ?? null,
    repair_reason: parsed.repair_reason ?? null,
    status: "pending",
    actions: [],
  };
  commands.push(classifyCommand(command));
}

const actionable = commands.filter((command) => command.status === "ready");
const report = {
  status: execute ? "executed" : "dry_run",
  generated_at: new Date().toISOString(),
  repo: targetRepo,
  clownfish_repo: clownfishRepo,
  since,
  execute,
  max_comments: maxComments,
  scanned_comments: comments.length,
  commands_seen: commands.length,
  actionable: actionable.length,
  trusted_bots: [...trustedBots],
  max_auto_repairs_per_head: maxAutoRepairsPerHead,
  commands,
};

if (execute) {
  const dispatchCount = actionable.filter((command) => REPAIR_INTENTS.has(command.intent)).length;
  if (dispatchCount > 0) {
    report.live_worker_capacity_before_dispatch = waitForCapacity
      ? waitForLiveWorkerCapacity({ repo: clownfishRepo, workflow, requested: dispatchCount, maxLiveWorkers })
      : assertLiveWorkerCapacity({ repo: clownfishRepo, workflow, requested: dispatchCount, maxLiveWorkers });
  }
  for (const command of actionable) executeCommand(command);
  appendLedger(ledger, commands);
  writeLedger(ledgerPath(), ledger);
}

if (writeReport) writeReportFile(repoRoot(), report);
console.log(JSON.stringify(report, null, 2));

function classifyCommand(command) {
  if (command.trusted_bot) {
    if (!trustedBots.has(String(command.author ?? "").toLowerCase())) {
      return { ...command, status: "ignored", reason: "trusted automation author is not allowed" };
    }
  } else if (!allowedAssociations.has(command.author_association)) {
    return {
      ...command,
      status: "ignored",
      reason: `author association ${command.author_association || "unknown"} is not allowed`,
    };
  }
  if (!command.issue_number) {
    return { ...command, status: "ignored", reason: "could not resolve issue or PR number" };
  }
  if (processedCommentIds.has(command.comment_id)) {
    return { ...command, status: "skipped", reason: "comment already processed in ledger" };
  }
  if (hasExistingResponse(command.issue_number, command.comment_id)) {
    return { ...command, status: "skipped", reason: "matching Clownfish response comment already exists" };
  }

  const issue = fetchIssue(command.issue_number);
  const pull = issue.pull_request ? fetchPullRequestView(command.issue_number) : null;
  const target = pull ? classifyPullTarget(pull) : classifyIssueTarget(issue);
  const next = { ...command, target };

  if (["status", "explain", "help"].includes(command.intent)) {
    return { ...next, status: "ready", actions: [{ action: "comment", status: execute ? "pending" : "planned" }] };
  }
  if (command.intent === "stop") {
    return {
      ...next,
      status: "ready",
      actions: [
        { action: "label", label: "clownfish:human-review", status: execute ? "pending" : "planned" },
        { action: "comment", status: execute ? "pending" : "planned" },
      ],
    };
  }
  if (!REPAIR_INTENTS.has(command.intent)) {
    return { ...next, status: "ready", actions: [{ action: "comment", status: execute ? "pending" : "planned" }] };
  }
  if (String(issue.state ?? "").toLowerCase() !== "open") {
    return repairBlocked(next, "repair commands require an open issue or PR");
  }
  if (!pull) {
    return repairBlocked(next, "repair commands currently require an existing Clownfish PR");
  }
  if (!target.is_clownfish_pr) {
    return repairBlocked(next, "repair commands only run on Clownfish PRs");
  }
  if (!target.job_path) {
    return repairBlocked(next, "could not find the Clownfish job for this PR branch");
  }
  if (command.intent === "clawsweeper_auto_repair") {
    const alreadyPlanned = autoRepairAlreadyPlanned(next);
    if (alreadyPlanned) return { ...next, status: "skipped", reason: alreadyPlanned };
  }

  return {
    ...next,
    status: "ready",
    actions: [
      { action: "dispatch_repair", workflow, job_path: target.job_path, mode: target.mode, status: execute ? "pending" : "planned" },
      { action: "comment", status: execute ? "pending" : "planned" },
    ],
  };
}

function repairBlocked(command, reason) {
  if (command.trusted_bot) return { ...command, status: "skipped", reason };
  return {
    ...command,
    status: "ready",
    actions: [{ action: "comment", status: execute ? "pending" : "planned" }],
    reason,
  };
}

function autoRepairAlreadyPlanned(command) {
  const headKey = autoRepairHeadKey(command);
  if (!headKey) return null;

  if (plannedAutoRepairHeads.has(headKey)) {
    return "ClawSweeper auto repair already planned for this PR head in this scan";
  }

  const priorDispatches = (ledger.commands ?? []).filter(
    (entry) =>
      entry.repo === command.repo &&
      Number(entry.issue_number) === Number(command.issue_number) &&
      entry.intent === "clawsweeper_auto_repair" &&
      entry.status === "executed" &&
      entry.target?.head_sha === command.target?.head_sha,
  );
  if (priorDispatches.length >= maxAutoRepairsPerHead) {
    return `ClawSweeper auto repair already dispatched ${priorDispatches.length} time(s) for this PR head`;
  }

  plannedAutoRepairHeads.add(headKey);
  return null;
}

function autoRepairHeadKey(command) {
  const sha = command.target?.head_sha;
  if (!sha) return null;
  return `${command.repo}#${command.issue_number}:${sha}`;
}

function executeCommand(command) {
  let dispatched = null;
  if (REPAIR_INTENTS.has(command.intent) && command.target?.job_path && command.target?.is_clownfish_pr) {
    dispatched = dispatchRepair(command);
    command.actions = command.actions.map((action) =>
      action.action === "dispatch_repair" ? { ...action, status: "executed", dispatched_at: new Date().toISOString() } : action,
    );
  }
  if (command.intent === "stop" && command.issue_number) {
    ensureHumanReviewLabel(command.repo);
    ghBestEffort(["issue", "edit", String(command.issue_number), "--repo", command.repo, "--add-label", "clownfish:human-review"]);
    command.actions = command.actions.map((action) =>
      action.action === "label" ? { ...action, status: "executed", label: "clownfish:human-review" } : action,
    );
  }

  postComment(command, renderResponse(command, dispatched));
  command.actions = command.actions.map((action) =>
    action.action === "comment" ? { ...action, status: "executed", commented_at: new Date().toISOString() } : action,
  );
  command.status = "executed";
}

function dispatchRepair(command) {
  const result = spawnSync(
    "gh",
    [
      "workflow",
      "run",
      workflow,
      "--repo",
      clownfishRepo,
      "-f",
      `job=${command.target.job_path}`,
      "-f",
      `mode=${command.target.mode}`,
      "-f",
      `runner=${runner}`,
      "-f",
      `execution_runner=${executionRunner}`,
      "-f",
      `model=${model}`,
    ],
    { cwd: repoRoot(), encoding: "utf8", env: ghEnv(), stdio: "pipe" },
  );
  if (result.status !== 0) {
    throw new Error(`failed to dispatch ${command.target.job_path}: ${result.stderr || result.stdout}`);
  }
  return {
    workflow,
    clownfish_repo: clownfishRepo,
    job_path: command.target.job_path,
    mode: command.target.mode,
    runner,
    execution_runner: executionRunner,
    model,
  };
}

function classifyIssueTarget(issue) {
  return {
    kind: "issue",
    state: issue.state ?? null,
    title: issue.title ?? null,
    labels: (issue.labels ?? []).map((item) => item.name ?? item),
  };
}

function classifyPullTarget(pull) {
  const branch = String(pull.headRefName ?? "");
  const labels = (pull.labels ?? []).map((item) => item.name ?? item);
  const author = String(pull.author?.login ?? pull.author?.name ?? "").toLowerCase();
  const clusterId = branch.startsWith(headPrefix) ? branch.slice(headPrefix.length) : null;
  const jobPath = clusterId ? existingJobPath(clusterId) : null;
  return {
    kind: "pull_request",
    title: pull.title ?? null,
    branch,
    head_sha: pull.headRefOid ?? null,
    author,
    labels,
    is_clownfish_pr: branch.startsWith(headPrefix) || labels.includes(label) || clownfishAuthors.has(author),
    cluster_id: clusterId,
    job_path: jobPath,
    mode: jobPath ? dispatchMode(jobPath) : "autonomous",
    merge_state_status: pull.mergeStateStatus ?? null,
    review_decision: pull.reviewDecision ?? null,
    checks: summarizeChecks(pull.statusCheckRollup ?? []),
  };
}

function dispatchMode(jobPath) {
  const job = parseJob(jobPath);
  const errors = validateJob(job);
  if (errors.length > 0) throw new Error(`invalid job ${jobPath}: ${errors.join("; ")}`);
  return ["execute", "autonomous"].includes(String(job.frontmatter.mode ?? "")) ? job.frontmatter.mode : "autonomous";
}

function existingJobPath(clusterId) {
  for (const relative of [
    path.join("jobs", "openclaw", "inbox", `${clusterId}.md`),
    path.join("jobs", "openclaw", `${clusterId}.md`),
    path.join("jobs", "openclaw", "outbox", "finalized", `${clusterId}.md`),
    path.join("jobs", "openclaw", "outbox", "stuck", `${clusterId}.md`),
  ]) {
    if (fs.existsSync(path.join(repoRoot(), relative))) return relative;
  }
  return null;
}

function listRecentComments() {
  const list = ghPaged(`repos/${targetRepo}/issues/comments?since=${encodeURIComponent(since)}&per_page=100`);
  return list.sort((left, right) => Date.parse(right.created_at ?? "") - Date.parse(left.created_at ?? ""));
}

function fetchIssue(number) {
  return ghJson(["api", `repos/${targetRepo}/issues/${number}`]);
}

function fetchPullRequestView(number) {
  return ghJson([
    "pr",
    "view",
    String(number),
    "--repo",
    targetRepo,
    "--json",
    [
      "headRefName",
      "headRefOid",
      "author",
      "labels",
      "mergeStateStatus",
      "reviewDecision",
      "statusCheckRollup",
      "title",
    ].join(","),
  ]);
}

function hasExistingResponse(number, commentId) {
  const marker = `<!-- clownfish-command:${commentId}:`;
  return ghPaged(`repos/${targetRepo}/issues/${number}/comments?per_page=100`).some((comment) => String(comment.body ?? "").includes(marker));
}

function postComment(command, body) {
  const payloadPath = writePayload(repoRoot(), `comment-router-${command.comment_id}`, { body });
  ghText(["api", `repos/${command.repo}/issues/${command.issue_number}/comments`, "--method", "POST", "--input", payloadPath]);
}

function ensureHumanReviewLabel(repo) {
  ghBestEffort([
    "label",
    "create",
    "clownfish:human-review",
    "--repo",
    repo,
    "--color",
    "B60205",
    "--description",
    "Needs maintainer review before Clownfish can continue",
  ]);
}

function ledgerPath() {
  return path.join(repoRoot(), "results", "comment-router.json");
}

function idempotencyKey(parsed, issueNumber, commentId) {
  const prefix = parsed.trusted_bot ? "clawsweeper-repair" : "comment-router";
  return `${prefix}:${targetRepo}:${issueNumber}:${commentId}:${parsed.intent}`;
}

function ghJson(ghArgs) {
  return JSON.parse(ghText(ghArgs) || "null");
}

function ghPaged(apiPath) {
  const pages = ghJson(["api", apiPath, "--paginate", "--slurp"]);
  if (!Array.isArray(pages)) return [];
  return pages.flatMap((page) => (Array.isArray(page) ? page : []));
}

function ghText(ghArgs) {
  const text = execFileSync("gh", ghArgs, {
    cwd: repoRoot(),
    env: ghEnv(),
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    stdio: ["ignore", "pipe", "pipe"],
  });
  return stripAnsi(text).trim();
}

function ghBestEffort(ghArgs) {
  try {
    ghText(ghArgs);
  } catch {
    // Visibility labels are helpful but should not block command acknowledgement.
  }
}

function ghEnv() {
  const env = { ...process.env, NO_COLOR: "1", CLICOLOR: "0" };
  delete env.FORCE_COLOR;
  return env;
}
