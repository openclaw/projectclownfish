---
repo: openclaw/openclaw
cluster_id: gitcrawl-2190-dedupe-only-20260429-remote
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
  - "#49915"
candidates:
  - "#39428"
  - "#39605"
  - "#42803"
  - "#49915"
cluster_refs:
  - "#38952"
  - "#39428"
  - "#39605"
  - "#42228"
  - "#42803"
  - "#47504"
  - "#48707"
  - "#49915"
  - "#54151"
  - "#56315"
  - "#57893"
  - "#62558"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #49915 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2190 on 2026-04-29."
---

# Gitcrawl Cluster 2190

Generated from local gitcrawl run cluster 2190 for `openclaw/openclaw`.

Display title:

> [Bug]: Feishu group chat: slash commands like /new, /status, and /model do not work and may lose message content

Cluster shape from gitcrawl:

- total members: 12
- issues: 12
- pull requests: 0
- open candidates in local store: 4
- representative: #49915, currently open in local store
- latest member update: 2026-04-28T22:51:06.906195807Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38952 [Bug] Discord slash commands in multi-account setup route to wrong agent (main agent processes command, posts via other bot account)
- #42228 Feishu: slash commands (/reset, /new, /status) not intercepted in group chats
- #47504 [Channel] Session freezes after /new command - multiple channels affected
- #48707 [Bug]: /stop command does not target topic session in Telegram forum groups
- #54151 [Bug] /stop command not working in Feishu channel
- #56315 [Bug]: Slash commands (/reset, /status, /reasoning) route to General topic instead of current forum topic (single bot)
- #57893 [Bug] Feishu slash commands not working in multi-account setup
- #62558 [Bug]: QQBot channel - Framework slash commands (/new, /reset, /status) not working

Open candidates:

- #39428 Discord account-to-agent routing falls back to default agent instead of matching by account name
- #39605 Discord/Telegram/Slack slash commands ignore session.dmScope routing
- #42803 [Bug]: Feishu text commands (/stop, /new, /status) no longer bypass queue during active agent run (3.8 regression)
- #49915 [Bug]: Feishu group chat: slash commands like /new, /status, and /model do not work and may lose message content
