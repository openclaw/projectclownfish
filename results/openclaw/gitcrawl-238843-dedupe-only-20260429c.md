---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238843-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25105238272"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25105238272"
head_sha: "195790bbe8a80284a2d1f7ba4ba947b141428867"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T11:08:21.015Z"
canonical: "https://github.com/openclaw/openclaw/pull/59752"
canonical_issue: "https://github.com/openclaw/openclaw/issues/59743"
canonical_pr: "https://github.com/openclaw/openclaw/pull/59752"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 2
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238843-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25105238272](https://github.com/openclaw/clownfish/actions/runs/25105238272)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/59752

## Summary

Classified the four open cluster PRs from the hydrated preflight artifact. #59752 remains the canonical open PR for the #59743 media-only/same-target reply suppression bug; #44391 is related but distinct cross-target follow-up work; #59787 and #59795 are superseded alternative #59743 fixes and can be closed with contributor-credit comments. No merge, fix PR, or post-merge closeout is planned because the job blocks merge/fix actions and the canonical PR is still open.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 2 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #59787 | close_superseded | blocked | superseded | target changed since worker review |
| #59795 | close_superseded | blocked | superseded | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #59752 | keep_canonical | planned | canonical | #59752 is the best live canonical PR for the same-target/media-only reply suppression cluster, but it remains open for validation and maintainer follow-up. |
| #44391 | keep_related | planned | related | Related messaging dedupe work with a different user-visible failure and broad unresolved implementation scope; keep open outside this dedupe closeout. |
| #59787 | close_superseded | planned | superseded | Superseded by the hydrated canonical PR #59752 for the same #59743 media-only reply suppression root cause. |
| #59795 | close_superseded | planned | superseded | Superseded by the hydrated canonical PR #59752 for the same #59743 media-only reply suppression root cause. |

## Needs Human

- none
