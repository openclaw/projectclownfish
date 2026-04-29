---
repo: openclaw/openclaw
cluster_id: gitcrawl-13770-dedupe-only-20260429-remote
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
  - "#59262"
candidates:
  - "#59262"
cluster_refs:
  - "#54024"
  - "#57042"
  - "#59262"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59262 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13770 on 2026-04-29."
---

# Gitcrawl Cluster 13770

Generated from local gitcrawl run cluster 13770 for `openclaw/openclaw`.

Display title:

> feat: memory-sleep skill - agent memory consolidation

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 1
- representative: #59262, currently open in local store
- latest member update: 2026-04-25T11:56:54.646Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #54024 feat(memory): implement sleep memory consolidation Layer 2
- #57042 feat(skills): add deepsleep — two-phase daily memory persistence

Open candidates:

- #59262 feat: memory-sleep skill - agent memory consolidation
