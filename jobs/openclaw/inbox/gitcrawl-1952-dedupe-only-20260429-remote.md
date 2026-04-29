---
repo: openclaw/openclaw
cluster_id: gitcrawl-1952-dedupe-only-20260429-remote
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
  - "#48280"
candidates:
  - "#60799"
cluster_refs:
  - "#27996"
  - "#38651"
  - "#42740"
  - "#42960"
  - "#47072"
  - "#48280"
  - "#50877"
  - "#52097"
  - "#52569"
  - "#53669"
  - "#57069"
  - "#60334"
  - "#60799"
  - "#61617"
  - "#64634"
  - "#65105"
  - "#67828"
  - "#67854"
  - "#67856"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48280 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1952 on 2026-04-29."
---

# Gitcrawl Cluster 1952

Generated from local gitcrawl run cluster 1952 for `openclaw/openclaw`.

Display title:

> Cron Scheduler Bug: nextRun shows year 58177, tasks never execute

Cluster shape from gitcrawl:

- total members: 19
- issues: 19
- pull requests: 0
- open candidates in local store: 1
- representative: #48280, currently closed in local store
- latest member update: 2026-04-28T18:04:42.492735974Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #27996 Cron scheduler: nextRunAtMs not recomputed after editing cron expr/timezone
- #38651 Cron scheduler not loading jobs (nextWakeAtMs=null)
- #42740 Cron jobs fire spontaneously at wrong time (no restart) — possible DST/UTC boundary bug
- #42960 [Bug]: Cron jobs enqueued but never execute — lane never dispatches, runningAtMs written on enqueue causes permanent stale marker loop
- #47072 [Bug]:
- #48280 Cron Scheduler Bug: nextRun shows year 58177, tasks never execute
- #50877 [Bug]: OpenCLaw Misalignment of scheduled task time
- #52097 Cron job runs repeatedly after manual trigger via cron run
- #52569 [Bug] Cron jobs silently lost after upgrading 2026.3.12 → 2026.3.13 — jobs.json not loaded
- #53669 [Bug]: CronCreate: timezone mismatch — local tz set but UTC offset applied to cron expression
- #57069 [Bug] Cron hour field 0-3 parsed as 19-22 (19-hour shift)
- #60334 [Bug]: 2026.4.2 update rejects legacy config keys and cron jobs.json may require manual backup restore
- #61617 Bug: Cron scheduler triggers duplicate executions for the same job
- #64634 Bug: cron scheduler calculates incorrect nextRunAtMs on job creation
- #65105 Update 2026.4.9 → 4.11 silently wipes channels.discord config and agents.list from openclaw.json
- #67828 Cron edit path fails to re-sync state.nextRunAtMs when schedule.at changes (at-type crons fire at stale cached time)
- #67854 [Bug] Cron Scheduler Not Loading Jobs - Gateway Ignores jobs.json
- #67856 [Bug] Memory-core creates Dreaming cron without tz field

Open candidates:

- #60799 cron: v2026.4.2 silently drops jobs.json (plain-array format) and first add clobbers all data
