---
repo: openclaw/openclaw
cluster_id: gitcrawl-3189-dedupe-only-20260429-remote
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
  - "#54409"
candidates:
  - "#54409"
  - "#67793"
  - "#70133"
cluster_refs:
  - "#43617"
  - "#48776"
  - "#54409"
  - "#67793"
  - "#70133"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #54409 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 3189 on 2026-04-29."
---

# Gitcrawl Cluster 3189

Generated from local gitcrawl run cluster 3189 for `openclaw/openclaw`.

Display title:

> [Bug]: Feishu plugin: per-chat serial queue prevents messages.queue.mode = "collect" from batching queued messages

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 3
- representative: #54409, currently open in local store
- latest member update: 2026-04-28T22:51:07.344627644Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43617 Bug: 消息到达 Gateway 但未持久化到 session 文件
- #48776 [Bug] Long text messages go to queue and never get processed in new session

Open candidates:

- #54409 [Bug]: Feishu plugin: per-chat serial queue prevents messages.queue.mode = "collect" from batching queued messages
- #67793 [Bug] queue.mode "collect" not batching messages - messages processed individually despite debounce
- #70133 [Bug]: Feishu per-chat queue can hang indefinitely, leaving later P2P messages queued
