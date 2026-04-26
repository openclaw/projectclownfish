---
repo: openclaw/openclaw
cluster_id: ghcrawl-156656-autonomous-smoke
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
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#43524"
candidates:
  - "#37955"
  - "#43524"
  - "#45608"
  - "#50891"
  - "#56072"
cluster_refs:
  - "#37955"
  - "#43524"
  - "#45608"
  - "#50891"
  - "#56072"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #43524 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156656 on 2026-04-26."
---

# GHCrawl Cluster 156656

Generated from local ghcrawl run cluster 156656 for `openclaw/openclaw`.

Display title:

> Daily reset doesn't trigger session-memory hook flush

Cluster shape from ghcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #43524, currently open in local store
- latest member update: 2026-04-24T18:56:30.304Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #37955 session-memory hook: idle/daily session rollovers don't fire command:new/reset event
- #43524 Daily reset doesn't trigger session-memory hook flush
- #45608 [Feature]: Pre-reset agentic memory flush — /new and daily reset should get the same memory flush as compaction
- #50891 Session reset hooks: idle/daily reset do not trigger session-memory save
- #56072 Daily session reset silently discards context without memory flush or compaction
