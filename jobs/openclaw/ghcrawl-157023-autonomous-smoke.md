---
repo: openclaw/openclaw
cluster_id: ghcrawl-157023-autonomous-smoke
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
  - "#41030"
candidates:
  - "#41030"
  - "#45712"
cluster_refs:
  - "#41030"
  - "#45712"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #41030 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 157023 on 2026-04-26."
---

# GHCrawl Cluster 157023

Generated from local ghcrawl run cluster 157023 for `openclaw/openclaw`.

Display title:

> fix(gateway): avoid false stuck restarts with fresh events

Cluster shape from ghcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #41030, currently open in local store
- latest member update: 2026-04-24T18:56:28.669Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41030 fix(gateway): avoid false stuck restarts with fresh events
- #45712 fix(health-monitor): add reconnect grace period to prevent excessive Discord restarts
