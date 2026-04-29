---
repo: openclaw/openclaw
cluster_id: gitcrawl-1951-dedupe-only-20260429-remote
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#51065"
candidates:
  - "#25592"
  - "#38458"
  - "#39631"
  - "#41581"
  - "#42157"
  - "#44930"
  - "#50184"
  - "#54663"
  - "#54757"
  - "#54825"
  - "#62121"
  - "#63373"
  - "#65235"
  - "#70628"
  - "#70797"
  - "#71575"
cluster_refs:
  - "#21675"
  - "#25592"
  - "#37430"
  - "#38458"
  - "#38826"
  - "#39518"
  - "#39631"
  - "#39718"
  - "#39795"
  - "#39916"
  - "#40249"
  - "#40343"
  - "#40442"
  - "#40750"
  - "#41045"
  - "#41188"
  - "#41581"
  - "#41708"
  - "#42157"
  - "#42439"
  - "#42912"
  - "#44340"
  - "#44598"
  - "#44923"
  - "#44930"
  - "#46674"
  - "#47084"
  - "#47086"
  - "#47286"
  - "#49023"
  - "#49321"
  - "#49882"
  - "#50184"
  - "#50292"
  - "#50985"
  - "#50989"
  - "#51065"
  - "#51182"
  - "#51678"
  - "#53384"
  - "#54052"
  - "#54663"
  - "#54757"
  - "#54825"
  - "#55356"
  - "#55378"
  - "#55399"
  - "#55626"
  - "#56105"
  - "#56801"
  - "#56899"
  - "#57133"
  - "#57935"
  - "#59331"
  - "#61809"
  - "#62121"
  - "#63373"
  - "#65235"
  - "#66161"
  - "#67132"
  - "#69579"
  - "#69790"
  - "#70359"
  - "#70628"
  - "#70797"
  - "#71575"
  - "#71663"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #51065 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1951 on 2026-04-29."
---

# Gitcrawl Cluster 1951

Generated from local gitcrawl run cluster 1951 for `openclaw/openclaw`.

Display title:

> Failed tool call narrations leak to Telegram as user-visible messages

Cluster shape from gitcrawl:

