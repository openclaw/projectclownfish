---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156629-autonomous-smoke"
mode: "autonomous"
run_id: "24980267246"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24980267246"
head_sha: "40a5c7418ff46bf3e60da63dc6e2345c96900f78"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T06:52:07.391Z"
canonical: "https://github.com/openclaw/openclaw/issues/63491"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63491"
canonical_pr: null
actions_total: 13
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 3
needs_human_count: 0
---

# ghcrawl-156629-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24980267246](https://github.com/openclaw/clownfish/actions/runs/24980267246)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/63491

## Summary

Classified hydrated cluster from preflight artifact. Keep #63491 as the broad canonical issue. Treat #48771 as a duplicate/narrow subcase but block closure until the canonical fix path lands. Route security-sensitive #49865 only. Do not merge #48801 or #69056 now: #48801 has failing checks and actionable bot review findings; #69056 lacks merge-preflight proof in this worker run. Build a narrow repair artifact for #48801 preserving contributor credit.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 3 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | validation command failed (pnpm check:changed): undefined ERR_PNPM_RECURSIVE_EXEC_FIRST_FAIL Command "check:changed" not found Did you mean "pnpm check:docs"? |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/72660 | clownfish/ghcrawl-156629-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #48771 | close_duplicate | skipped | duplicate | action status is blocked |
| #48801 | merge_candidate | skipped | related | action status is blocked |
| #69056 | merge_candidate | skipped | related | action status is blocked |
| #72660 | merge_canonical | blocked | fix_pr | merge state status is UNSTABLE |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #63491 | keep_canonical | planned | canonical |  |
| #48771 | close_duplicate | blocked | duplicate | Blocked by require_fix_before_close: closeout should wait for the canonical fix path for #63491/#48771, most likely a repaired #48801 or replacement fix PR. |
| #48801 | merge_candidate | blocked | related | Repairable contributor PR, but not merge-ready until bot review findings are fixed, checks pass, and merge preflight including clean Codex /review is present. |
| cluster:ghcrawl-156629-autonomous-smoke | fix_needed | planned |  | Build a narrow repair plan for #48801 before duplicate closeout. |
| cluster:ghcrawl-156629-autonomous-smoke | build_fix_artifact | planned |  |  |
| #69056 | merge_candidate | blocked | related | Do not recommend merge without required merge_preflight proof. Keep as a related candidate for the SIGUSR1 subfamily. |
| #51469 | keep_related | planned | related |  |
| #63691 | keep_related | planned | related |  |
| #49865 | route_security | planned | security_sensitive | Security-sensitive item is outside ProjectClownfish backlog cleanup mutation scope. |
| #48766 | keep_closed | skipped | duplicate |  |
| #64476 | keep_closed | skipped | fixed_by_candidate |  |
| #67416 | keep_closed | skipped | fixed_by_candidate |  |
| #69057 | keep_closed | skipped | superseded |  |

## Needs Human

- none
