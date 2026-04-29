---
repo: openclaw/openclaw
cluster_id: gitcrawl-2369-dedupe-only-20260429-remote
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
  - "#41275"
candidates:
  - "#41272"
  - "#41275"
  - "#68753"
cluster_refs:
  - "#41272"
  - "#41275"
  - "#68753"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41275 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2369 on 2026-04-29."
---

# Gitcrawl Cluster 2369

Generated from local gitcrawl run cluster 2369 for `openclaw/openclaw`.

Display title:

> fix(cron): allow timeoutSeconds: 0 for no-timeout mode

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #41275, currently open in local store
- latest member update: 2026-04-28T21:55:43.857261634Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41272 Bug: Cron job UI rejects timeoutSeconds: 0 (no-timeout mode)
- #41275 fix(cron): allow timeoutSeconds: 0 for no-timeout mode
- #68753 fix: allow systemEvent cron jobs to specify custom timeoutSeconds
