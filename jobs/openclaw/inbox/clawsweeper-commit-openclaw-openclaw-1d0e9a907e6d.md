---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-1d0e9a907e6d
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-1d0e9a907e6d
source: clawsweeper_commit
commit_sha: 1d0e9a907e6d98329f852409bce18a52332a9a22
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/1d0e9a907e6d98329f852409bce18a52332a9a22.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-1d0e9a907e6d`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/1d0e9a907e6d98329f852409bce18a52332a9a22
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/1d0e9a907e6d98329f852409bce18a52332a9a22.md
- Latest main at intake: a62c7e5a2741b6f45a8649ec6965af1807255194

## ClawSweeper Report

```md
---
sha: 1d0e9a907e6d98329f852409bce18a52332a9a22
parent: eb7f305737f71f19c166eb79eebc0520a2e7538a
repository: openclaw/openclaw
author: "Vincent Koc"
committer: "Vincent Koc"
github_author: vincentkoc
github_committer: vincentkoc
co_authors: []
commit_authored_at: "2026-04-29T00:28:35-07:00"
commit_committed_at: "2026-04-29T00:39:18-07:00"
result: findings
confidence: high
highest_severity: medium
check_conclusion: neutral
reviewed_at: 2026-04-29T07:45:20Z
---

# Commit 1d0e9a9

## Summary

Found one concrete migration bug in the new TTS enabled-toggle repair. The cron schema deprecation metadata change looks safe.

## Findings

### Medium: TTS enabled migration rewrites unsupported locations and drops/misses real legacy toggles

- Kind: data_loss
- File: `src/commands/doctor/shared/legacy-config-migrations.runtime.tts.ts`
- Line: 202
- Evidence: The new visitor migrates `agents.defaults.tts` and every `channels.<id>.tts` / `channels.<id>.accounts.<id>.tts` block generically (`src/commands/doctor/shared/legacy-config-migrations.runtime.tts.ts:200`, `src/commands/doctor/shared/legacy-config-migrations.runtime.tts.ts:216`, `src/commands/doctor/shared/legacy-config-migrations.runtime.tts.ts:222`). Live validation shows `agents.defaults.tts.auto` is rejected with `Unrecognized key: "tts"`, while `agents.list[].tts.auto` is valid. The same check shows `channels.discord.tts.auto` and `channels.discord.accounts.primary.tts.auto` are rejected, while Discord’s supported TTS override path is `voice.tts` per its doctor contract (`extensions/discord/src/doctor-contract.ts:184`, `extensions/discord/src/doctor-contract.ts:190`). Because doctor’s unknown-key cleanup runs after legacy migration (`src/commands/doctor-config-flow.ts:229`), `doctor --fix` can remove the migrated block instead of preserving the user’s intended TTS toggle.
- Impact: Users with legacy toggles at these paths can run `openclaw doctor --fix` and lose the TTS setting, or still be left with unmigrated supported Discord `channels.discord.voice.tts.enabled` / account `voice.tts.enabled` toggles. The added test currently asserts invalid Discord/account/defaults paths, so it does not catch this.
- Suggested fix: Limit the generic migration to schema-supported core locations (`messages.tts`, `agents.list[].tts`, and channel/account paths that actually expose root `tts`), remove or remap `agents.defaults.tts`, and add plugin-owned migrations for supported Discord `voice.tts.enabled` paths.
- Confidence: high

## Reviewed

- Diff: `eb7f305737f71f19c166eb79eebc0520a2e7538a..1d0e9a907e6d98329f852409bce18a52332a9a22`
- Changed files: `CHANGELOG.md`, doctor TTS migration/tests, deprecation inventory, cron schema/test.
- Code read: TTS migration framework, config legacy detection/application, doctor config flow, TTS config resolution, config schemas, Discord TTS doctor contract, TTS and cron docs.
- Dependencies/web: no dependency changes; no web lookup needed.

## Tests / Live Checks

- `pnpm install` run once because `node_modules` was missing.
- `pnpm test src/commands/doctor/shared/legacy-config-migrate.provider-shapes.test.ts src/cron/cron-protocol-schema.test.ts` passed.
- `pnpm exec oxfmt --check --threads=1 ...` passed.
- `git diff --check eb7f305737f71f19c166eb79eebc0520a2e7538a..1d0e9a907e6d98329f852409bce18a52332a9a22` passed.
- Focused `tsx` validation confirmed the invalid migrated paths and valid `agents.list[].tts` / Discord `voice.tts` behavior.

## Limitations

- Did not run a broad changed gate; the targeted checks and live schema probes were sufficient for this commit review.
```
