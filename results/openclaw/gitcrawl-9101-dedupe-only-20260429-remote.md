---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-9101-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25137271613"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25137271613"
head_sha: "ca8a3303df8e547d7f06bee2c26da230fe0cdb72"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-29T22:36:38.390Z"
canonical: "https://github.com/openclaw/openclaw/pull/55978"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/55978"
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-9101-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25137271613](https://github.com/openclaw/clownfish/actions/runs/25137271613)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/55978

## Summary

Hydrated preflight shows no security-sensitive refs and current main at 8f50920c4565017679f99d6a7e0a2ebbd2021eb9. No GitHub mutations are planned. #55978 remains the narrow canonical path for the cron sticky-offset subfamily, but #47582 is a conflicting normal-flow Cron editor direction that needs maintainer choice before either PR is superseded or closed. Other open refs are separate UI/CSS subclusters or issue-to-PR pairs, and live-closed candidate refs are skipped.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #55978 | keep_canonical | planned | canonical | Best surviving canonical for the narrow cron sticky-offset root cause; keep it open for maintainer review and repair/merge outside this dedupe-only run. |
| #47582 | needs_human | blocked | needs_human | Maintainer must choose the intended desktop Cron editor layout before Clownfish can mark #47582 superseded or canonical. |
| #39060 | keep_independent | planned | independent | Useful independent Agent Files UI feature/repair; not a duplicate or superseded by the cron sticky-offset canonical path. |
| #45114 | keep_related | planned | related | Related web-UI CSS cleanup subcluster; keep open and do not close as part of the cron sticky-offset cluster. |
| #45020 | keep_related | planned | fixed_by_candidate | Issue is covered by open candidate #45114, but closure is not safe until the fix lands and post-merge closeout is allowed. |
| #47245 | keep_related | planned | related | Related web-UI CSS subcluster with distinct root cause; keep open for design/review follow-up. |
| #53916 | keep_related | planned | related | Related responsive UI scroll subcluster; keep open and do not dedupe into #55978. |
| #53881 | keep_related | planned | fixed_by_candidate | Issue is covered by open candidate #53916, but closure is not safe until that fix lands and post-merge closeout is allowed. |
| #50980 | keep_closed | skipped | fixed_by_candidate | Already closed candidate; skipped to avoid mutating a closed PR. |
| #60031 | keep_closed | skipped | fixed_by_candidate | Already closed candidate; skipped to avoid mutating a closed PR. |
| #66658 | keep_closed | skipped | fixed_by_candidate | Already closed candidate; skipped to avoid mutating a closed PR. |

## Needs Human

- Choose the intended desktop Cron editor layout before superseding or closing either #55978 or #47582: preserve sticky New/Edit Job behavior with the #55978 offset fix, or switch the form to normal document flow with #47582.
