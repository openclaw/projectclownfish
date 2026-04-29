---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-8791-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136890057"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136890057"
head_sha: "c207d367ab088fb89ca96c77cc23dd9c55875cc5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T22:26:43.141Z"
canonical: "https://github.com/openclaw/openclaw/issues/54909"
canonical_issue: "https://github.com/openclaw/openclaw/issues/54909"
canonical_pr: "https://github.com/openclaw/openclaw/pull/54962"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-8791-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136890057](https://github.com/openclaw/clownfish/actions/runs/25136890057)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/54909

## Summary

Classified the hydrated open items without GitHub mutation. #54909 remains the canonical issue for the Telegram callback_data prefix bug, with #54962 as the linked repair-needed PR candidate. #40155 and #68429 are related Telegram/tool-routing reports with distinct root causes, so no duplicate closeout is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #54909 | keep_canonical | planned | canonical | Best live canonical issue for the callback_data prefix regression; keep open until the linked PR is repaired and landed or an equivalent fix reaches main. |
| #54962 | keep_canonical | planned | canonical | #54962 is the useful linked PR candidate for #54909, but it is not merge-ready because an actionable Codex P1 review finding remains unresolved and this dedupe-only job cannot perform fix or merge work. |
| #40155 | keep_related | planned | related | Related Telegram tool-routing area, but not a true duplicate of #54909 because the reproduction, model/provider involvement, and suspected root cause differ. |
| #68429 | keep_related | planned | related | Related inline-button workflow bug, but it has unique reproduction details and a distinct suspected root cause, so it should remain open as a separate follow-up. |

## Needs Human

- none
