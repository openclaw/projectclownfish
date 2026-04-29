---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-afc4f06ca3c7
mode: autonomous
allowed_actions:
  - comment
  - label
  - fix
  - raise_pr
blocked_actions:
  - close
  - merge
require_human_for:
  - close
  - merge
canonical: []
candidates: []
cluster_refs: []
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: false
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-afc4f06ca3c7
source: clawsweeper_commit
commit_sha: afc4f06ca3c7ffcf19db61e17601bd317b7e428f
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/afc4f06ca3c7ffcf19db61e17601bd317b7e428f.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-afc4f06ca3c7`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/afc4f06ca3c7ffcf19db61e17601bd317b7e428f
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/afc4f06ca3c7ffcf19db61e17601bd317b7e428f.md
- Latest main at intake: 1dd500c4951ce78747e260a9022325b8db61a54b

## ClawSweeper Report

```md
---
sha: afc4f06ca3c7ffcf19db61e17601bd317b7e428f
parent: 7e5d6dba80016a5d3502fa6cfc5589aa58a072af
repository: openclaw/openclaw
author: "steipete"
committer: "steipete"
github_author: steipete
github_committer: steipete
co_authors: []
commit_authored_at: "2026-04-29T08:08:36+01:00"
commit_committed_at: "2026-04-29T08:14:08+01:00"
result: findings
confidence: high
highest_severity: medium
check_conclusion: neutral
reviewed_at: 2026-04-29T07:19:40Z
---

# Commit afc4f06

## Summary

Found two QMD freshness regressions around the new one-shot startup path and watcher ignore matching.

## Findings

### Medium: Interval-only QMD background refresh no longer starts at gateway startup

- Kind: regression
- File: `src/gateway/server-startup-memory.ts`
- Line: 11
- Evidence: `shouldRunQmdStartupBootSync` now returns only `qmd.update.onBoot`, and `startGatewayMemoryBackend` skips manager creation when that is false. The actual periodic timers are only installed by the full QMD manager in `extensions/memory-core/src/memory/qmd-manager.ts:455`, so configs with `memory.qmd.update.onBoot=false` but `update.interval` or `update.embedInterval` enabled no longer arm those background refreshes during gateway startup. The previous predicate included `qmd.update.intervalMs > 0 || qmd.update.embedIntervalMs > 0`.
- Impact: Operators can disable boot refresh to avoid startup work while still expecting periodic QMD updates, as described by the config help for `memory.qmd.update.interval`. After this commit, those refreshes do not begin until an interactive memory manager is opened, leaving QMD indexes, session exports, or embeddings stale on idle gateways.
- Suggested fix: Keep interval/embed scheduling independent from boot sync, for example by preserving the interval/embed predicate and adding a lightweight startup mode that can arm timers without creating the full file watcher.
- Confidence: high

### Medium: Watcher ignores explicit collection roots named build/dist/vendor/.cache

- Kind: bug
- File: `extensions/memory-core/src/memory/qmd-manager.ts`
- Line: 194
- Evidence: `shouldIgnoreMemoryWatchPath` splits the absolute watched path and ignores it if any segment matches the expanded set at `extensions/memory-core/src/memory/qmd-manager.ts:80`. That means a configured collection rooted at a directory named `build`, `dist`, `vendor`, or `.cache` is ignored entirely. QMD itself ignores `**/build/**`, `**/dist/**`, etc. relative to the collection cwd; I checked `@tobilu/qmd@2.1.0` package source and verified with `fast-glob` that a collection root named `build` still indexes `notes.md`.
- Impact: Explicit QMD paths or workspaces under common directory names like `build` or `dist` can be indexed by QMD but never trigger OpenClaw’s watch sync, so updates are silently delayed until an interval/manual refresh.
- Suggested fix: Make the watcher ignore logic relative to each collection root, or avoid applying dependency/build segment ignores to the collection root itself.
- Confidence: high

## Reviewed

- Diff: `7e5d6dba80016a5d3502fa6cfc5589aa58a072af..afc4f06ca3c7ffcf19db61e17601bd317b7e428f`
- Changed files: `CHANGELOG.md`, `docs/concepts/memory-qmd.md`, `docs/reference/memory-config.md`, `extensions/memory-core/src/memory/qmd-manager.ts`, `extensions/memory-core/src/memory/qmd-manager.test.ts`, `src/gateway/server-startup-memory.ts`, `src/gateway/server-startup-memory.test.ts`, `src/plugins/memory-runtime.ts`, `src/plugins/memory-state.ts`
- Code read: QMD manager initialization/sync/watch paths, memory runtime manager caching, gateway startup hook, memory config resolver/help, related tests.
- Dependencies/web: inspected `@tobilu/qmd@2.1.0` package source from npm for scanner ignore semantics.
- Commands: `pnpm docs:list`; `pnpm install`; `pnpm test src/gateway/server-startup-memory.test.ts extensions/memory-core/src/memory/qmd-manager.test.ts`; `git diff --check ...`; focused `fast-glob` scanner check.

## Tests / Live Checks

- Targeted tests passed: gateway startup memory test and QMD manager test, 108 tests total.
- The focused scanner check showed QMD-style `fast-glob` ignores still include `notes.md` when the collection root itself is named `build`.

## Limitations

- No full changed gate or build was run; review used focused tests and source tracing only.
```
