---
repo: openclaw/openclaw
cluster_id: ghcrawl-156877-autonomous-smoke
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
  - "#56394"
candidates:
  - "#56394"
  - "#56466"
  - "#56582"
cluster_refs:
  - "#56394"
  - "#56466"
  - "#56582"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #56394 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156877 on 2026-04-26."
---

# GHCrawl Cluster 156877

Generated from local ghcrawl run cluster 156877 for `openclaw/openclaw`.

Display title:

> fix(clawhub): append login hint to 429 rate-limit errors when unauthenticated (#56368)

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #56394, currently open in local store
- latest member update: 2026-04-24T18:56:26.671Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #56394 fix(clawhub): append login hint to 429 rate-limit errors when unauthenticated (#56368)
- #56466 fix: handle wildcard (*) in plugin API version range checks
- #56582 fix(clawhub): reject malformed trailing-at plugin specs
