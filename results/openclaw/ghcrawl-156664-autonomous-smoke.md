---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156664-autonomous-smoke"
mode: "autonomous"
run_id: "25032431366"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25032431366"
head_sha: "0852e05762885fe6da21185d648223890d556917"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-04-28T04:06:57.803Z"
canonical: "https://github.com/openclaw/openclaw/pull/41861"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41862"
canonical_pr: "https://github.com/openclaw/openclaw/pull/41861"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156664-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25032431366](https://github.com/openclaw/clownfish/actions/runs/25032431366)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/41861

## Summary

Representative #50001 is closed and obsolete. The best live canonical path is repairable PR #41861, paired with canonical issue #41862. Merge is not recommended because #41861 lacks clean merge preflight, has mergeability unknown, has a failing aggregate check in the artifact, and needs regression-test coverage before finalization. Duplicate/superseded closeouts are blocked by require_fix_before_close until #41861 is repaired and landed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #41861 | fix_needed | planned | canonical | Repair #41861 instead of merging now: it is the best canonical PR but still needs executor repair/rebase, focused regression coverage, pnpm check:changed, and clean Codex /review before merge. |
| #41862 | keep_canonical | planned | canonical | Use #41862 as the live canonical issue while #41861 is repaired as the canonical implementation path. |
| #49957 | close_duplicate | blocked | duplicate | Duplicate closeout is high confidence but blocked on the canonical fix path landing. |
| #49961 | close_superseded | blocked | superseded | Superseded by #41861, but close is blocked until the canonical repair lands. |
| #68947 | close_superseded | blocked | superseded | Useful but superseded by the more complete #41861 repair path; close is blocked until #41861 lands. |
| #43634 | keep_closed | skipped | superseded | Historical evidence only; no mutation planned for an already-closed PR. |
| #50001 | keep_closed | skipped | superseded | Representative is obsolete; keep as closed historical evidence only. |
| cluster:ghcrawl-156664-autonomous-smoke | build_fix_artifact | planned |  | A repair artifact is required because the canonical PR is useful but not merge-ready. |

## Needs Human

- none
