---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143807-autonomous-smoke"
mode: "autonomous"
run_id: "24939003369"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24939003369"
head_sha: "7db1f986bd485f7b71752bc77e40097172d6b6ef"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-26T01:27:46.241Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 16
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 4
---

# ghcrawl-143807-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24939003369](https://github.com/openclaw/projectclownfish/actions/runs/24939003369)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Closed representative #48144 no longer maps to a single live canonical path. The hydrated set spans separate input-history, WebUI/TUI /model-subcommand, nodes-list, and cache-token follow-up families, and the overlapping candidates do not support any high-confidence comment/label/close actions in autonomous mode.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 16 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 4 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #48144 | keep_closed | skipped | related | Historical representative only; the live cluster no longer yields a single safe successor. |
| #38702 | keep_canonical | planned | canonical | Best surviving thread for the input-history family. |
| #38709 | keep_independent | planned | independent | Distinct input-history family, not the representative context-token family, and not safe canonical material for autonomous routing here. |
| #46894 | keep_canonical | planned | canonical | Canonical issue for the WebUI local /model-subcommand bug. |
| #46895 | needs_human | blocked | needs_human | Likely supersede exists, but autonomous supersede/closeout is unsafe because the overlapping replacement path is not clean enough. |
| #47069 | needs_human | blocked | needs_human | Probably the best WebUI candidate in its subfamily, but still not safe enough for autonomous supersede or close decisions. |
| #50847 | keep_canonical | planned | canonical | Canonical issue for the nodes-list consistency family. |
| #50871 | needs_human | blocked | needs_human | Overlapping candidate with failing CI and non-minimal diff. |
| #50970 | needs_human | blocked | needs_human | Promising candidate, but failing CI and overlapping open PRs block autonomous canonical selection. |
| #51027 | needs_human | blocked | needs_human | Useful mixed PR, but not a safe autonomous canonical for either subfamily. |
| #51051 | needs_human | blocked | needs_human | Overlapping nodes fix with unrelated churn and incomplete validation evidence. |
| #51053 | needs_human | blocked | needs_human | Overlapping candidate without enough live validation evidence. |
| #51126 | keep_closed | skipped | related | Historical evidence only; no close action is valid on an already-closed issue. |
| #51270 | needs_human | blocked | needs_human | Canonical path for the closed #51126 family is unclear. |
| #65772 | needs_human | blocked | needs_human | Promising nodes candidate, but failing CI and overlapping open PRs block autonomous routing. |
| #68557 | keep_related | planned | related | Related follow-up with distinct remaining scope; not a safe duplicate of the closed representative. |

## Needs Human

- No single live canonical replaces closed representative #48144; the hydrated set spans independent input-history, /model-subcommand, nodes-list, and cache-token follow-up families.
- The nodes-list PRs #50871, #50970, #51027, #51051, #51053, and #65772 contain overlapping useful work, but some fail CI, some expose only label-job visibility, and #51027 mixes CLI and gateway changes; maintainer canonical selection or a combine plan is required.
- The WebUI /model pair #46895 and #47069 overlaps in the same files, but #47069 still shows failing CI and the artifact does not include the bot-review comment bodies required for autonomous supersede or closeout.
- The TUI/gateway /model path remains ambiguous because #51270 is open while linked issue #51126 is already closed, and the artifact does not prove the landed canonical path.
