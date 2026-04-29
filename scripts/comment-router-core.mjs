export const REPAIR_INTENTS = new Set(["fix_ci", "address_review", "rebase", "clawsweeper_auto_repair"]);
export const MERGE_INTENTS = new Set(["clawsweeper_auto_merge"]);
export const AUTOCLOSE_INTENTS = new Set(["autoclose"]);
export const AUTOMERGE_JOB_SOURCE = "pr_automerge";
export const DEFAULT_ALLOWED_REPOSITORY_PERMISSIONS = ["admin", "maintain", "write"];

export function repoSlug(repo) {
  return String(repo ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_.-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function automergeClusterId(repo, issueNumber) {
  return `automerge-${repoSlug(repo)}-${Number(issueNumber)}`;
}

export function automergeJobBranch(repo, issueNumber) {
  return `clownfish/${automergeClusterId(repo, issueNumber)}`;
}

export function automergeJobPath(repo, issueNumber) {
  const owner = String(repo ?? "").split("/")[0] || "openclaw";
  return `jobs/${owner}/inbox/${automergeClusterId(repo, issueNumber)}.md`;
}

export function renderAutomergeJob({ repo, issueNumber, title = null }) {
  const clusterId = automergeClusterId(repo, issueNumber);
  const branch = automergeJobBranch(repo, issueNumber);
  const ref = `#${Number(issueNumber)}`;
  const prUrl = `https://github.com/${repo}/pull/${Number(issueNumber)}`;
  const safeTitle = String(title ?? `PR ${ref}`).trim() || `PR ${ref}`;
  return `---
repo: ${repo}
cluster_id: ${clusterId}
mode: autonomous
allowed_actions:
  - comment
  - label
  - fix
  - raise_pr
blocked_actions:
  - close
  - merge
require_human_for:
  - close
  - merge
canonical:
  - ${ref}
candidates:
  - ${ref}
cluster_refs:
  - ${ref}
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: ${branch}
source: ${AUTOMERGE_JOB_SOURCE}
---

# Clownfish automerge repair candidate

Maintainer opted ${ref} into Clownfish automerge.

Source PR: ${prUrl}
Title: ${safeTitle}

Clownfish should use this job only for the bounded ClawSweeper review/fix loop:

- If ClawSweeper requests changes, returns \`needs-human\`, or finds failing checks/rebase work, and the PR branch is safe to update, emit a fix artifact with \`repair_strategy: "repair_contributor_branch"\` and \`source_prs: ["${prUrl}"]\`.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return \`needs_human\`.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.
`;
}

export function automergeGateBlockReason(env = process.env) {
  if (env.CLOWNFISH_ALLOW_MERGE !== "1") return "merge requires CLOWNFISH_ALLOW_MERGE=1";
  if (env.CLOWNFISH_ALLOW_AUTOMERGE !== "1") return "automerge requires CLOWNFISH_ALLOW_AUTOMERGE=1";
  return "";
}

export function isMaintainerCommandAllowed({
  authorAssociation,
  repositoryPermission = null,
  allowedAssociations,
  allowedRepositoryPermissions = DEFAULT_ALLOWED_REPOSITORY_PERMISSIONS,
}) {
  const permission = String(repositoryPermission ?? "").trim().toLowerCase();
  const permissionSet = new Set(
    [...allowedRepositoryPermissions].map((value) => String(value).trim().toLowerCase()).filter(Boolean),
  );
  if (permission) return permissionSet.has(permission);

  const association = String(authorAssociation ?? "").trim().toUpperCase();
  const associationSet = new Set([...allowedAssociations].map((value) => String(value).trim().toUpperCase()).filter(Boolean));
  return association === "OWNER" && associationSet.has(association);
}

export function buildAutomergeMergeArgs({ issueNumber, repo, expectedHeadSha }) {
  const args = ["pr", "merge", String(issueNumber), "--repo", repo, "--squash"];
  if (expectedHeadSha && expectedHeadSha !== "unknown") {
    args.push("--match-head-commit", expectedHeadSha);
  }
  return args;
}

export function parseCommand(body) {
  for (const line of String(body ?? "").split(/\r?\n/)) {
    const autoclose = line.match(/^\s*\/autoclose(?:\s+(.+))?\s*$/i);
    if (autoclose) return commandFromText("slash", `autoclose ${autoclose[1] ?? ""}`.trim());
    const slash = line.match(/^\s*\/clownfish(?:\s+(.+))?\s*$/i);
    if (slash) return commandFromText("slash", slash[1] ?? "status");
    const mention = line.match(/^\s*@openclaw-clownfish(?:\[bot\])?(?:\s+(.+))?\s*$/i);
    if (mention) return commandFromText("mention", mention[1] ?? "status");
  }
  return null;
}

export function parseTrustedAutomation(comment, { trustedAuthors = new Set() } = {}) {
  const author = String(comment?.user?.login ?? "").toLowerCase();
  if (!trustedAuthors.has(author)) return null;

  const body = String(comment?.body ?? "");
  const verdict = clawsweeperMarker(body, "verdict");
  const actionMarker = clawsweeperMarker(body, "action");
  if (verdict && ["pass", "approved", "no-changes"].includes(verdict.action)) {
    return trustedMerge({
      author,
      reason: `structured ClawSweeper verdict: ${verdict.action}${markerReasonSuffix(verdict.attrs)}`,
      marker: verdict,
    });
  }
  if (verdict && verdict.action === "needs-human") {
    return trustedRepair({
      author,
      reason: `structured ClawSweeper verdict: ${verdict.action}${markerReasonSuffix(verdict.attrs)}`,
      marker: verdict,
    });
  }
  if (verdict && verdict.action === "human-review") {
    return trustedHumanReview({
      author,
      reason: `structured ClawSweeper verdict: ${verdict.action}${markerReasonSuffix(verdict.attrs)}`,
      marker: verdict,
    });
  }
  if (actionMarker && ["fix-required", "repair-required", "address-review", "fix-ci"].includes(actionMarker.action)) {
    return trustedRepair({
      author,
      reason: `structured ClawSweeper marker: ${actionMarker.action}${markerReasonSuffix(actionMarker.attrs)}`,
      marker: actionMarker,
    });
  }
  if (verdict && ["needs-changes", "changes-requested", "fix-required", "repair-required"].includes(verdict.action)) {
    return trustedRepair({
      author,
      reason: `structured ClawSweeper verdict: ${verdict.action}${markerReasonSuffix(verdict.attrs)}`,
      marker: verdict,
    });
  }

  if (looksLikeActionableClawSweeperReview(body)) {
    return trustedRepair({ author, reason: "ClawSweeper review comment asks to keep repairing this PR" });
  }

  return null;
}

export function renderResponse(command, dispatched) {
  const markerId = command.comment_version_key ?? command.comment_id;
  const marker = `<!-- clownfish-command:${markerId}:${command.intent}:${command.target?.head_sha ?? "na"} -->`;
  if (command.intent === "help") {
    return [
      marker,
      "Clownfish is here and listening for maintainer commands.",
      "",
      "Supported commands: `/clownfish status`, `/clownfish fix ci`, `/clownfish address review`, `/clownfish rebase`, `/clownfish automerge`, `/autoclose <reason>`, `/clownfish explain`, `/clownfish stop`.",
      "",
      "I only act for maintainers, or for trusted ClawSweeper feedback on a Clownfish PR or PR opted into `clownfish:automerge`.",
    ].join("\n");
  }
  if (["status", "explain"].includes(command.intent)) {
    return [marker, renderStatusBody(command)].join("\n");
  }
  if (command.intent === "stop") {
    return [
      marker,
      "Got it. Clownfish will leave this item for human review.",
      "",
      "I kept the regular `clownfish` label on it and paused the automation trail until a maintainer asks again.",
    ].join("\n");
  }
  if (command.intent === "automerge") {
    const clearedHumanReview = (command.actions ?? []).some((action) => action.action === "remove_label");
    return [
      marker,
      dispatched?.clawsweeper
        ? "Clownfish automerge is enabled for this PR."
        : "Clownfish could not enable automerge for this PR.",
      "",
      dispatched?.clawsweeper
        ? `I ${clearedHumanReview ? "cleared `clownfish:human-review`, " : ""}added \`clownfish:automerge\` and asked ClawSweeper to review this head. If ClawSweeper requests changes or returns \`needs-human\`, I will repair/rebase the branch and ask for another review, up to the configured round limit.`
        : `Reason: ${command.reason ?? "automerge requires a pull request"}.`,
      "",
      "A maintainer can pause this with `/clownfish stop`.",
    ].join("\n");
  }
  if (command.intent === "autoclose") {
    const result = dispatched?.autoclose;
    const closed = (result?.targets ?? []).filter((target) => target.status === "closed");
    const skipped = (result?.targets ?? []).filter((target) => target.status !== "closed");
    const closedLines = closed.map((target) => `- Closed ${target.ref}: ${target.title ?? "untitled"}`);
    const skippedLines = skipped.map((target) => `- Skipped ${target.ref}: ${target.reason ?? target.status}`);
    return [
      marker,
      result?.status === "executed"
        ? "Clownfish autoclose is complete."
        : "Clownfish could not autoclose this item.",
      "",
      `Reason: ${command.autoclose_reason ?? command.autoclose_message ?? command.reason ?? "autoclose requires a maintainer close reason"}`,
      ...(closedLines.length > 0 ? ["", "Closed:", ...closedLines] : []),
      ...(skippedLines.length > 0 ? ["", "Skipped:", ...skippedLines] : []),
      ...(result
        ? []
        : [
            "",
            "Usage: `/autoclose <maintainer close reason>`. I will close this item and bounded linked open same-repo items.",
          ]),
    ].join("\n");
  }
  if (command.intent === "clawsweeper_auto_repair") {
    const fromNeedsHuman = String(command.repair_reason ?? "").includes("needs-human");
    return [
      marker,
      fromNeedsHuman
        ? "Thanks, ClawSweeper. Clownfish is continuing the automerge repair loop for this PR."
        : "Thanks, ClawSweeper. Clownfish picked up the repair feedback.",
      "",
      `Source: \`${command.trusted_bot_author ?? command.author ?? "trusted automation"}\``,
      `Feedback: ${command.repair_reason ?? "ClawSweeper requested another repair pass."}`,
      `Action: dispatched \`${dispatched.workflow}\` for \`${dispatched.job_path}\` in \`${dispatched.mode}\` mode.`,
      `Model: \`${dispatched.model}\``,
      "",
      "I will update this PR branch, or open a safe credited replacement, if the repair worker finds a narrow fix.",
    ].join("\n");
  }
  if (command.intent === "clawsweeper_auto_merge") {
    return [
      marker,
      dispatched?.merge?.status === "executed"
        ? "Thanks, ClawSweeper. Clownfish merged this PR after the passing review."
        : "Thanks, ClawSweeper. Clownfish saw the passing review, but did not merge yet.",
      "",
      `Source: \`${command.trusted_bot_author ?? command.author ?? "trusted automation"}\``,
      `Feedback: ${command.repair_reason ?? "ClawSweeper reported a passing review."}`,
      ...(dispatched?.merge?.reason ? [`Merge status: ${dispatched.merge.reason}`] : []),
      ...(dispatched?.merge?.merged_at ? [`Merged at: ${dispatched.merge.merged_at}`] : []),
      "",
      dispatched?.merge?.status === "executed"
        ? "The automerge loop is complete."
        : "I left the PR open for the remaining gate instead of bypassing it.",
    ].join("\n");
  }
  if (command.intent === "clawsweeper_needs_human") {
    return [
      marker,
      "Clownfish is pausing automerge for human review.",
      "",
      `Source: \`${command.trusted_bot_author ?? command.author ?? "trusted automation"}\``,
      `Reason: ${command.repair_reason ?? "ClawSweeper requested human review."}`,
      "",
      "I kept the regular `clownfish` label on it and left the final call with a maintainer.",
    ].join("\n");
  }
  if (!dispatched) {
    return [
      marker,
      "Clownfish did not dispatch a repair worker for this one.",
      "",
      `Reason: ${command.reason ?? "unsupported command or target"}.`,
      "",
      "Supported repair commands work on existing Clownfish PRs and PRs opted into `clownfish:automerge`: `/clownfish fix ci`, `/clownfish address review`, `/clownfish rebase`.",
      "A maintainer can opt a PR in with `/clownfish automerge` and I can take another pass.",
      "A maintainer can close unsupported or declined work with `/autoclose <reason>`.",
    ].join("\n");
  }
  return [
    marker,
    "Clownfish picked this up.",
    "",
    `Command: \`${command.command}\``,
    `Action: dispatched \`${dispatched.workflow}\` for \`${dispatched.job_path}\` in \`${dispatched.mode}\` mode.`,
    `Model: \`${dispatched.model}\``,
    "",
    "I will keep the change narrow and update the PR branch if the repair worker finds a safe fix.",
  ].join("\n");
}

function commandFromText(trigger, value) {
  const rawCommand = String(value ?? "status").trim().replace(/\s+/g, " ");
  const command = rawCommand.toLowerCase();
  const intent = normalizeIntent(command);
  const parsed = { trigger, command, intent };
  if (intent === "autoclose") parsed.autoclose_message = autocloseReasonFromCommand(rawCommand);
  return parsed;
}

export function autocloseReasonFromCommand(command) {
  const match = String(command ?? "").trim().match(/^autoclose(?:\s+([\s\S]+))?$/i);
  return String(match?.[1] ?? "").trim();
}

function normalizeIntent(command) {
  if (!command || command === "status") return "status";
  if (["help", "?"].includes(command)) return "help";
  if (["explain", "why"].includes(command)) return "explain";
  if (["fix ci", "fix-ci", "ci", "repair ci", "repair checks", "fix checks"].includes(command)) return "fix_ci";
  if (["address review", "address-review", "fix review", "review"].includes(command)) return "address_review";
  if (["rebase", "update branch", "sync"].includes(command)) return "rebase";
  if (["automerge", "auto merge", "merge when clean", "merge when ready", "automerge on"].includes(command)) {
    return "automerge";
  }
  if (command === "autoclose" || command.startsWith("autoclose ")) return "autoclose";
  if (["stop", "pause", "human review", "handoff"].includes(command)) return "stop";
  return "help";
}

function trustedRepair({ author, reason, marker = null }) {
  return {
    trigger: "trusted_bot",
    command: "clawsweeper auto repair",
    intent: "clawsweeper_auto_repair",
    trusted_bot: true,
    trusted_bot_author: author,
    automation_source: "clawsweeper",
    repair_reason: reason,
    expected_head_sha: marker?.attrs?.sha ?? null,
    finding_id: marker?.attrs?.finding ?? null,
  };
}

function trustedMerge({ author, reason, marker = null }) {
  return {
    trigger: "trusted_bot",
    command: "clawsweeper auto merge",
    intent: "clawsweeper_auto_merge",
    trusted_bot: true,
    trusted_bot_author: author,
    automation_source: "clawsweeper",
    repair_reason: reason,
    expected_head_sha: marker?.attrs?.sha ?? null,
    finding_id: marker?.attrs?.finding ?? null,
  };
}

function trustedHumanReview({ author, reason, marker = null }) {
  return {
    trigger: "trusted_bot",
    command: "clawsweeper needs human",
    intent: "clawsweeper_needs_human",
    trusted_bot: true,
    trusted_bot_author: author,
    automation_source: "clawsweeper",
    repair_reason: reason,
    expected_head_sha: marker?.attrs?.sha ?? null,
    finding_id: marker?.attrs?.finding ?? null,
  };
}

function clawsweeperMarker(body, kind) {
  const marker = String(body ?? "").match(
    new RegExp(`<!--\\s*clawsweeper-${kind}:\\s*([a-z0-9_-]+)([^>]*)-->`, "i"),
  );
  if (!marker) return null;
  return {
    action: marker[1].toLowerCase(),
    attrs: markerAttributes(marker[2] ?? ""),
  };
}

function markerAttributes(input) {
  const attrs = {};
  for (const match of String(input ?? "").matchAll(/([a-z0-9_-]+)=("[^"]*"|'[^']*'|[^\s>]+)/gi)) {
    const raw = match[2] ?? "";
    attrs[match[1].toLowerCase()] = raw.replace(/^["']|["']$/g, "");
  }
  return attrs;
}

function markerReasonSuffix(attrs) {
  const parts = [];
  if (attrs?.finding) parts.push(`finding=${attrs.finding}`);
  if (attrs?.sha) parts.push(`sha=${attrs.sha}`);
  return parts.length ? ` (${parts.join(" ")})` : "";
}

function looksLikeActionableClawSweeperReview(body) {
  const text = String(body ?? "").toLowerCase();
  if (!text.includes("clawsweeper") && !text.includes("codex review:")) return false;
  if (
    [
      "no actionable",
      "no issues found",
      "looks good",
      "safe to merge",
      "approved",
      "nothing to fix",
      "no findings",
    ].some((phrase) => text.includes(phrase))
  ) {
    return false;
  }
  return [
    /keep this pr open/s,
    /needs? (?:maintainer )?follow[- ]up/s,
    /still (?:has|lacks|needs|fails|failing|blocked|broken|missing)/s,
    /unresolved review/s,
    /failing checks?/s,
    /actionable (?:review )?finding/s,
    /please (?:fix|address|rebase)/s,
  ].some((pattern) => pattern.test(text));
}

function renderStatusBody(command) {
  const target = command.target ?? {};
  const lines = ["Clownfish status:"];
  if (target.kind === "pull_request") {
    lines.push(`- PR: #${command.issue_number}`);
    lines.push(`- Branch: \`${target.branch ?? "unknown"}\``);
    lines.push(`- Clownfish PR: ${target.is_clownfish_pr ? "yes" : "no"}`);
    if (target.automerge_job_path) lines.push(`- Automerge job: \`${target.automerge_job_path}\``);
    if (target.job_path) lines.push(`- Job: \`${target.job_path}\``);
    if (target.merge_state_status) lines.push(`- Merge state: \`${target.merge_state_status}\``);
    if (target.review_decision) lines.push(`- Review decision: \`${target.review_decision}\``);
    lines.push(`- Checks: ${formatCounts(target.checks?.counts) || "none"}`);
    if (target.checks?.blockers?.length) lines.push(`- Check blockers: ${target.checks.blockers.slice(0, 5).join(", ")}`);
  } else {
    lines.push(`- Issue: #${command.issue_number}`);
    lines.push(`- State: \`${target.state ?? "unknown"}\``);
    lines.push("- Existing PR repair: not applicable until a Clownfish PR exists.");
  }
  return lines.join("\n");
}

function formatCounts(counts) {
  return Object.entries(counts ?? {})
    .map(([key, value]) => `${key}:${value}`)
    .join(" ");
}
