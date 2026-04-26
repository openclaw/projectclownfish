---
repo: openclaw/openclaw
cluster_id: ghcrawl-156782-autonomous-smoke
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
  - "#55068"
candidates:
  - "#40880"
  - "#55068"
  - "#55074"
cluster_refs:
  - "#40880"
  - "#55068"
  - "#55074"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #55068 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156782 on 2026-04-26."
---

# GHCrawl Cluster 156782

Generated from local ghcrawl run cluster 156782 for `openclaw/openclaw`.

Display title:

> Sandbox media staging: hardcoded 5MB MEDIA_MAX_BYTES limit prevents large file transfers

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #55068, currently open in local store
- latest member update: 2026-04-25T07:30:09.901Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40880 [Bug]: tools/sandbox: MEDIA_MAX_BYTES (5 MB) is hardcoded and not user-configurable
- #55068 Sandbox media staging: hardcoded 5MB MEDIA_MAX_BYTES limit prevents large file transfers
- #55074 Make MEDIA_MAX_BYTES configurable instead of hardcoded 5MB
