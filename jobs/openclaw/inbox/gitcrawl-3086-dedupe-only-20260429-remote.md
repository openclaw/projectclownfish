---
repo: openclaw/openclaw
cluster_id: gitcrawl-3086-dedupe-only-20260429-remote
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
  - "#50955"
candidates:
  - "#50955"
cluster_refs:
  - "#46715"
  - "#50955"
  - "#60420"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #50955 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 3086 on 2026-04-29."
---

# Gitcrawl Cluster 3086

Generated from local gitcrawl run cluster 3086 for `openclaw/openclaw`.

Display title:

> fix(acp): unify thread-bound session binding and delivery routing

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 1
- representative: #50955, currently open in local store
- latest member update: 2026-04-28T18:51:15.043070702Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #46715 Agents: fix sessions_send announce delivery for thread-bound targets (#46645)
- #60420 Fix stale thread-bound ACP session routing cleanup

Open candidates:

- #50955 fix(acp): unify thread-bound session binding and delivery routing
