---
repo: openclaw/openclaw
cluster_id: ghcrawl-156634-autonomous-smoke
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
  - "#65653"
candidates:
  - "#65653"
  - "#65654"
  - "#66358"
  - "#67152"
  - "#68252"
  - "#68562"
  - "#69187"
cluster_refs:
  - "#65653"
  - "#65654"
  - "#66358"
  - "#67152"
  - "#68252"
  - "#68562"
  - "#69187"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #65653 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156634 on 2026-04-26."
---

# GHCrawl Cluster 156634

Generated from local ghcrawl run cluster 156634 for `openclaw/openclaw`.

Display title:

> Bug: memory-core dreaming narrative creates orphaned sessions that are never cleaned up

Cluster shape from ghcrawl:

- total members: 7
- issues: 7
- pull requests: 0
- open candidates in local store: 7
- representative: #65653, currently open in local store
- latest member update: 2026-04-24T18:56:21.556Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #65653 Bug: memory-core dreaming narrative creates orphaned sessions that are never cleaned up
- #65654 Bug: memory-core dreaming narrative creates orphaned sessions that are never cleaned up
- #66358 [Bug] Dreaming creates redundant sessions in session list after sweep
- #67152 [Bug]: memory-core: dreaming narrative uses request-scoped subagent runtime outside gateway request, causing fallback generation and cleanup warnings
- #68252 memory-core: dreaming narrative session cleanup fails with "missing scope: operator.admin"
- #68562 memory-core: narrative session cleanup logs spurious warning when subagent runtime is request-scoped
- #69187 memory-core dreaming plugin: deleteSession() fails 100% → sessions.json leak → gateway OOM
