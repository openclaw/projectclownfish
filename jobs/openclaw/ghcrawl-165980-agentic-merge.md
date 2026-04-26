---
repo: openclaw/openclaw
cluster_id: ghcrawl-165980-agentic-merge
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
  - "#58549"
candidates:
  - "#41753"
  - "#43661"
  - "#49272"
  - "#50040"
  - "#50065"
  - "#53895"
  - "#55727"
  - "#57410"
  - "#57738"
  - "#57743"
  - "#58064"
  - "#58443"
  - "#58549"
  - "#58611"
  - "#58788"
  - "#59113"
  - "#59132"
  - "#59833"
  - "#59951"
  - "#60088"
  - "#60202"
  - "#60400"
  - "#60646"
  - "#61195"
  - "#61222"
  - "#61273"
  - "#61470"
  - "#61575"
  - "#61712"
  - "#64606"
  - "#65701"
  - "#68232"
  - "#68494"
  - "#69147"
  - "#70623"
  - "#70744"
  - "#71066"
  - "#71429"
cluster_refs:
  - "#41753"
  - "#43661"
  - "#49272"
  - "#50040"
  - "#50065"
  - "#53895"
  - "#55727"
  - "#57410"
  - "#57738"
  - "#57743"
  - "#58064"
  - "#58443"
  - "#58549"
  - "#58611"
  - "#58788"
  - "#59113"
  - "#59132"
  - "#59833"
  - "#59951"
  - "#60088"
  - "#60202"
  - "#60400"
  - "#60646"
  - "#61195"
  - "#61222"
  - "#61273"
  - "#61470"
  - "#61575"
  - "#61712"
  - "#64606"
  - "#65701"
  - "#68232"
  - "#68494"
  - "#69147"
  - "#70623"
  - "#70744"
  - "#71066"
  - "#71429"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #58549 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 165980 on 2026-04-26."
---

# GHCrawl Cluster 165980

Generated from local ghcrawl run cluster 165980 for `openclaw/openclaw`.

Display title:

> Bug: Inbound messages re-delivered during API provider outage — missing message_id deduplication in gateway retry loop

Cluster shape from ghcrawl:

- total members: 38
- issues: 38
- pull requests: 0
- open candidates in local store: 38
- representative: #58549, currently open in local store
- latest member update: 2026-04-26T00:46:51.948Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41753 [Bug]: Intermittent Inbound Telegram DM Delivery Failure Persists in v2026.3.
- #43661 Session hangs indefinitely when compaction times out, causing repeated duplicate message sends
- #49272 OpenClaw slow ess
- #50040 Telegram delivery reliability: polling stalls can lead to silent outbound message loss
- #50065 [Bug]: direct session can exceed configured contextWindow without timely compaction
- #53895 Outbound message retry queue for transient Telegram failures
- #55727 [Bug]:
- #57410 Compaction results in full context reset instead of compression
- #57738 Telegram group messages not reaching gateway (long polling) — DMs work fine
- #57743 Telegram: getUpdates polling stalls for 90-110s intermittently despite healthy network and IPv4 forced
- #58064 Discord/Telegram channels silently fail to initialize under LaunchAgent after restart
- #58443 [Bug] Gateway duplicates inbound messages — same message injected multiple times into session
- #58549 Bug: Inbound messages re-delivered during API provider outage — missing message_id deduplication in gateway retry loop
- #58611 Telegram: Duplicate message storm during LLM API outages (missing message_id deduplication)
- #58788 v2026.3.31 regression: raw internal gateway log lines sent as Telegram DM messages
- #59113 [Bug]: Telegram inbound message duplication — no dedup on identical webhook deliveries
- #59132 Retry storm: same inbound message replayed 94+ times causing excessive API usage ($149 in one day)
- #59833 [Bug]: Telegram polling stalls on startup in 2026.4.1 (WSL2)
- #59951 [Bug]: Duplicate Inbound Message Delivery
- #60088 [Bug]: Telegram Channel Stops Responding After First Message
- #60202 Duplicate message delivery on Telegram persists in 2026.4.2
- #60400 [Bug]: All channels silently fail to initialize on 2026.4.2 (Telegram confirmed)
- #60646 [Bug]: Channels (Telegram/WhatsApp) not loading in v2026.4.2 - empty table in status
- #61195 [Bug]: Telegram provider silently fails to start on fresh gateway boots in v2026.4.2
- #61222 Duplicate inbound messages in Telegram group sessions (same message_id delivered twice)
- #61273 [Bug]: Telegram channel not initializing on 2026.4.2 (valid bot token, no telegram runtime logs)
- #61470 Telegram main session stops responding every 3-7 days (requires gateway restart)
- #61575 [Bug]: WhatsApp gateway message duplication on reconnection
- #61712 Telegram polling fails to start after gateway restart (LaunchAgent)
- #64606 Duplicate Telegram message sent after provider timeout + retry
- #65701 [Bug]:  Telegram provider sends duplicate messages for every response
- #68232 [Bug] Config edits trigger Telegram channel restart via hot reload — destroys in-memory context
- #68494 Telegram channel stalls after long-running use: main session context overflow and repeated send/getUpdates network failures
- #69147 Telegram long-poll stalls cause delayed or missing replies
- #70623 [Bug]: Channel issues on Telegram and Discord in OpenClaw 2026.4.21
- #70744 Telegram direct session can become unrecoverable after context overflow and auto-compaction hangs
- #71066 Telegram subsystem: getUpdates polling silently non-functional despite reachable API
- #71429 [Bug] Telegram gateway drops in-flight messages on sendChatAction network failure during hot reload
