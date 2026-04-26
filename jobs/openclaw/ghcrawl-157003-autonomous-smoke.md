---
repo: openclaw/openclaw
cluster_id: ghcrawl-157003-autonomous-smoke
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
  - "#40067"
candidates:
  - "#40067"
  - "#60576"
cluster_refs:
  - "#40067"
  - "#60576"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #40067 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 157003 on 2026-04-26."
---

# GHCrawl Cluster 157003

Generated from local ghcrawl run cluster 157003 for `openclaw/openclaw`.

Display title:

> fix(gateway): do not crash on Playwright dialog race unhandled rejection

Cluster shape from ghcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #40067, currently open in local store
- latest member update: 2026-04-25T07:30:10.785Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40067 fix(gateway): do not crash on Playwright dialog race unhandled rejection
- #60576 fix(infra): treat undefined/null unhandled rejections as non-fatal
