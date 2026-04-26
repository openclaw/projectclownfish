---
repo: openclaw/openclaw
cluster_id: ghcrawl-156802-autonomous-smoke
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
  - "#69256"
candidates:
  - "#44002"
  - "#57125"
  - "#69256"
cluster_refs:
  - "#44002"
  - "#57125"
  - "#69256"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #69256 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156802 on 2026-04-26."
---

# GHCrawl Cluster 156802

Generated from local ghcrawl run cluster 156802 for `openclaw/openclaw`.

Display title:

> fix(cron): prevent premature session cleanup when subagents are running

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #69256, currently open in local store
- latest member update: 2026-04-24T18:56:24.477Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #44002 Cron: scope isolated subagent waits to current run window (fix #43850)
- #57125 fix(cron): add runtime type guard and exception handling in delivery dispatch
- #69256 fix(cron): prevent premature session cleanup when subagents are running
