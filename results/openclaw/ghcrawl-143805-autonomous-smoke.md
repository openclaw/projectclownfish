---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143805-autonomous-smoke"
mode: "autonomous"
run_id: "24939001644"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24939001644"
head_sha: "7db1f986bd485f7b71752bc77e40097172d6b6ef"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T01:27:46.233Z"
canonical: "https://github.com/openclaw/openclaw/issues/62560"
canonical_issue: "https://github.com/openclaw/openclaw/issues/62560"
canonical_pr: null
actions_total: 13
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# ghcrawl-143805-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24939001644](https://github.com/openclaw/projectclownfish/actions/runs/24939001644)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/62560

## Summary

Selected open issue #62560 as the replacement canonical for the closed representative #61782. Planned one high-confidence duplicate close for #65153, kept #44980, #45799, and #60472 open as related-but-distinct Telegram proxy/media bugs, marked #54959 independent, and used closed issues/PRs only as evidence.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
| Applied executions | 1 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #65153 | close_duplicate | executed | duplicate | duplicate of the canonical thread |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #62560 | keep_canonical | planned | canonical | Best surviving open canonical for the fake-IP/private-IP SSRF proxy family. |
| #65153 | close_duplicate | planned | duplicate | High-confidence duplicate of the open canonical issue. |
| #44980 | keep_related | planned | related | Same Telegram media/proxy area, but a distinct transport-regression theory rather than the canonical fake-IP SSRF block. |
| #45799 | keep_related | planned | related | Related Telegram media/proxy failure, but different root cause and scope. |
| #60472 | keep_related | planned | related | Same Telegram media/proxy family, but distinct socks5 proxy handling bug. |
| #54959 | keep_independent | planned | independent | Hydrated linked PR is unrelated to the Telegram/SSRF bug family. |
| #61782 | keep_closed | skipped | superseded | Closed representative replaced by an open canonical issue. |
| #58508 | keep_closed | skipped | related | Useful historical evidence in the same security/fetch family, but no action is valid because the issue is already closed. |
| #60468 | keep_closed | skipped | duplicate | Already-closed duplicate of the open canonical issue. |
| #60483 | keep_closed | skipped | related | Historical evidence in the same symptom family; no new action because the issue is already closed. |
| #62539 | keep_closed | skipped | duplicate | Already-closed duplicate of the open canonical issue. |
| #44182 | keep_closed | skipped | related | Historical fix attempt relevant to related proxy regressions, but not the live canonical path. |
| #62312 | keep_closed | skipped | related | Historical fix attempt relevant to the same proxy/SSRF area, but not a live canonical fix. |

## Needs Human

- Open canonical #62560 remains unresolved; no open code-fix PR exists in this cluster and this job disallows fix or merge actions.
- Issues #44980, #45799, and #60472 remain open as related-but-distinct Telegram proxy/media reports and need separate maintainer triage or their own follow-up clusters.
