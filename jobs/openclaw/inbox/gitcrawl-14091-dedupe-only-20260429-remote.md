---
repo: openclaw/openclaw
cluster_id: gitcrawl-14091-dedupe-only-20260429-remote
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
  - "#41419"
candidates:
  - "#40829"
  - "#41265"
  - "#41419"
  - "#41714"
cluster_refs:
  - "#40829"
  - "#41265"
  - "#41419"
  - "#41714"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41419 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14091 on 2026-04-29."
---

# Gitcrawl Cluster 14091

Generated from local gitcrawl run cluster 14091 for `openclaw/openclaw`.

Display title:

> fix(discord): preserve MIME type on uploads and skip WebP optimization

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #41419, currently open in local store
- latest member update: 2026-04-28T21:55:43.879049216Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40829 fix(media): preserve under-cap PNG
- #41265 fix(discord): preserve content-type and skip optimization for animated/WebP images
- #41419 fix(discord): preserve MIME type on uploads and skip WebP optimization
- #41714 fix(discord): preserve content-type in media uploads and skip WebP optimization
