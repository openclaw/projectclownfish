---
repo: openclaw/openclaw
cluster_id: gitcrawl-14113-dedupe-only-20260429-remote
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
  - "#45202"
candidates:
  - "#61012"
cluster_refs:
  - "#43856"
  - "#45202"
  - "#61012"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #45202 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14113 on 2026-04-29."
---

# Gitcrawl Cluster 14113

Generated from local gitcrawl run cluster 14113 for `openclaw/openclaw`.

Display title:

> [Bug]: [Bug] Telegram Multi-Account Not Working - Only Default Bot Starts

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #45202, currently closed in local store
- latest member update: 2026-04-28T18:04:42.46566083Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43856 bug(telegram): main bot provider runs as accountId='default' despite token being in named account, requiring group config duplication
- #45202 [Bug]: [Bug] Telegram Multi-Account Not Working - Only Default Bot Starts

Open candidates:

- #61012 Telegram multi-bot routing: default account token ignored for outgoing messages
