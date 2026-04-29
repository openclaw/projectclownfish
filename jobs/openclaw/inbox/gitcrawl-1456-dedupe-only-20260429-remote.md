---
repo: openclaw/openclaw
cluster_id: gitcrawl-1456-dedupe-only-20260429-remote
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
  - "#40147"
candidates:
  - "#38806"
  - "#38808"
  - "#39507"
  - "#40147"
  - "#44118"
  - "#47961"
  - "#55521"
  - "#60848"
  - "#66631"
  - "#67069"
  - "#67783"
cluster_refs:
  - "#38806"
  - "#38808"
  - "#38996"
  - "#39507"
  - "#40147"
  - "#40790"
  - "#42296"
  - "#42887"
  - "#44118"
  - "#47961"
  - "#53765"
  - "#55521"
  - "#60848"
  - "#66631"
  - "#67068"
  - "#67069"
  - "#67783"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #40147 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1456 on 2026-04-29."
---

# Gitcrawl Cluster 1456

Generated from local gitcrawl run cluster 1456 for `openclaw/openclaw`.

Display title:

> fix(feishu): prioritize root_id before replyInThread when replying

Cluster shape from gitcrawl:

- total members: 17
- issues: 4
- pull requests: 13
- open candidates in local store: 11
- representative: #40147, currently open in local store
- latest member update: 2026-04-28T22:51:07.565365837Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38996 fix(feishu): reply inside P2P thread instead of as standalone message
- #40790 fix(feishu): add requireMention policy debug log for troubleshooting #40766
- #42296 fix(feishu): replace raw media JSON with placeholder in agent body
- #42887 fix(feishu): respect replyInThread config in group chats
- #53765 飞书话题群回复时无法正确识别话题，导致创建新话题而非回复到原话题
- #67068 feat(feishu): Pass thread_id (root_id) as MessageThreadId in inbound context

Open candidates:

- #38806 [Bug]: bot replies outside thread in P2P direct message thread
- #38808 fix(feishu): reply inside thread for P2P direct messages
- #39507 fix(feishu): make replyInThread "disabled" fully suppress thread replies
- #40147 fix(feishu): prioritize root_id before replyInThread when replying
- #44118 fix(feishu): bypass mention gate for slash commands in group chats
- #47961 feat(feishu): send delayed acknowledgment for slow direct messages
- #55521 feat(feishu): add immediate Typing reaction on message receipt
- #60848 Feature/feishu threadid fix
- #66631 [Bug] Feishu: Bot replies create new topics instead of replying within existing topic
- #67069 feat(feishu): pass thread_id as MessageThreadId in inbound context
- #67783 fix(feishu): target typing reaction on inbound
