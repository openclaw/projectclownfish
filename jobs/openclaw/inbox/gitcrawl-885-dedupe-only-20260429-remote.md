---
repo: openclaw/openclaw
cluster_id: gitcrawl-885-dedupe-only-20260429-remote
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
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#68386"
candidates:
  - "#52305"
cluster_refs:
  - "#52305"
  - "#68386"
  - "#69626"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #68386 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 885 on 2026-04-29."
---

# Gitcrawl Cluster 885

Generated from local gitcrawl run cluster 885 for `openclaw/openclaw`.

Display title:

> Bug: Async command completion notification routed to wrong session (heartbeat instead of main)

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #68386, currently closed in local store
- latest member update: 2026-04-28T22:51:07.396911847Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #68386 Bug: Async command completion notification routed to wrong session (heartbeat instead of main)
- #69626 Heartbeat sessions receive empty exec completion notifications due to sessionKey mismatch

Open candidates:

- #52305 [Bug]: async task completion reports can be lost because system event/wake is not reliably session-targeted
