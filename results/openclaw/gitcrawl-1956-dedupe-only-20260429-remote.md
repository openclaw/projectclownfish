---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1956-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131309103"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131309103"
head_sha: "b5784ec6f81e07c69dcfb868449f4f451549e38e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T20:13:18.566Z"
canonical: "https://github.com/openclaw/openclaw/issues/52421"
canonical_issue: "https://github.com/openclaw/openclaw/issues/52421"
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

# gitcrawl-1956-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131309103](https://github.com/openclaw/clownfish/actions/runs/25131309103)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/52421

## Summary

Closed representative #37834 is historical evidence only. The current open canonical issue for this cluster is #52421, with #45393 as a useful but not merge-ready related PR candidate; #58608 is related but tracks a distinct on-disk self-healing gap and should remain open.

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
| #52421 | keep_canonical | planned | canonical | #52421 is the best surviving open issue for the residual user-visible `unexpected tool_use_id` handling work after the closed representative #37834 was closed as implemented. |
| #45393 | keep_related | planned | related | Useful related contributor work should remain open, but this worker cannot close, merge, or repair it under the current job gates. |
| #58608 | keep_related | planned | related | Related but not a duplicate of #52421; it has a distinct persistence/load-repair scope and should stay open. |

## Needs Human

- none
