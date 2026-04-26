---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-166005-agentic-merge"
mode: "autonomous"
run_id: "24946289037"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24946289037"
head_sha: "ee69c4d548d49371436383ab0781ed7138b9e5c0"
workflow_conclusion: "failure"
result_status: "needs_human"
published_at: "2026-04-26T02:44:31.721Z"
canonical: "https://github.com/openclaw/openclaw/issues/37634"
canonical_issue: "https://github.com/openclaw/openclaw/issues/37634"
canonical_pr: null
actions_total: 12
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-166005-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24946289037](https://github.com/openclaw/projectclownfish/actions/runs/24946289037)

Workflow conclusion: failure

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/37634

## Summary

Split the over-broad cluster into two families. #37634 remains the best live non-security canonical issue for the `workspaceAccess: "none"` writable-workspace regression and still needs a fresh credited fix PR. #31331 stays separate as the Docker-outside-of-Docker bind-source bug. Because linked PR #31457 is marked security-sensitive in the hydrated artifact, this run stays non-mutating and routes that DOOD fix path to central OpenClaw security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| #37634 | keep_canonical | planned | canonical | Best live canonical for the non-security `workspaceAccess: "none"` writable-workspace regression. |
| #37634 | fix_needed | planned | canonical | The bug still appears real on current main and needs a fresh fix path. |
| #37634 | build_fix_artifact | planned | canonical | Prepare a fresh, narrow replacement fix plan that preserves contributor credit. |
| #46026 | keep_related | planned | duplicate | Clear duplicate of #37634, but left non-mutating in this run because of the linked security-sensitive item. |
| #36525 | keep_related | planned | related | Broader product/semantics request in the same area, not the same bug as #37634. |
| #65316 | keep_related | planned | related | Related follow-up about capability gating and user-visible tool exposure. |
| #31331 | keep_independent | planned | independent | Separate live canonical for the Docker-outside-of-Docker bind-source family; do not dedupe it into #37634. |
| #31457 | needs_human | planned | needs_human | Security boundary: this linked PR is out of ProjectClownfish scope and blocks autonomous handling of the DOOD fix path. |
| #59613 | keep_related | planned | related | Keep open until maintainers manually split it against #31331 versus #37634. |
| #44077 | keep_independent | planned | independent | Distinct file-permission regression; not part of this dedupe family. |
| #57230 | keep_closed | skipped | independent | Already closed; no ProjectClownfish close action is valid. |
| #59063 | keep_closed | skipped | independent | Already closed; no ProjectClownfish close action is valid. |

## Needs Human

- Hydrated state contradicts the seed job by marking linked PR #31457 security-sensitive. Route the separate #31331 Docker-outside-of-Docker fix path through central OpenClaw security triage before any ProjectClownfish mutation is considered there.
