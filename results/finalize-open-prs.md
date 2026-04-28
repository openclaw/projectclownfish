# Open ProjectClownfish PR Finalizer

Generated: 2026-04-28T07:16:18.740Z

## Summary

| Metric | Count |
| --- | ---: |
| open_prs | 6 |
| ready_candidates | 0 |
| security_hold | 5 |
| needs_rebase | 5 |
| mergeability_unknown | 0 |
| needs_checks | 5 |
| needs_review | 1 |
| needs_merge_preflight | 6 |
| needs_result_backfill | 1 |

## Dispatch

Enabled: no

Status: report_only

| PR | Cluster | Job | Mode | Blockers |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Open PRs

| PR | Title | Cluster | Mergeable | Merge State | Checks | Blockers | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [#73361](https://github.com/openclaw/openclaw/pull/73361) | fix(ui): confirm button-triggered new session resets | ghcrawl-156695-autonomous-smoke | MERGEABLE | UNSTABLE | CANCELLED:1 SUCCESS:30 SKIPPED:9 IN_PROGRESS:26 FAILURE:1; blockers:27 | needs_merge_state:UNSTABLE, needs_checks:CI / build-artifacts:IN_PROGRESS; CI / checks-fast-contracts-plugins:IN_PROGRESS; CI / checks-fast-contracts-channels-a:IN_PROGRESS, needs_merge_preflight, needs_result_backfill | repair failing checks or document unrelated main flake with touched-surface proof |
| [#72664](https://github.com/openclaw/openclaw/pull/72664) | fix(qwen): allow explicit qwen3.6-plus on Coding Plan | ghcrawl-156617-autonomous-smoke | CONFLICTING | DIRTY | CANCELLED:1 SUCCESS:3 SKIPPED:2 | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_merge_preflight | route to central security triage |
| [#72621](https://github.com/openclaw/openclaw/pull/72621) | fix(whatsapp): recover stale listener after auth conflict churn | ghcrawl-156581-autonomous-smoke | CONFLICTING | DIRTY | SUCCESS:55 SKIPPED:9 FAILURE:2; blockers:2 | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-node-agentic-agents:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight | route to central security triage |
| [#72615](https://github.com/openclaw/openclaw/pull/72615) | fix(memory-wiki): route bridge CLI through gateway | ghcrawl-156579-autonomous-smoke | CONFLICTING | DIRTY | SUCCESS:55 SKIPPED:9 FAILURE:2; blockers:2 | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-node-core-runtime-shared:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight | route to central security triage |
| [#72409](https://github.com/openclaw/openclaw/pull/72409) | fix(plugins): suppress false duplicate-id warnings across origins | ghcrawl-207039-agentic-merge | CONFLICTING | DIRTY | SUCCESS:54 SKIPPED:9 FAILURE:3; blockers:3 | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-fast-bundled:FAILURE; CI / checks-node-agentic-plugins:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight | route to central security triage |
| [#72326](https://github.com/openclaw/openclaw/pull/72326) | fix(cron): infer session agentId when omitted | ghcrawl-165998-agentic-merge | CONFLICTING | DIRTY | SUCCESS:56 SKIPPED:9 FAILURE:2; blockers:2 | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-node-agentic-agents:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight | route to central security triage |
