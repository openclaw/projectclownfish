---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143799-autonomous-smoke"
mode: "autonomous"
run_id: "24937679258"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24937679258"
head_sha: "71faa495f89c028a67e9031c6b9e43359a89ecaa"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T01:27:46.174Z"
canonical: "https://github.com/openclaw/openclaw/issues/61741"
canonical_issue: "https://github.com/openclaw/openclaw/issues/61741"
canonical_pr: null
actions_total: 6
apply_executed: 2
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# ghcrawl-143799-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24937679258](https://github.com/openclaw/projectclownfish/actions/runs/24937679258)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/61741

## Summary

Using the provided preflight artifact as live GitHub state, #61917 is closed and #61741 is the best surviving open canonical for the late exec/subagent-output crash family. I planned duplicate closeouts for generic crash reports #65285 and #69920, kept #65983 open as a related orphan-process follow-up, and escalated #62754/#63220 because the artifact does not safely prove whether their abort/timeout run-state corruption reports are duplicates or a separate upstream pi-agent-core track.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Applied executions | 2 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #65285 | close_duplicate | executed | duplicate | duplicate of the canonical thread |
| #69920 | close_duplicate | executed | duplicate | duplicate of the canonical thread |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #61741 | keep_canonical | planned | canonical | Best surviving open issue for the cluster's late exec/subagent output race and gateway crash symptom. |
| #62754 | needs_human | blocked | needs_human | Ambiguous whether this is a true duplicate of the exec/subagent crash family or a separate upstream pi-agent-core abort/timeout issue; unsafe to auto-close. |
| #63220 | needs_human | blocked | needs_human | Abort/timeout subfamily is not safe for autonomous dedupe from the provided evidence alone. |
| #65285 | close_duplicate | planned | duplicate | High-confidence duplicate with no unique remaining work. |
| #65983 | keep_related | planned | related | Same area and likely related lifecycle bug, but distinct scope with unique remaining work. |
| #69920 | close_duplicate | planned | duplicate | High-confidence duplicate of the surviving open canonical issue. |

## Needs Human

- Decide whether #62754 and #63220 intentionally track a separate pi-agent-core abort/timeout bug or whether one should supersede the other; the provided artifact does not safely justify auto-closing either.
- If maintainers want fixed-by-candidate or post-merge closeout against #62821, re-fetch explicit merge state on current main first; the provided artifact proves a closed PR with passing checks, but not merge state on main.
