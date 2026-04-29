import assert from "node:assert/strict";
import test from "node:test";

import {
  MERGE_INTENTS,
  REPAIR_INTENTS,
  automergeGateBlockReason,
  buildAutomergeMergeArgs,
  parseCommand,
  parseTrustedAutomation,
  renderResponse,
} from "../scripts/comment-router-core.mjs";

test("parseCommand recognizes maintainer slash commands", () => {
  assert.deepEqual(parseCommand("/clownfish fix ci"), {
    trigger: "slash",
    command: "fix ci",
    intent: "fix_ci",
  });
  assert.deepEqual(parseCommand("notes\n  /clownfish address   review  \nthanks"), {
    trigger: "slash",
    command: "address review",
    intent: "address_review",
  });
  assert.deepEqual(parseCommand("/clownfish"), {
    trigger: "slash",
    command: "status",
    intent: "status",
  });
  assert.deepEqual(parseCommand("/clownfish automerge"), {
    trigger: "slash",
    command: "automerge",
    intent: "automerge",
  });
});

test("parseCommand recognizes Clownfish bot mentions", () => {
  assert.deepEqual(parseCommand("@openclaw-clownfish[bot] rebase"), {
    trigger: "mention",
    command: "rebase",
    intent: "rebase",
  });
  assert.deepEqual(parseCommand("@openclaw-clownfish explain"), {
    trigger: "mention",
    command: "explain",
    intent: "explain",
  });
});

test("parseCommand ignores unrelated comments", () => {
  assert.equal(parseCommand("please fix ci when you get a chance"), null);
  assert.equal(parseCommand("/not-clownfish fix ci"), null);
});

test("parseTrustedAutomation accepts only trusted ClawSweeper repair signals", () => {
  const trustedAuthors = new Set(["clawsweeper[bot]"]);
  const comment = {
    user: { login: "clawsweeper[bot]" },
    body: "Codex review:\n<!-- clawsweeper-action: fix-required -->\nPlease fix this before merge.",
  };

  const parsed = parseTrustedAutomation(comment, { trustedAuthors });
  assert.equal(parsed.intent, "clawsweeper_auto_repair");
  assert.equal(parsed.trusted_bot, true);
  assert.equal(parsed.trusted_bot_author, "clawsweeper[bot]");
  assert.match(parsed.repair_reason, /structured ClawSweeper/);

  assert.equal(parseTrustedAutomation({ ...comment, user: { login: "random-user" } }, { trustedAuthors }), null);
});

test("parseTrustedAutomation accepts trusted ClawSweeper pass verdicts for automerge", () => {
  const trustedAuthors = new Set(["clawsweeper[bot]"]);
  const parsed = parseTrustedAutomation(
    {
      user: { login: "clawsweeper[bot]" },
      body: "ClawSweeper review passed.\n<!-- clawsweeper-verdict:pass sha=abc123 -->",
    },
    { trustedAuthors },
  );

  assert.equal(parsed.intent, "clawsweeper_auto_merge");
  assert.equal(parsed.expected_head_sha, "abc123");
  assert.match(parsed.repair_reason, /verdict: pass/);
});

test("parseTrustedAutomation accepts trusted ClawSweeper human-review verdicts", () => {
  const trustedAuthors = new Set(["clawsweeper[bot]"]);
  const parsed = parseTrustedAutomation(
    {
      user: { login: "clawsweeper[bot]" },
      body: "ClawSweeper needs maintainer judgment.\n<!-- clawsweeper-verdict:needs-human sha=abc123 -->",
    },
    { trustedAuthors },
  );

  assert.equal(parsed.intent, "clawsweeper_needs_human");
  assert.equal(parsed.expected_head_sha, "abc123");
});

