---
repo: openclaw/openclaw
cluster_id: gitcrawl-13991-dedupe-only-20260429-remote
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
  - "#70856"
candidates:
  - "#46518"
  - "#70856"
cluster_refs:
  - "#40079"
  - "#45198"
  - "#45474"
  - "#46332"
  - "#46372"
  - "#46518"
  - "#47154"
  - "#47367"
  - "#47527"
  - "#49057"
  - "#49969"
  - "#50208"
  - "#50231"
  - "#50428"
  - "#50489"
  - "#50656"
  - "#50684"
  - "#50731"
  - "#51012"
  - "#51111"
  - "#51136"
  - "#51493"
  - "#52768"
  - "#52773"
  - "#52774"
  - "#52781"
  - "#53162"
  - "#53767"
  - "#53895"
  - "#53907"
  - "#54322"
  - "#54332"
  - "#54614"
  - "#55030"
  - "#55246"
  - "#55752"
  - "#56054"
  - "#56089"
  - "#56270"
  - "#56363"
  - "#57718"
  - "#58408"
  - "#58480"
  - "#59107"
  - "#59275"
  - "#59589"
  - "#60136"
  - "#60337"
  - "#60378"
  - "#60626"
  - "#61250"
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
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #70856 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13991 on 2026-04-29."
---

# Gitcrawl Cluster 13991

Generated from local gitcrawl run cluster 13991 for `openclaw/openclaw`.

Display title:

> [Bug]: WhatsApp listener repeatedly disconnects/stalls on Windows, causing "No active WhatsApp Web listener" and missed messages

Cluster shape from gitcrawl:

