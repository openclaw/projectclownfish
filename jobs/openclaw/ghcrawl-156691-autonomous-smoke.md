---
repo: openclaw/openclaw
cluster_id: ghcrawl-156691-autonomous-smoke
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
  - "#19075"
candidates:
  - "#19075"
  - "#45729"
  - "#51658"
  - "#57194"
cluster_refs:
  - "#19075"
  - "#45729"
  - "#51658"
  - "#57194"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #19075 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156691 on 2026-04-26."
---

# GHCrawl Cluster 156691

Generated from local ghcrawl run cluster 156691 for `openclaw/openclaw`.

Display title:

> [Feature]: Add baseUrl option for Brave Search provider

Cluster shape from ghcrawl:

- total members: 4
- issues: 3
- pull requests: 1
- open candidates in local store: 4
- representative: #19075, currently open in local store
- latest member update: 2026-04-26T00:46:51.703Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #19075 [Feature]: Add baseUrl option for Brave Search provider
- #45729 [Feature]: Add baseUrl override for Brave Search API
- #51658 [Feature]: Add support for custom Brave Search API baseUrl
- #57194 feat(web-search): add SearXNG as a search provider
