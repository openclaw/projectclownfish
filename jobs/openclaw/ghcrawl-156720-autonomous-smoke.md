---
repo: openclaw/openclaw
cluster_id: ghcrawl-156720-autonomous-smoke
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
  - "#45270"
candidates:
  - "#45270"
  - "#52329"
  - "#63238"
  - "#65381"
cluster_refs:
  - "#45270"
  - "#52329"
  - "#63238"
  - "#65381"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #45270 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156720 on 2026-04-26."
---

# GHCrawl Cluster 156720

Generated from local ghcrawl run cluster 156720 for `openclaw/openclaw`.

Display title:

> fix(status): avoid misleading context usage when totalTokensFresh=false

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #45270, currently open in local store
- latest member update: 2026-04-24T18:56:29.320Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45270 fix(status): avoid misleading context usage when totalTokensFresh=false
- #52329 fix(agents): include cache tokens in /status cost estimate
- #63238 fix: treat empty status model overrides as unset
- #65381 fix(status): include cache tokens in cost estimate
