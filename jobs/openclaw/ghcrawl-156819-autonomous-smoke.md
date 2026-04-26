---
repo: openclaw/openclaw
cluster_id: ghcrawl-156819-autonomous-smoke
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
  - "#48345"
candidates:
  - "#46287"
  - "#48345"
  - "#59302"
cluster_refs:
  - "#46287"
  - "#48345"
  - "#59302"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #48345 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156819 on 2026-04-26."
---

# GHCrawl Cluster 156819

Generated from local ghcrawl run cluster 156819 for `openclaw/openclaw`.

Display title:

> Cron: add skipMissedRuns option to prevent catch-up runs after gateway restart

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #48345, currently open in local store
- latest member update: 2026-04-24T18:56:30.866Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #46287 Feature Request: Skip restart-type cron jobs from missed-job catch-up on startup
- #48345 Cron: add skipMissedRuns option to prevent catch-up runs after gateway restart
- #59302 Cron: missed-run catchup/backfill on gateway startup
