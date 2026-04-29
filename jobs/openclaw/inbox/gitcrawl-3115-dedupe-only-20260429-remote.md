---
repo: openclaw/openclaw
cluster_id: gitcrawl-3115-dedupe-only-20260429-remote
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
  - "#52343"
candidates:
  - "#55358"
cluster_refs:
  - "#52343"
  - "#55358"
  - "#65744"
  - "#70620"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #52343 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 3115 on 2026-04-29."
---

# Gitcrawl Cluster 3115

Generated from local gitcrawl run cluster 3115 for `openclaw/openclaw`.

Display title:

> [Bug]: openclaw-weixin replies can appear out of order in DM conversations

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 1
- representative: #52343, currently closed in local store
- latest member update: 2026-04-28T18:51:14.946498834Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #52343 [Bug]: openclaw-weixin replies can appear out of order in DM conversations
- #65744 [Bug]: Feishu DM response truncated and leaked to group chat — similar to #55019
- #70620 [Bug] Message sync issue between AI and WeChat - out of order and missing messages

Open candidates:

- #55358 Slack DM inbound messages truncated at exactly 160 characters (human → bot)
