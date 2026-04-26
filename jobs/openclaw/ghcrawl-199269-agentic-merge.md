---
repo: openclaw/openclaw
cluster_id: ghcrawl-199269-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#50694"
candidates:
  - "#50694"
  - "#51316"
  - "#64384"
  - "#67297"
  - "#69379"
cluster_refs:
  - "#50694"
  - "#51316"
  - "#64384"
  - "#67297"
  - "#69379"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #50694 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 199269 on 2026-04-26."
---

# GHCrawl Cluster 199269

Generated from local ghcrawl run cluster 199269 for `openclaw/openclaw`.

Display title:

> fix(compaction): clamp reserveTokensFloor to prevent negative flush threshold

Cluster shape from ghcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #50694, currently open in local store
- latest member update: 2026-04-26T06:40:56.498Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #50694 fix(compaction): clamp reserveTokensFloor to prevent negative flush threshold
- #51316 fix: clamp reserveTokensFloor to prevent negative memory flush threshold
- #64384 fix(reply): gate preflight compaction fast-path on token threshold (#63892)
- #67297 fix(compaction): use reserveTokens instead of reserveTokensFloor for memoryFlush and preflight thresholds
- #69379 fix(compaction): preflight/memoryFlush gates respect reserveTokens above floor
