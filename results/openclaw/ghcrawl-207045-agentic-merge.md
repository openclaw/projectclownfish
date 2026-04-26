---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-207045-agentic-merge"
mode: "autonomous"
run_id: "24969058051"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24969058051"
head_sha: "0e4564f671623de117a9abb4813b36a385aecd45"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T23:06:21.306Z"
canonical: "https://github.com/openclaw/openclaw/pull/44319"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/44319"
actions_total: 7
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-207045-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24969058051](https://github.com/openclaw/projectclownfish/actions/runs/24969058051)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/44319

## Summary

Hydrated state shows this ghcrawl cluster is over-broad: #44319 is the canonical repairable PR for provider-prefixed model extra params, while #45395, #46607, #67843, and linked #65909 are separate agent/provider issues. No merge or close is safe in this worker result: #44319 needs branch repair and validation, #46607 must be quarantined for security review based on hydrated review comments, and #67843 has an unresolved P1 Codex bot finding despite passing checks.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #44319 | keep_canonical | planned | canonical | Canonical PR is useful and editable, but not merge-ready; repair the contributor branch before any merge or post-merge closeout. |
| cluster:ghcrawl-207045-agentic-merge | build_fix_artifact | planned |  | Build a repair artifact for the canonical contributor PR; no direct GitHub mutation is performed by the worker. |
| #45395 | keep_related | planned | related | Separate provider payload bug in the same agents area; keep open for its own review path. |
| #46601 | keep_closed | skipped | superseded | Already closed before this worker run; no action planned. |
| #46607 | route_security | planned | security_sensitive | Route only #46607 to central OpenClaw security handling; do not merge, close, comment, or open a fix PR for this item via ProjectClownfish. |
| #65909 | keep_related | planned | related | Related linked issue with a partial candidate fix, not a duplicate or closeout target. |
| #67843 | keep_related | planned | related | Separate partial fix with unresolved bot review blocker; keep open for its own review or split path. |

## Needs Human

- none
