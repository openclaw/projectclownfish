---
repo: openclaw/openclaw
cluster_id: gitcrawl-11116-dedupe-only-20260429-remote
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
  - "#62551"
candidates:
  - "#41657"
  - "#63905"
cluster_refs:
  - "#41657"
  - "#50129"
  - "#62551"
  - "#63905"
  - "#67676"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #62551 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 11116 on 2026-04-29."
---

# Gitcrawl Cluster 11116

Generated from local gitcrawl run cluster 11116 for `openclaw/openclaw`.

Display title:

> [Bug]: Agent is not being able to read files that were sent on Slack

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 2
- representative: #62551, currently closed in local store
- latest member update: 2026-04-28T21:55:43.813739568Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #50129 Slack connector silently drops file attachments in DM messages
- #62551 [Bug]: Agent is not being able to read files that were sent on Slack
- #67676 Slack: file_id and url_private dropped from inbound file_shared events

Open candidates:

- #41657 Slack: Include file attachment metadata in inbound message delivery to agents
- #63905 bug(slack): inbound attachments in container sandbox fail with placeholder-only turn and fetch error 'invalid onRequestStart method'
