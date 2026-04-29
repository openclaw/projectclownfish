---
repo: openclaw/openclaw
cluster_id: gitcrawl-1998-dedupe-only-20260429-remote
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
  - "#41105"
candidates:
  - "#39772"
  - "#40366"
  - "#41403"
  - "#45290"
  - "#47631"
  - "#48466"
  - "#53762"
  - "#54165"
  - "#55550"
  - "#58101"
  - "#60830"
  - "#63695"
  - "#64731"
  - "#65421"
  - "#71554"
cluster_refs:
  - "#38340"
  - "#39213"
  - "#39772"
  - "#40330"
  - "#40366"
  - "#40769"
  - "#40866"
  - "#41105"
  - "#41403"
  - "#42226"
  - "#42227"
  - "#42393"
  - "#42479"
  - "#45290"
  - "#45947"
  - "#47631"
  - "#48408"
  - "#48466"
  - "#49096"
  - "#49715"
  - "#49785"
  - "#50338"
  - "#50434"
  - "#50934"
  - "#50938"
  - "#52216"
  - "#52389"
  - "#53762"
  - "#54165"
  - "#54318"
  - "#55550"
  - "#56675"
  - "#56677"
  - "#57310"
  - "#58101"
  - "#59543"
  - "#60830"
  - "#61226"
  - "#63695"
  - "#64731"
  - "#65421"
  - "#65761"
  - "#66891"
  - "#67997"
  - "#68568"
  - "#69063"
  - "#70118"
  - "#70769"
  - "#71083"
  - "#71094"
  - "#71124"
  - "#71554"
  - "#72038"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41105 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1998 on 2026-04-29."
---

# Gitcrawl Cluster 1998

Generated from local gitcrawl run cluster 1998 for `openclaw/openclaw`.

Display title:

> fix(telegram): align draft streaming with real partials

Cluster shape from gitcrawl:

- total members: 53
- issues: 4
- pull requests: 49
- open candidates in local store: 15
- representative: #41105, currently closed in local store
- latest member update: 2026-04-28T22:51:07.519293064Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38340 fix(dispatcher): add beforeDeliver hook, wire message_sending for Discord
- #39213 fix(telegram): coalesce streaming preview across tool-call rounds in partial mode
- #40330 fix(telegram): coalesce DM streaming into single message in partial mode
- #40769 fix(telegram): send fallback when model produces empty output without error
- #40866 fix(telegram): clear previous draft on forceNewMessage to prevent stale drafts
- #41105 fix(telegram): align draft streaming with real partials
- #42226 Slack: double response on voice messages due to draft stream race condition
- #42227 slack: fix draft stream race causing double responses on voice messages
- #42393 fix(slack): prevent streaming preview from showing only final chunk
- #42479 fix(telegram): restore draft-style auto transport for DM answer preview
- #45947 fix(telegram): fall back when reply target is missing
- #48408 fix: wire message_sending plugin hook into all channel reply dispatchers
- #49096 Slack: deduplicate when reply tag text matches remaining body
- #49715 fix: keep slack block streaming replies in thread
- #49785 fix(slack): reuse thread ts across block deliveries in first reply mode
- #50338 fix(telegram): preserve default replyToId when replyToMode is all
- #50434 fix(telegram): use trigger message id as reply-to fallback for replyToMode
- #50934 fix(telegram): emit message:sent hook for streaming replies
- #50938 fix(telegram): emit sent hooks for preview finals
- #52216 docs: clarify plugin hook systems: api.registerHook vs api.on
- #52389 fix(slack): strip stray HEARTBEAT_OK tokens before delivery
- #54318 fix(discord): wire message_sending and message_sent hooks in inbound delivery (Fixes #54220)
- #56675 Slack streaming: mutual exclusion between streaming modes causes duplicate delivery, stale previews, and thread misrouting
- #56677 fix(slack): enforce streaming mode mutual exclusion + guard stream teardown
- #57310 fix(slack): keep block streaming replies in thread (rebased #49715)
- #59543 feat(plugins): add outbound-whitelist plugin and wire message_sending hooks into WhatsApp and Discord delivery
- #61226 fix(telegram): finalize the latest matching partial preview
- #65761 fix(reply): await block streaming delivery on same-channel dispatch
- #66891 fix(discord): preserve interactive components on replies
- #67997 docs(plugins): fix broken links in plugin.md for GitHub rendering
- #68568 fix(telegram): suppress duplicate finals when preview cleanup is disabled
- #69063 fix(slack): dedupe delivery in streaming fallback catch path
- #70118 fix(auto-reply): run message_sending before inbound delivery
- #70769 fix(slack): wire message_sending plugin hook into reply delivery path
- #71083 Slack double-reply bug: draftStream.flush() fires after deliverNormally when streaming defaults to "partial"
- #71094 fix(discord): run message_sending hooks before reply delivery
- #71124 fix(slack): route stream-fallback delivery through chunked sender (follow-up to #70370)
- #72038 fix(telegram): send fresh finals for stale previews

Open candidates:

- #39772 fix(telegram): apply reply_to only to first stream preview to avoid 'Deleted message'
- #40366 fix(slack): harden no-reply fallback delivery
- #41403 docs: define hook surface ownership and middleware guidance
- #45290 fix(core): harden delivery fallback and outbound recovery
- #47631 fix(telegram): restore native draft streaming for DM answer lanes
- #48466 fix(telegram): recover from HTML parse errors during streaming preview
- #53762 fix(telegram): flush buffered final answer when reasoning delivery is skipped [AI-assisted]
- #54165 fix(heartbeat): strip [TOOL_CALL]/[TOOL_RESULT] bracket blocks from heartbeat replies
- #55550 fix: report correct Telegram bot health status (#55482)
- #58101 fix(heartbeat): strip HEARTBEAT_OK token from mid-text positions
- #60830 fix(agents): detect empty provider responses as failures, improve Telegram error routing
- #63695 fix(telegram): finalize the best matching partial preview
- #64731 fix(telegram): show model fallback notices outside verbose mode
- #65421 fix(discord): add message_sending plugin hook to reply delivery path
- #71554 Fix: telegram preview finalization recovery, issue #71525
