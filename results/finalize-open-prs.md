# Open ProjectClownfish PR Finalizer

Generated: 2026-04-28T18:30:00.803Z

## Summary

| Metric | Count |
| --- | ---: |
| open_prs | 16 |
| ready_candidates | 0 |
| security_hold | 3 |
| needs_rebase | 12 |
| mergeability_unknown | 0 |
| needs_checks | 13 |
| needs_review | 7 |
| needs_merge_preflight | 16 |
| needs_result_backfill | 12 |

## Dispatch

Enabled: no

Status: report_only

| PR | Cluster | Job | Mode | Blockers |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Open PRs

| PR | Title | Cluster | Mergeable | Merge State | Checks | Blockers | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [#73724](https://github.com/openclaw/openclaw/pull/73724) | fix(cli): avoid false local gateway unreachable on probe timeout | ghcrawl-156625-autonomous-smoke | MERGEABLE | UNSTABLE | CANCELLED:3 SKIPPED:10 SUCCESS:50 FAILURE:10; blockers:10 | security_hold, needs_merge_state:UNSTABLE, needs_checks:CI / checks-fast-bundled:FAILURE; CI / checks-node-extensions-shard-4:FAILURE; CI / checks-node-core-runtime-infra:FAILURE, needs_merge_preflight | route to central security triage |
| [#73403](https://github.com/openclaw/openclaw/pull/73403) | fix(agent): route explicit channel targets per recipient | ghcrawl-157028-autonomous-smoke | CONFLICTING | DIRTY | FAILURE:10 CANCELLED:1 SUCCESS:58 SKIPPED:9; blockers:10 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:ClawSweeper Dispatch / dispatch:FAILURE; ClawSweeper Dispatch / dispatch:FAILURE; ClawSweeper Dispatch / dispatch:FAILURE, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73402](https://github.com/openclaw/openclaw/pull/73402) | fix(tui): subscribe to live session transcript updates | ghcrawl-156978-autonomous-smoke | CONFLICTING | DIRTY | FAILURE:6 CANCELLED:4 SUCCESS:58 SKIPPED:9; blockers:6 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:ClawSweeper Dispatch / dispatch:FAILURE; ClawSweeper Dispatch / dispatch:FAILURE; ClawSweeper Dispatch / dispatch:FAILURE, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73401](https://github.com/openclaw/openclaw/pull/73401) | fix(agents): load symlinked workspace bootstrap files | ghcrawl-156975-autonomous-smoke | CONFLICTING | DIRTY | FAILURE:8 CANCELLED:2 SUCCESS:58 SKIPPED:9; blockers:8 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:ClawSweeper Dispatch / dispatch:FAILURE; ClawSweeper Dispatch / dispatch:FAILURE; ClawSweeper Dispatch / dispatch:FAILURE, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73399](https://github.com/openclaw/openclaw/pull/73399) | fix(feishu): carry forward DM fallback and topic labels | ghcrawl-156980-autonomous-smoke | CONFLICTING | DIRTY | FAILURE:8 CANCELLED:4 SUCCESS:58 SKIPPED:9; blockers:8 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:ClawSweeper Dispatch / dispatch:FAILURE; ClawSweeper Dispatch / dispatch:FAILURE; ClawSweeper Dispatch / dispatch:FAILURE, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73395](https://github.com/openclaw/openclaw/pull/73395) | fix(discord): cool down Cloudflare HTML 429 REST failures | ghcrawl-156979-autonomous-smoke | CONFLICTING | DIRTY | FAILURE:5 CANCELLED:4 SUCCESS:58 SKIPPED:9; blockers:5 | security_hold, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:ClawSweeper Dispatch / dispatch:FAILURE; ClawSweeper Dispatch / dispatch:FAILURE; ClawSweeper Dispatch / dispatch:FAILURE, needs_merge_preflight, needs_result_backfill | route to central security triage |
| [#73393](https://github.com/openclaw/openclaw/pull/73393) | feat(whatsapp): support newsletter targets in message tool | ghcrawl-156943-autonomous-smoke | CONFLICTING | DIRTY | CANCELLED:3 SUCCESS:66 SKIPPED:9 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73388](https://github.com/openclaw/openclaw/pull/73388) | Fix Trinity main-session compatibility mismatch | ghcrawl-156908-autonomous-smoke | CONFLICTING | DIRTY | CANCELLED:2 SUCCESS:63 SKIPPED:9 FAILURE:2; blockers:2 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-node-core-fast-support:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73374](https://github.com/openclaw/openclaw/pull/73374) | fix: gate same-model retries to idempotent calls | ghcrawl-156725-autonomous-smoke | CONFLICTING | DIRTY | FAILURE:7 SUCCESS:52 SKIPPED:9; blockers:7 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Parity gate / Run the OpenAI / Opus 4.6 parity gate against the qa-lab mock:FAILURE; CI / checks-node-core-fast-support:FAILURE; CI / checks-node-core-src-security:FAILURE, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73365](https://github.com/openclaw/openclaw/pull/73365) | fix: allow steer messages during active non-streaming runs | ghcrawl-156681-autonomous-smoke | CONFLICTING | DIRTY | FAILURE:3 SUCCESS:56 SKIPPED:9; blockers:3 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Parity gate / Run the OpenAI / Opus 4.6 parity gate against the qa-lab mock:FAILURE; CI / checks-node-agentic-control-plane:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#72409](https://github.com/openclaw/openclaw/pull/72409) | fix(plugins): suppress false duplicate-id warnings across origins | ghcrawl-207039-agentic-merge | CONFLICTING | DIRTY | SUCCESS:54 SKIPPED:9 FAILURE:3; blockers:3 | security_route, needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-fast-bundled:FAILURE; CI / checks-node-agentic-plugins:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight | route to central security triage |
| [#73732](https://github.com/openclaw/openclaw/pull/73732) | fix(whatsapp): recover group inbound after reconnect churn | ghcrawl-156581-autonomous-smoke | MERGEABLE | UNSTABLE | CANCELLED:1 IN_PROGRESS:42 SUCCESS:10 SKIPPED:8; blockers:42 | needs_merge_state:UNSTABLE, needs_checks:ClawSweeper Dispatch / dispatch:IN_PROGRESS; CI / build-artifacts:IN_PROGRESS; CI / checks-fast-bundled:IN_PROGRESS, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#73725](https://github.com/openclaw/openclaw/pull/73725) | fix(webchat): create dashboard sessions from New Chat | ghcrawl-156619-autonomous-smoke | MERGEABLE | UNSTABLE | CANCELLED:1 SKIPPED:10 SUCCESS:50 FAILURE:10; blockers:10 | needs_merge_state:UNSTABLE, unresolved review threads remain, needs_checks:CI / checks-fast-bundled:FAILURE; CI / checks-node-extensions-shard-4:FAILURE; CI / checks-node-core-runtime-infra:FAILURE, needs_merge_preflight | repair failing checks or document unrelated main flake with touched-surface proof |
| [#73390](https://github.com/openclaw/openclaw/pull/73390) | Add configurable WebChat send shortcut | ghcrawl-156934-autonomous-smoke | CONFLICTING | DIRTY | CANCELLED:4 SUCCESS:66 SKIPPED:9 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73389](https://github.com/openclaw/openclaw/pull/73389) | feat(slack): publish App Home tab views | ghcrawl-156940-autonomous-smoke | CONFLICTING | DIRTY | CANCELLED:3 SUCCESS:67 SKIPPED:9 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73385](https://github.com/openclaw/openclaw/pull/73385) | fix: gate sandbox write tools on writable workspace access | ghcrawl-156881-autonomous-smoke | MERGEABLE | UNSTABLE | FAILURE:3 CANCELLED:4 SUCCESS:64 SKIPPED:9; blockers:3 | needs_merge_state:UNSTABLE, needs_checks:Parity gate / Run the OpenAI / Opus 4.6 parity gate against the qa-lab mock:FAILURE; CI / checks-node-core-fast-support:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight, needs_result_backfill | repair failing checks or document unrelated main flake with touched-surface proof |
