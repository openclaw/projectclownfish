---
repo: openclaw/openclaw
cluster_id: gitcrawl-13656-dedupe-only-20260429-remote
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
  - "#49850"
candidates:
  - "#39001"
  - "#48976"
  - "#49983"
cluster_refs:
  - "#39001"
  - "#48976"
  - "#49837"
  - "#49850"
  - "#49983"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #49850 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13656 on 2026-04-29."
---

# Gitcrawl Cluster 13656

Generated from local gitcrawl run cluster 13656 for `openclaw/openclaw`.

Display title:

> fix(feishu): use native at elements for @mentions in post messages

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 3
- representative: #49850, currently closed in local store
- latest member update: 2026-04-28T22:51:07.502219871Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #49837 fix(feishu): use lark_md mention format in post messages (fixes #49833)
- #49850 fix(feishu): use native at elements for @mentions in post messages

Open candidates:

- #39001 fix(feishu): preserve sender identity and resolve mentions in merge_forward messages
- #48976 fix(feishu): normalize @mentions in quoted message content
- #49983 fix(feishu): use native at elements for blue @mention rendering
