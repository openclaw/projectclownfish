---
repo: "openclaw/openclaw"
cluster_id: "clawsweeper-commit-openclaw-openclaw-f6a2cf15c09c"
mode: "autonomous"
run_id: "25096498089"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25096498089"
head_sha: "7b7853b340ca1806cde9effa468afd2efa8776b8"
workflow_conclusion: "skipped"
result_status: "planned"
published_at: "2026-04-29T07:33:03.389Z"
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

# clawsweeper-commit-openclaw-openclaw-f6a2cf15c09c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25096498089](https://github.com/openclaw/clownfish/actions/runs/25096498089)

Workflow conclusion: skipped

Worker result: planned

Canonical: unknown

## Summary

Found one CI/boundary-check regression. The moved browser test fetch helper is still scanned by the raw-fetch runtime guard, but the allowlist still points at the old path.

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
| cluster:clawsweeper-commit-openclaw-openclaw-f6a2cf15c09c | build_fix_artifact | planned |  | ClawSweeper found an actionable commit-level bug/regression candidate. |

## Needs Human

- none
