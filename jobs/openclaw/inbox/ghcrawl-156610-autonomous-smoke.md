---
repo: openclaw/openclaw
cluster_id: ghcrawl-156610-autonomous-smoke
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
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#44256"
candidates:
  - "#39569"
  - "#44256"
  - "#49767"
  - "#49770"
  - "#50144"
  - "#50394"
  - "#50801"
  - "#58867"
  - "#72658"
cluster_refs:
  - "#39569"
  - "#44256"
  - "#49767"
  - "#49770"
  - "#50144"
  - "#50394"
  - "#50801"
  - "#58867"
  - "#72658"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #44256 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156610 on 2026-04-26."
maintainer_calibration:
  - "2026-04-27 vincentkoc approved finalization for https://github.com/openclaw/openclaw/pull/72658."
  - "Feishu @all mention handling is an ordinary provider bug unless live evidence shows a real security boundary change."
  - "Handle CI, review comments, review-bot findings, Codex /review, rebase, and merge prep before escalating."
  - "Close duplicate/superseded PRs only after the canonical fix path is merged or concretely ready according to policy."
---

# GHCrawl Cluster 156610

Generated from local ghcrawl run cluster 156610 for `openclaw/openclaw`.

Display title:

> fix(feishu): do not treat @all as a bot mention

Cluster shape from ghcrawl:

- total members: 8
- issues: 0
- pull requests: 8
- open candidates in local store: 8
- representative: #44256, currently open in local store
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
- #72658 fix(feishu): do not treat @all as a bot mention
