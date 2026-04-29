---
repo: openclaw/openclaw
cluster_id: gitcrawl-1850-dedupe-only-20260429-remote
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
  - "#57291"
candidates:
  - "#38853"
  - "#70420"
cluster_refs:
  - "#38596"
  - "#38853"
  - "#39096"
  - "#39288"
  - "#39743"
  - "#39744"
  - "#40073"
  - "#40960"
  - "#41339"
  - "#41354"
  - "#42751"
  - "#44227"
  - "#44529"
  - "#44619"
  - "#45485"
  - "#46103"
  - "#47535"
  - "#47756"
  - "#48931"
  - "#49051"
  - "#50836"
  - "#51116"
  - "#51370"
  - "#51636"
  - "#53168"
  - "#54230"
  - "#54682"
  - "#54752"
  - "#54851"
  - "#55763"
  - "#56057"
  - "#56086"
  - "#56137"
  - "#56184"
  - "#56235"
  - "#56274"
  - "#56339"
  - "#56351"
  - "#56399"
  - "#56472"
  - "#56588"
  - "#56644"
  - "#56645"
  - "#56732"
  - "#56816"
  - "#56833"
  - "#57111"
  - "#57195"
  - "#57291"
  - "#57666"
  - "#57731"
  - "#58173"
  - "#58569"
  - "#59927"
  - "#60930"
  - "#61124"
  - "#61153"
  - "#61508"
  - "#64201"
  - "#64771"
  - "#67806"
  - "#67999"
  - "#70352"
  - "#70420"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57291 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1850 on 2026-04-29."
---

# Gitcrawl Cluster 1850

Generated from local gitcrawl run cluster 1850 for `openclaw/openclaw`.

Display title:

> [Bug]: Gateway crashes with uncaught exception on Discord WebSocket stale-socket reconnect (code 1005)

Cluster shape from gitcrawl:

