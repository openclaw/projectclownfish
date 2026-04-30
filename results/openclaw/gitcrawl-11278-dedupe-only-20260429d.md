---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-11278-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25143116289"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25143116289"
head_sha: "82a75cbed53460e49c2bd45f5695375a0ca1eeb1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-30T01:50:11.385Z"
canonical: "https://github.com/openclaw/openclaw/issues/63069"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63069"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-11278-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25143116289](https://github.com/openclaw/clownfish/actions/runs/25143116289)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/63069

## Summary

Hydrated preflight shows #63069 is still the open canonical issue for the shell completion profile-path bug. #63082 is a useful same-root-cause implementation candidate, but it is not merge-ready because bot review findings remain unresolved and this dedupe-only job disallows merge/fix execution. Linked #44296 is adjacent PowerShell onboarding work, not a duplicate. No close, label, merge, or fix action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #63069 | keep_canonical | planned | canonical | #63069 remains the best live canonical issue; no closure is appropriate before a reviewed fix lands. |
| #63082 | keep_related | planned | related | #63082 is the related implementation candidate for #63069, but unresolved bot review findings and job-level merge/fix blocks mean it should stay open rather than be merged, closed, or treated as a landed fix. |
| #44296 | keep_related | planned | related | #44296 is an adjacent completion-profile follow-up, not a true duplicate of #63069 and not covered by #63082 as currently reviewed. |

## Needs Human

- none
