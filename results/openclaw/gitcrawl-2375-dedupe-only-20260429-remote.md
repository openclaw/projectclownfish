---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2375-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132988005"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132988005"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T20:50:05.076Z"
canonical: "https://github.com/openclaw/openclaw/pull/51371"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/51371"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2375-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132988005](https://github.com/openclaw/clownfish/actions/runs/25132988005)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/51371

## Summary

Hydrated live state shows the representative #41653 and overlapping #51311 are already closed, both superseded by #51371. #51371 is the only open focused PR in this cluster and remains the canonical path; no close, merge, or fix mutation is planned.

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
| #41653 | keep_closed | skipped | superseded | Already closed in live preflight state; keep as closed historical source PR credited by the #51371 canonical path. |
| #51311 | keep_closed | skipped | superseded | Already closed in live preflight state; keep as closed historical source PR credited by the #51371 canonical path. |
| #51371 | keep_canonical | planned | canonical | Keep #51371 as the canonical open PR for maintainer validation; merge/fix actions are outside this job's allowed actions and no duplicate close remains open. |

## Needs Human

- none
