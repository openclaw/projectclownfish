---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-8b71d2347f2b
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-8b71d2347f2b
source: clawsweeper_commit
commit_sha: 8b71d2347f2b31d829582471efa850a2353937ef
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/8b71d2347f2b31d829582471efa850a2353937ef.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-8b71d2347f2b`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/8b71d2347f2b31d829582471efa850a2353937ef
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/8b71d2347f2b31d829582471efa850a2353937ef.md
- Latest main at intake: 023d3371a533266dd465c34102f86768726f173b

## ClawSweeper Report

```md
---
sha: 8b71d2347f2b31d829582471efa850a2353937ef
parent: 64387ad8e2cc504dcb727af3bec882057f6452d8
repository: openclaw/openclaw
author: "Vincent Koc"
committer: "Vincent Koc"
github_author: vincentkoc
github_committer: vincentkoc
co_authors: []
commit_authored_at: "2026-04-28T23:55:26-07:00"
commit_committed_at: "2026-04-29T00:04:17-07:00"
result: findings
confidence: high
highest_severity: low
check_conclusion: neutral
reviewed_at: 2026-04-29T07:09:25+00:00
---

# Commit 8b71d23

## Summary

Found one concrete low-severity regression: the runtime `diffs` config schema changed, but the static plugin manifest was not kept in sync.

## Findings

### Low: Diffs config schema now drifts from the plugin manifest

- Kind: regression
- File: `extensions/diffs/src/config.ts`
- Line: 149
- Evidence: `extensions/diffs/src/config.ts:149` and `extensions/diffs/src/config.ts:156`-`170` add `.describe(...)` to deprecated config aliases, so `diffsPluginConfigSchema.jsonSchema` now contains `description` fields. `extensions/diffs/openclaw.plugin.json:139`-`175` still lists those same alias properties without descriptions. The existing sync test at `extensions/diffs/src/config.test.ts:322` fails, showing the runtime schema has new descriptions for `format`, `imageFormat`, `imageQuality`, `imageScale`, and `imageMaxWidth` that the manifest lacks.
- Impact: Manifest-first plugin discovery/config surfaces keep serving the stale static schema, and the targeted `diffs` config test fails on this commit.
- Suggested fix: Update `extensions/diffs/openclaw.plugin.json` `configSchema.properties.defaults.properties` for the five alias fields to include the new descriptions, or remove the runtime descriptions if the manifest should remain unchanged. Then rerun the targeted `diffs` config test.
- Confidence: high

## Reviewed

- Diff: `64387ad8e2cc504dcb727af3bec882057f6452d8..8b71d2347f2b31d829582471efa850a2353937ef`
- Changed files read: all 11 changed files
- Code read: `extensions/diffs/src/config.test.ts`, `extensions/diffs/src/tool.test.ts`, `extensions/diffs/openclaw.plugin.json`, `src/plugins/config-schema.ts`, provider/tool schema normalization paths
- Docs: ran `pnpm docs:list`; read relevant `diffs`, provider, TTS, cron, and exec docs
- Dependencies: installed missing deps once; inspected local TypeBox 1.1.33 types/source behavior

## Tests / Live Checks

- `pnpm test extensions/diffs/src/config.test.ts extensions/diffs/src/tool.test.ts --run` failed: `extensions/diffs/src/config.test.ts` manifest/runtime schema sync test failed.
- `pnpm tsgo:extensions` passed.
- `git diff --check 64387ad8e2cc504dcb727af3bec882057f6452d8..8b71d2347f2b31d829582471efa850a2353937ef` passed.
- `git status --short` was clean after dependency install.

## Dependency / Web Checks

- No web lookup was needed.
- Local TypeBox check confirmed `deprecated: true` is preserved as a schema keyword and is type-compatible through `TSchemaOptions`.

## Limitations

- I did not run broad `pnpm check:changed`; the focused test already reproduced the concrete regression.
```
