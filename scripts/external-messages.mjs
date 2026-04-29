import { randomInt } from "node:crypto";

const SIGNATURE = "Clownfish 🐠";
const EVIDENCE_LIMIT = 5;

function listOrNone(items) {
  return items?.length ? items.join("; ") : "none";
}

function issueRef(value) {
  return value ? `#${value}` : "";
}

function pick(items) {
  return items[randomInt(items.length)];
}

function variant(items, context = {}) {
  const item = pick(items);
  return typeof item === "function" ? item(context) : item;
}

function evidenceLines(evidence) {
  return (Array.isArray(evidence) ? evidence : [])
    .slice(0, EVIDENCE_LIMIT)
    .map((item) => `- ${typeof item === "string" ? item : (item.detail ?? JSON.stringify(item))}`);
}

const repairBranchOpeners = [
  "Thanks for the contribution here. Clownfish gave this branch a little current boost so the original PR can stay the canonical swim lane instead of opening a replacement.",
  "Thanks for the contribution here. Clownfish nudged this branch back into the current, so the original PR can stay the review lane.",
  "Thanks for the work here. Clownfish patched this branch directly so the contributor trail stays right where it started.",
  "Thanks for the contribution here. Clownfish was able to repair this branch in place, which keeps the original PR as the clean canonical path.",
  "Thanks for the work here. Clownfish got this branch swimming again without needing a replacement PR.",
  "Thanks for the contribution here. Clownfish pushed the narrow repair here so review, credit, and history stay together.",
  "Thanks for the work on this. Clownfish could write to this branch, so it kept the fix in the original PR instead of making a new one.",
  "Thanks for the contribution here. Clownfish gave the branch a tidy little reef repair and kept this PR as the main lane.",
];

const preservedCreditLines = [
  "Contributor credit stays right here with this PR's history and changelog context. no lost treasure, no mystery bubbles.",
  "Contributor credit stays attached to this PR and its history. no one gets washed out with the tide.",
  "The contributor trail stays intact here: branch history, PR context, and changelog credit all still point back to this work.",
  "Credit stays anchored to this PR. Clownfish is just moving the fix along, not stealing the shiny bits.",
  "The useful context and credit stay on this branch. tidy swim, same contributor trail.",
  "This keeps attribution in the original current: commits, review context, and changelog notes all stay visible.",
  "Credit remains with the original contribution. Clownfish is just doing the branch-maintenance snorkel.",
  "The contribution stays credited here. no vanishing act, no suspicious bubbles.",
  "Attribution stays exactly where it should: with the original branch and PR history.",
  "Contributor credit stays on this reef marker, with the PR history doing the receipts.",
];

const replacementPermissionLines = [
  "Thanks for the work on this. Clownfish could not push to this branch with the permissions available, so it opened a narrow replacement PR to keep the fix swimming forward without losing the contributor trail. not your fault, just GitHub branch-permission tides.",
  "Thanks for the work on this. Clownfish did not have permission to update this branch directly, so it opened a narrow replacement PR instead. that's a branch access thing, not a knock on the contribution.",
  "Thanks for the contribution here. Clownfish could not safely push to this branch, so it opened a replacement PR from a writable branch and carried the contributor trail along with it.",
  "Thanks for the work here. GitHub would not let Clownfish push to this branch with the available credentials, so the fix moved to a narrow replacement PR. nothing personal, just permission currents.",
  "Thanks for the contribution. Clownfish hit a branch-permission wall on this PR, so it opened a replacement branch to keep review moving while preserving credit.",
  "Thanks for the work here. Clownfish could not write to the source branch, so it opened a replacement PR rather than letting the fix drift. attribution still points back here.",
  "Thanks for the contribution here. Clownfish tried the original lane first, but branch permissions blocked the push, so a replacement PR is carrying the fix forward.",
  "Thanks for the work on this. Clownfish opened a replacement PR only because the source branch was not writable from the available bot permissions. branch tides, not contributor blame.",
  "Thanks for the useful work here. Clownfish could not update this branch directly, so the replacement PR is the writable swim lane for the same fix path.",
  "Thanks for the contribution. The source branch was not safely writable by Clownfish, so it opened a replacement PR and kept the credit trail visible.",
];

