---
repo: openclaw/openclaw
cluster_id: ghcrawl-156705-autonomous-smoke
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
  - "#45755"
candidates:
  - "#41201"
  - "#45703"
  - "#45755"
  - "#46909"
cluster_refs:
  - "#41201"
  - "#45703"
  - "#45755"
  - "#46909"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #45755 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156705 on 2026-04-26."
---

# GHCrawl Cluster 156705

Generated from local ghcrawl run cluster 156705 for `openclaw/openclaw`.

Display title:

> [Bug]: Agent emoji as AWOL (ui v0.2)

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #45755, currently open in local store
- latest member update: 2026-04-24T18:56:30.707Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41201 [Bug]: Control UI Avatar not displaying (broken image)
- #45703 [Bug]: Agent section is horrible (v2 UI)
- #45755 [Bug]: Agent emoji as AWOL (ui v0.2)
- #46909 [Bug]: Agent avatar disappears after updating to 2026.3.12 - Control UI display issue
