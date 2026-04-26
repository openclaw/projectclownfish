---
repo: openclaw/openclaw
cluster_id: ghcrawl-199239-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#48578"
candidates:
  - "#48578"
  - "#49967"
  - "#50164"
  - "#50435"
  - "#51196"
  - "#59431"
  - "#61807"
cluster_refs:
  - "#48578"
  - "#49967"
  - "#50164"
  - "#50435"
  - "#51196"
  - "#59431"
  - "#61807"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #48578 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 199239 on 2026-04-26."
---

# GHCrawl Cluster 199239

Generated from local ghcrawl run cluster 199239 for `openclaw/openclaw`.

Display title:

> fix(feishu): recover UTF-8 filenames from Latin-1 encoded Content-Disposition

Cluster shape from ghcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 7
- representative: #48578, currently open in local store
- latest member update: 2026-04-24T18:56:29.184Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #48578 fix(feishu): recover UTF-8 filenames from Latin-1 encoded Content-Disposition
- #49967 fix(feishu): fallback to media endpoint for video file downloads
- #50164 fix(feishu): fallback to type=media when file download returns 502
- #50435 fix(feishu): recover Chinese filenames from Latin-1 mojibake in Content-Disposition
- #51196 fix(feishu): destroy ReadStreams on media upload failure
- #59431 fix(feishu): correct Chinese filename encoding in attachments
- #61807 fix(feishu): extract video thumbnail via ffmpeg for native video bubbles
