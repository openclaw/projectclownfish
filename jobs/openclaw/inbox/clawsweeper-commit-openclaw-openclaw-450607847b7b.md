---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-450607847b7b
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-450607847b7b
source: clawsweeper_commit
commit_sha: 450607847b7b5c9f6ce848c72afbeb571c41e10c
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/450607847b7b5c9f6ce848c72afbeb571c41e10c.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-450607847b7b`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/450607847b7b5c9f6ce848c72afbeb571c41e10c
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/450607847b7b5c9f6ce848c72afbeb571c41e10c.md
- Latest main at intake: 66b4324d41e1c44c1262acf521bc661dcf2a7a29

## ClawSweeper Report

```md
---
sha: 450607847b7b5c9f6ce848c72afbeb571c41e10c
parent: 364c67bcb5b7f26a6d41024eb07b6a709de782bb
repository: openclaw/openclaw
author: "samzong"
committer: "web-flow"
github_author: samzong
github_committer: web-flow
co_authors: ["samzong", "frankekn"]
commit_authored_at: "2026-04-29T13:23:36+08:00"
commit_committed_at: "2026-04-29T13:23:36+08:00"
result: findings
confidence: high
highest_severity: low
check_conclusion: neutral
reviewed_at: 2026-04-29T05:27:54+00:00
---

# Commit 4506078

## Summary

Found one low-severity parity bug in the new REM harness preview.

## Findings

### Low: REM harness preview can include stale recall entries that real REM skips

- Kind: bug
- File: `extensions/memory-core/src/rem-harness.ts`
- Line: 133
- Evidence: `previewRemHarness` reads recall entries, applies only `filterRecallEntriesWithinLookback`, then passes them directly to `previewRemDreaming` at `extensions/memory-core/src/rem-harness.ts:133` and `extensions/memory-core/src/rem-harness.ts:142`. The actual REM phase wraps the same lookback-filtered entries in `filterLiveShortTermRecallEntries` at `extensions/memory-core/src/dreaming-phases.ts:1641`, which checks that the source file still exists via `extensions/memory-core/src/short-term-promotion.ts:901`. The existing regression test at `extensions/memory-core/src/dreaming-phases.test.ts:2240` verifies actual REM excludes vanished source snippets, and that focused test passed locally.
- Impact: `doctor.memory.remHarness` can show deleted/stale short-term memory snippets in `rem.reflections`, `rem.candidateTruths`, and `rem.bodyLines`, even though a real REM run would not use them. That makes the gateway RPC an inaccurate preview and can expose stale snippets still lingering in the short-term store to `operator.read` clients.
- Suggested fix: apply `filterLiveShortTermRecallEntries({ workspaceDir, entries: ... })` inside `previewRemHarness` before calling `previewRemDreaming`, and add a preview-specific test mirroring the vanished-source REM regression.
- Confidence: high

## Reviewed

- Diff: `364c67bcb5b7f26a6d41024eb07b6a709de782bb..450607847b7b5c9f6ce848c72afbeb571c41e10c`
- Changed files: all 14 files in the diff summary.
- Code read: gateway handler/scopes/method list, memory-core REM harness, dreaming phase filtering, short-term recall source filtering, SDK facade, CLI rem-harness path, relevant docs/tests.
- PR context: `gh pr view 66673 --repo openclaw/openclaw`.

## Tests / Live Checks

- `pnpm install` after initial test run failed because `node_modules` was missing.
- `pnpm test src/gateway/server-methods/doctor.test.ts -t "doctor.memory.remHarness"`: passed.
- `pnpm test extensions/memory-core/src/dreaming-phases.test.ts -t "filterRecallEntriesWithinLookback|previewRemHarness"`: passed.
- `pnpm test src/plugin-sdk/memory-core-bundled-runtime.test.ts`: passed.
- `pnpm test extensions/memory-core/src/dreaming-phases.test.ts -t "skips REM short-term candidates whose source file disappeared"`: passed.
- `git diff --check 364c67bcb5b7f26a6d41024eb07b6a709de782bb..450607847b7b5c9f6ce848c72afbeb571c41e10c`: passed.

## Dependency / Web Checks

- No dependency files changed.
- No web lookup needed; review was source/test/PR-context based.

## Limitations

- Did not run full `pnpm check` or `pnpm build`.
- A direct `pnpm exec tsx -e ...` temp-workspace smoke was attempted but not relied on because direct module loading hit an unrelated package export boundary that the repo’s Vitest setup avoids.
```
