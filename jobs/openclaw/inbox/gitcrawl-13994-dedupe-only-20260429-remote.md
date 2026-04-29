---
repo: openclaw/openclaw
cluster_id: gitcrawl-13994-dedupe-only-20260429-remote
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
  - "#51016"
candidates:
  - "#68944"
cluster_refs:
  - "#44714"
  - "#44760"
  - "#44901"
  - "#45222"
  - "#45504"
  - "#45560"
  - "#45750"
  - "#45835"
  - "#45908"
  - "#45918"
  - "#45940"
  - "#46008"
  - "#46072"
  - "#46087"
  - "#46096"
  - "#46218"
  - "#46277"
  - "#46316"
  - "#46769"
  - "#47103"
  - "#47265"
  - "#47307"
  - "#47813"
  - "#47874"
  - "#47943"
  - "#47952"
  - "#48167"
  - "#48297"
  - "#48349"
  - "#48360"
  - "#48461"
  - "#48538"
  - "#48936"
  - "#49045"
  - "#49180"
  - "#49201"
  - "#49325"
  - "#49354"
  - "#49510"
  - "#49726"
  - "#49758"
  - "#50343"
  - "#50380"
  - "#50603"
  - "#50691"
  - "#50964"
  - "#51016"
  - "#51151"
  - "#51357"
  - "#51438"
  - "#51516"
  - "#51632"
  - "#51679"
  - "#51698"
  - "#51879"
  - "#51987"
  - "#52265"
  - "#52333"
  - "#52625"
  - "#52749"
  - "#52766"
  - "#61554"
  - "#67985"
  - "#68944"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #51016 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13994 on 2026-04-29."
---

# Gitcrawl Cluster 13994

Generated from local gitcrawl run cluster 13994 for `openclaw/openclaw`.

Display title:

> [Bug]: openclaw status reports healthy local gateway as unreachable

Cluster shape from gitcrawl:

