import assert from "node:assert/strict";
import test from "node:test";

import {
  MERGE_INTENTS,
  REPAIR_INTENTS,
  automergeClusterId,
  automergeGateBlockReason,
  automergeJobBranch,
  automergeJobPath,
  buildAutomergeMergeArgs,
  isMaintainerCommandAllowed,
  parseCommand,
  parseTrustedAutomation,
  renderAutomergeJob,
  renderResponse,
} from "../scripts/comment-router-core.mjs";
import { parseSimpleYaml, validateJob } from "../scripts/lib.mjs";

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

test("automerge job helpers create stable adopted PR job identity", () => {
  assert.equal(automergeClusterId("openclaw/openclaw", 74112), "automerge-openclaw-openclaw-74112");
  assert.equal(automergeJobBranch("openclaw/openclaw", 74112), "clownfish/automerge-openclaw-openclaw-74112");
  assert.equal(automergeJobPath("openclaw/openclaw", 74112), "jobs/openclaw/inbox/automerge-openclaw-openclaw-74112.md");
});

test("renderAutomergeJob validates and keeps merge owned by router", () => {
  const raw = renderAutomergeJob({
    repo: "openclaw/openclaw",
    issueNumber: 74112,
    title: "Tighten cross-session message handling",
  });
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  assert.ok(match);
  const job = {
    frontmatter: parseSimpleYaml(match[1]),
    body: match[2].trim(),
  };

  assert.deepEqual(validateJob(job), []);
  assert.equal(job.frontmatter.source, "pr_automerge");
  assert.equal(job.frontmatter.allow_fix_pr, true);
  assert.equal(job.frontmatter.allow_merge, false);
  assert.deepEqual(job.frontmatter.blocked_actions, ["close", "merge"]);
  assert.deepEqual(job.frontmatter.allowed_actions, ["comment", "label", "fix", "raise_pr"]);
  assert.match(job.body, /repair_contributor_branch/);
  assert.match(job.body, /router owns final merge/);
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

test("parseTrustedAutomation treats trusted ClawSweeper needs-human as automerge repair input", () => {
  const trustedAuthors = new Set(["clawsweeper[bot]"]);
  const parsed = parseTrustedAutomation(
    {
      user: { login: "clawsweeper[bot]" },
      body: "ClawSweeper needs maintainer judgment.\n<!-- clawsweeper-verdict:needs-human sha=abc123 -->",
    },
    { trustedAuthors },
  );

  assert.equal(parsed.intent, "clawsweeper_auto_repair");
  assert.equal(parsed.expected_head_sha, "abc123");
  assert.match(parsed.repair_reason, /needs-human/);
});

test("parseTrustedAutomation preserves explicit human-review verdicts as pauses", () => {
  const trustedAuthors = new Set(["clawsweeper[bot]"]);
  const parsed = parseTrustedAutomation(
    {
      user: { login: "clawsweeper[bot]" },
      body: "ClawSweeper needs explicit human review.\n<!-- clawsweeper-verdict:human-review sha=abc123 -->",
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
      comment_version_key: "456:2026-04-29T07:12:31Z",
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
  assert.match(body, /clownfish-command:456:2026-04-29T07:12:31Z:clawsweeper_auto_repair:def456/);
  assert.match(body, /cluster-worker\.yml/);
  assert.match(body, /safe credited replacement/);
  assert.match(body, /narrow fix/);
  assert.doesNotMatch(body, /ProjectClownfish/i);
});

test("renderResponse reports automerge resume actions", () => {
  const body = renderResponse(
    {
      comment_id: "459",
      intent: "automerge",
      target: { head_sha: "def459" },
      actions: [{ action: "remove_label", label: "clownfish:human-review", status: "executed" }],
    },
    {
      clawsweeper: {
        workflow: "sweep.yml",
        event: "repository_dispatch",
      },
    },
  );

  assert.match(body, /cleared `clownfish:human-review`/);
  assert.match(body, /repair\/rebase/);
});

test("renderResponse reports needs-human automerge repair dispatches", () => {
  const body = renderResponse(
    {
      comment_id: "457",
      intent: "clawsweeper_auto_repair",
      trusted_bot_author: "clawsweeper[bot]",
      repair_reason: "structured ClawSweeper verdict: needs-human",
      target: { head_sha: "def457" },
    },
    {
      workflow: "cluster-worker.yml",
      job_path: "jobs/openclaw/inbox/automerge-openclaw-openclaw-74156.md",
      mode: "autonomous",
      model: "gpt-5.5",
    },
  );

  assert.match(body, /continuing the automerge repair loop/);
  assert.match(body, /cluster-worker\.yml/);
  assert.match(body, /automerge-openclaw-openclaw-74156/);
  assert.doesNotMatch(body, /did not dispatch/);
});

test("renderResponse reports explicit human-review pause actions", () => {
  const body = renderResponse(
    {
      comment_id: "458",
      intent: "clawsweeper_needs_human",
      trusted_bot_author: "clawsweeper[bot]",
      repair_reason: "structured ClawSweeper verdict: human-review",
      target: { head_sha: "def458" },
    },
    null,
  );

  assert.match(body, /pausing automerge/);
  assert.match(body, /regular `clownfish` label/);
  assert.doesNotMatch(body, /clownfish:human-review/);
  assert.doesNotMatch(body, /did not dispatch/);
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

test("maintainer command authorization falls back to repository permission", () => {
  const allowedAssociations = new Set(["OWNER", "MEMBER", "COLLABORATOR"]);
  assert.equal(
    isMaintainerCommandAllowed({
      authorAssociation: "MEMBER",
      repositoryPermission: null,
      allowedAssociations,
    }),
    true,
  );
  assert.equal(
    isMaintainerCommandAllowed({
      authorAssociation: "CONTRIBUTOR",
      repositoryPermission: "admin",
      allowedAssociations,
    }),
    true,
  );
  assert.equal(
    isMaintainerCommandAllowed({
      authorAssociation: "CONTRIBUTOR",
      repositoryPermission: "read",
      allowedAssociations,
    }),
    false,
  );
});
