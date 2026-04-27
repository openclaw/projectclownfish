---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-207050-agentic-merge"
mode: "autonomous"
run_id: "24977051940"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24977051940"
head_sha: "50a0b51ad3e3cfffa74443fc81bf0c842f9747bf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T04:49:28.497Z"
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

Run: [https://github.com/openclaw/clownfish/actions/runs/24977051940](https://github.com/openclaw/clownfish/actions/runs/24977051940)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72405

## Summary

Classified the hydrated cluster without GitHub mutation. #72405 is the current canonical replacement path for the non-security restart-probe-auth work, but it is not merge-ready because review-bot feedback remains unresolved or depends on unhydrated #72433, mergeability is unknown, several checks are failing, and no clean Codex /review preflight is present. #48472 is quarantined as security-sensitive. #50662 remains related because it includes a separate rate-limit fallback change. #57374 is already closed and historical. #59439 is superseded by the credited replacement path but closure is blocked until the canonical fix path is merge-ready.

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
| #48472 | route_security | planned | security_sensitive | Security-sensitive PRs are outside ProjectClownfish mutation scope. |
| #50662 | keep_related | planned | related | Related mixed-scope PR with unique non-gateway work; keep open for separate review rather than closing as a duplicate. |
| #57374 | keep_closed | skipped | superseded | Historical closed source PR; evidence only. |
| #59439 | close_superseded | blocked | superseded | Blocked on the canonical fix path #72405 becoming merge-ready; do not close useful contributor work before the replacement path is clean. |
| #72405 | keep_canonical | planned | canonical | Current canonical replacement path, but merge is blocked until review-bot feedback, linked follow-up hydration, checks, mergeability, and Codex /review preflight are clean. |

## Needs Human

- none
