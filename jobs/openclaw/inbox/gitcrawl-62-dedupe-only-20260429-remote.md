---
repo: openclaw/openclaw
cluster_id: gitcrawl-62-dedupe-only-20260429-remote
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
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#68750"
candidates:
  - "#66716"
  - "#68750"
cluster_refs:
  - "#66716"
  - "#68750"
  - "#68863"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #68750 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 62 on 2026-04-29."
---

# Gitcrawl Cluster 62

Generated from local gitcrawl run cluster 62 for `openclaw/openclaw`.

Display title:

> fix: handle MiniMax prompt_cache_hit_tokens to prevent token double-counting

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 2
- representative: #68750, currently open in local store
- latest member update: 2026-04-27T22:51:36.914823389Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #68863 fix: prevent prompt token double-counting in tool-use loops

Open candidates:

- #66716 fix: auto-compaction fires on fresh cached token counts (#66520)
- #68750 fix: handle MiniMax prompt_cache_hit_tokens to prevent token double-counting
