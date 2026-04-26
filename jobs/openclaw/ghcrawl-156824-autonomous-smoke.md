---
repo: openclaw/openclaw
cluster_id: ghcrawl-156824-autonomous-smoke
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
  - "#46835"
candidates:
  - "#46833"
  - "#46835"
  - "#56997"
cluster_refs:
  - "#46833"
  - "#46835"
  - "#56997"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #46835 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156824 on 2026-04-26."
---

# GHCrawl Cluster 156824

Generated from local ghcrawl run cluster 156824 for `openclaw/openclaw`.

Display title:

> Display multiple channel sessions in Control UI sidebar

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #46835, currently open in local store
- latest member update: 2026-04-24T18:56:30.721Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #46833 Display multiple channel sessions in Control UI sidebar
- #46835 Display multiple channel sessions in Control UI sidebar
- #56997 [Feature] Control UI: Support channel-based session view toggle
