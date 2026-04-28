---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156677-autonomous-smoke"
mode: "autonomous"
run_id: "25038979341"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25038979341"
head_sha: "da036e490846162aa84e5b443cfc870a58f935a1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-28T07:09:07.192Z"
canonical: "https://github.com/openclaw/openclaw/pull/55726"
canonical_issue: "https://github.com/openclaw/openclaw/issues/55612"
canonical_pr: "https://github.com/openclaw/openclaw/pull/55726"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156677-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25038979341](https://github.com/openclaw/clownfish/actions/runs/25038979341)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/55726

## Summary

Hydrated preflight shows the representative #55726, linked issue #55612, closed PR #50042, and linked closed issue #55578 are security-sensitive and must be routed to central OpenClaw security handling without ProjectClownfish mutation. Closed non-security PRs #50041 and #56255 remain historical evidence only. Open PR #56923 is a separate non-security audit false-positive fix, not a duplicate of the dmPolicy exposure-matrix cluster, and is kept open as independent because merge gates are missing or incomplete.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #50041 | keep_closed | skipped | related | Already closed; keep as historical related context only. |
| #50042 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish mutation scope even though it is already closed. |
| #55578 | route_security | planned | security_sensitive | Security-sensitive linked issue; route only, no close or comment action. |
| #55612 | route_security | planned | security_sensitive | Open security-sensitive issue must be quarantined to central OpenClaw security handling. |
| #55726 | route_security | planned | security_sensitive | Representative PR is security-sensitive and not merge-ready; route to central security handling instead of ProjectClownfish fix or merge. |
| #56255 | keep_closed | skipped | superseded | Already closed and superseded historical context; no mutation. |
| #56923 | keep_independent | planned | independent | Separate audit false-positive fix, not covered by the security-sensitive dmPolicy canonical family. |

## Needs Human

- none
