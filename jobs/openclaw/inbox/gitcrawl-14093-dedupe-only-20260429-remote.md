---
repo: openclaw/openclaw
cluster_id: gitcrawl-14093-dedupe-only-20260429-remote
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
  - "#65802"
candidates:
  - "#65799"
  - "#65802"
cluster_refs:
  - "#44751"
  - "#47615"
  - "#65799"
  - "#65802"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65802 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14093 on 2026-04-29."
---

# Gitcrawl Cluster 14093

Generated from local gitcrawl run cluster 14093 for `openclaw/openclaw`.

Display title:

> fix(feishu): disable ambient proxy inheritance for websocket by default

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 2
- representative: #65802, currently open in local store
- latest member update: 2026-04-27T22:51:33.765878454Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44751 fix(feishu): normalize axios-style SDK HTTP responses
- #47615 feishu: respect NO_PROXY for WebSocket connections

Open candidates:

- #65799 Feishu WebSocket should not inherit ambient proxy env by default
- #65802 fix(feishu): disable ambient proxy inheritance for websocket by default
