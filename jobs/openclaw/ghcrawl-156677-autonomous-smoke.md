---
repo: openclaw/openclaw
cluster_id: ghcrawl-156677-autonomous-smoke
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
  - "#55726"
candidates:
  - "#50041"
  - "#50042"
  - "#55726"
  - "#56255"
  - "#56923"
cluster_refs:
  - "#50041"
  - "#50042"
  - "#55726"
  - "#56255"
  - "#56923"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #55726 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156677 on 2026-04-26."
---

# GHCrawl Cluster 156677

Generated from local ghcrawl run cluster 156677 for `openclaw/openclaw`.

Display title:

> fix(security): include dmPolicy in exposure matrix audit

Cluster shape from ghcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #55726, currently open in local store
- latest member update: 2026-04-24T18:56:29.063Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #50041 security: clarify fail-open denyCommands audit warning
- #50042 security: clarify mention gates are not a trust boundary
- #55726 fix(security): include dmPolicy in exposure matrix audit
- #56255 fix(security): extend audit to flag dmPolicy=open and session.dmScope=main
- #56923 fix(security): include dangerous commands in known commands list
