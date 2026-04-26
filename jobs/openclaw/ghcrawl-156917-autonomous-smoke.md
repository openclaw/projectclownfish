---
repo: openclaw/openclaw
cluster_id: ghcrawl-156917-autonomous-smoke
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
  - "#65000"
candidates:
  - "#65000"
  - "#66683"
  - "#67777"
cluster_refs:
  - "#65000"
  - "#66683"
  - "#67777"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #65000 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156917 on 2026-04-26."
---

# GHCrawl Cluster 156917

Generated from local ghcrawl run cluster 156917 for `openclaw/openclaw`.

Display title:

> [Bug]: Make subagent completion delivery durable across retry and reconnect gaps

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #65000, currently open in local store
- latest member update: 2026-04-24T18:56:21.902Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #65000 [Bug]: Make subagent completion delivery durable across retry and reconnect gaps
- #66683 Subagent completions can resolve before parent reply delivery succeeds
- #67777 [Bug]: Subagent completion delivery can be lost on direct-announce timeout, drain, or orphan prune
