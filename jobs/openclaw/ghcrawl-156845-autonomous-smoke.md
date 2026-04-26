---
repo: openclaw/openclaw
cluster_id: ghcrawl-156845-autonomous-smoke
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
  - "#62328"
candidates:
  - "#50453"
  - "#59518"
  - "#62328"
cluster_refs:
  - "#50453"
  - "#59518"
  - "#62328"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #62328 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156845 on 2026-04-26."
---

# GHCrawl Cluster 156845

Generated from local ghcrawl run cluster 156845 for `openclaw/openclaw`.

Display title:

> node:sqlite missing FTS5 module — memory search keyword fallback broken

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #62328, currently open in local store
- latest member update: 2026-04-24T18:56:30.024Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #50453 Memory Search FTS5 unavailable on Windows due to node:sqlite missing FTS5 module
- #59518 [BUG] FTS5 unavailable in node:sqlite runtime breaks memory_search and degrades LCM on Node 23.6.1
- #62328 node:sqlite missing FTS5 module — memory search keyword fallback broken
