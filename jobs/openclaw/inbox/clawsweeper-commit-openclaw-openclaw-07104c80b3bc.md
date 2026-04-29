---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-07104c80b3bc
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-07104c80b3bc
source: clawsweeper_commit
commit_sha: 07104c80b3bc879647d171f8877b2b5e792253ca
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/07104c80b3bc879647d171f8877b2b5e792253ca.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-07104c80b3bc`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/07104c80b3bc879647d171f8877b2b5e792253ca
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/07104c80b3bc879647d171f8877b2b5e792253ca.md
- Latest main at intake: e3bc985a6ea2d8ab89c08ce9f64ae25fdef876f2

## ClawSweeper Report

```md
---
sha: 07104c80b3bc879647d171f8877b2b5e792253ca
parent: 7994833fac212be4b383b9019a9cfd24e15cdc7e
repository: openclaw/openclaw
author: "Peter Steinberger"
committer: "Peter Steinberger"
github_author: steipete
github_committer: steipete
co_authors: []
commit_authored_at: "2026-04-29T05:54:29+01:00"
commit_committed_at: "2026-04-29T05:54:35+01:00"
result: findings
confidence: high
highest_severity: medium
check_conclusion: neutral
reviewed_at: 2026-04-29T04:57:24Z
---

# Commit 07104c80

## Summary

The runtime forwarding change is intact, but the new hand-written Discord facade types no longer match the runtime API they wrap.

## Findings

### Medium: Discord component edit facade now advertises the wrong TypeScript contract

- Kind: compatibility
- File: `src/plugin-sdk/discord.ts`
- Line: 57
- Evidence: `DiscordComponentSendOpts` now makes `cfg` optional at `src/plugin-sdk/discord.ts:57`, but the wrapped runtime function requires it and immediately calls `requireRuntimeConfig(opts.cfg, "Discord component edit")` in `extensions/discord/src/send.components.ts:330`. The same facade also types the return as `{ id?: string; channel_id?: string }` at `src/plugin-sdk/discord.ts:71`, while the actual runtime return type is normalized `{ messageId: string; channelId: string }` from `extensions/discord/src/send.types.ts:29` and `extensions/discord/src/send.components.ts:330`.
- Impact: Existing typed callers of deprecated `openclaw/plugin-sdk/discord` lose the `messageId`/`channelId` contract, and new callers can compile without `cfg` even though that path throws at runtime. This is a public SDK compatibility regression for the retained compatibility facade.
- Suggested fix: Keep the facade decoupled from extension internals, but copy the runtime-compatible structural types: make `cfg` required unless the wrapper fills it, and type the edit result as `{ messageId: string; channelId: string }`. Prefer copying the full component spec/build result shapes too, or intentionally expose opaque aliases only where existing users do not depend on fields.
- Confidence: high

## Reviewed

- Diff: `7994833fac212be4b383b9019a9cfd24e15cdc7e..07104c80b3bc879647d171f8877b2b5e792253ca`
- Changed files: `src/plugin-sdk/discord.ts`, `src/plugin-sdk/telegram-account.ts`
- Code read: changed files in full, scoped `src/plugin-sdk/AGENTS.md`, Discord `api.ts`, `runtime-api.ts`, component/send/account types, Telegram account API/types, SDK docs entries for deprecated facades
- Dependencies/web: no external lookup needed; regression is in local public TypeScript/runtime contract

## Tests / Live Checks

- `pnpm docs:list` succeeded
- `pnpm install` run once because `node_modules` was missing
- `pnpm test src/plugin-sdk/discord.test.ts src/plugin-sdk/telegram-account.test.ts` passed: 2 files, 4 tests
- `git diff --check 7994833fac212be4b383b9019a9cfd24e15cdc7e..07104c80b3bc879647d171f8877b2b5e792253ca` passed
- `pnpm plugin-sdk:api:check` failed on both this commit and a temp archive of the base commit with the same baseline hash drift, so I did not attribute that failure to this commit

## Limitations

- Did not run full `pnpm build` or broad changed gates; focused source tracing and facade tests were sufficient for this finding.
```
