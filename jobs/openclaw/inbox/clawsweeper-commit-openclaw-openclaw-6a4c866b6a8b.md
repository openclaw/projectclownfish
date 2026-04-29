---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b
source: clawsweeper_commit
commit_sha: 6a4c866b6a8b09360f1f51aa99aac9e682b0fef1
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/6a4c866b6a8b09360f1f51aa99aac9e682b0fef1.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/6a4c866b6a8b09360f1f51aa99aac9e682b0fef1
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/6a4c866b6a8b09360f1f51aa99aac9e682b0fef1.md
- Latest main at intake: 3367cfaa1466c50a345234970d2d87252904c464

## ClawSweeper Report

```md
---
sha: 6a4c866b6a8b09360f1f51aa99aac9e682b0fef1
parent: 1d87d757e964a204f64f2ba512d10905c0a94411
repository: openclaw/openclaw
author: "Peter Steinberger"
committer: "Peter Steinberger"
github_author: steipete
github_committer: steipete
co_authors: []
commit_authored_at: "2026-04-29T07:36:51+01:00"
commit_committed_at: "2026-04-29T07:36:55+01:00"
result: findings
confidence: high
highest_severity: low
check_conclusion: neutral
reviewed_at: 2026-04-29T06:40:47Z
---

# Commit 6a4c866

## Summary

Found one low-severity release-process regression: the CI docs were updated for Android opt-in, but the release guide still claims and demonstrates manual CI as if Android runs by default.

## Findings

### Low: Release guide manual CI command no longer runs documented Android coverage

- Kind: regression
- File: `docs/reference/RELEASING.md`
- Line: 129
- Evidence: The commit changes manual CI so Android only runs when `full_release_validation` or `include_android` is true in `.github/workflows/ci.yml:135`, and the Android job is gated by `run_android_job` at `.github/workflows/ci.yml:2158`. `docs/ci.md:362` was updated to say standalone manual CI needs `include_android=true`, but `docs/reference/RELEASING.md:129` still says direct manual CI forces “Windows, macOS, Android,” and `docs/reference/RELEASING.md:335` still shows `gh workflow run ci.yml --ref main -f target_ref=release/YYYY.M.D` without `-f include_android=true`.
- Impact: A release maintainer following the release guide for “full normal CI coverage” can now skip Android validation unintentionally.
- Suggested fix: Update the release guide to either add `-f include_android=true` to direct manual CI examples or direct release candidates through `full-release-validation.yml` when Android coverage is required.
- Confidence: high

## Reviewed

- Diff: `1d87d757e964a204f64f2ba512d10905c0a94411..6a4c866b6a8b09360f1f51aa99aac9e682b0fef1`
- Changed files: `.github/actions/setup-node-env/action.yml`, `.github/workflows/ci.yml`, `docs/ci.md`, `scripts/lib/extension-test-plan.mjs`, `test/scripts/plugin-prerelease-test-plan.test.ts`
- Code read: CI preflight manifest, Android job gating/setup, setup-node-env cache/install action, extension shard planner, plugin prerelease workflow test, release CI docs
- Dependencies/web: no dependency files changed; no external web lookup needed

## Tests / Live Checks

- `pnpm docs:list`
- `git diff --check 1d87d757e964a204f64f2ba512d10905c0a94411..6a4c866b6a8b09360f1f51aa99aac9e682b0fef1`
- `pnpm install` to restore missing local dependencies
- `pnpm test test/scripts/plugin-prerelease-test-plan.test.ts test/scripts/test-extension.test.ts` passed: 35 tests
- `pnpm check:workflows` passed

## Limitations

- Did not dispatch a live GitHub Actions CI run or run the full CI/Testbox gate.
```
