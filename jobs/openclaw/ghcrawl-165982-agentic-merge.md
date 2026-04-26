---
repo: openclaw/openclaw
cluster_id: ghcrawl-165982-agentic-merge
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
  - "#45222"
candidates:
  - "#44354"
  - "#44518"
  - "#45222"
  - "#46494"
  - "#46869"
  - "#47222"
  - "#48360"
  - "#48766"
  - "#49180"
  - "#49758"
  - "#51016"
  - "#51357"
  - "#51469"
  - "#51679"
  - "#52336"
  - "#52487"
  - "#53168"
  - "#53877"
  - "#56284"
  - "#57967"
  - "#57971"
  - "#59287"
  - "#59333"
  - "#61554"
  - "#63491"
  - "#63651"
  - "#64201"
  - "#64476"
  - "#66735"
  - "#67416"
  - "#67544"
  - "#68493"
  - "#68853"
  - "#68944"
  - "#69056"
  - "#69057"
cluster_refs:
  - "#44354"
  - "#44518"
  - "#45222"
  - "#46494"
  - "#46869"
  - "#47222"
  - "#48360"
  - "#48766"
  - "#49180"
  - "#49758"
  - "#51016"
  - "#51357"
  - "#51469"
  - "#51679"
  - "#52336"
  - "#52487"
  - "#53168"
  - "#53877"
  - "#56284"
  - "#57967"
  - "#57971"
  - "#59287"
  - "#59333"
  - "#61554"
  - "#63491"
  - "#63651"
  - "#64201"
  - "#64476"
  - "#66735"
  - "#67416"
  - "#67544"
  - "#68493"
  - "#68853"
  - "#68944"
  - "#69056"
  - "#69057"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #45222 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 165982 on 2026-04-26."
---

# GHCrawl Cluster 165982

Generated from local ghcrawl run cluster 165982 for `openclaw/openclaw`.

Display title:

> [Bug]: Intermittent local gateway websocket handshake failures on loopback (ws://127.0.0.1:18789)

Cluster shape from ghcrawl:

- total members: 36
- issues: 27
- pull requests: 9
- open candidates in local store: 36
- representative: #45222, currently open in local store
- latest member update: 2026-04-26T00:46:52.121Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #44354 Bug: openclaw health --json reports stale Discord state
- #44518 fix(daemon): trigger SIGUSR1 in-process restart when scheduling launchd handoff
- #45222 [Bug]: Intermittent local gateway websocket handshake failures on loopback (ws://127.0.0.1:18789)
- #46494 [Bug]: `openclaw health --json` reports Telegram `running: false` / `tokenSource: "none"` while `channels status --json` reports `running: true` / `tokenSource: "config"`
- #46869 fix(windows): use detached restart script for scheduled task restart
- #47222 fix(gateway): prevent spurious SIGTERM shutdown on CLI disconnect under systemd
- #48360 gateway probe false-negative timeout/close on loopback while gateway is healthy
- #48766 [Bug]: OpenClaw gateway restart
- #49180 CLI status/gateway probe shows false 'unreachable (missing scope: operator.read)' in v2026.3.13
- #49758 Bug: `status` / `gateway probe` / `health --json` misreport local gateway + Telegram state on 2026.3.13
- #51016 [Bug]: openclaw status reports healthy local gateway as unreachable
- #51357 [Bug]: CLI `probe` command consistently times out (code=1006) despite perfectly healthy gateway (False Negative)
- #51469 CLI gateway handshake timeout too short for cold-start module compilation
- #51679 OpenClaw 2026.3.13: local loopback gateway WS handshake times out / closes before connect for some CLI RPCs
- #52336 Bug: browser automation intermittently fails with gateway closed (1000 normal closure)
- #52487 fix(windows): prevent restart race from duplicate schtasks /Run
- #53168 [Bug]: CLI commands crash gateway via WebSocket handshake timeout
- #53877 Gateway self-probe fails under WSL2 mirrored networking (networkingMode=mirrored)
- #56284 Windows: gateway restart does not wait for active tasks and loses session state
- #57967 macOS: gateway LaunchAgent plist is written with 0644 instead of 0600
- #57971 fix(macOS): write gateway LaunchAgent plist with 0600
- #59287 [Bug]: openclaw health --json reports telegram.running=false while probe succeeds and status --deep shows Telegram OK
- #59333 [Bug]: Browser tool failures trigger gateway SIGTERM restart instead of graceful error handling
- #61554 [Bug]: WebSocket handshake timeout when executing `openclaw cron list`
- #63491 [Bug]: Windows Scheduled Task gateway restart/health becomes inconsistent after ready
- #63651 fix: remove duplicate restart message on Windows (schtasks)
- #64201 [Bug]: OpenClaw: Crash loop on plugin config reload (ECONNREFUSED on loopback port 18789)
- #64476 [Bug]: Windows local gateway has partial RPC failures/timeouts on v2026.4.9 even when gateway process is running
- #66735 fix(daemon): hand off systemd self-restarts
- #67416 Gateway restart crashes instead of restarting on Windows
- #67544 Gateway restart can fail on Windows with EADDRINUSE after crash or overlapping startup paths
- #68493 [Bug]: Editing openclaw.json while gateway is running triggers hot-reload crash loop on Windows (stale lock file + EADDRINUSE)
- #68853 fix(gateway): SIGUSR1 restart fast path that doesn't break Windows schtasks
- #68944 CLI commands hang at WebSocket gateway handshake (OpenClaw 2026.4.15)
- #69056 fix(gateway): handle SIGUSR1 gracefully on Windows
- #69057 gateway restart fails on Windows with ERR_UNKNOWN_SIGNAL (SIGUSR1)
