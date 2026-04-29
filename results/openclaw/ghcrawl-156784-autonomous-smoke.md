---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156784-autonomous-smoke"
mode: "autonomous"
run_id: "25107356108"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107356108"
head_sha: "a746142e846c8487ff6cabaafd172955050d63c3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T11:58:25.380Z"
canonical: "https://github.com/openclaw/openclaw/pull/41265"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41256"
canonical_pr: "https://github.com/openclaw/openclaw/pull/41265"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156784-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107356108](https://github.com/openclaw/clownfish/actions/runs/25107356108)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/41265

## Summary

Canonical path is the open repairable contributor PR #41265 for linked issue #41256. It is not merge-ready because mergeability is unknown, relevant checks are failing, and hydrated review-bot findings still need to be addressed or proven stale at the current head. Closed overlapping PRs #41419 and #41714 were already superseded by #41265 and receive no close actions.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #41256 | keep_canonical | planned | canonical | Keep the root bug issue open until the canonical PR path lands and validation can close it cleanly. |
| #41265 | fix_needed | planned | canonical | Repair the canonical contributor branch before any merge recommendation; current evidence does not satisfy merge preflight. |
| cluster:ghcrawl-156784-autonomous-smoke | build_fix_artifact | planned |  | The cluster has a clear canonical branch but needs executor repair and validation before merge or post-merge closeout. |
| #41419 | keep_closed | skipped | superseded | Historical closed context only; no mutation is allowed or needed. |
| #41714 | keep_closed | skipped | superseded | Historical closed context only; no mutation is allowed or needed. |

## Needs Human

- none
