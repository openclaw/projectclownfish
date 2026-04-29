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
import {
  AUTOCLOSE_INTENTS,
  MERGE_INTENTS,
  REPAIR_INTENTS,
  DEFAULT_ALLOWED_REPOSITORY_PERMISSIONS,
  autocloseReasonFromCommand,
  automergeGateBlockReason,
  automergeClusterId,
  automergeJobPath,
  buildAutomergeMergeArgs,
  isMaintainerCommandAllowed,
  parseCommand,
  parseTrustedAutomation,
  renderAutomergeJob,
  renderResponse,
} from "./comment-router-core.mjs";
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
const AUTOMERGE_LABEL = "clownfish:automerge";
const HUMAN_REVIEW_LABEL = "clownfish:human-review";
const DEFAULT_LABEL_COLOR = "F97316";
const DEFAULT_LABEL_DESCRIPTION = "Tracked by Clownfish automation";
const DEFAULT_ALLOWED_ASSOCIATIONS = ["OWNER", "MEMBER", "COLLABORATOR"];
const DEFAULT_TRUSTED_BOTS = ["clawsweeper[bot]", "openclaw-clawsweeper[bot]"];
const DEFAULT_CLOWNFISH_AUTHORS = ["openclaw-clownfish", "openclaw-clownfish[bot]"];

const args = parseArgs(process.argv.slice(2));
const targetRepo = String(args.repo ?? process.env.CLOWNFISH_TARGET_REPO ?? DEFAULT_TARGET_REPO);
const clownfishRepo = String(args["clownfish-repo"] ?? process.env.CLOWNFISH_REPO ?? currentProjectRepo());
const workflow = String(args.workflow ?? process.env.CLOWNFISH_COMMENT_WORKFLOW ?? "cluster-worker.yml");
const clawsweeperRepo = String(args["clawsweeper-repo"] ?? process.env.CLOWNFISH_CLAWSWEEPER_REPO ?? "openclaw/clawsweeper");
const clawsweeperWorkflow = String(args["clawsweeper-workflow"] ?? process.env.CLOWNFISH_CLAWSWEEPER_WORKFLOW ?? "sweep.yml");
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
const maxAutocloseTargets = positiveInteger(
  args["max-autoclose-targets"] ?? process.env.CLOWNFISH_AUTOCLOSE_MAX_TARGETS ?? 8,
  "max-autoclose-targets",
);
const maxAutoRepairsPerHead = positiveInteger(
  args["max-auto-repairs-per-head"] ?? process.env.CLOWNFISH_CLAWSWEEPER_MAX_REPAIRS_PER_HEAD ?? 1,
  "max-auto-repairs-per-head",
);
const maxAutoRepairsPerPr = positiveInteger(
  args["max-auto-repairs-per-pr"] ?? process.env.CLOWNFISH_CLAWSWEEPER_MAX_REPAIRS_PER_PR ?? 5,
  "max-auto-repairs-per-pr",
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
const allowedRepositoryPermissions = new Set(
  String(
    args["allowed-repository-permissions"] ??
      process.env.CLOWNFISH_COMMENT_ALLOWED_REPOSITORY_PERMISSIONS ??
      DEFAULT_ALLOWED_REPOSITORY_PERMISSIONS.join(","),
  )
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean),
);
const trustedBots = commaSet(args["trusted-bots"] ?? process.env.CLOWNFISH_TRUSTED_BOTS ?? DEFAULT_TRUSTED_BOTS.join(","));
const clownfishAuthors = commaSet(
  args["clownfish-authors"] ?? process.env.CLOWNFISH_AUTHOR_LOGINS ?? DEFAULT_CLOWNFISH_AUTHORS.join(","),
);

assertRepo(targetRepo, "repo");
assertRepo(clownfishRepo, "clownfish-repo");
assertRepo(clawsweeperRepo, "clawsweeper-repo");

const ledger = readLedger(ledgerPath());
const processedCommentVersions = new Set((ledger.commands ?? []).map(commentVersionKey).filter(Boolean));
const plannedAutoRepairHeads = new Set();
const collaboratorPermissionCache = new Map();
const comments = listRecentComments().slice(0, maxComments);
const commands = [];

