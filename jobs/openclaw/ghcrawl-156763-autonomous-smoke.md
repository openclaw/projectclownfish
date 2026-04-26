---
repo: openclaw/openclaw
cluster_id: ghcrawl-156763-autonomous-smoke
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
  - "#37634"
candidates:
  - "#37634"
  - "#46026"
  - "#59718"
cluster_refs:
  - "#37634"
  - "#46026"
  - "#59718"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #37634 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156763 on 2026-04-26."
---

# GHCrawl Cluster 156763

Generated from local ghcrawl run cluster 156763 for `openclaw/openclaw`.

Display title:

> sandbox: keep workspaceAccess none workspaces writable

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #37634, currently open in local store
- latest member update: 2026-04-24T18:56:30.908Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #37634 sandbox: keep workspaceAccess none workspaces writable
- #46026 Bug: workspaceAccess: "none" mounts sandbox workspace as read-only instead of read-write
- #59718 [Feature]: Allow writable custom binds with workspaceAccess: "none" for least-privilege sandbox access
