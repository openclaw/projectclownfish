---
repo: openclaw/openclaw
cluster_id: gitcrawl-238884-dedupe-only-20260429c
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
  - "#62195"
candidates:
  - "#45129"
  - "#45465"
  - "#62195"
cluster_refs:
  - "#45129"
  - "#45465"
  - "#62195"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #62195 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238884 on 2026-04-29."
---

# Gitcrawl Cluster 238884

Generated from local gitcrawl run cluster 238884 for `openclaw/openclaw`.

Display title:

> feat(cron): add preHook gate for pre-run script checks

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #62195, currently open in local store
- latest member update: 2026-04-28T17:52:26.713Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45129 feat(cron): add pre-hook support for shell-based job gating
- #45465 cron: add lifecycle hooks for job execution
- #62195 feat(cron): add preHook gate for pre-run script checks
