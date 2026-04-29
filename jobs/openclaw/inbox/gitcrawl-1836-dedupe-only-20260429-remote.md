---
repo: openclaw/openclaw
cluster_id: gitcrawl-1836-dedupe-only-20260429-remote
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
  - "#57601"
candidates:
  - "#46899"
  - "#58443"
  - "#64831"
  - "#70814"
cluster_refs:
  - "#37315"
  - "#38244"
  - "#39010"
  - "#40048"
  - "#40915"
  - "#41128"
  - "#41129"
  - "#41667"
  - "#41764"
  - "#42170"
  - "#42695"
  - "#43177"
  - "#44213"
  - "#44232"
  - "#44413"
  - "#44596"
  - "#45806"
  - "#46899"
  - "#47524"
  - "#49116"
  - "#49258"
  - "#50170"
  - "#50303"
  - "#50424"
  - "#50450"
  - "#50735"
  - "#51171"
  - "#52706"
  - "#53309"
  - "#53769"
  - "#53824"
  - "#54303"
  - "#54324"
  - "#54708"
  - "#54741"
  - "#54836"
  - "#55271"
  - "#55275"
  - "#55375"
  - "#56388"
  - "#56478"
  - "#56849"
  - "#57392"
  - "#57491"
  - "#57601"
  - "#57619"
  - "#57867"
  - "#58443"
  - "#58549"
  - "#58611"
  - "#59113"
  - "#59951"
  - "#60202"
  - "#60251"
  - "#60845"
  - "#60921"
  - "#61174"
  - "#61222"
  - "#61414"
  - "#61575"
  - "#61758"
  - "#61913"
  - "#62777"
  - "#63274"
  - "#64038"
  - "#64606"
  - "#64751"
  - "#64831"
  - "#65468"
  - "#65701"
  - "#67196"
  - "#67286"
  - "#67602"
  - "#67681"
  - "#68805"
  - "#69303"
  - "#69594"
  - "#70517"
  - "#70758"
  - "#70814"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57601 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1836 on 2026-04-29."
---

# Gitcrawl Cluster 1836

Generated from local gitcrawl run cluster 1836 for `openclaw/openclaw`.

Display title:

> [Bug]: Cron jobs created via CLI do not send scheduled messages to Telegram (Tinohost auto-install)

Cluster shape from gitcrawl:

