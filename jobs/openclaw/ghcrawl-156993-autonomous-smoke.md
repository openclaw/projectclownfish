---
repo: openclaw/openclaw
cluster_id: ghcrawl-156993-autonomous-smoke
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
  - "#39692"
candidates:
  - "#39692"
  - "#42065"
cluster_refs:
  - "#39692"
  - "#42065"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #39692 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156993 on 2026-04-26."
---

# GHCrawl Cluster 156993

Generated from local ghcrawl run cluster 156993 for `openclaw/openclaw`.

Display title:

> Localize control UI hardcoded strings to zh-CN

Cluster shape from ghcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #39692, currently open in local store
- latest member update: 2026-04-24T18:56:28.273Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39692 Localize control UI hardcoded strings to zh-CN
- #42065 UI: add global locale switch and complete zh-CN dashboard translations
