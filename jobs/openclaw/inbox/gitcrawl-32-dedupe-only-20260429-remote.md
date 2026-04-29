---
repo: openclaw/openclaw
cluster_id: gitcrawl-32-dedupe-only-20260429-remote
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
  - "#68106"
candidates:
  - "#68106"
cluster_refs:
  - "#68106"
  - "#68132"
  - "#68313"
  - "#70204"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #68106 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 32 on 2026-04-29."
---

# Gitcrawl Cluster 32

Generated from local gitcrawl run cluster 32 for `openclaw/openclaw`.

Display title:

> fix(lobster): surface workflow path errors

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 1
- representative: #68106, currently open in local store
- latest member update: 2026-04-28T22:51:07.199615809Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #68132 fix: surface Lobster workflow path errors
- #68313 fix(lobster): surface file-not-found error for workflow-like pipeline paths
- #70204 fix(lobster): clarify unresolved workflow file paths

Open candidates:

- #68106 fix(lobster): surface workflow path errors
