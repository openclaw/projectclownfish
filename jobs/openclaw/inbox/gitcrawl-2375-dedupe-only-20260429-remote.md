---
repo: openclaw/openclaw
cluster_id: gitcrawl-2375-dedupe-only-20260429-remote
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
  - "#41653"
candidates:
  - "#41653"
  - "#51311"
  - "#51371"
cluster_refs:
  - "#41653"
  - "#51311"
  - "#51371"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41653 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2375 on 2026-04-29."
---

# Gitcrawl Cluster 2375

Generated from local gitcrawl run cluster 2375 for `openclaw/openclaw`.

Display title:

> fix: guard WebSocketTaskBox.sendPing against double continuation resume

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #41653, currently open in local store
- latest member update: 2026-04-28T18:51:15.015653441Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41653 fix: guard WebSocketTaskBox.sendPing against double continuation resume
- #51311 fix(ios): guard sendPing continuation against double-resume crash
- #51371 fix(ios): prevent CheckedContinuation double-resume crash in WebSocket ping
