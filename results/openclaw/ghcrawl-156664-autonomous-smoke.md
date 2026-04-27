---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156664-autonomous-smoke"
mode: "autonomous"
run_id: "25023034561"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25023034561"
head_sha: "416b225d73239870f6704a4eeb6d95f026ba00e9"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-04-27T23:03:58.354Z"
canonical: "https://github.com/openclaw/openclaw/pull/41861"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41862"
canonical_pr: "https://github.com/openclaw/openclaw/pull/41861"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156664-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25023034561](https://github.com/openclaw/clownfish/actions/runs/25023034561)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/41861

## Summary

Canonical hint #50001 is obsolete because it is closed unmerged. The best live canonical path is repair of open PR #41861, which is focused, maintainer-editable, and already addresses the key function-replacer review finding. No merge or close is planned because merge preflight is incomplete and require_fix_before_close blocks superseded/duplicate closeout until the canonical repair lands.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #41861 | keep_canonical | planned | canonical | Best live canonical PR, but it needs repair/validation before merge. |
| cluster:ghcrawl-156664-autonomous-smoke | fix_needed | planned |  | Canonical PR exists but is not merge-ready under the merge policy. |
| cluster:ghcrawl-156664-autonomous-smoke | build_fix_artifact | planned |  | Executable repair artifact required for a calibrated autonomous fix path. |
| #49961 | close_superseded | blocked | superseded | Superseded by canonical #41861, but closeout is blocked on the canonical fix path. |
| #68947 | close_superseded | blocked | superseded | Useful but superseded by canonical #41861; blocked from closure until canonical fix lands. |
| #41862 | keep_related | planned | fixed_by_candidate | Paired canonical issue; not closable before fix lands. |
| #49957 | close_fixed_by_candidate | blocked | fixed_by_candidate | Same root cause, but fixed-by closeout must wait for the canonical fix path. |
| #43634 | keep_closed | skipped | superseded | Historical evidence only. |
| #50001 | keep_closed | skipped | superseded | Canonical hint is obsolete; historical evidence only. |

## Needs Human

- none
