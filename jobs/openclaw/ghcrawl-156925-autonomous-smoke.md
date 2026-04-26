---
repo: openclaw/openclaw
cluster_id: ghcrawl-156925-autonomous-smoke
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
  - "#69691"
candidates:
  - "#67234"
  - "#69691"
  - "#70422"
cluster_refs:
  - "#67234"
  - "#69691"
  - "#70422"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #69691 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156925 on 2026-04-26."
---

# GHCrawl Cluster 156925

Generated from local ghcrawl run cluster 156925 for `openclaw/openclaw`.

Display title:

> fix(minimax): add MiniMax-M2.7 to VLM model allowlist

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #69691, currently open in local store
- latest member update: 2026-04-24T18:56:19.491Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #67234 fix: extend isMinimaxVlmModel to support M2.5/M2.7/M2.7-highspeed
- #69691 fix(minimax): add MiniMax-M2.7 to VLM model allowlist
- #70422 feat(minimax): expand VLM model detection
