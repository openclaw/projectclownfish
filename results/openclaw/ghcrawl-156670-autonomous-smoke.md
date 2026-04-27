---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156670-autonomous-smoke"
mode: "autonomous"
run_id: "25023042445"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25023042445"
head_sha: "416b225d73239870f6704a4eeb6d95f026ba00e9"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T22:34:01.610Z"
canonical: "https://github.com/openclaw/openclaw/pull/49262"
canonical_issue: "https://github.com/openclaw/openclaw/issues/45222"
canonical_pr: "https://github.com/openclaw/openclaw/pull/49262"
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156670-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25023042445](https://github.com/openclaw/clownfish/actions/runs/25023042445)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/49262

## Summary

Hydrated preflight shows the original loopback gateway handshake issue family is already closed as implemented on current main, with the landed canonical fix path represented by merged PR #49262. No close, merge, or fix mutation is safe for the only open seed candidate #52336 because maintainer review explicitly says it is browser/WSL2-specific and should not be closed without a fresh repro. Linked exec-env issue #61095 is a separate root cause, and security-sensitive linked PR #61127 is quarantined only for central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
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
| #45222 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; retained as historical canonical issue evidence only. |
| #51679 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by the landed handshake fix path. |
| #52336 | keep_related | planned | related | Related symptom family, but not a true duplicate or fixed-by-candidate closeout because maintainer requested a fresh current-version repro before closure. |
| #61554 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by the landed handshake fix path. |
| #64201 | keep_closed | skipped | independent | Closed independent crash-loop report; historical evidence only for this handshake cluster. |
| #45173 | keep_closed | skipped | related | Already closed related context for the same gateway handshake symptom family. |
| #45437 | keep_closed | skipped | superseded | Closed unmerged PR superseded by the landed hydrated PR #49262. |
| #49262 | keep_canonical | planned | canonical | Best canonical landed fix path for the original loopback gateway handshake timeout family. |
| #61095 | keep_related | planned | related | Related gateway failure symptom, but separate exec environment root cause; keep open for its own cluster/security-aware handling. |
| #61127 | route_security | planned | security_sensitive | Quarantine exact security-sensitive linked PR to central OpenClaw security handling while continuing unrelated non-security classification. |
| #64255 | keep_closed | skipped | related | Closed related context only; not a viable canonical PR and not part of this handshake closeout. |

## Needs Human

- none
