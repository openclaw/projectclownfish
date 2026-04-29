---
repo: openclaw/openclaw
cluster_id: gitcrawl-13984-dedupe-only-20260429-remote
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
  - "#45028"
candidates:
  - "#38829"
  - "#43848"
  - "#44424"
  - "#45028"
  - "#45388"
  - "#45554"
  - "#47561"
  - "#47643"
  - "#52286"
  - "#64157"
  - "#64917"
  - "#69326"
cluster_refs:
  - "#38829"
  - "#41531"
  - "#41739"
  - "#41937"
  - "#42237"
  - "#42549"
  - "#43146"
  - "#43318"
  - "#43341"
  - "#43771"
  - "#43848"
  - "#43899"
  - "#43993"
  - "#44240"
  - "#44261"
  - "#44394"
  - "#44424"
  - "#44478"
  - "#44926"
  - "#45028"
  - "#45388"
  - "#45514"
  - "#45554"
  - "#45849"
  - "#45878"
  - "#46092"
  - "#47454"
  - "#47515"
  - "#47561"
  - "#47643"
  - "#47772"
  - "#47971"
  - "#48322"
  - "#50024"
  - "#50465"
  - "#50508"
  - "#51119"
  - "#51670"
  - "#51972"
  - "#52204"
  - "#52286"
  - "#52743"
  - "#53686"
  - "#54605"
  - "#54632"
  - "#55580"
  - "#55721"
  - "#55876"
  - "#55964"
  - "#57669"
  - "#57918"
  - "#62036"
  - "#62304"
  - "#63424"
  - "#64157"
  - "#64235"
  - "#64917"
  - "#64971"
  - "#66679"
  - "#66797"
  - "#68165"
  - "#68378"
  - "#69326"
  - "#70853"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #45028 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13984 on 2026-04-29."
---

# Gitcrawl Cluster 13984

Generated from local gitcrawl run cluster 13984 for `openclaw/openclaw`.

Display title:

> [Bug]: Control UI replies to Telegram-backed session are delivered to `webchat` instead of Telegram

Cluster shape from gitcrawl:

