---
repo: openclaw/openclaw
cluster_id: ghcrawl-156651-autonomous-smoke
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
  - "#61103"
candidates:
  - "#61103"
  - "#61516"
  - "#62371"
  - "#65281"
  - "#67414"
  - "#67927"
cluster_refs:
  - "#61103"
  - "#61516"
  - "#62371"
  - "#65281"
  - "#67414"
  - "#67927"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #61103 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156651 on 2026-04-26."
---

# GHCrawl Cluster 156651

Generated from local ghcrawl run cluster 156651 for `openclaw/openclaw`.

Display title:

> [Bug]:  Control UI screenshot/image upload broken after upgrade to 2026.4.2

Cluster shape from ghcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 6
- representative: #61103, currently open in local store
- latest member update: 2026-04-24T18:56:23.683Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #61103 [Bug]:  Control UI screenshot/image upload broken after upgrade to 2026.4.2
- #61516 [Bug]:
- #62371 [Bug]:
- #65281 [Bug]: [Control UI] Image paste/send not working in webchat after v2026.4.10
- #67414 [Bug]: Control UI: Pasted images show as blank preview + images reprocessed on every history load
- #67927 [Bug]: OpenClaw 2026.4.15 Image Upload Bug Report
