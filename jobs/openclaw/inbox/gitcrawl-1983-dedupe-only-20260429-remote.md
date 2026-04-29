---
repo: openclaw/openclaw
cluster_id: gitcrawl-1983-dedupe-only-20260429-remote
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
  - "#50621"
candidates:
  - "#44922"
  - "#50621"
  - "#63106"
cluster_refs:
  - "#40261"
  - "#40266"
  - "#44922"
  - "#45553"
  - "#46046"
  - "#50621"
  - "#54320"
  - "#63106"
  - "#68743"
  - "#69320"
  - "#70274"
  - "#70325"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #50621 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1983 on 2026-04-29."
---

# Gitcrawl Cluster 1983

Generated from local gitcrawl run cluster 1983 for `openclaw/openclaw`.

Display title:

> Cron systemEvent job times out after ~960s even though agent runs in main session

Cluster shape from gitcrawl:

- total members: 12
- issues: 12
- pull requests: 0
- open candidates in local store: 3
- representative: #50621, currently open in local store
- latest member update: 2026-04-28T22:51:07.496463358Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40261 [Bug]: Cron systemEvent payload on sessionTarget=main is silently swallowed (no-op)
- #40266 [Bug]: Cron systemEvent payloads on main session are silently swallowed (no-op)
- #45553 systemEvent cron jobs always show skipped/disabled even when enabled
- #46046 [Bug]: sessionTarget="main" cron jobs silently skipped when heartbeat.every="0m"
- #54320 cron run: default 30s timeout kills long-running jobs even when job itself is healthy
- #68743 [Bug]: Dreaming cron job times out at 10 minutes even though manual trigger completes in ~2-4 minutes
- #69320 [Bug] Dreaming cron hits hard-coded 10-minute timeout; no config override for systemEvent jobs
- #70274 Memory Dreaming Promotion cron can timeout repeatedly without tracked success state
- #70325 Cron main-session jobs timeout when execution exceeds ~10 minutes

Open candidates:

- #44922 [Bug]: Cron job with sessionTarget: "main" triggers both systemEvent and reminder despite delivery.mode: "none"
- #50621 Cron systemEvent job times out after ~960s even though agent runs in main session
- #63106 cron: ghost runs recorded as ok when gateway is down (durationMs < 50ms)
