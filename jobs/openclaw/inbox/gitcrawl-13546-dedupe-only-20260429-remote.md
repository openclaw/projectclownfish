---
repo: openclaw/openclaw
cluster_id: gitcrawl-13546-dedupe-only-20260429-remote
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
  - "#61195"
candidates:
  - "#50040"
  - "#50174"
  - "#57425"
  - "#68232"
  - "#71066"
cluster_refs:
  - "#39989"
  - "#41753"
  - "#42100"
  - "#42782"
  - "#43049"
  - "#43233"
  - "#43479"
  - "#43569"
  - "#44096"
  - "#44396"
  - "#44705"
  - "#45350"
  - "#45650"
  - "#45714"
  - "#47142"
  - "#48219"
  - "#48536"
  - "#50040"
  - "#50064"
  - "#50174"
  - "#50505"
  - "#50999"
  - "#52116"
  - "#53338"
  - "#53493"
  - "#53721"
  - "#54513"
  - "#55032"
  - "#55304"
  - "#55727"
  - "#55844"
  - "#56230"
  - "#56324"
  - "#56518"
  - "#56566"
  - "#57040"
  - "#57425"
  - "#57556"
  - "#58064"
  - "#58230"
  - "#58951"
  - "#59198"
  - "#59332"
  - "#59833"
  - "#60088"
  - "#60400"
  - "#60646"
  - "#61195"
  - "#61273"
  - "#61712"
  - "#62031"
  - "#62107"
  - "#63516"
  - "#63811"
  - "#64178"
  - "#64288"
  - "#65485"
  - "#66880"
  - "#67034"
  - "#68232"
  - "#69064"
  - "#69147"
  - "#69304"
  - "#71066"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #61195 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13546 on 2026-04-29."
---

# Gitcrawl Cluster 13546

Generated from local gitcrawl run cluster 13546 for `openclaw/openclaw`.

Display title:

> [Bug]: Telegram provider silently fails to start on fresh gateway boots in v2026.4.2

Cluster shape from gitcrawl:

