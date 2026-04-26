---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-166000-agentic-merge"
mode: "autonomous"
run_id: "24962112832"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24962112832"
head_sha: "0a093014e04049c913f3bb009311325943e11e03"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T17:03:50.322Z"
canonical: "https://github.com/openclaw/openclaw/pull/49430"
canonical_issue: "https://github.com/openclaw/openclaw/issues/47558"
canonical_pr: "https://github.com/openclaw/openclaw/pull/49430"
actions_total: 17
apply_executed: 0
apply_blocked: 0
apply_skipped: 3
needs_human_count: 0
---

# ghcrawl-166000-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24962112832](https://github.com/openclaw/projectclownfish/actions/runs/24962112832)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/49430

## Summary

Classified the hydrated cluster without direct GitHub mutation. #45228 is quarantined as security-sensitive per the preflight artifact. The live non-security canonical path is to repair the narrow #47558 documentation-fix family via #49430/fix artifact before any duplicate or superseded closeout. Broad or unrelated PRs are kept open or blocked from closure until the canonical fix path exists.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 17 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 3 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #47935 | close_superseded | skipped | superseded | action status is blocked |
| #56157 | close_superseded | skipped | superseded | action status is blocked |
| #59658 | close_superseded | skipped | superseded | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #30658 | keep_closed | skipped | duplicate | Historical closed evidence only. |
| #44298 | keep_closed | skipped | independent | Closed independent linked context. |
| #45228 | route_security | planned | security_sensitive | Route only #45228 to central OpenClaw security handling. |
| #46078 | keep_closed | skipped | superseded | Already closed; no mutation. |
| #47558 | keep_canonical | planned | canonical | Canonical issue for the six-inaccuracies documentation family. |
| #47935 | close_superseded | blocked | superseded | Close is blocked on the canonical fix path or fix PR. |
| #49404 | keep_closed | skipped | superseded | Historical closed evidence only. |
| #49430 | keep_canonical | planned | canonical | Best non-security repairable canonical PR for #47558. |
| #56157 | close_superseded | blocked | superseded | Close is blocked on the canonical fix path or fix PR. |
| #56162 | keep_closed | skipped | superseded | Already closed; no mutation. |
| #56163 | keep_related | planned | related | Related docs-cleanup work but not a true duplicate of the sub-agent docs canonical path. |
| #56286 | keep_independent | planned | independent | Independent follow-up cluster. |
| #56319 | keep_independent | planned | independent | Independent Telegram bug PR; not safe to merge or close as part of this docs cluster. |
| #56685 | keep_closed | skipped | superseded | Already closed; no mutation. |
| #59658 | close_superseded | blocked | superseded | Close is blocked on the canonical fix path or fix PR. |
| cluster:ghcrawl-166000-agentic-merge | fix_needed | planned |  | A repair/fix artifact is needed before merge or closeout. |
| cluster:ghcrawl-166000-agentic-merge | build_fix_artifact | planned |  | Prepare an auditable fix path without direct mutation from the worker. |

## Needs Human

- none
