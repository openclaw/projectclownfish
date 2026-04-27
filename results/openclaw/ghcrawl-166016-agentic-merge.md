---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-166016-agentic-merge"
mode: "autonomous"
run_id: "24979724509"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24979724509"
head_sha: "8806d2971f220668a5fdb92adf8595525bd6678b"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-04-27T06:25:06.196Z"
canonical: "#72305"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72305"
actions_total: 16
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-166016-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24979724509](https://github.com/openclaw/clownfish/actions/runs/24979724509)

Workflow conclusion: success

Worker result: blocked

Canonical: #72305

## Summary

Hydrated state shows the original representative #55186 is already closed and replaced by open ProjectClownfish PR #72305. #72305 is the current canonical DM-threading fix path, but merge and covered closeout are blocked by failing checks and missing merge preflight proof. Related Mattermost thread-routing PRs remain open because they cover distinct entry points or have unresolved bot findings; unrelated Mattermost PRs are kept independent.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 16 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #59758 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72305 | keep_canonical | planned | canonical | Canonical replacement PR exists but merge and fixed-by-candidate closeout are blocked on failing checks and required merge preflight. |
| #52120 | keep_related | planned | related | Same Mattermost threading area but a different entry point and unresolved review surface, so it should stay open as a related follow-up rather than be closed into #72305. |
| #52236 | keep_related | planned | related | Related Mattermost thread-routing work remains incomplete and distinct from the canonical DM reply-root fix. |
| #55151 | keep_related | planned | related | Overlaps the root-id family but has a distinct implementation and unresolved bot finding; not safe to close or merge under #72305. |
| #55186 | keep_closed | skipped | superseded | Already closed and superseded by hydrated replacement PR #72305. |
| #57565 | keep_related | planned | related | Related but too broad and unresolved for autonomous merge or closeout in the #72305 DM-threading path. |
| #57609 | keep_independent | planned | independent | Independent Mattermost behavior bug, not a duplicate or superseded PR for this thread-root cluster. |
| #58439 | keep_independent | planned | independent | Independent Mattermost file-upload fix; leave outside this cluster. |
| #59791 | keep_closed | skipped | fixed_by_candidate | Already closed; retain as historical evidence for the DM-threading family. |
| #60115 | keep_closed | skipped | superseded | Already closed and replaced by hydrated PR #72305. |
| #45082 | keep_related | planned | related | Related Mattermost thread-context issue with a different entry point; keep open. |
| #57607 | keep_independent | planned | independent | Independent Mattermost behavior issue outside this cluster. |
| #57970 | keep_related | planned | related | Related prerequisite for broader routing work, not a duplicate of #72305. |
| #59758 | close_fixed_by_candidate | blocked | fixed_by_candidate | Blocked on canonical fix path #72305 becoming merge-ready or merged. |
| #30977 | keep_closed | skipped | related | Already closed historical evidence for the root-id family. |
| #59981 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by the active replacement path #72305. |

## Needs Human

- none
