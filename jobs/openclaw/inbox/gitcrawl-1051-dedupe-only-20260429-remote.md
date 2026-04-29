---
repo: openclaw/openclaw
cluster_id: gitcrawl-1051-dedupe-only-20260429-remote
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
  - "#69879"
candidates:
  - "#70630"
cluster_refs:
  - "#48475"
  - "#69879"
  - "#69888"
  - "#70630"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #69879 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1051 on 2026-04-29."
---

# Gitcrawl Cluster 1051

Generated from local gitcrawl run cluster 1051 for `openclaw/openclaw`.

Display title:

> Fix/telegram humandelay

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 1
- representative: #69879, currently closed in local store
- latest member update: 2026-04-27T22:51:34.014849167Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #48475 [AI-assisted] Telegram: clear status reactions after terminal states
- #69879 Fix/telegram humandelay
- #69888 Fix/chat bubble copy padding

Open candidates:

- #70630 fix(telegram): keep no-visible direct turns silent
