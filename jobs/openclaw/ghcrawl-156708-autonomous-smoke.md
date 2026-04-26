---
repo: openclaw/openclaw
cluster_id: ghcrawl-156708-autonomous-smoke
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
  - "#41546"
candidates:
  - "#41546"
  - "#41552"
  - "#41718"
  - "#42001"
cluster_refs:
  - "#41546"
  - "#41552"
  - "#41718"
  - "#42001"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #41546 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156708 on 2026-04-26."
---

# GHCrawl Cluster 156708

Generated from local ghcrawl run cluster 156708 for `openclaw/openclaw`.

Display title:

> fix(ui): preserve gateway token when editing websocket url

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #41546, currently open in local store
- latest member update: 2026-04-24T18:56:28.223Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41546 fix(ui): preserve gateway token when editing websocket url
- #41552 fix(control-ui): preserve token when editing WebSocket URL
- #41718 fix(ui): prevent WebSocket URL edit from clearing Gateway Token
- #42001 fix(ui): preserve gateway token when editing WebSocket URL