- total members: 80
- issues: 79
- pull requests: 1
- open candidates in local store: 4
- representative: #57601, currently closed in local store
- latest member update: 2026-04-28T21:55:43.740169544Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #37315 Cron delivered status shows as error - false positive when message actually sent successfully
- #38244 Bug: Isolated Session Cron Job Delivery Fails with 'not-delivered' Status
- #39010 Critical: Telegram message replay storm after upgrade to 2026.3.2
- #40048 [Bug]: WhatsApp messages sent twice - debounceMs not effective
- #40915 [Bug]: Telegram double messages (then 1 is deleted)
- #41128 [Bug]: Isolated cron + announce delivery regression in 2026.3.8 - sessions not created, no messages delivered
- #41129 [Bug]: Cron announce delivery reports success but messages never arrive (Telegram)
- #41667 [Bug] Cron job delivery routes to wrong topic after gateway restart mid-announce (1012 close)
- #41764 [Bug] Cron job reports lastError even when message was delivered
- #42170 [Bug] Cron job delivery to Telegram fails with isolated session
- #42695 Bug: Cron delivery duplicates announce mode messages to Discord
- #43177 Cron announce may report delivered=true without actual Telegram delivery
- #44213 [Bug]: cron isolated announce can leak NO_REPLY/status narration to Telegram
- #44232 [Bug]: v2026.3.11 cron manual runs enqueue but do not appear in run history; Telegram isolated announce delivery also flaky
- #44413 OpenClaw Cron任务Delivery投递Bug - sessionTarget=main不发起delivery请求
- #44596 Cron job delivery 显示 delivered 但实际未送达
- #45806 [Bug]: Cron job with delivery.channel "last" resolves to @heartbeat instead of actual Telegram chat
- #47524 [Bug]: Cron delivery.mode="announce" silently fails with multi-channel configurations
- #49116 Cron session cannot send messages to Feishu - defaults to 'heartbeat' target
- #49258 Bug: Cron job state inconsistency - lastDelivered: true but lastRunStatus: error
- #50170 [Bug]: Cron jobs report status: "error" with "Message failed" despite successful Discord delivery
- #50303 [Bug]: cron jobs can be created and delivered by CLI, but do not materialize from Telegram/WebChat conversation; exec is also unreliable from chat
- #50424 [Bug]: 简单的，复制下面内容粘贴到 GitHub：  标题：  Telegram消息每次发送两次  正文：  每次发送消息，Telegram会被重新启动，导致同一条消息发送两次。请修复。
- #50450 [Bug]: 建议Telegram 重复发送消息 Bug
- #50735 [Bug]: wechat-access channel: Cron/announce notifications not delivered
- #51171 Bug: Voice/audio messages via Telegram delivered twice — causes duplicate agent replies
- #52706 Bug: Cron Job delivery channel defaults to 'last' instead of valid channel
- #53309 Bug: cron delivery 任务显示 Message failed 但实际已送达
- #53769 Cron delivery to Slack failing with 'Unsupported channel: slack'
- #53824 [Bug]: Isolated cron job delivery fails with 'Unknown Channel' after gateway restart
- #54303 [Bug]: 定时任务微信投递失败
- #54324 [Bug] WhatsApp messages have duplicated content (repeated text)
- #54708 [Bug]: Message Loss on Telegram Network Failure
- #54741 [Bug] echoTranscript messages delayed/buffered in Telegram direct chat - only delivered after gateway restart
- #54836 [Bug]: WhatsApp: responses sent twice (duplicate messages) via webchat surface
- #55271 Cron isolated + announce delivery fails: target resolved to @heartbeat instead of specified chat ID
- #55275 [Bug]: Telegram outbound broken for cron announces and echoTranscript — messages queue silently, flush only on restart
- #55375 [Bug]: Cron delivery rejects explicit channel: "telegram" with "Unsupported channel" after gateway restart
- #56388 [Bug]:Isolated cron sessions lose Telegram outbound config after gateway restart/update
- #56478 [Bug]: WeChat plugin fails to send messages from isolated cron sessions
- #56849 Bug: WhatsApp Gateway - Message Duplication and Loop After Credential Recovery
- #57392 Bug: cron delivery with `channel: "last"` silently fails in isolated sessions
- #57491 Cron delivery fails with 'Unknown Channel' when multiple channels configured
- #57601 [Bug]: Cron jobs created via CLI do not send scheduled messages to Telegram (Tinohost auto-install)
- #57619 Bug: Subagent/cron messages not delivered to WeChat (openclaw-weixin)
- #57867 [Bug] Isolated cron sessions still cannot deliver to Telegram on v2026.3.28
- #58549 Bug: Inbound messages re-delivered during API provider outage — missing message_id deduplication in gateway retry loop
- #58611 Telegram: Duplicate message storm during LLM API outages (missing message_id deduplication)
- #59113 [Bug]: Telegram inbound message duplication — no dedup on identical webhook deliveries
- #59951 [Bug]: Duplicate Inbound Message Delivery
- #60202 Duplicate message delivery on Telegram persists in 2026.4.2
- #60251 [Bug]: Cron jobs failed to send messages after enabling the ACP..
- #60845 cron: failureAlert never fires — all error jobs show deliveryStatus 'not-requested'
- #60921 [Bug] Isolated cron session delivery fails with 'Channel is required' even when delivery.channel is explicitly set
- #61174 [Bug]: openclaw-weixin reply delivery fails after long agent turn — contextToken appears to expire
- #61222 Duplicate inbound messages in Telegram group sessions (same message_id delivered twice)
- #61414 [Bug]: Cron delivery ignores explicit delivery.channel when sessionTarget=isolated
- #61575 [Bug]: WhatsApp gateway message duplication on reconnection
- #61758 [Bug] Duplicate message ingestion - inbound messages appear 2x in session context (Telegram)
- #61913 [Bug]: Cron Announce Delivery Reports False Success
- #62777 cron: failureAlert never fires + channel: prefix stripped in delivery path
- #63274 [Bug]: Cron Telegram delivery broken on v2026.4.8
- #64038 Bug: Telegram sendMessage retried without idempotency key causes duplicate messages
- #64606 Duplicate Telegram message sent after provider timeout + retry
- #64751 [Bug]: Cron jobs marked as "error" despite successful agent run — delivery marking issue (Telegram announce)
- #65468 [Bug] MEDIA: directive delivers audio attachment twice on Telegram (duplicate voice notes)
- #65701 [Bug]:  Telegram provider sends duplicate messages for every response
- #67196 Cron `delivery.announce` posts 3 messages instead of 1 after v2026.4.5 upgrade
- #67286 [Bug] Isolated cron sessions silently fail when exec is blocked — no output delivered
- #67602 [Bug]: Cron announce delivery fails with 'Unsupported channel: <channel-id>' for Slack channels
- #67681 [Bug] Cron agent session generates duplicate reply despite --no-deliver flag
- #68805 [Bug] openclaw-weixin: outbound push reports success but never delivers to personal WeChat accounts
- #69303 [Bug] Inbound dedupe released on error path can replay same message_id after provider failure
- #69594 Cron delivery status shows 'delivered' but message was never actually sent to channel
- #70517 [Bug]: Telegram voice/audio messages have significant delivery delay (~2 minutes) before agent receives them
- #70758 [Bug]: Cron --announce fails with numeric Telegram chatId: Unsupported channel

Open candidates:

- #46899 [Bug]: Cron Job Delivery Channel Mismatch - Telegram Configured but Feishu Used
- #58443 [Bug] Gateway duplicates inbound messages — same message injected multiple times into session
- #64831 [Bug]: Cron jobs run inconsistently, chat-triggered exec unstable, and missing catch-up delivery on Telegram
- #70814 fix(cron): accept numeric telegram announce chat ids (Fixes #70758)
