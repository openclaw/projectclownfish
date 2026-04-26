---
repo: openclaw/openclaw
cluster_id: ghcrawl-156924-autonomous-smoke
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
  - "#67058"
candidates:
  - "#67058"
  - "#67689"
  - "#69543"
cluster_refs:
  - "#67058"
  - "#67689"
  - "#69543"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #67058 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156924 on 2026-04-26."
---

# GHCrawl Cluster 156924

Generated from local ghcrawl run cluster 156924 for `openclaw/openclaw`.

Display title:

> [Feature Request] Add session list filter to hide dreaming/system sessions in Control UI

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #67058, currently open in local store
- latest member update: 2026-04-24T18:56:20.432Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #67058 [Feature Request] Add session list filter to hide dreaming/system sessions in Control UI
- #67689 Feature request: Session management UI (hide/archive/filter sessions)
- #69543 Dreaming-generated sessions appear in normal Control UI session picker
