---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-7877182b6f59
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-7877182b6f59
source: clawsweeper_commit
commit_sha: 7877182b6f59dbd11bc8245a4eb815a4b4126d78
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/7877182b6f59dbd11bc8245a4eb815a4b4126d78.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-7877182b6f59`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/7877182b6f59dbd11bc8245a4eb815a4b4126d78
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/7877182b6f59dbd11bc8245a4eb815a4b4126d78.md
- Latest main at intake: 88237faed3c5edc69a821d7296e82172c399a91b

## ClawSweeper Report

```md
---
sha: 7877182b6f59dbd11bc8245a4eb815a4b4126d78
parent: 1a936f225e7e05a856cb7e43504c7d9846a5920c
repository: openclaw/openclaw
author: "Peter Steinberger"
committer: "Peter Steinberger"
github_author: steipete
github_committer: steipete
co_authors: []
commit_authored_at: "2026-04-29T09:15:34+01:00"
commit_committed_at: "2026-04-29T09:15:54+01:00"
result: findings
confidence: high
highest_severity: medium
check_conclusion: neutral
reviewed_at: 2026-04-29T08:20:17Z
---

# Commit 7877182

## Summary

Found one concrete regression: a focused gateway test file now fails because its module mock was not updated for the new runtime-deps cleanup export.

## Findings

### Medium: Gateway startup plugin tests fail after new runtime-deps import

- Kind: regression
- File: `src/gateway/server-startup-plugins.test.ts`
- Line: 122
- Evidence: `src/gateway/server-startup-plugins.ts:8` now imports `pruneUnknownBundledRuntimeDepsRoots`, and `prestageGatewayBundledRuntimeDeps()` calls it at `src/gateway/server-startup-plugins.ts:58`. The existing Vitest mock for `../plugins/bundled-runtime-deps.js` only exports `repairBundledRuntimeDepsInstallRootAsync`, `resolveBundledRuntimeDependencyPackageInstallRoot`, and `scanBundledPluginRuntimeDeps`, so `pnpm test src/gateway/server-startup-plugins.test.ts` fails four tests with: `No "pruneUnknownBundledRuntimeDepsRoots" export is defined on the "../plugins/bundled-runtime-deps.js" mock`.
- Impact: The gateway startup test shard is red, so changed-gate or full CI can fail on main and the affected tests no longer exercise the intended startup dependency staging behavior.
- Suggested fix: Add a hoisted `pruneUnknownBundledRuntimeDepsRoots` mock returning `{ scanned: 0, removed: 0, skippedLocked: 0 }`, export it from the mocked module, reset it in `beforeEach`, and optionally assert the startup cleanup call in the runtime-deps staging tests.
- Confidence: high

## Reviewed

- Diff: `1a936f225e7e05a856cb7e43504c7d9846a5920c..7877182b6f59dbd11bc8245a4eb815a4b4126d78`
- Changed files: `CHANGELOG.md`, `docs/automation/cron-jobs.md`, `src/cron/service.restart-catchup.test.ts`, `src/cron/service/ops.ts`, `src/cron/service/state.ts`, `src/cron/service/timer.ts`, `src/gateway/server-startup-plugins.ts`, `src/plugins/bundled-runtime-deps.test.ts`, `src/plugins/bundled-runtime-deps.ts`
- Code read: full changed cron startup/timer paths, gateway plugin bootstrap path, bundled runtime-deps cleanup/locking code, adjacent gateway startup plugin test mock, cron docs.
- Dependencies/web: no external web facts needed; ran `pnpm install` once because `node_modules` was missing.

## Tests / Live Checks

- `pnpm docs:list` passed.
- `pnpm test src/cron/service.restart-catchup.test.ts src/plugins/bundled-runtime-deps.test.ts` passed: 9 cron tests, 88 plugin tests.
- `pnpm test src/gateway/server-startup-plugins.test.ts` failed as described above.

## Limitations

- Did not run broad `pnpm check:changed` or full test suite after the focused gateway test exposed the actionable failure.
```
