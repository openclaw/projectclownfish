---
repo: openclaw/openclaw
cluster_id: gitcrawl-238855-dedupe-only-20260429c
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
  - "#63678"
  - "#65481"
  - "#66259"
  - "#68590"
cluster_refs:
  - "#63678"
  - "#65481"
  - "#66259"
  - "#68590"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65481 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238855 on 2026-04-29."
---

# Gitcrawl Cluster 238855

Generated from local gitcrawl run cluster 238855 for `openclaw/openclaw`.

Display title:

> fix(memory-qmd): prefer --mask for collection patterns

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #65481, currently open in local store
- latest member update: 2026-04-26T21:32:46.373Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #63678 fix(memory): robustify QMD vector status parsing
- #65481 fix(memory-qmd): prefer --mask for collection patterns
- #66259 fix(memory): prefer --mask for qmd collection add compatibility
- #68590 fix(memory-core): rewrite qmd index on managed collection repair
