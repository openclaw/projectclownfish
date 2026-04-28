---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156579-autonomous-smoke"
mode: "autonomous"
run_id: "25035225596"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25035225596"
head_sha: "11314bb0977e829eeb62cc0be17e0c531c9fe13a"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-04-28T05:17:32.388Z"
canonical: "https://github.com/openclaw/openclaw/pull/72615"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72615"
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156579-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25035225596](https://github.com/openclaw/clownfish/actions/runs/25035225596)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/pull/72615

## Summary

All job-provided candidate refs are already closed in the hydrated preflight state, so no close/comment/merge action is valid for them. The only open hydrated replacement path is #72615, but it is marked security-sensitive and has a hydrated Aisle security analysis plus failing relevant checks, so it is routed to central OpenClaw security handling and no ProjectClownfish fix, merge, or closeout is planned in this run.

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
| #65722 | keep_closed | skipped | duplicate | Already closed; retain as historical duplicate evidence only. |
| #65976 | keep_closed | skipped | duplicate | Already closed; no mutation is valid. |
| #66082 | keep_closed | skipped | duplicate | Already closed; keep as historical duplicate evidence. |
| #67979 | keep_closed | skipped | duplicate | Representative is obsolete because it is already closed. |
| #68371 | keep_closed | skipped | related | Already closed; keep related historical context only. |
| #68586 | keep_closed | skipped | superseded | Already closed superseded PR; no mutation is valid. |
| #68828 | keep_closed | skipped | duplicate | Already closed; keep as duplicate evidence. |
| #69019 | keep_closed | skipped | duplicate | Already closed; no ProjectClownfish action remains. |
| #69952 | keep_closed | skipped | superseded | Already closed superseded PR; retain credit/evidence only. |
| #70181 | keep_closed | skipped | duplicate | Already closed duplicate; no mutation is valid. |
| #70185 | keep_closed | skipped | superseded | Already closed superseded by credited replacement path. |
| #70242 | keep_closed | skipped | duplicate | Already closed duplicate; retain as evidence. |
| #70842 | keep_closed | skipped | duplicate | Already closed duplicate; no action remains. |
| #71479 | keep_closed | skipped | superseded | Already closed superseded by replacement PR; no mutation is valid. |
| #72615 | route_security | planned | security_sensitive | Route #72615 to central OpenClaw security triage; do not merge, close, label, comment, or open a ProjectClownfish fix PR for this security-sensitive PR in this run. |

## Needs Human

- none
