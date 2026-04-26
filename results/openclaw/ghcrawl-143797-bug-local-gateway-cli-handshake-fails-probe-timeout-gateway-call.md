---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143797-bug-local-gateway-cli-handshake-fails-probe-timeout-gateway-call"
mode: "plan"
run_id: "24936633679"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24936633679"
head_sha: "26aea6dfd2d7f0535f43131bbfd4c1d5d934edbb"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T01:27:46.156Z"
canonical: "#51469"
canonical_issue: "#51469"
canonical_pr: null
actions_total: 11
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-143797-bug-local-gateway-cli-handshake-fails-probe-timeout-gateway-call

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24936633679](https://github.com/openclaw/projectclownfish/actions/runs/24936633679)

Workflow conclusion: success

Worker result: planned

Canonical: #51469

## Summary

Replace closed representative #45560 with #51469 for the 2026.3.12/2026.3.13 local handshake-timeout family. Recommend duplicate closure for #45222, #46008, and #51679; keep probe-only and browser-specific reports related; note #61554 is already closed in live state; and leave the newer 2026.4.15 hang-at-handshake reports (#67985, #68642, #68944) open as related follow-up candidates rather than collapsing them into the older timeout family.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
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
| #45222 | close_duplicate | planned | duplicate | Same loopback CLI handshake failure family as #51469, with no unique remaining work beyond the broader surviving canonical. |
| #46008 | close_duplicate | planned | duplicate | Sparse devices-list variant of the established 2026.3.12/2026.3.13 local handshake-timeout regression tracked more completely in #51469. |
| #48360 | keep_related | planned | related | Related gateway handshake/probe area, but not a safe duplicate because the report explicitly says device RPC still succeeds. |
| #51357 | keep_related | planned | related | Probe-focused false-negative report in the same subsystem, but not safe to close as a duplicate of the local 2026.3.13 CLI timeout canonical. |
| #51469 | keep_canonical | planned | canonical | Best surviving open replacement for closed representative #45560 for the original 2026.3.12/2026.3.13 local handshake-timeout family. |
| #51679 | close_duplicate | planned | duplicate | Same timeout/closed-before-connect family as #51469, with less focused diagnosis and no distinct remaining scope. |
| #52336 | keep_related | planned | related | Related handshake family, but browser automation adds meaningful scope and reproduction detail, so it should stay open rather than be auto-closed against a generic CLI canonical. |
| #61554 | keep_related | planned | related | Already closed in live state; keep only as related historical evidence and do not emit another closure action. |
| #67985 | keep_related | planned | related | Same gateway handshake subsystem, but likely a newer follow-up regression rather than a safe duplicate of the older timeout canonical. |
| #68642 | keep_related | planned | related | Related handshake family, but the indefinite hang behavior suggests a different root cause and should remain open. |
| #68944 | keep_related | planned | related | Keep open as related; it is likely the best surviving report for a separate 2026.4.15 hang-at-handshake follow-up family, not a safe duplicate closure target for #51469. |

## Needs Human

- none
