---
repo: openclaw/openclaw
cluster_id: ghcrawl-156887-autonomous-smoke
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
  - "#65326"
candidates:
  - "#58541"
  - "#60377"
  - "#65326"
cluster_refs:
  - "#58541"
  - "#60377"
  - "#65326"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #65326 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156887 on 2026-04-26."
---

# GHCrawl Cluster 156887

Generated from local ghcrawl run cluster 156887 for `openclaw/openclaw`.

Display title:

> [Bug] Google Chat: Add-ons framework JWT/event format incompatibility (workaround included)

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #65326, currently open in local store
- latest member update: 2026-04-24T18:56:23.434Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #58541 Google Chat (G Suite Add-on) returns 401 Unauthorized — JWT verification failure
- #60377 [Bug]: Google Chat 401 after update — crash-loop + missing appPrincipal (two compounding issues)
- #65326 [Bug] Google Chat: Add-ons framework JWT/event format incompatibility (workaround included)