- total members: 64
- issues: 64
- pull requests: 0
- open candidates in local store: 2
- representative: #57291, currently closed in local store
- latest member update: 2026-04-28T05:49:58.884054444Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38596 Discord: health monitor restart loop — post-connection zombie sessions evade circuit breakers
- #39096 Discord: health-monitor 'stuck' detection triggers excessive false-positive reconnects
- #39288 Discord WebSocket drops every ~15 minutes with code 1006, resume fails with 1005
- #39743 [Bug]: Webchat messages not updating in real-time, require page refresh to see new messages
- #39744 [Bug]: Webchat messages not updating in real-time, require page refresh
- #40073 Discord health-monitor false positive: stale-socket restart kills inbound before first event (2026.3.7)
- #40960 [Bug]: Chat page does not auto-refresh new messages
- #41339 Discord WebSocket disconnects every 10-35 minutes continuously
- #41354 Discord plugin disconnects every ~10-15 minutes (health-monitor restart loop)
- #42751 WebChat UI: Messages not refreshing in real-time, requires manual refresh
- #44227 Discord WebSocket disconnects with code 1005 every 10-15 minutes, triggering health-monitor restarts
- #44529 [Bug]: Gateway crashes with unhandled promise rejection when Discord API returns 503 during health-monitor bot reconnect
- #44619 WebChat UI does not receive real-time updates from other channels
- #45485 [Bug]: Discord Websocket Times Out Every 10 Minutes
- #46103 [Bug]: WebSocket continuously disconnects and reconnects
- #47535 Discord WebSocket stale-socket restart loop on v2026.3.13 — multi-account setup, VPS/Linux
- #47756 [Control UI] 消息不实时推送，需要刷新页面才能看到新内容
- #48931 Discord WebSocket drops every ~5min in multi-bot swarm (heartbeat starvation from slow LLM responses)
- #49051 [Bug]: Plugin runtime WebSocket race condition crashes gateway on startup
- #50836 Discord: startup race condition causes permanent `connected: false` after health-monitor restart
- #51116 Discord WebSocket disconnects every ~10 minutes, messages lost during reconnect window
- #51370 [Bug]: Discord plugin does not reconnect after network outage during initial startup
- #51636 Discord WebSocket gateway disconnects every ~10 minutes (health-monitor restart loop)
- #53168 [Bug]: CLI commands crash gateway via WebSocket handshake timeout
- #54230 Discord health monitor: channel-only reconnect instead of full gateway restart
- #54682 Discord WebSocket connection drops and fails to reconnect silently
- #54752 Discord channel: uncaught exceptions crash gateway on network hiccups
- #54851 [Bug]: Discord stale-socket health-monitor recoveries are frequent and restart scope is unclear
- #55763 Discord WebSocket drops ~hourly with stale-socket; messages lost during reconnect window
- #56057 [Bug]: Channel WebSocket abnormal closure (Discord + Telegram) crashes entire gateway process
- #56086 Discord health-monitor: stale-socket triggers full gateway restart instead of surgical reconnect
- #56137 Gateway crashes on config reload: unhandled reconnect-exhausted error during abort
- #56184 Discord health-monitor restart crashes gateway with Max reconnect attempts (0) reached
- #56235 Discord health-monitor stale-socket restart causes uncaught exception crash (code 1005)
- #56274 [Bug]: Discord WebSocket stale-socket causes full gateway crash (no reconnect, uncaught exception loop)
- #56339 Discord health-monitor stale-socket restart causes uncaught exception that crashes the entire gateway
- #56351 Uncaught exception: Max reconnect attempts reached after code 1005 crashes gateway (v2026.3.24)
- #56399 [Bug]: Discord WebSocket crash — `Max reconnect attempts (0)` kills gateway process
- #56472 Discord gateway still crashes with maxReconnectAttempts (0) despite fix in #11836
- #56588 [Bug]: Discord provider crashes entire gateway process on reconnect failure — hardcoded 0 max reconnect attempts
- #56644 Discord health-monitor teardown crashes entire gateway (Max reconnect attempts 0)
- #56645 [Bug]: WebSocket webchat connections drop with code 1006 during long tool calls — no server-side ping/keepalive
- #56732 Discord gateway crashes ~25x/day: abort handler sets maxAttempts=0 on WebSocket code 1005
- #56816 Gateway crashes on provider WebSocket disconnect (code 1005) — no reconnect attempt
- #56833 Bug: SafeGatewayPlugin crashes on code 1005 when abortSignal fires (maxAttempts=0 sentinel collision)
- #57111 [Bug]: health-monitor stale-socket restart causes uncaught exception crash (Discord provider)
- #57195 Discord gateway crashes on WS close code 1005 due to race condition in abort/reconnect path
- #57291 [Bug]: Gateway crashes with uncaught exception on Discord WebSocket stale-socket reconnect (code 1005)
- #57666 Discord SafeGatewayPlugin: uncaught error during health monitor teardown causes gateway crash-loop
- #57731 [Bug]: Discord plugin aggressively drops connections (stale-socket) causing delayed and duplicated messages
- #58173 [Bug]: Discord bot tokens auto-reset due to excessive reconnects without backoff
- #58569 Webchat long-running task completions often don't surface until refresh; embedded agent WS stream falls back with HTTP 500
- #59927 Gateway crash: race condition causes maxAttempts=0 exception on disconnect
- #60930 [Bug]: Control UI / WebChat local websocket disconnects with code=1001 during long-running tasks; reconnect recovers via chat.history instead of stable live updates
- #61124 Discord reconnect-exhausted error crashes gateway during health-monitor restart
- #61153 Discord DM channel stops responding after WebSocket disconnect (code 1005)
- #61508 WebChat WebSocket drops (1006) during long model turns — missing keepalive pings
- #64201 [Bug]: OpenClaw: Crash loop on plugin config reload (ECONNREFUSED on loopback port 18789)
- #64771 [Bug]: Chat disconnects after some time in Control UI — forces page refresh
- #67806 [Bug]: Control UI: sent messages don't render until hard refresh
- #67999 Control UI doesn't render new messages dynamically — requires hard refresh
- #70352 Discord channel: stale-socket health-monitor restarts every 6 min on quiet guilds

Open candidates:

- #38853 [Bug]: Discord channel reconnect loop triggers Cloudflare rate-limit ban (Error 1015)
- #70420 Discord health monitor reports restart but active sessions are not recreated, making session-based checks look disconnected
