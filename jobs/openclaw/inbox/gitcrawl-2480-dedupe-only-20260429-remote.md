---
repo: openclaw/openclaw
cluster_id: gitcrawl-2480-dedupe-only-20260429-remote
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
  - "#50250"
candidates:
  - "#50245"
  - "#50250"
  - "#50269"
cluster_refs:
  - "#50245"
  - "#50250"
  - "#50269"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #50250 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2480 on 2026-04-29."
---

# Gitcrawl Cluster 2480

Generated from local gitcrawl run cluster 2480 for `openclaw/openclaw`.

Display title:

> fix(health): show gateway probe duration in text output

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #50250, currently open in local store
- latest member update: 2026-04-28T20:12:58.605104687Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #50245 health: show gateway probe duration in text output
- #50250 fix(health): show gateway probe duration in text output
- #50269 fix(cli): show gateway probe duration in text output
