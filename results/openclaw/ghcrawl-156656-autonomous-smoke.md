---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156656-autonomous-smoke"
mode: "autonomous"
run_id: "25023023225"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25023023225"
head_sha: "416b225d73239870f6704a4eeb6d95f026ba00e9"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T22:45:01.436Z"
canonical: "https://github.com/openclaw/openclaw/pull/71792"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/71792"
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 3
needs_human_count: 0
---

# ghcrawl-156656-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25023023225](https://github.com/openclaw/clownfish/actions/runs/25023023225)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/71792

## Summary

Canonical issue #43524 is already closed. The best live canonical path is focused open PR #71792, but it is not merge-ready because mergeability is unknown, some CI lanes are failing, and no clean Codex /review preflight is present. Plan is to repair contributor branch #71792, quarantine security-sensitive #45608, keep already-closed cluster refs closed, and block duplicate/superseded closeout until the canonical fix path lands.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 3 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/71792 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56072 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |
| #61675 | close_superseded | skipped | superseded | action status is blocked |
| #50933 | close_superseded | skipped | superseded | action status is blocked |
| #71792 | merge_canonical | blocked | fix_pr | mergeable state is CONFLICTING |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #71792 | keep_canonical | planned | canonical | Best live canonical fix candidate, but it needs repair/rebase/review before merge. |
| cluster:ghcrawl-156656-autonomous-smoke | fix_needed | planned |  | Repair contributor branch #71792 before merge or closeout replay. |
| cluster:ghcrawl-156656-autonomous-smoke | build_fix_artifact | planned |  | Build an executable repair plan for the canonical PR. |
| #45608 | route_security | planned | security_sensitive | Quarantine this open security-sensitive item to central OpenClaw security handling; do not close, label, or fix through ProjectClownfish. |
| #56072 | close_fixed_by_candidate | blocked | fixed_by_candidate | Closeout blocked on canonical fix path #71792 repair and merge. |
| #61675 | close_superseded | blocked | superseded | Superseded closeout is blocked until canonical path #71792 lands or a replacement fix PR exists. |
| #50933 | close_superseded | blocked | superseded | Superseded closeout is blocked until canonical path #71792 lands or a replacement fix PR exists. |
| #37955 | keep_closed | skipped | duplicate | Already closed refs must not receive close actions. |
| #43524 | keep_closed | skipped | duplicate | Representative issue is obsolete as a canonical target because it is closed. |
| #50891 | keep_closed | skipped | duplicate | Already closed refs must not receive close actions. |
| #57369 | keep_independent | planned | independent | Different scope; leave open outside this cluster. |
| #34951 | route_security | skipped | security_sensitive | Closed linked security-sensitive ref noted but not mutated. |
| #38027 | route_security | skipped | security_sensitive | Closed linked security-sensitive ref noted but not mutated. |

## Needs Human

- none
