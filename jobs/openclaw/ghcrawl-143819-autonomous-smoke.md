---
repo: openclaw/openclaw
cluster_id: ghcrawl-143819-autonomous-smoke
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#68252"
candidates:
  - "#65653"
  - "#65654"
  - "#65963"
  - "#66358"
  - "#67029"
  - "#67058"
  - "#67152"
  - "#67689"
  - "#67730"
  - "#68074"
  - "#68252"
  - "#68562"
  - "#69187"
  - "#69543"
  - "#69886"
  - "#69918"
  - "#70353"
  - "#70395"
  - "#70402"
  - "#71133"
cluster_refs:
  - "#65653"
  - "#65654"
  - "#65963"
  - "#66358"
  - "#67029"
  - "#67058"
  - "#67152"
  - "#67689"
  - "#67730"
  - "#68074"
  - "#68252"
  - "#68562"
  - "#69187"
  - "#69543"
  - "#69886"
  - "#69918"
  - "#70353"
  - "#70395"
  - "#70402"
  - "#71133"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #68252 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 143819 on 2026-04-25."
---

# GHCrawl Cluster 143819

Generated from local ghcrawl run cluster 143819 for `openclaw/openclaw`.

Display title:

> memory-core: dreaming narrative session cleanup fails with "missing scope: operator.admin"

Cluster shape from ghcrawl:

- total members: 20
- issues: 20
- pull requests: 0
- open candidates in local store: 20
- representative: #68252, currently open in local store
- latest member update: 2026-04-25T07:30:10.827Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #65653 Bug: memory-core dreaming narrative creates orphaned sessions that are never cleaned up
- #65654 Bug: memory-core dreaming narrative creates orphaned sessions that are never cleaned up
- #65963 Dreaming: session sprawl, missing model override, no auto-cleanup
- #66358 [Bug] Dreaming creates redundant sessions in session list after sweep
- #67029 [Bug]: memory-core dreaming: narrative session cleanup fails with missing scope operator.admin
- #67058 [Feature Request] Add session list filter to hide dreaming/system sessions in Control UI
- #67152 [Bug]: memory-core: dreaming narrative uses request-scoped subagent runtime outside gateway request, causing fallback generation and cleanup warnings
- #67689 Feature request: Session management UI (hide/archive/filter sessions)
- #67730 [Bug]: Dreaming/Session-memory creates sessions but never cleans them up
- #68074 [Bug]: memory-core: narrative session cleanup fails with "missing scope: operator.admin"
- #68252 memory-core: dreaming narrative session cleanup fails with "missing scope: operator.admin"
- #68562 memory-core: narrative session cleanup logs spurious warning when subagent runtime is request-scoped
- #69187 memory-core dreaming plugin: deleteSession() fails 100% → sessions.json leak → gateway OOM
- #69543 Dreaming-generated sessions appear in normal Control UI session picker
- #69886 memory-core narrative session cleanup fails with missing scope: operator.admin
- #69918 Dreaming narrative sessions leak into agent session list / UI switcher
- #70353 memory-core: dreaming subagent lacks operator.admin to delete its own session
- #70395 memory-core dreaming cleanup requires operator.admin and logs failure despite successful promotion
- #70402 Dreaming sessions pollute UI agent switcher — sessions.json not cleaned up after dream runs
- #71133 memory-core: narrative session cleanup fails with missing scope: operator.admin
