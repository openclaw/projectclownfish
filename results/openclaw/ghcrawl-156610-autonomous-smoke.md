---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156610-autonomous-smoke"
mode: "autonomous"
run_id: "24987399670"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24987399670"
head_sha: "75c79cef47b3ca23a53992bcbb37f8be7afc4d10"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T09:35:18.533Z"
canonical: "https://github.com/openclaw/openclaw/pull/72658"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72658"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 5
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156610-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24987399670](https://github.com/openclaw/clownfish/actions/runs/24987399670)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72658

## Summary

Prepared autonomous ProjectClownfish result for ghcrawl-156610. Canonical Feishu @all fix is merged via #72658; unrelated reply-mention work remains open; security-sensitive #49770 is quarantined; open overlapping @all PRs are planned for credited superseded closeout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 5 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #49767 | close_superseded | blocked | superseded | target changed since worker review |
| #50144 | close_superseded | blocked | superseded | target changed since worker review |
| #50394 | close_superseded | blocked | superseded | target changed since worker review |
| #50801 | close_superseded | blocked | superseded | target changed since worker review |
| #58867 | close_superseded | blocked | superseded | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39569 | keep_related | planned | related | Same Feishu mention-detection area, but materially different user-visible bug and root cause. |
| #44256 | keep_closed | skipped | superseded | Already closed targets must not receive close actions. |
| #49767 | close_superseded | planned | superseded | Covered by merged canonical replacement; original PR is broader and has unresolved review-bot blockers. |
| #49770 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish cleanup scope. |
| #50144 | close_superseded | planned | superseded | Covered by merged canonical replacement; original PR has unresolved review-bot blockers. |
| #50394 | close_superseded | planned | superseded | Covered by merged canonical replacement. |
| #50801 | close_superseded | planned | superseded | Covered by merged canonical replacement; candidate fix has landed cleanly. |
| #58867 | close_superseded | planned | superseded | Covered by merged canonical replacement; original PR has unresolved review-bot blocker and broader surface. |
| #72658 | keep_closed | skipped | canonical | Canonical fix already merged and closed; no further mutation for this target. |
| #39568 | keep_related | planned | related | Linked issue is same provider area but different bug family. |
| #37706 | keep_closed | skipped | fixed_by_candidate | Historical context only; already closed. |
| #49761 | keep_closed | skipped | duplicate | Historical context only; already closed. |

## Needs Human

- none
