---
repo: openclaw/openclaw
cluster_id: gitcrawl-2665-dedupe-only-20260429-remote
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
  - "#37763"
candidates:
  - "#38235"
  - "#58737"
cluster_refs:
  - "#37763"
  - "#38235"
  - "#58737"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #37763 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2665 on 2026-04-29."
---

# Gitcrawl Cluster 2665

Generated from local gitcrawl run cluster 2665 for `openclaw/openclaw`.

Display title:

> Slack: agent identity (username/icon_emoji) not applied to messages

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 2
- representative: #37763, currently closed in local store
- latest member update: 2026-04-27T22:51:35.762496072Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #37763 Slack: agent identity (username/icon_emoji) not applied to messages

Open candidates:

- #38235 [Slack] Agent identity (username/icon) not passed through streaming paths
- #58737 [Bug]: Agent display name/avatar reverts to bot default on edited Slack messages
