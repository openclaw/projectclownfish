---
repo: openclaw/openclaw
cluster_id: ghcrawl-156741-autonomous-smoke
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
  - "#59382"
candidates:
  - "#59046"
  - "#59382"
  - "#59397"
  - "#59484"
cluster_refs:
  - "#59046"
  - "#59382"
  - "#59397"
  - "#59484"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #59382 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156741 on 2026-04-26."
---

# GHCrawl Cluster 156741

Generated from local ghcrawl run cluster 156741 for `openclaw/openclaw`.

Display title:

> Validate channels status timeout values

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #59382, currently open in local store
- latest member update: 2026-04-24T18:56:24.762Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #59046 Keep channels status JSON output on gateway failure
- #59382 Validate channels status timeout values
- #59397 Validate nodes CLI timeout values
- #59484 Avoid config fallback for channels status probe failures
