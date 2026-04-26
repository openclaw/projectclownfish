---
repo: openclaw/openclaw
cluster_id: ghcrawl-156704-autonomous-smoke
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
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#48138"
candidates:
  - "#40747"
  - "#48138"
  - "#48377"
  - "#53535"
cluster_refs:
  - "#40747"
  - "#48138"
  - "#48377"
  - "#53535"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #48138 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156704 on 2026-04-26."
---

# GHCrawl Cluster 156704

Generated from local ghcrawl run cluster 156704 for `openclaw/openclaw`.

Display title:

> feat(feishu): add document ownership transfer support to feishu_doc tool

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #48138, currently open in local store
- latest member update: 2026-04-25T07:30:10.016Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40747 feat(feishu): support index parameter for doc insert action
- #48138 feat(feishu): add document ownership transfer support to feishu_doc tool
- #48377 fix(feishu): feishu_doc create action now populates content when provided
- #53535 feat(feishu): expand permission management tools
