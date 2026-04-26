---
repo: openclaw/openclaw
cluster_id: ghcrawl-156647-autonomous-smoke
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
  - "#52745"
candidates:
  - "#52745"
  - "#64862"
  - "#66192"
  - "#66289"
  - "#67302"
  - "#69026"
cluster_refs:
  - "#52745"
  - "#64862"
  - "#66192"
  - "#66289"
  - "#67302"
  - "#69026"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #52745 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156647 on 2026-04-26."
---

# GHCrawl Cluster 156647

Generated from local ghcrawl run cluster 156647 for `openclaw/openclaw`.

Display title:

> fix(tui): clear stuck streaming when final has no active run in flight

Cluster shape from ghcrawl:

- total members: 6
- issues: 0
- pull requests: 6
- open candidates in local store: 6
- representative: #52745, currently open in local store
- latest member update: 2026-04-24T18:56:29.351Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #52745 fix(tui): clear stuck streaming when final has no active run in flight
- #64862 fix(tui): recover activity status when no runs are in flight
- #66192 fix(tui): reset activity after late terminal events
- #66289 fix(tui): resolve streaming status stuck indefinitely after run completes
- #67302 fix(tui): always reset status to idle when all streaming runs finalize regardless of event ordering
- #69026 fix(tui): raise streaming watchdog threshold to 120s and suppress false-positive warning