- total members: 64
- issues: 64
- pull requests: 0
- open candidates in local store: 2
- representative: #70856, currently open in local store
- latest member update: 2026-04-29T11:09:44.830425326Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40079 Message loss during gateway/channel restarts - need persistent queue
- #45198 WhatsApp health-monitor reconnect leaves receiver in broken state (silent message drop)
- #45474 [Bug]:  WhatsApp channel shows linked/OK but inbound messages are not delivered (single tick), with repeated 440/401 reconnect loop
- #46332 [Bug]: WhatsApp bug
- #46372 Message loss during WhatsApp channel restart (stale-socket reconnect)
- #47154 [WhatsApp] Agent message tool sends on stale socket while auto-reply uses live socket
- #47367 [Bug]: whatsapp QR not showing so unable to scan and bind to my account
- #47527 [Bug]: WhatsApp does not deliver inbound messages
- #49057 [Bug]: WhatsApp Web listener flaps / logs out on 2026.3.13 causing cron + message delivery failures (“No active WhatsApp Web listener”)
- #49969 WhatsApp Web listener silently dies after health-monitor stale-socket restart
- #50208 [Bug]: No active WhatsApp Web listener on outbound sends despite connected status (2026.3.13)
- #50231 WhatsApp outbound sends silently fail — "No active WhatsApp Web listener" despite successful connection
- #50428 WhatsApp: recurring stale-socket restarts cause missed inbound messages
- #50489 [Bug]: Message tool and cron announce delivery fail with "No active WhatsApp Web listener" despite WhatsApp being connected (Baileys)
- #50656 WhatsApp Web outbound listener fails to start — sends broken after gateway restart
- #50684 WhatsApp messages dropped during 503 reconnect window
- #50731 [Bug] WhatsApp outbound sends fail despite active inbound listener (2026.3.13)
- #51012 WhatsApp relink succeeds, then send fails with No active listener and session drops (401)
- #51111 [Bug]: WhatsApp QR login appears linked briefly, then becomes disconnected with 401 / device_removed
- #51136 WhatsApp发送失败：状态显示已连接但消息发送提示'No active WhatsApp Web listener'
- #51493 WhatsApp announce delivery broken in isolated cron sessions after gateway restart
- #52768 message tool: 'No active WhatsApp Web listener' error despite channel showing connected
- #52773 [Bug]: WhatsApp listener dies after upgrade — "No active WhatsApp Web listener" on all outbound messages (resolved by reverting to v2026.03.11)
- #52774 [Bug] WhatsApp proactive outbound send still fails with 'No active WhatsApp Web listener' on 2026.3.13 while inbound/auto-reply work
- #52781 WhatsApp outbound sends fail: module-scoped listeners Map duplicated across 27 build chunks
- #53162 [Bug]: WhatsApp cron delivery always fails with "No active WhatsApp Web listener" despite channel being connected
- #53767 WhatsApp channel fails to load after gateway restart in 2026.3.22
- #53895 Outbound message retry queue for transient Telegram failures
- #53907 [Bug]: WhatsApp breaks after upgrading from v2026.3.13 to v2026.3.22
- #54322 feat(gateway): persistent outbound message queue across restarts
- #54332 WhatsApp watchdog idle counter doesn't reset on reconnect, causing 60s flap loops
- #54614 WhatsApp health monitor stale-socket detection causes unnecessary restarts and session conflicts
- #55030 [Bug]: WhatsApp aggressive 30-minute heartbeat causes cascading reconnects every ~60 seconds
- #55246 WhatsApp watchdog reconnect loop: inactivity timer not reset after reconnect
- #55752 [Bug]: WhatsApp creds.json corrupted on every clean gateway restart (SIGTERM)
- #56054 WhatsApp Baileys: perpetual status 499 reconnection loop with creds.json corruption cycle
- #56089 [Bug]: Baileys WhatsApp Web outbound sends fail with "No active WhatsApp Web listener" despite linked/connected status
- #56270 [Bug]: v2026.3.24 regression: WhatsApp 499 reconnect loop + self-reply/echo loops + false completion reporting
- #56363 WhatsApp send fails 'No active WhatsApp Web listener' despite channels status showing connected
- #57718 WhatsApp creds.json repeatedly restored from backup on startup, even after fresh re-pair
- #58408 [Bug]: WhatsApp Inbound Works But Outbound CLI Fails With "No Active Listener"
- #58480 WhatsApp creds.json corrupted on every reconnect — race between async save and sync restore
- #59107 [Bug]: WhatsApp proactive outbound messages fail when socket degraded, reactive messages succeed
- #59275 [Bug]: WhatsApp: outbound messages silently lost during WebSocket reconnect — no retry after recovery
- #59589 Cascading reconnects every ~30min after idle (Gateway WebSocket)
- #60136 [BUG] WhatsApp credentials (creds.json) corrupted every ~35 minutes during pre-key rotation
- #60337 [Bug]: WhatsApp Baileys: 499 reconnect loop — idle timer not resetting on reconnect
- #60378 [Bug]: WhatsApp gateway flapping — status 499 reconnect cascade with aggressive heartbeat timeout
- #60626 WhatsApp: reconnect loop lacks exponential backoff after status 499 disconnects
- #61250 [Bug] WhatsApp outbound fails: "No active WhatsApp Web listener" despite successful CLI login
- #61326 WhatsApp Baileys: idle message timer doesn't reset on reconnect, causing infinite 499 loop
- #61663 [Bug]: WhatsApp QR Code Refresh
- #61744 [Bug]: WhatsApp links successfully, but peers/groups discovery is empty and the gateway reconnects repeatedly with status 499
- #62258 [Bug] WhatsApp 499 reconnection loop: inactivity timer not reset after successful reconnect
- #63410 WhatsApp: Persistent 408 session timeout loop — WebSocket keepalive not preventing server-side idle disconnect
- #63496 WhatsApp creds.json corruption every ~30 minutes (non-atomic write)
- #63855 WhatsApp: stale socket causes silent message loss (connection appears live but drops inbound messages)
- #64553 [Bug]: WhatsApp QR code expires silently (no rotation, no freshness indicator)
- #65290 Bug: WhatsApp channel in creds.json corruption/reconnect loop every ~30 mins
- #66917 WhatsApp Stability: Persistent 408/499 Disconnects & Group Inbound Failure
- #66920 WhatsApp group inbound messages silently drop after repeated 408 reconnect cycles (DMs survive)
- #70678 [Bug]: WhatsApp channel force-reconnects every 30 minutes on quiet-device sessions

Open candidates:

- #46518 WhatsApp QR pairing fails silently on 2026.3.13 (macOS ARM64 Docker)
- #70856 [Bug]: WhatsApp listener repeatedly disconnects/stalls on Windows, causing "No active WhatsApp Web listener" and missed messages
