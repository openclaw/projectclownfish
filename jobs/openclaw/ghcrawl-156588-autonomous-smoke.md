---
repo: openclaw/openclaw
cluster_id: ghcrawl-156588-autonomous-smoke
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
  - "#50970"
candidates:
  - "#46895"
  - "#47069"
  - "#50871"
  - "#50970"
  - "#51027"
  - "#51051"
  - "#51053"
  - "#51270"
  - "#51536"
  - "#65772"
cluster_refs:
  - "#46895"
  - "#47069"
  - "#50871"
  - "#50970"
  - "#51027"
  - "#51051"
  - "#51053"
  - "#51270"
  - "#51536"
  - "#65772"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #50970 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156588 on 2026-04-26."
---

# GHCrawl Cluster 156588

Generated from local ghcrawl run cluster 156588 for `openclaw/openclaw`.

Display title:

> fix(cli): keep nodes list consistent with live paired nodes

Cluster shape from ghcrawl:

- total members: 10
- issues: 0
- pull requests: 10
- open candidates in local store: 10
- representative: #50970, currently open in local store
- latest member update: 2026-04-24T18:56:29.252Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #46895 fix(slash): handle /model status locally[AI-assisted]#46894
- #47069 fix(ui): treat /model status|list|info as info queries, not model names
- #50871 CLI: include connected nodes in nodes list
- #50970 fix(cli): keep nodes list consistent with live paired nodes
- #51027 fix(gateway): reject list and status as invalid model refs (#51126)
- #51051 fix(cli): align nodes list with nodes status by using node.list as primary source
- #51053 fix(cli): align nodes list with node status
- #51270 fix(tui): handle /model list and /model status as commands
- #51536 fix(webchat): use totalTokens for context utilization display
- #65772 fix(cli): keep nodes list aligned with nodes status
