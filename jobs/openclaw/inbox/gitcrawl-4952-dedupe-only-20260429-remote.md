---
repo: openclaw/openclaw
cluster_id: gitcrawl-4952-dedupe-only-20260429-remote
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
  - "#41788"
candidates:
  - "#39554"
  - "#42510"
  - "#44347"
  - "#58514"
  - "#65007"
  - "#69422"
cluster_refs:
  - "#39554"
  - "#40962"
  - "#40968"
  - "#41788"
  - "#42510"
  - "#44347"
  - "#52475"
  - "#58514"
  - "#61435"
  - "#65007"
  - "#69422"
  - "#70041"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41788 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 4952 on 2026-04-29."
---

# Gitcrawl Cluster 4952

Generated from local gitcrawl run cluster 4952 for `openclaw/openclaw`.

Display title:

> Google Chat DM threading broken - each response creates new thread

Cluster shape from gitcrawl:

- total members: 12
- issues: 12
- pull requests: 0
- open candidates in local store: 6
- representative: #41788, currently closed in local store
- latest member update: 2026-04-28T22:51:07.562238711Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40962 Google Chat channel: 'Cannot convert undefined or null to object' on typing indicator and message send
- #40968 bug: Google Chat channel fails with 'Cannot convert undefined or null to object' on message send and typing indicator
- #41788 Google Chat DM threading broken - each response creates new thread
- #52475 Google Chat: add option to disable automatic threading on replies
- #61435 [Feature]: googlechat — add `dm.threadReplies` config option to control reply threading
- #70041 [Bug]: Google Chat: reply chunks 2+ land as top-level messages instead of staying in thread

Open candidates:

- #39554 Google Chat plugin: invalid thread resource name causes message send failures
- #42510 Google Chat: replyToMode: "off" does not suppress thread replies
- #44347 Google Chat: Add threaded reply support + receive all messages in spaces
- #58514 [Bug]: Google Chat: Space/Group messages silently ignored (DMs work correctly)
- #65007 Google Chat add-on payload parsing rejects valid space events and wildcard group allowlist still blocks senders
- #69422 Google Chat outbound: thread/reply routing metadata leaks across streamed block replies
