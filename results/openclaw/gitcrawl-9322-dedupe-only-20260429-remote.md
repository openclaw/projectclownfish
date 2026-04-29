---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-9322-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25137272917"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25137272917"
head_sha: "ca8a3303df8e547d7f06bee2c26da230fe0cdb72"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T22:33:49.226Z"
canonical: "https://github.com/openclaw/openclaw/pull/56650"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/56650"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-9322-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25137272917](https://github.com/openclaw/clownfish/actions/runs/25137272917)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/56650

## Summary

Classified open candidates only. #56650 remains the canonical open PR for the GitHub Copilot PAT auth plus non-interactive paste-token family, but it is not merge-ready and no merge/fix action is allowed by this job. #63050 is related, not a duplicate or superseding PR, because it covers the paste-token/validTypes sub-scope and should remain open for maintainer review. No close/comment/label mutations are planned; closed refs were used only as evidence.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56650 | keep_canonical | planned | canonical | Keep #56650 as canonical for the broader Copilot PAT auth cluster, but do not merge or close anything against it because relevant checks and review-bot findings are unresolved and the job disallows merge/fix actions. |
| #63050 | keep_related | planned | related | Keep #63050 open as related work rather than closing it. It is narrower and currently cleaner than #56650 for paste-token/validTypes, but it is not a replacement for the broader GitHub Copilot PAT auth canonical path. |

## Needs Human

- none