const sourceStaysOpenLines = [
  "This source PR is staying open for maintainer and contributor review.",
  "This source PR stays open so maintainers and the original contributor can compare the paths.",
  "Leaving this source PR open for review context and contributor follow-up.",
  "This source PR remains open; the replacement is just the writable fix lane.",
  "Keeping this PR open so the original context is easy to inspect.",
  "This PR stays open for now, with the replacement linked as the current fix path.",
];

const automergeNoChangeOpeners = [
  "This repair lap finished without changing the PR. Clownfish checked the reef and found no safe patch to push this time.",
  "Clownfish finished this automerge repair swim without changing the branch.",
  "No new branch changes from this lap. Clownfish kept the current tidy instead of splashing around.",
  "This pass ended as a no-op: no narrow repair surfaced, so Clownfish left the branch untouched.",
  "Clownfish took another look: no safe branch change to make on this pass.",
];

const automergeNoChangeClosers = [
  "No branch push, rebase, replacement PR, merge, or ClawSweeper re-review was started on this lap.",
  "No push, rebase, replacement PR, merge, or ClawSweeper re-review happened this swim.",
  "Clownfish left the PR as-is: no push, no rebase, no replacement PR, no merge, and no fresh ClawSweeper pass.",
  "Nothing moved downstream from this pass: no branch update, replacement PR, merge, or re-review.",
  "This lap stayed observational only. no branch push, no replacement, no merge, no mystery bubbles.",
];

const carriedCreditLines = [
  "Contributor credit is carried into the replacement PR body and changelog plan.",
  "Contributor credit is copied into the replacement PR notes and changelog path.",
  "The replacement PR carries the original credit trail forward.",
  "Attribution is preserved in the replacement PR body and release-note trail.",
  "The original contribution stays credited in the replacement PR context.",
  "Credit follows the fix over to the replacement PR. no sneaky treasure grab.",
  "The replacement PR keeps the contributor trail visible for review and changelog credit.",
  "Attribution stays attached; the replacement just gives the fix a writable branch.",
];

const closeOnlyWhenEnabledLines = [
  "Closing this source PR only because source-PR closing was explicitly enabled for this run.",
  "Closing this source PR because this run explicitly enabled source-PR closeout.",
  "This source PR is being closed only under the explicit source-close setting for this Clownfish run.",
  "Closing this one because the run was configured to close superseded source PRs after opening the replacement.",
  "This closeout is intentional for this run: the replacement PR is now the active review lane.",
];

const cleanupOpeners = [
  ({ target }) => `Thanks for the report and the useful trail here. Clownfish reviewed this cluster and is closing #${target}.`,
  ({ target }) => `Thanks for the report and all the context here. Clownfish reviewed the cluster and is closing #${target}.`,
  ({ target }) => `Thanks for leaving a clear trail here. Clownfish checked this cluster and is closing #${target}.`,
  ({ target }) => `Thanks for the useful report. Clownfish traced this through the cluster and is closing #${target}.`,
  ({ target }) => `Thanks for the context here. Clownfish matched this against the cluster and is closing #${target}.`,
  ({ target }) => `Thanks for the signal on this one. Clownfish reviewed the related path and is closing #${target}.`,
];

const duplicateLines = [
  ({ canonical }) => `This looks like the same school as ${issueRef(canonical)}, so Clownfish is keeping ${issueRef(canonical)} as the canonical thread where fixes, validation, and follow-up can all swim together.`,
  ({ canonical }) => `This appears to overlap ${issueRef(canonical)}, so Clownfish is keeping that thread as the canonical place for the fix, validation, and follow-up.`,
  ({ canonical }) => `This is tracking the same current as ${issueRef(canonical)}. Keeping ${issueRef(canonical)} canonical keeps review and validation in one place.`,
  ({ canonical }) => `This duplicates the path in ${issueRef(canonical)}, so Clownfish is keeping the canonical trail there instead of splitting the reef map.`,
  ({ canonical }) => `Same school as ${issueRef(canonical)}. Clownfish is keeping the canonical discussion there so the useful bits do not scatter.`,
  ({ canonical }) => `This matches ${issueRef(canonical)} closely enough that keeping one canonical thread is the cleaner swim lane.`,
];

