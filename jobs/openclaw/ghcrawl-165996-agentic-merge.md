---
repo: openclaw/openclaw
cluster_id: ghcrawl-165996-agentic-merge
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
  - "#38996"
candidates:
  - "#38808"
  - "#38996"
  - "#39507"
  - "#40147"
  - "#42296"
  - "#44118"
  - "#47961"
  - "#55521"
  - "#67068"
  - "#67069"
  - "#67783"
cluster_refs:
  - "#38808"
  - "#38996"
  - "#39507"
  - "#40147"
  - "#42296"
  - "#44118"
  - "#47961"
  - "#55521"
  - "#67068"
  - "#67069"
  - "#67783"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #38996 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 165996 on 2026-04-26."
---

# GHCrawl Cluster 165996

Generated from local ghcrawl run cluster 165996 for `openclaw/openclaw`.

Display title:

> fix(feishu): reply inside P2P thread instead of as standalone message

Cluster shape from ghcrawl:

- total members: 11
- issues: 1
- pull requests: 10
- open candidates in local store: 11
- representative: #38996, currently open in local store
- latest member update: 2026-04-25T07:30:10.477Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38808 fix(feishu): reply inside thread for P2P direct messages
- #38996 fix(feishu): reply inside P2P thread instead of as standalone message
- #39507 fix(feishu): make replyInThread "disabled" fully suppress thread replies
- #40147 fix(feishu): prioritize root_id before replyInThread when replying
- #42296 fix(feishu): replace raw media JSON with placeholder in agent body
- #44118 fix(feishu): bypass mention gate for slash commands in group chats
- #47961 feat(feishu): send delayed acknowledgment for slow direct messages
- #55521 feat(feishu): add immediate Typing reaction on message receipt
- #67068 feat(feishu): Pass thread_id (root_id) as MessageThreadId in inbound context
- #67069 feat(feishu): pass thread_id as MessageThreadId in inbound context
- #67783 fix(feishu): target typing reaction on inbound
