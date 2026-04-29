---
repo: openclaw/openclaw
cluster_id: gitcrawl-936-dedupe-only-20260429-remote
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
  - "#69252"
candidates:
  - "#46423"
  - "#51001"
cluster_refs:
  - "#46423"
  - "#51001"
  - "#69252"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #69252 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 936 on 2026-04-29."
---

# Gitcrawl Cluster 936

Generated from local gitcrawl run cluster 936 for `openclaw/openclaw`.

Display title:

> fix(cron): retry transient recurring failures before next schedule

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 2
- representative: #69252, currently closed in local store
- latest member update: 2026-04-28T18:51:15.034890238Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #69252 fix(cron): retry transient recurring failures before next schedule

Open candidates:

- #46423 fix(cron): retry recurring jobs on transient errors with backoff
- #51001 feat(cron): add retry support for recurring jobs without affecting schedule cadence
