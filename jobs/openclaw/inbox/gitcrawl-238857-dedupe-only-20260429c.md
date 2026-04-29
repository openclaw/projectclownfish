---
repo: openclaw/openclaw
cluster_id: gitcrawl-238857-dedupe-only-20260429c
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
  - "#65654"
candidates:
  - "#65653"
  - "#65654"
  - "#66358"
  - "#67611"
cluster_refs:
  - "#65653"
  - "#65654"
  - "#66358"
  - "#67611"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65654 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238857 on 2026-04-29."
---

# Gitcrawl Cluster 238857

Generated from local gitcrawl run cluster 238857 for `openclaw/openclaw`.

Display title:

> Bug: memory-core dreaming narrative creates orphaned sessions that are never cleaned up

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #65654, currently open in local store
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
- #67611 [Feature]: Automatic Cleanup of Dreaming sessions.
