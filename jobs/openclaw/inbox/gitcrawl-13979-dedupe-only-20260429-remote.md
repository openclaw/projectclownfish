---
repo: openclaw/openclaw
cluster_id: gitcrawl-13979-dedupe-only-20260429-remote
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
  - "#49118"
candidates:
  - "#38091"
  - "#42354"
  - "#45926"
  - "#52336"
  - "#52511"
  - "#52618"
  - "#54904"
  - "#55532"
  - "#55619"
  - "#56215"
  - "#56651"
  - "#57978"
  - "#59339"
  - "#59470"
  - "#66841"
  - "#70879"
cluster_refs:
  - "#38090"
  - "#38091"
  - "#40451"
  - "#40459"
  - "#41652"
  - "#42030"
  - "#42354"
  - "#42875"
  - "#44976"
  - "#45080"
  - "#45127"
  - "#45674"
  - "#45926"
  - "#45960"
  - "#46097"
  - "#46256"
  - "#46472"
  - "#46885"
  - "#46923"
  - "#46951"
  - "#47827"
  - "#47889"
  - "#48168"
  - "#48954"
  - "#49118"
  - "#49291"
  - "#49405"
  - "#49530"
  - "#49908"
  - "#50504"
  - "#50665"
  - "#51274"
  - "#51469"
  - "#52336"
  - "#52511"
  - "#52618"
  - "#52623"
  - "#52671"
  - "#53204"
  - "#54616"
  - "#54904"
  - "#55531"
  - "#55532"
  - "#55619"
  - "#55631"
  - "#56215"
  - "#56254"
  - "#56651"
  - "#57801"
  - "#57978"
  - "#59339"
  - "#59470"
  - "#59753"
  - "#59796"
  - "#60651"
  - "#60653"
  - "#62729"
  - "#66309"
  - "#66368"
  - "#66841"
  - "#68766"
  - "#68865"
  - "#69255"
  - "#70879"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #49118 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13979 on 2026-04-29."
---

# Gitcrawl Cluster 13979

Generated from local gitcrawl run cluster 13979 for `openclaw/openclaw`.

Display title:

> CLI commands fail with handshake timeout when plugins are slow to load

Cluster shape from gitcrawl:

