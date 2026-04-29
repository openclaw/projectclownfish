---
repo: openclaw/openclaw
cluster_id: gitcrawl-1956-dedupe-only-20260429-remote
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
  - "#37834"
candidates:
  - "#52421"
  - "#58608"
cluster_refs:
  - "#37834"
  - "#42112"
  - "#42607"
  - "#44196"
  - "#46319"
  - "#48354"
  - "#50059"
  - "#50094"
  - "#51423"
  - "#52024"
  - "#52421"
  - "#53781"
  - "#54462"
  - "#58608"
  - "#58924"
  - "#66775"
  - "#69846"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #37834 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1956 on 2026-04-29."
---

# Gitcrawl Cluster 1956

Generated from local gitcrawl run cluster 1956 for `openclaw/openclaw`.

Display title:

> Session context corruption: orphaned tool_use ID causes permanent 400 loop after abort

Cluster shape from gitcrawl:

- total members: 17
- issues: 17
- pull requests: 0
- open candidates in local store: 2
- representative: #37834, currently closed in local store
- latest member update: 2026-04-28T05:49:58.648184587Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #37834 Session context corruption: orphaned tool_use ID causes permanent 400 loop after abort
- #42112 Bug: persisted orphaned toolCall poisons session replay and makes chat agent stop responding
- #42607 Orphan tool_result causes 400 error after API overload/error during tool call
- #44196 Session corruption loop: API timeout during tool_use causes permanent broken state
- #46319 Context pruning can split tool_use/tool_result pairs, causing API validation errors
- #48354 Session corruption: 164 failures from orphaned tool_use blocks — need auto-recovery + repair in validateAnthropicTurns
- #50059 Bug: Orphaned tool_result after API error mid-tool-call corrupts session permanently
- #50094 [Bug]: Compactor preserves orphaned tool_use blocks, causing Anthropic API 400 errors on model switch
- #51423 Compaction breaks tool_use/tool_result pairing — API rejects orphaned tool_result
- #52024 Context trimmer splits tool_use/tool_result pairs, causing API rejection
- #53781 [Bug]: Session not recovered after gateway crash — orphaned tool_use blocks cause permanent LLM rejection
- #54462 Auto-recovery for tool_use_id session corruption errors
- #58924 lossless-claw: orphaned tool_use blocks in lcm.db after model switch cause permanent Anthropic API failures
- #66775 Long-running tool call may fail with missing tool result in session history while underlying task continues
- #69846 Session corruption: truncated streaming tool call stores unescaped newline in partialJson, causing persistent JSON parse error

Open candidates:

- #52421 LLM API error: unexpected tool_use_id in tool_result blocks causes session disruption
- #58608 Session corruption from orphaned tool_result blocks survives restart (overload/timeout interruption)
