---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156588-autonomous-smoke"
mode: "autonomous"
run_id: "24981384467"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24981384467"
head_sha: "e0fb289dbbb528ad94fac3d2036800e925923c24"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T07:12:29.526Z"
canonical: "https://github.com/openclaw/openclaw/issues/46871"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46871"
canonical_pr: null
actions_total: 21
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 1
---

# ghcrawl-156588-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24981384467](https://github.com/openclaw/clownfish/actions/runs/24981384467)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/46871

## Summary

Autonomous classification only. The original canonical hint #50970 is closed; the surviving non-security canonical for the nodes list/status bug is open issue #46871. No close or merge is ready because the active replacement PR #72619 is security-sensitive and must be quarantined, while other open PRs are related subfamily work or blocked by review findings.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 21 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #46895 | close_superseded | skipped | superseded | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #46871 | keep_canonical | planned | canonical | Best live non-security canonical for the nodes list/status family. |
| cluster:ghcrawl-156588-autonomous-smoke | fix_needed | blocked |  | The non-security nodes bug is real, but the current replacement path is blocked by security quarantine of #72619. |
| cluster:ghcrawl-156588-autonomous-smoke | build_fix_artifact | blocked |  | Build artifact emitted as blocked rather than opening or mutating a security-sensitive fix path. |
| #72619 | route_security | planned | security_sensitive | Security-sensitive PR is out of scope for ProjectClownfish mutation. |
| #46894 | keep_related | planned | related | Related subcluster, not a duplicate of the nodes canonical. |
| #46895 | close_superseded | blocked | superseded | Superseded closeout is blocked by require_fix_before_close because #47069 is not landed or otherwise canonical yet. |
| #47069 | keep_related | planned | related | Useful related PR, but not merge-ready and not part of the nodes canonical path. |
| #49989 | keep_independent | planned | independent | Different channel/plugin root cause. |
| #50847 | keep_closed | skipped | duplicate | Already closed refs must not receive close actions. |
| #50871 | keep_closed | skipped | superseded | Closed historical PR; evidence only. |
| #50970 | keep_closed | skipped | superseded | Representative is obsolete; do not mutate already-closed PR. |
| #51027 | keep_closed | skipped | related | Closed mixed-scope PR; evidence only. |
| #51051 | keep_related | planned | related | Useful related PR, but not a safe merge or close target in this run. |
| #51053 | keep_closed | skipped | superseded | Closed historical PR; evidence only. |
| #51126 | keep_closed | skipped | fixed_by_candidate | Already closed issue; no closeout action allowed. |
| #51270 | keep_related | planned | related | Related model-command subcluster; not merge-ready. |
| #51507 | keep_closed | skipped | fixed_by_candidate | Closed context item; not part of current mutation set. |
| #51536 | keep_closed | skipped | fixed_by_candidate | Already closed PR; no action. |
| #65706 | keep_closed | skipped | duplicate | Closed duplicate evidence only. |
| #65772 | keep_closed | skipped | superseded | Closed source PR; contributor credit must be preserved in any future replacement path. |
| #71462 | keep_closed | skipped | fixed_by_candidate | Merged context PR; no mutation required. |

## Needs Human

- Central OpenClaw security triage must decide #72619 before ProjectClownfish continues the nodes list/status replacement path, because the security-sensitive findings are on the same fix surface.
