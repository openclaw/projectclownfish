---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143800-autonomous-smoke"
mode: "autonomous"
run_id: "24937905618"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24937905618"
head_sha: "30ab2327f6f8b0ff0fe89a5e798b06494ef7e237"
workflow_conclusion: "success"
result_status: "executed"
published_at: "2026-04-26T01:27:46.185Z"
canonical: "https://github.com/openclaw/openclaw/issues/69594"
canonical_issue: "https://github.com/openclaw/openclaw/issues/69594"
canonical_pr: null
actions_total: 13
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-143800-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24937905618](https://github.com/openclaw/projectclownfish/actions/runs/24937905618)

Workflow conclusion: success

Worker result: executed

Canonical: https://github.com/openclaw/openclaw/issues/69594

## Summary

Selected open issue #69594 as the live canonical replacement for closed representative #41129. No close/comment/label actions were emitted and no PR/commit canonical was claimed, because the remaining candidate issues are already closed or remain distinct related subfamilies, and #64831 still needs human triage due to its broad mixed scope.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
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
| #69594 | keep_canonical | executed | canonical | Open replacement for closed representative #41129; it is the best live match for the core false-success announce-delivery symptom. |
| #41129 | keep_related | executed | related | Historical representative only; already closed, so it should remain as related history rather than the live canonical. |
| #46899 | keep_related | executed | related | Keep open as related: this is a channel-mismatch/misrouting subfamily, not a direct duplicate of the false-success/no-send path. |
| #64751 | keep_related | executed | related | Keep open as related: user-visible behavior is 'marked error after a successful run', which is adjacent to but not the same as #69594's false-success symptom. |
| #62777 | keep_related | executed | related | Keep open as related: it spans separate failureAlert and prefix-stripping bugs, so there is no safe direct-duplicate closeout path from this cluster. |
| #67602 | keep_related | executed | related | Keep open as related: this is an unsupported-channel-ID routing bug, not the same failure mode as #69594. |
| #64831 | needs_human | blocked | needs_human | Needs human: the report is broad and multi-causal, which hits the job's `broad_code_delta` / `unclear_canonical` guardrails. |
| #57491 | keep_related | executed | related | Keep as related history for the multi-channel / unknown-channel routing family; it is not the live canonical and needs no further action. |
| #57601 | keep_related | executed | related | Keep as related history for Telegram scheduled-delivery failures; the excerpt does not prove the same current false-success path as #69594, and the item is already closed. |
| #57867 | keep_related | executed | related | Keep as related history: this is an outbound-context / adapter-liveness failure, distinct from false-success/no-send. |
| #60845 | keep_related | executed | related | Keep as related history for the failureAlert subfamily; no further closeout is needed. |
| #60921 | keep_related | executed | related | Keep as related history for automatic isolated-delivery channel-resolution regressions; it is already closed. |
| #67196 | keep_related | executed | related | Keep as related history for the duplicate-announces subfamily; it is not a direct duplicate of the false-success/no-send canonical. |

## Needs Human

- #64831 bundles inconsistent cron execution, chat-triggered exec instability, approval timing, Node OOMs, and missing catch-up delivery; it needs maintainer triage or issue-splitting before any dedupe/close action.
