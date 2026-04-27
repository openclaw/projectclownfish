---
repo: openclaw/openclaw
cluster_id: ghcrawl-156619-autonomous-smoke
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
  - "#51793"
candidates:
  - "#26517"
  - "#50404"
  - "#51793"
  - "#52266"
  - "#57210"
  - "#60741"
  - "#70783"
cluster_refs:
  - "#26517"
  - "#50404"
  - "#51793"
  - "#52266"
  - "#57210"
  - "#60741"
  - "#70783"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #51793 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156619 on 2026-04-26."
---

# GHCrawl Cluster 156619

Generated from local ghcrawl run cluster 156619 for `openclaw/openclaw`.

Display title:

> [Feature]: Multi-chat / tabbed sessions in webchat UI

Cluster shape from ghcrawl:

- total members: 7
- issues: 7
- pull requests: 0
- open candidates in local store: 7
- representative: #51793, currently open in local store
- latest member update: 2026-04-24T18:56:29.649Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #26517 Multiple Labeled Sessions in Webchat
- #50404 Feature Request: Session Sidebar with Chat History Management
- #51793 [Feature]: Multi-chat / tabbed sessions in webchat UI
- #52266 [Feature Request] Add multi-session UI support for WebChat (session switching sidebar)
- #57210 [Feature Request] Multi-Session / New Chat Support
- #60741 [Feature Request] WebChat 多会话管理（会话列表/书签）
- #70783 [Feature]: Add tab system for managing multiple chat sessions
