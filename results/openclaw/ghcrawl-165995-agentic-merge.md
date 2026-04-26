---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165995-agentic-merge"
mode: "autonomous"
run_id: "24962940666"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24962940666"
head_sha: "c6a011e689cd5c31e8b8008fb1626f775ad148df"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T17:56:19.583Z"
canonical: "https://github.com/openclaw/openclaw/issues/43556"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43556"
canonical_pr: null
actions_total: 19
apply_executed: 0
apply_blocked: 0
apply_skipped: 5
needs_human_count: 0
---

# ghcrawl-165995-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24962940666](https://github.com/openclaw/projectclownfish/actions/runs/24962940666)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/43556

## Summary

Representative #59390 is already closed. The live canonical issue for the immediate streamTo/subagent hard-failure family is #43556, but no viable open implementation PR exists. Closed PR #68397 is the best narrow source patch, with #65282 as corroborating prior work; both are closed/uneditable, so the safe autonomous path is a credited replacement fix PR before any duplicate closeout. Broader schema-filtering work remains related on #59225, and open PR #69170 is a related schema-hint PR with failing checks, not the canonical runtime fix.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 19 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 5 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56326 | close_duplicate | skipped | duplicate | action status is blocked |
| #61724 | close_duplicate | skipped | duplicate | action status is blocked |
| #63120 | close_duplicate | skipped | duplicate | action status is blocked |
| #64714 | close_duplicate | skipped | duplicate | action status is blocked |
| #67248 | close_duplicate | skipped | duplicate | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #43556 | keep_canonical | planned | canonical | Current best live canonical issue after #59390 closed. |
| #56326 | close_duplicate | blocked | duplicate | Close is blocked on the canonical fix path or fix PR. |
| #61724 | close_duplicate | blocked | duplicate | Close is blocked on the canonical fix path or fix PR. |
| #63120 | close_duplicate | blocked | duplicate | Close is blocked on the canonical fix path or fix PR. |
| #64714 | close_duplicate | blocked | duplicate | Close is blocked on the canonical fix path or fix PR. |
| #67248 | close_duplicate | blocked | duplicate | Close is blocked on the canonical fix path or fix PR. |
| #59225 | keep_related | planned | related | Related follow-up scope, not a duplicate to close in this cluster. |
| #69170 | keep_related | planned | related | Related schema-hint PR; not the canonical hard-failure fix. |
| cluster:ghcrawl-165995-agentic-merge | fix_needed | planned |  | No viable open canonical implementation PR exists; replacement fix PR is needed. |
| cluster:ghcrawl-165995-agentic-merge | build_fix_artifact | planned |  | Replacement fix artifact is the auditable canonical path. |
| cluster:ghcrawl-165995-agentic-merge | open_fix_pr | planned |  | Open a new narrow fix PR through the guarded ProjectClownfish fix executor. |
| #53370 | keep_closed | skipped | superseded | Already closed; no closure action allowed. |
| #56193 | keep_closed | skipped | superseded | Already closed; no closure action allowed. |
| #59390 | keep_closed | skipped | superseded | Already closed; no closure action allowed. |
| #60965 | keep_closed | skipped | superseded | Already closed; no closure action allowed. |
| #68275 | keep_closed | skipped | superseded | Already closed; no closure action allowed. |
| #69166 | keep_closed | skipped | superseded | Already closed; no closure action allowed. |
| #68397 | keep_closed | skipped | superseded | Closed source PR used as credit/evidence only. |
| #65282 | keep_closed | skipped | superseded | Closed source PR used as credit/evidence only. |

## Needs Human

- none
