---
repo: openclaw/openclaw
cluster_id: ghcrawl-156664-autonomous-smoke
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
  - "#50001"
candidates:
  - "#41861"
  - "#43634"
  - "#49961"
  - "#50001"
  - "#68947"
cluster_refs:
  - "#41861"
  - "#43634"
  - "#49961"
  - "#50001"
  - "#68947"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #50001 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156664 on 2026-04-26."
---

# GHCrawl Cluster 156664

Generated from local ghcrawl run cluster 156664 for `openclaw/openclaw`.

Display title:

> fix: restore export HTML template placeholders broken by Prettier

Cluster shape from ghcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #50001, currently open in local store
- latest member update: 2026-04-24T18:56:29.068Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41861 fix(export): fix broken template placeholders in session export HTML
- #43634 fix: restore export-html template placeholders and prevent reformatting
- #49961 fix: restore compact JS placeholders in session export template
- #50001 fix: restore export HTML template placeholders broken by Prettier
- #68947 fix(reply): restore export-session inline scripts
