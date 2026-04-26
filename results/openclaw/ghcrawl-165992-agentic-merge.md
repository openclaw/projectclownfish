---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165992-agentic-merge"
mode: "autonomous"
run_id: "24948420741"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24948420741"
head_sha: "9d33319999e848f71b8ec6d00e05ced29698d081"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T05:01:32.940Z"
canonical: "https://github.com/openclaw/openclaw/issues/41985"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41985"
canonical_pr: null
actions_total: 15
apply_executed: 0
apply_blocked: 0
apply_skipped: 5
needs_human_count: 0
---

# ghcrawl-165992-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24948420741](https://github.com/openclaw/projectclownfish/actions/runs/24948420741)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/41985

## Summary

Kept #41985 as the live canonical issue for the remaining non-image WebChat/Control UI attachment gap. #30389 stays related because it also tracks model-selection and skill/capability-menu work, five cluster siblings are already closed to #41985, and the remaining open duplicates cannot be closed in this run because `require_fix_before_close` blocks duplicate closeout until a canonical fix PR exists; this result therefore emits a narrow new-fix artifact and marks PR creation as blocked on missing checkout/branch context.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 5 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #30759 | close_duplicate | skipped | duplicate | action status is blocked |
| #47933 | close_duplicate | skipped | duplicate | action status is blocked |
| #48700 | close_duplicate | skipped | duplicate | action status is blocked |
| #69185 | close_duplicate | skipped | duplicate | action status is blocked |
| #69447 | close_duplicate | skipped | duplicate | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41985 | keep_canonical | planned | canonical | Best live canonical for the remaining generic non-image WebChat/Control UI attachment work. |
| #41985 | fix_needed | planned | canonical | The bug remains real on current main and no viable canonical PR exists in the hydrated artifact. |
| #41985 | build_fix_artifact | planned | canonical | A narrow fix artifact is the safest autonomous next step for the canonical issue. |
| #41985 | open_fix_pr | blocked | canonical | Implementation is blocked on missing checkout/branch context; only the fix artifact can be emitted in this run. |
| #30389 | keep_related | planned | related | Overlaps the attachment family but still contains distinct model-selection and skill/capability-menu work, so it is related rather than a true duplicate. |
| #30759 | close_duplicate | blocked | duplicate | Clear duplicate of #41985, but closeout is blocked by the fix-first policy because no canonical fix PR exists yet. |
| #47933 | close_duplicate | blocked | duplicate | The report falls into the same generic non-image attachment family tracked by #41985, but this run cannot close it before a fix PR exists. |
| #48700 | close_duplicate | blocked | duplicate | The issue is a straightforward duplicate of the canonical file-upload request, but closure is policy-blocked until a fix PR exists. |
| #69185 | close_duplicate | blocked | duplicate | Duplicate classification is clear, but the job's fix-first-close gate blocks the close action. |
| #69447 | close_duplicate | blocked | duplicate | The issue is a high-confidence duplicate with useful diagnostic detail, but policy blocks closeout until a fix PR exists. |
| #41992 | keep_closed | skipped | duplicate | Already closed as a duplicate of #41985; no further mutation is allowed. |
| #43242 | keep_closed | skipped | duplicate | Already closed as a duplicate of #41985; no further mutation is allowed. |
| #56298 | keep_closed | skipped | duplicate | Already closed as a duplicate of #41985; no further mutation is allowed. |
| #63094 | keep_closed | skipped | duplicate | Already closed as a duplicate of #41985; no further mutation is allowed. |
| #67622 | keep_closed | skipped | duplicate | Already closed as a duplicate of #41985; no further mutation is allowed. |

## Needs Human

- none
