---
repo: openclaw/openclaw
cluster_id: ghcrawl-156640-autonomous-smoke
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
  - "#68456"
candidates:
  - "#44068"
  - "#54190"
  - "#54380"
  - "#61016"
  - "#68225"
  - "#68456"
cluster_refs:
  - "#44068"
  - "#54190"
  - "#54380"
  - "#61016"
  - "#68225"
  - "#68456"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #68456 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156640 on 2026-04-26."
---

# GHCrawl Cluster 156640

Generated from local ghcrawl run cluster 156640 for `openclaw/openclaw`.

Display title:

> security(media): anchor sanitizeMimeType regex to reject malformed input

Cluster shape from ghcrawl:

- total members: 6
- issues: 0
- pull requests: 6
- open candidates in local store: 6
- representative: #68456, currently open in local store
- latest member update: 2026-04-24T18:56:28.455Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #44068 fix(media-understanding): skip legacy Word docs from text extraction
- #54190 fix: treat application/x-cfb and application/msword as binary MIME types
- #54380 fix(media): treat legacy .doc containers as binary
- #61016 fix(media): anchor sanitizeMimeType regex and make case-insensitive per RFC 2045
- #68225 fix(media): anchor sanitizeMimeType regex and reject trailing garbage (#9795)
- #68456 security(media): anchor sanitizeMimeType regex to reject malformed input
