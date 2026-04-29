---
repo: openclaw/openclaw
cluster_id: gitcrawl-4725-dedupe-only-20260429-remote
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
  - "#40974"
candidates:
  - "#47216"
  - "#52052"
cluster_refs:
  - "#40974"
  - "#47216"
  - "#52052"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #40974 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 4725 on 2026-04-29."
---

# Gitcrawl Cluster 4725

Generated from local gitcrawl run cluster 4725 for `openclaw/openclaw`.

Display title:

> Auto-reply: normalize inbound metadata timestamps to UTC

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 2
- representative: #40974, currently closed in local store
- latest member update: 2026-04-28T18:51:14.964689185Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40974 Auto-reply: normalize inbound metadata timestamps to UTC

Open candidates:

- #47216 Fix direct webchat sender metadata for interactive TUI sessions
- #52052 fix(telegram): surface sticker file_id in inbound context
