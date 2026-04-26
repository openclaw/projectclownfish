---
repo: openclaw/openclaw
cluster_id: ghcrawl-156852-autonomous-smoke
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
  - "#58216"
candidates:
  - "#51252"
  - "#58216"
  - "#61134"
cluster_refs:
  - "#51252"
  - "#58216"
  - "#61134"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #58216 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156852 on 2026-04-26."
---

# GHCrawl Cluster 156852

Generated from local ghcrawl run cluster 156852 for `openclaw/openclaw`.

Display title:

> fix(discord): suppress reconnect-exhausted error during health-monitor stale-socket restart

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #58216, currently open in local store
- latest member update: 2026-04-24T18:56:25.246Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #51252 fix: prevent watchdog clock reset during reconnect stall cycles
- #58216 fix(discord): suppress reconnect-exhausted error during health-monitor stale-socket restart
- #61134 fix(discord): catch synchronous throw from Carbon during health-monitor abort
