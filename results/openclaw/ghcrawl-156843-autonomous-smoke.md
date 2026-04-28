---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156843-autonomous-smoke"
mode: "autonomous"
run_id: "25039684300"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25039684300"
head_sha: "64dd82814bb25b764c7bfdb8aaea777eedeecd80"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-28T07:48:35.124Z"
canonical: "https://github.com/openclaw/openclaw/tree/39cecd64285e1edcc2fadf8a937cbf9c74d68e9e"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49933"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 1
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156843-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25039684300](https://github.com/openclaw/clownfish/actions/runs/25039684300)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/39cecd64285e1edcc2fadf8a937cbf9c74d68e9e

## Summary

Hydrated state shows the original direct/inline memory embedding timeout bug is already implemented on current main and the original issue/older PRs are closed. The remaining open item, #49981, is related follow-up work for remote provider batch HTTP timeouts, but it is not merge-ready because checks are failing and multiple actionable Codex/Greptile review findings remain. #49963 is security-sensitive in the artifact and is routed to central security handling only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | base branch advanced after validation and projectclownfish/repair-ghcrawl-156843-autonomous-smoke-49981 needs a fresh rebase pass: Rebasing (1/6) Rebasing (2/6) Rebasing (3/6) Rebasing (4/6) Rebasing (5/6) Rebasing (6/6) error: could not apply 335cd91778... fix(memory): bound remote embedding batch HTTP calls by configured timeout hint: Resolve all conflicts manually, mark them as resolved with hint: "git add/rm <conflicted_files>", then run "git rebase --continue". hint: You can instead skip this commit: run "git rebase --skip". hint: To abort and get back to the state before "git rebase", run "git rebase --abort". hint: Disable this message with "git config set advice.mergeConflict false" Could not apply 335cd91778... # fix(memory): bound remote embedding batch HTTP calls by configured timeout |
| execute_fix | blocked |  |  | base branch advanced after validation and projectclownfish/repair-ghcrawl-156843-autonomous-smoke-49981 needs a fresh rebase pass: Rebasing (1/6) Rebasing (2/6) Rebasing (3/6) Rebasing (4/6) Rebasing (5/6) Rebasing (6/6) error: could not apply 335cd91778... fix(memory): bound remote embedding batch HTTP calls by configured timeout hint: Resolve all conflicts manually, mark them as resolved with hint: "git add/rm <conflicted_files>", then run "git rebase --continue". hint: You can instead skip this commit: run "git rebase --skip". hint: To abort and get back to the state before "git rebase", run "git rebase --abort". hint: Disable this message with "git config set advice.mergeConflict false" Could not apply 335cd91778... # fix(memory): bound remote embedding batch HTTP calls by configured timeout |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #49933 | keep_closed | skipped | fixed_by_candidate | Already closed; retain as historical canonical issue context for the implemented direct/inline timeout fix. |
| #49937 | keep_closed | skipped | fixed_by_candidate | Already closed after the narrower main implementation superseded this branch while preserving contributor context. |
| #49960 | keep_closed | skipped | independent | Closed independent context ref; no cluster action needed. |
| #49963 | route_security | planned | security_sensitive | Security-sensitive ref is quarantined to central OpenClaw security handling; unrelated non-security #49981 remains classified separately. |
| #49981 | keep_related | planned | related | Keep open as related follow-up provider-batch timeout work and prepare a repair path rather than merging or closing. |
| cluster:ghcrawl-156843-autonomous-smoke | fix_needed | planned |  | Executor should repair the contributor branch, address bot findings, run /review and pnpm check:changed, then only merge if clean. |
| cluster:ghcrawl-156843-autonomous-smoke | build_fix_artifact | planned |  | Build an executable repair plan for the only open related candidate. |

## Needs Human

- none
