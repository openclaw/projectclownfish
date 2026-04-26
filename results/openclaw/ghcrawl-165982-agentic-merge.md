---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165982-agentic-merge"
mode: "autonomous"
run_id: "24946284153"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24946284153"
head_sha: "ee69c4d548d49371436383ab0781ed7138b9e5c0"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-04-26T02:46:04.434Z"
canonical: "https://github.com/openclaw/openclaw/issues/45222"
canonical_issue: "https://github.com/openclaw/openclaw/issues/45222"
canonical_pr: null
actions_total: 38
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# ghcrawl-165982-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24946284153](https://github.com/openclaw/projectclownfish/actions/runs/24946284153)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/45222

## Summary

Kept #45222 as the live canonical for the loopback WebSocket handshake regression, left other gateway/health/restart reports open as related or independent subfamilies, routed security-flagged PRs #47222 and #63651 to central OpenClaw security handling, and produced a narrow fix artifact because later handshake reports remain open and no viable canonical PR is available.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 38 |
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
| #45222 | keep_canonical | planned | canonical | #45222 remains the best live canonical for the loopback WebSocket handshake family. |
| #45222 | fix_needed | planned | canonical | The handshake regression still appears real on current main and needs a new narrow fix path. |
| #45222 | build_fix_artifact | planned | canonical | Build a new narrow fix artifact because no writable checkout or viable canonical PR is available in this worker. |
| #44354 | keep_independent | planned | independent | Do not dedupe this into #45222. |
| #44518 | keep_independent | planned | independent | This older launchd restart PR is not a safe canonical path for the current cluster and should stay out of the #45222 dedupe track. |
| #46494 | keep_independent | planned | independent | Keep this open as a separate health-state family. |
| #46869 | keep_independent | planned | independent | Separate Windows restart work should remain open outside the #45222 handshake dedupe path. |
| #47222 | needs_human | blocked | needs_human | Route #47222 and its linked systemd SIGTERM issue family to central OpenClaw security handling; do not merge, close, comment, or relabel from this worker. |
| #48360 | keep_related | planned | related | Same symptom family as #45222, but keep open because duplicate closure would rely on title-level matching. |
| #48766 | keep_independent | planned | independent | Root cause is too broad to dedupe into the handshake canonical. |
| #49180 | keep_related | planned | related | Related false-negative reporting path, but not safe to auto-close from the compact artifact. |
| #49758 | keep_related | planned | related | Keep open because the report crosses handshake and stale channel-state paths. |
| #51016 | keep_related | planned | related | Same handshake/probe symptom family, but keep open because the compact artifact does not justify duplicate closure. |
| #51357 | keep_related | planned | related | Keep related to the canonical handshake tracker. |
| #51469 | keep_related | planned | related | Unique reproduction detail makes this related, not safely closable as a duplicate. |
| #51679 | keep_related | planned | related | Same regression family, but keep open because the compact artifact is not enough for duplicate closeout. |
| #52336 | keep_related | planned | related | Keep related; this is a later still-open manifestation of the handshake/closed false-negative family. |
| #52487 | keep_independent | planned | independent | Keep this separate Windows restart PR open outside the #45222 dedupe path. |
| #53168 | keep_related | planned | related | Related to the handshake family, but not safely closable as a pure duplicate. |
| #53877 | keep_related | planned | related | Unique platform detail makes this related, not a safe duplicate closeout. |
| #56284 | keep_independent | planned | independent | Keep this separate Windows restart/state-loss family open. |
| #57967 | keep_related | planned | fixed_by_candidate | Keep the issue open behind candidate PR #57971 until that branch is review-clean and landed. |
| #57971 | keep_independent | planned | independent | Keep this PR open outside the #45222 handshake dedupe path; no merge recommendation from this pass. |
| #59287 | keep_related | planned | related | Keep this open with the Telegram health-state family; the compact artifact is not enough for duplicate closure. |
| #59333 | keep_closed | skipped |  | Historical evidence only; no ProjectClownfish close action is valid. |
| #61554 | keep_closed | skipped |  | Historical evidence only; no ProjectClownfish close action is valid. |
| #63491 | keep_independent | planned | independent | Keep this Windows restart-health issue open outside the #45222 handshake family. |
| #63651 | needs_human | blocked | needs_human | Route #63651 to central OpenClaw security handling. |
| #64201 | keep_independent | planned | independent | Keep this crash-loop report open as an independent issue. |
| #64476 | keep_related | planned | related | Related transport symptom family, but unique platform/version detail blocks duplicate closure. |
| #66735 | keep_independent | planned | independent | Keep this separate systemd restart PR open outside the #45222 dedupe path. |
| #67416 | keep_closed | skipped |  | Historical evidence only; no ProjectClownfish close action is valid. |
| #67544 | keep_closed | skipped |  | Historical evidence only; no ProjectClownfish close action is valid. |
| #68493 | keep_independent | planned | independent | Keep this issue independent from the #45222 handshake tracker. |
| #68853 | keep_independent | planned | independent | Keep open outside the handshake cluster; no merge recommendation from this pass. |
| #68944 | keep_related | planned | related | Keep related to the canonical handshake tracker. |
| #69056 | keep_independent | planned | independent | Keep this separate Windows restart PR open outside the #45222 dedupe path. |
| #69057 | keep_related | planned | fixed_by_candidate | Keep the issue open behind candidate PR #69056 until that PR is fully review-cleared and landed. |

## Needs Human

- Security boundary: #47222 and its linked issue family must route to central OpenClaw security handling because the preflight artifact marks #47222 security_sensitive and includes security-analysis review.
- Security boundary: #63651 must route to central OpenClaw security handling because the preflight artifact marks the PR security_sensitive.
