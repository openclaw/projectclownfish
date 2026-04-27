---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156647-autonomous-smoke"
mode: "autonomous"
run_id: "25023014227"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25023014227"
head_sha: "416b225d73239870f6704a4eeb6d95f026ba00e9"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T22:51:03.818Z"
canonical: "https://github.com/openclaw/openclaw/issues/64825"
canonical_issue: "https://github.com/openclaw/openclaw/issues/64825"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72389"
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-156647-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25023014227](https://github.com/openclaw/clownfish/actions/runs/25023014227)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/64825

## Summary

Representative #52745 is already closed and has been replaced by open ProjectClownfish PR #72389. The best canonical path is to repair #72389 before merge or closeout: it covers the orphaned-final/no-active-run TUI streaming bug but is blocked by failing checks and an actionable Greptile P2 about pending history refresh. #64825 should remain open until #72389 lands. #69026 is related watchdog UX tuning, not a duplicate of the orphaned-final fix. Security-sensitive linked ref #67401 is quarantined only for security routing.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/72389 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #64825 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |
| #72389 | merge_canonical | blocked | fix_pr | merge state status is UNSTABLE |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #52745 | keep_closed | skipped | superseded | Closed historical source PR; keep as credited source evidence only. |
| #64862 | keep_closed | skipped | superseded | Already closed; no mutation allowed. |
| #66192 | keep_closed | skipped | superseded | Already closed; no mutation allowed. |
| #66289 | keep_closed | skipped | superseded | Already closed; no mutation allowed. |
| #67302 | keep_closed | skipped | superseded | Already closed; no mutation allowed. |
| #63189 | keep_closed | skipped | fixed_by_candidate | Closed context issue; no close action is valid. |
| #66876 | keep_closed | skipped | fixed_by_candidate | Closed context issue; no close action is valid. |
| #67401 | route_security | planned | security_sensitive | Security-sensitive hydrated linked ref must be quarantined outside ProjectClownfish mutation flow. |
| #64825 | keep_canonical | planned | canonical | Best live canonical issue while repairable PR #72389 is not yet merge-ready. |
| #64825 | close_fixed_by_candidate | blocked | fixed_by_candidate | Closeout is blocked on the canonical fix path landing in #72389. |
| #69026 | keep_related | planned | related | Related TUI streaming watchdog tuning; keep open as a separate PR, not a duplicate closeout target. |
| #72389 | fix_needed | planned | canonical | Canonical PR is repairable but not merge-ready; executor should repair the existing ProjectClownfish branch before merge/closeout. |
| cluster:ghcrawl-156647-autonomous-smoke | build_fix_artifact | planned |  | A narrow executable repair artifact is needed before merge or issue closeout. |

## Needs Human

- none
