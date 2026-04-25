---
repo: openclaw/openclaw
cluster_id: ghcrawl-143800-bug-cron-announce-delivery-reports-success-but-messages-never-ar
mode: plan
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
require_human_for:
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#41129"
candidates:
  - "#46899"
  - "#57491"
  - "#57601"
  - "#57867"
  - "#60845"
  - "#60921"
  - "#62777"
  - "#64751"
  - "#64831"
  - "#67196"
  - "#67602"
  - "#69594"
cluster_refs:
  - "#41128"
  - "#41129"
  - "#41667"
  - "#42170"
  - "#42695"
  - "#43177"
  - "#44213"
  - "#44232"
  - "#44413"
  - "#44596"
  - "#46899"
  - "#47524"
  - "#49116"
  - "#53769"
  - "#53824"
  - "#54741"
  - "#55271"
  - "#55275"
  - "#56388"
  - "#57491"
  - "#57601"
  - "#57867"
  - "#60845"
  - "#60921"
  - "#61414"
  - "#61913"
  - "#62777"
  - "#63274"
  - "#64751"
  - "#64831"
  - "#67196"
  - "#67286"
  - "#67602"
  - "#69594"
canonical_hint: "ghcrawl representative #41129 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from ghcrawl run cluster 143800 on 2026-04-25."
---

# GHCrawl Cluster 143800

Generated from local ghcrawl run cluster 143800 for `openclaw/openclaw`.

Display title:

> [Bug]: Cron announce delivery reports success but messages never arrive (Telegram)

Cluster shape from ghcrawl:

- total members: 34
- issues: 34
- pull requests: 0
- open candidates in local store: 12
- representative: #41129, currently closed in local store
- latest member update: 2026-04-25T17:12:54.247Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- #41128 [Bug]: Isolated cron + announce delivery regression in 2026.3.8 - sessions not created, no messages delivered
- #41129 [Bug]: Cron announce delivery reports success but messages never arrive (Telegram)
- #41667 [Bug] Cron job delivery routes to wrong topic after gateway restart mid-announce (1012 close)
- #42170 [Bug] Cron job delivery to Telegram fails with isolated session
- #42695 Bug: Cron delivery duplicates announce mode messages to Discord
- #43177 Cron announce may report delivered=true without actual Telegram delivery
- #44213 [Bug]: cron isolated announce can leak NO_REPLY/status narration to Telegram
- #44232 [Bug]: v2026.3.11 cron manual runs enqueue but do not appear in run history; Telegram isolated announce delivery also flaky
- #44413 OpenClaw Cron任务Delivery投递Bug - sessionTarget=main不发起delivery请求
- #44596 Cron job delivery 显示 delivered 但实际未送达
- #47524 [Bug]: Cron delivery.mode="announce" silently fails with multi-channel configurations
- #49116 Cron session cannot send messages to Feishu - defaults to 'heartbeat' target
- #53769 Cron delivery to Slack failing with 'Unsupported channel: slack'
- #53824 [Bug]: Isolated cron job delivery fails with 'Unknown Channel' after gateway restart
- #54741 [Bug] echoTranscript messages delayed/buffered in Telegram direct chat - only delivered after gateway restart
- #55271 Cron isolated + announce delivery fails: target resolved to @heartbeat instead of specified chat ID
- #55275 [Bug]: Telegram outbound broken for cron announces and echoTranscript — messages queue silently, flush only on restart
- #56388 [Bug]:Isolated cron sessions lose Telegram outbound config after gateway restart/update
- #61414 [Bug]: Cron delivery ignores explicit delivery.channel when sessionTarget=isolated
- #61913 [Bug]: Cron Announce Delivery Reports False Success
- #63274 [Bug]: Cron Telegram delivery broken on v2026.4.8
- #67286 [Bug] Isolated cron sessions silently fail when exec is blocked — no output delivered

Open candidates:

- #46899 [Bug]: Cron Job Delivery Channel Mismatch - Telegram Configured but Feishu Used
- #57491 Cron delivery fails with 'Unknown Channel' when multiple channels configured
- #57601 [Bug]: Cron jobs created via CLI do not send scheduled messages to Telegram (Tinohost auto-install)
- #57867 [Bug] Isolated cron sessions still cannot deliver to Telegram on v2026.3.28
- #60845 cron: failureAlert never fires — all error jobs show deliveryStatus 'not-requested'
- #60921 [Bug] Isolated cron session delivery fails with 'Channel is required' even when delivery.channel is explicitly set
- #62777 cron: failureAlert never fires + channel: prefix stripped in delivery path
- #64751 [Bug]: Cron jobs marked as "error" despite successful agent run — delivery marking issue (Telegram announce)
- #64831 [Bug]: Cron jobs run inconsistently, chat-triggered exec unstable, and missing catch-up delivery on Telegram
- #67196 Cron `delivery.announce` posts 3 messages instead of 1 after v2026.4.5 upgrade
- #67602 [Bug]: Cron announce delivery fails with 'Unsupported channel: <channel-id>' for Slack channels
- #69594 Cron delivery status shows 'delivered' but message was never actually sent to channel
