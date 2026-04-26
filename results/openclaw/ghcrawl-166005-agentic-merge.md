---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-166005-agentic-merge"
mode: "autonomous"
run_id: "24947180910"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24947180910"
head_sha: "cc7e2b9deb213893d18c0bcca95afccd476be4c1"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-26T03:33:55.727Z"
canonical: "https://github.com/openclaw/openclaw/issues/37634"
canonical_issue: "https://github.com/openclaw/openclaw/issues/37634"
canonical_pr: null
actions_total: 10
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-166005-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24947180910](https://github.com/openclaw/projectclownfish/actions/runs/24947180910)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/37634

## Summary

Representative #37634 remains the best live canonical for the `workspaceAccess: "none"` read-only sandbox-workspace bug, while #31331 remains a separate live canonical for the Docker bind-source remap family. #46026 is a high-confidence duplicate of #37634, but this run should not schedule close or fix actions because linked PR #31457 is flagged security-sensitive and must route to central OpenClaw security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #37634 | keep_canonical | planned | canonical | Best live canonical for the `workspaceAccess: "none"` writable-workspace regression. |
| #31331 | keep_canonical | planned | canonical | Separate live canonical subfamily: Docker bind-source remapping is related to this cluster but not a duplicate of #37634. |
| #36525 | keep_related | planned | related | Related design-level follow-up, not a duplicate closeout target. |
| #44077 | keep_related | planned | related | Related sandbox file-permission regression with a different root cause. |
| #46026 | keep_related | planned | duplicate | High-confidence duplicate of #37634, but kept non-mutating because the job requires a concrete fix path before duplicate closeout and this cluster includes security-routed PR #31457. |
| #59613 | keep_related | planned | related | Related Docker sandbox write-failure report; not safe to collapse automatically into one canonical thread. |
| #65316 | keep_related | planned | related | Related higher-level tool-exposure bug, not a pure duplicate of one existing issue. |
| #57230 | keep_closed | skipped | related | Already closed in live state; historical evidence only. |
| #59063 | keep_closed | skipped | related | Already closed in live state; historical evidence only. |
| #31457 | needs_human | planned | needs_human | Security boundary: this linked PR is out of scope for ProjectClownfish and blocks automatic mutation recommendations for the affected subfamily. |

## Needs Human

- Linked PR #31457 is marked `security_sensitive: true` and requested `secops`; ProjectClownfish must route that Docker bind-remap subfamily to central OpenClaw security handling and avoid automatic close, fix, or merge actions that depend on it.
