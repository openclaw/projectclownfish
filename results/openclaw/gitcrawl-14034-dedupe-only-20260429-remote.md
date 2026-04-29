---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14034-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129095711"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129095711"
head_sha: "c6792f0250a6710fb4bca0bf6ba7777e5c4f0fbc"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T19:29:17.241Z"
canonical: "https://github.com/openclaw/openclaw/pull/73890"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73890"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14034-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129095711](https://github.com/openclaw/clownfish/actions/runs/25129095711)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73890

## Summary

Dedupe-only pass found no safe close actions. The original representative #40850 is already closed as implemented on current main, and the only current open canonical path in this hydrated set is replacement PR #73890 for the #50479/#44365 npm-prefix warning subfamily. #44986, #58340, and #67795 are distinct installer PRs with unique scopes, so they should stay open outside this cluster.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #73890 | keep_canonical | planned | canonical | Keep #73890 open as the canonical replacement PR for the npm prefix redirection warning subfamily; do not merge in this dedupe-only job. |
| #50479 | keep_closed | skipped | superseded | Already closed refs must not receive close actions; record #50479 as closed and superseded by hydrated replacement #73890. |
| #44986 | keep_related | planned | related | Different installer root cause from the closed representative; keep open as related follow-up work. |
| #58340 | keep_independent | planned | independent | This is a separate product/content PR with unresolved review/check issues; keep it open outside this dedupe cluster. |
| #67795 | keep_related | planned | related | Different installer compatibility issue with unique platform evidence; keep open as related follow-up work. |

## Needs Human

- none
