---
repo: openclaw/openclaw
cluster_id: gitcrawl-1587-dedupe-only-20260429-remote
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
  - "#67037"
candidates:
  - "#63537"
  - "#66271"
  - "#70391"
cluster_refs:
  - "#63537"
  - "#66271"
  - "#67037"
  - "#70391"
  - "#70946"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #67037 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1587 on 2026-04-29."
---

# Gitcrawl Cluster 1587

Generated from local gitcrawl run cluster 1587 for `openclaw/openclaw`.

Display title:

> fix(ui): skip session.message reloads during active chat

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 3
- representative: #67037, currently closed in local store
- latest member update: 2026-04-28T22:51:07.131800094Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #67037 fix(ui): skip session.message reloads during active chat
- #70946 fix(ui): skip history reload when final event carries assistant message

Open candidates:

- #63537 fix(chat): don't reload history for /new and /reset commands
- #66271 Control UI: avoid chat flicker on session reload
- #70391 fix(ui): avoid redundant reload after final chat event
