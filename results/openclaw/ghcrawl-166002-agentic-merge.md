---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-166002-agentic-merge"
mode: "autonomous"
run_id: "24946038154"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24946038154"
head_sha: "56bccb0db44200da8fc6f4a81252127a5c0e77d5"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-04-26T02:25:42.215Z"
canonical: "https://github.com/openclaw/openclaw/issues/65184"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65184"
canonical_pr: null
actions_total: 13
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-166002-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24946038154](https://github.com/openclaw/projectclownfish/actions/runs/24946038154)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/65184

## Summary

Kept #65184 as the live canonical issue for the narrow gateway-install enable-time `openclaw-gateway.service does not exist` family, planned one safe duplicate close for #54429, left broader or platform-distinct Linux systemd reports open as related, and split #68287 out as independent. A new fix PR is still the likely path, but opening it is blocked in this artifact-only run because `target_checkout` is null and current-main behavior was not re-proven from code.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #65184 | keep_canonical | planned | canonical | Best surviving canonical for the gateway-install missing-unit failure family in this cluster. |
| #39673 | keep_related | planned | related | Same subsystem and command family, but a different still-open user-bus failure mode. |
| #42025 | keep_related | planned | related | Likely same symptom family as #65184, but the Amazon Linux environment is distinct enough to keep open as related. |
| #44070 | keep_related | planned | related | Related Linux systemd install problem with a different daemon-reload/DBus failure signature. |
| #44417 | keep_related | planned | related | Potentially overlapping helper-layer bug, but distinct reproduction and failure signature warrant keeping it open as related. |
| #54429 | close_duplicate | planned | duplicate | High-confidence duplicate of the canonical missing-unit gateway-install report. |
| #54517 | keep_related | planned | related | Same family as #65184, but it contains potentially useful diagnostic detail that should remain open. |
| #57188 | keep_closed | skipped |  | Historical evidence only; no action beyond acknowledging that the live target is already closed. |
| #63561 | keep_related | planned | related | Distinct still-open user-systemd detection problem; keep open as related. |
| #68287 | keep_independent | planned | independent | Independent node-service bug with a separate fix path. |
| #65184 | fix_needed | planned | canonical | The canonical issue still needs a focused fix path. |
| #65184 | build_fix_artifact | planned | canonical | Produce a narrow artifact for a new fix PR rather than leaving the canonical issue without an implementation path. |
| #65184 | open_fix_pr | blocked | canonical | Implementation is blocked by missing checkout and missing code-level validation against current main. |

## Needs Human

- none
