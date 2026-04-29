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
    "Thanks for the contribution here. Clownfish gave this branch a little current boost so the original PR can stay the canonical swim lane instead of opening a replacement.",
    "",
    `Source PR: ${sourcePrUrl}`,
    `Validation: ${listOrNone(validationCommands)}`,
    "Contributor credit stays right here with this PR's history and changelog context. no lost treasure, no mystery bubbles.",
  ], provenance);
}

export function replacementSourceLinkComment({ replacementPrUrl, sourcePrUrl, provenance }) {
  return withFishNotes([
    `${SIGNATURE} reef update`,
    "",
    "Thanks for the work on this. Clownfish could not push to this branch with the permissions available, so it opened a narrow replacement PR to keep the fix swimming forward without losing the contributor trail. not your fault, just GitHub branch-permission tides.",
    "",
    `Replacement PR: ${replacementPrUrl}`,
    `Source PR: ${sourcePrUrl}`,
    "This source PR is staying open for maintainer and contributor review.",
    "Contributor credit is carried into the replacement PR body and changelog plan.",
  ], provenance);
}

export function replacementSourceCloseComment({ replacementPrUrl, sourcePrUrl, provenance }) {
  return withFishNotes([
    `${SIGNATURE} reef update`,
    "",
    "Thanks for the work on this. Clownfish could not push to this branch with the permissions available, so it opened a narrow replacement PR and is closing this source PR only because source-PR closing was explicitly enabled for this run. not your fault, just GitHub branch-permission tides.",
    "",
    `Replacement PR: ${replacementPrUrl}`,
    `Source PR: ${sourcePrUrl}`,
    "Contributor credit is carried into the replacement PR body and changelog plan.",
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
  const lines = [`${SIGNATURE} reef cleanup`, "", `Thanks for the report and the useful trail here. Clownfish reviewed this cluster and is closing #${target}.`];

  lines.push("");
  if (classification === "duplicate" && canonical) {
    lines.push(
      `This looks like the same school as ${issueRef(canonical)}, so Clownfish is keeping ${issueRef(canonical)} as the canonical thread where fixes, validation, and follow-up can all swim together.`,
    );
  } else if (classification === "superseded" && canonical) {
    lines.push(
      `This is superseded by ${issueRef(canonical)}. Clownfish is keeping that reef marker as the canonical path so the useful context and contributor credit stay visible.`,
    );
  } else if (classification === "superseded" && candidateFix) {
    lines.push(
      `This is superseded by landed fix ${issueRef(candidateFix)}. Clownfish is closing this older overlap so validation and follow-up stay attached to the shipped path instead of drifting around the reef.`,
    );
  } else if (classification === "fixed_by_candidate" && candidateFix) {
    lines.push(
      `This is covered by candidate fix ${issueRef(candidateFix)}. Clownfish is closing this thread so validation and follow-up stay attached to that fix path instead of scattering like bubbles.`,
    );
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
  lines.push(
    "",
    "If this still reproduces by a different route, reply here and we can fish it back out.",
  );
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
    "Closing this now that the validated fix is merged. If this still splashes on current main by a different path, reply here and we can reopen or split it back out.",
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
