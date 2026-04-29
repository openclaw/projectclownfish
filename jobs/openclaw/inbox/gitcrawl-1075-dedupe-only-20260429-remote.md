---
repo: openclaw/openclaw
cluster_id: gitcrawl-1075-dedupe-only-20260429-remote
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
  - "#69979"
candidates:
  - "#34528"
  - "#66406"
cluster_refs:
  - "#34528"
  - "#40952"
  - "#41020"
  - "#53887"
  - "#66406"
  - "#69979"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #69979 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1075 on 2026-04-29."
---

# Gitcrawl Cluster 1075

Generated from local gitcrawl run cluster 1075 for `openclaw/openclaw`.

Display title:

> [Bug] Feishu reaction returns HTTP 400 - emoji reaction fails while text send works

Cluster shape from gitcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 2
- representative: #69979, currently closed in local store
- latest member update: 2026-04-28T22:51:07.228074361Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40952 [Feature]: Slack statusReactions support (lifecycle reaction parity with Telegram/Discord)
- #41020 [Feature Request] Feishu message reactions (emoji responses)
- #53887 Feature: Status Reactions support for Feishu/Lark channel
- #69979 [Bug] Feishu reaction returns HTTP 400 - emoji reaction fails while text send works

Open candidates:

- #34528 Feishu: reaction message_id with suffix causes 400 error on API calls
- #66406 [Bug]: Feishu reactions API 返回 reaction type is invalid (code: 231001)
