---
repo: openclaw/openclaw
cluster_id: ghcrawl-191455-agentic-merge
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
  - "#60885"
candidates:
  - "#46153"
  - "#53475"
  - "#55880"
  - "#57379"
  - "#58306"
  - "#58890"
  - "#60885"
  - "#66390"
  - "#66436"
  - "#67335"
  - "#71060"
  - "#71848"
cluster_refs:
  - "#46153"
  - "#53475"
  - "#55880"
  - "#57379"
  - "#58306"
  - "#58890"
  - "#60885"
  - "#66390"
  - "#66436"
  - "#67335"
  - "#71060"
  - "#71848"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #60885 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 191455 on 2026-04-26."
---

# GHCrawl Cluster 191455

Generated from local ghcrawl run cluster 191455 for `openclaw/openclaw`.

Display title:

> LaunchAgent: ThrottleInterval=1 causes unrecoverable gateway downtime after auto-update

Cluster shape from ghcrawl:

- total members: 12
- issues: 12
- pull requests: 0
- open candidates in local store: 12
- representative: #60885, currently open in local store
- latest member update: 2026-04-26T03:46:04.595Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #46153 Gateway hangs silently on startup when launched by launchd (macOS)
- #53475 [Bug] macOS LaunchAgent gateway does not respawn after SIGTERM; launchd reports 'domain in on-demand-only mode'
- #55880 Scheduled auto-upgrade cron can fail without visible notification, and gateway recovery does not restore macOS LaunchAgent gateway
- #57379 [Bug] Auto-upgrade v2026.3.24→2026.3.28: plist race condition kills gateway for 9+ hours on macOS (KeepAlive not respected)
- #58306 [Bug]: Gateway process storm: KeepAlive + ThrottleInterval=1 causes 30+ zombie processes when port isn't released before restart
- #58890 [Bug] Auto-update subprocess crashes before restart handoff: piped stdout/stderr breaks when bootout kills parent gateway
- #60885 LaunchAgent: ThrottleInterval=1 causes unrecoverable gateway downtime after auto-update
- #66390 [macOS] Gateway fails to start or crashes after `openclaw update` due to file lock conflicts during npm update
- #66436 ThrottleInterval 1s causes 37 MB error logs on missing config
- #67335 Bug: gateway LaunchAgent is sometimes removed from launchd domain and requires doctor/re-bootstrap
- #71060 gateway stop/restart can leave LaunchAgent unloaded (KeepAlive bypassed) when drain exceeds 1s
- #71848 [SRE] Gateway SIGABRT (134) on macOS launchd (mini-lobby)
