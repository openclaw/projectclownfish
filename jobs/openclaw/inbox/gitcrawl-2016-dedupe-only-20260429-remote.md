---
repo: openclaw/openclaw
cluster_id: gitcrawl-2016-dedupe-only-20260429-remote
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
  - "#50793"
candidates:
  - "#53119"
  - "#68783"
cluster_refs:
  - "#34518"
  - "#43631"
  - "#45830"
  - "#50793"
  - "#52795"
  - "#53119"
  - "#68783"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #50793 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2016 on 2026-04-29."
---

# Gitcrawl Cluster 2016

Generated from local gitcrawl run cluster 2016 for `openclaw/openclaw`.

Display title:

> fix(cron): resolve false-positive delivery failures in isolated agent runs

Cluster shape from gitcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 2
- representative: #50793, currently closed in local store
- latest member update: 2026-04-27T22:51:36.971134033Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #34518 fix(cron): skip delivery target resolution when delivery mode is none
- #43631 fix(cron): propagate meta.error as run failure for isolated agent turns
- #45830 fix(cron): snapshot origin delivery context for isolated jobs with channel "last"
- #50793 fix(cron): resolve false-positive delivery failures in isolated agent runs
- #52795 fix(cron): prioritize explicit isolated delivery targets

Open candidates:

- #53119 Fix cron false-positive errors after recovered reminder delivery
- #68783 fix(cron): preserve delivery config across job executions (#68760)
