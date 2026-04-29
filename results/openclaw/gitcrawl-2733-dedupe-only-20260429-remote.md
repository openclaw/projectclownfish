---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2733-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134075609"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134075609"
head_sha: "d0688cc86ec05c840c9f64b264bd897e9b409ff3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T21:23:37.495Z"
canonical: "https://github.com/openclaw/openclaw/pull/41957"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/41957"
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2733-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134075609](https://github.com/openclaw/clownfish/actions/runs/25134075609)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/41957

## Summary

Hydrated autonomous pass found no security-sensitive refs. #41957 is the current canonical auto-reply timing PR; #40760 is superseded by that same-author, later repaired branch. Telegram watchdog, TTL-expiry feedback, and configurable TTL work remain related but separate open subfamilies.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #40760 | close_superseded | blocked | superseded | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41957 | keep_canonical | planned | canonical | #41957 is the clearest canonical path for the auto-reply typing-timeout fix, but this dedupe-only job cannot merge or repair it. |
| #40760 | close_superseded | planned | superseded | #40760 is superseded by the current canonical #41957 path; closing keeps validation and follow-up on one branch while preserving credit. |
| #41956 | keep_related | planned | related | Related Telegram watchdog work should stay open or move to its own follow-up cluster; it is not a duplicate of the auto-reply timing canonical. |
| #43204 | keep_related | planned | related | This is related typing UX work, but it has unique scope and unresolved review blockers, so it should not be closed into #41957. |
| #72009 | keep_related | planned | related | Keep the configurable TTL feature open as a related subfamily, not as the canonical fix for this auto-reply timing cluster. |
| #41011 | keep_closed | skipped | related | Already closed historical Telegram context; no mutation planned. |
| #41153 | keep_closed | skipped | related | Already closed historical Telegram context; no mutation planned. |
| #41286 | keep_closed | skipped | related | Already closed historical Telegram context; no mutation planned. |
| #42105 | keep_closed | skipped | superseded | Already closed configurable-TTL context superseded by #72009; no mutation planned. |
| #42851 | keep_closed | skipped | superseded | Already closed broad configurable-TTL attempt superseded by the focused #72009 thread; no mutation planned. |

## Needs Human

- none
