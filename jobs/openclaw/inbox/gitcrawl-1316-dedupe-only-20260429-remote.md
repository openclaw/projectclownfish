---
repo: openclaw/openclaw
cluster_id: gitcrawl-1316-dedupe-only-20260429-remote
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
  - "#70720"
candidates:
  - "#43938"
  - "#55473"
cluster_refs:
  - "#43938"
  - "#55473"
  - "#70720"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #70720 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1316 on 2026-04-29."
---

# Gitcrawl Cluster 1316

Generated from local gitcrawl run cluster 1316 for `openclaw/openclaw`.

Display title:

> fix(gateway): restart channels after secret reload

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 2
- representative: #70720, currently closed in local store
- latest member update: 2026-04-28T04:44:23.920653738Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #70720 fix(gateway): restart channels after secret reload

Open candidates:

- #43938 fix(gateway): use account-scoped reload for channel account changes
- #55473 Gateway: degrade startup secret failures
