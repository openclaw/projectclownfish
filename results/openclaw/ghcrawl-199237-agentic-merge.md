---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-199237-agentic-merge"
mode: "autonomous"
run_id: "24977053355"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24977053355"
head_sha: "50a0b51ad3e3cfffa74443fc81bf0c842f9747bf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T05:13:23.018Z"
canonical: "https://github.com/openclaw/openclaw/pull/54374"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/54374"
actions_total: 15
fix_executed: 0
fix_failed: 1
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 3
needs_human_count: 0
---

# ghcrawl-199237-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24977053355](https://github.com/openclaw/clownfish/actions/runs/24977053355)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/54374

## Summary

Classified the over-broad streaming cluster without GitHub mutation. #54374 remains the canonical repairable PR for the pre-tool WebChat/gateway duplicate-text family, but merge is blocked by missing clean merge preflight and a failing check-additional job. WebChat UI overlap PR closeouts are blocked until the canonical repair path lands. Repeated-character and provider-overlap work is kept as related follow-up work, and security-sensitive #72400 is quarantined for central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 3 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | validation command failed (pnpm check:changed): undefined ERR_PNPM_RECURSIVE_EXEC_FIRST_FAIL Command "check:changed" not found Did you mean "pnpm test:changed"? |
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): [check:changed] lanes=core, coreTests, docs [check:changed] src/gateway/chat-abort.test.ts: core test [check:changed] src/gateway/chat-abort.ts: core production [check:changed] src/gateway/server-chat.agent-events.test.ts: core test [check:changed] src/gateway/server-chat.ts: core production [check:changed] src/gateway/server-maintenance.test.ts: core test [check:changed] src/gateway/server-maintenance.ts: core production [check:changed] src/gateway/server-methods/agent.test.ts: core test [check:changed] src/gateway/server-methods/chat.abort.test-helpers.ts: core production [check:changed] src/gateway/server-methods/chat.directive-tags.test.ts: core test [check:changed] src/gateway/server-methods/chat.ts: core production [check:changed] src/gateway/server-methods/shared-types.ts: core production [check:changed] src/gateway/server-request-context.test.ts: core test [check:changed] src/gateway/server-request-context.ts: core production [check:changed] src/gateway/server-runtime-state.ts: core production [check:changed] src/gateway/server-startup-early.test.ts: core test [check:changed] src/gateway/server-startup-early.ts: core production [check:changed] src/gateway/server.chat.gat... |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #46985 | close_superseded | skipped | superseded | action status is blocked |
| #47377 | close_superseded | skipped | superseded | action status is blocked |
| #47399 | close_superseded | skipped | superseded | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #54374 | keep_canonical | planned | canonical | Canonical repair path is clear, but merge is blocked until the contributor branch is refreshed, validated, and reviewed cleanly. |
| cluster:ghcrawl-199237-agentic-merge | fix_needed | planned |  | Canonical implementation exists but is not merge-ready. |
| cluster:ghcrawl-199237-agentic-merge | build_fix_artifact | planned |  | A narrow repair artifact is needed before merge or closeout actions are safe. |
| #46985 | close_superseded | blocked | superseded | Closeout is blocked by require_fix_before_close until the canonical #54374 repair path lands. |
| #47377 | close_superseded | blocked | superseded | Closeout is blocked by require_fix_before_close until the canonical #54374 repair path lands. |
| #47399 | close_superseded | blocked | superseded | Closeout is blocked by require_fix_before_close until the canonical #54374 repair path lands. |
| #60063 | keep_related | planned | related | Same streaming area, different root cause and unresolved review blocker. |
| #63769 | keep_related | planned | related | Keep open as related repeated-character subcluster; do not close under #54374. |
| #63994 | keep_related | planned | related | Related repeated-character fix candidate, but not canonical for #54374 and not merge-ready. |
| #72400 | route_security | planned | security_sensitive | Route #72400 to central OpenClaw security handling; do not mutate, merge, close, or use it as a candidate fix in ProjectClownfish. |
| #65457 | keep_closed | skipped | superseded | Already closed historical context only. |
| #47188 | keep_closed | skipped | fixed_by_candidate | Already closed historical evidence only. |
| #47344 | keep_closed | skipped | superseded | Already closed historical evidence only. |
| #42588 | keep_closed | skipped | independent | Already closed independent context. |
| #47224 | keep_closed | skipped | independent | Already closed independent context. |

## Needs Human

- none
