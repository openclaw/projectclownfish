---
repo: openclaw/openclaw
cluster_id: ghcrawl-156747-autonomous-smoke
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
  - "#70465"
candidates:
  - "#63096"
  - "#68450"
  - "#69010"
  - "#70465"
cluster_refs:
  - "#63096"
  - "#68450"
  - "#69010"
  - "#70465"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #70465 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156747 on 2026-04-26."
---

# GHCrawl Cluster 156747

Generated from local ghcrawl run cluster 156747 for `openclaw/openclaw`.

Display title:

> fix(gateway): cleanup MCP runtime for nested-lane agent runs to plug sessions_send leak (#70364)

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #70465, currently open in local store
- latest member update: 2026-04-24T18:56:22.754Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #63096 fix(gateway): stabilize inter-session completion wake prompts
- #68450 fix(mcp): dispose bundled MCP runtimes after isolated one-shot runs
- #69010 fix(gateway): prefer current route delivery context
- #70465 fix(gateway): cleanup MCP runtime for nested-lane agent runs to plug sessions_send leak (#70364)
