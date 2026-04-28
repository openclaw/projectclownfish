# Open ProjectClownfish PR Finalizer

Generated: 2026-04-28T05:43:59.276Z

## Summary

| Metric | Count |
| --- | ---: |
| open_prs | 5 |
| ready_candidates | 0 |
| security_hold | 5 |
| needs_rebase | 5 |
| mergeability_unknown | 0 |
| needs_checks | 4 |
| needs_review | 1 |
| needs_merge_preflight | 5 |
| needs_result_backfill | 0 |

## Dispatch

Enabled: yes

Status: dry_run

| PR | Cluster | Job | Mode | Blockers |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Open PRs

| PR | Title | Cluster | Mergeable | Merge State | Checks | Blockers | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [#72664](https://github.com/openclaw/openclaw/pull/72664) | fix(qwen): allow explicit qwen3.6-plus on Coding Plan | ghcrawl-156617-autonomous-smoke | CONFLICTING | DIRTY | CANCELLED:1 SUCCESS:3 SKIPPED:2 | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_merge_preflight | route to central security triage |
| [#72621](https://github.com/openclaw/openclaw/pull/72621) | fix(whatsapp): recover stale listener after auth conflict churn | ghcrawl-156581-autonomous-smoke | CONFLICTING | DIRTY | SUCCESS:55 SKIPPED:9 FAILURE:2; blockers:2 | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-node-agentic-agents:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight | route to central security triage |
| [#72615](https://github.com/openclaw/openclaw/pull/72615) | fix(memory-wiki): route bridge CLI through gateway | ghcrawl-156579-autonomous-smoke | CONFLICTING | DIRTY | SUCCESS:55 SKIPPED:9 FAILURE:2; blockers:2 | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-node-core-runtime-shared:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight | route to central security triage |
| [#72409](https://github.com/openclaw/openclaw/pull/72409) | fix(plugins): suppress false duplicate-id warnings across origins | ghcrawl-207039-agentic-merge | CONFLICTING | DIRTY | SUCCESS:54 SKIPPED:9 FAILURE:3; blockers:3 | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-fast-bundled:FAILURE; CI / checks-node-agentic-plugins:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight | route to central security triage |
| [#72326](https://github.com/openclaw/openclaw/pull/72326) | fix(cron): infer session agentId when omitted | ghcrawl-165998-agentic-merge | CONFLICTING | DIRTY | SUCCESS:56 SKIPPED:9 FAILURE:2; blockers:2 | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-node-agentic-agents:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight | route to central security triage |
