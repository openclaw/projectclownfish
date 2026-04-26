---
repo: openclaw/openclaw
cluster_id: ghcrawl-156761-autonomous-smoke
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
  - "#35095"
candidates:
  - "#35095"
  - "#57386"
  - "#62229"
cluster_refs:
  - "#35095"
  - "#57386"
  - "#62229"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #35095 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156761 on 2026-04-26."
---

# GHCrawl Cluster 156761

Generated from local ghcrawl run cluster 156761 for `openclaw/openclaw`.

Display title:

> [Bug]: Google Chat inbound webhook returns 401 Unauthorized despite matching audience

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #35095, currently open in local store
- latest member update: 2026-04-24T18:56:23.380Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #35095 [Bug]: Google Chat inbound webhook returns 401 Unauthorized despite matching audience
- #57386 [Bug]: Google Chat webhook returns 401 Unauthorized - all versions 2026.3.23+
- #62229 Google Chat inbound webhook returns 401 after upgrade, outbound still works
