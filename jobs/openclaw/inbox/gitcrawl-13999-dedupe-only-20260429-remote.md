---
repo: openclaw/openclaw
cluster_id: gitcrawl-13999-dedupe-only-20260429-remote
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
  - "#60429"
candidates:
  - "#8508"
  - "#10872"
  - "#11747"
  - "#17840"
  - "#38714"
  - "#39031"
  - "#39322"
  - "#41330"
  - "#44148"
  - "#46291"
  - "#46881"
  - "#47677"
  - "#51892"
  - "#52943"
  - "#59973"
  - "#60274"
  - "#60677"
  - "#61445"
  - "#65141"
cluster_refs:
  - "#8508"
  - "#10872"
  - "#11747"
  - "#17840"
  - "#38714"
  - "#39031"
  - "#39322"
  - "#40139"
  - "#40302"
  - "#41330"
  - "#41348"
  - "#41576"
  - "#42263"
  - "#42266"
  - "#44148"
  - "#44690"
  - "#46291"
  - "#46881"
  - "#47677"
  - "#48859"
  - "#51892"
  - "#52658"
  - "#52943"
  - "#53340"
  - "#53582"
  - "#53794"
  - "#56418"
  - "#56634"
  - "#56708"
  - "#58695"
  - "#58794"
  - "#59354"
  - "#59363"
  - "#59860"
  - "#59973"
  - "#60045"
  - "#60274"
  - "#60429"
  - "#60446"
  - "#60525"
  - "#60677"
  - "#60805"
  - "#60940"
  - "#61312"
  - "#61445"
  - "#61705"
  - "#61821"
  - "#61889"
  - "#61940"
  - "#62671"
  - "#63386"
  - "#63405"
  - "#63544"
  - "#63623"
  - "#64410"
  - "#65141"
  - "#65420"
  - "#66153"
  - "#69746"
  - "#69854"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #60429 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13999 on 2026-04-29."
---

# Gitcrawl Cluster 13999

Generated from local gitcrawl run cluster 13999 for `openclaw/openclaw`.

Display title:

> iMessage plugin echoes own outbound messages as inbound

Cluster shape from gitcrawl:

- total members: 60
- issues: 55
- pull requests: 5
- open candidates in local store: 19
- representative: #60429, currently closed in local store
- latest member update: 2026-04-28T22:51:07.428444825Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40139 iMessage: stale-socket causes provider restart and message loss
- #40302 iMessage: reply tags (reply_to_current / reply_to:ID) render as literal text instead of being stripped
- #41348 iMessage delivery: garbled prefix bytes in message content
- #41576 age channel leaks [[reply_to:ID]] tags into visible message text
- #42263 [Bug]: iMessage inbound reply/quote context not parsed - missing reply_to fields
- #42266 [Bug]: iMessage inbound reply/quote context not parsed - missing reply_to fields
- #44690 [Bug]: Cross-channel duplicate message delivery when webchat and iMessage sessions share routing
- #48859 [Feature]: iMessage: Duplicate messages when sending to self (same Apple ID)
- #52658 Feature: Forward Discord reactions to plugin event handlers
- #53340 iMessage plugin sends raw [[reply_to:...]] tags as literal text
- #53582 [Bug]: iMessage self-chat creates message loop causing NO_REPLY behavior
- #53794 iMessage/imsg channel config is accepted but gateway never starts provider on macOS
- #56418 WhatsApp self-chat: outbound messages echo back as inbound in personal-number mode
- #56634 [Bug]: iMessage: [[reply_to:]] tags appear as visible text in delivered messages
- #56708 Feature: Allow reaction events to optionally trigger agent turns
- #58695 iMessage plugin: own sent messages echo back as inbound (is_from_me not filtered)
- #58794 iMessage channel: self-sent messages (is_from_me=true) echoed back as inbound
- #59354 [Bug]: iMessage file-only outbound messages bypass echo detection and trigger auto-response
- #59363 [Bug]: imessage echo loop
- #59860 iMessage self-chat echo suppression fails: message-ID short-circuit prevents text-based fallback match
- #60045 iMessage echo loop: agent's own outbound responses re-delivered as inbound messages
- #60429 iMessage plugin echoes own outbound messages as inbound
- #60446 iMessage plugin: surface tapback/reaction events to agent
- #60525 iMessage: is_from_me:true messages mis-attributed + attributedBody garbage prefixes + echo into inbound queue
- #60805 feat(plugins): enable plugins to respond to Discord reaction events
- #60940 iMessage (imsg): sent messages with is_from_me=true echoed back as inbound to session
- #61312 iMessage echo loop in self-chat: U+FFFD from attributedBody breaks echo cache text matching
- #61705 iMessage: reply tag stripping leaves garbage bytes + sent message echo loop
- #61821 iMessage echo loop: NSAttributedString garbage bytes cause echo cache miss for is_from_me messages
- #61889 iMessage: messages incorrectly dropped when is_from_me=true but isSelfChat=false
- #61940 iMessage plugin echo loop: outbound messages treated as inbound
- #62671 iMessage outbound routing regression after 2026.4.5: stale replies, status cards, and NO_REPLY leak into user thread
- #63386 iMessage echo loop: is_from_me messages not filtered correctly, bot responds to its own sent messages
- #63405 [Bug]: iMessage echo loop — agent replies re-ingested as inbound messages (reproduces on 2026.4.5 and 2026.4.8)
- #63544 iMessage echo detection fails when echoed message has NUL (\0) prefix
- #63623 [Bug]: iMessage inbound source misclassification causes self-message replay (assistant outbound treated as user inbound)
- #64410 Message queue dumps all queued messages at once causing repetitive response loops
- #65420 iMessage (imsg) channel: Echo loop when agent replies in DM - is_from_me filtering not working
- #66153 [Bug]: WhatsApp self mode interfering with Meta AI chat.
- #69746 [Bug]: WhatsApp connection also reading Meta AI chat
- #69854 [Bug] Self-messages invoke agent model despite selfChatMode: false

Open candidates:

- #8508 Feature: configurable/dynamic ack reaction emojis
- #10872 iMessage: Include reply/thread context in incoming messages
- #11747 [Feature]: Auto-Response for Discord Reaction Events
- #17840 [Feature]: opt-in reaction-triggered agent turns
- #38714 Request: Add Discord reaction event support to Hooks system
- #39031 Feature: Forward iMessage tapback reactions to agent
- #39322 feat(imessage): add tapback reaction support as inbound agent events
- #41330 iMessage channel duplicate message loop - messages sent by agent are re-ingested as inbound
- #44148 [Bug]:WhatsApp: Pause bot when human operator replies manually (outgoing message detection
- #46291 feat(whatsapp): surface forwarding metadata in inbound agent context [AI]
- #46881 feat(whatsapp): forward reaction events to agent
- #47677 Feature request: first-class Telegram reaction triggers for agent wake-up and execution
- #51892 iMessage: pass reply_to_guid to imsg for native threaded replies
- #52943 feat(imessage): wire typing indicators via imsg v0.5.0 CLI
- #59973 iMessage DM echo: corrupted prefix breaks text-based dedup (v2026.3.31+)
- #60274 [Bug]: iMessage plugin (imsg rpc) does not filter tapback reactions — treated as regular messages
- #60677 fix(imessage): filter tapback reactions in imsg rpc inbound processing
- #61445 [Bug]: iMessage echo loop on gateway restart — echo cache not warmed, self-messages replay as inbound
- #65141 iMessage duplicate replies when both channels.imessage.accounts.default and a named account exist
