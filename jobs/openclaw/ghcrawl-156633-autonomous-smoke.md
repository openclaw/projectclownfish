---
repo: openclaw/openclaw
cluster_id: ghcrawl-156633-autonomous-smoke
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
  - "#65481"
candidates:
  - "#62646"
  - "#63678"
  - "#65481"
  - "#65914"
  - "#66259"
  - "#67805"
  - "#68590"
cluster_refs:
  - "#62646"
  - "#63678"
  - "#65481"
  - "#65914"
  - "#66259"
  - "#67805"
  - "#68590"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #65481 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156633 on 2026-04-26."
---

# GHCrawl Cluster 156633

Generated from local ghcrawl run cluster 156633 for `openclaw/openclaw`.

Display title:

> fix(memory-qmd): prefer --mask for collection patterns

Cluster shape from ghcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 7
- representative: #65481, currently open in local store
- latest member update: 2026-04-24T18:56:23.149Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #62646 fix(memory): only search QMD collections that still exist
- #63678 fix(memory): robustify QMD vector status parsing
- #65481 fix(memory-qmd): prefer --mask for collection patterns
- #65914 fix(memory): respect qmd status timeout and skip checkpoint exports
- #66259 fix(memory): prefer --mask for qmd collection add compatibility
- #67805 fix(memory-core): fall back when mcporter query returns no results
- #68590 fix(memory-core): rewrite qmd index on managed collection repair
