---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156751-autonomous-smoke"
mode: "autonomous"
run_id: "25039174091"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25039174091"
head_sha: "7b7cd357b72747a995afa2067b62caaa3f133941"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-28T07:19:11.118Z"
canonical: "https://github.com/openclaw/openclaw/pull/70010"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/70010"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156751-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25039174091](https://github.com/openclaw/clownfish/actions/runs/25039174091)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/70010

## Summary

Hydrated state shows the original representative #69257 is already closed and superseded by the still-open, narrower gog Tasks docs PR #70010. The Copilot-model refs in the same ghcrawl cluster are a separate closed historical subfamily already handled by merged #69818 and current main behavior. No close or merge is safe in this worker result: #70010 is open and useful but has failing checks, unknown mergeability, and no clean Codex /review preflight, so the planned path is to repair the contributor branch and validate before any merge or post-merge closeout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/70010 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #70010 | merge_canonical | blocked | fix_pr | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled for human review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #69094 | keep_closed | skipped | superseded | Historical closed issue; no mutation planned. |
| #69241 | keep_closed | skipped | fixed_by_candidate | Closed Copilot-model issue already handled outside the gog Tasks canonical path. |
| #69244 | keep_closed | skipped | superseded | Closed historical Copilot PR; no mutation planned. |
| #69257 | keep_closed | skipped | superseded | Original representative is obsolete; #70010 is the better live canonical PR. |
| #69259 | keep_closed | skipped | superseded | Closed historical Copilot PR; no mutation planned. |
| #69318 | keep_closed | skipped | superseded | Closed historical Copilot PR; no mutation planned. |
| #69818 | keep_closed | skipped | canonical | Merged historical Copilot canonical; no mutation planned. |
| #70010 | fix_needed | planned | canonical | Repair the useful open contributor branch, rerun review, and validate before any merge or post-merge closeout. |
| cluster:ghcrawl-156751-autonomous-smoke | build_fix_artifact | planned |  | Executable fix artifact required because the canonical PR is not merge-ready. |

## Needs Human

- none
