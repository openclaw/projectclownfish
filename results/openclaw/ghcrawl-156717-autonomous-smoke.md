---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156717-autonomous-smoke"
mode: "autonomous"
run_id: "25085937628"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25085937628"
head_sha: "f235dafeb1f490ef92624e6c83444fc0d6e6d65e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T01:15:03.655Z"
canonical: "https://github.com/openclaw/openclaw/issues/46398"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46398"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156717-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25085937628](https://github.com/openclaw/clownfish/actions/runs/25085937628)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/46398

## Summary

Current live preflight makes #46398 the surviving canonical issue. #45048 and #50071 are already closed duplicate context and must not receive new close actions. #62167 overlaps the persistent chat token indicator request but carries broader provider quota, cost, and per-message token display scope, so it should stay open as related. No PR exists for the canonical feature, so the executable path is a narrow new fix PR for #46398.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): [check:changed] lanes=core, coreTests, docs [check:changed] ui/src/styles/chat/layout.css: core production [check:changed] ui/src/ui/chat/context-notice.ts: core production [check:changed] ui/src/ui/chat/run-controls.test.ts: core test [check:changed] conflict markers Found unresolved merge conflict markers: - CHANGELOG.md:12,14,16 [check:changed] summary 964ms failed:1 conflict markers |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #45048 | keep_closed | skipped | duplicate | Already closed duplicate context; do not emit a close action for a closed issue. |
| #46398 | fix_needed | planned | canonical | The original canonical hint #45048 is now closed; #46398 is the best live canonical tracker and needs a narrow fix PR. |
| #50071 | keep_closed | skipped | duplicate | Already closed duplicate context; do not emit a close action for a closed issue. |
| #62167 | keep_related | planned | related | Keep open as related follow-up scope; do not close under the #46398 duplicate path. |
| cluster:ghcrawl-156717-autonomous-smoke | build_fix_artifact | planned |  | Create a narrow credited fix plan for the surviving canonical feature. |

## Needs Human

- none
