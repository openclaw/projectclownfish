---
repo: openclaw/openclaw
cluster_id: ghcrawl-156898-autonomous-smoke
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
  - "#60513"
candidates:
  - "#60145"
  - "#60155"
  - "#60513"
cluster_refs:
  - "#60145"
  - "#60155"
  - "#60513"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #60513 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156898 on 2026-04-26."
---

# GHCrawl Cluster 156898

Generated from local ghcrawl run cluster 156898 for `openclaw/openclaw`.

Display title:

> fix(security): align audit symlink_escape boundary with skill loader

Cluster shape from ghcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #60513, currently open in local store
- latest member update: 2026-04-24T18:56:24.276Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #60145 [Bug]: security audit symlink_escape probe uses wrong boundary (workspace root vs skills directory)
- #60155 fix(security): align audit symlink_escape boundary with skill loader
- #60513 fix(security): align audit symlink_escape boundary with skill loader
