const SIGNATURE = "Clownfish 🐠";
const EVIDENCE_LIMIT = 5;

function listOrNone(items) {
  return items?.length ? items.join("; ") : "none";
}

function issueRef(value) {
  return value ? `#${value}` : "";
}

function evidenceLines(evidence) {
  return (Array.isArray(evidence) ? evidence : [])
    .slice(0, EVIDENCE_LIMIT)
    .map((item) => `- ${typeof item === "string" ? item : (item.detail ?? JSON.stringify(item))}`);
}

export function repairContributorBranchComment({ sourcePrUrl, validationCommands }) {
  return [
    `${SIGNATURE} update`,
    "",
    "Thanks for the contribution here. Clownfish pushed a narrow repair to this branch so the original PR can stay the canonical path instead of opening a replacement.",
    "",
    `Source PR: ${sourcePrUrl}`,
    `Validation: ${listOrNone(validationCommands)}`,
    "Contributor credit stays with this PR's history and changelog context.",
  ].join("\n");
}

export function replacementSourceLinkComment({ replacementPrUrl, sourcePrUrl }) {
  return [
    `${SIGNATURE} update`,
    "",
    "Thanks for the work on this. Clownfish could not safely update this branch, so it opened a narrow replacement PR to keep the fix moving without losing the trail.",
    "",
    `Replacement PR: ${replacementPrUrl}`,
    `Source PR: ${sourcePrUrl}`,
    "This source PR is staying open for maintainer and contributor review; automatic source-PR closing is disabled.",
    "Contributor credit is carried into the replacement PR body and changelog plan.",
  ].join("\n");
}

export function replacementSourceCloseComment({ replacementPrUrl, sourcePrUrl }) {
  return [
    `${SIGNATURE} update`,
    "",
    "Thanks for the work on this. Clownfish could not safely update this branch, so it opened a narrow replacement PR and is closing this source PR only because source-PR closing was explicitly enabled for this run.",
    "",
    `Replacement PR: ${replacementPrUrl}`,
    `Source PR: ${sourcePrUrl}`,
    "Contributor credit is carried into the replacement PR body and changelog plan.",
  ].join("\n");
}

export function replacementPrBody({ fixArtifact, fallbackReason, clusterId }) {
  const lines = [
    fixArtifact.pr_body.trim(),
    "",
    `${SIGNATURE} replacement details:`,
    `- Cluster: ${clusterId}`,
    `- Source PRs: ${(fixArtifact.source_prs ?? []).join(", ") || "none"}`,
    `- Credit: ${listOrNone(fixArtifact.credit_notes)}`,
    `- Validation: ${listOrNone(fixArtifact.validation_commands)}`,
  ];
  if (fallbackReason) lines.push(`- Repair fallback: ${fallbackReason}`);
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
}) {
  const lines = [`${SIGNATURE} closeout`, "", `Thanks for the report and context here. Clownfish reviewed this cluster and is closing #${target}.`];

  lines.push("");
  if (classification === "duplicate" && canonical) {
    lines.push(
      `This appears to duplicate ${issueRef(canonical)}. Clownfish is keeping ${issueRef(canonical)} as the canonical thread so fixes, validation, and follow-up stay in one place.`,
    );
  } else if (classification === "superseded" && canonical) {
    lines.push(
      `This is superseded by ${issueRef(canonical)}. Clownfish is keeping that thread as the canonical path so the useful context and contributor credit stay visible.`,
    );
  } else if (classification === "superseded" && candidateFix) {
    lines.push(
      `This is superseded by landed fix ${issueRef(candidateFix)}. Clownfish is closing this older overlap so validation and follow-up stay attached to the shipped path.`,
    );
  } else if (classification === "fixed_by_candidate" && candidateFix) {
    lines.push(
      `This is covered by candidate fix ${issueRef(candidateFix)}. Clownfish is closing this thread so validation and follow-up stay attached to that fix path.`,
    );
  } else if (classification === "low_signal") {
    lines.push(
      "This falls under low-signal PR cleanup: the PR does not currently present a reviewable OpenClaw fix with maintainer signal, current validation, or a focused product path. Please reopen from a clean branch with a scoped summary, linked issue or rationale, and validation if this is still needed.",
    );
  } else {
    lines.push(reason);
  }

  lines.push("", `Cluster: \`${clusterId}\``, `Reviewed item: #${target} - ${title}`);
  const renderedEvidence = evidenceLines(action.evidence);
  if (renderedEvidence.length) lines.push("", "Evidence:", ...renderedEvidence);
  lines.push(
    "",
    "If this has a different reproduction path or still reproduces after the canonical fix lands, reply here and we can reopen or split it back out.",
  );
  return lines.join("\n");
}

export function postMergeCloseoutComment({ actionName, fixUrl }) {
  const relation = actionName === "close_superseded" ? "superseded by" : "covered by";
  return [
    `${SIGNATURE} closeout`,
    "",
    `Thanks for the report and context here. This is ${relation} ${fixUrl}, which has landed as the canonical Clownfish fix path for this cluster.`,
    "",
    "Closing this now that the validated fix is merged. If this still reproduces on current main with a different path, reply here and we can reopen or split it back out.",
  ].join("\n");
}

export function sampleExternalMessages() {
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
      }),
    },
    {
      title: "Replacement PR Link",
      body: replacementSourceLinkComment({
        replacementPrUrl: "https://github.com/openclaw/openclaw/pull/67890",
        sourcePrUrl: "https://github.com/openclaw/openclaw/pull/12345",
      }),
    },
    {
      title: "Replacement PR Close",
      body: replacementSourceCloseComment({
        replacementPrUrl: "https://github.com/openclaw/openclaw/pull/67890",
        sourcePrUrl: "https://github.com/openclaw/openclaw/pull/12345",
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
      }),
    },
    {
      title: "Post-Merge Closeout",
      body: postMergeCloseoutComment({
        actionName: "close_fixed_by_candidate",
        fixUrl: "https://github.com/openclaw/openclaw/pull/67890",
      }),
    },
  ];
}
