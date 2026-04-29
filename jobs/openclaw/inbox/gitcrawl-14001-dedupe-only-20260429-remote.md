---
repo: openclaw/openclaw
cluster_id: gitcrawl-14001-dedupe-only-20260429-remote
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
  - "#59816"
candidates:
  - "#8295"
  - "#20321"
  - "#23896"
  - "#38346"
  - "#39661"
  - "#40530"
  - "#40895"
  - "#42222"
  - "#43512"
  - "#43588"
  - "#44502"
  - "#45803"
  - "#48945"
  - "#49962"
  - "#51534"
  - "#52568"
  - "#53467"
  - "#54414"
  - "#57229"
  - "#57464"
  - "#57476"
  - "#59816"
  - "#62066"
  - "#63148"
  - "#63230"
  - "#68325"
cluster_refs:
  - "#8295"
  - "#20321"
  - "#23896"
  - "#38346"
  - "#39661"
  - "#40180"
  - "#40267"
  - "#40530"
  - "#40895"
  - "#41811"
  - "#42222"
  - "#43512"
  - "#43587"
  - "#43588"
  - "#43970"
  - "#44183"
  - "#44233"
  - "#44502"
  - "#44524"
  - "#44526"
  - "#44545"
  - "#45297"
  - "#45300"
  - "#45345"
  - "#45803"
  - "#46083"
  - "#48945"
  - "#49962"
  - "#50547"
  - "#50806"
  - "#50874"
  - "#51534"
  - "#52568"
  - "#53467"
  - "#54277"
  - "#54353"
  - "#54414"
  - "#54837"
  - "#54921"
  - "#55570"
  - "#57229"
  - "#57464"
  - "#57476"
  - "#57929"
  - "#58010"
  - "#59816"
  - "#62066"
  - "#63049"
  - "#63148"
  - "#63230"
  - "#63911"
  - "#65559"
  - "#67862"
  - "#68220"
  - "#68325"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59816 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14001 on 2026-04-29."
---

# Gitcrawl Cluster 14001

Generated from local gitcrawl run cluster 14001 for `openclaw/openclaw`.

Display title:

> fix(discord): record history entry when dropping bot message in allowBots=mentions mode

Cluster shape from gitcrawl:

- total members: 55
- issues: 27
- pull requests: 28
- open candidates in local store: 26
- representative: #59816, currently open in local store
- latest member update: 2026-04-28T22:51:07.454933728Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40180 fix(slack): add opt-out for implicit thread mentions [AI-assisted]
- #40267 [Bug]: Discord allowBots defaults to false with no error — bot messages silently ignored
- #41811 feat(slack): add thread.autoReplyOnParticipation config option
- #43587 [Feature]: Slack allowBots: "mentions" mode (parity with Discord)
- #43970 Feature: Thread-level requireMention default + slash command toggle
- #44183 [Bug]: Discord thread mentions not working
- #44233 feat: BUG - Add thread.requireExplicitMention option for Slack plugin
- #44524 [Bug]: Discord mention detection fails when mentionedUsers array is empty
- #44526 fix(discord): add content-based mention detection fallback
- #44545 fix(discord): add content-based fallback for mention detection
- #45297 [Feature]: Signal groups should support mention gating like other channels
- #45300 Bug: requireMention: true broken in multi-account Discord config — all messages return no-mention
- #45345 fix(discord): honor raw mention tokens in preflight
- #46083 fix: add allowed_mentions to enable Discord bot mentions
- #50547 [Bug]: Discord bot does not reply to messages after onboarding"
- #50806 allowBots: "mentions" — bot-authored messages with real @mention not triggering sessions
- #50874 feat(slack): add requireMentionInThreads config to disable implicit thread mentions
- #54277 bug(discord): unconfigured channels bypass allowlist when channelAllowlistConfigured=true
- #54353 fix(discord): block unconfigured channels under groupPolicy allowlist
- #54837 Slack: requireMention should suppress implicit thread mentions (multi-agent blocker)
- #54921 fix: Telegram and core channels not loading when plugin allowlist is enabled
- #55570 feat(slack): add ignoreOtherMentions channel option
- #57929 fix(plugins): load bundled plugins with enabledByDefault at gateway startup
- #58010 docs/discord: bot-to-bot messaging — guild users list is primary gate, "bot:" prefix in allowFrom not recognized
- #63049 fix(feishu): route control commands to a dedicated queue so /stop bypasses active runs [AI-assisted]
- #63911 Discord: Bot ignores messages in thread if not mentioned in the initial thread creation message
- #65559 [Bug]: allowBots: "mentions" silently drops webhook messages — mentionedUsers empty for webhook authors
- #67862 (FIX) Discord: enforce member allowlists for native commands
- #68220 Feature request: allowBots filter for Telegram channel (mirrors Discord behavior)

Open candidates:

- #8295 [Feature]: Add allowBots support for Telegram groups (parity with Discord/Slack)
- #20321 [Feature]: Allow telegram groups by creating allowList of users
- #23896 [Feature]: requireMentionFromIds
- #38346 [Feature]: Telegram listen to all messages but triggered by few
- #39661 Feature: Discord channel-level per-user mention policy for agent replies
- #40530 feat(feishu): add requireMentionInThread to allow thread replies without @mention
- #40895 Discord Thread Mention Handling Bug
- #42222 fix(discord): clarify allowBots bot-message drops
- #43512 fix(feishu): bypass per-chat queue for control commands
- #43588 feat(slack): add allowBots "mentions" mode (parity with Discord)
- #44502 [Bug]: Discord routing / mention-gating issue in OpenClaw
- #45803 Discord: Bot mentions do not trigger notifications (missing allowed_mentions)
- #48945 feat(feishu): skip @-mention for thread follow-ups in topic-scoped sessions
- #49962 fix: groupPolicy 'open' should not be overridden by explicit group entries
- #51534 [Feature]: Discord - auto-inject @mention for guild message replies
- #52568 [Feature]: Discord thread-reply mention gate — respond to thread starter freely, require mention for follow-up replies
- #53467 feat(slack): add ignoreOtherMentions channel config
- #54414 feat(slack): add configurable thread implicit mentions
- #57229 fix(gateway): apply bundled allowlist compat for channel plugins at startup
- #57464 fix: skip loading unused bundled channels when plugins.allow is set
- #57476 fix(plugins): bundled channel plugins bypass plugins.allow allowlist
- #59816 fix(discord): record history entry when dropping bot message in allowBots=mentions mode
- #62066 Add requireMention: "strict" mode to disable implicit thread mention bypass
- #63148 feat(feishu): scope DM topic sessions + per-topic dispatch parallelism
- #63230 feat: per-channel thread.requireExplicitMention override for Slack
- #68325 telegram: add allowBots parity for inbound filtering
