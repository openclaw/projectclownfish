---
repo: openclaw/openclaw
cluster_id: ghcrawl-156891-autonomous-smoke
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
  - "#59448"
candidates:
  - "#59448"
  - "#59455"
  - "#59575"
cluster_refs:
  - "#59448"
  - "#59455"
  - "#59575"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #59448 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156891 on 2026-04-26."
---

# GHCrawl Cluster 156891

Generated from local ghcrawl run cluster 156891 for `openclaw/openclaw`.

Display title:

> [Bug]: Stale plugin config entry emits noisy warning on every CLI invocation with no way to clean it up

Cluster shape from ghcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- representative: #59448, currently open in local store
- latest member update: 2026-04-24T18:56:24.297Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #59448 [Bug]: Stale plugin config entry emits noisy warning on every CLI invocation with no way to clean it up
- #59455 [Feature]: Add CLI command to remove stale plugin config entries (currently requires manual JSON editing)
- #59575 feat(plugins): add `plugins clean` command to remove stale plugin config refs
