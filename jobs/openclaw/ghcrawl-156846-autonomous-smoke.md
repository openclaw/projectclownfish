---
repo: openclaw/openclaw
cluster_id: ghcrawl-156846-autonomous-smoke
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
  - "#50694"
candidates:
  - "#50694"
  - "#51316"
  - "#65263"
cluster_refs:
  - "#50694"
  - "#51316"
  - "#65263"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #50694 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156846 on 2026-04-26."
---

# GHCrawl Cluster 156846

Generated from local ghcrawl run cluster 156846 for `openclaw/openclaw`.

Display title:

> fix(compaction): clamp reserveTokensFloor to prevent negative flush threshold

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #50694, currently open in local store
- latest member update: 2026-04-24T18:56:29.222Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #50694 fix(compaction): clamp reserveTokensFloor to prevent negative flush threshold
- #51316 fix: clamp reserveTokensFloor to prevent negative memory flush threshold
- #65263 fix(compaction): clamp reserveTokens to at most 90% of context window in precheck