- total members: 64
- issues: 55
- pull requests: 9
- open candidates in local store: 16
- representative: #49118, currently closed in local store
- latest member update: 2026-04-28T22:51:07.380220224Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38090 [Bug] OpenClaw UI WebSocket reconnect 导致会话 terminated
- #40451 Feishu health-monitor restarts cause leaked reconnect loops in @larksuiteoapi/node-sdk WSClient
- #40459 fix(feishu): close WSClient on abort to prevent reconnect loop leaks
- #41652 [Bug]: openclaw v2026.2.26 continuously report device-id-mismatch error
- #42030 [Bug]: Gateway WebSocket closes all connections (1000) due to typo "tttttconsole" in compiled dist?
- #42875 openclaw logs --follow Cannot View Gateway Real-time Logs
- #44976 [Bug]: WebSocket connection frequently drops during browser data scraping
- #45080 openclaw logs --follow 偶发连接失败：handshake timeout
- #45127 [Bug]: openclaw logs --follow --local-time fails
- #45674 fix(feishu): add wsConfig with PingInterval/PingTimeout to WSClient
- #45960 fix(feishu): capture unhandled websocket rejections to enable self-healing restarts
- #46097 [Bug]: CLI commands fail with handshake timeout on arm64 (Raspberry Pi 5)
- #46256 [Bug]: openclaw browser start/status fails with handshake timeout on macOS when plugin loading is slow
- #46472 fix(feishu): add WebSocket heartbeat config to prevent silent disconnection
- #46885 [Bug] openclaw logs: WS handshake timeout due to event loop starvation during module loading
- #46923 Bug: CLI 连接导臻 gateway 退出
- #46951 openclaw logs fails with handshake timeout when TypeScript plugins are installed
- #47827 CLI cold-start loads all plugins even for simple gateway queries
- #47889 Handshake timeout too short (3s), causing failures when CLI loads plugins
- #48168 WebSocket handshake timeout too aggressive for lower-powered hardware
- #48954 WebSocket handshake timeout (3000ms) causes CLI commands to fail intermittently
- #49118 CLI commands fail with handshake timeout when plugins are slow to load
- #49291 openclaw cron run: websocket handshake fails (protocol mismatch + missing device auth)
- #49405 [CLI] Gateway connection fails with "gateway closed (1000)" in non-JSON mode (Potential race condition with `withProgress` spinner)
- #49530 CLI nodes invoke fails with 'gateway closed (1000)' - WebSocket handshake timeout despite node connected in Dashboard
- #49908 openclaw logs / openclaw logs --follow fails with gateway closed (1000) while logs.tail RPC works
- #50504 CLI gateway handshake fails on slow-startup hosts (challenge timeout too short)
- #50665 [Bug]: Gateway WS handshake timeout (3s) not configurable in production; closes openclaw acp bridge connections
- #51274 CLI handshake timeout (3s) too short — causes silent 1000 close on loaded gateways
- #51469 CLI gateway handshake timeout too short for cold-start module compilation
- #52623 fix(feishu): add supervisor loop for WebSocket reconnection
- #52671 CLI 连接 Gateway 时握手超时，被其他请求阻塞
- #53204 sessions_send announce retry blocks agent session for ~6 minutes on channel errors
- #54616 Feature request: configurable WebSocket handshake timeout (DEFAULT_HANDSHAKE_TIMEOUT_MS)
- #55531 Feishu WebSocket: No exponential backoff on reconnect, causes rate limit amplification
- #55631 [Bug] QQ Bot WebSocket reconnect (4009) triggers main session reset via heartbeat
- #56254 CLI handshake timeout when plugins take >3s to load
- #57801 Feishu WebSocket reconnect every 5 minutes causes webchat console disconnect (code=1006)
- #59753 [Bug]: 飞书无限重连Feishu WebSocket reconnect loop never stops — gateway becomes unresponsive without manual restart
- #59796 [Bug]: The command openclaw logs --follow is failing. Could you please help me check what's wrong?
- #60651 CLI:  and non-direct invocations can fail with 1006 while direct  remains the only stable path
- #60653 CLI: cron and non-direct invocations can fail with 1006 while direct gateway call remains the only stable path
- #62729 [Bug]: CLOSE_WAIT connections accumulate in isolated session cron jobs, eventually blocking event loop
- #66309 [Bug]: runtime-loading CLI subcommands spawn codex app-server per invocation (cron list/status ~18s, gateway health ~5s)
- #66368 CLI commands hang on first invocation (qclaw-plugin synchronous initialization blocks Gateway)
- #68766 [Bug]: Feishu WebSocket connection does not recover after transient token refresh failure
- #68865 fix(feishu): add application-level WebSocket reconnection with backoff
- #69255 [Bug]: Feishu WebSocket fails to reconnect after token timeout during gateway restart/bootstrap

Open candidates:

- #38091 [Bug] OpenClaw UI WebSocket reconnect 导致会话 terminated
- #42354 [Bug]: [Feishu/Lark] WebSocket long connection fails - code: 1000040351, system busy
- #45926 sessions_send: announce step skipped on timeout (should run async)
- #52336 Bug: browser automation intermittently fails with gateway closed (1000 normal closure)
- #52511 [Bug]: control UI session intermittently loses browser control permission (gateway closed 1000)
- #52618 fix(feishu): WebSocket connection not recovered after network disruption
- #54904 fix(feishu): enforce configured webhookPath
- #55532 Feishu WebSocket: No exponential backoff on reconnect
- #55619 fix(feishu): exponential backoff + PingInterval guard for WS reconnect
- #56215 Gateway WebSocket connections leak - CLOSE_WAIT/FIN_WAIT_2 zombie connections cause crashes
- #56651 Feature request: configurable announce/connection timeout for gateway
- #57978 fix(feishu): supervisor loop to recover from WSClient retry exhaustion
- #59339 feat: configurable announce timeout (hardcoded 30s causes A2A reply loss)
- #59470 Bug: openclaw gateway call times out for plugin gateway methods even when the method executes successfully
- #66841 openclaw logs --follow can show stale/misleading old-version file logs after side-by-side cutover
- #70879 Feishu plugin lacks retry logic for API rate limit errors
