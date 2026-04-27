---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156598-autonomous-smoke"
mode: "autonomous"
run_id: "24988621633"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24988621633"
head_sha: "68766d5583c05ab6d63e38d07f560c3e32e3781a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T10:16:54.728Z"
canonical: "https://github.com/openclaw/openclaw/pull/72614"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72614"
actions_total: 14
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 3
needs_human_count: 0
---

# ghcrawl-156598-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24988621633](https://github.com/openclaw/clownfish/actions/runs/24988621633)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72614

## Summary

Canonical drift resolved: closed representative #68397 is obsolete; calibrated open ProjectClownfish PR #72614 is the canonical repair path for the sessions_spawn ACP-only field tolerance bug but is not merge-ready because merge proof is missing and the Aisle security review finding must be addressed or proven non-actionable before merge. Open issue duplicates #56326, #61724, and #63120 are blocked from closeout until #72614 lands. Security-sensitive #63121 is quarantined only for central security handling. Provider schema-stripping PR #66720 is related but not a duplicate of the #72614 runtime-tolerance fix.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/72614 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56326 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |
| #61724 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |
| #63120 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |
| #72614 | merge_canonical | blocked | fix_pr | merge state status is UNSTABLE |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #40102 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #56342 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #58686 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #64787 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #65282 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #68397 | keep_closed | skipped | superseded | Closed representative is obsolete; #72614 is the current canonical PR. |
| #69170 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #56326 | close_fixed_by_candidate | blocked | fixed_by_candidate | Closeout is blocked on the canonical fix path #72614 landing. |
| #61724 | close_fixed_by_candidate | blocked | fixed_by_candidate | Closeout is blocked on the canonical fix path #72614 landing. |
| #63120 | close_fixed_by_candidate | blocked | fixed_by_candidate | Closeout is blocked on the canonical fix path #72614 landing. |
| #63121 | route_security | planned | security_sensitive | Quarantine exact security-sensitive ref for central OpenClaw security handling. |
| #66720 | keep_related | planned | related | Related provider schema compatibility work, not a duplicate of the #72614 runtime-tolerance bug. |
| #72614 | fix_needed | planned | canonical | Canonical PR is repairable but not merge-ready; executor should repair/review/validate the existing ProjectClownfish branch before any merge or duplicate closeout. |
| cluster:ghcrawl-156598-autonomous-smoke | build_fix_artifact | planned |  | Build an executable repair artifact for the canonical PR branch. |

## Needs Human

- none
