---
repo: openclaw/openclaw
cluster_id: gitcrawl-13987-dedupe-only-20260429-remote
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
  - "#50169"
candidates:
  - "#52487"
  - "#63491"
  - "#63561"
  - "#63651"
  - "#66675"
  - "#68109"
  - "#68853"
cluster_refs:
  - "#39222"
  - "#40275"
  - "#44417"
  - "#46112"
  - "#46849"
  - "#46869"
  - "#47133"
  - "#47445"
  - "#48766"
  - "#48771"
  - "#49449"
  - "#49865"
  - "#50074"
  - "#50169"
  - "#50559"
  - "#51498"
  - "#52044"
  - "#52049"
  - "#52487"
  - "#52851"
  - "#54415"
  - "#54429"
  - "#54517"
  - "#55613"
  - "#57682"
  - "#59394"
  - "#60354"
  - "#60407"
  - "#61179"
  - "#62400"
  - "#62764"
  - "#62803"
  - "#62828"
  - "#63227"
  - "#63491"
  - "#63561"
  - "#63651"
  - "#64211"
  - "#64216"
  - "#64407"
  - "#64476"
  - "#64853"
  - "#65184"
  - "#65584"
  - "#66227"
  - "#66359"
  - "#66481"
  - "#66675"
  - "#67251"
  - "#67416"
  - "#67439"
  - "#68011"
  - "#68109"
  - "#68380"
  - "#68853"
  - "#68980"
  - "#69056"
  - "#69057"
  - "#69616"
  - "#69674"
  - "#69695"
  - "#69805"
  - "#69970"
  - "#70238"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #50169 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13987 on 2026-04-29."
---

# Gitcrawl Cluster 13987

Generated from local gitcrawl run cluster 13987 for `openclaw/openclaw`.

Display title:

