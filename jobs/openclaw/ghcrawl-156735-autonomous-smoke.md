---
repo: openclaw/openclaw
cluster_id: ghcrawl-156735-autonomous-smoke
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
  - "#54564"
candidates:
  - "#54564"
  - "#54656"
  - "#54677"
  - "#54954"
cluster_refs:
  - "#54564"
  - "#54656"
  - "#54677"
  - "#54954"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #54564 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156735 on 2026-04-26."
---

# GHCrawl Cluster 156735

Generated from local ghcrawl run cluster 156735 for `openclaw/openclaw`.

Display title:

> docs: add AllowTcpForwarding prerequisite to Hetzner SSH tunnel step

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #54564, currently open in local store
- latest member update: 2026-04-24T18:56:27.576Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #54564 docs: add AllowTcpForwarding prerequisite to Hetzner SSH tunnel step
- #54656 Docs: clarify Hetzner VPS access flow
- #54677 Docs: warn about Hetzner compose port merges
- #54954 docs: add AllowTcpForwarding requirement to Hetzner SSH tunnel guide
