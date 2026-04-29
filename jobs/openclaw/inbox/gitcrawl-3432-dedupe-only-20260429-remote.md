---
repo: openclaw/openclaw
cluster_id: gitcrawl-3432-dedupe-only-20260429-remote
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
  - "#65481"
candidates:
  - "#62646"
  - "#63678"
  - "#65547"
  - "#65914"
  - "#68590"
cluster_refs:
  - "#62019"
  - "#62646"
  - "#63678"
  - "#65481"
  - "#65547"
  - "#65914"
  - "#66259"
  - "#67404"
  - "#67805"
  - "#68590"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65481 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 3432 on 2026-04-29."
---

# Gitcrawl Cluster 3432

Generated from local gitcrawl run cluster 3432 for `openclaw/openclaw`.

Display title:

> fix(memory-qmd): prefer --mask for collection patterns

Cluster shape from gitcrawl:

- total members: 10
- issues: 0
- pull requests: 10
- open candidates in local store: 5
- representative: #65481, currently closed in local store
- latest member update: 2026-04-28T20:12:58.564943648Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #62019 fix(memory): downgrade qmd collection already-exists warning to info
- #65481 fix(memory-qmd): prefer --mask for collection patterns
- #66259 fix(memory): prefer --mask for qmd collection add compatibility
- #67404 fix(memory-core): refresh qmd session exports on transcript updates
- #67805 fix(memory-core): fall back when mcporter query returns no results

Open candidates:

- #62646 fix(memory): only search QMD collections that still exist
- #63678 fix(memory): robustify QMD vector status parsing
- #65547 test(memory-qmd): verify extraCollections pattern reaches qmd collection add CLI args
- #65914 fix(memory): respect qmd status timeout and skip checkpoint exports
- #68590 fix(memory-core): rewrite qmd index on managed collection repair
