---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-15220-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25143521082"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25143521082"
head_sha: "1ec0acac1fb4111b0e6e83564a87181cc117f225"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-30T02:04:59.029Z"
canonical: "https://github.com/openclaw/openclaw/pull/72004"
canonical_issue: "https://github.com/openclaw/openclaw/issues/71992"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72004"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-15220-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25143521082](https://github.com/openclaw/clownfish/actions/runs/25143521082)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72004

## Summary

Canonical path is the focused open PR #72004 for the Control UI assistant-final duplicate-render race. PR #49332 is adjacent but not the best canonical: it mixes unrelated runtime/provider/Discord/ops changes and still has unresolved review findings, so it should remain open as related maintainer follow-up rather than be closed or merged in this dedupe-only job. No close, merge, fix, or PR-opening actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #72004 | keep_canonical | planned | canonical | Best current canonical PR for the duplicate-render race; merge is out of scope for this job. |
| #49332 | keep_related | planned | related | Related follow-up, not a strict duplicate of #72004 and not safe to close or merge from this job. |
| #71992 | keep_related | planned | fixed_by_candidate | Covered by canonical candidate #72004, but no closeout is allowed before merge. |
| #69208 | keep_related | planned | related | Related umbrella context only; not a duplicate target for this PR-only dedupe job. |

## Needs Human

- none
