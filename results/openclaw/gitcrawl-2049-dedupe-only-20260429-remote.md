---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2049-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131879799"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131879799"
head_sha: "d8a032e46d7a5449946bb8a8f542719694995636"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T20:32:47.123Z"
canonical: "https://github.com/openclaw/openclaw/pull/41866"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/41866"
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2049-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131879799](https://github.com/openclaw/clownfish/actions/runs/25131879799)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/41866

## Summary

Classified the only live open candidate, #41866, as the canonical PR for the remaining leading to=... JSON user-facing sanitizer gap. No close, merge, label, or fix action is planned: the other cluster members are already closed context, and #41866 still has actionable bot review feedback while this dedupe-only job blocks merge and fix work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41866 | keep_canonical | planned | canonical | #41866 remains the best live canonical path for this narrow sanitizer gap, but it should stay open because the job is dedupe-only, merge/fix actions are blocked, and the PR still needs review-feedback repair before any landing decision. |

## Needs Human

- none
