---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156610-autonomous-smoke"
mode: "autonomous"
run_id: "24987101927"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24987101927"
head_sha: "3e2fd13363b486f8485ca909bf84ab36ee9ff77c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T09:27:47.381Z"
canonical: "https://github.com/openclaw/openclaw/pull/72658"
canonical_issue: null
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

Run: [https://github.com/openclaw/clownfish/actions/runs/24987101927](https://github.com/openclaw/clownfish/actions/runs/24987101927)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72658

## Summary

Canonical fix path is merged PR #72658. It supersedes the open non-security Feishu @all PRs. #49770 is quarantined as security-sensitive by the preflight artifact. #39569/#39568 are related Feishu reply-mention work, not duplicates of the @all fix.

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
| #37706 | keep_closed | skipped | fixed_by_candidate | Historical closed tracker for the same @all bug; no mutation allowed. |
| #39568 | keep_related | planned | related | Related Feishu channel bug, but a different root cause and validation path from the @all canonical fix. |
| #39569 | keep_related | planned | related | Keep open as a related follow-up PR; it is not covered by merged #72658. |
| #44256 | keep_closed | skipped | superseded | Closed source PR superseded by merged replacement #72658. |
| #49761 | keep_closed | skipped | fixed_by_candidate | Historical duplicate issue already closed; no mutation allowed. |
| #49767 | close_superseded | planned | superseded | Open contributor PR is superseded by merged canonical fix #72658 with credit preserved. |
| #49770 | route_security | planned | security_sensitive | Route exact security-sensitive item to central OpenClaw security handling; do not close, merge, or use as implementation source. |
| #50144 | close_superseded | planned | superseded | Open contributor PR is superseded by merged canonical fix #72658 with credit preserved. |
| #50394 | close_superseded | planned | superseded | Open contributor PR is superseded by merged canonical fix #72658 with credit preserved. |
| #50801 | close_superseded | planned | superseded | Open contributor PR is superseded by merged canonical fix #72658 with credit preserved. |
| #58867 | close_superseded | planned | superseded | Open contributor PR is superseded by merged canonical fix #72658 with credit preserved. |
| #72658 | keep_canonical | planned | canonical | Merged canonical fix for this @all/@_all cluster. |

## Needs Human

- none
