---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156613-autonomous-smoke"
mode: "autonomous"
run_id: "24980244367"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24980244367"
head_sha: "40a5c7418ff46bf3e60da63dc6e2345c96900f78"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-04-27T07:10:07.453Z"
canonical: "https://github.com/openclaw/openclaw/pull/64953"
canonical_issue: "https://github.com/openclaw/openclaw/issues/64950"
canonical_pr: "https://github.com/openclaw/openclaw/pull/64953"
actions_total: 16
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156613-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24980244367](https://github.com/openclaw/clownfish/actions/runs/24980244367)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/64953

## Summary

Hydrated state shows the original representative #66072 is already closed. The current replace-mode canonical path is open issue #64950 with open contributor PR #64953 as the repairable canonical PR. No merge or post-merge closeout is safe yet because #64953 still has actionable bot-review concerns and no clean Codex /review preflight. Security-sensitive refs #59693 and #66305 are quarantined only; unrelated non-security items are classified separately.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 16 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #4349 | keep_closed | skipped | related | Closed context refs are evidence only. |
| #42797 | keep_related | planned | related | Separate provider-auth narrowing subcluster; keep open and do not close as duplicate of replace-mode work. |
| #47581 | keep_closed | skipped | independent | Already closed and not a live mutation target. |
| #48483 | close_duplicate | blocked | duplicate | Duplicate closeout is blocked by require_fix_before_close until canonical fix path #64953 lands. |
| #48535 | keep_closed | skipped | superseded | Already closed; no close action may be emitted. |
| #59693 | route_security | planned | security_sensitive | Security-sensitive item; ProjectClownfish must not close, merge, label, comment on, or open a fix PR for this ref. |
| #62317 | keep_related | planned | related | Separate model-catalog phantom-provider subcluster; keep open. |
| #62323 | keep_related | planned | related | Separate related subcluster and not merge-ready; do not close or merge in this replace-mode cluster. |
| #62481 | keep_related | planned | related | Separate draft related work; not safe for autonomous close or merge. |
| #64950 | keep_canonical | planned | canonical | Canonical live issue for the replace-mode family. |
| #64953 | keep_canonical | planned | canonical | Canonical PR is repairable but not merge-ready. |
| #64967 | keep_closed | skipped | superseded | Already closed; no close action may be emitted. |
| #66072 | keep_closed | skipped | superseded | Representative is obsolete and closed; keep as historical evidence only. |
| #66094 | keep_closed | skipped | independent | Closed independent context; no live action. |
| #66305 | route_security | planned | security_sensitive | Security-sensitive item; ProjectClownfish must route to central security handling only. |
| cluster:ghcrawl-156613-autonomous-smoke | build_fix_artifact | planned |  | Build repair instructions for the canonical contributor PR; no merge or closeout until repair, validation, and Codex /review pass. |

## Needs Human

- none
