---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165995-agentic-merge"
mode: "autonomous"
run_id: "24978969166"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24978969166"
head_sha: "29400ea714d617de4455a11f0aa59ca745bf6cda"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T06:12:01.210Z"
canonical: "https://github.com/openclaw/openclaw/issues/63120"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63120"
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 4
needs_human_count: 0
---

# ghcrawl-165995-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24978969166](https://github.com/openclaw/clownfish/actions/runs/24978969166)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/63120

## Summary

Representative #59390 is already closed. The best live non-security canonical issue is #63120; the remaining open non-security issues are the same sessions_spawn runtime=subagent plus ACP-only streamTo failure family but require a fix path before closeout. Security-sensitive linked PRs #63121 and #72331 are quarantined. No merge is recommended because no non-security open PR has clean merge preflight proof, and the useful non-security PRs are closed/uneditable or dirty. A narrow replacement fix artifact is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
| Apply blocked | 0 |
| Apply skipped | 4 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/72331 | clownfish/ghcrawl-165995-agentic-merge |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #43556 | close_duplicate | skipped | duplicate | action status is blocked |
| #56326 | close_duplicate | skipped | duplicate | action status is blocked |
| #61724 | close_duplicate | skipped | duplicate | action status is blocked |
| #64714 | close_duplicate | skipped | duplicate | action status is blocked |
| #72331 | merge_canonical | executed | fix_pr | merged by ProjectClownfish post-flight |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #63120 | keep_canonical | planned | canonical | Best surviving non-security issue for the cluster root cause. |
| #43556 | close_duplicate | blocked | duplicate | Duplicate close is blocked on the replacement fix path. |
| #56326 | close_duplicate | blocked | duplicate | Duplicate close is blocked on the replacement fix path. |
| #61724 | close_duplicate | blocked | duplicate | Duplicate close is blocked on the replacement fix path. |
| #64714 | close_duplicate | blocked | duplicate | Duplicate close is blocked on the replacement fix path. |
| #59225 | keep_related | planned | related | Related follow-up, not a true duplicate of the narrow sessions_spawn streamTo failure. |
| #63121 | route_security | planned | security_sensitive | Route this PR to central OpenClaw security handling; do not mutate or use it as a ProjectClownfish fix candidate. |
| #72331 | route_security | planned | security_sensitive | Route this PR to central OpenClaw security handling; do not mutate or use it as a ProjectClownfish fix candidate. |
| cluster:ghcrawl-165995-agentic-merge | fix_needed | planned | related | A narrow replacement fix PR is needed before duplicate issue closeout. |
| cluster:ghcrawl-165995-agentic-merge | build_fix_artifact | planned |  | Artifact prepared for deterministic ProjectClownfish fix execution. |
| #53370 | keep_closed | skipped | superseded | Closed context refs must not receive close actions. |
| #56193 | keep_closed | skipped | duplicate | Closed context refs must not receive close actions. |
| #59390 | keep_closed | skipped | duplicate | Original representative is obsolete because it is closed. |
| #60965 | keep_closed | skipped | duplicate | Closed context refs must not receive close actions. |
| #67248 | keep_closed | skipped | duplicate | Closed context refs must not receive close actions. |
| #68275 | keep_closed | skipped | duplicate | Closed context refs must not receive close actions. |
| #69166 | keep_closed | skipped | related | Closed context refs must not receive close actions. |
| #47115 | keep_closed | skipped | superseded | Closed PR; useful idea superseded by a narrow replacement fix path. |
| #55483 | keep_closed | skipped | superseded | Closed PR; useful idea superseded by a narrow replacement fix path. |
| #65282 | keep_closed | skipped | superseded | Closed uneditable contributor PR; preserve credit in the replacement fix artifact. |
| #68397 | keep_closed | skipped | superseded | Closed uneditable contributor PR; preserve credit in the replacement fix artifact. |
| #66719 | keep_closed | skipped | related | Closed context refs must not receive close actions. |
| #69170 | keep_closed | skipped | superseded | Closed PR; no merge action. |
| #69203 | keep_closed | skipped | superseded | Closed PR; no merge action. |
| #53016 | keep_closed | skipped | duplicate | Closed context refs must not receive close actions. |

## Needs Human

- none
