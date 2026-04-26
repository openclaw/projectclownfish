---
repo: openclaw/openclaw
cluster_id: ghcrawl-156835-autonomous-smoke
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
  - "#48708"
candidates:
  - "#48708"
  - "#49268"
  - "#56293"
cluster_refs:
  - "#48708"
  - "#49268"
  - "#56293"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #48708 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156835 on 2026-04-26."
---

# GHCrawl Cluster 156835

Generated from local ghcrawl run cluster 156835 for `openclaw/openclaw`.

Display title:

> Feature: TUI chat message timestamps

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #48708, currently open in local store
- latest member update: 2026-04-24T18:56:30.259Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #48708 Feature: TUI chat message timestamps
- #49268 TUI: Add optional message timestamps
- #56293 [Feature]: [TUI] Add optional message timestamps to chat view