- total members: 64
- issues: 64
- pull requests: 0
- open candidates in local store: 1
- representative: #51016, currently closed in local store
- latest member update: 2026-04-28T21:29:55.430851913Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44714 [Bug]: `openclaw logs --follow` fails after 2026.3.12 upgrade with handshake timeout while gateway remains healthy
- #44760 [Bug]: `openclaw devices list` fails to run
- #44901 [Bug] CLI命令超时 - WebSocket认证问题
- #45222 [Bug]: Intermittent local gateway websocket handshake failures on loopback (ws://127.0.0.1:18789)
- #45504 [Bug]: 2026.3.12: openclaw devices list / devices approve fail against local loopback gateway, while web UI remains functional
- #45560 [Bug]: local gateway CLI handshake fails (probe timeout / gateway call closed 1000) even though gateway is running and WS challenge is reachable
- #45750 [Bug]: Intermittent gateway RPC/WebSocket failures (1000 close) break openclaw cron commands while openclaw status still works
- #45835 [Bug]: openclaw status/probe shows missing scope: operator.read on local gateway after update to 2026.3.13
- #45908 [Bug]: "openclaw status" reports gateway as "unreachable" when probe lacks operator.read scope (cosmetic, gateway fully functional)
- #45918 [Bug]: run openclaw nodes list, but get nodes list failed: Error: gateway closed (1000 normal closure): no close reason
- #45940 False negative from `openclaw gateway probe` on Windows
- #46008 [Bug]: openclaw devices list bug
- #46072 Gateway/status probe warns missing operator.read after successful local update
- #46087 [Bug]:  local CLI commands that connect to the local gateway WebSocket fail
- #46096 [Bug]: gateway WS handshake timing / “closed before connect” behavior
- #46218 [Bug] CLI-mode gateway RPC client handshake timeout in v2026.3.13 — connect.challenge never processed
- #46277 [Bug] Browser tool causes gateway to crash in v2026.3.13
- #46316 [Bug]: `devices list` / `nodes status` timeout while `gateway status` shows `RPC probe: ok` (regression in 2026.3.12/2026.3.13)
- #46769 Gateway RPC timeout causes intermittent `openclaw cron list` failures (1000 normal closure)
- #47103 [Bug]: openclaw devices list --> Error，[openclaw] Failed to start CLI: Error: gateway closed (1000 normal closure): no close reason
- #47265 WebSocket CLI connection fails after upgrade to 2026.3.13 — handshake timeout on loopback
- #47307 `openclaw status` shows "unreachable (missing scope: operator.read)" for working local gateway
- #47813 CLI WS handshake timeout to local gateway on loopback (probe/logs/call fail, webchat works)
- #47874 [Bug]: First fresh-process callGateway() can fail on local gateway, while second call succeeds
- #47943 [Bug]: Bug: `openclaw logs` WebSocket handshake timeout in WSL2
- #47952 Bug: openclaw logs WebSocket handshake timeout in WSL2
- #48167 CLI handshake fails with gateway closed (1000) — gateway runs fine, CLI completely dead on 2026.3.13
- #48297 [Bug]: CLI commands (openclaw logs, openclaw status) always fail with WebSocket handshake timeout. Gateway sends connect.challenge but CLI never replies with signed nonce. Channels (Telegram/QQ) work normally.
- #48349 [Bug]:Browser control commands fail with "gateway closed (1000)" error
- #48360 gateway probe false-negative timeout/close on loopback while gateway is healthy
- #48461 [Bug]: Intermittent browser command failures on Windows (gateway closed 1000/1006, handshake timeout)
- #48538 [Bug]: openclaw status / openclaw gateway probe stay scope-limited on local paired CLI despite device token having operator.read
- #48936 [Bug]: WebSocket Gateway Probe Timeout on Loopback
- #49045 [Bug]: gateway connect failed: Error: gateway closed (1000):
- #49180 CLI status/gateway probe shows false 'unreachable (missing scope: operator.read)' in v2026.3.13
- #49201 [Bug]:  Title: openclaw cron list fails with handshake timeout - gateway unreachable     (missing scope: operator.read)
- #49325 [Bug]: All browser commands crash gateway with handshake timeout on Windows (2026.3.13)
- #49354 [Bug]: openclaw --profile <name> devices list fails with gateway closed (1000) / handshake timeout on 2026.3.13
- #49510 [Bug]: Error: Gateway closed (1000):
- #49726 [Bug]: Local CLI operator commands intermittently fail with "connect challenge timeout" / "handshake timeout" (code 1000/1008) under gateway load
- #49758 Bug: `status` / `gateway probe` / `health --json` misreport local gateway + Telegram state on 2026.3.13
- #50343 Bug: first local 'openclaw nodes pending' call fails with gateway closed (1000), immediate retry succeeds
- #50380 [Bug]: CLI WebSocket handshake timeout when gateway is running (v2026.3.13, Windows)
- #50603 [Bug]: gateway call health/cron.status fails with WS handshake timeout on 2026.3.13 (loopback, token auth)
- #50691 openclaw status reports missing operator.read while gateway is healthy; gateway probe times out on same loopback endpoint
- #50964 [Bug]: openclaw cron list closes with 1000 while cron scheduler is running (2026.3.13)
- #51016 [Bug]: openclaw status reports healthy local gateway as unreachable
- #51151 [Bug]: CLI fails to connect to gateway despite service running and curl succeeding
- #51357 [Bug]: CLI `probe` command consistently times out (code=1006) despite perfectly healthy gateway (False Negative)
- #51438 CLI → Gateway WebSocket connections timeout in v2026.3.12+ (Regression)
- #51516 [Bug]: openclaw devices/* and gateway RPC fail locally with pairing/operator scope mismatch on healthy loopback gateway (2026.3.13)
- #51632 openclaw cron run causes gateway closed 1000 error
- #51679 OpenClaw 2026.3.13: local loopback gateway WS handshake times out / closes before connect for some CLI RPCs
- #51698 gateway probe WebSocket handshake timeout but HTTP works fine
- #51879 [Bug]: CLI gateway handshake timeout on WSL2 — 2026.3.13 regression
- #51987 Local gateway websocket handshake times out on 127.0.0.1:18789 and closes before connect
- #52265 [Bug]: CLI `openclaw cron/gateway` commands fail with "handshake timeout" on v2026.3.13
- #52333 openclaw status: Gateway probe reports unreachable on loopback (missing scope operator.read)
- #52625 openclaw status / gateway probe missing operator.read scope on loopback with token auth
- #52749 [Bug]: cli can't connect to gateway
- #52766 [Bug]: Gateway WebSocket handshake timeout on local loopback (non-systemd env) breaks all CLI RPC commands
- #61554 [Bug]: WebSocket handshake timeout when executing `openclaw cron list`
- #67985 [Bug]:

Open candidates:

- #68944 [Bug]: CLI commands hang at WebSocket gateway handshake
