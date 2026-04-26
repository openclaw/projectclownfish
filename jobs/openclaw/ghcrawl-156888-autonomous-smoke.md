---
repo: openclaw/openclaw
cluster_id: ghcrawl-156888-autonomous-smoke
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
  - "#58787"
candidates:
  - "#58664"
  - "#58787"
  - "#67048"
cluster_refs:
  - "#58664"
  - "#58787"
  - "#67048"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #58787 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156888 on 2026-04-26."
---

# GHCrawl Cluster 156888

Generated from local ghcrawl run cluster 156888 for `openclaw/openclaw`.

Display title:

> Feature Request: 基于 @ 标签的精确机器人激活控制 (飞书群聊多机器人场景)

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #58787, currently open in local store
- latest member update: 2026-04-24T18:56:24.905Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #58664 [Feature Request] 飞书多机器人 @ 精准匹配 - mention target matching
- #58787 Feature Request: 基于 @ 标签的精确机器人激活控制 (飞书群聊多机器人场景)
- #67048 [Feature Request] 支持群聊中按 @mention 过滤机器人响应
