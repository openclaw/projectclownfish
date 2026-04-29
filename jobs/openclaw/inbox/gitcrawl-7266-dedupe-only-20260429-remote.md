---
repo: openclaw/openclaw
cluster_id: gitcrawl-7266-dedupe-only-20260429-remote
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
  - "#49862"
candidates:
  - "#43231"
  - "#66540"
cluster_refs:
  - "#43231"
  - "#49862"
  - "#50326"
  - "#54456"
  - "#66540"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #49862 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 7266 on 2026-04-29."
---

# Gitcrawl Cluster 7266

Generated from local gitcrawl run cluster 7266 for `openclaw/openclaw`.

Display title:

> Telegram forum: reply_to_id returns wrong content across topics

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 2
- representative: #49862, currently closed in local store
- latest member update: 2026-04-28T18:04:42.738236523Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #49862 Telegram forum: reply_to_id returns wrong content across topics
- #50326 [Bug]: Telegram `replyToMode: all` does not reply to the triggering message in group/forum topics
- #54456 replyToMode 'all' not working - applyReplyThreading missing currentMessageId parameter in followup runner

Open candidates:

- #43231 Telegram forum: no reliable topic-name -> topic_id resolution for agent routing
- #66540 replyToCurrent default false blocks implicit replyToId in followup queue
