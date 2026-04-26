---
repo: openclaw/openclaw
cluster_id: ghcrawl-191453-agentic-merge
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
  - "#44930"
  - "#51182"
  - "#58443"
  - "#58549"
  - "#58611"
  - "#59113"
  - "#59132"
  - "#59331"
  - "#59833"
  - "#59951"
  - "#60202"
  - "#60400"
  - "#60646"
  - "#61575"
  - "#64606"
  - "#65701"
  - "#70623"
cluster_refs:
  - "#44930"
  - "#51182"
  - "#58443"
  - "#58549"
  - "#58611"
  - "#59113"
  - "#59132"
  - "#59331"
  - "#59833"
  - "#59951"
  - "#60202"
  - "#60400"
  - "#60646"
  - "#61575"
  - "#64606"
  - "#65701"
  - "#70623"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #58549 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 191453 on 2026-04-26."
---

# GHCrawl Cluster 191453

Generated from local ghcrawl run cluster 191453 for `openclaw/openclaw`.

Display title:

> Bug: Inbound messages re-delivered during API provider outage — missing message_id deduplication in gateway retry loop

Cluster shape from ghcrawl:

- total members: 17
- issues: 17
- pull requests: 0
- open candidates in local store: 17
- representative: #58549, currently open in local store
- latest member update: 2026-04-25T07:30:09.426Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #44930 [BUG] Telegram messages silently dropped due to update offset race condition
- #51182 Telegram message replay after gateway restart despite offset file existing (regression from #739)
- #58443 [Bug] Gateway duplicates inbound messages — same message injected multiple times into session
- #58549 Bug: Inbound messages re-delivered during API provider outage — missing message_id deduplication in gateway retry loop
- #58611 Telegram: Duplicate message storm during LLM API outages (missing message_id deduplication)
- #59113 [Bug]: Telegram inbound message duplication — no dedup on identical webhook deliveries
- #59132 Retry storm: same inbound message replayed 94+ times causing excessive API usage ($149 in one day)
- #59331 Telegram: old messages reprocessed in loop after gateway restart (update_id offset not persisted)
- #59833 [Bug]: Telegram polling stalls on startup in 2026.4.1 (WSL2)
- #59951 [Bug]: Duplicate Inbound Message Delivery
- #60202 Duplicate message delivery on Telegram persists in 2026.4.2
- #60400 [Bug]: All channels silently fail to initialize on 2026.4.2 (Telegram confirmed)
- #60646 [Bug]: Channels (Telegram/WhatsApp) not loading in v2026.4.2 - empty table in status
- #61575 [Bug]: WhatsApp gateway message duplication on reconnection
- #64606 Duplicate Telegram message sent after provider timeout + retry
- #65701 [Bug]:  Telegram provider sends duplicate messages for every response
- #70623 [Bug]: Channel issues on Telegram and Discord in OpenClaw 2026.4.21
