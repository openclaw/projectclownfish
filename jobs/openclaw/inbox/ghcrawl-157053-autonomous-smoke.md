---
repo: openclaw/openclaw
cluster_id: ghcrawl-157053-autonomous-smoke
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
  - "#42754"
candidates:
  - "#42754"
  - "#43202"
cluster_refs:
  - "#42754"
  - "#43202"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #42754 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 157053 on 2026-04-26."
---

# GHCrawl Cluster 157053

Generated from local ghcrawl run cluster 157053 for `openclaw/openclaw`.

Display title:

> [Feature]: Feishu card action handler discards action.option, action.options, and action.form_value

Cluster shape from ghcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #42754, currently open in local store
- latest member update: 2026-04-24T18:56:31.775Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42754 [Feature]: Feishu card action handler discards action.option, action.options, and action.form_value
- #43202 Feishu card action: pass through form_value, input_value and other fields
