---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-be445dd1c128
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-be445dd1c128
source: clawsweeper_commit
commit_sha: be445dd1c12840b77055965dd7da1f659236f8f4
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/be445dd1c12840b77055965dd7da1f659236f8f4.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-be445dd1c128`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/be445dd1c12840b77055965dd7da1f659236f8f4
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/be445dd1c12840b77055965dd7da1f659236f8f4.md
- Latest main at intake: be445dd1c12840b77055965dd7da1f659236f8f4

## ClawSweeper Report

```md
---
sha: be445dd1c12840b77055965dd7da1f659236f8f4
parent: 34ef403cb2a21a8013cb4bcef3d319c8b26a31cf
repository: openclaw/openclaw
author: "openclaw-clownfish[bot]"
committer: "web-flow"
github_author: openclaw-clownfish[bot]
github_committer: web-flow
co_authors: []
commit_authored_at: "2026-04-28T21:04:20-07:00"
commit_committed_at: "2026-04-28T21:04:20-07:00"
result: findings
confidence: high
highest_severity: medium
check_conclusion: neutral
reviewed_at: 2026-04-29T04:07:38Z
---

# Commit be445dd1

## Summary

Found one concrete incomplete-fix bug: the merged normalizer handles leading `U+FFFD/U+FFFE/U+FFFF/FEFF`, but the linked issue and carried-forward PR evidence also describe leading C0/C1 control bytes from `imsg` attributedBody extraction. Those still miss the echo cache and can re-trigger duplicate/looping iMessage replies.

## Findings

### Medium: Leading control-byte echo corruption is still not normalized

- Kind: bug
- File: `extensions/imessage/src/monitor/echo-cache.ts`
- Line: 25
- Evidence: `LEADING_ATTRIBUTED_BODY_CORRUPTION_MARKERS` only matches `\uFEFF`, `\uFFFD`, `\uFFFE`, and `\uFFFF`. The linked issue `#59973` and carried-forward PR `#62191` both call out leading control characters as part of the attributedBody corruption; the earlier PR patch stripped `\u0000-\u001f` and `\u007f-\u009f`. A local cache smoke check on this commit returned `false` for `\u0000Delayed echo reply` while returning `true` for `\uFFFDDelayed echo reply`.
- Impact: Reflected iMessage echoes that start with a control byte still bypass dedupe, so the assistant can ingest its own outbound reply as fresh inbound text and send duplicate or recursive replies.
- Suggested fix: Extend the leading-only normalizer to include the documented C0/C1 control-byte ranges while preserving interior text, and add a focused test with a leading control byte.
- Confidence: high

## Reviewed

- Diff: `34ef403cb2a21a8013cb4bcef3d319c8b26a31cf..be445dd1c12840b77055965dd7da1f659236f8f4`
- Changed files: `CHANGELOG.md`, `extensions/imessage/src/monitor/echo-cache.ts`, `extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`
- Code read: `extensions/AGENTS.md`, `docs/channels/imessage.md`, `extensions/imessage/src/monitor/inbound-processing.ts`, `extensions/imessage/src/monitor/deliver.ts`, `extensions/imessage/src/monitor/self-chat-cache.ts`, relevant self-chat/echo tests
- GitHub context: inspected `#59973`, `#59980`, and `#62191`

## Tests / Live Checks

- `pnpm docs:list`
- `pnpm install` after the first test attempt reported missing `vitest/package.json`
- `pnpm test extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts extensions/imessage/src/monitor/self-chat-cache.test.ts extensions/imessage/src/monitor/self-chat-dedupe.test.ts` passed: 3 files, 38 tests
- `pnpm exec tsx -e ...` cache smoke: leading `\u0000` did not match; leading `\uFFFD` matched

## Dependency / Web Checks

- No dependency changes.
- No general web lookup needed; current facts came from repo source and GitHub issue/PR metadata via `gh`.

## Limitations

- No live macOS/iMessage roundtrip was run.
```
