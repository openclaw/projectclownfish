---
repo: openclaw/openclaw
cluster_id: ghcrawl-156655-autonomous-smoke
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
  - "#45310"
candidates:
  - "#13673"
  - "#41516"
  - "#45310"
  - "#53029"
  - "#61992"
cluster_refs:
  - "#13673"
  - "#41516"
  - "#45310"
  - "#53029"
  - "#61992"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #45310 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156655 on 2026-04-26."
---

# GHCrawl Cluster 156655

Generated from local ghcrawl run cluster 156655 for `openclaw/openclaw`.

Display title:

> [Feature]: Make typing TTL configurable

Cluster shape from ghcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #45310, currently open in local store
- latest member update: 2026-04-26T00:46:51.816Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #13673 [Feature]: 20:58:33 typing TTL reached (2m); stopping typing indicator
- #41516 Make typing indicator TTL (typingTtlMs) configurable
- #45310 [Feature]: Make typing TTL configurable
- #53029 Feature: Make typing indicator TTL configurable via config
- #61992 [Feature] Make typing indicator timeout configurable by users
