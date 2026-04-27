---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156602-autonomous-smoke"
mode: "autonomous"
run_id: "24987818672"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24987818672"
head_sha: "f677d095c70e025afb42e22cf29ae7b90caccf9c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T09:45:39.052Z"
canonical: "https://github.com/openclaw/openclaw/pull/72659"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72659"
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 3
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156602-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24987818672](https://github.com/openclaw/clownfish/actions/runs/24987818672)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72659

## Summary

Hydrated state shows the original canonical hint #55186 is closed and the maintainer-calibrated replacement #72659 has merged. Treat #72659 as the canonical landed fix for the Mattermost DM reply-root bug, close only clearly covered open refs, and keep adjacent Mattermost threading/provider PRs open as related or independent follow-up work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 3 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72305 | close_superseded | blocked | superseded | target author association is MEMBER |
| #55151 | close_superseded | blocked | superseded | target changed since worker review |
| #59758 | close_fixed_by_candidate | blocked | fixed_by_candidate | target is not listed in job candidates |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72659 | keep_canonical | planned | canonical |  |
| #72305 | close_superseded | planned | superseded |  |
| #55151 | close_superseded | planned | superseded |  |
| #59758 | close_fixed_by_candidate | planned | fixed_by_candidate |  |
| #52120 | keep_related | planned | related |  |
| #45082 | keep_related | planned | related |  |
| #52236 | keep_related | planned | related |  |
| #57565 | keep_related | planned | related |  |
| #57970 | keep_related | planned | related |  |
| #57609 | keep_independent | planned | independent |  |
| #57607 | keep_independent | planned | independent |  |
| #58439 | keep_independent | planned | independent |  |
| #55186 | keep_closed | skipped | superseded |  |
| #59791 | keep_closed | skipped | fixed_by_candidate |  |
| #60115 | keep_closed | skipped | superseded |  |

## Needs Human

- none
