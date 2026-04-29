---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-a887a512ef8e
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-a887a512ef8e
source: clawsweeper_commit
commit_sha: a887a512ef8eded87891832611806f47a97331c7
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/a887a512ef8eded87891832611806f47a97331c7.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-a887a512ef8e`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/a887a512ef8eded87891832611806f47a97331c7
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/a887a512ef8eded87891832611806f47a97331c7.md
- Latest main at intake: d28500ffd6cd66417b04618caac9657667b7dd71

## ClawSweeper Report

```md
---
sha: a887a512ef8eded87891832611806f47a97331c7
parent: a9f58d34a28b1dcf682759fcc99bc486f5b1b8d0
repository: openclaw/openclaw
author: "Peter Steinberger"
committer: "Peter Steinberger"
github_author: steipete
github_committer: steipete
co_authors: []
commit_authored_at: "2026-04-29T07:01:08+01:00"
commit_committed_at: "2026-04-29T07:01:09+01:00"
result: findings
confidence: high
highest_severity: high
check_conclusion: failure
reviewed_at: 2026-04-29T06:04:01Z
---

# Commit a887a512

## Summary

Found one concrete CI regression. The commit adds duplicate `run_checks_node_extensions` keys in the workflow output map and manifest object.

## Findings

### High: Duplicate extension output key breaks workflow sanity and keeps the empty-shard guard ineffective

- Kind: regression
- File: `.github/workflows/ci.yml`
- Line: 59
- Evidence: `pnpm check:workflows` fails with actionlint: `key "run_checks_node_extensions" is duplicated in "outputs" section. previously defined at line:56,col:7`. The manifest also defines `run_checks_node_extensions` twice at lines 305 and 310; a focused Node smoke with an empty extension shard matrix produced `{"matrix":{"include":[]},"run_checks_node_extensions":true}`, proving the later `runReleaseOnlyPluginSuites` value overwrites the new `extensionShardMatrix.include.length > 0` guard.
- Impact: workflow sanity now fails for this workflow change, and the intended fix does not work. Full release validation can still run the `checks-node-extensions` aggregate when the extension shard matrix is empty, causing the aggregate to see a skipped shard job and fail.
- Suggested fix: keep only one `preflight.outputs.run_checks_node_extensions` entry, and keep only one manifest property set to `extensionShardMatrix.include.length > 0`.
- Confidence: high

## Reviewed

- Diff: `a9f58d34a28b1dcf682759fcc99bc486f5b1b8d0..a887a512ef8eded87891832611806f47a97331c7`
- Changed files: `.github/workflows/ci.yml`
- Code read: full `.github/workflows/ci.yml`, relevant `scripts/lib/extension-test-plan.mjs`, `docs/ci.md`, `docs/reference/RELEASING.md`
- Dependencies/web: no dependency changes; no web lookup needed

## Tests / Live Checks

- `pnpm docs:list`
- `git diff --check a9f58d34a28b1dcf682759fcc99bc486f5b1b8d0..a887a512ef8eded87891832611806f47a97331c7`
- `pnpm check:workflows` failed as described above
- Focused Node manifest smoke confirmed duplicate object overwrite behavior

## Limitations

- Did not run broad CI; the targeted workflow sanity check reproduced the regression directly.
```
