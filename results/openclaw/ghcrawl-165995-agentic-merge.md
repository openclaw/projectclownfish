---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165995-agentic-merge"
mode: "autonomous"
run_id: "24977058676"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24977058676"
head_sha: "50a0b51ad3e3cfffa74443fc81bf0c842f9747bf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T04:51:05.206Z"
canonical: "https://github.com/openclaw/openclaw/issues/63120"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63120"
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 5
needs_human_count: 0
---

# ghcrawl-165995-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24977058676](https://github.com/openclaw/clownfish/actions/runs/24977058676)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/63120

## Summary

Hydrated preflight shows the original representative #59390 is already closed. The best live non-security canonical issue is #63120 for the sessions_spawn runtime=subagent ACP-only streamTo failure. Open duplicates are blocked from closure by require_fix_before_close until a non-quarantined fix PR is opened or merged. Security-sensitive PRs #63121 and #72331 are routed to central security handling only. A narrow credited replacement fix artifact is needed because useful prior PRs are closed/uneditable and the only open replacement PR is quarantined.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 5 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | skipped |  |  | fix artifact scope itself contains security-sensitive signals |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #43556 | close_duplicate | skipped | duplicate | action status is blocked |
| #56326 | close_duplicate | skipped | duplicate | action status is blocked |
| #61724 | close_duplicate | skipped | duplicate | action status is blocked |
| #64714 | close_duplicate | skipped | duplicate | action status is blocked |
| #67248 | close_duplicate | skipped | duplicate | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #63120 | keep_canonical | planned | canonical | Best live non-security canonical issue for the exact sessions_spawn runtime=subagent plus ACP-only streamTo failure. |
| #43556 | close_duplicate | blocked | duplicate | Duplicate close is blocked on the canonical fix path or replacement fix PR. |
| #56326 | close_duplicate | blocked | duplicate | Duplicate close is blocked on the canonical fix path or replacement fix PR. |
| #61724 | close_duplicate | blocked | duplicate | Duplicate close is blocked on the canonical fix path or replacement fix PR. |
| #64714 | close_duplicate | blocked | duplicate | Duplicate close is blocked on the canonical fix path or replacement fix PR. |
| #67248 | close_duplicate | blocked | duplicate | Duplicate close is blocked on the canonical fix path or replacement fix PR. |
| #59225 | keep_related | planned | related | Related schema-filtering feature request; not a true duplicate of the narrow streamTo execution failure. |
| #63121 | route_security | planned | security_sensitive | Security-sensitive item must be routed to central OpenClaw security handling without ProjectClownfish mutation. |
| #72331 | route_security | planned | security_sensitive | Security-sensitive item must be routed to central OpenClaw security handling without ProjectClownfish mutation. |
| cluster:ghcrawl-165995-agentic-merge | fix_needed | planned |  | No viable non-security canonical PR exists; a narrow credited replacement fix PR is needed before duplicate closeout. |
| cluster:ghcrawl-165995-agentic-merge | build_fix_artifact | planned |  | Needed to unblock require_fix_before_close duplicate closeout with a non-quarantined ProjectClownfish fix path. |
| #47115 | keep_closed | skipped | superseded | Closed historical PR; no mutation. |
| #53016 | keep_closed | skipped | duplicate | Already closed duplicate; no mutation. |
| #53370 | keep_closed | skipped | duplicate | Already closed duplicate/superseded issue; no mutation. |
| #55483 | keep_closed | skipped | superseded | Closed historical PR; no mutation. |
| #56193 | keep_closed | skipped | duplicate | Already closed duplicate/superseded issue; no mutation. |
| #59390 | keep_closed | skipped | duplicate | Representative is closed; no mutation. |
| #60965 | keep_closed | skipped | duplicate | Already closed duplicate/superseded issue; no mutation. |
| #65282 | keep_closed | skipped | superseded | Closed useful source PR for replacement credit; no mutation. |
| #66719 | keep_closed | skipped | related | Closed related issue; no mutation. |
| #68275 | keep_closed | skipped | duplicate | Already closed duplicate/superseded issue; no mutation. |
| #68397 | keep_closed | skipped | superseded | Closed useful source PR for replacement credit; no mutation. |
| #69166 | keep_closed | skipped | duplicate | Already closed duplicate/superseded issue; no mutation. |
| #69170 | keep_closed | skipped | superseded | Closed source PR; no mutation. |
| #69203 | keep_closed | skipped | superseded | Closed source PR; no mutation. |

## Needs Human

- none
