---
repo: openclaw/openclaw
cluster_id: ghcrawl-156577-autonomous-smoke
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
  - "#54861"
candidates:
  - "#40089"
  - "#41243"
  - "#42198"
  - "#44881"
  - "#46153"
  - "#46466"
  - "#53475"
  - "#54861"
  - "#55880"
  - "#57379"
  - "#58254"
  - "#58306"
  - "#58414"
  - "#60398"
  - "#60885"
  - "#66390"
  - "#66401"
  - "#67335"
  - "#70801"
  - "#71060"
cluster_refs:
  - "#40089"
  - "#41243"
  - "#42198"
  - "#44881"
  - "#46153"
  - "#46466"
  - "#53475"
  - "#54861"
  - "#55880"
  - "#57379"
  - "#58254"
  - "#58306"
  - "#58414"
  - "#60398"
  - "#60885"
  - "#66390"
  - "#66401"
  - "#67335"
  - "#70801"
  - "#71060"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #54861 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156577 on 2026-04-26."
---

# GHCrawl Cluster 156577

Generated from local ghcrawl run cluster 156577 for `openclaw/openclaw`.

Display title:

> Gateway silently dies after auto-update: launchd removes service due to rapid restart cycle

Cluster shape from ghcrawl:

- total members: 20
- issues: 20
- pull requests: 0
- open candidates in local store: 20
- representative: #54861, currently open in local store
- latest member update: 2026-04-24T18:56:32.521Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40089 Gateway restart (update.run) can leave service dead: bootout without bootstrap
- #41243 Bug: Gateway detects unrelated LaunchAgents as competing gateways, unloads itself
- #42198 Gateway crashes on every version upgrade (npm install -g openclaw@latest)
- #44881 Gateway holds port after npm upgrade — new process crash-loops until openclaw gateway stop is run
- #46153 Gateway hangs silently on startup when launched by launchd (macOS)
- #46466 [Bug]: Gateway install failed: Error: launchctl bootstrap failed: Bootstrap failed: 125: Domain does not support specified action for mac
- #53475 [Bug] macOS LaunchAgent gateway does not respawn after SIGTERM; launchd reports 'domain in on-demand-only mode'
- #54861 Gateway silently dies after auto-update: launchd removes service due to rapid restart cycle
- #55880 Scheduled auto-upgrade cron can fail without visible notification, and gateway recovery does not restore macOS LaunchAgent gateway
- #57379 [Bug] Auto-upgrade v2026.3.24→2026.3.28: plist race condition kills gateway for 9+ hours on macOS (KeepAlive not respected)
- #58254 [Bug]: gateway fails to restart after auto-update on macOS (launchd ThrottleInterval race)
- #58306 [Bug]: Gateway process storm: KeepAlive + ThrottleInterval=1 causes 30+ zombie processes when port isn't released before restart
- #58414 [Bug] Gateway crash loop after self-update: stdin hang + v2026.3.28 `gateway` command exits 0 without starting server
- #60398 gateway install fails with error 5 when home directory is on external APFS volume
- #60885 LaunchAgent: ThrottleInterval=1 causes unrecoverable gateway downtime after auto-update
- #66390 [macOS] Gateway fails to start or crashes after `openclaw update` due to file lock conflicts during npm update
- #66401 Bug: `openclaw update` causes Gateway crash, Feishu disconnection, and complete loss of Cron jobs
- #67335 Bug: gateway LaunchAgent is sometimes removed from launchd domain and requires doctor/re-bootstrap
- #70801 fix(macos): two-phase stop+start in restartLaunchAgent to eliminate kickstart-before-ensurePidGone race
- #71060 gateway stop/restart can leave LaunchAgent unloaded (KeepAlive bypassed) when drain exceeds 1s
