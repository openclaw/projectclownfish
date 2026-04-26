---
repo: openclaw/openclaw
cluster_id: ghcrawl-156814-autonomous-smoke
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
  - "#54413"
candidates:
  - "#45500"
  - "#54413"
  - "#54658"
cluster_refs:
  - "#45500"
  - "#54413"
  - "#54658"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #54413 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156814 on 2026-04-26."
---

# GHCrawl Cluster 156814

Generated from local ghcrawl run cluster 156814 for `openclaw/openclaw`.

Display title:

> Discord delivery silently drops messages after response termination + retry

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #54413, currently open in local store
- latest member update: 2026-04-24T18:56:30.968Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45500 Duplicate Discord message delivery on LLM retry after partial delivery
- #54413 Discord delivery silently drops messages after response termination + retry
- #54658 Silent message delivery failure: AI response generated but never delivered to Discord
