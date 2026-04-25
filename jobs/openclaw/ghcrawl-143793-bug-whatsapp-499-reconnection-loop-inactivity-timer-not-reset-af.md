---
repo: openclaw/openclaw
cluster_id: ghcrawl-143793-bug-whatsapp-499-reconnection-loop-inactivity-timer-not-reset-af
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
  - "#62258"
candidates:
  - "#45474"
  - "#46518"
  - "#47367"
  - "#49057"
  - "#50684"
  - "#51111"
  - "#57718"
  - "#58480"
  - "#59589"
  - "#60136"
  - "#60626"
  - "#61663"
  - "#61744"
  - "#63410"
  - "#63855"
  - "#65290"
  - "#66917"
  - "#66920"
  - "#70678"
  - "#70856"
cluster_refs:
  - "#40079"
  - "#45198"
  - "#45474"
  - "#46372"
  - "#46518"
  - "#47154"
  - "#47367"
  - "#47527"
  - "#49057"
  - "#50684"
  - "#51111"
  - "#54322"
  - "#54332"
  - "#54614"
  - "#55030"
  - "#55246"
  - "#55752"
  - "#56054"
  - "#57718"
  - "#58480"
  - "#59107"
  - "#59275"
  - "#59589"
  - "#60136"
  - "#60337"
  - "#60378"
  - "#60626"
  - "#61326"
  - "#61663"
  - "#61744"
  - "#62258"
  - "#63410"
  - "#63496"
  - "#63855"
  - "#64553"
  - "#65290"
  - "#66917"
  - "#66920"
  - "#70678"
  - "#70856"
canonical_hint: "ghcrawl representative #62258 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from ghcrawl run cluster 143793 on 2026-04-25."
---

# GHCrawl Cluster 143793

Generated from local ghcrawl run cluster 143793 for `openclaw/openclaw`.

Display title:

> [Bug] WhatsApp 499 reconnection loop: inactivity timer not reset after successful reconnect

Cluster shape from ghcrawl:

- total members: 40
- issues: 40
- pull requests: 0
- open candidates in local store: 20
- representative: #62258, currently closed in local store
- latest member update: 2026-04-25T17:12:54.202Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- #40079 Message loss during gateway/channel restarts - need persistent queue
- #45198 WhatsApp health-monitor reconnect leaves receiver in broken state (silent message drop)
- #46372 Message loss during WhatsApp channel restart (stale-socket reconnect)
- #47154 [WhatsApp] Agent message tool sends on stale socket while auto-reply uses live socket
- #47527 [Bug]: WhatsApp does not deliver inbound messages
- #54322 feat(gateway): persistent outbound message queue across restarts
- #54332 WhatsApp watchdog idle counter doesn't reset on reconnect, causing 60s flap loops
- #54614 WhatsApp health monitor stale-socket detection causes unnecessary restarts and session conflicts
- #55030 [Bug]: WhatsApp aggressive 30-minute heartbeat causes cascading reconnects every ~60 seconds
- #55246 WhatsApp watchdog reconnect loop: inactivity timer not reset after reconnect
- #55752 [Bug]: WhatsApp creds.json corrupted on every clean gateway restart (SIGTERM)
- #56054 WhatsApp Baileys: perpetual status 499 reconnection loop with creds.json corruption cycle
- #59107 [Bug]: WhatsApp proactive outbound messages fail when socket degraded, reactive messages succeed
- #59275 [Bug]: WhatsApp: outbound messages silently lost during WebSocket reconnect — no retry after recovery
- #60337 [Bug]: WhatsApp Baileys: 499 reconnect loop — idle timer not resetting on reconnect
- #60378 [Bug]: WhatsApp gateway flapping — status 499 reconnect cascade with aggressive heartbeat timeout
- #61326 WhatsApp Baileys: idle message timer doesn't reset on reconnect, causing infinite 499 loop
- #62258 [Bug] WhatsApp 499 reconnection loop: inactivity timer not reset after successful reconnect
- #63496 WhatsApp creds.json corruption every ~30 minutes (non-atomic write)
- #64553 [Bug]: WhatsApp QR code expires silently (no rotation, no freshness indicator)

Open candidates:

- #45474 [Bug]:  WhatsApp channel shows linked/OK but inbound messages are not delivered (single tick), with repeated 440/401 reconnect loop
- #46518 WhatsApp QR pairing fails silently on 2026.3.13 (macOS ARM64 Docker)
- #47367 [Bug]: whatsapp QR not showing so unable to scan and bind to my account
- #49057 [Bug]: WhatsApp Web listener flaps / logs out on 2026.3.13 causing cron + message delivery failures (“No active WhatsApp Web listener”)
- #50684 WhatsApp messages dropped during 503 reconnect window
- #51111 [Bug]: WhatsApp QR login appears linked briefly, then becomes disconnected with 401 / device_removed
- #57718 WhatsApp creds.json repeatedly restored from backup on startup, even after fresh re-pair
- #58480 WhatsApp creds.json corrupted on every reconnect — race between async save and sync restore
- #59589 Cascading reconnects every ~30min after idle (Gateway WebSocket)
- #60136 [BUG] WhatsApp credentials (creds.json) corrupted every ~35 minutes during pre-key rotation
- #60626 WhatsApp: reconnect loop lacks exponential backoff after status 499 disconnects
- #61663 [Bug]: WhatsApp QR Code Refresh
- #61744 [Bug]: WhatsApp links successfully, but peers/groups discovery is empty and the gateway reconnects repeatedly with status 499
- #63410 WhatsApp: Persistent 408 session timeout loop — WebSocket keepalive not preventing server-side idle disconnect
- #63855 WhatsApp: stale socket causes silent message loss (connection appears live but drops inbound messages)
- #65290 Bug: WhatsApp channel in creds.json corruption/reconnect loop every ~30 mins
- #66917 WhatsApp Stability: Persistent 408/499 Disconnects & Group Inbound Failure
- #66920 WhatsApp group inbound messages silently drop after repeated 408 reconnect cycles (DMs survive)
- #70678 [Bug]: WhatsApp channel force-reconnects every 30 minutes on quiet-device sessions
- #70856 [Bug]: WhatsApp listener repeatedly disconnects/stalls on Windows, causing "No active WhatsApp Web listener" and missed messages
