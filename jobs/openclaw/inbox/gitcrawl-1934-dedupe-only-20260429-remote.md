---
repo: openclaw/openclaw
cluster_id: gitcrawl-1934-dedupe-only-20260429-remote
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
  - "#61837"
candidates:
  - "#41837"
  - "#44160"
  - "#50138"
  - "#51104"
  - "#56668"
  - "#57621"
  - "#63223"
  - "#63257"
  - "#68656"
  - "#68737"
  - "#70739"
cluster_refs:
  - "#41396"
  - "#41837"
  - "#42067"
  - "#42702"
  - "#44160"
  - "#44258"
  - "#44400"
  - "#45623"
  - "#45721"
  - "#46099"
  - "#46966"
  - "#47670"
  - "#48147"
  - "#48644"
  - "#49723"
  - "#49990"
  - "#50138"
  - "#51018"
  - "#51104"
  - "#52372"
  - "#52807"
  - "#53132"
  - "#53831"
  - "#54691"
  - "#54743"
  - "#55569"
  - "#56492"
  - "#56668"
  - "#56946"
  - "#57023"
  - "#57075"
  - "#57621"
  - "#57792"
  - "#58260"
  - "#58290"
  - "#59820"
  - "#61505"
  - "#61703"
  - "#61837"
  - "#61851"
  - "#61922"
  - "#61946"
  - "#61951"
  - "#62084"
  - "#62254"
  - "#62269"
  - "#62302"
  - "#62320"
  - "#62372"
  - "#62410"
  - "#62430"
  - "#62806"
  - "#62856"
  - "#63223"
  - "#63257"
  - "#65733"
  - "#67653"
  - "#68656"
  - "#68737"
  - "#68776"
  - "#68781"
  - "#70057"
  - "#70739"
  - "#70841"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #61837 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1934 on 2026-04-29."
---

# Gitcrawl Cluster 1934

Generated from local gitcrawl run cluster 1934 for `openclaw/openclaw`.

Display title:

> [Bug] openclaw configure: Multiple plugins fail with RangeError: Maximum call stack size exceeded

Cluster shape from gitcrawl:

