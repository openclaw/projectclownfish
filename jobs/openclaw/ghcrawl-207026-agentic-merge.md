---
repo: openclaw/openclaw
cluster_id: ghcrawl-207026-agentic-merge
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
  - "#63169"
candidates:
  - "#60315"
  - "#61970"
  - "#63169"
  - "#65451"
  - "#66090"
cluster_refs:
  - "#60315"
  - "#61970"
  - "#63169"
  - "#65451"
  - "#66090"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #63169 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 207026 on 2026-04-26."
---

# GHCrawl Cluster 207026

Generated from local ghcrawl run cluster 207026 for `openclaw/openclaw`.

Display title:

> WhatsApp media send reports success but attachment is never delivered (2026.4.8)

Cluster shape from ghcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #63169, currently open in local store
- latest member update: 2026-04-24T18:56:24.200Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #60315 Agent replies in WhatsApp do not deliver image attachments, while 'message send --media' works
- #61970 Bug: WhatsApp outbound video sends succeed but media never appears in chat
- #63169 WhatsApp media send reports success but attachment is never delivered (2026.4.8)
- #65451 Bug: WhatsApp outbound media (images) not attaching — hasMedia false on sendMessageWhatsApp
- #66090 sending media on whatsapp
