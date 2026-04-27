---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156588-autonomous-smoke"
mode: "autonomous"
run_id: "24982558861"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24982558861"
head_sha: "64b08445e255b22babdbfd48320457951faa2507"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T07:55:35.677Z"
canonical: "https://github.com/openclaw/openclaw/issues/46871"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46871"
canonical_pr: null
actions_total: 21
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-156588-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24982558861](https://github.com/openclaw/clownfish/actions/runs/24982558861)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/46871

## Summary

Hydrated state shows the original representative #50970 is already closed. The surviving non-security nodes-list canonical is the open issue #46871; no merge is safe because the replacement PR #72619 is security-sensitive and must be quarantined. The open model-command PRs are related but separate subfamilies, and #49989 is independent.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 21 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/72619 | clownfish/ghcrawl-156588-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #51051 | close_superseded | skipped | superseded | action status is blocked |
| #72619 | merge_canonical | blocked | fix_pr | merge state status is UNSTABLE |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #46871 | keep_canonical | planned | canonical | Best surviving non-security canonical for the nodes list/status source mismatch. |
| #51051 | close_superseded | blocked | superseded | Superseded by the canonical nodes fix path, but require_fix_before_close blocks closure until a non-security replacement PR exists. |
| #72619 | route_security | planned | security_sensitive | Route exact security-sensitive PR to central OpenClaw security handling; do not merge, close, comment, or use it as the candidate fix in ProjectClownfish. |
| cluster:ghcrawl-156588-autonomous-smoke | fix_needed | planned | related | A narrow non-security replacement fix is still needed for #46871 after quarantining #72619. |
| cluster:ghcrawl-156588-autonomous-smoke | build_fix_artifact | planned |  | No non-security merge-ready canonical PR exists. |
| #46895 | keep_related | planned | related | Related slash/model-command subfamily; not merge-ready and not part of the nodes canonical path. |
| #47069 | keep_related | planned | related | Separate WebUI model-command work; keep open for its own cluster rather than closing or merging here. |
| #46894 | keep_related | planned | related | Related model-command subcluster, not a duplicate of #46871. |
| #51270 | keep_related | planned | related | Separate TUI model-command subfamily; keep open for a narrower follow-up cluster. |
| #49989 | keep_independent | planned | independent | Independent linked issue; no action in this cluster. |
| #50871 | keep_closed | skipped | superseded | Already closed; no close action allowed. |
| #50970 | keep_closed | skipped | superseded | Representative is obsolete; use #46871 as surviving canonical issue. |
| #51027 | keep_closed | skipped | superseded | Already closed historical context only. |
| #51053 | keep_closed | skipped | superseded | Already closed; no close action allowed. |
| #51536 | keep_closed | skipped | fixed_by_candidate | Closed context-utilization PR, unrelated to the nodes canonical path. |
| #65772 | keep_closed | skipped | superseded | Already closed source PR; retain as credit evidence for the replacement artifact. |
| #50847 | keep_closed | skipped | duplicate | Already closed duplicate context. |
| #51126 | keep_closed | skipped | fixed_by_candidate | Closed model-command issue; related context only. |
| #51507 | keep_closed | skipped | fixed_by_candidate | Closed context-utilization issue; unrelated to this nodes fix path. |
| #65706 | keep_closed | skipped | duplicate | Already closed duplicate context. |
| #71462 | keep_closed | skipped | fixed_by_candidate | Merged historical context only. |

## Needs Human

- none
