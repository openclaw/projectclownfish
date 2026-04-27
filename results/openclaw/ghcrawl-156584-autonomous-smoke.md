---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156584-autonomous-smoke"
mode: "autonomous"
run_id: "24978142389"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24978142389"
head_sha: "e8d437d9978c397d8d3fb39c23597d4e5c1d98bf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T05:31:32.542Z"
canonical: "https://github.com/openclaw/openclaw/issues/43556"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43556"
canonical_pr: null
actions_total: 17
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 3
needs_human_count: 0
---

# ghcrawl-156584-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24978142389](https://github.com/openclaw/clownfish/actions/runs/24978142389)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/43556

## Summary

Autonomous classification completed from the hydrated preflight artifact. #43556 remains the canonical open issue. No merge is safe: the active replacement PR #72331 and linked PR #63121 are marked security-sensitive and must be routed to central security handling, while the useful non-security PRs are closed/uneditable. The ordinary non-security bug remains real on main, so emit a narrow credited replacement fix artifact and block duplicate closeout until that fix path exists.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 17 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 3 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | skipped |  |  | fix artifact scope itself contains security-sensitive signals |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56326 | close_duplicate | skipped | duplicate | action status is blocked |
| #63120 | close_duplicate | skipped | duplicate | action status is blocked |
| #64714 | close_duplicate | skipped | duplicate | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #43556 | keep_canonical | planned | canonical | Best live canonical issue for the shared root cause. |
| #56326 | close_duplicate | blocked | duplicate | Clear duplicate, but closeout is blocked on the canonical fix path. |
| #61724 | keep_related | planned | related | Same bug family, but keep open as related validation coverage for packaged release behavior. |
| #63120 | close_duplicate | blocked | duplicate | Clear duplicate, but closeout is blocked on the canonical fix path. |
| #64714 | close_duplicate | blocked | duplicate | Clear duplicate, but closeout is blocked on the canonical fix path. |
| #53370 | keep_closed | skipped | duplicate | Already closed; no closure action allowed. |
| #56193 | keep_closed | skipped | duplicate | Already closed; no closure action allowed. |
| #59390 | keep_closed | skipped | duplicate | Already closed; no closure action allowed. |
| #60965 | keep_closed | skipped | duplicate | Already closed; no closure action allowed. |
| #67248 | keep_closed | skipped | duplicate | Already closed; no closure action allowed. |
| #68275 | keep_closed | skipped | duplicate | Already closed; no closure action allowed. |
| #69166 | keep_closed | skipped | related | Already closed; no closure action allowed. |
| #59225 | keep_related | planned | related | Related follow-up scope; not a duplicate closeout target for this cluster. |
| #63121 | route_security | planned | security_sensitive | Security-sensitive linked PR is out of scope for ProjectClownfish mutation. |
| #72331 | route_security | planned | security_sensitive | Security-sensitive active PR must be handled by central security triage, not cluster cleanup automation. |
| cluster:ghcrawl-156584-autonomous-smoke | fix_needed | planned | related | A narrow non-security replacement fix path is needed before duplicate closeout. |
| cluster:ghcrawl-156584-autonomous-smoke | build_fix_artifact | planned | related | Build a narrow credited replacement fix artifact for the ordinary bug path. |

## Needs Human

- none
