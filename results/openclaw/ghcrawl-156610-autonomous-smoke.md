---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156610-autonomous-smoke"
mode: "autonomous"
run_id: "24984733562"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24984733562"
head_sha: "26374cdd2f49f5683850f92c1448eb8af1cfa65f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T08:42:31.378Z"
canonical: "https://github.com/openclaw/openclaw/pull/72658"
canonical_issue: "https://github.com/openclaw/openclaw/issues/37706"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72658"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 5
needs_human_count: 0
---

# ghcrawl-156610-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24984733562](https://github.com/openclaw/clownfish/actions/runs/24984733562)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72658

## Summary

Canonical path is the open ProjectClownfish replacement PR #72658 for canonical issue #37706. It is not merge-ready because merge preflight is incomplete and relevant checks include failures, so duplicate/superseded closeouts are blocked until #72658 is repaired, reviewed, validated, and merged or otherwise made concretely ready. Security-sensitive #49770 is quarantined only for central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 5 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/72658 | clownfish/ghcrawl-156610-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #49767 | close_superseded | skipped | superseded | action status is blocked |
| #50144 | close_superseded | skipped | superseded | action status is blocked |
| #50394 | close_superseded | skipped | superseded | action status is blocked |
| #50801 | close_superseded | skipped | superseded | action status is blocked |
| #58867 | close_superseded | skipped | superseded | action status is blocked |
| #72658 | merge_canonical | blocked | fix_pr | merge state status is UNSTABLE |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #37706 | keep_canonical | planned | canonical |  |
| #39568 | keep_related | planned | related |  |
| #39569 | keep_related | planned | related |  |
| #44256 | keep_closed | skipped | superseded | Already closed; historical source PR for #72658 only. |
| #49761 | keep_closed | skipped | duplicate | Already closed as duplicate/superseded; no mutation allowed. |
| #49767 | close_superseded | blocked | superseded | Blocked on canonical fix path #72658 becoming merge-ready or merged. |
| #49770 | route_security | planned | security_sensitive | Route the security-sensitive item to central OpenClaw security handling without blocking unrelated non-security classification. |
| #50144 | close_superseded | blocked | superseded | Blocked on canonical fix path #72658 becoming merge-ready or merged. |
| #50394 | close_superseded | blocked | superseded | Blocked on canonical fix path #72658 becoming merge-ready or merged. |
| #50801 | close_superseded | blocked | superseded | Blocked on canonical fix path #72658 becoming merge-ready or merged. |
| #58867 | close_superseded | blocked | superseded | Blocked on canonical fix path #72658 becoming merge-ready or merged. |
| #72658 | fix_needed | planned | canonical | Canonical PR exists but needs merge-prep repair and validation before merge or duplicate closeout. |

## Needs Human

- none