for (const comment of comments) {
  const parsed = parseCommand(comment.body) ?? parseTrustedAutomation(comment, { trustedAuthors: trustedBots });
  if (!parsed) continue;
  const issueNumber = issueNumberFromUrl(comment.issue_url);
  const command = {
    idempotency_key: idempotencyKey(parsed, issueNumber, comment.id, comment.updated_at),
    comment_id: String(comment.id),
    comment_version_key: commentVersionKey({ comment_id: comment.id, comment_updated_at: comment.updated_at }),
    comment_url: comment.html_url,
    repo: targetRepo,
    issue_number: issueNumber,
    author: comment.user?.login ?? null,
    author_association: String(comment.author_association ?? "").toUpperCase(),
    comment_created_at: comment.created_at,
    comment_updated_at: comment.updated_at,
    trigger: parsed.trigger,
    command: parsed.command,
    intent: parsed.intent,
    autoclose_message: parsed.autoclose_message ?? null,
    trusted_bot: Boolean(parsed.trusted_bot),
    trusted_bot_author: parsed.trusted_bot_author ?? null,
    automation_source: parsed.automation_source ?? null,
    repair_reason: parsed.repair_reason ?? null,
    expected_head_sha: parsed.expected_head_sha ?? null,
    finding_id: parsed.finding_id ?? null,
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
  clawsweeper_repo: clawsweeperRepo,
  since,
  execute,
  max_comments: maxComments,
  max_autoclose_targets: maxAutocloseTargets,
  scanned_comments: comments.length,
  commands_seen: commands.length,
  actionable: actionable.length,
  trusted_bots: [...trustedBots],
  allowed_repository_permissions: [...allowedRepositoryPermissions],
  max_auto_repairs_per_head: maxAutoRepairsPerHead,
  max_auto_repairs_per_pr: maxAutoRepairsPerPr,
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
  } else {
    const authorization = resolveMaintainerCommandAuthorization(command);
    command.author_repository_permission = authorization.repositoryPermission;
    if (!authorization.allowed) {
      return {
        ...command,
        status: "ignored",
        reason: authorization.reason,
      };
    }
  }
  if (!command.issue_number) {
    return { ...command, status: "ignored", reason: "could not resolve issue or PR number" };
  }
  if (command.comment_version_key && processedCommentVersions.has(command.comment_version_key)) {
    return { ...command, status: "skipped", reason: "comment version already processed in ledger" };
  }

  const issue = fetchIssue(command.issue_number);
  const pull = issue.pull_request ? fetchPullRequestView(command.issue_number) : null;
  const target = pull ? classifyPullTarget(pull, command.issue_number) : classifyIssueTarget(issue);
  const next = { ...command, target };

  if (
    hasExistingResponse(
      command.issue_number,
      command.comment_version_key ?? command.comment_id,
      command.intent,
      target.head_sha,
    )
  ) {
    return { ...next, status: "skipped", reason: "matching Clownfish response comment already exists" };
  }

  if (["status", "explain", "help"].includes(command.intent)) {
    return { ...next, status: "ready", actions: [{ action: "comment", status: execute ? "pending" : "planned" }] };
  }
  if (AUTOCLOSE_INTENTS.has(command.intent)) {
    return classifyAutoclose(next, issue, pull);
  }
  if (command.intent === "automerge") {
    if (String(issue.state ?? "").toLowerCase() !== "open") {
      return automergeBlocked(next, "automerge requires an open PR");
    }
    if (!pull) {
      return automergeBlocked(next, "automerge requires a pull request");
    }
    const actions = [];
    if (!target.job_path) {
      actions.push({
        action: "ensure_automerge_job",
        job_path: target.automerge_job_path,
        status: execute ? "pending" : "planned",
      });
    }
    if (hasLabel(target, HUMAN_REVIEW_LABEL)) {
      actions.push({
        action: "remove_label",
        label: HUMAN_REVIEW_LABEL,
        status: execute ? "pending" : "planned",
      });
    }
    return {
      ...next,
      status: "ready",
      actions: [
        ...actions,
        { action: "label", label: AUTOMERGE_LABEL, status: execute ? "pending" : "planned" },
        { action: "dispatch_clawsweeper", workflow: clawsweeperWorkflow, status: execute ? "pending" : "planned" },
        { action: "comment", status: execute ? "pending" : "planned" },
      ],
    };
  }
  if (command.intent === "stop") {
    return {
      ...next,
      status: "ready",
      actions: [
        { action: "label", label, status: execute ? "pending" : "planned" },
        { action: "comment", status: execute ? "pending" : "planned" },
      ],
    };
  }
  if (!REPAIR_INTENTS.has(command.intent)) {
    if (MERGE_INTENTS.has(command.intent)) return classifyAutomergePass(next, issue, pull);
    if (command.intent === "clawsweeper_needs_human") return classifyNeedsHuman(next, issue, pull);
    return { ...next, status: "ready", actions: [{ action: "comment", status: execute ? "pending" : "planned" }] };
  }
  if (String(issue.state ?? "").toLowerCase() !== "open") {
    return repairBlocked(next, "repair commands require an open issue or PR");
  }
  if (!pull) {
    return repairBlocked(next, "repair commands require a pull request");
  }
  if (!canRepairPullTarget(target)) {
    return repairBlocked(next, "repair commands require a Clownfish PR or a PR opted into Clownfish automerge");
  }
  if (command.intent === "clawsweeper_auto_repair") {
    if (
      command.expected_head_sha &&
      command.expected_head_sha !== "unknown" &&
      target.head_sha &&
      command.expected_head_sha !== target.head_sha
    ) {
      return { ...next, status: "skipped", reason: "ClawSweeper repair marker targets a stale PR head SHA" };
    }
    const alreadyPlanned = autoRepairAlreadyPlanned(next);
    if (alreadyPlanned) return { ...next, status: "skipped", reason: alreadyPlanned };
  }
  const actions = [];
  const repairJobPath = target.job_path ?? target.automerge_job_path;
  if (!target.job_path) {
    actions.push({
      action: "ensure_automerge_job",
      job_path: repairJobPath,
      status: execute ? "pending" : "planned",
    });
  }
  if (!command.trusted_bot && hasLabel(target, HUMAN_REVIEW_LABEL)) {
    actions.push({
      action: "remove_label",
      label: HUMAN_REVIEW_LABEL,
      status: execute ? "pending" : "planned",
    });
  }

  return {
    ...next,
    status: "ready",
    actions: [
      ...actions,
      { action: "dispatch_repair", workflow, job_path: repairJobPath, mode: target.mode, status: execute ? "pending" : "planned" },
      { action: "comment", status: execute ? "pending" : "planned" },
    ],
  };
}

