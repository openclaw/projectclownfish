---
repo: openclaw/openclaw
cluster_id: gitcrawl-2445-dedupe-only-20260429-remote
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
  - "#46475"
candidates:
  - "#46506"
  - "#63535"
cluster_refs:
  - "#46475"
  - "#46506"
  - "#63535"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #46475 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2445 on 2026-04-29."
---

# Gitcrawl Cluster 2445

Generated from local gitcrawl run cluster 2445 for `openclaw/openclaw`.

Display title:

> cron: clean up sessions and run logs on job removal (#46369)

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 2
- representative: #46475, currently closed in local store
- latest member update: 2026-04-28T11:40:35.795818581Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #46475 cron: clean up sessions and run logs on job removal (#46369)

Open candidates:

- #46506 fix: clean up session records and run logs on cron.remove (#46369)
- #63535 fix(cron): auto-recover orphaned running sessions in reaper sweep
