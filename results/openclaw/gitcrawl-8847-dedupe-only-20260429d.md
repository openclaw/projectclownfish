---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-8847-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25143041685"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25143041685"
head_sha: "409422518ec79d91a76943837b4592abd04b8a86"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-30T01:47:08.288Z"
canonical: "https://github.com/openclaw/openclaw/issues/55126"
canonical_issue: "https://github.com/openclaw/openclaw/issues/55126"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-8847-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25143041685](https://github.com/openclaw/clownfish/actions/runs/25143041685)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/55126

## Summary

Canonical issue #55126 is still open and remains the best live canonical for the OpenAI memorySearch outputDimensionality bug. PR #55507 is a useful open related candidate fix for the same root cause, but this dedupe-only job blocks merge, fix, and raise_pr actions, and the PR lacks merge preflight proof, so no close, merge, or fix action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #55126 | keep_canonical | planned | canonical | Representative #55126 is still open, hydrated, non-security-sensitive, and is the canonical issue for this root cause. |
| #55507 | keep_related | planned | related | PR #55507 tracks the same root cause and should remain open for maintainer review or refresh; this job cannot merge, repair, replace, or close it. |

## Needs Human

- none
