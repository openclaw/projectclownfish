---
repo: openclaw/openclaw
cluster_id: ghcrawl-156920-autonomous-smoke
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
  - "#65834"
candidates:
  - "#65834"
  - "#66388"
  - "#67362"
cluster_refs:
  - "#65834"
  - "#66388"
  - "#67362"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #65834 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156920 on 2026-04-26."
---

# GHCrawl Cluster 156920

Generated from local ghcrawl run cluster 156920 for `openclaw/openclaw`.

Display title:

> [Bug]: memory-core dreaming cron reconciliation can report "cron service unavailable" even when gateway cron is running

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #65834, currently open in local store
- latest member update: 2026-04-25T07:30:10.828Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #65834 [Bug]: memory-core dreaming cron reconciliation can report "cron service unavailable" even when gateway cron is running
- #66388 memory-core: dreaming cron reports 'cron service unavailable' — regression from 4.12 plugin loading changes
- #67362 [Bug]: memory-core dreaming cron reconciliation depends on stale one-time startup cron reference — fails at runtime
