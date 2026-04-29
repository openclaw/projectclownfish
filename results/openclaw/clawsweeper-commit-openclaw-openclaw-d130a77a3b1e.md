---
repo: "openclaw/openclaw"
cluster_id: "clawsweeper-commit-openclaw-openclaw-d130a77a3b1e"
mode: "autonomous"
run_id: "25089704776"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25089704776"
head_sha: "721a239457d9557da8393f5a1166a96ba14f5a9d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T03:44:52.699Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# clawsweeper-commit-openclaw-openclaw-d130a77a3b1e

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25089704776](https://github.com/openclaw/clownfish/actions/runs/25089704776)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

The executable defaults now use `openai/gpt-5.5`, and the pinned upstream model catalog includes `gpt-5.5`, so I did not find a runtime regression in the smoke path. I did find a low-severity help-text regression: all four scripts still advertise the old `openai/gpt-5.4` default.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/74049 | clownfish/clawsweeper-commit-openclaw-openclaw-d130a77a3b1e |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #74049 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| cluster:clawsweeper-commit-openclaw-openclaw-d130a77a3b1e | build_fix_artifact | planned |  | ClawSweeper found an actionable commit-level bug/regression candidate. |

## Needs Human

- none
