---
repo: openclaw/openclaw
cluster_id: ghcrawl-156971-autonomous-smoke
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
  - "#38478"
candidates:
  - "#38478"
  - "#40418"
cluster_refs:
  - "#38478"
  - "#40418"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #38478 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156971 on 2026-04-26."
---

# GHCrawl Cluster 156971

Generated from local ghcrawl run cluster 156971 for `openclaw/openclaw`.

Display title:

> Feature Request: Automatic Session Memory Persistence

Cluster shape from ghcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #38478, currently open in local store
- latest member update: 2026-04-25T07:30:10.227Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38478 Feature Request: Automatic Session Memory Persistence
- #40418 Feature Request: Automated Session Memory Preservation & Synthesis
