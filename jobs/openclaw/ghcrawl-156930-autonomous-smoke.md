---
repo: openclaw/openclaw
cluster_id: ghcrawl-156930-autonomous-smoke
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
  - "#68941"
candidates:
  - "#68941"
  - "#68943"
  - "#69002"
cluster_refs:
  - "#68941"
  - "#68943"
  - "#69002"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #68941 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156930 on 2026-04-26."
---

# GHCrawl Cluster 156930

Generated from local ghcrawl run cluster 156930 for `openclaw/openclaw`.

Display title:

> fix: skip Homebrew prompt on FreeBSD and other non-Linux/macOS platforms

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #68941, currently open in local store
- latest member update: 2026-04-25T17:12:43.541Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #68941 fix: skip Homebrew prompt on FreeBSD and other non-Linux/macOS platforms
- #68943 fix: skip Homebrew prompt on FreeBSD
- #69002 Fix: skip Homebrew prompt on platforms brew doesn't support (Resolves #68893)
