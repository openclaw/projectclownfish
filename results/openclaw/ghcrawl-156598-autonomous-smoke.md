---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156598-autonomous-smoke"
mode: "autonomous"
run_id: "24984741507"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24984741507"
head_sha: "26374cdd2f49f5683850f92c1448eb8af1cfa65f"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-04-27T08:35:28.587Z"
canonical: "https://github.com/openclaw/openclaw/pull/72614"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72614"
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 3
needs_human_count: 0
---

# ghcrawl-156598-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24984741507](https://github.com/openclaw/clownfish/actions/runs/24984741507)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/pull/72614

## Summary

Classified the sessions_spawn ACP-only field cluster using the hydrated preflight artifact. #72614 is the current canonical PR path approved by maintainer calibration, but merge/final closeout is blocked until the deterministic executor completes merge preflight: rebase/repair if needed, run Codex /review, resolve bot/human findings, and validate with pnpm check:changed. Security-sensitive #63121 is quarantined only for central security routing. No GitHub mutations were performed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 3 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56326 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |
| #61724 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |
| #63120 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |
| #58686 | close_superseded | blocked | superseded | close requires ProjectClownfish fix PR opened/pushed or merge executed first |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72614 | keep_canonical | planned | canonical | Canonical PR path is explicit, but merge preflight is incomplete in this artifact. |
| #63121 | route_security | planned | security_sensitive | Route only #63121 to central OpenClaw security handling; continue ordinary non-security classification for the rest of the cluster. |
| #56326 | close_fixed_by_candidate | blocked | fixed_by_candidate | Blocked on canonical fix path #72614 landing and passing merge preflight. |
| #61724 | close_fixed_by_candidate | blocked | fixed_by_candidate | Blocked on canonical fix path #72614 landing and passing merge preflight. |
| #63120 | close_fixed_by_candidate | blocked | fixed_by_candidate | Blocked on canonical fix path #72614 landing and passing merge preflight. |
| #58686 | close_superseded | planned | superseded | Superseded by the explicit canonical replacement path #72614. |
| #66720 | keep_related | planned | related | Related provider/schema follow-up, not a duplicate closeout target for the #72614 runtime tolerance path. |
| #59225 | keep_related | planned | related | Related broader schema-filtering work should remain open outside this closeout. |
| #67276 | keep_independent | planned | independent | Independent open PR; no ProjectClownfish action in this cluster. |
| #40102 | keep_closed | skipped | superseded | Already closed; closed refs are historical evidence only. |
| #56342 | keep_closed | skipped | superseded | Already closed; closed refs are historical evidence only. |
| #64787 | keep_closed | skipped | superseded | Already closed; closed refs are historical evidence only. |
| #65282 | keep_closed | skipped | superseded | Already closed; closed refs are historical evidence only. |
| #68397 | keep_closed | skipped | superseded | Representative is obsolete because it is closed; keep as historical evidence only. |
| #69170 | keep_closed | skipped | superseded | Already closed; closed refs are historical evidence only. |

## Needs Human

- none
