---
repo: openclaw/openclaw
cluster_id: gitcrawl-2115-dedupe-only-20260429-remote
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
  - "#45158"
candidates:
  - "#45158"
cluster_refs:
  - "#43633"
  - "#45158"
  - "#50127"
  - "#54609"
  - "#63674"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #45158 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2115 on 2026-04-29."
---

# Gitcrawl Cluster 2115

Generated from local gitcrawl run cluster 2115 for `openclaw/openclaw`.

Display title:

> [Bug]: 飞书多 Agent 路由问题 - 所有消息都路由到同一个 agent

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 1
- representative: #45158, currently open in local store
- latest member update: 2026-04-28T05:49:57.814035599Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43633 [Bug] Feishu bindings with accountId or group peer.kind not working
- #50127 [Bug]: Binding 匹配在并发场景下错乱 - Feishu 多群消息路由失败
- #54609 多飞书账号路由问题：所有消息都被发送到同一个 Agent
- #63674 [Bug]: 飞书多机器人路由 Bug

Open candidates:

- #45158 [Bug]: 飞书多 Agent 路由问题 - 所有消息都路由到同一个 agent
