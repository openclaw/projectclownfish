---
repo: openclaw/openclaw
cluster_id: ghcrawl-156890-autonomous-smoke
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
  - "#59073"
candidates:
  - "#59073"
  - "#59967"
  - "#65908"
cluster_refs:
  - "#59073"
  - "#59967"
  - "#65908"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #59073 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156890 on 2026-04-26."
---

# GHCrawl Cluster 156890

Generated from local ghcrawl run cluster 156890 for `openclaw/openclaw`.

Display title:

> memory_search falls back because qmd managed collection memory-alt-main is missing and repair does not recreate it

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #59073, currently open in local store
- latest member update: 2026-04-24T18:56:23.543Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #59073 memory_search falls back because qmd managed collection memory-alt-main is missing and repair does not recreate it
- #59967 QMD memory backend: managed collection naming mismatch causes Collection not found: memory-dir-main
- #65908 memory search still targets stale QMD collections (memory-alt-main/custom-1-main) and falls back to builtin