const supersededCanonicalLines = [
  ({ canonical }) => `This is superseded by ${issueRef(canonical)}. Clownfish is keeping that reef marker as the canonical path so the useful context and contributor credit stay visible.`,
  ({ canonical }) => `This has been overtaken by ${issueRef(canonical)}, so Clownfish is keeping that as the current canonical path.`,
  ({ canonical }) => `${issueRef(canonical)} is now the better canonical thread. Closing this keeps validation and context from drifting apart.`,
  ({ canonical }) => `This is superseded by ${issueRef(canonical)}. Keeping the newer path canonical makes follow-up easier to review.`,
  ({ canonical }) => `The active fix trail is now ${issueRef(canonical)}, so Clownfish is closing this older marker and keeping the context attached there.`,
];

const supersededFixLines = [
  ({ candidateFix }) => `This is superseded by landed fix ${issueRef(candidateFix)}. Clownfish is closing this older overlap so validation and follow-up stay attached to the shipped path instead of drifting around the reef.`,
  ({ candidateFix }) => `Landed fix ${issueRef(candidateFix)} covers this path now, so Clownfish is closing the older overlap and keeping the receipts on the shipped fix.`,
  ({ candidateFix }) => `This has been handled by landed fix ${issueRef(candidateFix)}. Closing this keeps follow-up tied to the code that actually shipped.`,
  ({ candidateFix }) => `${issueRef(candidateFix)} has landed for this path, so Clownfish is closing this older thread to keep validation from scattering.`,
  ({ candidateFix }) => `The shipped fix is ${issueRef(candidateFix)}. Closing this older overlap keeps the current tidy.`,
];

const candidateFixLines = [
  ({ candidateFix }) => `This is covered by candidate fix ${issueRef(candidateFix)}. Clownfish is closing this thread so validation and follow-up stay attached to that fix path instead of scattering like bubbles.`,
  ({ candidateFix }) => `Candidate fix ${issueRef(candidateFix)} is carrying this path now, so Clownfish is keeping follow-up attached there.`,
  ({ candidateFix }) => `This is covered by ${issueRef(candidateFix)}. Closing this keeps the active review lane focused instead of splitting the school.`,
  ({ candidateFix }) => `${issueRef(candidateFix)} is the active fix path for this one, so Clownfish is closing this duplicate current.`,
  ({ candidateFix }) => `This belongs with candidate fix ${issueRef(candidateFix)} now. Keeping one lane makes review and validation less slippery.`,
];

const reopenLines = [
  "If this still reproduces by a different route, reply here and we can fish it back out.",
  "If this still splashes on current main through a different path, reply here and we can reopen or split it back out.",
  "If there is a separate reproduction path hiding under this, reply here and Clownfish can pull it back into the light.",
  "If this is still real on current main by a different route, reply here and we can reopen the trail.",
  "If this closeout misses a distinct bug path, reply here and we can separate it cleanly.",
  "If the canonical path does not cover your case, reply here and we can fish the thread back out.",
];

const postMergeCloseLines = [
  "Closing this now that the validated fix is merged. If this still splashes on current main by a different path, reply here and we can reopen or split it back out.",
  "Closing this now that the validated fix has landed. If current main still shows a different path, reply here and we can reopen.",
  "The validated fix is merged, so Clownfish is closing this trail. If a separate reproduction remains, reply here and we can split it back out.",
  "Closing after the canonical fix landed. If another route still reproduces, reply here and we can pull that thread back up.",
  "This is closed now that the fix is on main. If the issue still swims through a different channel, reply here and we can reopen.",
];

function fishNotes(provenance) {
  const model = provenance?.model ?? process.env.CLOWNFISH_MODEL ?? "gpt-5.5";
  const reasoning = provenance?.reasoning ?? process.env.CLOWNFISH_CODEX_REASONING_EFFORT ?? "medium";
  const reviewedSha = provenance?.reviewedSha ?? provenance?.reviewed_sha;
  const reviewed = reviewedSha ? `; reviewed against ${String(reviewedSha).slice(0, 12)}` : "";
  return `fish notes: model ${model}, reasoning ${reasoning}${reviewed}.`;
}

export function externalMessageProvenance({ model, reasoning, reviewedSha } = {}) {
  return {
    model: model ?? process.env.CLOWNFISH_MODEL ?? "gpt-5.5",
    reasoning: reasoning ?? process.env.CLOWNFISH_CODEX_REASONING_EFFORT ?? "medium",
    reviewedSha,
  };
}

