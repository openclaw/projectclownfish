---
repo: openclaw/openclaw
cluster_id: gitcrawl-9613-dedupe-only-20260429-remote
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
  - "#57617"
candidates:
  - "#39032"
cluster_refs:
  - "#39032"
  - "#40845"
  - "#44610"
  - "#57617"
  - "#63478"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57617 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 9613 on 2026-04-29."
---

# Gitcrawl Cluster 9613

Generated from local gitcrawl run cluster 9613 for `openclaw/openclaw`.

Display title:

> Parent session stuck after subagent prompt-error abort — queued messages not processed

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 1
- representative: #57617, currently closed in local store
- latest member update: 2026-04-28T05:49:56.433409689Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40845 Subagent failure leaks full task prompt to user channel
- #44610 Session stops processing new messages after prompt-error: aborted
- #57617 Parent session stuck after subagent prompt-error abort — queued messages not processed
- #63478 [Bug]: QQBot session stuck in running state after subagent spawn failure/timeout

Open candidates:

- #39032 Subagent completion output leaks internal tool-failure reasoning to requester session
