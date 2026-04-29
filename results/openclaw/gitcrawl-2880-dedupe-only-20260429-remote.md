---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2880-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134553126"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134553126"
head_sha: "b9f5ebae325b39171f8129a731bbca8bf5b88966"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T21:27:27.619Z"
canonical: "https://github.com/openclaw/openclaw/issues/59287"
canonical_issue: "https://github.com/openclaw/openclaw/issues/59287"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2880-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134553126](https://github.com/openclaw/clownfish/actions/runs/25134553126)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/59287

## Summary

Hydrated live state shows the representative #44539 and prior candidate #44354 are already closed. #59287 is the best current open canonical for the Telegram health/status mismatch family; #46494 is a same-root duplicate that can be closed to #59287. #62763 is a separate Signal doctor multi-account config corruption report and should remain open as related follow-up work. No security-sensitive refs were detected, and no fix, merge, or post-merge action is planned because this job blocks fix/raise_pr/merge/post-merge closeout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #46494 | close_duplicate | blocked | duplicate | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #44539 | keep_closed | skipped | related | Closed representative is historical evidence only. |
| #44354 | keep_closed | skipped | related | Live state is closed; no mutation planned. |
| #59287 | keep_canonical | planned | canonical | Best surviving open canonical issue for the remaining health/status mismatch family. |
| #46494 | close_duplicate | planned | duplicate | Same root cause and same user-visible failure as the open canonical #59287, with no unique remaining work that needs a separate issue. |
| #62763 | keep_related | planned | related | Separate related doctor multi-account config subcluster; leave open for focused follow-up. |

## Needs Human

- none
