---
repo: openclaw/openclaw
cluster_id: gitcrawl-2251-dedupe-only-20260429-remote
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
  - "#48690"
candidates:
  - "#48488"
  - "#48690"
  - "#52747"
  - "#58244"
  - "#68381"
  - "#68785"
cluster_refs:
  - "#48488"
  - "#48690"
  - "#52747"
  - "#58244"
  - "#61732"
  - "#61774"
  - "#68381"
  - "#68785"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48690 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2251 on 2026-04-29."
---

# Gitcrawl Cluster 2251

Generated from local gitcrawl run cluster 2251 for `openclaw/openclaw`.

Display title:

> fix: add task-level timeout to lane queue to prevent permanent session blocking

Cluster shape from gitcrawl:

- total members: 8
- issues: 1
- pull requests: 7
- open candidates in local store: 6
- representative: #48690, currently open in local store
- latest member update: 2026-04-28T21:55:43.68282584Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #61732 fix: repair corrupted command queue singleton state
- #61774 fix(queue): heal missing active task waiters state

Open candidates:

- #48488 Lane queue has no task-level timeout — hung promises permanently block session lanes
- #48690 fix: add task-level timeout to lane queue to prevent permanent session blocking
- #52747 fix(acp): time out stuck session lane tasks
- #58244 fix(process): prune idle dynamic lanes from command queue Map to prevent memory leak
- #68381 feat: add maxExecutionMs per-task timeout to command lane
- #68785 feat: add circuit breaker for command lane saturation
