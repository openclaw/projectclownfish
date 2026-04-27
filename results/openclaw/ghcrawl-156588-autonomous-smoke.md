---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156588-autonomous-smoke"
mode: "autonomous"
run_id: "24978148005"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24978148005"
head_sha: "e8d437d9978c397d8d3fb39c23597d4e5c1d98bf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T05:41:51.042Z"
canonical: "https://github.com/openclaw/openclaw/issues/46871"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46871"
canonical_pr: "https://github.com/openclaw/openclaw/pull/65772"
actions_total: 19
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-156588-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24978148005](https://github.com/openclaw/clownfish/actions/runs/24978148005)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/46871

## Summary

Representative #50970 is obsolete because it is already closed. The live canonical path for the nodes-list/status family is open issue #46871 plus repairable open PR #65772. No merge is recommended because #65772 still has failing checks in the hydrated artifact, even though review-bot findings were answered and a clean Codex review comment is present. Related /model and WebChat items are separate subfamilies and should not be closed in this nodes canonical pass.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 19 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | validation command failed (pnpm check:changed): node:internal/errors:985 const err = new Error(message); ^ Error: Command failed: git diff --name-only origin/main...HEAD fatal: origin/main...HEAD: no merge base at genericNodeError (node:internal/errors:985:15) at wrappedFn (node:internal/errors:539:14) at checkExecSyncError (node:child_process:925:11) at execFileSync (node:child_process:961:15) at runGitNameOnlyDiff (file:///tmp/projectclownfish-fix-sSR7as/openclaw-openclaw/scripts/changed-lanes.mjs:174:18) at listChangedPathsFromGit (file:///tmp/projectclownfish-fix-sSR7as/openclaw-openclaw/scripts/changed-lanes.mjs:159:22) at file:///tmp/projectclownfish-fix-sSR7as/openclaw-openclaw/scripts/check-changed.mjs:268:11 at ModuleJob.run (node:internal/modules/esm/module_job:413:25) at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:660:26) at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5) { status: 128, signal: null, output: [ null, '', 'fatal: origin/main...HEAD: no merge base\n' ], pid: 5907, stdout: '', stderr: 'fatal: origin/main...HEAD: no merge base\n' } Node.js v24.13.0 |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/72619 | clownfish/ghcrawl-156588-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #51051 | close_superseded | skipped | superseded | action status is blocked |
| #72619 | merge_canonical | blocked | fix_pr | mergeable state is CONFLICTING |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #46871 | keep_canonical | planned | canonical | Best surviving canonical issue for the nodes list/status root cause. |
| #65772 | keep_canonical | planned | canonical | Canonical repairable PR, but merge is blocked until failing checks and current mergeability are resolved. |
| #46895 | keep_related | planned | related | Related model-command subcluster; not closable or merge-ready in this nodes pass. |
| #47069 | keep_related | planned | related | Related model-command subcluster with unresolved review concern; keep open. |
| #46894 | keep_related | planned | related | Separate open model-command bug family. |
| #51270 | keep_related | planned | related | Separate TUI model-command subcluster; keep open for focused review. |
| #51051 | close_superseded | blocked | superseded | Clear superseded nodes PR, but close is blocked on the canonical fix path or fix PR. |
| #49989 | keep_independent | planned | independent | Independent linked issue; not part of this cluster cleanup. |
| #50847 | keep_closed | skipped | duplicate | Already closed; no close action is valid. |
| #50871 | keep_closed | skipped | superseded | Already closed; historical contributor credit evidence only. |
| #50970 | keep_closed | skipped | superseded | Representative is obsolete and closed; no mutation is valid. |
| #51027 | keep_closed | skipped | superseded | Already closed mixed-scope PR; evidence only. |
| #51053 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #51126 | keep_closed | skipped | fixed_by_candidate | Already closed related context; no mutation. |
| #51507 | keep_closed | skipped | fixed_by_candidate | Already closed unrelated WebChat context issue. |
| #51536 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by merged Control UI work. |
| #65706 | keep_closed | skipped | duplicate | Already closed duplicate; no mutation. |
| #71462 | keep_closed | skipped | fixed_by_candidate | Merged unrelated context fix; evidence only. |
| cluster:ghcrawl-156588-autonomous-smoke | build_fix_artifact | planned |  | Repair canonical contributor branch before any merge or superseded closeout. |

## Needs Human

- none
