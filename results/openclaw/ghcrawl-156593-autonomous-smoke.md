---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156593-autonomous-smoke"
mode: "autonomous"
run_id: "25069738606"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25069738606"
head_sha: "2a04089b3cf2fdf8500369cf552da7581e8f16f0"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-28T18:29:23.097Z"
canonical: "https://github.com/openclaw/openclaw/pull/38808"
canonical_issue: "https://github.com/openclaw/openclaw/issues/38806"
canonical_pr: "https://github.com/openclaw/openclaw/pull/38808"
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-156593-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25069738606](https://github.com/openclaw/clownfish/actions/runs/25069738606)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/38808

## Summary

Classified the hydrated Feishu cluster against current preflight state. #38808 remains the canonical repairable PR for the P2P direct-message thread reply regression, but merge is blocked until the executor refreshes mergeability, runs a clean Codex /review, and completes merge preflight. Security-sensitive #38996 and linked #38757 are quarantined only. No close actions are planned because require_fix_before_close blocks duplicate closeout until the canonical fix lands.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/38808 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #38806 | close_duplicate | skipped | duplicate | Duplicate closeout is blocked on the canonical fix path #38808. |
| #38808 | merge_canonical | blocked | fix_pr | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled for human review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #38808 | fix_needed | planned | canonical | Canonical PR is useful and repairable, but autonomous merge is blocked by missing clean Codex /review proof and unknown mergeability. |
| cluster:ghcrawl-156593-autonomous-smoke | build_fix_artifact | planned |  | A canonical fix path exists, but it needs deterministic executor repair and review before any merge or duplicate closeout. |
| #38806 | close_duplicate | blocked | duplicate | Duplicate closeout is blocked on the canonical fix path #38808. |
| #38996 | route_security | planned | security_sensitive | Security-sensitive linked work must be routed to central OpenClaw security handling and not processed by ProjectClownfish cleanup. |
| #38757 | route_security | planned | security_sensitive | Security-sensitive linked ref is quarantined without poisoning unrelated non-security Feishu routing work. |
| #39507 | keep_related | planned | related | Related Feishu thread behavior, but different root cause and blocked merge gates. |
| #42296 | keep_closed | skipped | independent | Already closed and independent of the canonical P2P thread regression. |
| #44118 | keep_independent | planned | independent | Separate Feishu command-routing work, outside the canonical P2P thread reply cluster. |
| #47961 | keep_independent | planned | independent | Separate Feishu direct-message UX feature, not a duplicate or merge candidate for this cluster. |
| #55521 | keep_independent | planned | independent | Independent feature with unresolved review-bot findings and failing checks. |
| #67068 | keep_closed | skipped | related | Already closed; retained only as related historical evidence. |
| #67069 | keep_related | planned | related | Related thread metadata PR with unresolved correctness findings and failing checks, not mergeable or closable in this cluster. |
| #60848 | keep_related | planned | related | Related but distinct topic/outbound thread anchoring work with failing checks. |

## Needs Human

- none
