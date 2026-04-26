---
repo: openclaw/openclaw
cluster_id: ghcrawl-166004-agentic-merge
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
  - "#60429"
candidates:
  - "#41330"
  - "#58695"
  - "#58794"
  - "#59354"
  - "#59363"
  - "#60045"
  - "#60429"
  - "#60525"
  - "#60940"
  - "#65420"
cluster_refs:
  - "#41330"
  - "#58695"
  - "#58794"
  - "#59354"
  - "#59363"
  - "#60045"
  - "#60429"
  - "#60525"
  - "#60940"
  - "#65420"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #60429 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 166004 on 2026-04-26."
---

# GHCrawl Cluster 166004

Generated from local ghcrawl run cluster 166004 for `openclaw/openclaw`.

Display title:

> iMessage plugin echoes own outbound messages as inbound

Cluster shape from ghcrawl:

- total members: 10
- issues: 10
- pull requests: 0
- open candidates in local store: 10
- representative: #60429, currently open in local store
- latest member update: 2026-04-24T18:56:24.663Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41330 iMessage channel duplicate message loop - messages sent by agent are re-ingested as inbound
- #58695 iMessage plugin: own sent messages echo back as inbound (is_from_me not filtered)
- #58794 iMessage channel: self-sent messages (is_from_me=true) echoed back as inbound
- #59354 [Bug]: iMessage file-only outbound messages bypass echo detection and trigger auto-response
- #59363 [Bug]: imessage echo loop
- #60045 iMessage echo loop: agent's own outbound responses re-delivered as inbound messages
- #60429 iMessage plugin echoes own outbound messages as inbound
- #60525 iMessage: is_from_me:true messages mis-attributed + attributedBody garbage prefixes + echo into inbound queue
- #60940 iMessage (imsg): sent messages with is_from_me=true echoed back as inbound to session
- #65420 iMessage (imsg) channel: Echo loop when agent replies in DM - is_from_me filtering not working
