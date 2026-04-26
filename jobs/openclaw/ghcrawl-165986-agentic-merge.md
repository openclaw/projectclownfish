---
repo: openclaw/openclaw
cluster_id: ghcrawl-165986-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#58004"
candidates:
  - "#14850"
  - "#19929"
  - "#40986"
  - "#46514"
  - "#51691"
  - "#51805"
  - "#52504"
  - "#57977"
  - "#58004"
  - "#59355"
  - "#59585"
  - "#60255"
  - "#68628"
cluster_refs:
  - "#14850"
  - "#19929"
  - "#40986"
  - "#46514"
  - "#51691"
  - "#51805"
  - "#52504"
  - "#57977"
  - "#58004"
  - "#59355"
  - "#59585"
  - "#60255"
  - "#68628"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #58004 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 165986 on 2026-04-26."
---

# GHCrawl Cluster 165986

Generated from local ghcrawl run cluster 165986 for `openclaw/openclaw`.

Display title:

> Feature: Cross-channel session binding (unified session across TUI + Telegram/Discord)

Cluster shape from ghcrawl:

- total members: 13
- issues: 13
- pull requests: 0
- open candidates in local store: 13
- representative: #58004, currently open in local store
- latest member update: 2026-04-26T00:46:51.768Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #14850 [Feature]: Session key override on bindings (cross-channel session unification)
- #19929 [Feature]:  Shared sessions across multiple group/channel/thread chats
- #40986 [Feature] Share memory between different sessions of the same agent
- #46514 Cross-agent channel history: agents on separate bot accounts can't see each other's session history
- #51691 Feature: Real-time session sync across surfaces (Telegram <-> TUI)
- #51805 Feature Request: Shared session context between group chats and DMs
- #52504 [Feature]: Cross-Platform Session Continuity (Context Sync Across Channels)
- #57977 [Feature]: Continuous sessions across interfaces.
- #58004 Feature: Cross-channel session binding (unified session across TUI + Telegram/Discord)
- #59355 Feature Request: Cross-channel session context sharing for the same agent
- #59585 [Feature Request] Agent loses identity context when switching between messaging channels
- #60255 [Feature Request] Session merging or reuse across channels
- #68628 [Feature Request] Cross-channel session continuity for named agents
