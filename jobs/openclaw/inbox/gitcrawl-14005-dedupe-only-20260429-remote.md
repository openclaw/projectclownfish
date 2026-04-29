---
repo: openclaw/openclaw
cluster_id: gitcrawl-14005-dedupe-only-20260429-remote
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
  - "#56455"
candidates:
  - "#61502"
  - "#70623"
cluster_refs:
  - "#39145"
  - "#39274"
  - "#41526"
  - "#42054"
  - "#42178"
  - "#42615"
  - "#43508"
  - "#46683"
  - "#47464"
  - "#48969"
  - "#49210"
  - "#51771"
  - "#52579"
  - "#53189"
  - "#53416"
  - "#54674"
  - "#54681"
  - "#54753"
  - "#55070"
  - "#55240"
  - "#55594"
  - "#56142"
  - "#56405"
  - "#56426"
  - "#56428"
  - "#56455"
  - "#56714"
  - "#56717"
  - "#57219"
  - "#57248"
  - "#57724"
  - "#57925"
  - "#58009"
  - "#58602"
  - "#59885"
  - "#60880"
  - "#61502"
  - "#62040"
  - "#62046"
  - "#63858"
  - "#64442"
  - "#64801"
  - "#67724"
  - "#69206"
  - "#70623"
  - "#70745"
  - "#70804"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #56455 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14005 on 2026-04-29."
---

# Gitcrawl Cluster 14005

Generated from local gitcrawl run cluster 14005 for `openclaw/openclaw`.

Display title:

> [Bug]: Discord slash commands fail with "You are not authorized" in guild channels — InteractionEventListener exceeds 3s deadline

Cluster shape from gitcrawl:

- total members: 47
- issues: 47
- pull requests: 0
- open candidates in local store: 2
- representative: #56455, currently closed in local store
- latest member update: 2026-04-28T05:49:58.124950407Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39145 Discord listener blocks on slow AI responses, causing multi-minute delays
- #39274 Discord: MESSAGE_CREATE listener times out (80+ seconds)
- #41526 [Bug]: Automatic replies fail silently after the first successful message on a new channel
- #42054 Discord button interactions expire before agent responds
- #42178 Discord: Slow DiscordMessageListener (300s+) causes WebSocket 1006 drops and gateway crash
- #42615 Discord guild MESSAGE_CREATE events not delivered to gateway (2026.3.8)
- #43508 Discord button interactions not routing back to agent
- #46683 Slack interactive reply button clicks not routed to agent sessions
- #47464 Slack interactive replies: three bugs preventing end-to-end button/select flows
- #48969 Discord Guilds intent missing - causes channels unresolved error
- #49210 Discord inbound messages silently dropped in 2026.3.13
- #51771 Discord gateway WebSocket drops every ~10min - intents:content=limited treated as blocker
- #52579 Discord INTERACTION_CREATE handler exceeds 3s timeout — modals broken
- #53189 /status slash command shows 'Done' without status card after 3.13→3.22 upgrade
- #53416 Discord native slash commands return empty 'Done' after Carbon reconcile migration (v2026.3.22+)
- #54674 Bug: [[slack_buttons:]] directive not rendered in monitor DM reply path
- #54681 Discord /new slash command fails to reset session since Carbon reconcile (v2026.3.22)
- #54753 Slack interactive button clicks not routed to agent session (message tool + interactive param)
- #55070 Discord slash commands intermittently fail with "This channel is not allowed" after gateway restart/reload due to duplicate InteractionEventListener
- #55240 [Bug]: Discord slash commands return Done with no content - InteractionEventListener exceeds 3s deadline
- #55594 Discord MESSAGE_CONTENT intent not requested — gateway receives no MESSAGE_CREATE events
- #56142 Slack block_actions not dispatched as inbound messages — buttons never wake session
- #56405 [Bug]: After upgrading to openclaw 2026.3.24, Slack DMs still work normally, but Slack channel messages no longer produce automatic replies.
- #56426 [Bug]: plugins.allow breaks Telegram channel in OpenClaw 2026.3.24 on WSL2
- #56428 Discord channel enabled but silently ignored by gateway — not shown in status probe
- #56455 [Bug]: Discord slash commands fail with "You are not authorized" in guild channels — InteractionEventListener exceeds 3s deadline
- #56714 Silent channel disable when plugins.allow excludes bundled channel plugins
- #56717 plugins.allow semantics undocumented — unexpectedly gates bundled channel plugins
- #57219 plugins.allow allowlist silently blocks bundled Telegram channel plugin
- #57248 [BUG] InteractionEventListener stalls up to 78s on Discord
- #57724 Discord native slash commands silently fail - InteractionEventListener processes INTERACTION_CREATE but never responds
- #57925 v2026.3.28: Discord extension silently skipped during gateway startup — zero channels load despite valid config
- #58009 docs/config: plugins.allow allowlist silently blocks all stock channel plugins (Discord, Signal, etc.) when set
- #58602 Discord /new slash command times out - needs deferReply()
- #59885 Discord components v2 buttons: INTERACTION_CREATE not matched by wildcard handler
- #60880 Discord slash subcommands timeout (Unknown interaction) after 2026.4.2 update
- #62040 Discord: intents.messageContent config key missing — Message Content Intent not requestable
- #62046 Discord: intents.messageContent config key missing — Message Content Intent not requestable
- #63858 Discord GUILDS intent missing - bots cannot list channels
- #64442 Discord: DiscordReactionRemoveListener timeout (120s) causes stale-socket restart loop
- #64801 Discord channel silently fails to load when `plugins.allow` list is present but excludes discord
- #67724 [Bug]: interactiveReplies button clicks not waking agent session (event received, no dispatch)
- #69206 [Bug]: Telegram /dock_discord falls through to normal chat instead of native dock handling on 2026.4.15
- #70745 [Bug]: Discord DM fails with "Unknown Channel" in 2026.4.21 (regression from 2026.4.14)
- #70804 [Bug]: Slack channel mentions reach OpenClaw but no reply is sent; /openclaw still times out on 2026.4.22

Open candidates:

- #61502 Slack interactive button clicks should reliably reach the target session and thread
- #70623 [Bug]: Channel issues on Telegram and Discord in OpenClaw 2026.4.21
