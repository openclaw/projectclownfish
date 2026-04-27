---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156594-autonomous-smoke"
mode: "autonomous"
run_id: "24978155440"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24978155440"
head_sha: "e8d437d9978c397d8d3fb39c23597d4e5c1d98bf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T05:50:06.728Z"
canonical: "https://github.com/openclaw/openclaw/pull/40443"
canonical_issue: "https://github.com/openclaw/openclaw/issues/40352"
canonical_pr: "https://github.com/openclaw/openclaw/pull/40443"
actions_total: 10
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-156594-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24978155440](https://github.com/openclaw/clownfish/actions/runs/24978155440)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/40443

## Summary

Classified the hydrated cluster without GitHub mutations. #40443 remains the canonical repair path for the explicit reload stale-config bug tracked by #40352, but it is not merge-ready because mergeability is unknown, no fresh Codex /review is present, and review-bot findings need verification on the latest head. #43013 is quarantined as security-sensitive. Agent-switch/page-load model-select work in #39392, #52948, and #54724 is related follow-up work rather than duplicate closeout for #40443.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | validation command failed (pnpm check:changed): undefined ERR_PNPM_RECURSIVE_EXEC_FIRST_FAIL Command "check:changed" not found Did you mean "pnpm check:docs"? |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/72624 | clownfish/ghcrawl-156594-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #40352 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |
| #72624 | merge_canonical | blocked | fix_pr | mergeable state is CONFLICTING |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39392 | keep_related | planned | related | Same Control UI model-selection area, but a meaningfully different agent-switch root cause, so this should remain open as related follow-up work. |
| #40352 | close_fixed_by_candidate | blocked | fixed_by_candidate | Clear coverage by #40443, but closeout is blocked until the canonical fix path lands. |
| #40441 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #40443 | keep_canonical | planned | canonical | Best canonical path for #40352, but not merge-ready under ProjectClownfish merge policy. |
| #43013 | route_security | planned | security_sensitive | Scoped quarantine; continue unrelated non-security classification. |
| #46275 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #52948 | keep_related | planned | related | Related selected-option/page-load subproblem; keep open for a separate review or repair path. |
| #54724 | keep_related | planned | related | Related agent-switch/model-catalog subcluster; broad delta blocks autonomous merge in this pass. |
| #70633 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| cluster:ghcrawl-156594-autonomous-smoke | build_fix_artifact | planned |  | Repair the canonical contributor PR branch before any merge or issue closeout. |

## Needs Human

- none
