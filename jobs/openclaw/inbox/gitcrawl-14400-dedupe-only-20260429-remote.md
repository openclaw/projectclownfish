---
repo: openclaw/openclaw
cluster_id: gitcrawl-14400-dedupe-only-20260429-remote
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
  - "#44859"
candidates:
  - "#44859"
  - "#48194"
cluster_refs:
  - "#44859"
  - "#48026"
  - "#48194"
  - "#58105"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #44859 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14400 on 2026-04-29."
---

# Gitcrawl Cluster 14400

Generated from local gitcrawl run cluster 14400 for `openclaw/openclaw`.

Display title:

> Cron: Add additional targets that result of cron jobs will be sent to multiple channels

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 2
- representative: #44859, currently open in local store
- latest member update: 2026-04-28T18:04:42.706065092Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #48026 [Feature]: Cron-on-additional-channels
- #58105 Cron: support multi-channel delivery (fanout)

Open candidates:

- #44859 Cron: Add additional targets that result of cron jobs will be sent to multiple channels
- #48194 feat(cron): support additionalTargets for multi-channel delivery
