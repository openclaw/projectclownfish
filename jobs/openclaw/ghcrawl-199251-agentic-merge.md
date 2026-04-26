---
repo: openclaw/openclaw
cluster_id: ghcrawl-199251-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
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
  - "#68381"
  - "#68785"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #48690 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 199251 on 2026-04-26."
---

# GHCrawl Cluster 199251

Generated from local ghcrawl run cluster 199251 for `openclaw/openclaw`.

Display title:

> fix: add task-level timeout to lane queue to prevent permanent session blocking

Cluster shape from ghcrawl:

- total members: 6
- issues: 1
- pull requests: 5
- open candidates in local store: 6
- representative: #48690, currently open in local store
- latest member update: 2026-04-25T17:12:43.523Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #48488 Lane queue has no task-level timeout — hung promises permanently block session lanes
- #48690 fix: add task-level timeout to lane queue to prevent permanent session blocking
- #52747 fix(acp): time out stuck session lane tasks
- #58244 fix(process): prune idle dynamic lanes from command queue Map to prevent memory leak
- #68381 feat: add maxExecutionMs per-task timeout to command lane
- #68785 feat: add circuit breaker for command lane saturation
