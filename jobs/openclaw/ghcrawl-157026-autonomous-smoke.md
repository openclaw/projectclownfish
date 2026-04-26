---
repo: openclaw/openclaw
cluster_id: ghcrawl-157026-autonomous-smoke
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
  - "#41296"
candidates:
  - "#41296"
  - "#63084"
cluster_refs:
  - "#41296"
  - "#63084"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #41296 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 157026 on 2026-04-26."
---

# GHCrawl Cluster 157026

Generated from local ghcrawl run cluster 157026 for `openclaw/openclaw`.

Display title:

> fix(gateway): improve shutdown error visibility and add close timeout

Cluster shape from ghcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #41296, currently open in local store
- latest member update: 2026-04-25T07:30:09.541Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41296 fix(gateway): improve shutdown error visibility and add close timeout
- #63084 feat(hooks): emit gateway shutdown lifecycle events
