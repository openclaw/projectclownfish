---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1907-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130806367"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130806367"
head_sha: "e60ec11ddea49c43b3b3d13770368f7be20dc559"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T20:06:36.560Z"
canonical: "https://github.com/openclaw/openclaw/pull/72308"
canonical_issue: "https://github.com/openclaw/openclaw/issues/56915"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72308"
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1907-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130806367](https://github.com/openclaw/clownfish/actions/runs/25130806367)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72308

## Summary

Hydrated state shows the original representative #43589 is already closed. The closest merged canonical for the watcher/glob repair family is #72308 on current main. The cluster is over-broad: open refs split into watcher, skills snapshot, nested skill discovery, and UI subfamilies. No high-confidence close action is planned; one broad dependency-changing PR is routed to security/supply-chain review.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

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
| #43589 | keep_closed | skipped | fixed_by_candidate | Closed representative retained only as historical evidence. |
| #40043 | keep_related | planned | related | Related to skill discovery, but not a duplicate of the watcher/glob canonical path. |
| #40088 | keep_related | planned | related | Related memory watcher report with distinct remaining behavior; do not close as duplicate. |
| #41621 | keep_independent | planned | independent | Independent UI bug; keep open rather than closing under the watcher cluster. |
| #41858 | keep_related | planned | related | Related but not safely superseded or merge-ready. |
| #43735 | keep_related | planned | related | Related skills snapshot issue; keep open until the maintainer canonical path lands. |
| #46168 | route_security | planned | security_sensitive | Quarantine only this broad dependency-changing PR for central security/supply-chain handling; continue classifying unrelated refs. |
| #48324 | keep_related | planned | related | Related snapshot-cache work, not a duplicate of the watcher/glob canonical path. |
| #51733 | keep_related | planned | related | Related implementation candidate; not safe to close while useful loader work remains. |
| #53663 | keep_independent | planned | independent | Independent UI hardening PR; keep open and do not close under this watcher cluster. |
| #56915 | keep_canonical | planned | canonical | Open canonical issue for the nested skill discovery subfamily. |
| #60928 | keep_related | planned | related | Related skills snapshot PR with unresolved review and failing checks; keep open. |
| #69663 | keep_related | planned | related | Keep open for maintainer follow-up; not safe to close or mark fixed. |
| #71497 | keep_canonical | planned | canonical | Canonical draft for the persisted snapshot restart subfamily, kept open. |
| #72534 | keep_canonical | planned | canonical | Current canonical implementation candidate for the nested skill discovery subfamily; no merge action allowed. |

## Needs Human

- none