- total members: 67
- issues: 67
- pull requests: 0
- open candidates in local store: 16
- representative: #51065, currently closed in local store
- latest member update: 2026-04-28T22:51:07.574700254Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #21675 [Feature]: Option to suppress tool call error notifications in Telegram
- #37430 Message tool: error notification sent after successful retry causes confusion
- #38826 TTS voice reply leaks NO_REPLY / internal tokens to Telegram chat
- #39518 feat(mattermost): stream text progressively even when response includes media attachments
- #39718 [Bug]: Telegram streaming replies briefly show Deleted message as the quoted reply target on OpenClaw 2026.3.7
- #39795 Telegram streaming "partial" creates duplicate messages due to generation counter race
- #39916 [Bug] Tool call failure messages should not be forwarded to user chat
- #40249 [Bug]: Telegram streaming never activates — stream code path unreachable regardless of config
- #40343 Auto-compaction can delete an already-delivered message on Telegram
- #40442 [Bug]: Telegram reply may attach to a deleted message after /new or /reset
- #40750 [Bug]: Telegram DM can re-show a stale draft preview after the final reply is already delivered
- #41045 Telegram preview streaming (partial mode) broken in 3.8, working in 3.7
- #41188 [Feature]: Option to hide tool outputs from chat (silent mode)
- #41708 [Bug]:   Telegram fails on Sonnet 4.6, related to thinking blocks
- #42439 Bug: Telegram voice messages corrupt thinking block signatures, preventing message processing
- #42912 Tool failure notifications are misleading when agent retries successfully
- #44340 [Bug]: Telegram streaming=partial silently drops response when model fallback occurs mid-stream
- #44598 Feature request: Suppress error messages in group chats
- #44923 [Bug]: Telegram messages silently deleted after streaming/draft — user loses content permanently (repeated pattern)
- #46674 Telegram polling: duplicate inbound messages on polling session restart (cross-restart dedup cache not persisted)
- #47084 [Bug]: Describe the bug
- #47086 Telegram streaming race condition causes message_start before previous message_stop
- #47286 UX: Suppress intermediate tool failures when operation succeeds
- #49023 Telegram: duplicate session race condition when messages arrive during session initialization
- #49321 [Bug]: Session store lock timeout causes dropped Telegram messages
- #49882 Agent tool errors should be routed to agent first, not directly to chat
- #50292 Feature: suppress intermediate text output between tool calls
- #50985 [Feature]: Gateway-level suppression of intermediate text output (pre-tool narration)
- #50989 Suppress intermediate text output before tool calls in group channels
- #51065 Failed tool call narrations leak to Telegram as user-visible messages
- #51182 Telegram message replay after gateway restart despite offset file existing (regression from #739)
- #51678 Feature: Option to suppress tool errors from chat
- #53384 [Bug]:  streaming: partial drops text block when assistant turn contains [thinking, text]
- #54052 Compaction status messages leak into Telegram even when /verbose off is set
- #55356 Feature Request: suppressToolErrors option to hide tool failures from chat
- #55378 [Bug]: Telegram forum topics show Claude Opus 4.6 pre-tool narration / work-note text as visible replies
- #55399 [Bug] Streaming gets stuck: message_start error even with single messages (Telegram, v2026.3.24)
- #55626 [Bug]: Tool error notification sent even when operation ultimately succeeds
- #56105 streaming: "partial" drops text when reply contains MEDIA + text in Telegram forum topics
- #56801 Recurring bug: compaction status is emitted into Telegram user-facing output and final reply is not delivered
- #56899 [Bug]: Agent text output delivered to Telegram even when agent uses only Bot API + NO_REPLY
- #57133 [Bug]: NO_REPLY envelope leakage - agent self-talk and internal tokens delivered to Telegram as visible messages
- #57935 Telegram incoming messages not received after gateway restart
- #59331 Telegram: old messages reprocessed in loop after gateway restart (update_id offset not persisted)
- #61809 streaming: partial sends first chunk as permanent message in 4.5 (Telegram)
- #66161 Telegram surface leaks assistant pre-tool scratch/commentary into user-visible chat
- #67132 Bug: intermediate tool-call narration leaks into iMessage channel as separate messages
- #69579 [Bug]: Telegram handler drops thinking block signatures  on multi-turn conversations, causing Anthropic API rejection
- #69790 Telegram inbound can fail with persistent session write lock on existing DM session
- #70359 Internal reasoning / commentary leaked into Telegram chat
- #71663 Telegram: partial streaming leaks tool call names into chat

Open candidates:

- #25592 Text between tool calls leaks to messaging channels
- #38458 [Feature]: Option to suppress tool error output from reaching chat surfaces
- #39631 Telegram: internal tool error message leaks into user chat on failed edit()
- #41581 [Bug]: Telegram DM partial streaming regressed from sendMessageDraft-style smooth preview to choppy editMessageText updates after 2026.3.8
- #42157 Inbound Telegram webhook payloads lost on gateway restart
- #44930 [BUG] Telegram messages silently dropped due to update offset race condition
- #50184 Telegram DM reply preview is forced to message transport instead of draft
- #54663 Allow tool call results in group chats via config option
- #54757 Bug: Tool error messages leak to WhatsApp channel replies via deliverWebReply
- #54825 Feature: Suppress or customize raw error messages sent to channels (WhatsApp, Telegram)
- #62121 DeepSeek preamble text leaks to Telegram after 3.13 → 4.5 upgrade (untagged assistant text bypasses commentary filter)
- #63373 [Bug]: Raw internal transcript content ([TOOL_CALL]) leaked into user-visible Telegram chat after transcript corruption/repair
- #65235 [UX] Suppress tool parameter validation errors from being sent to user chat surfaces
- #70628 [Bug]: Telegram DM fabricates silent-reply chatter for no-visible-response turns
- #70797 Tool-call payload can leak into user-visible reply during background exec/process flows
- #71575 Telegram channel renders intermediate tool call steps as visible messages
