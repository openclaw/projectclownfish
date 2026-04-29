---
repo: openclaw/openclaw
cluster_id: gitcrawl-1779-dedupe-only-20260429-remote
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
  - "#39389"
candidates:
  - "#39389"
  - "#49769"
cluster_refs:
  - "#39389"
  - "#49769"
  - "#64336"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39389 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1779 on 2026-04-29."
---

# Gitcrawl Cluster 1779

Generated from local gitcrawl run cluster 1779 for `openclaw/openclaw`.

Display title:

> docs(feishu): clarify accountId routing semantics

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 2
- representative: #39389, currently open in local store
- latest member update: 2026-04-28T18:04:42.640163036Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #64336 fix(feishu): add docx:document.block:convert scope to batch import JSON

Open candidates:

- #39389 docs(feishu): clarify accountId routing semantics
- #49769 docs/types: clarify that omitting accountId in bindings matches default account only, not all accounts
