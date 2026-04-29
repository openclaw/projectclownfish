---
repo: openclaw/openclaw
cluster_id: gitcrawl-2108-dedupe-only-20260429-remote
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
  - "#48345"
candidates:
  - "#42039"
cluster_refs:
  - "#42039"
  - "#46287"
  - "#48345"
  - "#59302"
  - "#60083"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48345 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2108 on 2026-04-29."
---

# Gitcrawl Cluster 2108

Generated from local gitcrawl run cluster 2108 for `openclaw/openclaw`.

Display title:

> Cron: add skipMissedRuns option to prevent catch-up runs after gateway restart

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 1
- representative: #48345, currently closed in local store
- latest member update: 2026-04-28T21:55:43.785145473Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #46287 Feature Request: Skip restart-type cron jobs from missed-job catch-up on startup
- #48345 Cron: add skipMissedRuns option to prevent catch-up runs after gateway restart
- #59302 Cron: missed-run catchup/backfill on gateway startup
- #60083 Cron startup catch-up fires duplicate when previous run was itself a late catch-up

Open candidates:

- #42039 Expose maxMissedJobsPerRestart and missedJobStaggerMs in cron config
