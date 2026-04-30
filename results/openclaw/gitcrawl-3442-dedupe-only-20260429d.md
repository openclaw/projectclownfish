---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3442-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142589656"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142589656"
head_sha: "635e49e8d0f5f1f39d5a829d2a709a0e61ee5f73"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-30T01:29:59.689Z"
canonical: "https://github.com/openclaw/openclaw/pull/65785"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65768"
canonical_pr: "https://github.com/openclaw/openclaw/pull/65785"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3442-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142589656](https://github.com/openclaw/clownfish/actions/runs/25142589656)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/65785

## Summary

Classified the MiniMax web_search credential cluster from the hydrated preflight artifact at main cab86dc32541a664b8048f62bd47a0ada294fc41. #65768 remains the canonical bug issue, #65785 remains the canonical open PR for the MINIMAX_OAUTH_TOKEN runtime fallback but is not merge-ready, and #65828 is a related MINIMAX_API_KEY metadata/onboarding PR rather than a duplicate. No close, merge, or fix actions are planned because the cluster is dedupe-only, instant close is disabled, merge/fix are blocked, and the related PR has unresolved review and credential-policy questions.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #65768 | keep_canonical | planned | canonical | Canonical issue for the MINIMAX_OAUTH_TOKEN web_search bug remains open; no close action is valid. |
| #65785 | keep_canonical | planned | canonical | Best canonical PR for the OAuth-token bug, but it is not merge-ready; keep it open for repair, review, and validation. |
| #65828 | keep_related | planned | related | Related MiniMax credential metadata/onboarding work, not a true duplicate of the OAuth-token runtime bug; keep open as its own review path. |

## Needs Human

- none
