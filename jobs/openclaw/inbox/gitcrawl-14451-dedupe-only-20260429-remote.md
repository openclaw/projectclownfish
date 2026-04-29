---
repo: openclaw/openclaw
cluster_id: gitcrawl-14451-dedupe-only-20260429-remote
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
  - "#43982"
candidates:
  - "#43982"
  - "#61150"
  - "#67533"
cluster_refs:
  - "#43982"
  - "#61150"
  - "#67533"
  - "#68641"
  - "#70525"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #43982 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14451 on 2026-04-29."
---

# Gitcrawl Cluster 14451

Generated from local gitcrawl run cluster 14451 for `openclaw/openclaw`.

Display title:

> fix(gateway): strip inline image payloads from chat history

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 3
- representative: #43982, currently open in local store
- latest member update: 2026-04-28T07:04:52.455765345Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #68641 Fix Control UI image history rendering
- #70525 fix(gateway): preserve control UI chat images in history (Fixes #70507)

Open candidates:

- #43982 fix(gateway): strip inline image payloads from chat history
- #61150 fix: guard sanitizeChatSendMessageInput against non-string message objects
- #67533 fix(ui): render uploaded images in Control UI chat after history reload
