---
repo: openclaw/openclaw
cluster_id: gitcrawl-13581-dedupe-only-20260429-remote
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
  - "#51614"
candidates:
  - "#42246"
  - "#49569"
  - "#51832"
  - "#53745"
  - "#56733"
  - "#61616"
  - "#62784"
  - "#63757"
  - "#64752"
  - "#67782"
  - "#67986"
  - "#68833"
  - "#69165"
cluster_refs:
  - "#41666"
  - "#41704"
  - "#42121"
  - "#42200"
  - "#42246"
  - "#43178"
  - "#43181"
  - "#43271"
  - "#43354"
  - "#44030"
  - "#44634"
  - "#44946"
  - "#46669"
  - "#47126"
  - "#47149"
  - "#47909"
  - "#48390"
  - "#49305"
  - "#49461"
  - "#49569"
  - "#50597"
  - "#50866"
  - "#51342"
  - "#51614"
  - "#51832"
  - "#52717"
  - "#53698"
  - "#53745"
  - "#53815"
  - "#54029"
  - "#55138"
  - "#56061"
  - "#56733"
  - "#57743"
  - "#58268"
  - "#60983"
  - "#61616"
  - "#61701"
  - "#62051"
  - "#62163"
  - "#62289"
  - "#62784"
  - "#63002"
  - "#63757"
  - "#63854"
  - "#63925"
  - "#64009"
  - "#64056"
  - "#64752"
  - "#64774"
  - "#65215"
  - "#65517"
  - "#66965"
  - "#67396"
  - "#67782"
  - "#67986"
  - "#68153"
  - "#68223"
  - "#68414"
  - "#68833"
  - "#68969"
  - "#69165"
  - "#70463"
  - "#70608"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #51614 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13581 on 2026-04-29."
---

# Gitcrawl Cluster 13581

Generated from local gitcrawl run cluster 13581 for `openclaw/openclaw`.

Display title:

> Expose channels.whatsapp.staleEventThresholdMs config key for health monitor

Cluster shape from gitcrawl:

