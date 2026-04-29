---
repo: openclaw/openclaw
cluster_id: gitcrawl-238812-dedupe-only-20260429b
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
  - "#52618"
candidates:
  - "#42354"
  - "#52618"
  - "#55532"
  - "#68766"
  - "#72828"
cluster_refs:
  - "#42354"
  - "#52618"
  - "#55532"
  - "#68766"
  - "#72828"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #52618 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238812 on 2026-04-29."
---

# Gitcrawl Cluster 238812

Generated from local gitcrawl run cluster 238812 for `openclaw/openclaw`.

Display title:

> fix(feishu): WebSocket connection not recovered after network disruption

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #52618, currently open in local store
- latest member update: 2026-04-29T08:43:40.788Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42354 [Bug]: [Feishu/Lark] WebSocket long connection fails - code: 1000040351, system busy
- #52618 fix(feishu): WebSocket connection not recovered after network disruption
- #55532 Feishu WebSocket: No exponential backoff on reconnect
- #68766 [Bug]: Feishu WebSocket connection does not recover after transient token refresh failure
- #72828 Feishu WebSocket reconnect exhausted causes permanent connection freeze
