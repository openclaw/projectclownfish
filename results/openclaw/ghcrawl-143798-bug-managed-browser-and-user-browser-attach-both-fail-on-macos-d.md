---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143798-bug-managed-browser-and-user-browser-attach-both-fail-on-macos-d"
mode: "plan"
run_id: "24931326064"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24931326064"
head_sha: "75185936126d75ebb182e229f44f6cda4edd81cd"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-26T01:27:46.146Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 6
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 4
---

# ghcrawl-143798-bug-managed-browser-and-user-browser-attach-both-fail-on-macos-d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24931326064](https://github.com/openclaw/projectclownfish/actions/runs/24931326064)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Using the provided preflight artifact as live GitHub state, the cluster has changed materially since job generation: #47879, #48037, and #62706 are already closed. The only still-open listed candidate, #48867, is a separate Android Termux stdin-parent-death failure. Because representative #65125 is also closed and hydrated PR candidate #51732 is closed, dirty, and has a failing check, this run cannot name a safe live canonical from the hydrated set.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 4 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #65125 | needs_human | blocked | needs_human | The representative issue is closed and no hydrated open successor in the same macOS managed-browser/existing-session attach family is available to promote as the live canonical. |
| #51732 | needs_human | blocked | needs_human | #51732 is not a safe canonical fix path for this plan because it is closed, not mergeable, has a failing check, and exceeds the job's human-review gates. |
| #47879 | keep_related | skipped | related | Already closed in live state; this is related Chrome MCP configuration work, not the same root cause as the representative failure family. |
| #48037 | keep_related | skipped | related | Already closed in live state; this is related feature/configuration scope, not the same root cause as the representative failure family. |
| #62706 | keep_related | skipped | related | Already closed in live state; this is a related attach-path bug, but it is distinct from the representative macOS/browser attach family. |
| #48867 | keep_independent | planned | independent | Keep open and independent; it should not replace #65125 as canonical for this cluster because it is a separate Android/Termux failure family. |

## Needs Human

- Cluster changed materially since job generation: #47879, #48037, and #62706 were listed as open candidates but are already closed in the preflight live state.
- Representative #65125 is closed, and the only remaining open listed candidate (#48867) is a different Android Termux failure, so no safe live canonical exists in the hydrated set.
- Canonical PR candidate #51732 is closed, mergeable=false, mergeable_state=dirty, has 13 changed files, and includes a failing check, so the job's human gates block using it as the canonical fix path.
- If maintainers want a new live canonical for the #65125 family, linked refs such as #65379/#65401 need hydration in a follow-up cluster before that choice is made.
