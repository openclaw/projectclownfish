---
repo: openclaw/openclaw
cluster_id: gitcrawl-14028-dedupe-only-20260429-remote
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#55019"
candidates:
  - "#37661"
  - "#44910"
  - "#63188"
  - "#63210"
  - "#64362"
  - "#68620"
cluster_refs:
  - "#37661"
  - "#42132"
  - "#44910"
  - "#47262"
  - "#50341"
  - "#51659"
  - "#55019"
  - "#56691"
  - "#62313"
  - "#63188"
  - "#63210"
  - "#64362"
  - "#65152"
  - "#68620"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #55019 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14028 on 2026-04-29."
---

# Gitcrawl Cluster 14028

Generated from local gitcrawl run cluster 14028 for `openclaw/openclaw`.

Display title:

> [Bug]: Telegram/Codex response corruption after provider failure — truncated replies, leaked internal reply tag, and malformed final delivery

Cluster shape from gitcrawl:

- total members: 14
- issues: 14
- pull requests: 0
- open candidates in local store: 6
- representative: #55019, currently closed in local store
- latest member update: 2026-04-28T07:04:52.184641684Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #42132 Regression in 2026.3.8?: raw Codex/OpenAI server_error JSON is surfaced directly to user chat
- #47262 Telegram long replies intermittently terminate (embedded_run_agent_end: terminated) and may resend
- #50341 Agent hangs after user message - partial output not resumed
- #51659 Telegram responses not sent - missing "run done" event
- #55019 [Bug]: Telegram/Codex response corruption after provider failure — truncated replies, leaked internal reply tag, and malformed final delivery
- #56691 openai-codex provider drops inbound user message in agent dispatch
- #62313 [Bug]: LLM idle timeout causes duplicate message delivery — previous assistant reply re-sent verbatim
- #65152 [Bug]: openai-codex provider (chatgpt.com/backend-api) never emits function_call in main agent sessions — model receives no tool definitions

Open candidates:

- #37661 [Bug]: LLM streaming output infinite loop - same phrase repeated 40+ times
- #44910 [BUG] OpenAI Codex errors leak into user chat
- #63188 [Feature]: Agent Runtime: Configurable stopReason="length" catch-and-continue for mode:"run" sessions
- #63210 [Feature]: Detect and recover from output truncation (stopReason:"length") in main agent sessions
- #64362 Main agent response lost after tool execution (dead-pid session lock cleanup)
- #68620 Stuck session not auto-killed — API call hung for 49 minutes blocking Telegram session
