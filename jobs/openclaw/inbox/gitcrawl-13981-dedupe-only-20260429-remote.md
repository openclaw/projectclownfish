---
repo: openclaw/openclaw
cluster_id: gitcrawl-13981-dedupe-only-20260429-remote
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
  - "#67791"
candidates:
  - "#38597"
  - "#41195"
  - "#46778"
  - "#49055"
  - "#52577"
  - "#53786"
  - "#55036"
  - "#56610"
  - "#57225"
  - "#62906"
cluster_refs:
  - "#38597"
  - "#38607"
  - "#38943"
  - "#39408"
  - "#39978"
  - "#40010"
  - "#40028"
  - "#41195"
  - "#41310"
  - "#43196"
  - "#43612"
  - "#43704"
  - "#43969"
  - "#44085"
  - "#44197"
  - "#44866"
  - "#45500"
  - "#45924"
  - "#46135"
  - "#46289"
  - "#46778"
  - "#46872"
  - "#47392"
  - "#48699"
  - "#49055"
  - "#49323"
  - "#49581"
  - "#49717"
  - "#49817"
  - "#50078"
  - "#50260"
  - "#50496"
  - "#50892"
  - "#52577"
  - "#53431"
  - "#53559"
  - "#53786"
  - "#54413"
  - "#54620"
  - "#54658"
  - "#55036"
  - "#55236"
  - "#55254"
  - "#56422"
  - "#56610"
  - "#56902"
  - "#56981"
  - "#57225"
  - "#57875"
  - "#58658"
  - "#60893"
  - "#62059"
  - "#62906"
  - "#63027"
  - "#63409"
  - "#63437"
  - "#63755"
  - "#63974"
  - "#64024"
  - "#64876"
  - "#65581"
  - "#65993"
  - "#67236"
  - "#67791"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #67791 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13981 on 2026-04-29."
---

# Gitcrawl Cluster 13981

Generated from local gitcrawl run cluster 13981 for `openclaw/openclaw`.

Display title:

> [Bug]: Feishu Duplicate message sent after streaming card completes — blockStreamingCoalesce regression since v2026.4.12

Cluster shape from gitcrawl:

