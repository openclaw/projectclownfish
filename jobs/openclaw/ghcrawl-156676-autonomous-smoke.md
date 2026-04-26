---
repo: openclaw/openclaw
cluster_id: ghcrawl-156676-autonomous-smoke
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
  - "#51497"
candidates:
  - "#49777"
  - "#51497"
  - "#59534"
  - "#59563"
  - "#61304"
cluster_refs:
  - "#49777"
  - "#51497"
  - "#59534"
  - "#59563"
  - "#61304"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #51497 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156676 on 2026-04-26."
---

# GHCrawl Cluster 156676

Generated from local ghcrawl run cluster 156676 for `openclaw/openclaw`.

Display title:

> [Bug]: WebChat 会话消息丢失 - Token消耗存在但消息记录消失

Cluster shape from ghcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #51497, currently open in local store
- latest member update: 2026-04-24T18:56:29.535Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #49777 [Bug] Webchat UI 未能正确渲染完整会话历史
- #51497 [Bug]: WebChat 会话消息丢失 - Token消耗存在但消息记录消失
- #59534 [Bug]:  多龙虾协作的时候会出现上下文记忆消失的问题
- #59563 [Bug] Session 数据丢失：对话中断后未持久化
- #61304 [Bug]: 飞书通道对话中，会忽然丢失上下文，群聊私聊都有发生
