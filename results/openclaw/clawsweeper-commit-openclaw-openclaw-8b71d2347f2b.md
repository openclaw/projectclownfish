---
repo: "openclaw/openclaw"
cluster_id: "clawsweeper-commit-openclaw-openclaw-8b71d2347f2b"
mode: "autonomous"
run_id: "25095678847"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25095678847"
head_sha: "3bc4a894bb8f2baaa5ed2b1f2df90879901d3cf6"
workflow_conclusion: "skipped"
result_status: "planned"
published_at: "2026-04-29T07:10:28.597Z"
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

# clawsweeper-commit-openclaw-openclaw-8b71d2347f2b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25095678847](https://github.com/openclaw/clownfish/actions/runs/25095678847)

Workflow conclusion: skipped

Worker result: planned

Canonical: unknown

## Summary

Found one concrete low-severity regression: the runtime `diffs` config schema changed, but the static plugin manifest was not kept in sync.

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
| cluster:clawsweeper-commit-openclaw-openclaw-8b71d2347f2b | build_fix_artifact | planned |  | ClawSweeper found an actionable commit-level bug/regression candidate. |

## Needs Human

- none
