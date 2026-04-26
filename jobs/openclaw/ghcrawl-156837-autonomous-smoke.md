---
repo: openclaw/openclaw
cluster_id: ghcrawl-156837-autonomous-smoke
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
  - "#49072"
candidates:
  - "#49072"
  - "#49085"
  - "#56176"
cluster_refs:
  - "#49072"
  - "#49085"
  - "#56176"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #49072 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156837 on 2026-04-26."
---

# GHCrawl Cluster 156837

Generated from local ghcrawl run cluster 156837 for `openclaw/openclaw`.

Display title:

> fix(acp): route logs to stderr to keep stdout JSON-RPC clean

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #49072, currently open in local store
- latest member update: 2026-04-24T18:56:28.972Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #49072 fix(acp): route logs to stderr to keep stdout JSON-RPC clean
- #49085 fix(acp): keep stdout JSON clean
- #56176 fix: accept MCP protocolVersion 2025-11-25 in ACP server (#56102)
