---
repo: openclaw/openclaw
cluster_id: ghcrawl-156723-autonomous-smoke
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
  - "#46871"
candidates:
  - "#46871"
  - "#49719"
  - "#50847"
  - "#65706"
cluster_refs:
  - "#46871"
  - "#49719"
  - "#50847"
  - "#65706"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #46871 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156723 on 2026-04-26."
---

# GHCrawl Cluster 156723

Generated from local ghcrawl run cluster 156723 for `openclaw/openclaw`.

Display title:

> nodes list shows Paired: 0 while nodes status shows Paired: 1 Connected: 1

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #46871, currently open in local store
- latest member update: 2026-04-24T18:56:29.924Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #46871 nodes list shows Paired: 0 while nodes status shows Paired: 1 Connected: 1
- #49719 openclaw nodes list shows Paired: 0 while node is actually connected and functional
- #50847 [Bug]: Incorrect behavious of commands `openclaw nodes list` and `openclaw nodes status`
- #65706 [Bug]: openclaw nodes status and openclaw nodes list does not sync
