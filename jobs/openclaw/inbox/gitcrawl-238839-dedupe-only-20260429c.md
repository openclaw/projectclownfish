---
repo: openclaw/openclaw
cluster_id: gitcrawl-238839-dedupe-only-20260429c
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
  - "#42908"
candidates:
  - "#42908"
  - "#43953"
  - "#73514"
  - "#74191"
cluster_refs:
  - "#42908"
  - "#43953"
  - "#73514"
  - "#74191"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #42908 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238839 on 2026-04-29."
---

# Gitcrawl Cluster 238839

Generated from local gitcrawl run cluster 238839 for `openclaw/openclaw`.

Display title:

> feat(feishu): extract option, options, form_value from card action callbacks

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #42908, currently open in local store
- latest member update: 2026-04-29T08:43:39.523Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42908 feat(feishu): extract option, options, form_value from card action callbacks
- #43953 feat(feishu): pass through form_value, input_value, option(s) from card actions
- #73514 fix(feishu): support form_value in card action callbacks
- #74191 fix(feishu): support form_value, option, and options in card action callbacks
