---
repo: openclaw/openclaw
cluster_id: gitcrawl-16665-dedupe-only-20260429-remote
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
  - "#56072"
candidates:
  - "#45608"
  - "#56072"
cluster_refs:
  - "#37955"
  - "#39694"
  - "#41216"
  - "#41518"
  - "#43524"
  - "#45608"
  - "#50891"
  - "#53305"
  - "#56072"
  - "#60514"
  - "#67167"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #56072 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 16665 on 2026-04-29."
---

# Gitcrawl Cluster 16665

Generated from local gitcrawl run cluster 16665 for `openclaw/openclaw`.

Display title:

> Daily session reset silently discards context without memory flush or compaction

Cluster shape from gitcrawl:

- total members: 11
- issues: 11
- pull requests: 0
- open candidates in local store: 2
- representative: #56072, currently open in local store
- latest member update: 2026-04-28T17:25:21.541790213Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #37955 session-memory hook: idle/daily session rollovers don't fire command:new/reset event
- #39694 [Feature]: Session lifecycle hooks — onBeforeNew / onBeforeCompact
- #41216 Feature request: memory flush before /new and /restart session reset
- #41518 Feature request: session-end hook for memory flush / post-session callback
- #43524 Daily reset doesn't trigger session-memory hook flush
- #50891 Session reset hooks: idle/daily reset do not trigger session-memory save
- #53305 Feature request: session-end and periodic memory flush for long-lived thread sessions
- #60514 Feature Request: session:end hook + autoDream equivalent capabilities
- #67167 [Feature Request]: Session Lifecycle Hooks (PreCompact + Stop hooks)

Open candidates:

- #45608 [Feature]: Pre-reset agentic memory flush — /new and daily reset should get the same memory flush as compaction
- #56072 Daily session reset silently discards context without memory flush or compaction
