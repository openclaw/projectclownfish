---
repo: openclaw/openclaw
cluster_id: ghcrawl-156645-autonomous-smoke
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
  - "#59355"
candidates:
  - "#52504"
  - "#57977"
  - "#59355"
  - "#59585"
  - "#60255"
  - "#68628"
cluster_refs:
  - "#52504"
  - "#57977"
  - "#59355"
  - "#59585"
  - "#60255"
  - "#68628"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #59355 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156645 on 2026-04-26."
---

# GHCrawl Cluster 156645

Generated from local ghcrawl run cluster 156645 for `openclaw/openclaw`.

Display title:

> Feature Request: Cross-channel session context sharing for the same agent

Cluster shape from ghcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 6
- representative: #59355, currently open in local store
- latest member update: 2026-04-24T18:56:29.789Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #52504 [Feature]: Cross-Platform Session Continuity (Context Sync Across Channels)
- #57977 [Feature]: Continuous sessions across interfaces.
- #59355 Feature Request: Cross-channel session context sharing for the same agent
- #59585 [Feature Request] Agent loses identity context when switching between messaging channels
- #60255 [Feature Request] Session merging or reuse across channels
- #68628 [Feature Request] Cross-channel session continuity for named agents
