---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-166016-agentic-merge"
mode: "autonomous"
run_id: "24978975167"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24978975167"
head_sha: "29400ea714d617de4455a11f0aa59ca745bf6cda"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-04-27T06:00:50.617Z"
canonical: "https://github.com/openclaw/openclaw/pull/72305"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72305"
actions_total: 18
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

Run: [https://github.com/openclaw/clownfish/actions/runs/24978975167](https://github.com/openclaw/clownfish/actions/runs/24978975167)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/pull/72305

## Summary

Hydrated state shows the original representative #55186 is already closed and has been replaced by ProjectClownfish PR #72305 for the narrow Mattermost DM reply-root fix. #72305 is the current canonical path, but merge and fixed-by-candidate closeout are blocked by failing checks, a Greptile P2 preview-helper finding, and missing clean Codex /review merge preflight. Other open PRs in the cluster are related or independent follow-up work, not merge-ready duplicates of #72305.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 18 |
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
| #72305 | keep_canonical | planned | canonical | Canonical replacement PR is explicit but not merge-ready. |
| #55186 | keep_closed | skipped | superseded | Already closed and superseded by hydrated replacement PR #72305. |
| #60115 | keep_closed | skipped | superseded | Already closed and replaced by hydrated PR #72305. |
| #59791 | keep_closed | skipped | fixed_by_candidate | Already closed historical evidence; no mutation planned. |
| #59758 | close_fixed_by_candidate | blocked | fixed_by_candidate | Closeout is blocked on canonical fix path #72305 passing checks and merge preflight. |
| #59981 | keep_closed | skipped | fixed_by_candidate | Already closed historical evidence; no mutation planned. |
| #55151 | keep_related | planned | related | Related Mattermost reply-root work, but not a true duplicate and not merge-ready. |
| #30977 | keep_closed | skipped | related | Closed related context only. |
| #57565 | keep_related | planned | related | Related broader routing subcluster; broad code delta and unresolved review/check state block merge or closeout. |
| #57970 | keep_related | planned | related | Related dependency for a broader routing subcluster, not part of the canonical merge path. |
| #52120 | keep_related | planned | related | Related thread-context bug, but distinct from #72305 and not merge-ready. |
| #45082 | keep_related | planned | related | Related follow-up issue; keep open. |
| #52236 | keep_related | planned | related | Related but incomplete draft PR; not mergeable and not a duplicate of #72305. |
| #58439 | keep_independent | planned | independent | Independent Mattermost file-upload bug, outside this cluster's canonical path. |
| #57609 | keep_independent | planned | independent | Independent Mattermost group-policy history bug. |
| #57607 | keep_independent | planned | independent | Independent linked issue; keep open for its own fix path. |
| #29587 | keep_closed | skipped | related | Closed historical context only. |
| #39 | keep_closed | skipped | independent | Closed independent context only. |

## Needs Human

- none
