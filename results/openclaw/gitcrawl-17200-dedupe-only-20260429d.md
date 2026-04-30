---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-17200-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142106015"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142106015"
head_sha: "a0b870a07f2988db4b233d32e6ac2590b6afdb2d"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-30T01:11:41.291Z"
canonical: "https://github.com/openclaw/openclaw/pull/63941"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63877"
canonical_pr: "https://github.com/openclaw/openclaw/pull/63941"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-17200-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142106015](https://github.com/openclaw/clownfish/actions/runs/25142106015)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/63941

## Summary

Classified #63877 as the canonical open bug report and #63941 as the best live canonical implementation PR. No close, merge, or fix actions are planned: #63941 is still unmerged with an unresolved Firecrawl network-policy review decision, #59666 is superseded but should stay open while the canonical path is unsettled, and linked #74013 needs maintainer direction before it can be treated as a replacement or follow-up.

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
| #63877 | keep_canonical | planned | canonical | Keep the user report open as the canonical issue until a canonical Firecrawl self-hosting fix lands. |
| #63941 | keep_canonical | planned | canonical | Best live canonical implementation PR, but merge and fix lanes are disabled and the remaining network-policy decision blocks any merge recommendation. |
| #59666 | keep_related | planned | superseded | Superseded by the current canonical PR family, but keep open because closeout is disabled and the canonical fix has not landed. |
| #74013 | needs_human | planned | needs_human | Maintainers need to decide whether the explicit allowSelfHosted policy from #74013 should be part of the canonical Firecrawl self-hosting fix or remain a separate follow-up. |
| #59465 | keep_closed | skipped | related | Closed historical context only; no mutation is valid for an already-closed ref. |

## Needs Human

- Maintainer decision needed before merge or automated repair: choose the canonical Firecrawl self-hosting network-policy shape for #63877, specifically whether #63941's private/local detection should be strengthened with DNS-backed validation or whether #74013's explicit allowSelfHosted flag should be incorporated after fixing its per-operation scoping bug.
