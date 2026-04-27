---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-207050-agentic-merge"
mode: "autonomous"
run_id: "24979713670"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24979713670"
head_sha: "8806d2971f220668a5fdb92adf8595525bd6678b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T06:22:44.776Z"
canonical: "https://github.com/openclaw/openclaw/pull/72405"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72405"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-207050-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24979713670](https://github.com/openclaw/clownfish/actions/runs/24979713670)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72405

## Summary

Hydrated artifact shows #72405 is the current canonical replacement fix path for the non-security restart probe auth work, but merge and covered-PR closeout are blocked by an unresolved Greptile review finding and failing candidate checks. #48472 is security-sensitive and must be routed to central security handling only. #57374 is already closed and remains historical evidence for the replacement path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #59439 | close_superseded | skipped | superseded | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #48472 | route_security | planned | security_sensitive | Security-sensitive PRs are out of ProjectClownfish mutation scope and must route to central OpenClaw security triage. |
| #72405 | keep_canonical | planned | canonical | Current canonical fix path is explicit, hydrated, and narrow, but it is not merge-ready because review-bot comments and failing checks remain unresolved. |
| #57374 | keep_closed | skipped | superseded | Already closed refs must not receive close actions; retain as historical superseded evidence for #72405. |
| #59439 | close_superseded | blocked | superseded | require_fix_before_close blocks closing a useful contributor PR until the canonical replacement fix path is clean or merged. |
| #50662 | keep_related | planned | related | Related but not fully covered by #72405 due to the distinct rate-limit fallback rotation scope and unresolved review findings. |

## Needs Human

- none
