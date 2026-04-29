---
repo: openclaw/openclaw
cluster_id: gitcrawl-7338-dedupe-only-20260429-remote
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
  - "#50120"
candidates:
  - "#55850"
cluster_refs:
  - "#45695"
  - "#50120"
  - "#55850"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #50120 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 7338 on 2026-04-29."
---

# Gitcrawl Cluster 7338

Generated from local gitcrawl run cluster 7338 for `openclaw/openclaw`.

Display title:

> [Bug]: Right side scroll bar missing on Mac (Sequoia) in Chrome

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #50120, currently closed in local store
- latest member update: 2026-04-28T18:51:14.912119644Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45695 [Bug]: v3 UI has no scrollbar anymore
- #50120 [Bug]: Right side scroll bar missing on Mac (Sequoia) in Chrome

Open candidates:

- #55850 [Bug]: Control UI content clips under the collapsed sidebar in Safari on macOS
