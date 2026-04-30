---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-15323-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25143529289"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25143529289"
head_sha: "1ec0acac1fb4111b0e6e83564a87181cc117f225"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-30T02:07:32.302Z"
canonical: "https://github.com/openclaw/openclaw/issues/51208"
canonical_issue: "https://github.com/openclaw/openclaw/issues/51208"
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

# gitcrawl-15323-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25143529289](https://github.com/openclaw/clownfish/actions/runs/25143529289)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/51208

## Summary

Using the hydrated preflight artifact as live state, #51208 remains the best open canonical for the mapped-hook codex-cli resume bug. #70894 is related and has its own open candidate fix #70895, but it is not a true duplicate of #51208 and should stay open until that PR or an equivalent lands. No close/comment/label mutation is planned because instant close and post-merge close are disabled, #70895 is unmerged, and its hydrated checks include failures.

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
| #51208 | keep_canonical | planned | canonical | Best surviving open canonical for the mapped-hook codex-cli resume/root session-continuation report. |
| #70894 | keep_related | planned | fixed_by_candidate | Related direct-webhook session continuity issue covered by candidate PR #70895, but not safe to close in this dedupe-only run. |
| #70895 | keep_related | planned | related | Useful open candidate for the related #70894 subpath; keep it open for maintainer review, repair, or replacement outside this dedupe-only job. |

## Needs Human

- none