- total members: 64
- issues: 61
- pull requests: 3
- open candidates in local store: 13
- representative: #51614, currently closed in local store
- latest member update: 2026-04-28T22:51:07.434943621Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41666 [Bug] Gateway event loop stalls (79+ min) when Telegram 400 'message too long' error occurs during concurrent cron burst
- #41704 Telegram polling stalls indefinitely when proxy TCP connection drops silently
- #42121 [Bug]: Openclaw IRC message cut off
- #42200 [Bug]: Slack: Streaming messages show incomplete content
- #43178 bug: Telegram polling watchdog triggers full gateway restart under concurrent multi-agent load (10 agents)
- #43181 Browser tool timeout blocks Telegram polling loop, causing cascading gateway restarts
- #43271 Cron announce delivery can collapse WhatsApp paragraph formatting into a single line
- #43354 Health monitor: stale-socket restarts entire gateway, causing cron job failures and excessive downtime
- #44030 Telegram poller: abort long-poll HTTP connection on shutdown
- #44634 Bug: Slack DM inbound received but auto turn intermittently not triggered (stale-socket restarts)
- #44946 feat: make WhatsApp stale-socket threshold configurable
- #46669 Browser proxy blocks event loop, kills Telegram polling
- #47126 Bug: Telegram reaction system events stop arriving after multiple gateway restarts (SIGUSR1)
- #47149 Auto-announce silently fails when subagent response exceeds channel message limit
- #47909 fix: auto-split long messages at channel limits instead of silent failure
- #48390 WhatsApp Web: chronic 440 session conflict causes stale-socket loop and delivery failures
- #49305 WhatsApp Web listener does not survive session logout - gateway breaks permanently until manual restart
- #49461 Telegram bots freeze periodically due to NAT timeout silently dropping idle getUpdates TCP connections
- #50597 [Bug] Slack socket mode reconnect causes duplicate outbound messages
- #50866 Telegram 429 rate limit causes crash spiral when multiple agents/crons post simultaneously
- #51342 Feature request: Make staleEventThresholdMs configurable (WhatsApp restart loop on low-traffic accounts)
- #51614 Expose channels.whatsapp.staleEventThresholdMs config key for health monitor
- #52717 Feature: configurable staleEventThresholdMs for channel health monitor
- #53698 [Bug]: WhatsApp watchdog MESSAGE_TIMEOUT_MS (30min) not configurable — causes reconnect loops on low-traffic setups
- #53815 Web UI stops updating messages after WhatsApp gateway reconnect (status 428)
- #54029 Bug: Slack outbound sends fail with 'Channel is unavailable' while inbound socket remains connected
- #55138 feat: Expose WhatsApp message watchdog timeout as config option
- #56061 Telegram long-poll hangs indefinitely on dead TCP socket — no socket-level read timeout
- #57743 Telegram: getUpdates polling stalls for 90-110s intermittently despite healthy network and IPv4 forced
- #58268 [Bug]: Slack socket-mode mentions silently dropped as no-mention after stale-socket reconnect
- #60983 Cron announce delivery fails with 'message is too long' on Telegram — no auto-chunking
- #61701 v2026.4.5: gateway process 100% CPU after upgrade from v2026.4.2
- #62051 v2026.4.5 regression: worker processes load all plugins, causing CPU saturation
- #62163 [Bug]: Extreme CPU/RAM spike during Telegram pairing approval due to full plugin registry load
- #62289 v2026.4.5 regression: cron/worker processes spin at 100% CPU due to unconditional plugin import
- #63002 High CPU usage (>140%) and service stalls on Debian 13 after upgrading to 2026.4.8
- #63854 WhatsApp watchdog messageTimeoutMs should be configurable (30min hardcoded timeout causes cascading 499/408 errors)
- #63925 [Feature]: Expose WhatsApp web message watchdog timeout as config
- #64009 [Bug]: Slack socket-mode connection becomes stale, misses ping/pong, and restarts repeatedly
- #64056 Telegram: subagent completion announce and exec approvals bypass message chunking
- #64774 Readiness checker uses hardcoded staleEventThreshold (30min), ignores gateway.channelStaleEventThresholdMinutes config
- #65215 WhatsApp web channel restarts every 30m because hidden messageTimeoutMs watchdog is not exposed in config
- #65517 [Bug]: Active-memory embedded sub-agent run blocks event loop, starving Telegram polling — agent goes permanently unresponsive
- #66965 WhatsApp: expose messageTimeoutMs as config option to control idle reconnect cycle
- #67396 Telegram channel: gateway silently drops messages exceeding 4096 characters
- #68153 Telegram channel health-monitor restart triggers full gateway EADDRINUSE loop (same class as #22169)
- #68223 Multi Telegram Bot WS Handshake Timeout Cascade on Gateway Start
- #68414 Bug: Inbound message during agent turn completion silently dropped (race condition)
- #68969 [Bug]:[WSL] The CPU usage of OpenClaw's gateway process spikes to 100%.
- #70463 WhatsApp: health-monitor race condition causes multi-hour outages
- #70608 [Feature]: WhatsApp web idle watchdog should be configurable (30m no-message reconnect)

Open candidates:

- #42246 [Feature]: Configurable batching/aggregation of outbound Telegram notifications
- #49569 fix(telegram): retry setMyCommands on 429 rate-limit with retry_after backoff
- #51832 [Bug]: Multi-agent error cascade when gateway posts error messages to shared Slack channels
- #53745 Gateway freezes after nested subagent activity, stops all Telegram polling
- #56733 Gateway process alive but event loop frozen — all HTTP requests silently timeout
- #61616 [Bug]: [WSL2] Global 30-min gateway stall (:29/:59) affects Telegram + Control UI
- #62784 [Bug] Multi-agent Slack: concurrent Socket Mode connections cause pong timeout storm and gateway SIGKILL
- #63757 [Bug]: Telegram reactions are received but not exposed as a stable structured hook for downstream feedback
- #64752 [Bug]: Inbound reaction context events arrive but do not trigger an agent turn (Telegram)
- #67782 fix(telegram): skip delete before non-empty command sync
- #67986 [Bug]: Gateway wedges silently mid-session after 2026.4.15 — only recovers on WhatsApp 408 + health monitor restart
- #68833 fix(telegram): preserve customCommands priority in menu budget trimming
- #69165 [Feature]: Outbound Telegram send queue with per-chat rate limiting and retry_after-aware backoff
