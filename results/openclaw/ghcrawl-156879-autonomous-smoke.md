---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156879-autonomous-smoke"
mode: "autonomous"
run_id: "25039930706"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25039930706"
head_sha: "9fff25109fedd0a6983588f78c57d6ac62e0da26"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-28T07:33:11.810Z"
canonical: "https://github.com/openclaw/openclaw/pull/56720"
canonical_issue: "https://github.com/openclaw/openclaw/issues/56635"
canonical_pr: "https://github.com/openclaw/openclaw/pull/56720"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 3
needs_human_count: 0
---

# ghcrawl-156879-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25039930706](https://github.com/openclaw/clownfish/actions/runs/25039930706)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/56720

## Summary

Hydrated preflight state is sufficient for non-mutating classification. #56720 is the best canonical repair path for #56635 because it restores Gmail watcher exclude labels, threads configuration support, adds focused tests, and has maintainer_can_modify=true. It is not merge-ready: mergeability is unknown, checks-node-test and check-additional failed, and no Codex /review preflight is present. #56726 and #56736 overlap the same #56635 fix and are superseded by the richer canonical path, but require_fix_before_close blocks closure until #56720 is repaired and merged or a ProjectClownfish fix PR exists.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 3 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56635 | close_fixed_by_candidate | skipped | fixed_by_candidate | The linked issue is covered by the canonical PR path but cannot be closed before that fix lands. |
| #56726 | close_superseded | skipped | superseded | Clearly superseded by the canonical PR path, but closure is blocked until the canonical fix lands. |
| #56736 | close_superseded | skipped | superseded | Clearly superseded by the canonical PR path, but closure is blocked until the canonical fix lands. |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56635 | close_fixed_by_candidate | blocked | fixed_by_candidate | The linked issue is covered by the canonical PR path but cannot be closed before that fix lands. |
| #56720 | fix_needed | planned | canonical | Repair the contributor branch before any merge: rebase against current main, verify the Greptile fixes remain present, run Codex /review, run pnpm check:changed, and only then allow a merge decision. |
| #56726 | close_superseded | blocked | superseded | Clearly superseded by the canonical PR path, but closure is blocked until the canonical fix lands. |
| #56736 | close_superseded | blocked | superseded | Clearly superseded by the canonical PR path, but closure is blocked until the canonical fix lands. |
| cluster:ghcrawl-156879-autonomous-smoke | build_fix_artifact | planned |  | Autonomous execution should repair and validate the canonical contributor branch before merge or closeout replay. |

## Needs Human

- none
