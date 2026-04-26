---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143793-autonomous-smoke"
mode: "autonomous"
run_id: "24943078775"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24943078775"
head_sha: "3160a4e666957ca2e0f65fdc0a4d41ba982f99b1"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-26T01:27:46.329Z"
canonical: "https://github.com/openclaw/openclaw/issues/70678"
canonical_issue: "https://github.com/openclaw/openclaw/issues/70678"
canonical_pr: null
actions_total: 15
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# ghcrawl-143793-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24943078775](https://github.com/openclaw/projectclownfish/actions/runs/24943078775)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/70678

## Summary

Using the provided preflight artifact as live GitHub state for this run, #70678 is the current canonical issue replacing closed child #62258. No other open candidate has direct duplicate evidence strong enough for instant close; they remain open as related subfamilies. Human follow-up is still required for draft PR #71466 and the compound mixed-symptom report in #66917.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #70678 | keep_canonical | planned | canonical | Open issue #70678 is the surviving canonical thread for the quiet-session 30-minute status-499 reconnect watchdog family. |
| #62258 | keep_closed | skipped | superseded | Closed representative #62258 is historical evidence only and has been superseded by open canonical issue #70678. |
| #45474 | keep_related | planned | related | Distinct inbound-delivery and 440/401 auth-loop report; keep open as related, not duplicate. |
| #46518 | keep_related | planned | related | QR-pairing silent-failure report; keep open as related. |
| #47367 | keep_related | planned | related | QR-not-showing handshake-timeout report; keep open as related. |
| #49057 | keep_related | planned | related | No-active-listener failures tied to 440/401 logout flaps; keep open as related. |
| #50684 | keep_related | planned | related | 503 reconnect-window message-loss report; keep open as related. |
| #51111 | keep_related | planned | related | QR/device_removed auth-loop report; keep open as related. |
| #61744 | keep_related | planned | related | Mixed discovery-empty and 499 reconnect symptoms; keep open as related. |
| #63410 | keep_related | planned | related | Persistent 408 timeout-loop report; keep open as related. |
| #63855 | keep_related | planned | related | Stale-socket silent-message-loss report; keep open as related. |
| #66917 | needs_human | blocked | needs_human | Compound mixed-root-cause report; not safe to collapse into the #70678 canonical thread without human split/triage. |
| #66920 | keep_related | planned | related | Group-inbound-loss-after-408-cycles report; keep open as related. |
| #70856 | keep_related | planned | related | Windows-specific 408/stall/no-active-listener report; keep open as related. |
| #71466 | needs_human | blocked | needs_human | Draft candidate fix is informative for canonical selection but not safe to use as a fixed-by path or merge recommendation in this autonomous smoke run. |

## Needs Human

- PR #71466 is draft and the provided artifact does not include the review-thread/bot-review hydration required to rely on it for fixed-by-candidate or merge decisions.
- Issue #66917 bundles multiple subfamilies (408 keepalive timeouts, 499 creds-churn, and group inbound loss) and should be split or triaged by a maintainer instead of being auto-closed.
