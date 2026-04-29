---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-c01244e85927
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-c01244e85927
source: clawsweeper_commit
commit_sha: c01244e859279a2e60f50423174c94f6fc9e3e8f
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/c01244e859279a2e60f50423174c94f6fc9e3e8f.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-c01244e85927`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/c01244e859279a2e60f50423174c94f6fc9e3e8f
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/c01244e859279a2e60f50423174c94f6fc9e3e8f.md
- Latest main at intake: 2a02b3bcec6cd9443c635372e09722baad07dd5d

## ClawSweeper Report

```md
---
sha: c01244e859279a2e60f50423174c94f6fc9e3e8f
parent: bd5afadc5c7a0575093d4e15fe518fe22d9792cb
repository: openclaw/openclaw
author: "Vincent Koc"
committer: "Vincent Koc"
github_author: vincentkoc
github_committer: vincentkoc
co_authors: []
commit_authored_at: "2026-04-29T00:28:02-07:00"
commit_committed_at: "2026-04-29T00:28:02-07:00"
result: findings
confidence: high
highest_severity: medium
check_conclusion: neutral
reviewed_at: 2026-04-29T07:42:05Z
---

# Commit c01244e

## Summary

Found one concrete CI/boundary regression. The helper behavior still works in a targeted browser test, but the new filename is still treated as channel/plugin runtime source by the raw-fetch guard, so the boundaries check now fails.

## Findings

### Medium: moved fetch helper still fails the raw-fetch boundary guard

- Kind: regression
- File: `extensions/browser/src/browser/test-support-fetch.ts`
- Line: 24
- Evidence: `test-support-fetch.ts` contains raw `fetch(...)` and `globalThis.fetch(...)` calls at lines 24 and 27. `node scripts/check-no-raw-channel-fetch.mjs` fails with:
  - `extensions/browser/src/browser/test-support-fetch.ts:24`
  - `extensions/browser/src/browser/test-support-fetch.ts:27`
- Impact: The commit moves the calls away from the old allowlisted file, but the guard does not skip `test-support-fetch.ts`; `scripts/run-additional-boundary-checks.mjs` includes `lint:tmp:no-raw-channel-fetch`, and `.github/workflows/ci.yml` runs that boundary group. This makes the boundary CI lane fail on this commit.
- Suggested fix: Put the helper behind an actually skipped test-helper shape, such as a `.test-harness.ts` helper imported only from tests, or update the raw-fetch guard’s test-file classification consistently. Avoid just leaving the raw fetch calls in a prod-scanned filename.
- Confidence: high

## Reviewed

- Diff: `bd5afadc5c7a0575093d4e15fe518fe22d9792cb..c01244e859279a2e60f50423174c94f6fc9e3e8f`
- Changed files: `extensions/browser/src/browser/test-fetch.ts`, `extensions/browser/src/browser/test-support-fetch.ts`
- Code read: changed files, browser plugin tsconfig, root extension tsconfig, raw-fetch guard, callsite guard utilities, additional boundary checks, CI boundary wiring, relevant imports/callers
- Dependencies/web: no dependency changes; no web lookup needed

## Tests / Live Checks

- `pnpm docs:list`: passed
- `pnpm install`: passed after missing local dependencies blocked the first guard run
- `node scripts/check-no-raw-channel-fetch.mjs`: failed with the two touched-file violations above
- `pnpm test extensions/browser/src/browser/server.auth-token-gates-http.test.ts`: passed, 1 file / 3 tests
- `pnpm exec oxfmt --check --threads=1 extensions/browser/src/browser/test-fetch.ts extensions/browser/src/browser/test-support-fetch.ts`: passed
- `git diff --check bd5afadc5c7a0575093d4e15fe518fe22d9792cb..c01244e859279a2e60f50423174c94f6fc9e3e8f`: passed

## Limitations

- Did not run a broad changed gate; the focused boundary check already reproduces the actionable failure.
- A direct targeted `tsgo` probe for `extensions/browser/tsconfig.json` failed early on missing generated plugin SDK declarations, so it was not used as evidence for the finding.
```
