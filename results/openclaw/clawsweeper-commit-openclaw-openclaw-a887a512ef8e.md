---
repo: "openclaw/openclaw"
cluster_id: "clawsweeper-commit-openclaw-openclaw-a887a512ef8e"
mode: "autonomous"
run_id: "25093541960"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25093541960"
head_sha: "c698313b6be6dfbdd55160a9627047fd03b5e009"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-04-29T06:07:52.949Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# clawsweeper-commit-openclaw-openclaw-a887a512ef8e

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25093541960](https://github.com/openclaw/clownfish/actions/runs/25093541960)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Found one concrete CI regression. The commit adds duplicate `run_checks_node_extensions` keys in the workflow output map and manifest object.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| cluster:clawsweeper-commit-openclaw-openclaw-a887a512ef8e | build_fix_artifact | planned |  | ClawSweeper found an actionable commit-level bug/regression candidate. |

## Needs Human

- none
