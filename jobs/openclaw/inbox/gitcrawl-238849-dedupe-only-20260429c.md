---
repo: openclaw/openclaw
cluster_id: gitcrawl-238849-dedupe-only-20260429c
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
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#56668"
candidates:
  - "#56668"
  - "#57621"
  - "#60536"
  - "#73979"
cluster_refs:
  - "#56668"
  - "#57621"
  - "#60536"
  - "#73979"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #56668 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238849 on 2026-04-29."
---

# Gitcrawl Cluster 238849

Generated from local gitcrawl run cluster 238849 for `openclaw/openclaw`.

Display title:

> fix(gateway): add WebSocket ping keepalive to prevent idle connection drops

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #56668, currently open in local store
- latest member update: 2026-04-29T08:43:36.740Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #56668 fix(gateway): add WebSocket ping keepalive to prevent idle connection drops
- #57621 fix(mattermost): add WebSocket ping/pong keepalive to detect silent connection drops
- #60536 fix(ws): downgrade internal health probe pre-handshake close from WARN to debug
- #73979 fix(mattermost): add WebSocket ping/pong keepalive
