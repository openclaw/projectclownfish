---
repo: openclaw/openclaw
cluster_id: ghcrawl-156883-autonomous-smoke
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
  - "#57707"
candidates:
  - "#57707"
  - "#67184"
  - "#70947"
cluster_refs:
  - "#57707"
  - "#67184"
  - "#70947"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #57707 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156883 on 2026-04-26."
---

# GHCrawl Cluster 156883

Generated from local ghcrawl run cluster 156883 for `openclaw/openclaw`.

Display title:

> feat: support all file types as webchat attachments

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #57707, currently open in local store
- latest member update: 2026-04-25T17:13:14.796Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #57707 feat: support all file types as webchat attachments
- #67184 fix(chat): support non-image attachments in webchat file upload
- #70947 fix(webchat): support non-image file attachments
