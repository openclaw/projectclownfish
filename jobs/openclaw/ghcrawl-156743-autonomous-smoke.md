---
repo: openclaw/openclaw
cluster_id: ghcrawl-156743-autonomous-smoke
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
  - "#59778"
candidates:
  - "#59778"
  - "#60080"
  - "#60926"
  - "#67615"
cluster_refs:
  - "#59778"
  - "#60080"
  - "#60926"
  - "#67615"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #59778 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156743 on 2026-04-26."
---

# GHCrawl Cluster 156743

Generated from local ghcrawl run cluster 156743 for `openclaw/openclaw`.

Display title:

> [Bug]: Heartbeat interups the agent from running

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #59778, currently open in local store
- latest member update: 2026-04-24T18:56:24.412Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #59778 [Bug]: Heartbeat interups the agent from running
- #60080 [BUG] HEARTBEAT.md still pollutes main session with regular heartbeat and cron jobs targeting main (v2026.4.2)
- #60926 [Bug]: Heartbeat injects into active sub-agent sessions, terminating them with HEARTBEAT_OK
- #67615 Heartbeat mechanism interrupts ongoing task processes
