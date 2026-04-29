---
repo: openclaw/openclaw
cluster_id: gitcrawl-1975-dedupe-only-20260429-remote
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
  - "#49767"
candidates:
  - "#39569"
  - "#50801"
cluster_refs:
  - "#37706"
  - "#39569"
  - "#44256"
  - "#49203"
  - "#49761"
  - "#49767"
  - "#49770"
  - "#50144"
  - "#50394"
  - "#50801"
  - "#52670"
  - "#58867"
  - "#59422"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #49767 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1975 on 2026-04-29."
---

# Gitcrawl Cluster 1975

Generated from local gitcrawl run cluster 1975 for `openclaw/openclaw`.

Display title:

> fix(feishu): @所有人 (@all) no longer triggers every bot unconditionally

Cluster shape from gitcrawl:

- total members: 13
- issues: 3
- pull requests: 10
- open candidates in local store: 2
- representative: #49767, currently closed in local store
- latest member update: 2026-04-28T22:51:06.892492581Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #37706 [Bug]: Feishu/Lark group @all should not count as bot mention
- #44256 fix(feishu): do not treat @all as a bot mention
- #49203 [Feature] Feishu @all should optionally trigger all bots
- #49761 [Bug] @所有人 (@all) triggers all bots in Feishu group chat
- #49767 fix(feishu): @所有人 (@all) no longer triggers every bot unconditionally
- #49770 fix(feishu): stop @_all from triggering all bots in group chat
- #50144 fix(feishu): gate @所有人 (@all) mentions behind respondToAtAll config
- #50394 fix(feishu): stop treating @all as a direct bot mention in group chats
- #52670 fix(feishu): do not treat @all as explicit bot mention
- #58867 fix(feishu): do not treat @all as bot mention unless respondToAtAll is enabled
- #59422 feat(feishu): add ignoreAtAll configuration option

Open candidates:

- #39569 fix(feishu): detect bot mention in reply messages and prevent unwanted thread routing
- #50801 fix(feishu): do not treat @_all as a bot-specific mention
