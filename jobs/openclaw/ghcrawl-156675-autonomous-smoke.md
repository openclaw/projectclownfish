---
repo: openclaw/openclaw
cluster_id: ghcrawl-156675-autonomous-smoke
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
  - "#49751"
candidates:
  - "#48950"
  - "#49751"
  - "#51172"
  - "#52142"
  - "#62060"
cluster_refs:
  - "#48950"
  - "#49751"
  - "#51172"
  - "#52142"
  - "#62060"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #49751 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156675 on 2026-04-26."
---

# GHCrawl Cluster 156675

Generated from local ghcrawl run cluster 156675 for `openclaw/openclaw`.

Display title:

> fix: clear WS handshake timer early, increase timeouts

Cluster shape from ghcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #49751, currently open in local store
- latest member update: 2026-04-24T18:56:29.309Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #48950 fix(gateway): resolve {} empty auth trap causing scope rejection in loopback probes
- #49751 fix: clear WS handshake timer early, increase timeouts
- #51172 fix(gateway): enable device identity for loopback probes when token SecretRef is unresolved (#51016)
- #52142 fix(gateway): extend websocket handshake timeout for loopback clients
- #62060 fix(gateway/ws): raise default pre-auth handshake timeout to 15s for slower local hosts
