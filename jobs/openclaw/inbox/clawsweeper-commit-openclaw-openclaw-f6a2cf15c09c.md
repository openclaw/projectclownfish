---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-f6a2cf15c09c
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-f6a2cf15c09c
source: clawsweeper_commit
commit_sha: f6a2cf15c09c61520ea7f2af98a5554c5d100e85
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/f6a2cf15c09c61520ea7f2af98a5554c5d100e85.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-f6a2cf15c09c`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/f6a2cf15c09c61520ea7f2af98a5554c5d100e85
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/f6a2cf15c09c61520ea7f2af98a5554c5d100e85.md
- Latest main at intake: 275b0f00b079fe3f030bfc5db1b4e90ad020782a

## ClawSweeper Report

```md
---
sha: f6a2cf15c09c61520ea7f2af98a5554c5d100e85
parent: bd5afadc5c7a0575093d4e15fe518fe22d9792cb
repository: openclaw/openclaw
author: "Peter Steinberger"
committer: "Peter Steinberger"
github_author: steipete
github_committer: steipete
co_authors: []
commit_authored_at: "2026-04-29T08:27:57+01:00"
commit_committed_at: "2026-04-29T08:27:57+01:00"
result: findings
confidence: high
highest_severity: medium
check_conclusion: neutral
reviewed_at: 2026-04-29T07:31:55Z
---

# Commit f6a2cf15c0

## Summary

Found one CI/boundary-check regression. The moved browser test fetch helper is still scanned by the raw-fetch runtime guard, but the allowlist still points at the old path.

## Findings

### Medium: Browser test fetch move breaks the raw-fetch boundary check

- Kind: regression
- File: `extensions/browser/src/browser/test-support/fetch.ts`
- Line: 24
- Evidence: The renamed helper still contains raw fetch calls at `extensions/browser/src/browser/test-support/fetch.ts:24` and `extensions/browser/src/browser/test-support/fetch.ts:27`. `scripts/check-no-raw-channel-fetch.mjs:21` and `scripts/check-no-raw-channel-fetch.mjs:22` still allow only the removed `extensions/browser/src/browser/test-fetch.ts` path, and the shared scanner in `scripts/lib/ts-guard-utils.mjs:14` only skips test-like suffixes, not `test-support/` directories. Running `pnpm run lint:tmp:no-raw-channel-fetch` fails with:
  `extensions/browser/src/browser/test-support/fetch.ts:24`
  `extensions/browser/src/browser/test-support/fetch.ts:27`
- Impact: The CI additional boundary checks include `lint:tmp:no-raw-channel-fetch` via `scripts/run-additional-boundary-checks.mjs` and `.github/workflows/ci.yml:1464`, so this commit makes that boundary job fail even though the helper was intended to be kept out of runtime scanning.
- Suggested fix: Teach this guard to skip test-support helpers consistently, or rename the helper with an existing skipped suffix such as `.test-harness.ts` / `.test-support.ts`. If allowlisting is preferred, update the allowlist to the new path and remove the stale old entries.
- Confidence: high

## Reviewed

- Diff: `bd5afadc5c7a0575093d4e15fe518fe22d9792cb..f6a2cf15c09c61520ea7f2af98a5554c5d100e85`
- Changed files: 5 browser tests plus `extensions/browser/src/browser/test-fetch.ts` renamed to `extensions/browser/src/browser/test-support/fetch.ts`
- Code read: all changed files, `scripts/check-no-raw-channel-fetch.mjs`, `scripts/lib/callsite-guard.mjs`, `scripts/lib/ts-guard-utils.mjs`, `scripts/run-additional-boundary-checks.mjs`, `extensions/browser/tsconfig.json`, relevant browser docs
- Dependencies/web: no dependency files changed; no web lookup needed

## Tests / Live Checks

- `pnpm run lint:tmp:no-raw-channel-fetch` failed as described above
- `pnpm test extensions/browser/src/browser/server.agent-contract-core.test.ts extensions/browser/src/browser/server.agent-contract-form-layout-act-commands.test.ts extensions/browser/src/browser/server.auth-token-gates-http.test.ts extensions/browser/src/browser/server.evaluate-disabled-does-not-block-storage.test.ts` passed: 4 files, 39 tests
- `pnpm exec oxfmt --check --threads=1 <changed files>` passed
- `git diff --check bd5afadc5c7a0575093d4e15fe518fe22d9792cb..f6a2cf15c09c61520ea7f2af98a5554c5d100e85` passed

## Limitations

- Full suite/Testbox was not run; focused checks were sufficient to reproduce the concrete regression.
```
