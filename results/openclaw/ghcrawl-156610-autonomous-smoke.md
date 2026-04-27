---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156610-autonomous-smoke"
mode: "autonomous"
run_id: "24982553070"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24982553070"
head_sha: "64b08445e255b22babdbfd48320457951faa2507"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T08:01:32.982Z"
canonical: "https://github.com/openclaw/openclaw/pull/72658"
canonical_issue: "https://github.com/openclaw/openclaw/issues/37706"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72658"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 5
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156610-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24982553070](https://github.com/openclaw/clownfish/actions/runs/24982553070)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72658

## Summary

Hydrated state shows the original representative #44256 is already closed and was replaced by open ProjectClownfish PR #72658. Keep #37706 as the canonical issue and #72658 as the canonical replacement PR. Route only security-sensitive #49770 to central security handling. Keep the Feishu reply-mention work (#39568/#39569) related but separate. Plan superseded closeouts for non-security duplicate PRs now that #72658 exists and credits the source PRs. Do not recommend merge yet because #72658 lacks a passed Codex /review merge preflight and has failing core CI checks in the artifact.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 5 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #49767 | close_superseded | blocked | superseded | close requires ProjectClownfish fix PR opened/pushed or merge executed first |
| #50144 | close_superseded | blocked | superseded | close requires ProjectClownfish fix PR opened/pushed or merge executed first |
| #50394 | close_superseded | blocked | superseded | close requires ProjectClownfish fix PR opened/pushed or merge executed first |
| #50801 | close_superseded | blocked | superseded | close requires ProjectClownfish fix PR opened/pushed or merge executed first |
| #58867 | close_superseded | blocked | superseded | close requires ProjectClownfish fix PR opened/pushed or merge executed first |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #37706 | keep_canonical | planned | canonical |  |
| #72658 | keep_canonical | planned | canonical | Canonical replacement PR exists but merge must wait for deterministic post-flight merge preflight, clean/accepted checks, and Codex /review. |
| #39568 | keep_related | planned | related | Related Feishu mention handling area, but not the same root cause as the @all duplicate family. |
| #39569 | keep_related | planned | related | Separate Feishu reply-mention bug with unresolved review findings. |
| #44256 | keep_closed | skipped | superseded | Already closed; replacement path is #72658. |
| #49761 | keep_closed | skipped | duplicate | Already closed duplicate evidence only. |
| #49767 | close_superseded | planned | superseded | Superseded by the hydrated maintainer replacement PR #72658 with contributor credit preserved. |
| #49770 | route_security | planned | security_sensitive | Security-sensitive item must be routed to central security handling only. |
| #50144 | close_superseded | planned | superseded | Superseded by the hydrated maintainer replacement PR #72658 with unresolved review blockers left on this branch. |
| #50394 | close_superseded | planned | superseded | Superseded by the hydrated maintainer replacement PR #72658 with contributor credit preserved. |
| #50801 | close_superseded | planned | superseded | Superseded by the hydrated maintainer replacement PR #72658 with contributor credit preserved. |
| #58867 | close_superseded | planned | superseded | Superseded by the hydrated maintainer replacement PR #72658 with unresolved review/check blockers left on this branch. |

## Needs Human

- none
