---
repo: openclaw/openclaw
cluster_id: gitcrawl-2234-dedupe-only-20260429-remote
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
  - "#44824"
candidates:
  - "#44293"
  - "#44824"
  - "#48887"
  - "#54275"
cluster_refs:
  - "#44293"
  - "#44824"
  - "#48887"
  - "#49913"
  - "#54275"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #44824 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2234 on 2026-04-29."
---

# Gitcrawl Cluster 2234

Generated from local gitcrawl run cluster 2234 for `openclaw/openclaw`.

Display title:

> build(docs): make check:docs PowerShell-compatible

Cluster shape from gitcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 4
- representative: #44824, currently open in local store
- latest member update: 2026-04-28T21:29:55.460543729Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #49913 docs: make format check PowerShell-friendly

Open candidates:

- #44293 Make `pnpm check:docs` work in native PowerShell
- #44824 build(docs): make check:docs PowerShell-compatible
- #48887 Fix/docs format check windows clean
- #54275 docs: replace stale docs:build script references
