---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156588-autonomous-smoke"
mode: "autonomous"
run_id: "24988616631"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24988616631"
head_sha: "68766d5583c05ab6d63e38d07f560c3e32e3781a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T10:02:56.260Z"
canonical: "https://github.com/openclaw/openclaw/issues/46871"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46871"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72619"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 2
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156588-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24988616631](https://github.com/openclaw/clownfish/actions/runs/24988616631)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/46871

## Summary

Hydrated artifact shows the nodes list/status family has been fixed by merged PR #72619 on current main a50edbdc60481ab8e9d94126d9216596d564e6cd. Plan post-merge closeout for the still-open canonical issue #46871 and supersede the remaining open overlapping nodes-list PR #51051. Slash-command PRs #46895, #47069, and #51270 are separate related work, not duplicates of the nodes-list canonical.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| #46871 | post_merge_close | blocked | fixed_by_candidate | target changed since worker review |
| #51051 | close_superseded | blocked | superseded | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #46871 | post_merge_close | planned | fixed_by_candidate |  |
| #51051 | close_superseded | planned | superseded |  |
| #46895 | keep_related | planned | related |  |
| #47069 | keep_related | planned | related |  |
| #51270 | keep_related | planned | related |  |
| #50871 | keep_closed | skipped | superseded | Already closed. |
| #50970 | keep_closed | skipped | superseded | Already closed. |
| #51027 | keep_closed | skipped | superseded | Already closed. |
| #51053 | keep_closed | skipped | superseded | Already closed. |
| #51536 | keep_closed | skipped | independent | Already closed and out of cluster root cause. |
| #65772 | keep_closed | skipped | superseded | Already closed. |
| #72619 | keep_canonical | planned | canonical |  |

## Needs Human

- none
