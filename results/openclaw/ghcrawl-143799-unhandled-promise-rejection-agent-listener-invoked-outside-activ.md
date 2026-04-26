---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143799-unhandled-promise-rejection-agent-listener-invoked-outside-activ"
mode: "plan"
run_id: "24936634290"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24936634290"
head_sha: "26aea6dfd2d7f0535f43131bbfd4c1d5d934edbb"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T01:27:46.160Z"
canonical: "#61741"
canonical_issue: "#61741"
canonical_pr: null
actions_total: 6
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-143799-unhandled-promise-rejection-agent-listener-invoked-outside-activ

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24936634290](https://github.com/openclaw/projectclownfish/actions/runs/24936634290)

Workflow conclusion: success

Worker result: planned

Canonical: #61741

## Summary

Plan only. Promote #61741 to the live canonical because #61917 is already closed. Recommend close_duplicate for #62754, #63220, #65285, and #69920; keep #65983 related because restart/session-loss orphan PTY trees retain distinct follow-up work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #61741 | keep_canonical | planned | canonical | Best surviving open root-cause issue after the original representative #61917 was closed. |
| #62754 | close_duplicate | planned | duplicate | Same failure family and no unique remaining work beyond the open umbrella issue #61741. |
| #63220 | close_duplicate | planned | duplicate | Reopened duplicate of the same after-run callback race already covered by #61741. |
| #65285 | close_duplicate | planned | duplicate | Generic symptom duplicate of the active-run lifecycle race tracked in #61741. |
| #65983 | keep_related | planned | related | Shares the same failure family but keeps distinct restart/session-loss orphan-process ownership work open. |
| #69920 | close_duplicate | planned | duplicate | Late generic re-report of the same crash signature with no unique remaining work beyond #61741. |

## Needs Human

- none
