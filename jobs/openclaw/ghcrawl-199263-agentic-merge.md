---
repo: openclaw/openclaw
cluster_id: ghcrawl-199263-agentic-merge
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
  - "#41718"
candidates:
  - "#41545"
  - "#41546"
  - "#41552"
  - "#41718"
  - "#42001"
cluster_refs:
  - "#41545"
  - "#41546"
  - "#41552"
  - "#41718"
  - "#42001"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #41718 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 199263 on 2026-04-26."
---

# GHCrawl Cluster 199263

Generated from local ghcrawl run cluster 199263 for `openclaw/openclaw`.

Display title:

> fix(ui): prevent WebSocket URL edit from clearing Gateway Token

Cluster shape from ghcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 5
- representative: #41718, currently open in local store
- latest member update: 2026-04-26T06:40:56.836Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41545 [Bug]: Editing WebSocket URL clears Gateway Token in Overview
- #41546 fix(ui): preserve gateway token when editing websocket url
- #41552 fix(control-ui): preserve token when editing WebSocket URL
- #41718 fix(ui): prevent WebSocket URL edit from clearing Gateway Token
- #42001 fix(ui): preserve gateway token when editing WebSocket URL