- total members: 64
- issues: 64
- pull requests: 0
- open candidates in local store: 10
- representative: #67791, currently closed in local store
- latest member update: 2026-04-28T21:55:43.860603614Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38607 Discord: CJK text splits at wrong character boundaries when message exceeds 2000 chars
- #38943 Feishu streaming card output produces cumulative token duplication
- #39408 [Bug] Feishu channel: /new startup greeting not delivered to chat
- #39978 [Bug]: Discord async exec/approval follow-up replies can persist in transcript but never reach the channel
- #40010 [Bug]: Feishu sends duplicate streaming cards for tool-using conversations
- #40028 [Bug]: Feishu streaming sends duplicate messages with corrupted format
- #41310 Messages duplicated when streaming mode is enabled (Telegram & Feishu)
- #43196 [Bug]: Feishu old-message replay/late-processing after gateway restart causes stale replies
- #43612 Feishu: duplicate card delivery for long streaming responses
- #43704 [Bug]: Feishu streaming card merges unrelated replies when agent produces multiple final messages
- #43969 飞书消息重复送达 - 一条消息多次回复
- #44085 [Feishu] 开启流式输出后重复发送两条消息
- #44197 [Bug]: 飞书插件无法接收消息 - 长连接模式不工作
- #44866 [Bug]: Feishu DM (p2p) messages routed to webchat instead of feishu channel
- #45500 Duplicate Discord message delivery on LLM retry after partial delivery
- #45924 Bug: Multiple assistant replies in backend, but only one shown on Discord (first reply swallowed)
- #46135 Feishu Channel: Duplicate streaming cards due to state management race condition in reply-dispatcher.ts
- #46289 [Bug]:  Duplicate message output in Feishu channel
- #46872 Feishu streaming cards: tool calls split reply into multiple cards
- #47392 [Bug]: Feishu channel - First message after /new session startup is not delivered
- #48699 [Feishu] Streaming card fallback sends duplicate messages when streaming fails
- #49323 [Bug] Feishu WebSocket closes after each message in v2026.3.13
- #49581 [Bug] Discord: reply text vanishes when combined with tool call in same assistant turn (streaming draft race)
- #49717 [Bug] Feishu WebSocket event gap when processing long-running tasks
- #49817 消息重复发送问题 - Feishu/飞书集成
- #50078 [Bug]: Clawdbot cannot receive messages from Feishu (Lark). No message push notifications are received from Feishu
- #50260 [Bug]: 飞书开启流式传输重复发送消息段落
- #50496 [Bug]: Trashed session's message tool calls re-delivered on every gateway restart
- #50892 [Bug]: Discord collect-mode auto-reply drain causes duplicate message delivery
- #53431 [Bug]: 飞书机器人不响应消息 - WebSocket 模式无法接收消息
- #53559 [Bug] Feishu: /new command reply routed to webchat instead of Feishu
- #54413 Discord delivery silently drops messages after response termination + retry
- #54620 [Bug]: Message duplication occurs in Feishu channel when conversation history grows lon
- #54658 Silent message delivery failure: AI response generated but never delivered to Discord
- #55236 [Bug]: Discord main replies can appear late after result is already ready, causing timing confusion
- #55254 [Bug]: [v2026.3.24 Bug] /new creates duplicate "agent:main:main" session that hijacks Feishu message routing
- #56422 [Bug]: Response paired with tool exec call is not propagated to discord/slack
- #56902 [openclaw-weixin] Messages are delivered hundreds of times causing API rate limiting
- #56981 [Feishu] Streaming card fails with HTTP 400, causing ~2-3s delay per message
- #57875 Discord: paragraphs split into separate messages mid-sentence with blockStreaming enabled
- #58658 Bug: inbound Discord messages bypass RECENT_QUEUE_MESSAGE_IDS dedup cache
- #60893 Multi-tool responses dispatched as separate messages instead of coalesced
- #62059 [Feishu] Card streaming creates duplicate card on every response (counts.final=2)
- #63027 [Bug]: Duplicate replies for single inbound on Discord
- #63409 Discord: streaming chunks break markdown formatting when split occurs inside structured elements
- #63437 [Bug]: Feishu WebSocket silently stops receiving messages after first dispatch
- #63755 Feishu channel: duplicate assistant responses when messages are queued
- #63974 [Bug]: Discord replies can become unreliable when a live session overflows and a deferred restart-required config change lands during active user wait
- #64024 Discord channel repeats previous response after LLM idle timeout
- #64876 [Bug] Agent responses contain duplicate/repeated text within a single message
- #65581 [Bug]: Agent emits duplicate Discord messages on every response
- #65993 Feishu streaming card produces duplicate/truncated messages with long replies
- #67236 [qqbot] 同一条消息触发 Agent 重复回复 2-3 次
- #67791 [Bug]: Feishu Duplicate message sent after streaming card completes — blockStreamingCoalesce regression since v2026.4.12

Open candidates:

- #38597 CJK text splitting breaks mid-character at Discord 2000-char boundary
- #41195 Bug: Feishu WebSocket reconnect causes duplicate message processing (dedup cache not restored on restart)
- #46778 飞书消息重复推送，message_id 去重失效
- #49055 Silent delivery drop after overloaded_error recovery
- #52577 Queue inbound Discord messages during WS reconnect window (~22s post-boot gap)
- #53786 [Bug]: Real-time message & task status desync between Local Dashboard and Feishu Bot
- #55036 [Bug]: Discord early commentary is not committed immediately and can be lost on gateway restart
- #56610 [Feature]: Discord delivery queue / retry on WebSocket reconnect (parity with WhatsApp)
- #57225 [Bug]: Discord multi-segment responses arrive out of order when interleaved with tool calls
- #62906 [Bug] Agent responds multiple times with identical content, causing frustrating user experience
