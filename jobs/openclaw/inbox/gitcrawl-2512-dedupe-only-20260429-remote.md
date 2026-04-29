---
repo: openclaw/openclaw
cluster_id: gitcrawl-2512-dedupe-only-20260429-remote
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
  - "#60850"
candidates:
  - "#60850"
  - "#60854"
cluster_refs:
  - "#54348"
  - "#60850"
  - "#60854"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #60850 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2512 on 2026-04-29."
---

# Gitcrawl Cluster 2512

Generated from local gitcrawl run cluster 2512 for `openclaw/openclaw`.

Display title:

> [Bug]: Webchat text selection highlight color has insufficient contrast for color-deficient users

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 2
- representative: #60850, currently open in local store
- latest member update: 2026-04-29T10:20:02.91199762Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #54348 [Bug]: Insufficient color contrast for chat send button icon in light theme

Open candidates:

- #60850 [Bug]: Webchat text selection highlight color has insufficient contrast for color-deficient users
- #60854 fix(webchat): increase text selection highlight contrast for color-deficient users
