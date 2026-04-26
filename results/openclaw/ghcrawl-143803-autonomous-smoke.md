---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143803-autonomous-smoke"
mode: "autonomous"
run_id: "24938999617"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24938999617"
head_sha: "7db1f986bd485f7b71752bc77e40097172d6b6ef"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-26T01:27:46.224Z"
canonical: null
canonical_issue: "https://github.com/openclaw/openclaw/issues/57812"
canonical_pr: null
actions_total: 38
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 3
---

# ghcrawl-143803-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24938999617](https://github.com/openclaw/projectclownfish/actions/runs/24938999617)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/57812

## Summary

Returned needs_human. The preflight artifact shows the representative canonical #57812 is already closed, many sibling reports were also closed the same day, and no hydrated open issue or merged PR safely replaces it as the active canonical. Remaining open refs split across distinct scopes, so no further duplicate/comment/label actions are safe.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 38 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 3 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #6966 | keep_related | planned | related | Broader model-switching enhancement in the same area; leave open as related work. |
| #19249 | keep_closed | skipped | related | Earlier generic fallback failure report in the same area, but not proven to share the same root cause. |
| #21717 | keep_closed | skipped | related | Same subsystem, different failure mode. |
| #22364 | keep_closed | skipped | related | Related model-fallback reliability issue with a different root cause. |
| #24064 | keep_closed | skipped | related | Generic fallback-classification report; related but not a confirmed duplicate. |
| #24424 | keep_closed | skipped | related | Umbrella reliability request, not a clean duplicate target. |
| #44919 | keep_independent | planned | independent | Separate auth-desynchronization bug family. |
| #44935 | keep_related | planned | related | Open recovery-probe feature in the same area, but not the #57812 bug. |
| #44941 | keep_related | planned | related | Related feature request, distinct scope. |
| #45834 | keep_closed | skipped | related | Fallback classification bug in the same subsystem, but a different root cause. |
| #55118 | keep_closed | skipped | related | Closed broad refactor PR is not a safe canonical fix path. |
| #57471 | keep_related | planned | related | Related LiveSessionModelSwitch handling bug, but not the same canonical issue. |
| #57812 | keep_closed | skipped | canonical | Historical representative only; it cannot serve as the active open canonical without a maintainer-designated replacement. |
| #57906 | keep_closed | skipped | related | Retry-budget tuning problem, not the same root cause as #57812. |
| #57961 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #58045 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #58069 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #58213 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #58232 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #58288 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #58303 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #58308 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #58392 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #58496 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #58510 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #58531 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #58532 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #58556 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #58578 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #58600 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #59213 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #59252 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #59303 | keep_closed | skipped | related | Same user-visible area, but the hydrated evidence is not specific enough to classify as a confirmed duplicate. |
| #59861 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #59928 | keep_closed | skipped | related | Post-fallback stickiness/regression in the same area, but not the #57812 fallback-override bug. |
| #65676 | keep_closed | skipped | duplicate | Already-closed historical duplicate of #57812. |
| #66530 | keep_closed | skipped | related | Recovery-probe feature request in the same area, not a duplicate of #57812. |
| #66951 | keep_closed | skipped | independent | Separate fallback-ordering bug family. |

## Needs Human

- Canonical drift: job frontmatter named #57812 as the open canonical, but the preflight artifact shows #57812 closed on 2026-04-25T12:19:11Z; no hydrated open issue or merged PR safely replaces it for duplicate routing.
- No canonical fix path is proven on current main: the only hydrated PR candidate, #55118, is closed, draft, dirty, and broad, and no merged PR or closing commit is hydrated for the #57812 family.
- The remaining open refs are not safe duplicates of one another: #57471 is a distinct LiveSessionModelSwitch handling bug, #44935 is a recovery-probe feature request, #44941 is a notifications feature request, and #44919 is an unrelated auth-desync bug.
