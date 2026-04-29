---
repo: openclaw/openclaw
cluster_id: gitcrawl-6305-dedupe-only-20260429-remote
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
  - "#46559"
candidates:
  - "#46559"
cluster_refs:
  - "#46559"
  - "#46611"
  - "#66815"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #46559 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 6305 on 2026-04-29."
---

# Gitcrawl Cluster 6305

Generated from local gitcrawl run cluster 6305 for `openclaw/openclaw`.

Display title:

> Fix internal/planning chat leaks when verbose is off

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 1
- representative: #46559, currently open in local store
- latest member update: 2026-04-28T11:40:35.785565751Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #46611 fix: load bundled outbound send deps via plugin sdk
- #66815 fix: suppress commentary text in live gateway surfaces

Open candidates:

- #46559 Fix internal/planning chat leaks when verbose is off
