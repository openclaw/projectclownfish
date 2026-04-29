---
repo: openclaw/openclaw
cluster_id: clawsweeper-commit-openclaw-openclaw-5435591f6a1a
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
target_branch: clownfish/clawsweeper-commit-openclaw-openclaw-5435591f6a1a
source: clawsweeper_commit
commit_sha: 5435591f6a1a8cd2f9c3f5b131457f9a73547923
clawsweeper_report_repo: openclaw/clawsweeper
clawsweeper_report_path: records/openclaw-openclaw/commits/5435591f6a1a8cd2f9c3f5b131457f9a73547923.md
---

# ClawSweeper commit finding repair

ProjectClownfish should create or update one implementation PR from `clownfish/clawsweeper-commit-openclaw-openclaw-5435591f6a1a`
if the finding is still valid on latest `openclaw/openclaw@main`.

## Operator Prompt

Use the ClawSweeper commit report below as the source finding. Do not redo a
broad audit of the commit. Check latest `main`, verify the reported problem is
still present, and make the narrowest safe fix. If latest `main` already fixed
it, make no code changes and report that outcome.

Do not merge. Do not close issues. Do not handle security-sensitive findings in
this lane.

## Commit Finding

- Commit: https://github.com/openclaw/openclaw/commit/5435591f6a1a8cd2f9c3f5b131457f9a73547923
- Report: https://github.com/openclaw/clawsweeper/blob/main/records/openclaw-openclaw/commits/5435591f6a1a8cd2f9c3f5b131457f9a73547923.md
- Latest main at intake: 0015d34fda79da526d8c35b87270a33582686810

## ClawSweeper Report

```md
---
sha: 5435591f6a1a8cd2f9c3f5b131457f9a73547923
parent: 68ef37011ec785a71c9e3476d335e8b2a7b1ae26
repository: openclaw/openclaw
author: "Peter Steinberger"
committer: "Peter Steinberger"
github_author: steipete
github_committer: steipete
co_authors: []
commit_authored_at: "2026-04-29T04:07:31+01:00"
commit_committed_at: "2026-04-29T04:07:39+01:00"
result: findings
confidence: high
highest_severity: low
check_conclusion: neutral
reviewed_at: 2026-04-29T03:25:28Z
---

# Commit 5435591

## Summary

Found one low-severity block-reply edge case in the new split-tag buffering. The main Gateway SSE regression is covered and the focused tests pass.

## Findings

### Low: text-end block replies can drop a literal trailing final-tag prefix

- Kind: bug
- File: `src/agents/pi-embedded-subscribe.ts`
- Line: 709
- Evidence: `stripBlockTags` now buffers a trailing possible tag fragment in `state.pendingTagFragment`, but `emitBlockChunk` calls it without `{ final: true }`. A local probe with `onBlockReply`, `blockReplyBreak: "text_end"`, and streamed text `Answer ends with <fi` emitted `{"text":"Answer ends with"}` instead of preserving `<fi`. If `message_end` arrives after the text-end flush, the safety fallback skips because `lastBlockReplyText` is already set.
- Impact: channel/block-reply deliveries can silently lose a literal trailing `<`, `<fi`, `</fi`, etc. The commit’s tests cover this preservation for assistant stream events, but not for `onBlockReply`.
- Suggested fix: final-flush `state.blockState.pendingTagFragment` at text-end/block-reply flush, likely by letting `emitBlockChunk` accept a final option or by calling `stripBlockTags("", state.blockState, { final: true })` and emitting/accumulating the returned literal tail before setting `lastBlockReplyText`.
- Confidence: high

## Reviewed

- Diff: `68ef37011ec785a71c9e3476d335e8b2a7b1ae26..5435591f6a1a8cd2f9c3f5b131457f9a73547923`
- Changed files: `CHANGELOG.md`, `src/agents/pi-embedded-subscribe.handlers.messages.ts`, `src/agents/pi-embedded-subscribe.handlers.types.ts`, `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.filters-final-suppresses-output-without-start-tag.test.ts`, `src/agents/pi-embedded-subscribe.ts`, `src/gateway/openai-http.test.ts`
- Code read: changed files, `src/gateway/openai-http.ts`, `src/gateway/agent-event-assistant-text.ts`, `src/infra/agent-events.ts`, `src/agents/pi-embedded-block-chunker.ts`, `src/agents/pi-embedded-subscribe.e2e-harness.ts`, `docs/pi.md`
- Issue context: inspected GitHub issue `#63325`

## Tests / Live Checks

- `pnpm test src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.filters-final-suppresses-output-without-start-tag.test.ts src/gateway/openai-http.test.ts` passed.
- `git diff --check 68ef37011ec785a71c9e3476d335e8b2a7b1ae26..5435591f6a1a8cd2f9c3f5b131457f9a73547923` passed.
- Ran a focused `pnpm exec tsx --eval` probe for the block-reply edge; it reproduced the truncation.

## Dependency / Web Checks

- No dependency files changed.
- Ran `pnpm docs:list` and read the relevant streaming section in `docs/pi.md`.

## Limitations

- No broad `pnpm check:changed` run; this was a focused commit review.
```
