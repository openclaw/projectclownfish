---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156675-autonomous-smoke"
mode: "autonomous"
run_id: "25023049824"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25023049824"
head_sha: "416b225d73239870f6704a4eeb6d95f026ba00e9"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T22:49:01.377Z"
canonical: "https://github.com/openclaw/openclaw/pull/49751"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/49751"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156675-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25023049824](https://github.com/openclaw/clownfish/actions/runs/25023049824)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/49751

## Summary

Classified the hydrated cluster without GitHub mutations. #49751 remains the canonical useful contributor PR, but it is not merge-ready because review-bot findings and failing/stale checks require repair. Closed PRs stay historical evidence, #62060 stays open as related follow-up timeout work, and security-sensitive linked refs are quarantined only for central security routing.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/49751 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #49751 | merge_canonical | blocked | fix_pr | mergeable state is CONFLICTING |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #49751 | fix_needed | planned | canonical | Canonical PR is useful but not merge-ready; repair the contributor branch, address review-bot findings, rebase onto main 496a5eb56f466e828e7f843a0a55dfc7fbe01199, run validation and Codex /review, then reassess merge. |
| cluster:ghcrawl-156675-autonomous-smoke | build_fix_artifact | planned |  | Build an executable repair artifact for the canonical contributor PR instead of merging stale/unreviewed code. |
| #62060 | keep_related | planned | related | Keep open as related follow-up timeout-headroom work; do not merge or close it in this cluster pass. |
| #48950 | keep_closed | skipped | superseded | Already closed; retain as historical related/superseded evidence only. |
| #51172 | keep_closed | skipped | superseded | Already closed; retain as historical superseded evidence only. |
| #52142 | keep_closed | skipped | superseded | Already closed; retain as historical superseded timeout evidence only. |
| #47113 | route_security | planned | security_sensitive | Quarantine this exact linked ref for central OpenClaw security handling; do not mutate it through ProjectClownfish. |
| #47640 | route_security | planned | security_sensitive | Quarantine this exact linked ref for central OpenClaw security handling; continue unrelated non-security classification. |

## Needs Human

- none
