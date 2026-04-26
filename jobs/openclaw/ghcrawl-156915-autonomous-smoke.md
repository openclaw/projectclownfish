---
repo: openclaw/openclaw
cluster_id: ghcrawl-156915-autonomous-smoke
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
  - "#66856"
candidates:
  - "#64933"
  - "#66121"
  - "#66856"
cluster_refs:
  - "#64933"
  - "#66121"
  - "#66856"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #66856 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156915 on 2026-04-26."
---

# GHCrawl Cluster 156915

Generated from local ghcrawl run cluster 156915 for `openclaw/openclaw`.

Display title:

> openclaw status emits spurious 'plugins.allow is empty' warning when allow list is populated

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #66856, currently open in local store
- latest member update: 2026-04-24T18:56:21.333Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #64933 [Bug] 2026.4.10: False 'plugins.allow is empty' warning for extensions/ auto-discovered plugins
- #66121 openclaw doctor false positive — claims plugins.allow is empty even when explicitly configured
- #66856 openclaw status emits spurious 'plugins.allow is empty' warning when allow list is populated
