---
repo: openclaw/openclaw
cluster_id: gitcrawl-14172-dedupe-only-20260429-remote
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
  - "#43953"
candidates:
  - "#42754"
  - "#42908"
  - "#43202"
  - "#43953"
cluster_refs:
  - "#38609"
  - "#42754"
  - "#42908"
  - "#43202"
  - "#43953"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #43953 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14172 on 2026-04-29."
---

# Gitcrawl Cluster 14172

Generated from local gitcrawl run cluster 14172 for `openclaw/openclaw`.

Display title:

> feat(feishu): pass through form_value, input_value, option(s) from card actions

Cluster shape from gitcrawl:

- total members: 5
- issues: 2
- pull requests: 3
- open candidates in local store: 4
- representative: #43953, currently open in local store
- latest member update: 2026-04-28T22:51:07.527126746Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38609 fix(feishu): fix card action context fields and chat_type detection

Open candidates:

- #42754 [Feature]: Feishu card action handler discards action.option, action.options, and action.form_value
- #42908 feat(feishu): extract option, options, form_value from card action callbacks
- #43202 Feishu card action: pass through form_value, input_value and other fields
- #43953 feat(feishu): pass through form_value, input_value, option(s) from card actions
