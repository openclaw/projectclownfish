---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-5552-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142676229"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142676229"
head_sha: "e997b655a004e15bb7c2622ec2ff5314326ca887"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-30T01:31:58.580Z"
canonical: "https://github.com/openclaw/openclaw/issues/43866"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43866"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-5552-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142676229](https://github.com/openclaw/clownfish/actions/runs/25142676229)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/43866

## Summary

Classified the two open cluster refs from the hydrated preflight artifact. #43866 remains the canonical open issue for the /hooks/agent accountId bug. #43951 is an open implementation PR for the same area but is explicitly marked security-sensitive in preflight, has unresolved ClawSweeper security/review findings, is dirty, and has maintainer_can_modify=false, so it is quarantined to central security handling rather than merged, closed, or used as a fix path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #43866 | keep_canonical | planned | canonical | #43866 is the best surviving non-security canonical issue. No close, merge, post-merge close, or fix PR is allowed for this run. |
| #43951 | route_security | planned | security_sensitive | Security-sensitive PR is out of ProjectClownfish mutation scope and must be routed to central OpenClaw security handling. |

## Needs Human

- none
