---
repo: openclaw/openclaw
cluster_id: ghcrawl-156875-autonomous-smoke
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
  - "#67845"
candidates:
  - "#55239"
  - "#62681"
  - "#67845"
cluster_refs:
  - "#55239"
  - "#62681"
  - "#67845"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #67845 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156875 on 2026-04-26."
---

# GHCrawl Cluster 156875

Generated from local ghcrawl run cluster 156875 for `openclaw/openclaw`.

Display title:

> Feature request: support Chinese localization for Telegram menu commands

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #67845, currently open in local store
- latest member update: 2026-04-24T18:56:27.330Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #55239 请求支持 Telegram Bot 命令菜单中文化
- #62681 [Feature Request] Support for internationalization (i18n) of Telegram bot commands
- #67845 Feature request: support Chinese localization for Telegram menu commands
