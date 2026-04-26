---
repo: openclaw/openclaw
cluster_id: ghcrawl-156711-autonomous-smoke
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
  - "#48671"
candidates:
  - "#41955"
  - "#48666"
  - "#48671"
  - "#66655"
cluster_refs:
  - "#41955"
  - "#48666"
  - "#48671"
  - "#66655"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #48671 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156711 on 2026-04-26."
---

# GHCrawl Cluster 156711

Generated from local ghcrawl run cluster 156711 for `openclaw/openclaw`.

Display title:

> fix(ui): include all known agents in webchat session dropdown

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #48671, currently open in local store
- latest member update: 2026-04-24T18:56:28.901Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41955 fix(control-ui): show all configured agents in webchat session dropdown
- #48666 fix: restore full agent list in webchat dropdown after session switch
- #48671 fix(ui): include all known agents in webchat session dropdown
- #66655 fix(control-ui): show configured thinkingDefault in dropdown