function classifyAutoclose(command, issue, pull) {
  const reason = autocloseReason(command);
  if (!reason) {
    return {
      ...command,
      status: "ready",
      reason: "autoclose requires a maintainer close reason",
      actions: [{ action: "comment", status: execute ? "pending" : "planned" }],
    };
  }
  if (String(issue.state ?? "").toLowerCase() !== "open") {
    return {
      ...command,
      autoclose_reason: reason,
      status: "ready",
      reason: "autoclose requires an open issue or PR",
      actions: [{ action: "comment", status: execute ? "pending" : "planned" }],
    };
  }
  const targets = discoverAutocloseTargets({ command, issue, pull });
  if (targets.length === 0) {
    return {
      ...command,
      autoclose_reason: reason,
      status: "ready",
      reason: "autoclose found no open same-repo targets",
      actions: [{ action: "comment", status: execute ? "pending" : "planned" }],
    };
  }
  return {
    ...command,
    autoclose_reason: reason,
    autoclose_targets: targets,
    status: "ready",
    actions: [
      {
        action: "autoclose",
        reason,
        targets: targets.map((target) => ({ ref: target.ref, kind: target.kind, title: target.title })),
        status: execute ? "pending" : "planned",
      },
      { action: "comment", status: execute ? "pending" : "planned" },
    ],
  };
}

function classifyAutomergePass(command, issue, pull) {
  if (String(issue.state ?? "").toLowerCase() !== "open") return { ...command, status: "skipped", reason: "PR is not open" };
  if (!pull) return { ...command, status: "skipped", reason: "ClawSweeper pass marker is not on a PR" };
  if (!hasLabel(command.target, AUTOMERGE_LABEL)) return { ...command, status: "skipped", reason: "PR is not opted into Clownfish automerge" };
  if (!command.expected_head_sha || command.expected_head_sha === "unknown") {
    return { ...command, status: "skipped", reason: "ClawSweeper pass marker must include the reviewed PR head SHA" };
  }
  if (
    command.expected_head_sha &&
    command.expected_head_sha !== "unknown" &&
    command.target?.head_sha &&
    command.expected_head_sha !== command.target.head_sha
  ) {
    return { ...command, status: "skipped", reason: "ClawSweeper pass marker targets a stale PR head SHA" };
  }
  return {
    ...command,
    status: "ready",
    actions: [
      { action: "merge", status: execute ? "pending" : "planned" },
      { action: "comment", status: execute ? "pending" : "planned" },
    ],
  };
}

function classifyNeedsHuman(command, issue, pull) {
  if (String(issue.state ?? "").toLowerCase() !== "open") return { ...command, status: "skipped", reason: "target is not open" };
  if (!pull) return { ...command, status: "skipped", reason: "needs-human marker is not on a PR" };
  if (!hasLabel(command.target, AUTOMERGE_LABEL)) return { ...command, status: "skipped", reason: "PR is not opted into Clownfish automerge" };
  return {
    ...command,
    status: "ready",
    actions: [
      { action: "label", label, status: execute ? "pending" : "planned" },
      { action: "comment", status: execute ? "pending" : "planned" },
    ],
  };
}

