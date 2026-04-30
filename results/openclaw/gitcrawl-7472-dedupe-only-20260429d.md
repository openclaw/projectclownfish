---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-7472-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142725803"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142725803"
head_sha: "8a3c4b53d7ee7d2fb198d1574bbacd17ea63af32"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-30T01:35:01.083Z"
canonical: "https://github.com/openclaw/openclaw/pull/50522"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41355"
canonical_pr: "https://github.com/openclaw/openclaw/pull/50522"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-7472-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142725803](https://github.com/openclaw/clownfish/actions/runs/25142725803)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/50522

## Summary

Classified #50522 as the open canonical Discord ThreadStarterBody fix path. #41355 stays open as the paired issue covered by #50522, and #61156 is already closed and independent because it handled Discord ack reaction account context, not ThreadStarterBody re-injection. No close, merge, or fix action is planned because instant close, merge, and fix PR creation are disabled for this job, and #50522 still lacks merge-ready proof.

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
| #50522 | keep_canonical | planned | canonical | #50522 remains the best live canonical PR, but this job is limited to non-merge/non-fix classification. |
| #41355 | keep_related | planned | fixed_by_candidate | #41355 is covered by the canonical candidate #50522 but should not be closed before the fix lands. |
| #61156 | keep_closed | skipped | independent | #61156 is already closed and is not a duplicate of the canonical ThreadStarterBody cluster. |

## Needs Human

- none
