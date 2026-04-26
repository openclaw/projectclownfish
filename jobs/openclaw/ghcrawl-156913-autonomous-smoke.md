---
repo: openclaw/openclaw
cluster_id: ghcrawl-156913-autonomous-smoke
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
  - "#69379"
candidates:
  - "#64384"
  - "#67297"
  - "#69379"
cluster_refs:
  - "#64384"
  - "#67297"
  - "#69379"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #69379 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156913 on 2026-04-26."
---

# GHCrawl Cluster 156913

Generated from local ghcrawl run cluster 156913 for `openclaw/openclaw`.

Display title:

> fix(compaction): preflight/memoryFlush gates respect reserveTokens above floor

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #69379, currently open in local store
- latest member update: 2026-04-24T18:56:22.206Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #64384 fix(reply): gate preflight compaction fast-path on token threshold (#63892)
- #67297 fix(compaction): use reserveTokens instead of reserveTokensFloor for memoryFlush and preflight thresholds
- #69379 fix(compaction): preflight/memoryFlush gates respect reserveTokens above floor
