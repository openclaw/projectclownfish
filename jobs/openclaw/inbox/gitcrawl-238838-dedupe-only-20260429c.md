---
repo: openclaw/openclaw
cluster_id: gitcrawl-238838-dedupe-only-20260429c
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
  - "#42586"
candidates:
  - "#42586"
  - "#46527"
  - "#52770"
  - "#72417"
cluster_refs:
  - "#42586"
  - "#46527"
  - "#52770"
  - "#72417"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #42586 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238838 on 2026-04-29."
---

# Gitcrawl Cluster 238838

Generated from local gitcrawl run cluster 238838 for `openclaw/openclaw`.

Display title:

> fix(gateway): merge runtime state into health endpoint channel snapshots

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #42586, currently open in local store
- latest member update: 2026-04-27T02:07:49.906Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42586 fix(gateway): merge runtime state into health endpoint channel snapshots
- #46527 fix(health): use runtime snapshot for channel summaries
- #52770 fix(gateway): guard getRuntimeSnapshot() and preserve probe intent in health refresh
- #72417 fix(gateway): preserve runtime-backed health state
