---
repo: openclaw/openclaw
cluster_id: ghcrawl-156896-autonomous-smoke
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
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#59973"
candidates:
  - "#59973"
  - "#61312"
  - "#63544"
cluster_refs:
  - "#59973"
  - "#61312"
  - "#63544"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #59973 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156896 on 2026-04-26."
---

# GHCrawl Cluster 156896

Generated from local ghcrawl run cluster 156896 for `openclaw/openclaw`.

Display title:

> iMessage DM echo: corrupted prefix breaks text-based dedup (v2026.3.31+)

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #59973, currently open in local store
- latest member update: 2026-04-24T18:56:24.344Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #59973 iMessage DM echo: corrupted prefix breaks text-based dedup (v2026.3.31+)
- #61312 iMessage echo loop in self-chat: U+FFFD from attributedBody breaks echo cache text matching
- #63544 iMessage echo detection fails when echoed message has NUL (\0) prefix
