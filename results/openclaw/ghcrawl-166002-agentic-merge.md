---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-166002-agentic-merge"
mode: "autonomous"
run_id: "24946287824"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24946287824"
head_sha: "ee69c4d548d49371436383ab0781ed7138b9e5c0"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-04-26T02:41:35.290Z"
canonical: "https://github.com/openclaw/openclaw/issues/65184"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65184"
canonical_pr: null
actions_total: 14
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-166002-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24946287824](https://github.com/openclaw/projectclownfish/actions/runs/24946287824)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/65184

## Summary

Kept #65184 as the live canonical issue for the gateway missing-unit enable path, left the remaining live refs open as related except independent node-install bug #68287 and already-closed #57188, prepared a narrow fix artifact while leaving `open_fix_pr` blocked by missing checkout/current-main revalidation, and flagged linked ref #11805 for central security triage because a hydrated comment excerpt exposes an `OPENCLAW_GATEWAY_TOKEN`.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #11805 | needs_human | blocked | needs_human | Route linked ref #11805 to central security triage and do not let ProjectClownfish mutate it. |
| #39673 | keep_related | planned | related | Same Linux/systemd gateway-install family, but a materially different scope and root cause than the canonical missing-unit enable path. |
| #42025 | keep_related | planned | related | Likely adjacent to the canonical bug, but the platform/repro details are distinct enough that instant duplicate closure would be unsafe. |
| #44070 | keep_related | planned | related | Related systemd-user install failure, but a different failure point than the canonical issue. |
| #44417 | keep_related | planned | related | This is a false-unavailable/user-targeting subfamily, not the same narrowed missing-unit enable path as #65184. |
| #54429 | keep_related | planned | related | Symptom overlap is real, but the artifact does not prove this is the same root cause with no unique remaining work. |
| #54517 | keep_related | planned | related | Related Linux/systemd targeting problem, but not a safe duplicate of the canonical missing-unit enable issue. |
| #57188 | keep_closed | skipped |  | Historical evidence only; already-closed items must not receive new close actions. |
| #63561 | keep_related | planned | related | Related systemd-user detection failure, but not the same root cause/scope as the canonical issue. |
| #65184 | keep_canonical | planned | canonical | Best live canonical for the narrowed gateway user-service missing-unit enable path. |
| #68287 | keep_independent | planned | independent | Independent bug that deserves its own follow-up cluster rather than dedupe against #65184. |
| #65184 | fix_needed | planned | canonical | The canonical bug still lacks a viable PR, so the next safe step is a narrow fix plan rather than closure. |
| #65184 | build_fix_artifact | planned | canonical | Prepared a narrow fix artifact centered on the Linux user-service activation/reload path for #65184. |
| #65184 | open_fix_pr | blocked | canonical | A fix PR should be opened from the generated artifact, but implementation is blocked in this run because the target repository checkout is unavailable and current-main behavior was not revalidated from source. |

## Needs Human

- Linked ref #11805 contains a hydrated comment excerpt that exposes an `OPENCLAW_GATEWAY_TOKEN`; route that item to central OpenClaw security triage and keep it out of ProjectClownfish mutation.
