---
repo: openclaw/openclaw
cluster_id: ghcrawl-156928-autonomous-smoke
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
  - "#68313"
  - "#70204"
cluster_refs:
  - "#68106"
  - "#68313"
  - "#70204"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #68106 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156928 on 2026-04-26."
---

# GHCrawl Cluster 156928

Generated from local ghcrawl run cluster 156928 for `openclaw/openclaw`.

Display title:

> fix(lobster): surface workflow path errors

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #68106, currently open in local store
- latest member update: 2026-04-24T18:56:18.063Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #68106 fix(lobster): surface workflow path errors
- #68313 fix(lobster): surface file-not-found error for workflow-like pipeline paths
- #70204 fix(lobster): clarify unresolved workflow file paths
