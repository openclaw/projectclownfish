---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156594-autonomous-smoke"
mode: "autonomous"
run_id: "24978946889"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24978946889"
head_sha: "29400ea714d617de4455a11f0aa59ca745bf6cda"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T05:59:15.012Z"
canonical: "https://github.com/openclaw/openclaw/issues/40352"
canonical_issue: "https://github.com/openclaw/openclaw/issues/40352"
canonical_pr: null
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-156594-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24978946889](https://github.com/openclaw/clownfish/actions/runs/24978946889)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/40352

## Summary

Classified the hydrated cluster without GitHub mutations. The original representative #40443 is now closed and replaced by #72624, but #72624 is security-sensitive and must be quarantined. #40352 remains the live canonical issue for the explicit Reload Config stale-state bug; #39392 remains a related open issue for the agent-switch model-select bug. No merge or close actions are safe in this pass.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | skipped |  |  | fix artifact scope itself contains security-sensitive signals |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #40352 | keep_canonical | planned | canonical |  |
| #39392 | keep_related | planned | related | Related Control UI model-select state bug, but not a true duplicate of #40352 because the reproduction path and likely UI remount/select synchronization fix are distinct. |
| #40441 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #40443 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #43013 | route_security | planned | security_sensitive | Security-sensitive hydrated item; route to central OpenClaw security handling and do not close, merge, comment, or fix through ProjectClownfish. |
| #46275 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #52948 | keep_related | planned | related | Useful related contributor PR, but not merge-ready and not safe to close as superseded before a canonical fix path lands. |
| #54724 | keep_related | planned | related | Related useful contributor PR, but broad code delta and missing merge preflight block autonomous merge. |
| #70633 | keep_closed | skipped | duplicate | Already closed; historical evidence only. |
| #72624 | route_security | planned | security_sensitive | Security-sensitive replacement PR; route to central OpenClaw security handling. |
| #39401 | keep_closed | skipped | superseded | Already closed linked context; historical evidence only. |
| #13142 | keep_closed | skipped | related | Already closed linked context; historical evidence only. |
| #41344 | keep_closed | skipped | fixed_by_candidate | Already closed linked context; historical evidence only. |
| cluster:ghcrawl-156594-autonomous-smoke | fix_needed | blocked | needs_human | Canonical fix path is blocked on central security handling for #72624. |
| cluster:ghcrawl-156594-autonomous-smoke | build_fix_artifact | blocked | needs_human | Implementation blocked until security triage clears the replacement path or authorizes a non-security repair scope. |

## Needs Human

- Central OpenClaw security triage is required for #43013 and #72624. #72624 is the active replacement for the #40443/#40352 explicit reload fix path, so merge, fixed-by-candidate closeout, and a new equivalent fix PR are blocked until that security-sensitive item is cleared or split.