- total members: 64
- issues: 58
- pull requests: 6
- open candidates in local store: 11
- representative: #61837, currently closed in local store
- latest member update: 2026-04-28T22:51:07.483206243Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41396 Discord outbound works but inbound gateway never connects (connected=false, no inbound messages)
- #42067 [Bug]: Openclaw startup failed after install gateway service with bun runtime and setup proxy for discord
- #42702 [Bug]:  Discord plugin fails with "fetch failed" when using proxy
- #44258 Multi-bot Discord: stagger connections to prevent 503 overflow on startup
- #44400 Feature request: channels.discord.connectStagger config option
- #45623 Bundled Discord channel path blocks local gateway handshake and makes gateway cold start take ~60s before listening
- #45721 Discord REST API doesn't use proxy when channels.discord.proxy is configured
- #46099 Bug: Health-monitor force-restarts healthy Discord bots due to connected race condition
- #46966 [Bug]: Gateway dev-build startup has ~80s silent period before first log line
- #47670 [Bug]: Discord proxy config recognized but REST API fails with fetch failed
- #48147 fix(gateway): keep long-running clients alive across reconnect delays
- #48644 Gateway startup takes 4-10 minutes (603 JS chunks, 2.2GB memory peak)
- #49723 fix(gateway): remove .unref() from reconnect timer to keep node-host alive
- #49990 Title channels.discord.proxy does not proxy REST API requests — guild resolve fails, guild channels broken behind HTTP proxy
- #51018 Discord can log in behind proxy, but native command deploy / bot identity fetch fail with 'fetch failed'
- #52372 Discord WSS Gateway never sends Identify after WebSocket opened (Linux)
- #52807 [Bug]: Gateway event loop hangs for over a hundred seconds during startup due to synchronous jiti plugin runtime resolution
- #53132 Discord: multi-account gateway startup hangs at 'awaiting gateway readiness' after Carbon reconcile change (v2026.3.22)
- #53831 [Bug] Discord channel module silently fails to start on Windows (no logs, no error) in 2026.3.23-2
- #54691 Health monitor does not detect bots stuck in 'awaiting gateway readiness'
- #54743 config set throws Maximum call stack size exceeded
- #55569 Discord Gateway never reaches READY state — thread creation fails (ACP thread binding broken)
- #56492 Discord gateway never connects: Carbon Client constructor doesn't await async GatewayPlugin.registerClient
- #56946 [Bug]: Infinite CPU loop from jiti circular require when loading bundled plugin metadata
- #57023 [Bug]: 2026.3.28 openclaw doctor --fix hits plugin stack overflow, so gateway recovery fails
- #57075 Discord gateway hangs at 'awaiting gateway readiness' on single-account setup (v2026.3.22–v2026.3.28)
- #57792 v2026.3.28: AJV schema validator crashes with Maximum call stack size exceeded, agents produce zero output
- #58260 Discord channels.discord.proxy does not cover Carbon REST calls — deploy commands and bot identity fetch bypass proxy
- #58290 Discord bot never reaches ready state — stuck at awaiting gateway readiness (v2026.3.28)
- #59820 [Bug]: [v2026.4.1] Discord provider hangs on first startup, requires health-monitor restart to connect
- #61505 Discord channel handler stuck at 'awaiting gateway readiness' — standalone discord.js works fine
- #61703 [Bug] Discord gateway race condition - 'awaiting gateway readiness' on cold start
- #61837 [Bug] openclaw configure: Multiple plugins fail with RangeError: Maximum call stack size exceeded
- #61851 [Bug] 2026.4.2 tasks maintenance still hits plugin stack overflow (RangeError)
- #61922 2026.4.5: `openclaw dashboard` crashes with Maximum call stack size exceeded
- #61946 Bug: memory-core promote causes Maximum call stack size exceeded when loading plugins
- #61951 [Bug] memory-core Dreaming causes RangeError: Maximum call stack size exceeded during JSON Schema compilation (AJV)
- #62084 [Bug]: 2026.4.5: device commands fail because google plugin crashes with RangeError: Maximum call stack size exceeded
- #62254 [Bug]: RangeError: Maximum call stack size exceeded when loading plugins in v2026.4.5
- #62269 [Bug]: Gateway start so slow, and some errors happend
- #62302 [Bug]: RangeError: Maximum call stack size exceeded on startup due to talk-voice invoking JITI AST compilation on monolithic io core
- #62320 [Bug]: CLI Stack Overflow in loadOpenClawPlugins / recordPluginError (2026.4.5)
- #62372 [Bug]: RangeError: Maximum call stack size exceeded
- #62410 [Bug]: Maximum call stack size exceeded during JSON Schema validation
- #62430 [Bug]: openclaw tui crashes with Maximum call stack size exceeded during schema compilation
- #62806 [Bug]: 2026.4.5 — bundled provider plugins still hit stack overflow despite facade recursion guard
- #62856 [Bug] OpenClaw 2026.4.5 minimax/google 插件 JSON Schema 循环引用导致栈溢出崩溃
- #65733 [Bug]: Plugin discovery via safeRealpathSync takes ~20 minutes during gateway startup on Windows
- #67653 [Bug]: Windows: Gateway startup takes ~60s before Discord comes online
- #68776 Discord inbound silently hangs in `ensureConfiguredBindingRouteReady` for `type: "acp"` bindings
- #68781 Gateway startup extremely slow (70-100s), causing TUI timeouts and spontaneous restarts
- #70057 Discord gateway startup takes 1–2 minutes after 4.1 → 4.20 upgrade (follow-up to #69841)
- #70841 [Bug]: Discord plugin: post-restart gateway wedges at "awaiting gateway readiness" on macOS (no 15s timeout fires)

Open candidates:

- #41837 Mattermost health monitor doesn't detect deaf websocket (connected but not delivering messages)
- #44160 Mattermost WebSocket: add ping/pong keepalive to detect silent connection drops
- #50138 Mattermost channel health monitor fails to detect and recover from silent WebSocket disconnection
- #51104 [Bug]: Mattermost WebSocket add ping/pong keepalive to detect half-dead connections
- #56668 fix(gateway): add WebSocket ping keepalive to prevent idle connection drops
- #57621 fix(mattermost): add WebSocket ping/pong keepalive to detect silent connection drops
- #63223 Gateway becomes zombie after system CA rotation; internal reconnect loop cannot recover; Discord READY log line also missing in 2026.4.5
- #63257 Windows Gateway Feishu API timeout 30s at startup
- #68656 Slow startup on Windows (~39s before ready) with long silent gap before plugin registration
- #68737 fix(mattermost): auto-reconnect WebSocket after consecutive health check failures
- #70739 fix(gateway): add SSE heartbeat to keep /v1/responses and /v1/chat/completions streams alive through idle-timeout proxies