function withFishNotes(lines, provenance) {
  return [...lines, "", fishNotes(provenance)].join("\n");
}

export function repairContributorBranchComment({ sourcePrUrl, validationCommands, provenance }) {
  return withFishNotes([
    `${SIGNATURE} reef update`,
    "",
    variant(repairBranchOpeners),
    "",
    `Source PR: ${sourcePrUrl}`,
    `Validation: ${listOrNone(validationCommands)}`,
    variant(preservedCreditLines),
  ], provenance);
}

export function automergeRepairOutcomeComment({ marker, result, report, target, provenance }) {
  const lines = [
    marker,
    `${SIGNATURE} reef automerge status`,
    "",
    variant(automergeNoChangeOpeners),
    "",
    `Target: #${target}`,
    `Executor outcome: ${compactForComment(report?.reason ?? "no executable fix action", 260)}.`,
  ];
  const summary = compactForComment(result?.summary, 900);
  if (summary) lines.push(`Worker summary: ${summary}`);
  const actionLines = automergeOutcomeActionLines(result?.actions);
  if (actionLines.length > 0) {
    lines.push("", "Worker actions:", ...actionLines);
  }
  lines.push("", variant(automergeNoChangeClosers));
  return withFishNotes(lines, provenance);
}

export function replacementSourceLinkComment({ replacementPrUrl, sourcePrUrl, provenance }) {
  return withFishNotes([
    `${SIGNATURE} reef update`,
    "",
    variant(replacementPermissionLines),
    "",
    `Replacement PR: ${replacementPrUrl}`,
    `Source PR: ${sourcePrUrl}`,
    variant(sourceStaysOpenLines),
    variant(carriedCreditLines),
  ], provenance);
}

function automergeOutcomeActionLines(actions) {
  if (!Array.isArray(actions)) return [];
  return actions.slice(0, 6).map((action) => {
    const name = compactForComment(action?.action ?? "unknown", 80);
    const target = compactForComment(action?.target ?? "unknown", 80);
    const status = compactForComment(action?.status ?? "unknown", 80);
    const reason = compactForComment(action?.reason, 220);
    return `- \`${name}\` on \`${target}\`: ${status}${reason ? ` - ${reason}` : ""}`;
  });
}

function compactForComment(value, max) {
  const text = String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
  if (!text) return "";
  if (text.length <= max) return text;
  return `${text.slice(0, Math.max(0, max - 1)).trimEnd()}...`;
}

export function replacementSourceCloseComment({ replacementPrUrl, sourcePrUrl, provenance }) {
  return withFishNotes([
    `${SIGNATURE} reef update`,
    "",
    variant(replacementPermissionLines),
    "",
    `Replacement PR: ${replacementPrUrl}`,
    `Source PR: ${sourcePrUrl}`,
    variant(closeOnlyWhenEnabledLines),
    variant(carriedCreditLines),
  ], provenance);
}

export function replacementPrBody({ fixArtifact, fallbackReason, clusterId, provenance }) {
  const lines = [
    fixArtifact.pr_body.trim(),
    "",
    `${SIGNATURE} replacement reef notes:`,
    `- Cluster: ${clusterId}`,
    `- Source PRs: ${(fixArtifact.source_prs ?? []).join(", ") || "none"}`,
    `- Credit: ${listOrNone(fixArtifact.credit_notes)}`,
    `- Validation: ${listOrNone(fixArtifact.validation_commands)}`,
  ];
  if (fallbackReason) lines.push(`- Repair fallback: ${fallbackReason}`);
  lines.push("", fishNotes(provenance));
  return `${lines.join("\n")}\n`;
}

