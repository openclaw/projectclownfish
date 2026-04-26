---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143811-autonomous-smoke"
mode: "autonomous"
run_id: "24943076135"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24943076135"
head_sha: "3160a4e666957ca2e0f65fdc0a4d41ba982f99b1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T01:27:46.313Z"
canonical: "https://github.com/openclaw/openclaw/pull/64713"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/64713"
actions_total: 6
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-143811-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24943076135](https://github.com/openclaw/projectclownfish/actions/runs/24943076135)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/64713

## Summary

Using the provided preflight artifact as the live GitHub snapshot for this run, the only clear surviving canonical path in hydrated first-hop scope is PR #64713. None of the three open candidates is a high-confidence duplicate of that fix path, so no close/comment/label mutations are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #29269 | keep_closed | skipped | related | Historical adjacent context only; keep closed and do not treat it as the canonical path for this cluster. |
| #54659 | keep_closed | skipped | duplicate | The representative issue is already closed as a duplicate child and remains historical evidence rather than the surviving canonical thread. |
| #64713 | keep_closed | skipped | canonical | Closed PR #64713 is the clearest surviving canonical path after #54659 was closed; it is the only hydrated fix artifact directly aligned to the scope-handling regression. |
| #67158 | keep_related | planned | related | Same provider/auth family, but a meaningfully different failure mode; leave open as related. |
| #68033 | keep_related | planned | related | Partial overlap with the canonical scope bug, but it carries additional unresolved Cloudflare/native-route behavior and should stay open as a related issue. |
| #71256 | keep_independent | planned | independent | Different provider, different auth path, and different user-visible failure; keep independent. |

## Needs Human

- none
