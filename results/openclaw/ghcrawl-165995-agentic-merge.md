---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165995-agentic-merge"
mode: "autonomous"
run_id: "24965157685"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24965157685"
head_sha: "27c2c310692398fc86d262abfd33e1b06e631178"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-04-26T19:34:54.756Z"
canonical: "https://github.com/openclaw/openclaw/issues/43556"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43556"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72331"
actions_total: 22
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-165995-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24965157685](https://github.com/openclaw/projectclownfish/actions/runs/24965157685)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/43556

## Summary

Representative #59390 is already closed. The best surviving canonical issue is #43556 for the sessions_spawn runtime=subagent ACP-only streamTo failure family. A replacement fix path is referenced as #72331 from ProjectClownfish comments on closed source PRs #65282 and #68397, but no merge is recommended because #72331 was not hydrated in this artifact and no merge preflight is available. Planned duplicate closeout is limited to open issues with the same root failure; broader schema-filtering and schema-description work stays open as related.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 22 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #43556 | keep_canonical | planned | canonical | Best surviving open issue for the immediate runtime=subagent ACP-only streamTo hard-failure family. |
| #56326 | close_duplicate | planned | duplicate | Duplicate closeout is high confidence and tied to the open canonical issue #43556 plus replacement fix path #72331. |
| #61724 | close_duplicate | planned | duplicate | Same root cause and same expected runtime tolerance as #43556; unique version details are useful evidence but do not require a separate issue. |
| #64714 | close_duplicate | planned | duplicate | Duplicate of the canonical hard-failure report. |
| #67248 | close_duplicate | planned | duplicate | Version-specific reproduction is covered by the canonical issue and replacement fix path. |
| #63120 | keep_related | planned | related | Related schema-contract issue rather than a clean duplicate closeout while #69170 remains open and failing checks. |
| #59225 | keep_related | planned | related | Related broader design work; not a duplicate of the narrow runtime tolerance bug. |
| #69170 | keep_related | blocked | related | Keep open as related; merge is blocked by failing checks and missing merge preflight. |
| #47115 | keep_closed | skipped | superseded | Historical closed source PR evidence only. |
| #53016 | keep_closed | skipped | duplicate | Already closed duplicate evidence only. |
| #53370 | keep_closed | skipped | duplicate | Already closed; no mutation allowed. |
| #55483 | keep_closed | skipped | superseded | Closed historical source PR; useful idea carried forward by replacement path. |
| #56193 | keep_closed | skipped | duplicate | Already closed duplicate evidence only. |
| #59390 | keep_closed | skipped | duplicate | Closed representative; evidence only. |
| #60965 | keep_closed | skipped | duplicate | Already closed duplicate evidence only. |
| #65282 | keep_closed | skipped | superseded | Closed source PR superseded by replacement path. |
| #66719 | keep_closed | skipped | related | Closed related schema-provider context only. |
| #68275 | keep_closed | skipped | duplicate | Already closed duplicate evidence only. |
| #68397 | keep_closed | skipped | superseded | Closed useful source PR superseded by replacement path. |
| #69166 | keep_closed | skipped | related | Closed related schema-hint issue evidence only. |
| #69203 | keep_closed | skipped | superseded | Closed duplicate PR evidence only. |
| cluster:ghcrawl-165995-agentic-merge | build_fix_artifact | planned |  | A canonical replacement fix path exists but needs hydration and normal merge preflight before merge or post-merge closeout. |

## Needs Human

- none
