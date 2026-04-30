---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2955-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142253912"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142253912"
head_sha: "4685439e0115b00b3c3895ee6c31b79d8ae00252"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-30T01:17:07.612Z"
canonical: "https://github.com/openclaw/openclaw/issues/46748"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46748"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-2955-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142253912](https://github.com/openclaw/clownfish/actions/runs/25142253912)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/46748

## Summary

Classified the live hydrated cluster without GitHub mutation. The representative PR #46782 is quarantined as security-sensitive because its diff includes an unrelated security-observability regression. The canonical non-security tracker is the open linked issue #46748. The remaining non-security implementation PR #47365 targets the same issue but needs maintainer judgment before repair or merge because it has failing checks and an unresolved CLI backward-compatibility decision around the released --local-time flag.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #46748 | keep_canonical | planned | canonical | Keep the open issue as the canonical non-security tracker for the log timestamp default behavior. |
| #46782 | route_security | planned | security_sensitive | Security-sensitive evidence is scoped to #46782, so it should be routed to central OpenClaw security handling and not used as the canonical automation path. |
| #47365 | needs_human | blocked | needs_human | A maintainer needs to choose the CLI compatibility path for #47365 before it can become a repairable canonical PR or be superseded. |

## Needs Human

- #47365: decide whether the fix must preserve the released --local-time flag alongside --utc, use an explicit deprecation path, or be replaced by another implementation before any repair or merge lane proceeds.
