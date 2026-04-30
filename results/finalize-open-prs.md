# Open ProjectClownfish PR Finalizer

Generated: 2026-04-30T01:17:44.216Z

## Summary

| Metric | Count |
| --- | ---: |
| open_prs | 4 |
| ready_candidates | 0 |
| security_hold | 0 |
| needs_rebase | 3 |
| mergeability_unknown | 0 |
| needs_checks | 1 |
| needs_review | 1 |
| needs_merge_preflight | 4 |
| needs_result_backfill | 3 |

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
