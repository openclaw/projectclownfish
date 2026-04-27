---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156586-autonomous-smoke"
mode: "autonomous"
run_id: "24978145396"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24978145396"
head_sha: "e8d437d9978c397d8d3fb39c23597d4e5c1d98bf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T05:51:32.627Z"
canonical: "https://github.com/openclaw/openclaw/issues/46647"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46647"
canonical_pr: null
actions_total: 20
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156586-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24978145396](https://github.com/openclaw/clownfish/actions/runs/24978145396)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/46647

## Summary

Representative #47362 is already closed and obsolete. The current Slack canonical path is open issue #46647, which still describes a distinct final-edit Slack blocks delivery bug not covered by #47362. Security-sensitive open refs #45062, #63940, and linked #8813 are quarantined only; unrelated prompt PRs are kept open as independent work. No merge or close actions are merge-ready because required Codex /review merge preflight is missing and several PRs have unresolved bot/check blockers.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 20 |
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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/72626 | clownfish/ghcrawl-156586-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72626 | merge_canonical | blocked | fix_pr | mergeable state is CONFLICTING |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #46647 | keep_canonical | planned | canonical | Use #46647 as the live Slack canonical issue because the job representative is closed and obsolete. |
| cluster:ghcrawl-156586-autonomous-smoke | fix_needed | planned | canonical | A narrow credited replacement fix is needed for #46647 before any related closeout. |
| cluster:ghcrawl-156586-autonomous-smoke | build_fix_artifact | planned | canonical | Prepare a narrow Slack delivery fix artifact for the deterministic ProjectClownfish fix executor. |
| #45062 | route_security | planned | security_sensitive | Quarantine this exact PR to central OpenClaw security handling; do not mutate through ProjectClownfish. |
| #63940 | route_security | planned | security_sensitive | Quarantine this exact PR to central OpenClaw security handling; do not mutate through ProjectClownfish. |
| #8813 | route_security | planned | security_sensitive | Quarantine this exact linked issue to central OpenClaw security handling; keep unrelated non-security classification moving. |
| #14432 | keep_independent | planned | independent | Separate prompt-guidance subfamily; leave open for its own merge path. |
| #52727 | keep_independent | planned | independent | Independent prompt-policy change with failing checks; not eligible for merge or closeout here. |
| #57247 | keep_independent | planned | independent | Independent prompt feature with unresolved bot/check blockers; leave open. |
| #65777 | keep_independent | planned | independent | Independent prompt fix; keep open for its own merge-preflight path. |
| #70605 | keep_independent | planned | independent | Independent context-sanitization PR; keep open and do not merge in this cluster pass. |
| #47362 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #56951 | keep_closed | skipped | related | Already closed; no close action may be emitted. |
| #56955 | keep_closed | skipped | superseded | Already closed; preserve as credit/evidence for the replacement fix artifact. |
| #60017 | keep_closed | skipped | independent | Already closed and independent. |
| #14310 | keep_closed | skipped | independent | Closed historical context only. |
| #32466 | keep_closed | skipped | independent | Closed historical context only. |
| #10841 | keep_closed | skipped | security_sensitive | Closed security-sensitive context; no ProjectClownfish mutation. |
| #62953 | keep_closed | skipped | security_sensitive | Closed security-sensitive context; no ProjectClownfish mutation. |
| #47668 | keep_independent | planned | independent | Independent linked issue; leave open for the #70605 subfamily. |

## Needs Human

- none
