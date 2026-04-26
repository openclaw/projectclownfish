---
repo: openclaw/openclaw
cluster_id: ghcrawl-156927-autonomous-smoke
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
  - "#67925"
candidates:
  - "#67925"
  - "#68154"
  - "#68786"
cluster_refs:
  - "#67925"
  - "#68154"
  - "#68786"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #67925 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156927 on 2026-04-26."
---

# GHCrawl Cluster 156927

Generated from local ghcrawl run cluster 156927 for `openclaw/openclaw`.

Display title:

> Security audit reports phantom plugins that are actually installed and loaded (v2026.4.15)

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #67925, currently open in local store
- latest member update: 2026-04-25T17:12:43.536Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #67925 Security audit reports phantom plugins that are actually installed and loaded (v2026.4.15)
- #68154 [Bug]: security audit false positive: plugins.allow_phantom_entries flags bundled plugins as phantom
- #68786 Security audit false positive: plugins.allow_phantom_entries flags bundled stock plugins as phantom in CLI context
