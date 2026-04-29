---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-4745-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136007612"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136007612"
head_sha: "ed3c070f16b94246f3b571063f0ecb9ffa228dd1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T22:05:34.161Z"
canonical: "https://github.com/openclaw/openclaw/issues/40991"
canonical_issue: "https://github.com/openclaw/openclaw/issues/40991"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-4745-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136007612](https://github.com/openclaw/clownfish/actions/runs/25136007612)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/40991

## Summary

Canonical non-security tracking stays with open issue #40991. Open PR #41048 is quarantined for central security handling, while #55970 and #55917 remain related document-fallback work with unresolved review/check blockers. No close, merge, or fix-PR action is safe for this dedupe-only job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #40991 | keep_canonical | planned | canonical | #40991 is the best open non-security canonical issue after #41048 is quarantined. |
| #41048 | route_security | planned | security_sensitive | Security-sensitive PRs are out of ProjectClownfish mutation scope. |
| #55917 | keep_related | planned | related | Related follow-up subfamily; not a duplicate suitable for closure. |
| #55970 | keep_related | planned | related | Useful related contributor PR, but not merge-ready and not safe to close as duplicate or superseded. |
| #7116 | keep_closed | skipped | related | Already closed context item. |
| #55953 | keep_closed | skipped | related | Already closed context PR; no action. |
| #59948 | keep_closed | skipped | related | Already merged related historical fix; not a target for this dedupe pass. |

## Needs Human

- none
