---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165992-agentic-merge"
mode: "autonomous"
run_id: "24949933043"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24949933043"
head_sha: "c9d2c6f0ba71660f544f3ac6b6c4d8c4ec12b853"
workflow_conclusion: "cancelled"
result_status: "planned"
published_at: "2026-04-26T06:23:20.102Z"
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

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24949933043](https://github.com/openclaw/projectclownfish/actions/runs/24949933043)

Workflow conclusion: cancelled

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/41985

## Summary

#41985 remains the maintainer-trusted canonical issue for the still-open Control UI/WebChat non-image attachment gap. Current main at 40e5d9adc7690e8127f5c06799b3a57f16a1e466 is still image-only for uploads, so this run plans a narrow fix artifact, defers new duplicate closures under fix-before-close, keeps broader follow-ups open as related, and leaves already-closed historical items unchanged.

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
| #41985 | keep_canonical | planned | canonical | Maintainer trust and live artifact state both point to #41985 as the best surviving canonical issue for the remaining non-image attachment gap. |
| #41985 | fix_needed | planned | canonical | The bug/feature gap is still real on current main, no hydrated PR is available to repair or merge, and the canonical issue still needs an implementation path. |
| #41985 | build_fix_artifact | planned | canonical | A narrow new fix plan is the safest canonical path because the issue is real, contributor credit is unaffected, and there is no viable hydrated PR to repair. |
| #41985 | open_fix_pr | blocked | canonical | Opening the fix PR is blocked by missing checkout/branch material, so this run can only emit the fix artifact and leave implementation to the applicator path. |
| #30389 | keep_related | planned | related | This is related to the canonical upload gap but not a true duplicate because it still tracks distinct model-picker and capability-menu work. |
| #30759 | keep_related | planned | duplicate | This is a true duplicate of the canonical non-image attachment gap, but it should stay open for now because the cluster forbids new duplicate closes before the fix path exists. |
| #47933 | keep_related | planned | related | This belongs to the same product area but retains unique download scope, so it should remain open as related rather than be collapsed into the canonical issue. |
| #48700 | keep_related | planned | duplicate | The office-document request does not introduce a different root cause from #41985; it is a duplicate that should remain open until the canonical fix path exists. |
| #56344 | keep_related | planned | duplicate | This is the same underlying non-image attachment gap as #41985, but the mentioned PR cannot be credited as the candidate fix from the provided artifact. |
| #69185 | keep_related | planned | related | This is related but not safely duplicate because its arbitrary archive/binary scope and staging/config behavior exceed the narrow canonical fix. |
| #69447 | keep_related | planned | duplicate | This is a sharper technical duplicate of the canonical non-image attachment bug, not a separate feature thread. |
| #70438 | keep_related | planned | related | This is related follow-up scope about attachment handling policy and configurability, not the same duplicate as the baseline end-to-end support gap. |
| #36440 | keep_closed | skipped | related | Already closed as implemented; keep it closed and use it only as evidence that the remaining gap is specifically non-image attachments. |
| #41992 | keep_closed | skipped | duplicate | Already closed as a duplicate of the canonical issue; no further action is valid. |
| #43242 | keep_closed | skipped | duplicate | Already closed as a duplicate of the canonical issue; no further action is valid. |
| #51045 | keep_closed | skipped | related | Already closed as implemented; keep it closed and treat it as historical evidence for partial progress on the broader attachment family. |
| #56298 | keep_closed | skipped | duplicate | Already closed as a duplicate of the canonical issue; no further action is valid. |
| #63094 | keep_closed | skipped | duplicate | Already closed as a duplicate of the canonical issue; no further action is valid. |
| #67622 | keep_closed | skipped | duplicate | Already closed as a duplicate of the canonical issue; no further action is valid. |

## Needs Human

- none
