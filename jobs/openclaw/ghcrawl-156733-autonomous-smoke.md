---
repo: openclaw/openclaw
cluster_id: ghcrawl-156733-autonomous-smoke
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
  - "#52682"
candidates:
  - "#52682"
  - "#55516"
  - "#57952"
  - "#65470"
cluster_refs:
  - "#52682"
  - "#55516"
  - "#57952"
  - "#65470"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #52682 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156733 on 2026-04-26."
---

# GHCrawl Cluster 156733

Generated from local ghcrawl run cluster 156733 for `openclaw/openclaw`.

Display title:

> [Bug]: All cron isolated agent runs serialize on nested lane (maxConcurrent=1) — blocks parallel cron execution

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #52682, currently open in local store
- latest member update: 2026-04-24T18:56:29.448Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #52682 [Bug]: All cron isolated agent runs serialize on nested lane (maxConcurrent=1) — blocks parallel cron execution
- #55516 feat: expose hooks.maxConcurrentRuns config for parallel webhook agent execution
- #57952 feat: configurable CommandLane.Nested concurrency — unblock parallel hook/cron/sessions_send execution
- #65470 Bug: CommandLane.Nested maxConcurrent defaults to 1, serializing all sessions_send agent runs
