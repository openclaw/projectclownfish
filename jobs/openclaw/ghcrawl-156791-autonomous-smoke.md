---
repo: openclaw/openclaw
cluster_id: ghcrawl-156791-autonomous-smoke
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
  - "#61434"
candidates:
  - "#42553"
  - "#61434"
  - "#62711"
cluster_refs:
  - "#42553"
  - "#61434"
  - "#62711"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #61434 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156791 on 2026-04-26."
---

# GHCrawl Cluster 156791

Generated from local ghcrawl run cluster 156791 for `openclaw/openclaw`.

Display title:

> [Bug]: Signal channel SSE connection fails persistently with fetch failed every 10 seconds

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #61434, currently open in local store
- latest member update: 2026-04-24T18:56:31.880Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42553 Signal SSE handler connects but never processes events (zombie connection)
- #61434 [Bug]: Signal channel SSE connection fails persistently with fetch failed every 10 seconds
- #62711 [Bug]: OpenClaw cannot receive Signal messages
