---
repo: openclaw/openclaw
cluster_id: gitcrawl-4519-dedupe-only-20260429-remote
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
  - "#40248"
candidates:
  - "#42330"
  - "#58993"
  - "#65058"
cluster_refs:
  - "#40248"
  - "#42330"
  - "#58993"
  - "#65058"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #40248 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 4519 on 2026-04-29."
---

# Gitcrawl Cluster 4519

Generated from local gitcrawl run cluster 4519 for `openclaw/openclaw`.

Display title:

> fix(googlechat): synchronous space events and chunked message thread continuity

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 3
- representative: #40248, currently closed in local store
- latest member update: 2026-04-28T21:55:43.765788619Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40248 fix(googlechat): synchronous space events and chunked message thread continuity

Open candidates:

- #42330 (googlechat) fix: space messaging, introduce deduplication, and update reply-to defaults
- #58993 fix(googlechat): support spaceType field for DM vs Space detection
- #65058 fix(googlechat): accept add-on space lifecycle payload variants
