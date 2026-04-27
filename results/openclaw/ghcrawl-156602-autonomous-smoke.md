---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156602-autonomous-smoke"
mode: "autonomous"
run_id: "24982551042"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24982551042"
head_sha: "64b08445e255b22babdbfd48320457951faa2507"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T08:00:52.915Z"
canonical: "https://github.com/openclaw/openclaw/pull/72659"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72659"
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-156602-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24982551042](https://github.com/openclaw/clownfish/actions/runs/24982551042)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72659

## Summary

Canonical hint #55186 is already closed and has been replaced by hydrated ProjectClownfish PR #72659. No merge is recommended because #72659 still has a failing checks-node-core-runtime-shared check and no Codex /review merge preflight. Clear related/independent subfamilies are kept open; only the older replacement PR #72305 is safe to supersede in favor of #72659.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72305 | close_superseded | blocked | superseded | close requires ProjectClownfish fix PR opened/pushed or merge executed first |
| #59758 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72659 | keep_canonical | planned | canonical | Canonical fix path is explicit but not merge-ready. |
| #72305 | close_superseded | planned | superseded | Older replacement PR is superseded by the newer cluster-specific replacement PR #72659. |
| #55186 | keep_closed | skipped | superseded | Already closed source PR; retained as credited historical evidence for #72659. |
| #60115 | keep_closed | skipped | superseded | Already closed source PR; retained as credited historical evidence for #72659. |
| #59791 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; no mutation planned. |
| #59758 | close_fixed_by_candidate | blocked | fixed_by_candidate | Close is blocked on the canonical fix path #72659 landing cleanly. |
| #52120 | keep_related | planned | related | Related follow-up subfamily; not safe to close or merge in this cluster. |
| #45082 | keep_related | planned | related | Open related issue with distinct reproduction path; leave open. |
| #52236 | keep_related | planned | related | Draft incomplete related work; not a duplicate closeout candidate. |
| #55151 | keep_related | planned | related | Related open contributor PR with unresolved bot finding; leave open for separate repair/triage. |
| #57565 | keep_related | planned | related | Related broader routing PR; not safe for merge or superseded close in this cluster. |
| #57970 | keep_related | planned | related | Related dependency subcluster; leave open. |
| #57609 | keep_independent | planned | independent | Independent Mattermost bug; no cluster mutation planned. |
| #57607 | keep_independent | planned | independent | Independent open issue; leave open. |
| #58439 | keep_independent | planned | independent | Independent PR; leave open for its own review/merge path. |

## Needs Human

- none
