---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2271-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132451066"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132451066"
head_sha: "8b6ee7ffa77533bbae10cb97289fd78b142edfab"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T20:38:56.396Z"
canonical: "https://github.com/openclaw/openclaw/issues/62120"
canonical_issue: "https://github.com/openclaw/openclaw/issues/62120"
canonical_pr: null
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2271-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132451066](https://github.com/openclaw/clownfish/actions/runs/25132451066)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/62120

## Summary

Hydrated state shows the representative #59797 is closed and is not the live canonical. The current open canonical is #62120, a distinct host-side channel auth startup/preload bug; no duplicate closeout is safe. #62095 remains related but separate. A narrow fix artifact is planned for #62120, with no PR, merge, or close mutation planned by this worker.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
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
| #62120 | keep_canonical | planned | canonical | This is the best surviving open canonical for the host-side channel auth startup/preload root cause. |
| cluster:gitcrawl-2271-dedupe-only-20260429-remote | fix_needed | planned |  | A narrow host CLI fix is needed, but this worker may only emit a plan/artifact. |
| cluster:gitcrawl-2271-dedupe-only-20260429-remote | build_fix_artifact | planned |  | Produce an executable narrow fix plan for a later guarded executor run. |
| #62095 | keep_related | planned | related | Related but not a duplicate or close target; keep it open for its own triage path. |
| #59797 | keep_closed | skipped | related | Closed representative is historical evidence only and must not receive a close action. |
| #56552 | keep_closed | skipped | related | Closed context only; no mutation planned. |
| #53365 | keep_closed | skipped | related | Closed historical Weixin context only. |
| #52885 | keep_closed | skipped | related | Closed historical context only. |
| #52341 | keep_closed | skipped | related | Closed context only; no close action is valid. |
| #53254 | keep_closed | skipped | related | Closed historical PR only; no merge or fixed-by-candidate action is available. |
| #61283 | keep_closed | skipped | related | Closed related context only. |
| #62076 | keep_closed | skipped | related | Closed context only. |
| #15 | keep_closed | skipped | independent | Closed independent first-hop context only. |

## Needs Human

- none
