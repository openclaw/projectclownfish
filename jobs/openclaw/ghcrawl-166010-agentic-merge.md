---
repo: openclaw/openclaw
cluster_id: ghcrawl-166010-agentic-merge
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
  - "#49767"
candidates:
  - "#39569"
  - "#44256"
  - "#49767"
  - "#49770"
  - "#50144"
  - "#50394"
  - "#50801"
  - "#58867"
  - "#59422"
cluster_refs:
  - "#39569"
  - "#44256"
  - "#49767"
  - "#49770"
  - "#50144"
  - "#50394"
  - "#50801"
  - "#58867"
  - "#59422"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #49767 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 166010 on 2026-04-26."
---

# GHCrawl Cluster 166010

Generated from local ghcrawl run cluster 166010 for `openclaw/openclaw`.

Display title:

> fix(feishu): @所有人 (@all) no longer triggers every bot unconditionally

Cluster shape from ghcrawl:

- total members: 9
- issues: 0
- pull requests: 9
- open candidates in local store: 9
- representative: #49767, currently open in local store
- latest member update: 2026-04-24T18:56:29.128Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39569 fix(feishu): detect bot mention in reply messages and prevent unwanted thread routing
- #44256 fix(feishu): do not treat @all as a bot mention
- #49767 fix(feishu): @所有人 (@all) no longer triggers every bot unconditionally
- #49770 fix(feishu): stop @_all from triggering all bots in group chat
- #50144 fix(feishu): gate @所有人 (@all) mentions behind respondToAtAll config
- #50394 fix(feishu): stop treating @all as a direct bot mention in group chats
- #50801 fix(feishu): do not treat @_all as a bot-specific mention
- #58867 fix(feishu): do not treat @all as bot mention unless respondToAtAll is enabled
- #59422 feat(feishu): add ignoreAtAll configuration option