> [Bug]: openclaw cron` command causes Gateway restart failure (lock timeout)

Cluster shape from gitcrawl:

- total members: 64
- issues: 59
- pull requests: 5
- open candidates in local store: 7
- representative: #50169, currently closed in local store
- latest member update: 2026-04-28T22:51:07.265730658Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39222 CLI can leave orphan openclaw-gateway processes on Linux/systemd when gateway.mode=local
- #40275 [Bug]: openclaw gateway restart fails while user systemd service works via systemctl --user (service shown as disabled/stopped inconsistently)
- #44417 Bug: systemctl --user detection fails and hangs during `sudo -u` due to SUDO_USER fallback
- #46112 [Bug]: When executing `openclaw gateway restart` or `openclaw gateway stop` commands, the CLI hangs indefinitely.
- #46849 Bug: openclaw gateway status hangs / spawns nested gateway when invoked from inside running gateway service
- #46869 fix(windows): use detached restart script for scheduled task restart
- #47133 [Bug] All openclaw CLI commands trigger Gateway SIGTERM on Linux/systemd (not just cron run)
- #47445 [Bug]: gateway restart command fails when executed via exec tool on Windows
- #48766 [Bug]: OpenClaw gateway restart
- #48771 bug(windows): gateway restart false-times out because schtasks parser misses 'Last Result' and health probe rejects 1008 policy closes
- #49449 ： gateway status command hangs indefinitely
- #49865 Gateway stability issues on Windows: SecretRef resolution, RPC timeouts, cron failures
- #50074 [Bug] Gateway restart fails - stale process misdetection
- #50169 [Bug]: openclaw cron` command causes Gateway restart failure (lock timeout)
- #50559 Gateway should detect and handle competing processes
- #51498 [Bug]: openclaw cron list/status and openclaw health --json timeout against local gateway while scheduler still appears to run jobs
- #52044 Bug: gateway restart spawns duplicate processes on Windows (3 windows)
- #52049 Bug: gateway stop doesn't terminate node.exe process on Windows
- #52851 CLI 执行命令时会尝试启动新的 Gateway 实例，与 systemd 服务冲突
- #54415 [Linux] Gateway install fails when XDG_RUNTIME_DIR is not set or systemd user session is unavailable
- #54429 Gateway Service Installation Failure: Missing systemd Service File
- #54517 Bug: systemctl enable fails on Ubuntu Server - should use systemctl --user enable for user services
- #55613 openclaw skills list command hangs after v2026.3.24 upgrade
- #57682 [Bug][Windows] openclaw update spawns visible and hanging CMD window during gateway restart
- #59394 [Bug]: Hidden CMD Window Appears After Update (findstr process)
- #60354 [Bug]: Beta blocker: Gateway - Involuntary service overwrite and D-Bus dependency in system-level deployments
- #60407 [Bug]: Exec commands succeed but return no output (SIGKILL / "Command still running")
- #61179 [Bug]: Windows: repeated gateway/ws 1008 device-required from cli probe on loopback (closed before connect spam)
- #62400 [Bug]: CLI Local Commands Hang Indefinitely in OpenClaw 4.5
- #62764 openclaw doctor --fix regenerates user-systemd unit even when system unit owns the gateway, causing dual-instance deadlock
- #62803 CLI hangs indefinitely on 'openclaw memory index --force' and 'openclaw cron list' after gateway restart (v2026.4.5)
- #62828 [Windows] SIGUSR1 restart spawns second visible cmd.exe gateway window (v4.5+ regression)
- #63227 Windows: CLI commands hang for 30-90s after output completes (event loop not exiting)
- #64211 [Bug] openclaw cron add command hangs/times out on Windows
- #64216 CLI browser commands hang 30-60s after output (WSL2/Linux, not just Windows)
- #64407 [Bug]: Window 2026.4.9: loopback gateway reachable, but system event/devices CLI connect fails after Qwen heartbeat config changes
- #64476 [Bug]: Windows local gateway has partial RPC failures/timeouts on v2026.4.9 even when gateway process is running
- #64853 [Bug] CLI commands hang on Windows
- #65184 [Bug]:openclaw gateway install may fail with "Unit file openclaw-gateway.service does not exist" on migrated root + systemd --user installs
- #65584 Bug: cron CLI commands can succeed but hang instead of exiting cleanly
- #66227 [Bug]: CLI exit hang bug: cron list / agents list hang after data output
- #66359 [Bug] exec commands receive SIGKILL frequently (every conversation turn)
- #66481 Windows: CLI subcommands hang in OpenClaw exec/tool environment, but work in normal PowerShell terminals
- #67251 Windows: CLI subcommands hang with SIGKILL in exec environment (2026.4.14)
- #67416 Gateway restart crashes instead of restarting on Windows
- #67439 Cron CLI commands extremely slow (~20s) and exit abnormally after successful mutations
- #68011 gateway start should check for existing instance before starting
- #68380 WSL2: gateway service runs but openclaw gateway start fails when user D-Bus socket is missing
- #68980 [Bug]: exec command triggers spawn taskkill ENOENT and crashes gateway
- #69056 fix(gateway): handle SIGUSR1 gracefully on Windows
- #69057 gateway restart fails on Windows with ERR_UNKNOWN_SIGNAL (SIGUSR1)
- #69616 Bug: `openclaw gateway` enters an infinite loop on startup
- #69674 [Bug]: Gateway HTTP server hangs indefinitely on Windows (no response to any request, health check timeout)
- #69695 [Bug]: Gateway service check fails with "No medium found" on WSL2 despite systemd running correctly
- #69805 [Bug] openclaw status/cron list hangs with SIGKILL on Windows (Node v22+)
- #69970 [Bug]: Windows auto-update restart script hangs indefinitely on `schtasks /End`, leaves zombie cmd.exe and flashing Terminal window
- #70238 [Bug]: Gateway OpenCLAW spawns flashing command prompt windows in background on Windows

Open candidates:

- #52487 fix(windows): prevent restart race from duplicate schtasks /Run
- #63491 [Bug]: Windows Scheduled Task gateway restart/health becomes inconsistent after ready
- #63561 [Bug]: `openclaw gateway status` and `openclaw gateway install` falsely report user systemd unavailable while the user service is enabled and active
- #63651 fix: remove duplicate restart message on Windows (schtasks)
- #66675 openclaw gateway restart can return false failure after healthy systemd restart
- #68109 [Bug]: gateway restart returns exit=null on systemd instead of exit=0 (2026.4.15)
- #68853 fix(gateway): SIGUSR1 restart fast path that doesn't break Windows schtasks
