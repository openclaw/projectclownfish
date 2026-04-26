---
repo: openclaw/openclaw
cluster_id: ghcrawl-156801-autonomous-smoke
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
  - "#53327"
candidates:
  - "#43696"
  - "#53327"
  - "#55033"
cluster_refs:
  - "#43696"
  - "#53327"
  - "#55033"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #53327 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156801 on 2026-04-26."
---

# GHCrawl Cluster 156801

Generated from local ghcrawl run cluster 156801 for `openclaw/openclaw`.

Display title:

> [Feature Request] Add Feishu Calendar API Support

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #53327, currently open in local store
- latest member update: 2026-04-24T18:56:31.557Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #43696 Feature request: feishu_calendar tool — create events, invite attendees, book meeting rooms
- #53327 [Feature Request] Add Feishu Calendar API Support
- #55033 feat(feishu): 缺少日历（Calendar）API 支持
