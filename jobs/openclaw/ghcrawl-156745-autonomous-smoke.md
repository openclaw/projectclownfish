---
repo: openclaw/openclaw
cluster_id: ghcrawl-156745-autonomous-smoke
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
  - "#61970"
candidates:
  - "#61970"
  - "#63169"
  - "#63816"
  - "#65451"
cluster_refs:
  - "#61970"
  - "#63169"
  - "#63816"
  - "#65451"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #61970 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156745 on 2026-04-26."
---

# GHCrawl Cluster 156745

Generated from local ghcrawl run cluster 156745 for `openclaw/openclaw`.

Display title:

> Bug: WhatsApp outbound video sends succeed but media never appears in chat

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #61970, currently open in local store
- latest member update: 2026-04-24T18:56:23.379Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #61970 Bug: WhatsApp outbound video sends succeed but media never appears in chat
- #63169 WhatsApp media send reports success but attachment is never delivered (2026.4.8)
- #63816 [Bug]: WhatsApp outbound media reports success but no file is delivered
- #65451 Bug: WhatsApp outbound media (images) not attaching — hasMedia false on sendMessageWhatsApp
