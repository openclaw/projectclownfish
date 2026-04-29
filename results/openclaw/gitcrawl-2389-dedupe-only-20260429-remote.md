---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2389-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132991497"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132991497"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T20:58:01.239Z"
canonical: "https://github.com/openclaw/openclaw/issues/43095"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43095"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2389-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132991497](https://github.com/openclaw/clownfish/actions/runs/25132991497)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/43095

## Summary

#43095 remains the live canonical issue for the sessions_send accepted/delivered versus reply-wait timeout contract. The closed refs are evidence-only, no close/comment/label mutation is needed, and a non-mutating fix artifact captures the narrow follow-up implementation because current main still has the ambiguity and no viable PR is hydrated.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #20939 | keep_closed | skipped | related | Closed fallback-specific context issue; keep as historical evidence only. |
| #42233 | keep_closed | skipped | related | Closed related implementation context; no mutation is valid for this run. |
| #43095 | keep_canonical | planned | canonical | Best surviving open canonical for the remaining sessions_send result-contract ambiguity. |
| #53527 | keep_closed | skipped | duplicate | Already-closed duplicate of #43095; keep as evidence only. |
| cluster:gitcrawl-2389-dedupe-only-20260429-remote | fix_needed | planned |  | A canonical fix path is needed, but this run is non-mutating and cannot raise a PR. |
| cluster:gitcrawl-2389-dedupe-only-20260429-remote | build_fix_artifact | planned |  | Build a non-mutating follow-up artifact for the canonical contract fix without opening a PR in this job. |

## Needs Human

- none
