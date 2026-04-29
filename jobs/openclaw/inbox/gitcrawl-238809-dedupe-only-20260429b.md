---
repo: openclaw/openclaw
cluster_id: gitcrawl-238809-dedupe-only-20260429b
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
  - "#41546"
candidates:
  - "#41546"
  - "#41552"
  - "#41718"
  - "#42001"
  - "#73923"
cluster_refs:
  - "#41546"
  - "#41552"
  - "#41718"
  - "#42001"
  - "#73923"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41546 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238809 on 2026-04-29."
---

# Gitcrawl Cluster 238809

Generated from local gitcrawl run cluster 238809 for `openclaw/openclaw`.

Display title:

> fix(ui): preserve gateway token when editing websocket url

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #41546, currently open in local store
- latest member update: 2026-04-29T08:43:40.150Z

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
- #73923 fix(ui): preserve gateway token during safe websocket url edits
