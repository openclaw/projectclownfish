---
repo: openclaw/openclaw
cluster_id: ghcrawl-156807-autonomous-smoke
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
  - "#44471"
candidates:
  - "#44471"
  - "#44472"
  - "#44587"
cluster_refs:
  - "#44471"
  - "#44472"
  - "#44587"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #44471 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156807 on 2026-04-26."
---

# GHCrawl Cluster 156807

Generated from local ghcrawl run cluster 156807 for `openclaw/openclaw`.

Display title:

> [Bug] Runtime event wording causes premature success claims in subagent flows

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #44471, currently open in local store
- latest member update: 2026-04-24T18:56:31.221Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #44471 [Bug] Runtime event wording causes premature success claims in subagent flows
- #44472 [Patch] Runtime bundle fixes for premature success bug (compact, pi-embedded, reply)
- #44587 [Bug]: Premature success in subagent flows - wording and verification fix
