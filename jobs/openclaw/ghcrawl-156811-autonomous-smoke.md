---
repo: openclaw/openclaw
cluster_id: ghcrawl-156811-autonomous-smoke
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
  - "#49311"
candidates:
  - "#45163"
  - "#49311"
  - "#53387"
cluster_refs:
  - "#45163"
  - "#49311"
  - "#53387"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #49311 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156811 on 2026-04-26."
---

# GHCrawl Cluster 156811

Generated from local ghcrawl run cluster 156811 for `openclaw/openclaw`.

Display title:

> doctor --repair / gateway install silently wipes custom EnvironmentVariables from LaunchAgent plist

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #49311, currently open in local store
- latest member update: 2026-04-24T18:56:30.365Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45163 `openclaw doctor --fix` rewrites macOS LaunchAgent plist, drops user-defined EnvironmentVariables
- #49311 doctor --repair / gateway install silently wipes custom EnvironmentVariables from LaunchAgent plist
- #53387 [LaunchAgent] gateway install should not copy .env variables into plist EnvironmentVariables
