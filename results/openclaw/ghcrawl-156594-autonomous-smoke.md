---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156594-autonomous-smoke"
mode: "autonomous"
run_id: "24979996819"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24979996819"
head_sha: "83a7148bc5de8d1cf6f53dc784229962ebfcf20a"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-27T06:32:48.038Z"
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

Run: [https://github.com/openclaw/clownfish/actions/runs/24979996819](https://github.com/openclaw/clownfish/actions/runs/24979996819)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/40352

## Summary

Hydrated state shows the representative #40443 is already closed and was replaced by #72624, but #72624 is security-sensitive and must be quarantined. The non-security items split into at least two related bug families: #40352 for explicit Reload Config stale state and #39392 for agent-switch/model-selection drift. No close, merge, or post-merge close action is safe because no non-security canonical fix has landed.

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
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #40352 | keep_canonical | planned | canonical | Keep #40352 open as the explicit config reload canonical issue until a non-security fix path lands. |
| #39392 | keep_related | planned | related | Related Control UI stale model state, but distinct from the explicit Reload Config stale-state root cause in #40352. |
| #43013 | route_security | planned | security_sensitive | Quarantine exact security-sensitive PR to central OpenClaw security handling. |
| #52948 | keep_related | planned | related | Useful related candidate, but not merge-ready and not a duplicate close target. |
| #54724 | keep_related | planned | related | Related but too broad and under-validated for merge; should remain open or become a narrower follow-up. |
| #72624 | route_security | planned | security_sensitive | Quarantine exact replacement PR to central OpenClaw security handling. |
| #40443 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #40441 | keep_closed | skipped | superseded | Already closed as superseded; no close action is valid. |
| #39401 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #46275 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #70633 | keep_closed | skipped | duplicate | Already closed; no close action is valid. |
| #13142 | keep_closed | skipped | related | Already closed; no close action is valid. |
| #41344 | keep_closed | skipped | fixed_by_candidate | Already closed; no close action is valid. |
| cluster:ghcrawl-156594-autonomous-smoke | fix_needed | blocked |  | Implementation should be split or refreshed after central security handling for #72624; do not close issues before a non-security fix lands. |
| cluster:ghcrawl-156594-autonomous-smoke | build_fix_artifact | blocked |  | Blocked on scoped maintainer/security decision before ProjectClownfish opens or merges a replacement fix. |

## Needs Human

- Decide whether to split this mixed cluster into narrower non-security follow-up jobs: #40352 explicit Reload Config stale state, and #39392/#54724 agent-switch/model-catalog selection stability. The existing replacement #72624 is security-sensitive and must first go through central OpenClaw security handling.
