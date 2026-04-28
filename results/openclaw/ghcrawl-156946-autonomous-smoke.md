---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156946-autonomous-smoke"
mode: "autonomous"
run_id: "25040211577"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25040211577"
head_sha: "c1026cc2b278a4ef12da5cbce3ebe633f12beb50"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-28T07:40:21.237Z"
canonical: "https://github.com/openclaw/openclaw/issues/14850"
canonical_issue: "https://github.com/openclaw/openclaw/issues/14850"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156946-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25040211577](https://github.com/openclaw/clownfish/actions/runs/25040211577)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/14850

## Summary

Classified the hydrated cluster without GitHub mutations. #14850 remains the canonical open issue for binding-level cross-channel session unification. #58004 is already closed and must not receive a close action. #11665 and #50875 are related but distinct session/identity follow-ups. A narrow fix artifact is needed for #14850 because no viable hydrated PR fixes the binding-level non-direct channel session-target gap.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #14850 | keep_canonical | planned | canonical |  |
| #58004 | keep_closed | skipped | fixed_by_candidate | Already closed before this worker pass. |
| #11665 | keep_related | planned | related |  |
| #50875 | keep_related | planned | related |  |
| #39049 | keep_closed | skipped | related | Closed historical context; no mutation planned. |
| cluster:ghcrawl-156946-autonomous-smoke | fix_needed | planned |  | Canonical issue is real and no viable canonical PR exists. |
| cluster:ghcrawl-156946-autonomous-smoke | build_fix_artifact | planned |  | Needed to make #14850 actionable for the executor. |

## Needs Human

- none
