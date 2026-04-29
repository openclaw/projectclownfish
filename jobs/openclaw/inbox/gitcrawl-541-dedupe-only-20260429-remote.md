---
repo: openclaw/openclaw
cluster_id: gitcrawl-541-dedupe-only-20260429-remote
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
  - "#39555"
candidates:
  - "#39555"
  - "#47754"
  - "#48112"
  - "#48328"
cluster_refs:
  - "#39555"
  - "#45928"
  - "#47754"
  - "#48112"
  - "#48328"
  - "#57711"
  - "#68286"
  - "#68830"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39555 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 541 on 2026-04-29."
---

# Gitcrawl Cluster 541

Generated from local gitcrawl run cluster 541 for `openclaw/openclaw`.

Display title:

> fix(memory): use per-keyword FTS search in hybrid mode #39484

Cluster shape from gitcrawl:

- total members: 8
- issues: 0
- pull requests: 8
- open candidates in local store: 4
- representative: #39555, currently open in local store
- latest member update: 2026-04-28T22:51:06.896707933Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45928 memory: fix FTS-only indexing gap and sync N+1 queries
- #57711 feat(memory): enable query expansion in hybrid search mode
- #68286 feat(memory-core): expose vectorScore and textScore in hybrid search results
- #68830 fix(memory): expose vectorScore and textScore in hybrid search results

Open candidates:

- #39555 fix(memory): use per-keyword FTS search in hybrid mode #39484
- #47754 fix(memory): use FTS5 snippet() for keyword search instead of truncating chunk text from the beginning
- #48112 memory: preserve keyword fallback hits after merge-time scoring
- #48328 fix(memory): remove provider model filter from FTS keyword search
