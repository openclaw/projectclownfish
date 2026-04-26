---
repo: openclaw/openclaw
cluster_id: ghcrawl-156696-autonomous-smoke
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
  - "#34848"
candidates:
  - "#34848"
  - "#52028"
  - "#53402"
  - "#61285"
cluster_refs:
  - "#34848"
  - "#52028"
  - "#53402"
  - "#61285"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #34848 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156696 on 2026-04-26."
---

# GHCrawl Cluster 156696

Generated from local ghcrawl run cluster 156696 for `openclaw/openclaw`.

Display title:

> [Feature Request] Add Chinese (Simplified) localization support for macOS native app

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #34848, currently open in local store
- latest member update: 2026-04-24T18:56:33.019Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #34848 [Feature Request] Add Chinese (Simplified) localization support for macOS native app
- #52028 Request: Chinese (Simplified) language support for Mac app
- #53402 [Feature Request] Add Chinese (Simplified) localization for macOS menu bar app
- #61285 [Feature]: macOS App Chinese (Simplified) Localization Support
