---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143815-autonomous-smoke"
mode: "autonomous"
run_id: "24939008778"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24939008778"
head_sha: "7db1f986bd485f7b71752bc77e40097172d6b6ef"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T01:27:46.285Z"
canonical: "https://github.com/openclaw/openclaw/issues/49180"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49180"
canonical_pr: null
actions_total: 13
apply_executed: 2
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-143815-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24939008778](https://github.com/openclaw/projectclownfish/actions/runs/24939008778)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/49180

## Summary

Using the provided preflight artifact as the live GitHub state for this run, I replaced closed representative #45835 with open issue #49180 as the surviving canonical thread for the 2026.3.13 local loopback `status` / `gateway probe` missing-`operator.read` regression. I planned high-confidence duplicate closeouts for #50541 and #50691 only, and kept #49758, #50606, #51016, #51495, and linked #51396 open because each carries broader or narrower scope-specific work that is not safe to collapse from the artifact alone. No PR, merge, or fix actions are allowed or needed in this job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
| Applied executions | 2 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #50541 | close_duplicate | executed | duplicate | duplicate of the canonical thread |
| #50691 | close_duplicate | executed | duplicate | duplicate of the canonical thread |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #49180 | keep_canonical | planned | canonical | Best surviving open canonical issue for the cluster after the original representative #45835 was closed. |
| #45835 | keep_closed | skipped | superseded | Closed historical representative only; #49180 is the current open canonical thread. |
| #50541 | close_duplicate | planned | duplicate | High-confidence duplicate of the surviving canonical issue #49180. |
| #50691 | close_duplicate | planned | duplicate | High-confidence duplicate of the surviving canonical issue #49180. |
| #49758 | keep_related | planned | related | Same regression family, but broader diagnostics scope than the canonical issue. |
| #50606 | keep_related | planned | related | Related auth/scope regression, but framed as a narrower suspected cause rather than a pure duplicate symptom report. |
| #51016 | keep_related | planned | related | Same symptom family, but materially different token-resolution/device-identity reproduction path. |
| #51495 | keep_related | planned | related | Related local operator-scope regression with unique pairing-specific reproduction details. |
| #51396 | keep_related | planned | related | Same scope-handling subsystem, but different client class, scope, and user-visible failure. |
| #49305 | keep_independent | planned | independent | Independent linked issue outside this cluster's root-cause family. |
| #49311 | keep_independent | planned | independent | Independent linked issue outside this cluster's scope. |
| #49236 | keep_closed | skipped | independent | Closed unrelated linked issue; historical evidence only. |
| #49297 | keep_closed | skipped | independent | Closed unrelated linked issue; historical evidence only. |

## Needs Human

- none
