---
repo: openclaw/openclaw
cluster_id: gitcrawl-2612-dedupe-only-20260429-remote
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
  - "#12590"
candidates:
  - "#12590"
  - "#47143"
  - "#50611"
  - "#50795"
  - "#57901"
  - "#62420"
  - "#63216"
  - "#69269"
  - "#69270"
cluster_refs:
  - "#12590"
  - "#41356"
  - "#43854"
  - "#44061"
  - "#45360"
  - "#47143"
  - "#50611"
  - "#50795"
  - "#51408"
  - "#52700"
  - "#53546"
  - "#55679"
  - "#57901"
  - "#59863"
  - "#62420"
  - "#62614"
  - "#63216"
  - "#63542"
  - "#65501"
  - "#66058"
  - "#68580"
  - "#69269"
  - "#69270"
  - "#69286"
  - "#69287"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #12590 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2612 on 2026-04-29."
---

# Gitcrawl Cluster 2612

Generated from local gitcrawl run cluster 2612 for `openclaw/openclaw`.

Display title:

> [Bug]: `memoryFlush` does not fire reliably

Cluster shape from gitcrawl:

- total members: 25
- issues: 24
- pull requests: 1
- open candidates in local store: 9
- representative: #12590, currently open in local store
- latest member update: 2026-04-28T22:51:07.13862084Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41356 MemoryFlush not triggering - tokens exceed threshold but flush never fires
- #43854 compaction.model config not passed through safeguard compaction path
- #44061 Compaction not triggering in safeguard mode (269% context, 0 compactions)
- #45360 Memory flush fires after compaction: shouldRunMemoryFlush underestimates context size by omitting outputTokens
- #51408 compaction safeguard may inherit polluted runtime/model via sessionManager-scoped state
- #52700 compaction safeguard may inherit polluted runtime/model via sessionManager-scoped state
- #53546 compaction safeguard may inherit polluted runtime/model via sessionManager-scoped state, causing wrong model-snapshot + false compaction on main session
- #55679 [Bug]: memoryFlush never triggers — token projection underestimates by ignoring output tokens
- #59863 agents.defaults.compaction.model appears unused / dead config in runtime
- #62614 [Bug]: Retry storm can repeatedly resend oversized session context after timeouts/rate limits, causing runaway token burn
- #63542 memoryFlush.softThresholdTokens never fires in safeguard compaction mode
- #65501 forceFlushTranscriptBytes is a no-op on fresh sessions (agent-runner:1194)
- #66058 [v1.x.x] memoryFlush + softThresholdTokens=4000 causes infinite compaction loop (100% CPU)
- #68580 [Bug] Auto-compaction (threshold-based) never fires in embedded runner
- #69286 Bug: session totalTokens not reset after compaction causes infinite safeguard loop
- #69287 Bug: Session token count not reset after compaction

Open candidates:

- #12590 [Bug]: `memoryFlush` does not fire reliably
- #47143 memoryFlush never triggers when compactionCount and memoryFlushCompactionCount are both 0
- #50611 memory flush never triggers when reserveTokensFloor equals contextWindow
- #50795 Bug: Context token count always shows 0 after compaction
- #57901 Safeguard compaction ignores compaction.model config — uses session model instead
- #62420 Bug: in-turn auto-compaction can bypass memoryFlush because memoryFlush only runs pre-turn
- #63216 [Bug]: Repeated hard resets on same session key despite high reserveTokensFloor; retry loop re-injects bootstrap context
- #69269 Bug: compaction/reset paths can break session invariants (messageProvider + token accounting)
- #69270 fix(compaction): restore session invariants across compaction and reset
