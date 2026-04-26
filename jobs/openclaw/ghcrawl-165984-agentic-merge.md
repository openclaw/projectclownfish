---
repo: openclaw/openclaw
cluster_id: ghcrawl-165984-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#53698"
candidates:
  - "#45474"
  - "#48390"
  - "#49057"
  - "#49305"
  - "#50684"
  - "#51111"
  - "#53698"
  - "#55138"
  - "#58408"
  - "#58481"
  - "#61663"
  - "#61744"
  - "#61788"
  - "#63410"
  - "#63854"
  - "#63855"
  - "#63925"
  - "#64296"
  - "#65215"
  - "#66917"
  - "#66920"
  - "#66965"
  - "#67986"
  - "#70463"
  - "#70608"
  - "#70678"
  - "#70856"
cluster_refs:
  - "#45474"
  - "#48390"
  - "#49057"
  - "#49305"
  - "#50684"
  - "#51111"
  - "#53698"
  - "#55138"
  - "#58408"
  - "#58481"
  - "#61663"
  - "#61744"
  - "#61788"
  - "#63410"
  - "#63854"
  - "#63855"
  - "#63925"
  - "#64296"
  - "#65215"
  - "#66917"
  - "#66920"
  - "#66965"
  - "#67986"
  - "#70463"
  - "#70608"
  - "#70678"
  - "#70856"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #53698 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 165984 on 2026-04-26."
---

# GHCrawl Cluster 165984

Generated from local ghcrawl run cluster 165984 for `openclaw/openclaw`.

Display title:

> [Bug]: WhatsApp watchdog MESSAGE_TIMEOUT_MS (30min) not configurable — causes reconnect loops on low-traffic setups

Cluster shape from ghcrawl:

- total members: 27
- issues: 27
- pull requests: 0
- open candidates in local store: 27
- representative: #53698, currently open in local store
- latest member update: 2026-04-26T00:46:52.124Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45474 [Bug]:  WhatsApp channel shows linked/OK but inbound messages are not delivered (single tick), with repeated 440/401 reconnect loop
- #48390 WhatsApp Web: chronic 440 session conflict causes stale-socket loop and delivery failures
- #49057 [Bug]: WhatsApp Web listener flaps / logs out on 2026.3.13 causing cron + message delivery failures (“No active WhatsApp Web listener”)
- #49305 WhatsApp Web listener does not survive session logout - gateway breaks permanently until manual restart
- #50684 WhatsApp messages dropped during 503 reconnect window
- #51111 [Bug]: WhatsApp QR login appears linked briefly, then becomes disconnected with 401 / device_removed
- #53698 [Bug]: WhatsApp watchdog MESSAGE_TIMEOUT_MS (30min) not configurable — causes reconnect loops on low-traffic setups
- #55138 feat: Expose WhatsApp message watchdog timeout as config option
- #58408 [Bug]: WhatsApp Inbound Works But Outbound CLI Fails With "No Active Listener"
- #58481 WhatsApp WebSocket drops on WSL2 — missing TCP keepalive on underlying socket
- #61663 [Bug]: WhatsApp QR Code Refresh
- #61744 [Bug]: WhatsApp links successfully, but peers/groups discovery is empty and the gateway reconnects repeatedly with status 499
- #61788 WhatsApp WebSocket ETIMEDOUT on connection after login
- #63410 WhatsApp: Persistent 408 session timeout loop — WebSocket keepalive not preventing server-side idle disconnect
- #63854 WhatsApp watchdog messageTimeoutMs should be configurable (30min hardcoded timeout causes cascading 499/408 errors)
- #63855 WhatsApp: stale socket causes silent message loss (connection appears live but drops inbound messages)
- #63925 [Feature]: Expose WhatsApp web message watchdog timeout as config
- #64296 [Bug]: WhatsApp Web connection ended before fully opening
- #65215 WhatsApp web channel restarts every 30m because hidden messageTimeoutMs watchdog is not exposed in config
- #66917 WhatsApp Stability: Persistent 408/499 Disconnects & Group Inbound Failure
- #66920 WhatsApp group inbound messages silently drop after repeated 408 reconnect cycles (DMs survive)
- #66965 WhatsApp: expose messageTimeoutMs as config option to control idle reconnect cycle
- #67986 [Bug]: Gateway wedges silently mid-session after 2026.4.15 — only recovers on WhatsApp 408 + health monitor restart
- #70463 WhatsApp: health-monitor race condition causes multi-hour outages
- #70608 [Feature]: WhatsApp web idle watchdog should be configurable (30m no-message reconnect)
- #70678 [Bug]: WhatsApp channel force-reconnects every 30 minutes on quiet-device sessions
- #70856 [Bug]: WhatsApp listener repeatedly disconnects/stalls on Windows, causing "No active WhatsApp Web listener" and missed messages