function automergeBlocked(command, reason) {
  return {
    ...command,
    status: "ready",
    actions: [{ action: "comment", status: execute ? "pending" : "planned" }],
    reason,
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

function canRepairPullTarget(target) {
  if (target?.kind !== "pull_request") return false;
  return Boolean(target.job_path || target.is_clownfish_pr || hasLabel(target, AUTOMERGE_LABEL));
}

function autoRepairAlreadyPlanned(command) {
  const headKey = autoRepairHeadKey(command);
  if (!headKey) return null;
  const resumeBoundary = latestAutomergeResumeAt(command);

  const priorPrDispatches = (ledger.commands ?? []).filter(
    (entry) =>
      entry.repo === command.repo &&
      Number(entry.issue_number) === Number(command.issue_number) &&
      entry.intent === "clawsweeper_auto_repair" &&
      entry.status === "executed" &&
      isAfterResumeBoundary(entry, resumeBoundary),
  );
  if (priorPrDispatches.length >= maxAutoRepairsPerPr) {
    return `ClawSweeper auto repair already dispatched ${priorPrDispatches.length} total time(s) for this PR`;
  }

  if (plannedAutoRepairHeads.has(headKey)) {
    return "ClawSweeper auto repair already planned for this PR head in this scan";
  }

  const priorDispatches = (ledger.commands ?? []).filter(
    (entry) =>
      entry.repo === command.repo &&
      Number(entry.issue_number) === Number(command.issue_number) &&
      entry.intent === "clawsweeper_auto_repair" &&
      entry.status === "executed" &&
      entry.target?.head_sha === command.target?.head_sha &&
      isAfterResumeBoundary(entry, resumeBoundary),
  );
  if (priorDispatches.length >= maxAutoRepairsPerHead) {
    return `ClawSweeper auto repair already dispatched ${priorDispatches.length} time(s) for this PR head`;
  }

  plannedAutoRepairHeads.add(headKey);
  return null;
}

function latestAutomergeResumeAt(command) {
  let latest = 0;
  for (const entry of ledger.commands ?? []) {
    if (
      entry.repo === command.repo &&
      Number(entry.issue_number) === Number(command.issue_number) &&
      entry.intent === "automerge" &&
      entry.status === "executed"
    ) {
      latest = Math.max(latest, Date.parse(entry.comment_updated_at ?? "") || 0);
    }
  }
  return latest;
}

function isAfterResumeBoundary(entry, boundary) {
  if (!boundary) return true;
  const updatedAt = Date.parse(entry.comment_updated_at ?? "") || 0;
  return updatedAt > boundary;
}

function autoRepairHeadKey(command) {
  const sha = command.target?.head_sha;
  if (!sha) return null;
  return `${command.repo}#${command.issue_number}:${sha}`;
}

function executeCommand(command) {
  let dispatched = null;
  if (!command.trusted_bot) reactToComment(command, "eyes");
  if (REPAIR_INTENTS.has(command.intent) && canRepairPullTarget(command.target)) {
    const job = ensureAutomergeJob(command);
    if (job.status_detail === "written") {
      command.actions = command.actions.map((action) => {
        if (action.action === "ensure_automerge_job") return { ...action, status: "executed", ...job };
        if (action.action === "dispatch_repair") {
          return {
            ...action,
            job_path: command.target.job_path,
            mode: command.target.mode,
            status: "waiting",
            reason: "adopted job must be committed before worker dispatch",
          };
        }
        return action;
      });
      command.status = "waiting";
      return;
    }
    dispatched = dispatchRepair(command);
    if (!command.trusted_bot && hasLabel(command.target, HUMAN_REVIEW_LABEL)) {
      ghBestEffort(["issue", "edit", String(command.issue_number), "--repo", command.repo, "--remove-label", HUMAN_REVIEW_LABEL]);
    }
    command.actions = command.actions.map((action) => {
      if (action.action === "ensure_automerge_job") return { ...action, status: "executed", ...job };
      if (action.action === "remove_label") return { ...action, status: "executed", label: HUMAN_REVIEW_LABEL };
      if (action.action === "dispatch_repair") {
        return {
          ...action,
          job_path: command.target.job_path,
          mode: command.target.mode,
          status: "executed",
          dispatched_at: new Date().toISOString(),
        };
      }
      return action;
    });
  }
  if (command.intent === "automerge" && command.issue_number) {
    const job = ensureAutomergeJob(command);
    ensureAutomergeLabel(command.repo);
    if (hasLabel(command.target, HUMAN_REVIEW_LABEL)) {
      ghBestEffort(["issue", "edit", String(command.issue_number), "--repo", command.repo, "--remove-label", HUMAN_REVIEW_LABEL]);
    }
    ghBestEffort(["issue", "edit", String(command.issue_number), "--repo", command.repo, "--add-label", AUTOMERGE_LABEL]);
    const clawsweeper = dispatchClawSweeperReview(command);
    dispatched = { ...(dispatched ?? {}), clawsweeper };
    command.actions = command.actions.map((action) => {
      if (action.action === "label") return { ...action, status: "executed", label: AUTOMERGE_LABEL };
      if (action.action === "remove_label") return { ...action, status: "executed", label: HUMAN_REVIEW_LABEL };
      if (action.action === "ensure_automerge_job") return { ...action, status: "executed", ...job };
      if (action.action === "dispatch_clawsweeper") {
        return { ...action, status: "executed", dispatched_at: new Date().toISOString(), ...clawsweeper };
      }
      return action;
    });
  }
  if (AUTOCLOSE_INTENTS.has(command.intent) && command.issue_number && command.autoclose_targets?.length > 0) {
    const autoclose = executeAutoclose(command);
    dispatched = { ...(dispatched ?? {}), autoclose };
    command.actions = command.actions.map((action) =>
      action.action === "autoclose" ? { ...action, ...autoclose, completed_at: new Date().toISOString() } : action,
    );
  }
  if (MERGE_INTENTS.has(command.intent) && command.issue_number) {
    const merge = executeAutomerge(command);
    dispatched = { ...(dispatched ?? {}), merge };
    command.actions = command.actions.map((action) =>
      action.action === "merge" ? { ...action, ...merge, completed_at: new Date().toISOString() } : action,
    );
    if (merge.status === "waiting") {
      command.status = "waiting";
      return;
    }
  }
  if (command.intent === "clawsweeper_needs_human" && command.issue_number) {
    ensureDefaultLabel(command.repo);
    ghBestEffort(["issue", "edit", String(command.issue_number), "--repo", command.repo, "--add-label", label]);
    command.actions = command.actions.map((action) =>
      action.action === "label" ? { ...action, status: "executed", label } : action,
    );
  }
  if (command.intent === "stop" && command.issue_number) {
    ensureDefaultLabel(command.repo);
    ghBestEffort(["issue", "edit", String(command.issue_number), "--repo", command.repo, "--add-label", label]);
    command.actions = command.actions.map((action) =>
      action.action === "label" ? { ...action, status: "executed", label } : action,
    );
  }

  postComment(command, renderResponse(command, dispatched));
  if (!command.trusted_bot) reactToComment(command, "+1");
  command.actions = command.actions.map((action) =>
    action.action === "comment" ? { ...action, status: "executed", commented_at: new Date().toISOString() } : action,
  );
  command.status = "executed";
}

function ensureAutomergeJob(command) {
  if (command.target?.job_path) {
    return {
      job_path: command.target.job_path,
      mode: command.target.mode ?? dispatchMode(command.target.job_path),
      status_detail: "existing",
    };
  }
  if (command.target?.kind !== "pull_request" || !command.issue_number) {
    throw new Error("automerge repair job requires a pull request target");
  }

  const relative = command.target.automerge_job_path ?? automergeJobPath(command.repo, command.issue_number);
  const absolute = path.join(repoRoot(), relative);
  let statusDetail = "existing";
  if (!fs.existsSync(absolute)) {
    fs.mkdirSync(path.dirname(absolute), { recursive: true });
    fs.writeFileSync(
      absolute,
      renderAutomergeJob({
        repo: command.repo,
        issueNumber: command.issue_number,
        title: command.target.title,
      }),
    );
    statusDetail = "written";
  }

  const job = parseJob(relative);
  const errors = validateJob(job);
  if (errors.length > 0) throw new Error(`invalid automerge job ${relative}: ${errors.join("; ")}`);
  command.target = {
    ...command.target,
    cluster_id: job.frontmatter.cluster_id,
    job_path: job.relativePath,
    mode: dispatchMode(job.relativePath),
  };
  return {
    job_path: command.target.job_path,
    mode: command.target.mode,
    cluster_id: command.target.cluster_id,
    status_detail: statusDetail,
  };
}

function dispatchClawSweeperReview(command) {
  const payload = JSON.stringify({
    event_type: "clawsweeper_item",
    client_payload: {
      target_repo: command.repo,
      item_number: String(command.issue_number),
      item_kind: "pull_request",
    },
  });
  const result = spawnSync(
    "gh",
    [
      "api",
      `repos/${clawsweeperRepo}/dispatches`,
      "--method",
      "POST",
      "--input",
      "-",
    ],
    {
      cwd: repoRoot(),
      encoding: "utf8",
      env: ghEnv(
        process.env.CLOWNFISH_CLAWSWEEPER_GH_TOKEN
          ? { GH_TOKEN: process.env.CLOWNFISH_CLAWSWEEPER_GH_TOKEN }
          : {},
      ),
      input: payload,
      stdio: "pipe",
    },
  );
  if (result.status !== 0) {
    const fallback = spawnSync(
      "gh",
      [
        "workflow",
        "run",
        clawsweeperWorkflow,
        "--repo",
        clawsweeperRepo,
        "-f",
        `target_repo=${command.repo}`,
        "-f",
        `item_number=${command.issue_number}`,
        "-f",
        `item_numbers=${command.issue_number}`,
        "-f",
        "batch_size=1",
        "-f",
        "shard_count=1",
      ],
      {
        cwd: repoRoot(),
        encoding: "utf8",
        env: ghEnv(
          process.env.CLOWNFISH_CLAWSWEEPER_GH_TOKEN
            ? { GH_TOKEN: process.env.CLOWNFISH_CLAWSWEEPER_GH_TOKEN }
            : {},
        ),
        stdio: "pipe",
      },
    );
    if (fallback.status !== 0) {
      throw new Error(
        `failed to dispatch ClawSweeper review for #${command.issue_number}: repository_dispatch=${
          result.stderr || result.stdout
        }; workflow_dispatch=${fallback.stderr || fallback.stdout}`,
      );
    }
    return {
      workflow: clawsweeperWorkflow,
      event: "workflow_dispatch",
      repo: clawsweeperRepo,
      item_number: command.issue_number,
      fallback_reason: stripAnsi(result.stderr || result.stdout).trim(),
    };
  }
  return {
    workflow: clawsweeperWorkflow,
    event: "repository_dispatch",
    repo: clawsweeperRepo,
    item_number: command.issue_number,
  };
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

function executeAutoclose(command) {
  const reason = autocloseReason(command);
  const currentNumber = Number(command.issue_number);
  const targets = [...(command.autoclose_targets ?? [])].sort((left, right) => {
    if (Number(left.number) === currentNumber) return 1;
    if (Number(right.number) === currentNumber) return -1;
    return Number(left.number) - Number(right.number);
  });
  const results = [];
  for (const target of targets) {
    let liveTarget = target;
    try {
      liveTarget = issueTargetFromIssue(fetchIssue(target.number));
      if (String(liveTarget.state ?? "").toLowerCase() !== "open") {
        results.push({ ...liveTarget, status: "skipped", reason: "already closed" });
        continue;
      }
      if (Number(liveTarget.number) !== currentNumber) {
        postIssueComment(command.repo, liveTarget.number, renderAutocloseLinkedComment(command, liveTarget, reason));
      }
      closeIssueOrPullRequest(command.repo, liveTarget.number, liveTarget.kind);
      results.push({ ...liveTarget, status: "closed", closed_at: new Date().toISOString() });
    } catch (error) {
      results.push({
        ...liveTarget,
        status: "blocked",
        reason: stripAnsi(error?.message ?? error).trim() || "close command failed",
      });
    }
  }
  return {
    action: "autoclose",
    status: results.some((target) => target.status === "closed") ? "executed" : "blocked",
    reason,
    targets: results,
  };
}

function discoverAutocloseTargets({ command, issue, pull }) {
  const numbers = collectAutocloseCandidateNumbers({ command, issue, pull });
  const targets = [];
  for (const number of numbers) {
    if (targets.length >= maxAutocloseTargets) break;
    try {
      const candidate = Number(number) === Number(issue.number) ? issue : fetchIssue(number);
      const target = issueTargetFromIssue(candidate);
      if (target.state !== "open") continue;
      targets.push(target);
    } catch {
      // Broken or private references should not block the explicit target close.
    }
  }
  return targets;
}

function collectAutocloseCandidateNumbers({ command, issue, pull }) {
  const numbers = new Set();
  const add = (value) => {
    const number = Number(value);
    if (Number.isInteger(number) && number > 0) numbers.add(number);
  };
  add(command.issue_number);
  addAutocloseNumbersFromText(numbers, command.autoclose_message);
  addAutocloseNumbersFromText(numbers, issue.body);
  addAutocloseNumbersFromText(numbers, pull?.body);
  for (const linked of pull?.closingIssuesReferences ?? []) add(linked.number);
  for (const number of fetchTimelineLinkedNumbers(command.issue_number)) add(number);
  return [...numbers];
}

function fetchTimelineLinkedNumbers(number) {
  try {
    const timeline = ghPaged(`repos/${targetRepo}/issues/${number}/timeline?per_page=100`);
    const numbers = new Set();
    for (const event of timeline) {
      addAutocloseNumbersFromText(numbers, event?.body);
      addAutocloseNumbersFromText(numbers, event?.source?.issue?.html_url);
    }
    return [...numbers];
  } catch {
    return [];
  }
}

function addAutocloseNumbersFromText(numbers, text) {
  const value = String(text ?? "");
  if (!value) return;
  const urlPattern = new RegExp(`https://github\\.com/${escapeRegExp(targetRepo)}/(?:issues|pull)/(\\d+)`, "gi");
  for (const match of value.matchAll(urlPattern)) numbers.add(Number(match[1]));
  for (const match of value.matchAll(/(?:^|[\s(])#(\d+)\b/g)) numbers.add(Number(match[1]));
}

function issueTargetFromIssue(issue) {
  const number = Number(issue.number);
  return {
    number,
    ref: `#${number}`,
    kind: issue.pull_request ? "pull_request" : "issue",
    state: String(issue.state ?? "").toLowerCase(),
    title: issue.title ?? null,
    url: issue.html_url ?? `https://github.com/${targetRepo}/${issue.pull_request ? "pull" : "issues"}/${number}`,
  };
}

function autocloseReason(command) {
  return String(command.autoclose_message ?? autocloseReasonFromCommand(command.command)).trim();
}

function renderAutocloseLinkedComment(command, target, reason) {
  return [
    `<!-- clownfish-autoclose:${command.comment_version_key ?? command.comment_id}:#${target.number} -->`,
    "🐠 Clownfish is closing this as not planned based on maintainer direction on a linked item.",
    "",
    `Source: #${command.issue_number}`,
    "",
    "Maintainer reason:",
    `> ${reason.replace(/\n/g, "\n> ")}`,
  ].join("\n");
}

function postIssueComment(repo, number, body) {
  const payloadPath = writePayload(repoRoot(), `autoclose-comment-${number}`, { body });
  ghText(["api", `repos/${repo}/issues/${number}/comments`, "--method", "POST", "--input", payloadPath]);
}

function closeIssueOrPullRequest(repo, number, kind) {
  if (kind === "pull_request") {
    ghText(["pr", "close", String(number), "--repo", repo]);
    return;
  }
  const payloadPath = writePayload(repoRoot(), `autoclose-close-${number}`, {
    state: "closed",
    state_reason: "not_planned",
  });
  ghText(["api", `repos/${repo}/issues/${number}`, "--method", "PATCH", "--input", payloadPath]);
}

function escapeRegExp(value) {
  return String(value ?? "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function executeAutomerge(command) {
  const view = fetchPullRequestView(command.issue_number);
  const labels = (view.labels ?? []).map((item) => item.name ?? item);
  const latestTarget = { ...command.target, ...view, labels, head_sha: view.headRefOid ?? command.target?.head_sha ?? null };
  const block = validateAutomergeReadiness({ command, view, target: latestTarget });
  if (block) {
    if (isTransientAutomergeBlock(block, view)) {
      return { action: "merge", status: "waiting", reason: block, merge_method: "squash" };
    }
    return { action: "merge", status: "blocked", reason: block, merge_method: "squash" };
  }
  const gateBlock = automergeGateBlockReason(process.env);
  if (gateBlock) {
    ensureDefaultLabel(command.repo);
    ghBestEffort(["issue", "edit", String(command.issue_number), "--repo", command.repo, "--add-label", label]);
    return { action: "merge", status: "blocked", reason: gateBlock, merge_method: "squash" };
  }
  const result = spawnSync(
    "gh",
    buildAutomergeMergeArgs({
      issueNumber: command.issue_number,
      repo: command.repo,
      expectedHeadSha: command.expected_head_sha,
    }),
    {
      cwd: repoRoot(),
      encoding: "utf8",
      env: ghEnv(),
      stdio: "pipe",
    },
  );
  if (result.status !== 0) {
    return {
      action: "merge",
      status: "blocked",
      reason: `merge command failed: ${stripAnsi(result.stderr || result.stdout).trim()}`,
      merge_method: "squash",
    };
  }
  const merged = fetchPullRequestView(command.issue_number);
  return {
    action: "merge",
    status: "executed",
    reason: "merged by Clownfish automerge",
    merged_at: merged.mergedAt ?? new Date().toISOString(),
    merge_commit_sha: merged.mergeCommit?.oid ?? null,
    merge_method: "squash",
  };
}

function validateAutomergeReadiness({ command, view, target }) {
  if (!hasLabel(target, AUTOMERGE_LABEL)) return "PR is not opted into Clownfish automerge";
  if (view.state && view.state !== "OPEN") return `pull request is ${String(view.state).toLowerCase()}`;
  if (view.isDraft) return "pull request is draft";
  if (String(view.baseRefName ?? "") !== "main") return "pull request base is not main";
  if (!command.expected_head_sha || command.expected_head_sha === "unknown") {
    return "ClawSweeper pass marker must include the reviewed PR head SHA";
  }
  if (
    command.expected_head_sha &&
    command.expected_head_sha !== "unknown" &&
    view.headRefOid &&
    command.expected_head_sha !== view.headRefOid
  ) {
    return "ClawSweeper pass marker targets a stale PR head SHA";
  }
  if (view.mergeable !== "MERGEABLE") return `mergeable state is ${view.mergeable || "unknown"}`;
  if (!["CLEAN", "HAS_HOOKS"].includes(String(view.mergeStateStatus ?? ""))) {
    return `merge state status is ${view.mergeStateStatus || "unknown"}`;
  }
  if (["CHANGES_REQUESTED", "REVIEW_REQUIRED"].includes(String(view.reviewDecision ?? ""))) {
    return `review decision is ${view.reviewDecision}`;
  }
  const checks = summarizeChecks(view.statusCheckRollup ?? []);
  if (checks.blockers.length > 0) return `checks are not green: ${checks.blockers.slice(0, 8).join(", ")}`;
  if (checks.total === 0) return "no PR checks found";
  return "";
}

function isTransientAutomergeBlock(reason, view) {
  const text = String(reason ?? "").toLowerCase();
  if (text.includes("checks are not green")) return hasPendingChecks(view.statusCheckRollup ?? []);
  return (
    text.includes("mergeable state is unknown") ||
    text.includes("merge state status is unknown") ||
    text.includes("merge state status is unstable") ||
    text.includes("review decision is review_required") ||
    text.includes("no pr checks found")
  );
}

function hasPendingChecks(checks) {
  return (checks ?? []).some((check) => {
    const status = String(check.status ?? check.state ?? "").toUpperCase();
    const conclusion = String(check.conclusion ?? "").toUpperCase();
    return status && !["COMPLETED", "SUCCESS"].includes(status) && !conclusion;
  });
}

function classifyIssueTarget(issue) {
  return {
    kind: "issue",
    state: issue.state ?? null,
    title: issue.title ?? null,
    labels: (issue.labels ?? []).map((item) => item.name ?? item),
  };
}

function classifyPullTarget(pull, issueNumber) {
  const branch = String(pull.headRefName ?? "");
  const labels = (pull.labels ?? []).map((item) => item.name ?? item);
  const author = String(pull.author?.login ?? pull.author?.name ?? "").toLowerCase();
  const clusterId = branch.startsWith(headPrefix) ? branch.slice(headPrefix.length) : null;
  const automergeCluster = automergeClusterId(targetRepo, issueNumber);
  const automergePath = automergeJobPath(targetRepo, issueNumber);
  const clownfishJobPath = clusterId ? existingJobPath(clusterId, targetRepo) : null;
  const adoptedJobPath = existingJobPath(automergeCluster, targetRepo);
  const jobPath = clownfishJobPath ?? adoptedJobPath;
  return {
    kind: "pull_request",
    title: pull.title ?? null,
    branch,
    head_sha: pull.headRefOid ?? null,
    author,
    labels,
    is_clownfish_pr: branch.startsWith(headPrefix) || labels.includes(label) || clownfishAuthors.has(author),
    cluster_id: clusterId ?? (adoptedJobPath ? automergeCluster : null),
    job_path: jobPath,
    automerge_cluster_id: automergeCluster,
    automerge_job_path: adoptedJobPath ?? automergePath,
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

function existingJobPath(clusterId, repo = targetRepo) {
  const owner = String(repo ?? "").split("/")[0] || "openclaw";
  for (const relative of [
    path.join("jobs", owner, "inbox", `${clusterId}.md`),
    path.join("jobs", owner, `${clusterId}.md`),
    path.join("jobs", owner, "outbox", "finalized", `${clusterId}.md`),
    path.join("jobs", owner, "outbox", "stuck", `${clusterId}.md`),
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
      "baseRefName",
      "body",
      "closingIssuesReferences",
      "isDraft",
      "labels",
      "mergeable",
      "mergeCommit",
      "mergeStateStatus",
      "mergedAt",
      "reviewDecision",
      "state",
      "statusCheckRollup",
      "title",
    ].join(","),
  ]);
}

function resolveMaintainerCommandAuthorization(command) {
  const login = String(command.author ?? "").trim();
  const repositoryPermission = login ? fetchCollaboratorPermission(login) : null;
  const allowed = isMaintainerCommandAllowed({
    authorAssociation: command.author_association,
    repositoryPermission,
    allowedAssociations,
    allowedRepositoryPermissions,
  });
  if (allowed) return { allowed: true, repositoryPermission };
  const association = command.author_association || "unknown";
  const permission = repositoryPermission || "unknown";
  return {
    allowed: false,
    repositoryPermission,
    reason: `author association ${association} and repository permission ${permission} are not allowed`,
  };
}

function fetchCollaboratorPermission(login) {
  const key = login.toLowerCase();
  if (collaboratorPermissionCache.has(key)) return collaboratorPermissionCache.get(key);
  let permission = null;
  try {
    const result = ghJson(["api", `repos/${targetRepo}/collaborators/${encodeURIComponent(login)}/permission`]);
    permission = result?.permission ? String(result.permission).toLowerCase() : null;
  } catch {
    permission = null;
  }
  collaboratorPermissionCache.set(key, permission);
  return permission;
}

function hasExistingResponse(number, commentId, intent, headSha) {
  const marker = `<!-- clownfish-command:${commentId}:${intent}:${headSha ?? "na"} -->`;
  return ghPaged(`repos/${targetRepo}/issues/${number}/comments?per_page=100`).some((comment) => String(comment.body ?? "").includes(marker));
}

function postComment(command, body) {
  const payloadPath = writePayload(repoRoot(), `comment-router-${command.comment_id}`, { body });
  ghText(["api", `repos/${command.repo}/issues/${command.issue_number}/comments`, "--method", "POST", "--input", payloadPath]);
}

function reactToComment(command, content) {
  if (!command.comment_id) return;
  const payloadPath = writePayload(repoRoot(), `comment-router-reaction-${command.comment_id}-${content}`, { content });
  try {
    ghText([
      "api",
      `repos/${command.repo}/issues/comments/${command.comment_id}/reactions`,
      "--method",
      "POST",
      "--input",
      payloadPath,
    ]);
  } catch (error) {
    const message = stripAnsi(error?.message ?? error);
    if (/already exists/i.test(message) || /\b422\b/.test(message)) return;
    console.warn(`warning: failed to add ${content} reaction to comment ${command.comment_id}: ${message}`);
  }
}

function ensureDefaultLabel(repo) {
  ghBestEffort([
    "label",
    "create",
    label,
    "--repo",
    repo,
    "--color",
    DEFAULT_LABEL_COLOR,
    "--description",
    DEFAULT_LABEL_DESCRIPTION,
  ]);
}

function ensureAutomergeLabel(repo) {
  ghBestEffort([
    "label",
    "create",
    AUTOMERGE_LABEL,
    "--repo",
    repo,
    "--color",
    "0E8A16",
    "--description",
    "Maintainer opted this Clownfish PR into bounded ClawSweeper-reviewed automerge",
  ]);
}

function hasLabel(target, name) {
  return (target?.labels ?? []).some((labelName) => String(labelName).toLowerCase() === String(name).toLowerCase());
}

function ledgerPath() {
  return path.join(repoRoot(), "results", "comment-router.json");
}

function idempotencyKey(parsed, issueNumber, commentId, commentUpdatedAt) {
  const prefix = parsed.trusted_bot ? "clawsweeper-repair" : "comment-router";
  return `${prefix}:${targetRepo}:${issueNumber}:${commentId}:${commentUpdatedAt ?? "unknown"}:${parsed.intent}`;
}

function commentVersionKey(entry) {
  const id = entry?.comment_id;
  const updatedAt = entry?.comment_updated_at;
  if (!id || !updatedAt) return null;
  return `${id}:${updatedAt}`;
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

function ghEnv(overrides = {}) {
  const env = { ...process.env, ...overrides, NO_COLOR: "1", CLICOLOR: "0" };
  delete env.FORCE_COLOR;
  return env;
}
