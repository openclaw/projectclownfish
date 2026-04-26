---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143818-autonomous-smoke"
mode: "autonomous"
run_id: "24939010877"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24939010877"
head_sha: "7db1f986bd485f7b71752bc77e40097172d6b6ef"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-26T01:27:46.301Z"
canonical: "https://github.com/openclaw/openclaw/pull/52142"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/52142"
actions_total: 12
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 3
---

# ghcrawl-143818-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24939010877](https://github.com/openclaw/projectclownfish/actions/runs/24939010877)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/52142

## Summary

Selected #52142 as the safest live canonical for the loopback handshake-timeout branch because it is the only narrow timeout PR in this cluster with a fully passing reported check set. Kept distinct auth, retry, keepalive, logging, diagnostics, and Mattermost PRs open, planned one safe supersede close for #54475 in favor of #54774, and returned needs_human because the cluster is over-broad and several overlapping timeout PRs still have failing or missing validation.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 3 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #54475 | close_superseded | blocked | superseded | closure requires canonical or duplicate_of |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #48950 | keep_related | planned | related | Same local gateway symptom family, but a distinct auth-path root cause. |
| #49751 | needs_human | blocked | needs_human | The representative timeout PR is stale, failing, and not safely collapsible from the hydrated evidence alone. |
| #51172 | keep_related | planned | related | Same loopback probe symptom family, but a different SecretRef/auth root cause. |
| #52142 | keep_canonical | planned | canonical | Safest live canonical for the loopback handshake-timeout branch. |
| #54475 | close_superseded | planned | superseded | High-confidence same-author successor PR with the same scope and stronger hydrated validation. |
| #54774 | keep_related | planned | related | Related retry-path mitigation, not a duplicate of the canonical timeout branch. |
| #56668 | keep_related | planned | related | Same gateway WebSocket area, but an idle-keepalive problem rather than a handshake-timeout problem. |
| #57621 | keep_independent | planned | independent | Different product surface and root cause; independent from this cluster. |
| #60536 | keep_related | planned | related | Same gateway/ws area, but observability-only scope rather than the canonical functional timeout fix. |
| #62060 | needs_human | blocked | needs_human | Overlapping timeout-tuning PR with missing substantive validation in the provided live-state artifact. |
| #65641 | keep_related | planned | related | Related local gateway RPC diagnostics work, not a duplicate of the canonical timeout branch. |
| #66297 | needs_human | blocked | needs_human | Broad overlapping Windows-specific retry PR with failing checks; human review required by job guardrails. |

## Needs Human

- Cluster 143818 is over-broad: the open PRs span distinct auth, timeout, retry, keepalive, logging, diagnostics, and Mattermost subproblems, so broader auto-closeout is unsafe.
- #49751, #62060, and #66297 still require human review before any deeper timeout-family consolidation because their overlap with the chosen canonical path is not fully resolved from hydrated evidence alone.
- The provided artifacts include comments counts but not the actual review-bot comment bodies for the candidate PRs, so merge-readiness or broader supersede/duplicate closure should not be inferred for the remaining open PRs.
