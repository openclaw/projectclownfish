---
repo: openclaw/openclaw
cluster_id: ghcrawl-156637-autonomous-smoke
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
  - "#49031"
candidates:
  - "#37591"
  - "#49031"
  - "#58356"
  - "#64499"
  - "#64551"
  - "#66839"
cluster_refs:
  - "#37591"
  - "#49031"
  - "#58356"
  - "#64499"
  - "#64551"
  - "#66839"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #49031 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156637 on 2026-04-26."
---

# GHCrawl Cluster 156637

Generated from local ghcrawl run cluster 156637 for `openclaw/openclaw`.

Display title:

> [Bug]: macOS companion app node missing system.run.prepare — exec completely broken on local mode

Cluster shape from ghcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 6
- representative: #49031, currently open in local store
- latest member update: 2026-04-24T18:56:27.779Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #37591 [macOS Node] Missing system.run.prepare command prevents system.run execution
- #49031 [Bug]: macOS companion app node missing system.run.prepare — exec completely broken on local mode
- #58356 [Bug]: system.run.prepare broken after update to v2026.3.28 — downgrade to v2026.3.24 does not fix
- #64499 macOS companion node missing system.run.prepare breaks exec host=node
- #64551 [Bug]: macOS node connected but missing system.run.prepare, causing exec host=node to fail
- #66839 [Bug]: macOS node on 2026.4.11 does not advertise system.run.prepare, breaking exec host=node
