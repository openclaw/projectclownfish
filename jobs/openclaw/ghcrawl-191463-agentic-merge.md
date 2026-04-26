---
repo: openclaw/openclaw
cluster_id: ghcrawl-191463-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#61130"
candidates:
  - "#39692"
  - "#52776"
  - "#61073"
  - "#61080"
  - "#61092"
  - "#61104"
  - "#61112"
  - "#61119"
  - "#61130"
cluster_refs:
  - "#39692"
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
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #61130 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 191463 on 2026-04-26."
---

# GHCrawl Cluster 191463

Generated from local ghcrawl run cluster 191463 for `openclaw/openclaw`.

Display title:

> UI: localize command palette labels

Cluster shape from ghcrawl:

- total members: 9
- issues: 0
- pull requests: 9
- open candidates in local store: 9
- representative: #61130, currently open in local store
- latest member update: 2026-04-26T21:32:45.576Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39692 Localize control UI hardcoded strings to zh-CN
- #52776 UI: localize Control UI shell labels
- #61073 UI: localize instances hardcoded labels
- #61080 UI: localize logs hardcoded labels
- #61092 UI: localize skills hardcoded labels
- #61104 UI: localize agent tools and skills labels
- #61112 UI: localize markdown sidebar labels
- #61119 UI: localize connect command labels
- #61130 UI: localize command palette labels