- total members: 64
- issues: 61
- pull requests: 3
- open candidates in local store: 5
- representative: #61195, currently closed in local store
- latest member update: 2026-04-28T05:49:58.697062318Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39989 Telegram inbound intermittently dies on 2026.3.2 while outbound still works
- #41753 [Bug]: Intermittent Inbound Telegram DM Delivery Failure Persists in v2026.3.
- #42100 macOS: Telegram polling stalls for 100s after sleep/wake or network change
- #42782 [Feature Request] Add health-monitor auto-reconnect for Telegram polling
- #43049 Hot reload triggers SIGTERM causing gateway restart when modifying channel config
- #43233 [Bug]: [telegram] Polling stall detected (no getUpdates for 107.67s); forcing restart.
- #43479 [Bug]: Telegram long-polling stops receiving messages after connection drop, no auto-reconnect
- #43569 409 Conflict loop when polling multiple Telegram bot accounts simultaneously
- #44096 Hot reload sends SIGTERM to gateway on every config evaluation (2026.3.11)
- #44396 Telegram polling stall (~95s) causes significant message delivery delay
- #44705 Bug: Agent Configuration Loop Causes Gateway Death Spiral
- #45350 [Bug] Telegram channel config hot-reload unloads launchd service, killing gateway
- #45650 [Bug]: Telegram polling stalls when AI provider returns overloaded_error during message processing
- #45714 [Bug]: Telegram provider stops polling for inbound messages while outbound still works
- #47142 Feature: Graceful gateway self-restart — prevent zombie processes when agent calls `openclaw gateway restart`
- #48219 [Bug]: Telegram Plugin Fails on macOS with `operation was aborted` Despite Host Connectivity
- #48536 Bug: Telegram startup long-poll getUpdates can stall for ~120s before first restart
- #50064 Telegram polling: self-sustaining 409 getUpdates conflict from probe + health-monitor re-triggering transport
- #50505 fix(telegram): avoid self-sustaining polling 409 conflicts
- #50999 [Bug]: Telegram polling enters repeated stall/restart loop on macOS in 2026.3.13 despite healthy direct Telegram connectivity
- #52116 Telegram polling client gets permanently stuck after transient network failure
- #53338 v2026.3.23 regression: Telegram polling dies after network errors and does not recover on restart
- #53493 [Bug] 2026.3.23-2: Telegram channel stops initializing permanently after polling stall loop
- #53721 Telegram channel fails to initialize after gateway restart (regression in 2026.3.23-2)
- #54513 Telegram polling has no stall detection (unlike Slack health-monitor)
- #55032 [Bug]: Slack and Telegram show as configured, but no channel accounts are loaded and `status --deep` shows an empty Channels table
- #55304 [Bug]: Telegram channels fail to initialize silently after gateway restart in v2026.3.24
- #55727 [Bug]:
- #55844 Channels not initializing on gateway startup (channels: {} in health)
- #56230 Telegram polling lacks per-token dedup guard — external scripts and hot-reload can silently create duplicate pollers
- #56324 fix(telegram): add per-token duplicate poller guard to prevent 409 conflicts
- #56518 [Bug]: Telegram channel not initializing on startup — no [telegram] logs, channel table empty (macOS arm64)
- #56566 Telegram provider starts duplicate getUpdates polling loop within single process (409 conflict)
- #57040 [Bug]: Telegram channel registry stays empty after restart/update even though bot token is valid and Telegram receives updates
- #57556 feat: graceful gateway restart with session recovery
- #58064 Discord/Telegram channels silently fail to initialize under LaunchAgent after restart
- #58230 Bug: gateway enters restart loop on Telegram provider startup in 2026.3.28
- #58951 Persistent 409 getUpdates conflict with single bot instance — dual transport + confirmPersistedOffset race
- #59198 [Bug] Telegram getUpdates 409 conflict when multiple bot accounts poll from same gateway
- #59332 Feature: Telegram polling watchdog — auto-restart connection on stall without killing gateway
- #59833 [Bug]: Telegram polling stalls on startup in 2026.4.1 (WSL2)
- #60088 [Bug]: Telegram Channel Stops Responding After First Message
- #60400 [Bug]: All channels silently fail to initialize on 2026.4.2 (Telegram confirmed)
- #60646 [Bug]: Channels (Telegram/WhatsApp) not loading in v2026.4.2 - empty table in status
- #61195 [Bug]: Telegram provider silently fails to start on fresh gateway boots in v2026.4.2
- #61273 [Bug]: Telegram channel not initializing on 2026.4.2 (valid bot token, no telegram runtime logs)
- #61712 Telegram polling fails to start after gateway restart (LaunchAgent)
- #62031 [Bug]: Telegram channel fails to initialize after gateway restart - silent failure
- #62107 [Feature]: Enhanced handling of gateway restart
- #63516 [Bug]: Telegram polling stalls intermittently causing delayed/missed message delivery and heartbeat failures
- #63811 [Bug]: Telegram Plugin Auto-Restart Loop in 2026.4.9 — Bot Receives Messages But Never Responds
- #64178 [Bug]: Telegram channel not loading in 2026.4.9 despite valid config  Text (copy-paste):
- #64288 [Bug]:  [telegram] polling runner stopped (polling stall detected)
- #65485 Gateway SIGTERM-restarts kill in-flight agent runs on non-critical config changes
- #66880 [Bug]: Telegram Plugin Restart-Loop in 4.14 — deleteMyCommands failed (streaming fix attempted)
- #67034 [Bug]: Telegram multi-account polling avalanche - all 16 accounts stall and restart simultaneously
- #69064 [Bug]: Telegram stall auto-recovery sometimes completes silently without resuming polling; requires manual service restart
- #69147 Telegram long-poll stalls cause delayed or missing replies
- #69304 Telegram inbound breaks after gateway restart/update with persistent getUpdates 409 self-conflict

Open candidates:

- #50040 Telegram delivery reliability: polling stalls can lead to silent outbound message loss
- #50174 [Bug]: Windows native: Telegram polling stalls every ~107s (UND_ERR_CONNECT_TIMEOUT) + Discord disconnect restarts while gateway stays healthy
- #57425 Feature: Graceful Gateway Restart with Session Recovery
- #68232 [Bug] Config edits trigger Telegram channel restart via hot reload — destroys in-memory context
- #71066 Telegram subsystem: getUpdates polling silently non-functional despite reachable API
