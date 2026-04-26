---
repo: openclaw/openclaw
cluster_id: ghcrawl-156736-autonomous-smoke
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
  - "#65659"
candidates:
  - "#55150"
  - "#60886"
  - "#65659"
  - "#66522"
cluster_refs:
  - "#55150"
  - "#60886"
  - "#65659"
  - "#66522"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #65659 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156736 on 2026-04-26."
---

# GHCrawl Cluster 156736

Generated from local ghcrawl run cluster 156736 for `openclaw/openclaw`.

Display title:

> bug: sessions.json entries missing sessionId and sessionFile — thread context lost on restart

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #65659, currently open in local store
- latest member update: 2026-04-24T18:56:27.375Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #55150 [Bug] Deleted agent sessions directories are recreated after Gateway restart
- #60886 [Bug] sessions.json sessionId and sessionFile point to different transcript files causing history mismatch
- #65659 bug: sessions.json entries missing sessionId and sessionFile — thread context lost on restart
- #66522 [Bug] Session index (sessions.json) rebuilds on Gateway restart, causing complete loss of session history without warning
