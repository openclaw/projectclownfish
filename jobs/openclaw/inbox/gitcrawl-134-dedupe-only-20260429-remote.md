---
repo: openclaw/openclaw
cluster_id: gitcrawl-134-dedupe-only-20260429-remote
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
  - "#44665"
candidates:
  - "#54600"
cluster_refs:
  - "#44665"
  - "#46181"
  - "#54600"
  - "#69345"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #44665 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 134 on 2026-04-29."
---

# Gitcrawl Cluster 134

Generated from local gitcrawl run cluster 134 for `openclaw/openclaw`.

Display title:

> fix(cron): report not-requested when delivery.mode=none and delivered=false

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 1
- representative: #44665, currently closed in local store
- latest member update: 2026-04-27T22:51:37.075585877Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44665 fix(cron): report not-requested when delivery.mode=none and delivered=false
- #46181 fix: report not-requested when delivery.mode=none (#44533)
- #69345 fix: mark cron delivery as not-requested when mode is "none" (#69281)

Open candidates:

- #54600 fix: extract message string from cron agentTurn payload (#54579)
