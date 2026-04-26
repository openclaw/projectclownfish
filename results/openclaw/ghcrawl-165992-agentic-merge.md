---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165992-agentic-merge"
mode: "autonomous"
run_id: "24948793033"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24948793033"
head_sha: "b0f245258ec43f2b084b5f9c87c496d00ba0f507"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T05:34:32.135Z"
canonical: "https://github.com/openclaw/openclaw/issues/41985"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41985"
canonical_pr: null
actions_total: 19
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-165992-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24948793033](https://github.com/openclaw/projectclownfish/actions/runs/24948793033)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/41985

## Summary

#41985 remains the live canonical issue for the remaining Control UI/WebChat non-image attachment gap. The hydrated artifact for main@71b79f49ad65652aaaac3559744dcfe85c12407c still shows image-only behavior, so this run emits fix planning and non-mutating classifications only; `require_fix_before_close` blocks new duplicate close actions until a fix PR exists or the canonical fix lands.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 19 |
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
| #41985 | keep_canonical | planned | canonical | Best live canonical for the remaining Control UI/WebChat non-image attachment gap. |
| #41985 | fix_needed | planned | canonical | The bug remains real on current main and needs a new narrow fix path. |
| #41985 | build_fix_artifact | planned | canonical | A replacement fix artifact is the appropriate autonomous output for this cluster. |
| #41985 | open_fix_pr | blocked | canonical | Opening the actual fix PR is blocked because no target checkout or writable branch context was provided to the worker. |
| #30389 | keep_related | planned | related | This overlaps the attachment gap but still owns unique UX work outside the canonical non-image upload fix. |
| #30759 | keep_related | planned | duplicate | True duplicate of the canonical non-image upload gap, but closure is gated until the fix path exists. |
| #47933 | keep_related | planned | related | It belongs to the same family, but download behavior is broader follow-up scope than the base non-image upload fix. |
| #48700 | keep_related | planned | duplicate | True duplicate of the canonical issue, but closeout is deferred by the fix-first-close policy. |
| #56344 | keep_related | planned | duplicate | Same remaining root cause as #41985; the stale implementation reference is not enough to treat it as resolved. |
| #69185 | keep_related | planned | related | Related follow-up scope; it should stay open even if the canonical fix lands first for supported non-image attachments. |
| #69447 | keep_related | planned | duplicate | High-confidence duplicate of #41985, kept open only because duplicate closure is gated by fix-first-close. |
| #70438 | keep_related | planned | related | Useful related design work, but not the canonical issue for the base non-image upload gap. |
| #36440 | keep_closed | skipped | related | Already closed historical context; no new action is valid. |
| #41992 | keep_closed | skipped | duplicate | Already closed as a duplicate of the canonical issue. |
| #43242 | keep_closed | skipped | duplicate | Already closed as a duplicate of the canonical issue. |
| #51045 | keep_closed | skipped | related | Already closed historical evidence for the image-only work that shipped. |
| #56298 | keep_closed | skipped | duplicate | Already closed as a duplicate of the canonical issue. |
| #63094 | keep_closed | skipped | duplicate | Already closed as a duplicate of the canonical issue. |
| #67622 | keep_closed | skipped | duplicate | Already closed as a duplicate of the canonical issue. |

## Needs Human

- none
