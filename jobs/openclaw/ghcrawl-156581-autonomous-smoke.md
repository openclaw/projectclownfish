---
repo: openclaw/openclaw
cluster_id: ghcrawl-156581-autonomous-smoke
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
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#45474"
candidates:
  - "#45474"
  - "#46518"
  - "#47367"
  - "#49057"
  - "#51111"
  - "#61663"
  - "#61744"
  - "#63855"
  - "#66917"
  - "#66920"
  - "#67986"
  - "#70678"
  - "#70856"
cluster_refs:
  - "#45474"
  - "#46518"
  - "#47367"
  - "#49057"
  - "#51111"
  - "#61663"
  - "#61744"
  - "#63855"
  - "#66917"
  - "#66920"
  - "#67986"
  - "#70678"
  - "#70856"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #45474 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156581 on 2026-04-26."
---

# GHCrawl Cluster 156581

Generated from local ghcrawl run cluster 156581 for `openclaw/openclaw`.

Display title:

> [Bug]:  WhatsApp channel shows linked/OK but inbound messages are not delivered (single tick), with repeated 440/401 reconnect loop

Cluster shape from ghcrawl:

- total members: 13
- issues: 13
- pull requests: 0
- open candidates in local store: 13
- representative: #45474, currently open in local store
- latest member update: 2026-04-26T00:46:52.124Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45474 [Bug]:  WhatsApp channel shows linked/OK but inbound messages are not delivered (single tick), with repeated 440/401 reconnect loop
- #46518 WhatsApp QR pairing fails silently on 2026.3.13 (macOS ARM64 Docker)
- #47367 [Bug]: whatsapp QR not showing so unable to scan and bind to my account
- #49057 [Bug]: WhatsApp Web listener flaps / logs out on 2026.3.13 causing cron + message delivery failures (“No active WhatsApp Web listener”)
- #51111 [Bug]: WhatsApp QR login appears linked briefly, then becomes disconnected with 401 / device_removed
- #61663 [Bug]: WhatsApp QR Code Refresh
- #61744 [Bug]: WhatsApp links successfully, but peers/groups discovery is empty and the gateway reconnects repeatedly with status 499
- #63855 WhatsApp: stale socket causes silent message loss (connection appears live but drops inbound messages)
- #66917 WhatsApp Stability: Persistent 408/499 Disconnects & Group Inbound Failure
- #66920 WhatsApp group inbound messages silently drop after repeated 408 reconnect cycles (DMs survive)
- #67986 [Bug]: Gateway wedges silently mid-session after 2026.4.15 — only recovers on WhatsApp 408 + health monitor restart
- #70678 [Bug]: WhatsApp channel force-reconnects every 30 minutes on quiet-device sessions
- #70856 [Bug]: WhatsApp listener repeatedly disconnects/stalls on Windows, causing "No active WhatsApp Web listener" and missed messages
