---
repo: openclaw/openclaw
cluster_id: ghcrawl-156605-autonomous-smoke
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
  - "#59951"
candidates:
  - "#58443"
  - "#58549"
  - "#58611"
  - "#59113"
  - "#59951"
  - "#60202"
  - "#61222"
  - "#64606"
  - "#65701"
cluster_refs:
  - "#58443"
  - "#58549"
  - "#58611"
  - "#59113"
  - "#59951"
  - "#60202"
  - "#61222"
  - "#64606"
  - "#65701"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #59951 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156605 on 2026-04-26."
---

# GHCrawl Cluster 156605

Generated from local ghcrawl run cluster 156605 for `openclaw/openclaw`.

Display title:

> [Bug]: Duplicate Inbound Message Delivery

Cluster shape from ghcrawl:

- total members: 9
- issues: 9
- pull requests: 0
- open candidates in local store: 9
- representative: #59951, currently open in local store
- latest member update: 2026-04-24T18:56:24.734Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #58443 [Bug] Gateway duplicates inbound messages — same message injected multiple times into session
- #58549 Bug: Inbound messages re-delivered during API provider outage — missing message_id deduplication in gateway retry loop
- #58611 Telegram: Duplicate message storm during LLM API outages (missing message_id deduplication)
- #59113 [Bug]: Telegram inbound message duplication — no dedup on identical webhook deliveries
- #59951 [Bug]: Duplicate Inbound Message Delivery
- #60202 Duplicate message delivery on Telegram persists in 2026.4.2
- #61222 Duplicate inbound messages in Telegram group sessions (same message_id delivered twice)
- #64606 Duplicate Telegram message sent after provider timeout + retry
- #65701 [Bug]:  Telegram provider sends duplicate messages for every response
