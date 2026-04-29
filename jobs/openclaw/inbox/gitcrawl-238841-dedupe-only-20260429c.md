---
repo: openclaw/openclaw
cluster_id: gitcrawl-238841-dedupe-only-20260429c
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
  - "#43808"
candidates:
  - "#43808"
  - "#49704"
  - "#64708"
  - "#73030"
cluster_refs:
  - "#43808"
  - "#49704"
  - "#64708"
  - "#73030"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #43808 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238841 on 2026-04-29."
---

# Gitcrawl Cluster 238841

Generated from local gitcrawl run cluster 238841 for `openclaw/openclaw`.

Display title:

> cron: honor delivery.threadId for Telegram announce delivery

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #43808, currently open in local store
- latest member update: 2026-04-29T08:43:39.917Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #43808 cron: honor delivery.threadId for Telegram announce delivery
- #49704 fix(cron): announce delivery for Telegram forum topics
- #64708 fix: preserve Telegram topic thread IDs for cron delivery
- #73030 fix(cron): add missing threadId to delivery schema
