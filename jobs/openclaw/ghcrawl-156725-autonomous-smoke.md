---
repo: openclaw/openclaw
cluster_id: ghcrawl-156725-autonomous-smoke
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
  - "#59253"
candidates:
  - "#48913"
  - "#59253"
  - "#61691"
  - "#65339"
cluster_refs:
  - "#48913"
  - "#59253"
  - "#61691"
  - "#65339"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #59253 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156725 on 2026-04-26."
---

# GHCrawl Cluster 156725

Generated from local ghcrawl run cluster 156725 for `openclaw/openclaw`.

Display title:

> Feature: Configurable overload retry count and circuit breaker for model failover

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #59253, currently open in local store
- latest member update: 2026-04-24T18:56:30.234Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #48913 [Feature]: Single-Model Retry Logic
- #59253 Feature: Configurable overload retry count and circuit breaker for model failover
- #61691 Feature: Model retry with backoff before falling back to backup chain
- #65339 Feature Request: Same-model retry with backoff before fallback (reopen #17465)