export function defaultCloseComment({
  action,
  classification,
  clusterId,
  target,
  title,
  canonical,
  candidateFix,
  reason,
  provenance,
}) {
  const lines = [`${SIGNATURE} reef cleanup`, "", variant(cleanupOpeners, { target })];

  lines.push("");
  if (classification === "duplicate" && canonical) {
    lines.push(variant(duplicateLines, { canonical }));
  } else if (classification === "superseded" && canonical) {
    lines.push(variant(supersededCanonicalLines, { canonical }));
  } else if (classification === "superseded" && candidateFix) {
    lines.push(variant(supersededFixLines, { candidateFix }));
  } else if (classification === "fixed_by_candidate" && candidateFix) {
    lines.push(variant(candidateFixLines, { candidateFix }));
  } else if (classification === "low_signal") {
    lines.push(
      "This falls under low-signal PR cleanup: the PR does not currently present a reviewable OpenClaw fix with maintainer signal, current validation, or a focused product path. Please reopen from a clean branch with a scoped summary, linked issue or rationale, and validation if this still needs another swim.",
    );
  } else {
    lines.push(reason);
  }

  lines.push("", `Cluster: \`${clusterId}\``, `Reviewed item: #${target} - ${title}`);
  const renderedEvidence = evidenceLines(action.evidence);
  if (renderedEvidence.length) lines.push("", "Evidence:", ...renderedEvidence);
  lines.push("", variant(reopenLines));
  lines.push("", fishNotes(provenance));
  return lines.join("\n");
}

export function postMergeCloseoutComment({ actionName, fixUrl, provenance }) {
  const relation = actionName === "close_superseded" ? "superseded by" : "covered by";
  return withFishNotes([
    `${SIGNATURE} landed`,
    "",
    `Thanks for the report and context here. This is ${relation} ${fixUrl}, which has landed as the canonical Clownfish fix path for this cluster.`,
    "",
    variant(postMergeCloseLines),
  ], provenance);
}

export function sampleExternalMessages() {
  const provenance = externalMessageProvenance({
    model: "gpt-5.5",
    reasoning: "high",
    reviewedSha: "ba0f2e948fc0cafe1234567890abcdef12345678",
  });
  const baseAction = {
    evidence: [
      "The same reproduction is tracked on the canonical thread.",
      { detail: "The replacement PR carries the current validation path." },
    ],
  };
  return [
    {
      title: "Contributor Branch Repair",
      body: repairContributorBranchComment({
        sourcePrUrl: "https://github.com/openclaw/openclaw/pull/12345",
        validationCommands: ["pnpm test:serial src/example.test.ts", "pnpm check:changed"],
        provenance,
      }),
    },
    {
      title: "Replacement PR Link",
      body: replacementSourceLinkComment({
        replacementPrUrl: "https://github.com/openclaw/openclaw/pull/67890",
        sourcePrUrl: "https://github.com/openclaw/openclaw/pull/12345",
        provenance,
      }),
    },
    {
      title: "Replacement PR Close",
      body: replacementSourceCloseComment({
        replacementPrUrl: "https://github.com/openclaw/openclaw/pull/67890",
        sourcePrUrl: "https://github.com/openclaw/openclaw/pull/12345",
        provenance,
      }),
    },
    {
      title: "Replacement PR Body",
      body: replacementPrBody({
        clusterId: "ghcrawl-123456-agentic-merge",
        fixArtifact: {
          pr_body: "Fixes the focused provider auth regression.\n\nValidation: `pnpm check:changed`",
          source_prs: ["https://github.com/openclaw/openclaw/pull/12345"],
          credit_notes: ["Thanks @contributor for the original report and branch."],
          validation_commands: ["pnpm check:changed"],
        },
        fallbackReason: "source branch was not safely writable",
        provenance,
      }),
    },
    {
      title: "Duplicate Closeout",
      body: defaultCloseComment({
        action: baseAction,
        classification: "duplicate",
        clusterId: "ghcrawl-123456-agentic-merge",
        target: 54321,
        title: "Duplicate provider auth bug",
        canonical: 12345,
        reason: "duplicate of the canonical thread",
        provenance,
      }),
    },
    {
      title: "Low-Signal Closeout",
      body: defaultCloseComment({
        action: { evidence: ["No current validation or focused OpenClaw change was present."] },
        classification: "low_signal",
        clusterId: "low-signal-pr-sweep-20260427T0530-01",
        target: 55555,
        title: "Unscoped cleanup draft",
        reason: "low-signal PR cleanup",
        provenance,
      }),
    },
    {
      title: "Post-Merge Closeout",
      body: postMergeCloseoutComment({
        actionName: "close_fixed_by_candidate",
        fixUrl: "https://github.com/openclaw/openclaw/pull/67890",
        provenance,
      }),
    },
  ];
}
