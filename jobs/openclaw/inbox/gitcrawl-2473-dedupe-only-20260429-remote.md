---
repo: openclaw/openclaw
cluster_id: gitcrawl-2473-dedupe-only-20260429-remote
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
  - "#49586"
candidates:
  - "#53393"
cluster_refs:
  - "#49586"
  - "#49600"
  - "#49795"
  - "#53393"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #49586 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2473 on 2026-04-29."
---

# Gitcrawl Cluster 2473

Generated from local gitcrawl run cluster 2473 for `openclaw/openclaw`.

Display title:

> fix: regenerate models.json on config hot reload

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 1
- representative: #49586, currently closed in local store
- latest member update: 2026-04-27T22:51:36.376357805Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #49586 fix: regenerate models.json on config hot reload
- #49600 Fix: hot reload regenerates models.json on models provider config change (fixes #49568)
- #49795 fix(gateway): refresh model catalog on hot reload

Open candidates:

- #53393 refactor(gateway): unify config-derived cache invalidation on hot reload
