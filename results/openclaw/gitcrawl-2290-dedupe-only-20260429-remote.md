---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2290-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132465157"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132465157"
head_sha: "8b6ee7ffa77533bbae10cb97289fd78b142edfab"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T20:40:09.583Z"
canonical: "https://github.com/openclaw/openclaw/issues/67052"
canonical_issue: "https://github.com/openclaw/openclaw/issues/67052"
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2290-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132465157](https://github.com/openclaw/clownfish/actions/runs/25132465157)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/67052

## Summary

Closed representative #66876 is obsolete for the remaining open work. The current open canonical is #67052, which tracks the unresolved content-complete/finalizing TUI streaming-status UX gap. #67053 is related but not safe to close because it carries additional named-worker reproduction detail. No GitHub mutations are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #62395 | keep_closed | skipped | fixed_by_candidate | Already closed in live state; no mutation is valid. |
| #64825 | keep_closed | skipped | fixed_by_candidate | Already closed by the landed unbound-final recovery path; no close action is valid. |
| #66876 | keep_closed | skipped | fixed_by_candidate | Closed representative is historical evidence only; #67052 is the best open canonical for remaining work. |
| #67052 | keep_canonical | planned | canonical | Best surviving open canonical for the unresolved content-complete streaming-status UX gap. |
| #67053 | keep_related | planned | related | Related to the #67052 canonical family, but not a high-confidence duplicate closure. |
| #69081 | keep_closed | skipped | related | Already closed; retained only as related historical context. |
| #69026 | keep_related | planned | related | Useful related PR remains open; not merge-ready and not a duplicate closeout target. |
| #69544 | keep_independent | planned | independent | Independent linked ref; keep open outside this cluster. |
| #69978 | keep_related | planned | related | Related follow-up work; keep open. |

## Needs Human

- none
