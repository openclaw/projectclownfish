---
repo: openclaw/openclaw
cluster_id: ghcrawl-156859-autonomous-smoke
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
  - "#52163"
candidates:
  - "#52163"
  - "#54450"
  - "#58959"
cluster_refs:
  - "#52163"
  - "#54450"
  - "#58959"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #52163 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156859 on 2026-04-26."
---

# GHCrawl Cluster 156859

Generated from local ghcrawl run cluster 156859 for `openclaw/openclaw`.

Display title:

> [Bug]: ClawHub login refresh loop after account deletion + GitHub username rename

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #52163, currently open in local store
- latest member update: 2026-04-24T18:56:29.831Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #52163 [Bug]: ClawHub login refresh loop after account deletion + GitHub username rename
- #54450 [Bug]: ClawHub login refresh loop after account deletion + GitHub account change
- #58959 Login refresh loop after account deletion + GitHub username rename
