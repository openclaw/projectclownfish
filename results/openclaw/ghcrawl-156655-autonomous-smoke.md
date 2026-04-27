---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156655-autonomous-smoke"
mode: "autonomous"
run_id: "25023021455"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25023021455"
head_sha: "416b225d73239870f6704a4eeb6d95f026ba00e9"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T22:33:36.138Z"
canonical: "https://github.com/openclaw/openclaw/pull/72009"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72009"
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156655-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25023021455](https://github.com/openclaw/clownfish/actions/runs/25023021455)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72009

## Summary

Hydrated state shows the original representative #45310 and all job-listed issue candidates are already closed. The best live canonical path is open PR #72009, which implements the configurable typing TTL request with focused docs/schema/tests and passing checks, but it is not merge-ready for autonomous merge because mergeability is unknown and the required clean Codex /review on the current head is missing after the author addressed the prior review finding. Security-sensitive linked PRs #42105 and #42851 are quarantined only for central security handling; unrelated non-security classification continues.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #13673 | keep_closed | skipped | superseded | Already closed; no mutation needed. |
| #20622 | keep_closed | skipped | superseded | Historical closed contributor PR; preserve as source-credit evidence, not a mutation target. |
| #41516 | keep_closed | skipped | superseded | Already closed and covered by the current canonical PR path. |
| #42105 | route_security | planned | security_sensitive | Security-sensitive hydrated ref is out of ProjectClownfish mutation scope. |
| #42851 | route_security | planned | security_sensitive | Security-sensitive hydrated ref is out of ProjectClownfish mutation scope. |
| #45310 | keep_closed | skipped | superseded | Representative became obsolete because it is already closed; canonical path moves to open PR #72009. |
| #53029 | keep_closed | skipped | superseded | Already closed and covered by the current canonical PR path. |
| #61992 | keep_closed | skipped | superseded | Already closed and covered by the current canonical PR path. |
| #72009 | fix_needed | planned | canonical | Canonical PR is useful and repairable, but not merge-ready until the executor refreshes mergeability, reruns /review on current head, addresses any findings, and reruns the repo gate. |
| cluster:ghcrawl-156655-autonomous-smoke | build_fix_artifact | planned |  | Build an executable repair artifact for the canonical contributor PR before merge or post-merge closeout. |

## Needs Human

- none
