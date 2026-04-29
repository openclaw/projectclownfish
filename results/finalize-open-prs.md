# Open ProjectClownfish PR Finalizer

Generated: 2026-04-29T22:23:04.056Z

## Summary

| Metric | Count |
| --- | ---: |
| open_prs | 16 |
| ready_candidates | 0 |
| security_hold | 0 |
| needs_rebase | 15 |
| mergeability_unknown | 0 |
| needs_checks | 6 |
| needs_review | 8 |
| needs_merge_preflight | 16 |
| needs_result_backfill | 8 |

## Dispatch

Enabled: no

Status: report_only

| PR | Cluster | Job | Mode | Blockers |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Open PRs

| PR | Title | Cluster | Mergeable | Merge State | Checks | Blockers | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [#73390](https://github.com/openclaw/openclaw/pull/73390) | Add configurable WebChat send shortcut | ghcrawl-156934-autonomous-smoke | CONFLICTING | DIRTY | CANCELLED:4 SUCCESS:70 SKIPPED:9 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73389](https://github.com/openclaw/openclaw/pull/73389) | feat(slack): publish App Home tab views | ghcrawl-156940-autonomous-smoke | CONFLICTING | DIRTY | CANCELLED:3 SUCCESS:71 SKIPPED:9 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73385](https://github.com/openclaw/openclaw/pull/73385) | fix: gate sandbox write tools on writable workspace access | ghcrawl-156881-autonomous-smoke | MERGEABLE | CLEAN | SUCCESS:86 SKIPPED:17 | needs_merge_preflight, needs_result_backfill | backfill merge preflight: security cleared, comments resolved, Codex /review passed, validation recorded |
| [#74049](https://github.com/openclaw/openclaw/pull/74049) | fix: The executable defaults now use `openai/gpt-5.5`, and the pinned | clawsweeper-commit-openclaw-openclaw-d130a77a3b1e | CONFLICTING | DIRTY | CANCELLED:1 SKIPPED:20 SUCCESS:67 FAILURE:18; blockers:18 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / checks-node-agentic-commands:FAILURE; CI / check-lint:FAILURE; CI / plugin-prerelease-docker-suite / Docker E2E targeted lanes (npm-onboard-channel-agent):FAILURE, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#74010](https://github.com/openclaw/openclaw/pull/74010) | fix(compaction): respect effective reserve tokens in compaction gates | ghcrawl-199269-agentic-merge | CONFLICTING | DIRTY | FAILURE:4 SUCCESS:55 SKIPPED:9; blockers:4 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:Parity gate / Run the OpenAI / Opus 4.6 parity gate against the qa-lab mock:FAILURE; CI / checks-node-core-runtime-shared:FAILURE; CI / checks-node-agentic-control-plane:FAILURE, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#74009](https://github.com/openclaw/openclaw/pull/74009) | fix(agents): prefer sessionKey in sessions_send | ghcrawl-166009-agentic-merge | CONFLICTING | DIRTY | FAILURE:3 SUCCESS:55 SKIPPED:14; blockers:3 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:Parity gate / Run the OpenAI / Opus 4.6 parity gate against the qa-lab mock:FAILURE; CI / checks-node-core-fast-support:FAILURE; CI / checks-node-core:FAILURE, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#74002](https://github.com/openclaw/openclaw/pull/74002) | fix(exec): respect OPENCLAW_STATE_DIR for exec approvals | ghcrawl-191457-agentic-merge | CONFLICTING | DIRTY | CANCELLED:2 SKIPPED:22 SUCCESS:86 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#74001](https://github.com/openclaw/openclaw/pull/74001) | fix(feishu): reply inside P2P direct-message threads | ghcrawl-165996-agentic-merge | CONFLICTING | DIRTY | CANCELLED:2 SKIPPED:22 SUCCESS:86 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73998](https://github.com/openclaw/openclaw/pull/73998) | fix(feishu): reconcile WebSocket reconnect backoff | ghcrawl-207048-agentic-merge | CONFLICTING | DIRTY | CANCELLED:1 SKIPPED:22 SUCCESS:86 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73996](https://github.com/openclaw/openclaw/pull/73996) | fix: interpolate responsePrefix template variables in heartbeat replies | ghcrawl-157060-autonomous-smoke | CONFLICTING | DIRTY | CANCELLED:3 SKIPPED:22 SUCCESS:87 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73993](https://github.com/openclaw/openclaw/pull/73993) | fix(telegram): avoid silent polling drops for in-flight updates | ghcrawl-191453-agentic-merge | CONFLICTING | DIRTY | CANCELLED:4 SKIPPED:22 SUCCESS:86 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73991](https://github.com/openclaw/openclaw/pull/73991) | Add per-agent command lane isolation | ghcrawl-157052-autonomous-smoke | CONFLICTING | DIRTY | CANCELLED:4 SKIPPED:23 SUCCESS:87 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73989](https://github.com/openclaw/openclaw/pull/73989) | fix(health-monitor): add reconnect grace for gateway reconnects | ghcrawl-157023-autonomous-smoke | CONFLICTING | DIRTY | SKIPPED:3 SUCCESS:5 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73988](https://github.com/openclaw/openclaw/pull/73988) | fix(agents): load symlinked workspace bootstrap files | ghcrawl-157010-autonomous-smoke | CONFLICTING | DIRTY | CANCELLED:9 SKIPPED:36 SUCCESS:151; blockers:5 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:CI / plugin-prerelease-docker-suite / prepare_docker_e2e_image:CANCELLED; CI / plugin-prerelease-docker-suite / Docker E2E (${{ matrix.label }}):CANCELLED; CI / plugin-prerelease-docker-suite / Docker E2E targeted lanes (${{ matrix.group.label }}):CANCELLED, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73987](https://github.com/openclaw/openclaw/pull/73987) | fix(control-ui): share gateway token scope across loopback hosts | ghcrawl-157066-autonomous-smoke | CONFLICTING | DIRTY | CANCELLED:25 SKIPPED:38 SUCCESS:150; blockers:21 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, unresolved review threads remain, needs_checks:CI / plugin-prerelease-docker-suite / Docker E2E targeted lanes (npm-onboard-channel-agent):CANCELLED; CI / plugin-prerelease-docker-suite / Docker E2E targeted lanes (doctor-switch):CANCELLED; CI / plugin-prerelease-docker-suite / Docker E2E targeted lanes (update-channel-switch):CANCELLED, needs_merge_preflight, needs_result_backfill | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
| [#73986](https://github.com/openclaw/openclaw/pull/73986) | fix(feishu): fallback to media when file download returns 502 | ghcrawl-199239-agentic-merge | CONFLICTING | DIRTY | CANCELLED:19 SKIPPED:39 SUCCESS:154; blockers:18 | needs_rebase:CONFLICTING, needs_merge_state:DIRTY, needs_checks:CI / plugin-prerelease-docker-suite / Docker E2E targeted lanes (npm-onboard-channel-agent):CANCELLED; CI / plugin-prerelease-docker-suite / Docker E2E targeted lanes (doctor-switch):CANCELLED; CI / plugin-prerelease-docker-suite / Docker E2E targeted lanes (update-channel-switch):CANCELLED, needs_merge_preflight | resume branch, rebase onto current main, repair conflicts, run changed checks, rerun review |
