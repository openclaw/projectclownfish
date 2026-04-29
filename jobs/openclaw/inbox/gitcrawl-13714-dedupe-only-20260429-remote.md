---
repo: openclaw/openclaw
cluster_id: gitcrawl-13714-dedupe-only-20260429-remote
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
  - "#55819"
candidates:
  - "#58902"
  - "#60972"
cluster_refs:
  - "#55819"
  - "#56789"
  - "#58902"
  - "#60972"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #55819 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13714 on 2026-04-29."
---

# Gitcrawl Cluster 13714

Generated from local gitcrawl run cluster 13714 for `openclaw/openclaw`.

Display title:

> fix: count Discord ACP block deliveries as visible text

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 2
- representative: #55819, currently closed in local store
- latest member update: 2026-04-25T11:56:54.682Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #55819 fix: count Discord ACP block deliveries as visible text
- #56789 fix(acp): treat block deliveries as visible text on all channels

Open candidates:

- #58902 fix(acp): treat block deliveries as visible text to prevent duplicate final reply
- #60972 fix(discord): avoid duplicate ACP fallback replies
