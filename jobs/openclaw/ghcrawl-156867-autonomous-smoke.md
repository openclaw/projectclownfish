---
repo: openclaw/openclaw
cluster_id: ghcrawl-156867-autonomous-smoke
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
  - "#60143"
candidates:
  - "#53311"
  - "#60143"
  - "#61683"
cluster_refs:
  - "#53311"
  - "#60143"
  - "#61683"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #60143 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156867 on 2026-04-26."
---

# GHCrawl Cluster 156867

Generated from local ghcrawl run cluster 156867 for `openclaw/openclaw`.

Display title:

> Plugin config error causes hard gateway crash instead of graceful disable

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #60143, currently open in local store
- latest member update: 2026-04-24T18:56:29.415Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #53311 Gateway crash-loops when channel plugin is configured but not installed
- #60143 Plugin config error causes hard gateway crash instead of graceful disable
- #61683 Enhancement: Plugin-scoped config errors (plugins.entries.*.config) should degrade gracefully, not abort gateway startup
