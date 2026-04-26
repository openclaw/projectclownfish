---
repo: openclaw/openclaw
cluster_id: ghcrawl-156702-autonomous-smoke
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
  - "#39921"
candidates:
  - "#39921"
  - "#42586"
  - "#46527"
  - "#52770"
cluster_refs:
  - "#39921"
  - "#42586"
  - "#46527"
  - "#52770"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #39921 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156702 on 2026-04-26."
---

# GHCrawl Cluster 156702

Generated from local ghcrawl run cluster 156702 for `openclaw/openclaw`.

Display title:

> fix(gateway): preserve runtime-backed health state

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #39921, currently open in local store
- latest member update: 2026-04-25T07:30:10.646Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39921 fix(gateway): preserve runtime-backed health state
- #42586 fix(gateway): merge runtime state into health endpoint channel snapshots
- #46527 fix(health): use runtime snapshot for channel summaries
- #52770 fix(gateway): guard getRuntimeSnapshot() and preserve probe intent in health refresh
