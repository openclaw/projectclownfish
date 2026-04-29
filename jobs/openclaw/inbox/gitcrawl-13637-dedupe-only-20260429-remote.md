---
repo: openclaw/openclaw
cluster_id: gitcrawl-13637-dedupe-only-20260429-remote
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
  - "#42729"
candidates:
  - "#42729"
  - "#56509"
  - "#63871"
  - "#64375"
cluster_refs:
  - "#42729"
  - "#49229"
  - "#52619"
  - "#56509"
  - "#61813"
  - "#63871"
  - "#64375"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #42729 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13637 on 2026-04-29."
---

# Gitcrawl Cluster 13637

Generated from local gitcrawl run cluster 13637 for `openclaw/openclaw`.

Display title:

> fix(cron): prevent duplicate job execution after gateway restart (#42640)

Cluster shape from gitcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 4
- representative: #42729, currently open in local store
- latest member update: 2026-04-28T19:37:22.017549163Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #49229 fix(cron): wrap async gateway handler operations in try-catch to prevent gateway crashes
- #52619 fix(cron): catch schedule errors in createJob to prevent Gateway crash
- #61813 fix: catch up missed cron-expression job runs on gateway restart

Open candidates:

- #42729 fix(cron): prevent duplicate job execution after gateway restart (#42640)
- #56509 fix(cron): prevent one-shot at jobs from re-triggering after completion
- #63871 fix(cron): honor deleteAfterRun for recurring jobs
- #64375 fix(cron): honor deleteAfterRun for every and cron schedule kinds
