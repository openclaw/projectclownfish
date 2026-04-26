---
repo: openclaw/openclaw
cluster_id: ghcrawl-156771-autonomous-smoke
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
  - "#66161"
candidates:
  - "#39631"
  - "#51065"
  - "#66161"
cluster_refs:
  - "#39631"
  - "#51065"
  - "#66161"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #66161 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156771 on 2026-04-26."
---

# GHCrawl Cluster 156771

Generated from local ghcrawl run cluster 156771 for `openclaw/openclaw`.

Display title:

> Telegram surface leaks assistant pre-tool scratch/commentary into user-visible chat

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #66161, currently open in local store
- latest member update: 2026-04-24T18:56:25.558Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39631 Telegram: internal tool error message leaks into user chat on failed edit()
- #51065 Failed tool call narrations leak to Telegram as user-visible messages
- #66161 Telegram surface leaks assistant pre-tool scratch/commentary into user-visible chat
