---
repo: openclaw/openclaw
cluster_id: gitcrawl-7350-dedupe-only-20260429-remote
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
  - "#50158"
candidates:
  - "#50076"
  - "#50160"
cluster_refs:
  - "#48125"
  - "#50076"
  - "#50157"
  - "#50158"
  - "#50159"
  - "#50160"
  - "#50162"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #50158 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 7350 on 2026-04-29."
---

# Gitcrawl Cluster 7350

Generated from local gitcrawl run cluster 7350 for `openclaw/openclaw`.

Display title:

> fix: add format validation for gateway.nodes.denyCommands

Cluster shape from gitcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 2
- representative: #50158, currently closed in local store
- latest member update: 2026-04-28T18:04:42.63120785Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #48125 fix: add null checks in Feishu plugin webhook parsing to prevent Gateway crash
- #50157 fix: change Ollama connection failure log level from warn to debug
- #50158 fix: add format validation for gateway.nodes.denyCommands
- #50159 fix: add path existence check for config set command
- #50162 fix: add null check for Discord webhookId and webhookToken

Open candidates:

- #50076 fix(config): validate denyCommands after gateway.nodes writes
- #50160 fix: throw error on Discord delivery failure instead of returning unknown
