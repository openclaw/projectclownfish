---
repo: openclaw/openclaw
cluster_id: gitcrawl-14035-dedupe-only-20260429-remote
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
  - "#57141"
candidates:
  - "#60737"
  - "#62769"
  - "#70512"
cluster_refs:
  - "#40978"
  - "#41084"
  - "#44492"
  - "#47673"
  - "#53680"
  - "#55292"
  - "#57141"
  - "#57448"
  - "#60737"
  - "#62769"
  - "#65483"
  - "#70512"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57141 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14035 on 2026-04-29."
---

# Gitcrawl Cluster 14035

Generated from local gitcrawl run cluster 14035 for `openclaw/openclaw`.

Display title:

> [Bug]: Telegram DM topic ACP bind fails on next message with missing ACP metadata

Cluster shape from gitcrawl:

- total members: 12
- issues: 12
- pull requests: 0
- open candidates in local store: 3
- representative: #57141, currently closed in local store
- latest member update: 2026-04-28T15:57:31.337248969Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40978 [Bug] Media/images not forwarded to agent when using ACP topic binding
- #41084 Telegram topic-bound ACP sessions spawn successfully but follow-up messages do not route into the bound ACP session
- #44492 [Bug]: Telegram forum topic loses ACP/OpenCode routing after heavy bound turn; topic recovers only after gateway restart and then fails again under load
- #47673 Feature request: first-class ACPX support for Telegram topic/thread sessions
- #53680 [Bug] ACP binding routes to wrong agent on second message (first message works fine)
- #55292 Telegram ACP persistent binding sessions do not deliver completions back to the originating topic
- #57141 [Bug]: Telegram DM topic ACP bind fails on next message with missing ACP metadata
- #57448 [Feature]: DM conversation handoff for ACP agent sessions
- #65483 Feature Request: Telegram Topics 会话隔离支持

Open candidates:

- #60737 [Feature]: Per-DM/per-chat default ACP binding for auto-spawning ACP sessions on new topics
- #62769 [Feature]: Support ACP configured bindings for Telegram DMs (not just groups/topics)
- #70512 Feature Request: Feishu DM thread/topic-based session isolation
