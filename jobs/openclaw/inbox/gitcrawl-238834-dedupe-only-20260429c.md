---
repo: openclaw/openclaw
cluster_id: gitcrawl-238834-dedupe-only-20260429c
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
  - "#41940"
candidates:
  - "#39487"
  - "#39489"
  - "#41940"
  - "#53533"
cluster_refs:
  - "#39487"
  - "#39489"
  - "#41940"
  - "#53533"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41940 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238834 on 2026-04-29."
---

# Gitcrawl Cluster 238834

Generated from local gitcrawl run cluster 238834 for `openclaw/openclaw`.

Display title:

> fix(feishu): report connection lifecycle status to gateway health monitor

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #41940, currently open in local store
- latest member update: 2026-04-29T08:43:40.139Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39487 fix(feishu): report liveness status to prevent false health-monitor restarts
- #39489 fix(feishu): report connection/event activity for health monitor
- #41940 fix(feishu): report connection lifecycle status to gateway health monitor
- #53533 feat(feishu): surface connection health state