- total members: 64
- issues: 63
- pull requests: 1
- open candidates in local store: 12
- representative: #45028, currently open in local store
- latest member update: 2026-04-28T22:51:07.399100323Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41531 Bug: Telegram Topics misrouting across groups (background jobs mix chat_id and message_thread_id)
- #41739 [Bug]: [Bug] Telegram replies are routed to the Web UI session instead of the  source channel
- #41937 TUI: Telegram messages update session state but do not appear live until session/history reload
- #42237 [Bug] Topic-based routing not syncing Telegram and WebChat messages
- #42549 Telegram delivery fails with group: prefix in recipient ID
- #43146 [Bug]: Telegram group/topic sessions forbid same-chat message tool sends, blocking attachments/media despite same-chat thread routing support
- #43318 [Bug]: sessions_send hardcodes INTERNAL_MESSAGE_CHANNEL, causing reply routing to flip from external channel to webchat
- #43341 Bug: TUI not receiving real-time message updates from main session
- #43771 [Bug]: Telegram responses are truncated or do not show up
- #43899 [Bug]: Telegram forum-topic ACP turns can pass a Telegram permalink to ACP instead of the actual message body
- #43993 [Bug] Webchat to Telegram message sync not working in 2026.3.11 (regression)
- #44240 Telegram forum topic messages sometimes not routed to correct agent — wrong processing order (filter before topic normalization)
- #44261 [Bug]: Control UI (webchat) messages not mirrored to external channels (Discord, Telegram, etc.)
- #44394 Bug: message(action=send) fails with 'Network request failed' when sending to different forum topic
- #44478 Telegram and TUI stay in separate sessions; outbound cross-surface mirroring does not occur
- #44926 [Bug]: Telegram forum topic misrouting — message sent to wrong topic or fails delivery
- #45514 [Bug] Multi-channel session routing - replies go to wrong channel
- #45849 [Bug]: DMs routed to main agent do not collapse into Main > main; Control UI creates discord:direct / telegram:direct sessions instead
- #45878 [Bug]: sessions_send announce delivery fails with "Telegram recipient must be a numeric chat ID" when target session key uses group:topic format
- #46092 [Bug]: /new and /reset confirmation messages sent to General topic instead of current forum topic
- #47454 [Bug]: Telegram messages split into multiple messages when output contains newlines
- #47515 sessions_send announce delivery drops threadId — breaks Telegram topic threads
- #47772 Telegram channel strips newlines from agent replies
- #47971 resolveAnnounceTarget drops threadId for thread-based sessions (sessions_send announce fails)
- #48322 Bug: Telegram messages have first sentence broken across lines without reply tag
- #50024 Issue #43318: [Bug]: sessions_send hardcodes INTERNAL_MESSAGE_CHANNEL, causing reply routing to flip from external channel to webchat
- #50465 Telegram direct session can stay pinned to oversized stale session; /new does not reliably cut over
- #50508 [Bug]: Message responses occasionally routed to wrong channel (webchat instead of Feishu)
- #51119 Telegram forum/topic group messages silently dropped despite correct config
- #51670 Forum topic routing: bindings with peer.id containing topic suffix don't match inbound messages
- #51972 [Bug]: Telegram/webchat session routing cross-wire breaks operational continuity
- #52204 [Bug] 多渠道会话隔离问题：消息路由到错误的渠道 (session isolation & channel routing bug)
- #52743 Bug: Telegram message target with :topic:<id> sends to current topic instead of requested topic
- #53686 [Bug]: Telegram: all outbound API calls fail (sendMessage, sendChatAction, editMessageText) while inbound polling works
- #54605 WUI/TUI do not surface Telegram-appended messages from shared main session transcript
- #54632 [Bug]: Telegram forum topics do not create sessions (2026.3.24)
- #55580 [Bug]: Control UI misclassifies direct Telegram sessions across agents
- #55721 [Bug]:  Telegram session: intent commits but tool execution does not dispatch (invoke-first no-op), despite healthy  gateway/channel
- #55876 [Bug]: Telegram forum supergroup messages silently dropped in webhook mode (2026.3.24) - no session created
- #55964 Telegram replies intent text but does not execute tools (no exec/read/write traces) on 2026.3.24
- #57669 [Bug]: windows telegram can't work
- #57918 [Bug]: Announce delivery constructs malformed recipient "group:<chatId>" for Telegram forum topic sessions
- #62036 Telegram messages truncated/split incorrectly in forum topics
- #62304 Feishu reply routed to webchat instead of Feishu in 2026.4.5
- #63424 sessions_send announce loses threadId — messages land in General instead of target topic
- #64235 [Bug]: telegram sendMessage failed: Network request for 'sendMessage' failed!
- #64971 [Bug]: Control UI replies to externally-backed sessions are delivered to webchat instead of the underlying customer channel
- #66679 [Bug]: On OpenClaw 2026.4.14 (a88c6f0), Telegram and Slack both respond conversationally, but chat-triggered tools/actions often do not execute.
- #66797 [Bug]: Group natural-language messages silently dropped in 2026.4.11 (regression of #29637/#30591)
- #68165 [Bug]: OpenClaw - WhatsApp sends validation messages to contacts and Telegram setup fails
- #68378 Bug: Gateway sends Discord session messages to Feishu channel (critical message routing bug)
- #70853 Telegram DM session continuity lost after session reset/rebind on stable session key

Open candidates:

- #38829 openclaw tui terminal cannot receive real-time messages
- #43848 [Bug]: sessions_send loses Telegram forum topic delivery and can pollute requester transcripts
- #44424 Bug: Telegram messages not routed to correct forum topic
- #45028 [Bug]: Control UI replies to Telegram-backed session are delivered to `webchat` instead of Telegram
- #45388 TUI --session mode doesn't live-stream messages
- #45554 [Bug]: switching session.dmScope back to main does not reconcile stale peer-keyed direct DM sessions
- #47561 Bug: /new session can be stranded by routing-mode changes and resume an older session
- #47643 [Bug]: Persistent Telegram Channel Issues: Sync Failures, Loops, and Config Changes Not Applying on Windows
- #52286 [Bug] message tool sends files to DM instead of staying in Telegram topic
- #64157 [Bug]: Multi-Surface Message Routing Failure — Replies lost when switching from Feishu to Web Control UI mid-conversation
- #64917 sessions_send from visible webchat leaks internal replies via announce path and rebinds target sessions to webchat
- #69326 [Bug] Replies not routed back to WeChat when message originates from webchat UI
