---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2111-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131909532"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131909532"
head_sha: "d8a032e46d7a5449946bb8a8f542719694995636"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T20:34:11.576Z"
canonical: "https://github.com/openclaw/openclaw/pull/47613"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/47613"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2111-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131909532](https://github.com/openclaw/clownfish/actions/runs/25131909532)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/47613

## Summary

Selected #47613 as the non-security canonical PR for the callback-coupled Gateway reasoning stream bug. Planned one issue closeout for #42261 as covered by #47613, and routed #52642 and #61469 to central security handling because hydrated review comments describe trust/visibility boundary regressions. No merge or fix PR is planned because this job blocks merge, fix, and raise_pr actions.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #42261 | close_fixed_by_candidate | blocked | fixed_by_candidate | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #47613 | keep_canonical | planned | canonical | Best surviving non-security canonical PR for the root cause; merge/fix are blocked by job policy and remaining review work is pre-merge, not a dedupe ambiguity. |
| #42261 | close_fixed_by_candidate | planned | fixed_by_candidate | The issue is covered by the canonical PR #47613 and can be consolidated there for validation and follow-up. |
| #52642 | route_security | planned | security_sensitive | Hydrated review comments contain security-shaped trust-boundary findings, so this exact PR must be quarantined for central OpenClaw security handling and not mutated by Clownfish. |
| #61469 | route_security | planned | security_sensitive | Hydrated review comments describe sensitive visibility-boundary leakage introduced by this PR, so the exact item is routed to central security handling instead of being closed or otherwise mutated. |

## Needs Human

- none
