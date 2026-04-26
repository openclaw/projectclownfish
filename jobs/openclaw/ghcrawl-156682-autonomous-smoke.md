---
repo: openclaw/openclaw
cluster_id: ghcrawl-156682-autonomous-smoke
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
  - "#55532"
candidates:
  - "#52618"
  - "#55531"
  - "#55532"
  - "#59753"
  - "#68766"
cluster_refs:
  - "#52618"
  - "#55531"
  - "#55532"
  - "#59753"
  - "#68766"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #55532 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156682 on 2026-04-26."
---

# GHCrawl Cluster 156682

Generated from local ghcrawl run cluster 156682 for `openclaw/openclaw`.

Display title:

> Feishu WebSocket: No exponential backoff on reconnect

Cluster shape from ghcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #55532, currently open in local store
- latest member update: 2026-04-24T18:56:29.749Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #52618 fix(feishu): WebSocket connection not recovered after network disruption
- #55531 Feishu WebSocket: No exponential backoff on reconnect, causes rate limit amplification
- #55532 Feishu WebSocket: No exponential backoff on reconnect
- #59753 [Bug]: 飞书无限重连Feishu WebSocket reconnect loop never stops — gateway becomes unresponsive without manual restart
- #68766 [Bug]: Feishu WebSocket connection does not recover after transient token refresh failure
