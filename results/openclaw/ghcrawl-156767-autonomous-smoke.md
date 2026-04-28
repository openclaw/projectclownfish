---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156767-autonomous-smoke"
mode: "autonomous"
run_id: "25039247972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25039247972"
head_sha: "fde59edd9cd014ad373980963191e4d2052146de"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-28T07:15:53.522Z"
canonical: "https://github.com/openclaw/openclaw/pull/39115"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/39115"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156767-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25039247972](https://github.com/openclaw/clownfish/actions/runs/25039247972)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/39115

## Summary

Hydrated preflight shows #39115 is the only open primary candidate and is marked security-sensitive, so it is quarantined to central OpenClaw security handling. The other primary candidate PRs, #41809 and #50854, are already closed and remain historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #39115 | route_security | planned | security_sensitive | Security-sensitive hydrated PR must be quarantined to central OpenClaw security handling; unrelated closed PRs can still be classified as historical evidence. |
| #41809 | keep_closed | skipped | superseded | Already closed live; no mutation is valid. Classification remains superseded by hydrated #39115 for historical cluster accounting. |
| #50854 | keep_closed | skipped | superseded | Already closed live; no mutation is valid. Classification remains superseded by hydrated #39115 for historical cluster accounting. |

## Needs Human

- none
