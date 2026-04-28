---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156756-autonomous-smoke"
mode: "autonomous"
run_id: "25039184888"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25039184888"
head_sha: "9f4dbb74ad3575c098e74949579df9d60841c3bb"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-28T07:14:59.116Z"
canonical: "https://github.com/openclaw/openclaw/issues/13616"
canonical_issue: "https://github.com/openclaw/openclaw/issues/13616"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-156756-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25039184888](https://github.com/openclaw/clownfish/actions/runs/25039184888)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/13616

## Summary

Classified the hydrated backup/restore cluster without direct GitHub mutation. The original representative #62461 is already closed; #13616 is the best live canonical umbrella based on the latest maintainer signal. #45993 is overlapping migration/import scope but fix-first policy blocks duplicate closeout until the canonical native restore/import path has a concrete fix. Security-sensitive linked PRs are quarantined only for central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #45993 | close_duplicate | skipped | duplicate | Clear duplicate of the live canonical umbrella, but closeout is blocked on the canonical fix path or fix PR because require_fix_before_close is enabled. |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #13616 | keep_canonical | planned | canonical | Best live canonical issue for first-party backup restore/import and disaster recovery scope. |
| #45993 | close_duplicate | blocked | duplicate | Clear duplicate of the live canonical umbrella, but closeout is blocked on the canonical fix path or fix PR because require_fix_before_close is enabled. |
| #62461 | keep_closed | skipped | duplicate | Already closed; no mutation planned. |
| #18104 | route_security | planned | security_sensitive | Quarantine this exact security-sensitive linked PR for central OpenClaw security handling only. |
| #19052 | route_security | planned | security_sensitive | Quarantine this exact security-sensitive linked PR for central OpenClaw security handling only. |
| #18106 | keep_closed | skipped | superseded | Already closed historical context; no mutation planned. |
| #57515 | keep_closed | skipped | independent | Already closed independent bug context; no mutation planned. |
| #67417 | keep_related | planned | related | Related backup-create reliability bug; leave open outside this dedupe closeout. |

## Needs Human

- none
