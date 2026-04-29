import assert from "node:assert/strict";
import test from "node:test";

import { automergeRepairOutcomeComment } from "../scripts/external-messages.mjs";

test("automergeRepairOutcomeComment explains no-op repair runs", () => {
  const body = automergeRepairOutcomeComment({
    marker: "<!-- marker -->",
    target: 74156,
    report: { reason: "no planned fix actions" },
    result: {
      summary: "Worker found no executable fix artifact.",
      actions: [
        {
          target: "#74156",
          action: "route_security",
          status: "planned",
          reason: "central handling required",
        },
      ],
    },
    provenance: { model: "gpt-test", reasoning: "medium", reviewedSha: "0123456789abcdef" },
  });

  assert.match(body, /^<!-- marker -->/);
  assert.match(body, /Repair pass finished without changing this PR/);
  assert.match(body, /Executor outcome: no planned fix actions\./);
  assert.match(body, /`route_security` on `#74156`: planned - central handling required/);
  assert.match(body, /No branch push, rebase, replacement PR, merge, or ClawSweeper re-review/);
  assert.match(body, /model gpt-test, reasoning medium; reviewed against 0123456789ab/);
});
