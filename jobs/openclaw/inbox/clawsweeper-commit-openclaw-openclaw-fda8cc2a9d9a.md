---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-fda8cc2a9d9a
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-fda8cc2a9d9a
source: clawsweeper_commit
commit_sha: fda8cc2a9d9ab1e3b9c6a254a884e26a6e68e809
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/fda8cc2a9d9ab1e3b9c6a254a884e26a6e68e809.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-fda8cc2a9d9a`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/fda8cc2a9d9ab1e3b9c6a254a884e26a6e68e809
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/fda8cc2a9d9ab1e3b9c6a254a884e26a6e68e809.md
- Latest main at intake: 023d3371a533266dd465c34102f86768726f173b

## ClawSweeper Report

```md
---
sha: fda8cc2a9d9ab1e3b9c6a254a884e26a6e68e809
parent: cfcb8f4edac0c570696f4ff01d1c632f52ae3c43
repository: openclaw/openclaw
author: "Peter Steinberger"
committer: "Peter Steinberger"
github_author: steipete
github_committer: steipete
co_authors: []
commit_authored_at: "2026-04-29T06:49:00+01:00"
commit_committed_at: "2026-04-29T06:49:05+01:00"
result: findings
confidence: high
highest_severity: high
check_conclusion: failure
reviewed_at: 2026-04-29T05:52:56Z
---

# Commit fda8cc2

## Summary

Found one CI regression: normal full Node CI now emits an empty extension-shard matrix, but the existing aggregate job still runs and treats the skipped shard job as a failure.

## Findings

### High: Normal CI will fail when extension shards are intentionally omitted

- Kind: regression
- File: `.github/workflows/ci.yml`
- Line: 1069
- Evidence: This commit changes `extensionShardMatrix` to `[]` unless `runReleaseOnlyPluginSuites` is true (`.github/workflows/ci.yml:232`). For normal PR/main/manual CI with `runNodeFull=true` and `full_release_validation=false`, local manifest simulation produced `run_checks_fast: true` and `extensionMatrixIncludeLength: 0`. The `checks-node-extensions` aggregate still runs on `needs.preflight.outputs.run_checks_fast == 'true'` and exits unless `needs.checks-node-extensions-shard.result` is exactly `success` (`.github/workflows/ci.yml:1069`, `.github/workflows/ci.yml:1077`). The exact push run for this SHA showed an empty dynamic matrix check named `matrix.check_name` as `skipped` and also started `checks-node-extensions` before the run was cancelled by a newer main push. GitHub documents that skipped jobs propagate through `needs` unless an `always()` conditional continues the dependent job, which is exactly what this aggregate uses. ([docs.github.com](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax))
- Impact: Normal PR/main CI can fail in the aggregate verifier even though skipping the heavy extension batch is intended, blocking unrelated changes or making the new CI policy unusable outside Full Release Validation.
- Suggested fix: Add a manifest output such as `run_checks_node_extensions: extensionShardMatrix.include.length > 0`, use it for both the shard and aggregate job, or make the aggregate accept `skipped` only when the matrix is intentionally empty. Add a workflow/manifest regression test for normal CI (`full_release_validation=false`) proving the aggregate does not fail.
- Confidence: high

## Reviewed

- Diff: `cfcb8f4edac0c570696f4ff01d1c632f52ae3c43..fda8cc2a9d9ab1e3b9c6a254a884e26a6e68e809`
- Changed files: `.github/workflows/ci.yml`, `scripts/lib/ci-node-test-plan.mjs`, `test/scripts/ci-node-test-plan.test.ts`, `docs/help/testing.md`, `.agents/skills/openclaw-testing/SKILL.md`
- Code read: full changed script/test/workflow regions, downstream CI aggregate jobs, `docs/ci.md`, `docs/help/testing.md`, `docs/reference/test.md`, `scripts/lib/extension-test-plan.mjs`, related plugin prerelease workflow test
- Dependencies/web: GitHub Actions workflow syntax docs for skipped `needs` behavior
- Commands: `pnpm docs:list`; `git diff --check`; targeted manifest `node --input-type=module`; `pnpm install`; `pnpm test test/scripts/ci-node-test-plan.test.ts -- --reporter=verbose`; `gh run list/view` for exact SHA; `actionlint` check attempted but unavailable

## Tests / Live Checks

- `pnpm test test/scripts/ci-node-test-plan.test.ts -- --reporter=verbose` passed after installing missing deps.
- Targeted manifest simulation confirmed normal CI has `extensionMatrixIncludeLength: 0` while `run_checks_fast` remains true.
- Exact-SHA GitHub push run was cancelled/superseded before aggregate completion, but it showed the empty matrix as skipped and the aggregate job starting.

## Limitations

- `actionlint` was not installed.
- I did not dispatch a new workflow or run full CI.
```
