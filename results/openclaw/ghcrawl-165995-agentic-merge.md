---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165995-agentic-merge"
mode: "autonomous"
run_id: "24964177040"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24964177040"
head_sha: "38f70877c94ad408c7816548e9dafe09a3dd4328"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-04-26T18:50:55.625Z"
canonical: "https://github.com/openclaw/openclaw/issues/43556"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43556"
canonical_pr: "https://github.com/openclaw/openclaw/pull/69170"
actions_total: 22
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-165995-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24964177040](https://github.com/openclaw/projectclownfish/actions/runs/24964177040)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/43556

## Summary

Canonical issue #43556 remains the best live issue for the sessions_spawn runtime=subagent ACP-only streamTo failure. The previous representative #59390 and implementation PR #68397 are closed, and the only open PR #69170 is repairable but not merge-ready because it is a schema-hint-only branch with failing checks. Plan a credited repair/fix path before closing remaining open duplicates.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 22 |
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
| #43556 | keep_canonical | planned | canonical | Best surviving canonical issue after #59390 closed. |
| #69170 | keep_canonical | planned | canonical | Repairable candidate branch, but merge is blocked until it is updated to the full fix, rebased, validated, and reviewed. |
| cluster:ghcrawl-165995-agentic-merge | fix_needed | planned |  | A canonical fix path is needed before duplicate closeout because require_fix_before_close is true. |
| cluster:ghcrawl-165995-agentic-merge | build_fix_artifact | planned |  | Build a repair artifact for the open contributor PR instead of merging or closing while checks fail. |
| #56326 | close_duplicate | blocked | duplicate | Blocked on canonical fix path or fix PR due require_fix_before_close. |
| #61724 | close_duplicate | blocked | duplicate | Blocked on canonical fix path or fix PR due require_fix_before_close. |
| #63120 | close_duplicate | blocked | duplicate | Blocked on canonical fix path or fix PR due require_fix_before_close. |
| #64714 | close_duplicate | blocked | duplicate | Blocked on canonical fix path or fix PR due require_fix_before_close. |
| #67248 | close_duplicate | blocked | duplicate | Blocked on canonical fix path or fix PR due require_fix_before_close. |
| #59225 | keep_related | planned | related | Related schema-design follow-up, not a duplicate close target for this cluster. |
| #53370 | keep_closed | skipped | duplicate | Closed refs are historical evidence only. |
| #56193 | keep_closed | skipped | duplicate | Closed refs are historical evidence only. |
| #59390 | keep_closed | skipped | duplicate | Closed representative is obsolete as canonical. |
| #60965 | keep_closed | skipped | duplicate | Closed refs are historical evidence only. |
| #68275 | keep_closed | skipped | duplicate | Closed refs are historical evidence only. |
| #69166 | keep_closed | skipped | related | Closed refs are historical evidence only. |
| #47115 | keep_closed | skipped | superseded | Closed PR is useful historical credit, not a mutation target. |
| #55483 | keep_closed | skipped | superseded | Closed PR is useful historical credit, not a mutation target. |
| #65282 | keep_closed | skipped | superseded | Closed PR is source-credit evidence for the fix artifact. |
| #68397 | keep_closed | skipped | superseded | Best historical implementation, but closed and unmergeable by worker; preserve credit in repair/fix artifact. |
| #69203 | keep_closed | skipped | superseded | Closed PR is related source-credit evidence only. |
| #66719 | keep_closed | skipped | related | Closed related context only. |

## Needs Human

- none
