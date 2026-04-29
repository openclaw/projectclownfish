---
repo: openclaw/openclaw
cluster_id: gitcrawl-1962-dedupe-only-20260429-remote
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
  - "#60926"
candidates:
  - "#66748"
cluster_refs:
  - "#43126"
  - "#43168"
  - "#43274"
  - "#56049"
  - "#59778"
  - "#60080"
  - "#60926"
  - "#66369"
  - "#66748"
  - "#66813"
  - "#67615"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #60926 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1962 on 2026-04-29."
---

# Gitcrawl Cluster 1962

Generated from local gitcrawl run cluster 1962 for `openclaw/openclaw`.

Display title:

> [Bug]: Heartbeat injects into active sub-agent sessions, terminating them with HEARTBEAT_OK

Cluster shape from gitcrawl:

- total members: 11
- issues: 11
- pull requests: 0
- open candidates in local store: 1
- representative: #60926, currently closed in local store
- latest member update: 2026-04-28T05:49:58.822312107Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43126 [Bug] heartbeat target: "last" causes multiple sessions to respond simultaneously
- #43168 [Bug]: Heartbeat wakeups are persisted into main dashboard session as synthetic user messages
- #43274 Cron isolated sessions should not inject HEARTBEAT_OK system prompt instructions
- #56049 [Bug]: Heartbeat handler re-triggers on subagent auto-announcement events, causing cascade of heartbeat polls.
- #59778 [Bug]: Heartbeat interups the agent from running
- #60080 [BUG] HEARTBEAT.md still pollutes main session with regular heartbeat and cron jobs targeting main (v2026.4.2)
- #60926 [Bug]: Heartbeat injects into active sub-agent sessions, terminating them with HEARTBEAT_OK
- #66369 Bug: Heartbeats and cron jobs interrupt active conversations and scheduled tasks
- #66813 [Bug]: webchat heartbeat with target "last" skips with no-target and blocks background execution
- #67615 Heartbeat mechanism interrupts ongoing task processes

Open candidates:

- #66748 Subagent background exec triggers spurious heartbeat wake-ups on main session
