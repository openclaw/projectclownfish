---
repo: openclaw/openclaw
cluster_id: gitcrawl-3000-dedupe-only-20260429-remote
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
  - "#48138"
candidates:
  - "#40747"
  - "#48138"
  - "#48377"
  - "#50357"
cluster_refs:
  - "#40747"
  - "#48138"
  - "#48377"
  - "#50357"
  - "#53535"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48138 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 3000 on 2026-04-29."
---

# Gitcrawl Cluster 3000

Generated from local gitcrawl run cluster 3000 for `openclaw/openclaw`.

Display title:

> feat(feishu): add document ownership transfer support to feishu_doc tool

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 4
- representative: #48138, currently open in local store
- latest member update: 2026-04-28T21:29:55.487471748Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #53535 feat(feishu): expand permission management tools

Open candidates:

- #40747 feat(feishu): support index parameter for doc insert action
- #48138 feat(feishu): add document ownership transfer support to feishu_doc tool
- #48377 fix(feishu): feishu_doc create action now populates content when provided
- #50357 docs(feishu): clarify feishu_doc create action does not support content parameter
