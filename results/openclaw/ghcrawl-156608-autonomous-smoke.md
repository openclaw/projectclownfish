---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156608-autonomous-smoke"
mode: "autonomous"
run_id: "24980238741"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24980238741"
head_sha: "40a5c7418ff46bf3e60da63dc6e2345c96900f78"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T07:02:29.305Z"
canonical: "https://github.com/openclaw/openclaw/issues/13175"
canonical_issue: "https://github.com/openclaw/openclaw/issues/13175"
canonical_pr: null
actions_total: 17
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-156608-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24980238741](https://github.com/openclaw/clownfish/actions/runs/24980238741)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/13175

## Summary

Classified the hydrated Feishu interactive-card cluster into three related subfamilies: generic/native Feishu card sending remains tracked by #13175 with #47891 as a repairable contributor PR path; inbound card parsing remains related but separate under #41609/#56795/#60380/#60383; exec approval cards remain related under #60328. No merge is recommended because the hydrated PR candidates lack clean merge preflight and several have failing checks or unresolved bot findings. One security-sensitive closed PR is quarantined only for security routing.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 17 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | validation command failed (pnpm test:serial extensions/feishu/src/outbound.test.ts): undefined ERR_PNPM_RECURSIVE_EXEC_FIRST_FAIL Command "test:serial" not found Did you mean "pnpm test:sectriage"? |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/72667 | clownfish/ghcrawl-156608-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #58298 | close_duplicate | skipped | duplicate | action status is blocked |
| #72667 | merge_canonical | blocked | fix_pr | unresolved review threads remain: https://github.com/openclaw/openclaw/pull/72667#discussion_r3145417054, https://github.com/openclaw/openclaw/pull/72667#discussion_r3145417125 |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #13175 | keep_canonical | planned | canonical | Best live canonical issue for the generic Feishu interactive card button/send capability request. |
| #41607 | keep_closed | skipped | duplicate | Already closed; closed refs must not receive close actions. |
| #41609 | keep_related | planned | related | Related Feishu interactive-card work, but not the same root cause as the canonical outgoing button/send capability issue. |
| #42218 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish cleanup scope. |
| #45936 | keep_related | planned | related | Useful related parsing work, but too broad and not merge-ready for this cluster action. |
| #47891 | keep_related | planned | related | Repairable contributor PR path for part of the canonical outgoing native-card support, but not merge-ready. |
| #48281 | keep_closed | skipped | duplicate | Already closed; closed refs must not receive close actions. |
| #56795 | keep_related | planned | related | Related inbound parsing implementation candidate, but checks/review findings block merge or fixed-by-candidate closeout. |
| #58298 | close_duplicate | blocked | duplicate | Close is blocked on the canonical fix path or fix PR because require_fix_before_close=true. |
| #58983 | keep_closed | skipped | duplicate | Already closed; closed refs must not receive close actions. |
| #60328 | keep_related | planned | related | Related exec-approval feature path, but not merge-ready and not the canonical generic button/send issue. |
| #60380 | keep_related | planned | related | Specific related inbound parsing bug; keep open until its direct PR is repaired or replaced. |
| #60383 | keep_related | planned | related | Related focused PR, but failing checks and unresolved bot finding block merge or fixed-by-candidate closeout. |
| #63170 | keep_closed | skipped | duplicate | Already closed; closed refs must not receive close actions. |
| #69860 | keep_closed | skipped | duplicate | Already closed; closed refs must not receive close actions. |
| cluster:ghcrawl-156608-autonomous-smoke | fix_needed | planned | related | A narrow repair path is needed for the outgoing Feishu native-card send capability before duplicate closeout. |
| cluster:ghcrawl-156608-autonomous-smoke | build_fix_artifact | planned |  | Create a deterministic repair artifact for the useful contributor PR path. |

## Needs Human

- none
