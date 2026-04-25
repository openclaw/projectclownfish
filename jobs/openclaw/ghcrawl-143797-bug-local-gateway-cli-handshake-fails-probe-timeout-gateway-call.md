---
repo: openclaw/openclaw
cluster_id: ghcrawl-143797-bug-local-gateway-cli-handshake-fails-probe-timeout-gateway-call
mode: plan
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
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#45560"
candidates:
  - "#45222"
  - "#46008"
  - "#48360"
  - "#51357"
  - "#51469"
  - "#51679"
  - "#52336"
  - "#61554"
  - "#67985"
  - "#68642"
  - "#68944"
cluster_refs:
  - "#44714"
  - "#44760"
  - "#45127"
  - "#45222"
  - "#45504"
  - "#45560"
  - "#45750"
  - "#45918"
  - "#46008"
  - "#46087"
  - "#46096"
  - "#46218"
  - "#46256"
  - "#46316"
  - "#46769"
  - "#47103"
  - "#47265"
  - "#47813"
  - "#48167"
  - "#48168"
  - "#48297"
  - "#48349"
  - "#48360"
  - "#48461"
  - "#48936"
  - "#48954"
  - "#49045"
  - "#49118"
  - "#49201"
  - "#51357"
  - "#51469"
  - "#51679"
  - "#52336"
  - "#54616"
  - "#56254"
  - "#61554"
  - "#64407"
  - "#67985"
  - "#68642"
  - "#68944"
canonical_hint: "ghcrawl representative #45560 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from ghcrawl run cluster 143797 on 2026-04-25."
---

# GHCrawl Cluster 143797

Generated from local ghcrawl run cluster 143797 for `openclaw/openclaw`.

Display title:

> [Bug]: local gateway CLI handshake fails (probe timeout / gateway call closed 1000) even though gateway is running and WS challenge is reachable

Cluster shape from ghcrawl:

- total members: 40
- issues: 40
- pull requests: 0
- open candidates in local store: 11
- representative: #45560, currently closed in local store
- latest member update: 2026-04-25T17:12:54.178Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- #44714 [Bug]: `openclaw logs --follow` fails after 2026.3.12 upgrade with handshake timeout while gateway remains healthy
- #44760 [Bug]: `openclaw devices list` fails to run
- #45127 [Bug]: openclaw logs --follow --local-time fails
- #45504 [Bug]: 2026.3.12: openclaw devices list / devices approve fail against local loopback gateway, while web UI remains functional
- #45560 [Bug]: local gateway CLI handshake fails (probe timeout / gateway call closed 1000) even though gateway is running and WS challenge is reachable
- #45750 [Bug]: Intermittent gateway RPC/WebSocket failures (1000 close) break openclaw cron commands while openclaw status still works
- #45918 [Bug]: run openclaw nodes list, but get nodes list failed: Error: gateway closed (1000 normal closure): no close reason
- #46087 [Bug]:  local CLI commands that connect to the local gateway WebSocket fail
- #46096 [Bug]: gateway WS handshake timing / “closed before connect” behavior
- #46218 [Bug] CLI-mode gateway RPC client handshake timeout in v2026.3.13 — connect.challenge never processed
- #46256 [Bug]: openclaw browser start/status fails with handshake timeout on macOS when plugin loading is slow
- #46316 [Bug]: `devices list` / `nodes status` timeout while `gateway status` shows `RPC probe: ok` (regression in 2026.3.12/2026.3.13)
- #46769 Gateway RPC timeout causes intermittent `openclaw cron list` failures (1000 normal closure)
- #47103 [Bug]: openclaw devices list --> Error，[openclaw] Failed to start CLI: Error: gateway closed (1000 normal closure): no close reason
- #47265 WebSocket CLI connection fails after upgrade to 2026.3.13 — handshake timeout on loopback
- #47813 CLI WS handshake timeout to local gateway on loopback (probe/logs/call fail, webchat works)
- #48167 CLI handshake fails with gateway closed (1000) — gateway runs fine, CLI completely dead on 2026.3.13
- #48168 WebSocket handshake timeout too aggressive for lower-powered hardware
- #48297 [Bug]: CLI commands (openclaw logs, openclaw status) always fail with WebSocket handshake timeout. Gateway sends connect.challenge but CLI never replies with signed nonce. Channels (Telegram/QQ) work normally.
- #48349 [Bug]:Browser control commands fail with "gateway closed (1000)" error
- #48461 [Bug]: Intermittent browser command failures on Windows (gateway closed 1000/1006, handshake timeout)
- #48936 [Bug]: WebSocket Gateway Probe Timeout on Loopback
- #48954 WebSocket handshake timeout (3000ms) causes CLI commands to fail intermittently
- #49045 [Bug]: gateway connect failed: Error: gateway closed (1000):
- #49118 CLI commands fail with handshake timeout when plugins are slow to load
- #49201 [Bug]:  Title: openclaw cron list fails with handshake timeout - gateway unreachable     (missing scope: operator.read)
- #54616 Feature request: configurable WebSocket handshake timeout (DEFAULT_HANDSHAKE_TIMEOUT_MS)
- #56254 CLI handshake timeout when plugins take >3s to load
- #64407 [Bug]: Window 2026.4.9: loopback gateway reachable, but system event/devices CLI connect fails after Qwen heartbeat config changes

Open candidates:

- #45222 [Bug]: Intermittent local gateway websocket handshake failures on loopback (ws://127.0.0.1:18789)
- #46008 [Bug]: openclaw devices list bug
- #48360 gateway probe false-negative timeout/close on loopback while gateway is healthy
- #51357 [Bug]: CLI `probe` command consistently times out (code=1006) despite perfectly healthy gateway (False Negative)
- #51469 CLI gateway handshake timeout too short for cold-start module compilation
- #51679 OpenClaw 2026.3.13: local loopback gateway WS handshake times out / closes before connect for some CLI RPCs
- #52336 Bug: browser automation intermittently fails with gateway closed (1000 normal closure)
- #61554 [Bug]: WebSocket handshake timeout when executing `openclaw cron list`
- #67985 [Bug]:
- #68642 [Bug]: All CLI commands (except --version) hang indefinitely
- #68944 CLI commands hang at WebSocket gateway handshake (OpenClaw 2026.4.15)