test("parseTrustedAutomation falls back to actionable ClawSweeper review text", () => {
  const trustedAuthors = new Set(["clawsweeper[bot]"]);
  const parsed = parseTrustedAutomation(
    {
      user: { login: "clawsweeper[bot]" },
      body: "ClawSweeper review: this PR still has failing checks; please fix.",
    },
    { trustedAuthors },
  );

  assert.equal(parsed.intent, "clawsweeper_auto_repair");
  assert.match(parsed.repair_reason, /keep repairing/);

  const ignored = parseTrustedAutomation(
    {
      user: { login: "clawsweeper[bot]" },
      body: "ClawSweeper review: looks good, no actionable findings.",
    },
    { trustedAuthors },
  );
  assert.equal(ignored, null);
});

test("renderResponse keeps public command replies friendly and scoped", () => {
  const command = {
    comment_id: "123",
    intent: "help",
    target: { head_sha: "abc123" },
  };

  const body = renderResponse(command, null);
  assert.match(body, /Clownfish is here and listening/);
  assert.match(body, /only act for maintainers/);
  assert.doesNotMatch(body, /ProjectClownfish/i);
});

test("renderResponse reports trusted repair dispatches without losing guardrails", () => {
  const body = renderResponse(
    {
      comment_id: "456",
      intent: "clawsweeper_auto_repair",
      trusted_bot_author: "clawsweeper[bot]",
      repair_reason: "structured ClawSweeper marker: fix-required",
      target: { head_sha: "def456" },
    },
    {
      workflow: "cluster-worker.yml",
      job_path: "jobs/openclaw/inbox/example.md",
      mode: "autonomous",
      model: "gpt-5.5",
    },
  );

  assert.match(body, /Thanks, ClawSweeper/);
  assert.match(body, /cluster-worker\.yml/);
  assert.match(body, /safe, narrow fix/);
  assert.doesNotMatch(body, /ProjectClownfish/i);
});

test("renderResponse reports automerge completion", () => {
  const body = renderResponse(
    {
      comment_id: "789",
      intent: "clawsweeper_auto_merge",
      trusted_bot_author: "clawsweeper[bot]",
      repair_reason: "structured ClawSweeper verdict: pass",
      target: { head_sha: "abc789" },
    },
    {
      merge: {
        status: "executed",
        reason: "merged by Clownfish automerge",
        merged_at: "2026-04-29T05:00:00Z",
      },
    },
  );

  assert.match(body, /merged this PR/);
  assert.match(body, /automerge loop is complete/);
  assert.doesNotMatch(body, /ProjectClownfish/i);
});

test("repair intent set documents executable repair commands", () => {
  assert.deepEqual([...REPAIR_INTENTS].sort(), [
    "address_review",
    "clawsweeper_auto_repair",
    "fix_ci",
    "rebase",
  ]);
});

test("merge intent set documents ClawSweeper pass automerge", () => {
  assert.deepEqual([...MERGE_INTENTS], ["clawsweeper_auto_merge"]);
});

test("automerge merge args pin the reviewed head SHA", () => {
  assert.deepEqual(
    buildAutomergeMergeArgs({ issueNumber: 123, repo: "openclaw/openclaw", expectedHeadSha: "abc123" }),
    ["pr", "merge", "123", "--repo", "openclaw/openclaw", "--squash", "--match-head-commit", "abc123"],
  );
});

test("automerge gate block only reports closed merge policy gates", () => {
  assert.equal(
    automergeGateBlockReason({ CLOWNFISH_ALLOW_MERGE: "0", CLOWNFISH_ALLOW_AUTOMERGE: "1" }),
    "merge requires CLOWNFISH_ALLOW_MERGE=1",
  );
  assert.equal(
    automergeGateBlockReason({ CLOWNFISH_ALLOW_MERGE: "1", CLOWNFISH_ALLOW_AUTOMERGE: "0" }),
    "automerge requires CLOWNFISH_ALLOW_AUTOMERGE=1",
  );
  assert.equal(automergeGateBlockReason({ CLOWNFISH_ALLOW_MERGE: "1", CLOWNFISH_ALLOW_AUTOMERGE: "1" }), "");
});
