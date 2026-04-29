---
repo: openclaw/openclaw
cluster_id: gitcrawl-13767-dedupe-only-20260429-remote
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
  - "#53685"
candidates:
  - "#62595"
cluster_refs:
  - "#52973"
  - "#53002"
  - "#53685"
  - "#53946"
  - "#61893"
  - "#62595"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #53685 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13767 on 2026-04-29."
---

# Gitcrawl Cluster 13767

Generated from local gitcrawl run cluster 13767 for `openclaw/openclaw`.

Display title:

> External plugins fail to resolve openclaw/plugin-sdk/* imports — alias map missing argv1 fallback

Cluster shape from gitcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 1
- representative: #53685, currently closed in local store
- latest member update: 2026-04-28T05:49:57.386879877Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #52973 Bundled provider plugins can fail to resolve plugin-sdk/provider-entry from source
- #53002 [Bug]: local TS extensions importing openclaw/plugin-sdk/plugin-entry fail to load on 2026.3.22
- #53685 External plugins fail to resolve openclaw/plugin-sdk/* imports — alias map missing argv1 fallback
- #53946 [Bug] 第三方插件无法正确解析 plugin-sdk 路径
- #61893 [Bug]: pnpm check fails on main due to unresolved @openclaw/plugin-sdk subpath imports in extensions/xai

Open candidates:

- #62595 [Bug]: pnpm check fails with TS2883 inferred type portability errors in tsgo
