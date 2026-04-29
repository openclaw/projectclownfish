---
repo: openclaw/openclaw
cluster_id: gitcrawl-13698-dedupe-only-20260429-remote
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
  - "#47394"
candidates:
  - "#71058"
cluster_refs:
  - "#47394"
  - "#58243"
  - "#62946"
  - "#71058"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #47394 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13698 on 2026-04-29."
---

# Gitcrawl Cluster 13698

Generated from local gitcrawl run cluster 13698 for `openclaw/openclaw`.

Display title:

> Support multiple Feishu bots

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 1
- representative: #47394, currently closed in local store
- latest member update: 2026-04-28T05:49:57.65530688Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #47394 Support multiple Feishu bots
- #58243 Enhanced Telegram Multi-Bot Support
- #62946 [Feature]: Feature Request: Support Multiple Telegram Bot Configurations

Open candidates:

- #71058 [Feature]: Support for multiple Azure/Teams bots on a single Openclaw Gateway
