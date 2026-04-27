---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156628-autonomous-smoke"
mode: "autonomous"
run_id: "24980505465"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24980505465"
head_sha: "c6da0a7fcbc9623e625f7c12d5e31f91829491bd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T06:46:45.664Z"
canonical: "https://github.com/openclaw/openclaw/commit/ca67762b8887a4c97cefe7d434b6d3b539d47242"
canonical_issue: "https://github.com/openclaw/openclaw/issues/67889"
canonical_pr: null
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 3
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156628-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24980505465](https://github.com/openclaw/clownfish/actions/runs/24980505465)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/commit/ca67762b8887a4c97cefe7d434b6d3b539d47242

## Summary

Hydrated artifact shows the timeout family is already fixed on current main by commit ca67762b8887a4c97cefe7d434b6d3b539d47242, recorded in the #67889 maintainer closeout. Security-sensitive refs are quarantined only for those exact items. Non-security open timeout reports/PRs can be closed as fixed or superseded by current main; unrelated already-closed refs remain skipped historical context.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| #56419 | close_fixed_by_candidate | blocked | fixed_by_candidate | close requires ProjectClownfish fix PR opened/pushed or merge executed first |
| #56454 | close_superseded | blocked | superseded | close requires ProjectClownfish fix PR opened/pushed or merge executed first |
| #62944 | close_fixed_by_candidate | blocked | fixed_by_candidate | close requires ProjectClownfish fix PR opened/pushed or merge executed first |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #48625 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish cleanup scope. |
| #54494 | keep_closed | skipped | related | Already closed historical linked issue; no mutation allowed. |
| #54495 | keep_closed | skipped | superseded | Already closed superseded contributor PR; no mutation allowed. |
| #56419 | close_fixed_by_candidate | planned | fixed_by_candidate | Current main contains the fix for the user-visible hardcoded image-tool timeout reported here. |
| #56454 | close_superseded | planned | superseded | Useful contributor PR is superseded by a landed current-main fix with a different accepted config contract; credit is preserved in the close comment. |
| #57215 | keep_closed | skipped | independent | Already closed independent linked context; no mutation allowed. |
| #57223 | keep_closed | skipped | independent | Already closed independent PR; no mutation allowed. |
| #62944 | close_fixed_by_candidate | planned | fixed_by_candidate | The exact hardcoded timeout bug is fixed on current main; closeout waits on the landed fix evidence rather than the quarantined PR. |
| #63046 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish cleanup scope. |
| #63483 | route_security | planned | security_sensitive | Security-sensitive item must not be closed, merged, commented on, or used as the ProjectClownfish canonical PR. |
| #67889 | keep_closed | skipped | fixed_by_candidate | Already closed fixed issue; no mutation allowed. |
| #67929 | keep_closed | skipped | superseded | Already closed superseded contributor PR; no mutation allowed. |

## Needs Human

- none
