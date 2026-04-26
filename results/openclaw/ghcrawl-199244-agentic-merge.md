---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-199244-agentic-merge"
mode: "autonomous"
run_id: "24968252932"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24968252932"
head_sha: "ca0a88e67e5debd868d492727ed94b15a8da7f88"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-04-26T22:10:20.841Z"
canonical: "https://github.com/openclaw/openclaw/pull/38776"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/38776"
actions_total: 13
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-199244-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24968252932](https://github.com/openclaw/projectclownfish/actions/runs/24968252932)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/38776

## Summary

Classified the Feishu interactive-card parsing cluster from the hydrated preflight artifact. #38776 is the narrowest repairable canonical PR path, but it is not merge-ready because review-bot findings remain unresolved and full checks include failures; emit a repair fix artifact instead of merge or close. Broad overlapping PRs #42218 and #45936 are superseded but fix-first closure is blocked until the canonical repair lands. Direct inbound-card work (#41609/#56795) and post-format fallback work (#60380/#60383) remain related follow-up subfamilies.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
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
| #32023 | keep_closed | skipped | duplicate | Already closed; no closure action is valid. |
| #32712 | keep_closed | skipped | duplicate | Already closed; no closure action is valid. |
| #38776 | keep_canonical | planned | canonical | Best repairable canonical path, but not merge-ready without branch repair, validation, and fresh Codex review. |
| #39339 | keep_closed | skipped | related | Already closed; no closure or merge action is valid. |
| #41609 | keep_related | planned | related | Related follow-up subfamily; do not close as a duplicate of the quoted-card canonical repair. |
| #42218 | close_superseded | blocked | superseded | Superseded by the narrower repairable #38776 path, but closure is blocked on the canonical fix landing. |
| #45936 | close_superseded | blocked | superseded | Superseded by narrower canonical repair path, but broad code delta and fix-first policy block closure now. |
| #48281 | keep_closed | skipped | related | Already closed; no closure action is valid. |
| #55466 | keep_closed | skipped | related | Already closed; no closure or merge action is valid. |
| #56795 | keep_related | planned | related | Related useful PR with unique scope and unresolved review feedback; keep open for its own review path. |
| #60380 | keep_related | planned | related | Related post-format fallback subcase; keep open until #60383 or a later canonical fix lands and validates it. |
| #60383 | keep_related | planned | related | Useful related PR, but failing checks and unresolved review-bot finding block merge or fixed-by-candidate closeout. |
| cluster:ghcrawl-199244-agentic-merge | build_fix_artifact | planned |  | A narrow branch repair is needed before any merge or fix-first closure can be planned. |

## Needs Human

- none
