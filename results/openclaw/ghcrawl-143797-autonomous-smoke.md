---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143797-autonomous-smoke"
mode: "autonomous"
run_id: "24978131891"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24978131891"
head_sha: "e8d437d9978c397d8d3fb39c23597d4e5c1d98bf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T05:31:54.318Z"
canonical: "https://github.com/openclaw/openclaw/issues/62762"
canonical_issue: "https://github.com/openclaw/openclaw/issues/62762"
canonical_pr: null
actions_total: 21
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-143797-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24978131891](https://github.com/openclaw/clownfish/actions/runs/24978131891)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/62762

## Summary

Classified the hydrated cluster without mutating GitHub. The closed representative #45560 is obsolete as an open canonical; the current open canonical for the still-active gateway probe/1006 false-negative family is #62762. One direct duplicate close is safe for #48360 against #62762. Other open items remain related or independent because they carry distinct scope, stale-but-not-proven-fixed browser behavior, or an unrelated Google Chat PR. Security-sensitive hydrated refs are routed only to central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 21 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #48360 | close_duplicate | blocked | duplicate | close requires ProjectClownfish fix PR opened/pushed or merge executed first |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #62762 | keep_canonical | planned | canonical | Use #62762 as the surviving open canonical for the still-reproducing gateway probe/1006 family. |
| #48360 | close_duplicate | planned | duplicate | Direct duplicate of the still-open #62762 canonical issue. |
| #51469 | keep_related | planned | related | Related gateway handshake timeout issue, not a direct duplicate suitable for autonomous closure in this smoke pass. |
| #52336 | keep_related | planned | related | Related gateway-close symptom but unique browser automation scope and maintainer explicitly kept it open pending fresh repro. |
| #68944 | keep_related | planned | related | Keep open as related until the current-main fix path for this exact hang is hydrated or the reporter confirms resolution. |
| #68614 | keep_independent | planned | independent | Independent linked PR; do not merge or close as part of this gateway handshake cluster. |
| #61095 | keep_related | planned | related | Related gateway CLI failure family, but distinct exec-env root cause. |
| #45560 | keep_closed | skipped | canonical | Closed historical representative; do not emit close actions for already-closed refs. |
| #45222 | keep_closed | skipped | fixed_by_candidate | Already closed; no worker close action allowed. |
| #46008 | keep_closed | skipped | fixed_by_candidate | Already closed; no worker close action allowed. |
| #51357 | keep_closed | skipped | superseded | Already closed as superseded by #62762; no worker close action allowed. |
| #51679 | keep_closed | skipped | fixed_by_candidate | Already closed; no worker close action allowed. |
| #61554 | keep_closed | skipped | fixed_by_candidate | Already closed; no worker close action allowed. |
| #67985 | keep_closed | skipped | fixed_by_candidate | Already closed; no worker close action allowed. |
| #68642 | keep_closed | skipped | fixed_by_candidate | Already closed; no worker close action allowed. |
| #44089 | route_security | planned | security_sensitive | Quarantine security-sensitive ref; do not mutate through ProjectClownfish. |
| #44714 | route_security | planned | security_sensitive | Quarantine security-sensitive ref; do not mutate through ProjectClownfish. |
| #44962 | route_security | planned | security_sensitive | Quarantine security-sensitive ref; do not mutate through ProjectClownfish. |
| #45590 | route_security | planned | security_sensitive | Quarantine security-sensitive ref; do not mutate through ProjectClownfish. |
| #47265 | route_security | planned | security_sensitive | Quarantine security-sensitive ref; do not mutate through ProjectClownfish. |
| #61127 | route_security | planned | security_sensitive | Quarantine security-sensitive ref; do not mutate through ProjectClownfish. |

## Needs Human

- none
