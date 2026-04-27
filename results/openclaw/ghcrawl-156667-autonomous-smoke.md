---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156667-autonomous-smoke"
mode: "autonomous"
run_id: "25023040628"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25023040628"
head_sha: "416b225d73239870f6704a4eeb6d95f026ba00e9"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T22:34:59.849Z"
canonical: "https://github.com/openclaw/openclaw/pull/72408"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72408"
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156667-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25023040628](https://github.com/openclaw/clownfish/actions/runs/25023040628)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72408

## Summary

Hydrated state shows the original representative #46721 is closed and was explicitly superseded by merged replacement PR #72408. The local-timezone filename bug in #46703 is covered by merged #72408, while the other open PRs are related but different session-memory subproblems and are not safe duplicate/merge targets in this cluster. Security-sensitive hydrated refs are quarantined only for central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #46703 | close_fixed_by_candidate | blocked | fixed_by_candidate | target is not listed in job candidates |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #38478 | keep_closed | skipped | related | Historical linked context only; already closed. |
| #40418 | keep_related | planned | related | Same session-memory area but different product scope from the local-timezone filename fix. |
| #44060 | keep_closed | skipped | related | Historical related PR only; already closed. |
| #44123 | keep_related | planned | related | Useful related contributor PR, but not duplicate of the local-timezone canonical path and not merge-ready. |
| #45607 | keep_closed | skipped | related | Historical related mismatch issue; already closed. |
| #46687 | keep_closed | skipped | related | Historical related mismatch issue; already closed. |
| #46703 | close_fixed_by_candidate | planned | fixed_by_candidate | require_fix_before_close is satisfied by already-merged hydrated candidate #72408. |
| #46721 | keep_closed | skipped | superseded | Already closed source PR superseded by merged replacement #72408. |
| #50584 | keep_related | planned | related | Related session-memory feature work, but too broad and distinct from this cluster's fixed local-timezone bug. |
| #61384 | keep_closed | skipped | related | Historical related mismatch issue; already closed. |
| #62298 | keep_related | planned | related | Related but distinct contributor PR; failing checks and unresolved bot findings block merge or fixed-by-candidate closeout. |
| #67545 | route_security | planned | security_sensitive | Quarantine exact security-sensitive item for central OpenClaw security handling. |
| #72408 | route_security | planned | security_sensitive | Quarantine exact security-sensitive item for central OpenClaw security handling while using only non-security closeout on unrelated target #46703. |

## Needs Human

- none
