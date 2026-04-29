---
repo: openclaw/openclaw
cluster_id: gitcrawl-2791-dedupe-only-20260429-remote
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
  - "#42158"
candidates:
  - "#43661"
  - "#45686"
  - "#48238"
  - "#54383"
  - "#58838"
  - "#64960"
  - "#64962"
  - "#67750"
cluster_refs:
  - "#40295"
  - "#42158"
  - "#43661"
  - "#44031"
  - "#45492"
  - "#45686"
  - "#48238"
  - "#52011"
  - "#54383"
  - "#55103"
  - "#58838"
  - "#61290"
  - "#61852"
  - "#64960"
  - "#64962"
  - "#67750"
  - "#69202"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #42158 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2791 on 2026-04-29."
---

# Gitcrawl Cluster 2791

Generated from local gitcrawl run cluster 2791 for `openclaw/openclaw`.

Display title:

> Compaction summarization failure creates stuck-session retry loop

Cluster shape from gitcrawl:

- total members: 17
- issues: 17
- pull requests: 0
- open candidates in local store: 8
- representative: #42158, currently closed in local store
- latest member update: 2026-04-28T07:59:25.981164883Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40295 Compaction deadlock blocks session recovery (/new, /reset queue behind timed-out compaction)
- #42158 Compaction summarization failure creates stuck-session retry loop
- #44031 Compaction timeout: add escape hatch to prevent session hang
- #45492 Compaction late success leaves /status compactionCount stale after timeout
- #52011 feat: compaction model fallbacks when primary model is unreachable
- #55103 Compaction summarization fails silently when context exceeds limit, resulting in 'Summary unavailable'
- #61290 Auto-compaction detected but never executes — session hangs for 10+ minutes then times out (compactionAttempts=0)
- #61852 Compaction max_tokens exceeds model output limit, crashes gateway
- #69202 Compaction failure leaves session in permanent failed state with no automatic recovery

Open candidates:

- #43661 Session hangs indefinitely when compaction times out, causing repeated duplicate message sends
- #45686 Compaction circuit breaker: fallback model + force-truncate after repeated failures
- #48238 Add loop-aware compaction guard for saturated sessions
- #54383 Compaction fails with 1M context: max_tokens 240000 > 128000 for Anthropic models
- #58838 fix(compaction): retry loop can burn tokens when summarizer model is unavailable
- #64960 Compaction fails permanently when Azure content filter blocks summarization — no model fallback
- #64962 Timeout-compaction doesn't escalate when compaction fails to reduce context
- #67750 [Bug]: Successful auto-compaction can still end in a 120s embedded timeout and generic `/new` fallback
