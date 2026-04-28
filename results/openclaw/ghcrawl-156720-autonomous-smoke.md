---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156720-autonomous-smoke"
mode: "autonomous"
run_id: "25039066365"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25039066365"
head_sha: "da036e490846162aa84e5b443cfc870a58f935a1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-28T07:20:08.281Z"
canonical: "https://github.com/openclaw/openclaw/pull/45270"
canonical_issue: "https://github.com/openclaw/openclaw/issues/45268"
canonical_pr: "https://github.com/openclaw/openclaw/pull/45270"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 2
needs_human_count: 0
---

# ghcrawl-156720-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25039066365](https://github.com/openclaw/clownfish/actions/runs/25039066365)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/45270

## Summary

Classified the mixed status cluster into two non-security subfamilies. #45270 remains the canonical open PR for stale totalTokensFresh context display and should stay open until merge gates are complete. #65109/#65381/#52329 are a separate cache-cost subcluster: #65381 is the narrow repairable implementation candidate, #52329 is broader draft work superseded only after the repair path lands, and #65109 should stay open until validation. #63238 is scoped to security routing only and receives no close/merge action.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 2 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/65381 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #45268 | close_fixed_by_candidate | skipped | fixed_by_candidate | Clear fixed-by-candidate relationship, but closeout is blocked until #45270 lands. |
| #52329 | close_superseded | skipped | superseded | Superseded by the narrower repairable cache-cost candidate, but closeout is blocked on the canonical cache-cost fix path. |
| #65381 | merge_canonical | blocked | fix_pr | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled for human review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #45270 | keep_canonical | planned | canonical | Best surviving canonical for the stale context-usage display bug, but merge gates are incomplete. |
| #45268 | close_fixed_by_candidate | blocked | fixed_by_candidate | Clear fixed-by-candidate relationship, but closeout is blocked until #45270 lands. |
| #63238 | route_security | planned | security_sensitive | Quarantine only the listed security-sensitive ref and continue classifying unrelated non-security items. |
| #65109 | keep_related | planned | related | Related status-rendering area, but a distinct cache-cost bug that needs its own fix path. |
| #65381 | keep_related | planned | related | Separate cache-cost implementation candidate; repair branch rather than merge directly from stale diff. |
| #52329 | close_superseded | blocked | superseded | Superseded by the narrower repairable cache-cost candidate, but closeout is blocked on the canonical cache-cost fix path. |
| cluster:ghcrawl-156720-autonomous-smoke | fix_needed | planned | fixed_by_candidate | Repair the narrow contributor branch for the cache-cost subcluster before any closeout or merge recommendation. |
| cluster:ghcrawl-156720-autonomous-smoke | build_fix_artifact | planned |  | Executor-ready fix artifact for the separate cache-cost subcluster. |

## Needs Human

- none
