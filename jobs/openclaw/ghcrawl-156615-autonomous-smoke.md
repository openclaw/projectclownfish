---
repo: openclaw/openclaw
cluster_id: ghcrawl-156615-autonomous-smoke
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
  - "#61130"
candidates:
  - "#52776"
  - "#61073"
  - "#61080"
  - "#61092"
  - "#61104"
  - "#61112"
  - "#61119"
  - "#61130"
cluster_refs:
  - "#52776"
  - "#61073"
  - "#61080"
  - "#61092"
  - "#61104"
  - "#61112"
  - "#61119"
  - "#61130"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #61130 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156615 on 2026-04-26."
---

# GHCrawl Cluster 156615

Generated from local ghcrawl run cluster 156615 for `openclaw/openclaw`.

Display title:

> UI: localize command palette labels

Cluster shape from ghcrawl:

- total members: 8
- issues: 0
- pull requests: 8
- open candidates in local store: 8
- representative: #61130, currently open in local store
- latest member update: 2026-04-24T18:56:27.683Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #52776 UI: localize Control UI shell labels
- #61073 UI: localize instances hardcoded labels
- #61080 UI: localize logs hardcoded labels
- #61092 UI: localize skills hardcoded labels
- #61104 UI: localize agent tools and skills labels
- #61112 UI: localize markdown sidebar labels
- #61119 UI: localize connect command labels
- #61130 UI: localize command palette labels
