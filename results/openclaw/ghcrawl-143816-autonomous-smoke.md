---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143816-autonomous-smoke"
mode: "autonomous"
run_id: "24939009401"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24939009401"
head_sha: "7db1f986bd485f7b71752bc77e40097172d6b6ef"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-26T01:27:46.293Z"
canonical: "https://github.com/openclaw/openclaw/issues/33185"
canonical_issue: "https://github.com/openclaw/openclaw/issues/33185"
canonical_pr: null
actions_total: 12
apply_executed: 4
apply_blocked: 0
apply_skipped: 0
needs_human_count: 4
---

# ghcrawl-143816-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24939009401](https://github.com/openclaw/projectclownfish/actions/runs/24939009401)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/33185

## Summary

Canonical live issue is #33185. High-confidence duplicate closeouts are available for #70180, #65832, #66758, and #67406. The overlapping open PRs #51150 and #71458 cannot be safely canonicalized from the provided artifact because required live review-thread/bot-comment hydration is missing, and the MiniMax/Ollama/provider-prefix reports remain open as related follow-up work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
| Applied executions | 4 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 4 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #70180 | close_duplicate | executed | duplicate | duplicate of the canonical thread |
| #65832 | close_duplicate | executed | duplicate | duplicate of the canonical thread |
| #66758 | close_duplicate | executed | duplicate | duplicate of the canonical thread |
| #67406 | close_duplicate | executed | duplicate | duplicate of the canonical thread |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #33185 | keep_canonical | planned | canonical | Best surviving live issue for the configured-provider Unknown model regression. |
| #70180 | close_duplicate | planned | duplicate | Representative issue is no longer the best live canonical; it is the child duplicate of #33185. |
| #65832 | close_duplicate | planned | duplicate | Exact duplicate of the canonical custom-provider imageModel resolution bug. |
| #66758 | close_duplicate | planned | duplicate | Same configured-provider Unknown model regression, with Ollama-specific reproduction detail. |
| #67406 | close_duplicate | planned | duplicate | Same configured-provider Unknown model regression, specialized to Ollama cloud entries. |
| #38816 | keep_related | planned | related | Same symptom family, but the root cause appears to be a separate bare-model/provider-prefix routing bug. |
| #48234 | keep_related | planned | related | Related image-tool regression, but not the same root cause. |
| #64111 | keep_related | planned | related | Ollama API-registration/contract issue is related but distinct from configured-provider Unknown model resolution. |
| #65431 | keep_related | planned | related | MiniMax image-capability routing failure should stay open as related work. |
| #69648 | keep_related | planned | related | Related MiniMax-specific regression, not a safe duplicate of #33185. |
| #51150 | needs_human | blocked | needs_human | Useful contributor PR cannot be safely superseded, merged, or closed without live review-thread hydration and a maintainer combine-vs-supersede decision against #71458. |
| #71458 | needs_human | blocked | needs_human | Likely maintainer fix path, but draft state, incomplete validation in the artifact, and missing review-thread hydration make canonical PR selection human-gated. |

## Needs Human

- Candidate PR review threads and bot comments for #51150 and #71458 were not present in the provided artifact, and no supplemental gh hydration was available in this run; PR canonicalization and any supersede/merge decision remain human-gated.
- Open PRs #51150 and #71458 overlap on src/media-understanding/image.ts and src/media-understanding/image.test.ts; maintainer review is needed to decide combine vs supersede while preserving contributor credit.
- Issue #38816 may be a separate bare-model/provider-prefix routing bug rather than the configured-provider resolution bug tracked by #33185, so it should stay open pending human review.
- MiniMax issues #48234, #65431, and #69648 plus the Ollama API-registration issue #64111 appear related but not safely dedupable to #33185 from the provided evidence; they are likely follow-up clusters.
