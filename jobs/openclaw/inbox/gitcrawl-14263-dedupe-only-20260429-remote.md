---
repo: openclaw/openclaw
cluster_id: gitcrawl-14263-dedupe-only-20260429-remote
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
  - "#41934"
candidates:
  - "#60885"
  - "#71060"
cluster_refs:
  - "#40306"
  - "#40550"
  - "#40737"
  - "#41197"
  - "#41198"
  - "#41251"
  - "#41315"
  - "#41570"
  - "#41752"
  - "#41815"
  - "#41934"
  - "#42013"
  - "#43602"
  - "#44000"
  - "#44093"
  - "#44490"
  - "#44507"
  - "#44770"
  - "#45178"
  - "#47916"
  - "#48084"
  - "#48311"
  - "#50035"
  - "#50070"
  - "#52208"
  - "#53475"
  - "#54861"
  - "#56716"
  - "#58254"
  - "#60885"
  - "#67335"
  - "#71060"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41934 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14263 on 2026-04-29."
---

# Gitcrawl Cluster 14263

Generated from local gitcrawl run cluster 14263 for `openclaw/openclaw`.

Display title:

> [macOS] Gateway fails to auto-restart after config-triggered SIGTERM — LaunchAgent becomes unloaded

Cluster shape from gitcrawl:

- total members: 32
- issues: 32
- pull requests: 0
- open candidates in local store: 2
- representative: #41934, currently closed in local store
- latest member update: 2026-04-28T18:51:15.225007047Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40306 [Bug]: macOS openclaw gateway restart fails when invoked from agent/tool-driven automation; manual Terminal restart can work, recovery requires openclaw gateway install
- #40550 [Bug] openclaw gateway stop/start fails to recover on macOS 26 — service removed but never re-registered
- #40737 macOS: gateway restart can leave LaunchAgent not loaded; prefer kickstart-first for loaded services
- #41197 [Bug] openclaw update does not restart gateway automatically
- #41198 Gateway restart from agent exec kills gateway without recovery (bootout before bootstrap)
- #41251 gateway restart unloads launchd service and fails to reload
- #41315 [Bug]: macOS LaunchAgent restart instability: gateway restart often leaves service not loaded; install+restart required
- #41570 gateway restart fails - launchd service not found
- #41752 [BUG] gateway restart via exec tool stops Gateway but LaunchAgent does not auto-restart (macOS, v2026.3.7)
- #41815 macOS LaunchAgent restart should use kickstart first and detach when invoked from the managed gateway process tree
- #41934 [macOS] Gateway fails to auto-restart after config-triggered SIGTERM — LaunchAgent becomes unloaded
- #42013 macOS: gateway install writes KeepAlive={SuccessfulExit:false} but supervisor restart relies on launchd to re-launch the process
- #43602 [Bug]: LaunchAgent silently unloads after macOS sleep/idle — gateway start/restart fail until re-install
- #44000 [Bug]: Agent fails to restart gateway due to self-termination ("Suicide Paradox")
- #44093 [Bug]: Gateway Crash And Removed After Restart Command
- #44490 [Bug]: openclaw gateway restart fails to restart service (SIGTERM instead of SIGUSR1)
- #44507 openclaw gateway restart fails to restart service (SIGTERM instead of SIGUSR1)
- #44770 [Bug]: Gateway restart fails when executed from agent context (child process dies before completing restart sequence)
- #45178 macOS: config-triggered gateway restart can leave LaunchAgent 'not loaded / not installed'; doctor --repair recovers
- #47916 openclaw gateway restart fails on macOS due to KeepAlive=true in LaunchAgent
- #48084 [Bug]: openclaw gateway restart unregisters LaunchAgent and TUI fails to reconnect (macOS)
- #48311 [Bug]: `gateway start` fails after `gateway stop` is run (LaunchAgent unloaded instead of paused)
- #50035 Gateway restart race condition: kickstart -k fails when process already terminated by SIGTERM
- #50070 Gateway fails to auto-restart after SIGTERM — launchd KeepAlive ineffective (2-hour outage)
- #52208 [Bug]: macOS LaunchAgent can be removed and left not loaded after failed `openclaw gateway start`
- #53475 [Bug] macOS LaunchAgent gateway does not respawn after SIGTERM; launchd reports 'domain in on-demand-only mode'
- #54861 Gateway silently dies after auto-update: launchd removes service due to rapid restart cycle
- #56716 LaunchAgent not auto-recovering after gateway SIGTERM / full service unload
- #58254 [Bug]: gateway fails to restart after auto-update on macOS (launchd ThrottleInterval race)
- #67335 Bug: gateway LaunchAgent is sometimes removed from launchd domain and requires doctor/re-bootstrap

Open candidates:

- #60885 LaunchAgent: ThrottleInterval=1 causes unrecoverable gateway downtime after auto-update
- #71060 gateway stop/restart can leave LaunchAgent unloaded (KeepAlive bypassed) when drain exceeds 1s
