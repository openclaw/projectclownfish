---
repo: openclaw/openclaw
cluster_id: ghcrawl-156729-autonomous-smoke
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
  - "#66658"
candidates:
  - "#50980"
  - "#53437"
  - "#60031"
  - "#66658"
cluster_refs:
  - "#50980"
  - "#53437"
  - "#60031"
  - "#66658"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #66658 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156729 on 2026-04-26."
---

# GHCrawl Cluster 156729

Generated from local ghcrawl run cluster 156729 for `openclaw/openclaw`.

Display title:

> fix(control-ui): keep exec approval modal within viewport

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #66658, currently open in local store
- latest member update: 2026-04-24T18:56:29.358Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #50980 fix(ui): keep exec approval actions reachable
- #53437 fix(ui): prevent exec approval command overflow
- #60031 fix(ui): make exec approval command display scrollable
- #66658 fix(control-ui): keep exec approval modal within viewport
