---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-191461-agentic-merge"
mode: "autonomous"
run_id: "24968428731"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24968428731"
head_sha: "9bae724841e3040cf5eec99ce0991329a29e463b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T22:32:47.612Z"
canonical: "https://github.com/openclaw/openclaw/issues/37634"
canonical_issue: "https://github.com/openclaw/openclaw/issues/37634"
canonical_pr: "https://github.com/openclaw/openclaw/pull/46300"
actions_total: 12
apply_executed: 0
apply_blocked: 0
apply_skipped: 2
needs_human_count: 0
---

# ghcrawl-191461-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24968428731](https://github.com/openclaw/projectclownfish/actions/runs/24968428731)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/37634

## Summary

Classified the hydrated cluster as over-broad. The current canonical path for the representative permission/write failures is #37634 with repair of open PR #46300 before any duplicate closeout. #31331, #36525, #39497, and #44077 remain open as related or independent follow-up work. #31457 is quarantined as the only security-sensitive hydrated item. No merge is recommended because #46300 lacks fresh merge preflight and has a failing macos check in the artifact.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 2 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #59613 | close_duplicate | skipped | duplicate | action status is blocked |
| #65316 | close_duplicate | skipped | duplicate | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #31331 | keep_related | planned | related | Keep open as a related but separate DOOD bind-mount canonical issue; do not close into the workspaceAccess=none writable-workspace tracker. |
| #36525 | keep_related | planned | related | Related product/semantics work, but too broad to close or include in the narrow #37634/#46300 fix path. |
| #37634 | keep_canonical | planned | canonical | Best live canonical for the representative read/write permission failures in workspaceAccess=none sandbox sessions. |
| #39497 | keep_related | planned | related | Keep open as related follow-up work; not a duplicate of #37634 and not covered by #46300. |
| #44077 | keep_independent | planned | independent | Independent bug family; leave open for a separate focused fix or cluster. |
| #46300 | fix_needed | planned | fixed_by_candidate | Repair the contributor branch before merge: rebase/refresh on current main ff9fefb79beac75e9a257aa43fce39db36fa828e, run pnpm check:changed, run /review, address any new findings, then re-evaluate merge. |
| cluster:ghcrawl-191461-agentic-merge | build_fix_artifact | planned |  | Prepare a repair_contributor_branch artifact for #46300 before any duplicate closeout. |
| #59613 | close_duplicate | blocked | duplicate | Duplicate closeout is clear but blocked on the canonical #37634 fix path / #46300 repair. |
| #65316 | close_duplicate | blocked | duplicate | Duplicate closeout is clear but blocked on the canonical #37634 fix path / #46300 repair. |
| #57230 | keep_closed | skipped | fixed_by_candidate | Already closed; no close action is valid. |
| #59063 | keep_closed | skipped | fixed_by_candidate | Already closed; no close action is valid. |
| #31457 | route_security | planned | security_sensitive | Route the security-sensitive linked PR to central OpenClaw security triage; do not mutate it or use it as the canonical fix path. |

## Needs Human

- none
