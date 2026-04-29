---
repo: openclaw/openclaw
cluster_id: gitcrawl-2696-dedupe-only-20260429-remote
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
  - "#59650"
candidates:
  - "#51596"
  - "#59650"
cluster_refs:
  - "#39948"
  - "#51596"
  - "#59650"
  - "#67153"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59650 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2696 on 2026-04-29."
---

# Gitcrawl Cluster 2696

Generated from local gitcrawl run cluster 2696 for `openclaw/openclaw`.

Display title:

> docs(skills): add advanced features section to creating-skills guide

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 2
- representative: #59650, currently open in local store
- latest member update: 2026-04-29T10:20:02.855851959Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39948 Docs: Add advanced features section to creating-skills.md
- #67153 Update creating-skills.md

Open candidates:

- #51596 docs: fix custom skill naming example
- #59650 docs(skills): add advanced features section to creating-skills guide
