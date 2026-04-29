---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238871-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25107991613"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107991613"
head_sha: "3ec6a205eb986741424344762fbc94babbdc2937"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-29T12:12:49.910Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-238871-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107991613](https://github.com/openclaw/clownfish/actions/runs/25107991613)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

No GitHub mutations are safe to plan. The group-thread mention work has two useful open contributor PRs with different APIs (#48945 threadFollowUp and #40530 requireMentionInThread), and the latest hydrated evidence leaves the canonical product policy unresolved. #63148 is related Feishu topic work but covers a distinct DM topic-session isolation problem and should stay open separately.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #48945 | needs_human | blocked | needs_human | Maintainer judgment is required to choose the canonical Feishu group-thread mention policy between #48945 and #40530 before closing, superseding, or advancing either contributor PR. |
| #40530 | keep_related | planned | related | Keep open as an overlapping related implementation until maintainers select the canonical API or a chosen fix lands. |
| #63148 | keep_related | planned | related | Keep open as a related but separate Feishu DM topic-session isolation candidate; it should not be closed or merged in the group-thread mention dedupe decision. |

## Needs Human

- Choose the canonical Feishu group-thread mention API and implementation path between #48945 threadFollowUp active/topic/off and #40530 requireMentionInThread boolean. Current hydrated evidence does not support closing either useful contributor PR.
