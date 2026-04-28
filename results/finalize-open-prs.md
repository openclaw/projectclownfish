# Open ProjectClownfish PR Finalizer

Generated: 2026-04-28T07:40:54.098Z

## Summary

| Metric | Count |
| --- | ---: |
| open_prs | 12 |
| ready_candidates | 0 |
| security_hold | 5 |
| needs_rebase | 10 |
| mergeability_unknown | 0 |
| needs_checks | 11 |
| needs_review | 6 |
| needs_merge_preflight | 12 |
| needs_result_backfill | 7 |

## Dispatch

Enabled: no

Status: report_only

| PR | Cluster | Job | Mode | Blockers |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Open PRs

| PR | Title | Cluster | Mergeable | Merge State | Checks | Blockers | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [#73380](https://github.com/openclaw/openclaw/pull/73380) | fix(memory): keep pre-compaction flush prompt out of user transcript | ghcrawl-156869-autonomous-smoke | MERGEABLE | UNSTABLE | CANCELLED:4 SUCCESS:62 SKIPPED:8 IN_PROGRESS:1; blockers:1 | needs_merge_state:UNSTABLE, needs_checks:CI / checks-node-core-fast-support:IN_PROGRESS, needs_merge_preflight, needs_result_backfill | repair failing checks or document unrelated main flake with touched-surface proof |
| [#73379](https://github.com/openclaw/openclaw/pull/73379) | fix(cron): support Telegram thread IDs in cron add/edit | ghcrawl-156855-autonomous-smoke | MERGEABLE | UNSTABLE | CANCELLED:4 SUCCESS:63 SKIPPED:9 IN_PROGRESS:1 FAILURE:1; blockers:2 | needs_merge_state:UNSTABLE, unresolved review threads remain, needs_checks:CI / checks-node-core-fast-support:IN_PROGRESS; CI / checks-node-auto-reply-reply-commands-state-routing:FAILURE, needs_merge_preflight, needs_result_backfill | repair failing checks or document unrelated main flake with touched-surface proof |
| [#73374](https://github.com/openclaw/openclaw/pull/73374) | fix: retry same model on transient fallback errors | ghcrawl-156725-autonomous-smoke | CONFLICTING | DIRTY | FAILURE:5 CANCELLED:1 SUCCESS:62 SKIPPED:9; blockers:5 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:Parity gate / Run the OpenAI / Opus 4.6 parity gate against the qa-lab mock:FAILURE; CI / checks-node-core-fast-support:FAILURE; CI / checks-node-agentic-commands:FAILURE, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73368](https://github.com/openclaw/openclaw/pull/73368) | fix(ui): clear webchat pending state only for completed active run | ghcrawl-156728-autonomous-smoke | CONFLICTING | DIRTY | CANCELLED:1 SUCCESS:61 SKIPPED:9 FAILURE:4; blockers:4 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:CI / checks-node-auto-reply-reply-commands-state-routing:FAILURE; CI / check-test-types:FAILURE; CI / check:FAILURE, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73365](https://github.com/openclaw/openclaw/pull/73365) | fix: allow steer messages during active non-streaming runs | ghcrawl-156681-autonomous-smoke | CONFLICTING | DIRTY | FAILURE:5 CANCELLED:3 SUCCESS:61 SKIPPED:9; blockers:5 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:Parity gate / Run the OpenAI / Opus 4.6 parity gate against the qa-lab mock:FAILURE; CI / checks-node-auto-reply-reply-commands-state-routing:FAILURE; CI / check-test-types:FAILURE, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73362](https://github.com/openclaw/openclaw/pull/73362) | Fix default sandbox image fallback for python3-dependent mutations | ghcrawl-156718-autonomous-smoke | CONFLICTING | DIRTY | FAILURE:5 CANCELLED:1 SUCCESS:61 SKIPPED:9; blockers:5 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Parity gate / Run the OpenAI / Opus 4.6 parity gate against the qa-lab mock:FAILURE; CI / checks-node-auto-reply-reply-commands-state-routing:FAILURE; CI / check-test-types:FAILURE, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73361](https://github.com/openclaw/openclaw/pull/73361) | fix(ui): confirm button-triggered new session resets | ghcrawl-156695-autonomous-smoke | CONFLICTING | DIRTY | CANCELLED:1 SUCCESS:61 SKIPPED:9 FAILURE:4; blockers:4 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:CI / checks-node-auto-reply-reply-commands-state-routing:FAILURE; CI / check-test-types:FAILURE; CI / check:FAILURE, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#72664](https://github.com/openclaw/openclaw/pull/72664) | fix(qwen): allow explicit qwen3.6-plus on Coding Plan | ghcrawl-156617-autonomous-smoke | CONFLICTING | DIRTY | CANCELLED:1 SUCCESS:3 SKIPPED:2 | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_merge_preflight | route to central security triage |
| [#72621](https://github.com/openclaw/openclaw/pull/72621) | fix(whatsapp): recover stale listener after auth conflict churn | ghcrawl-156581-autonomous-smoke | CONFLICTING | DIRTY | SUCCESS:55 SKIPPED:9 FAILURE:2; blockers:2 | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-node-agentic-agents:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight | route to central security triage |
| [#72615](https://github.com/openclaw/openclaw/pull/72615) | fix(memory-wiki): route bridge CLI through gateway | ghcrawl-156579-autonomous-smoke | CONFLICTING | DIRTY | SUCCESS:55 SKIPPED:9 FAILURE:2; blockers:2 | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-node-core-runtime-shared:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight | route to central security triage |
| [#72409](https://github.com/openclaw/openclaw/pull/72409) | fix(plugins): suppress false duplicate-id warnings across origins | ghcrawl-207039-agentic-merge | CONFLICTING | DIRTY | SUCCESS:54 SKIPPED:9 FAILURE:3; blockers:3 | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-fast-bundled:FAILURE; CI / checks-node-agentic-plugins:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight | route to central security triage |
| [#72326](https://github.com/openclaw/openclaw/pull/72326) | fix(cron): infer session agentId when omitted | ghcrawl-165998-agentic-merge | CONFLICTING | DIRTY | SUCCESS:56 SKIPPED:9 FAILURE:2; blockers:2 | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-node-agentic-agents:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight | route to central security triage |
