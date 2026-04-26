---
repo: openclaw/openclaw
cluster_id: ghcrawl-156757-autonomous-smoke
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
  - "#46684"
candidates:
  - "#13948"
  - "#46684"
  - "#54260"
cluster_refs:
  - "#13948"
  - "#46684"
  - "#54260"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #46684 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156757 on 2026-04-26."
---

# GHCrawl Cluster 156757

Generated from local ghcrawl run cluster 156757 for `openclaw/openclaw`.

Display title:

> Feature request: action-level tool deny (e.g. gateway:config.patch)

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #46684, currently open in local store
- latest member update: 2026-04-26T00:46:51.807Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #13948 Feature Request: Action-Level Tool Deny
- #46684 Feature request: action-level tool deny (e.g. gateway:config.patch)
- #54260 Feature Request: Action-level deny for gateway tool (config.get context explosion)
