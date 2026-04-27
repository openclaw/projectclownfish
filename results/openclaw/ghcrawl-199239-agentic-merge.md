---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-199239-agentic-merge"
mode: "autonomous"
run_id: "24979718153"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24979718153"
head_sha: "8806d2971f220668a5fdb92adf8595525bd6678b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T06:24:37.350Z"
canonical: "https://github.com/openclaw/openclaw/pull/72388"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48388"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72388"
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 2
apply_skipped: 3
needs_human_count: 0
---

# ghcrawl-199239-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24979718153](https://github.com/openclaw/clownfish/actions/runs/24979718153)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72388

## Summary

Hydrated state shows the seed cluster is over-broad. The original representative #48578 is already closed and was replaced by hydrated PR #72388 for the Feishu filename mojibake family. Separate subfamilies remain for Feishu video file download fallback (#50164/#49967), Feishu upload ReadStream cleanup (#51196), and Feishu video thumbnails (#61807). No merge is recommended because the open canonical PRs lack clean merge preflight proof and some have failing checks or unresolved bot review comments.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 2 |
| Apply skipped | 3 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #50435 | close_superseded | blocked | superseded | close requires ProjectClownfish fix PR opened/pushed or merge executed first |
| #59431 | close_superseded | blocked | superseded | close requires ProjectClownfish fix PR opened/pushed or merge executed first |
| #48388 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |
| #49967 | close_superseded | skipped | superseded | action status is blocked |
| #49855 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #48578 | keep_closed | skipped | superseded | Already closed; closure actions are invalid for closed refs. |
| #72388 | keep_canonical | blocked | canonical | Canonical for the filename mojibake family, but merge is blocked until review-bot feedback, checks, and Codex /review preflight are clean. |
| #50435 | close_superseded | planned | superseded | Replacement PR #72388 is the safer canonical path for the same filename mojibake fix and preserves contributor attribution in the closeout comment. |
| #59431 | close_superseded | planned | superseded | Superseded by the narrower replacement PR #72388; closeout preserves contributor credit. |
| #48388 | close_fixed_by_candidate | blocked | fixed_by_candidate | Blocked on the canonical fix path #72388 landing; require_fix_before_close prevents closing this open issue now. |
| #59409 | keep_related | planned | fixed_by_candidate | Non-mutating classification only. The issue appears covered by #72388, but closure must wait until the canonical fix path lands and validates. |
| #50164 | keep_canonical | blocked | canonical | Best canonical PR for the video-download-502 subfamily, but merge is blocked by missing merge preflight and insufficient current checks. |
| #49967 | close_superseded | blocked | superseded | Blocked until the canonical #50164 fix path has clean validation; require_fix_before_close prevents closing this useful contributor PR now. |
| #49855 | close_fixed_by_candidate | blocked | fixed_by_candidate | Blocked on #50164 landing; require_fix_before_close prevents issue closure now. |
| #51196 | keep_independent | planned | independent | Independent Feishu media resource cleanup work, not a duplicate or superseded member of the filename/video-download subfamilies. |
| #61807 | keep_related | planned | related | Related Feishu media work but a separate root cause and currently not merge-ready. |
| #38554 | keep_closed | skipped | fixed_by_candidate | Closed linked context only; no mutation target. |
| #38559 | keep_closed | skipped | superseded | Closed linked context only; no mutation target. |

## Needs Human

- none
