---
repo: openclaw/openclaw
cluster_id: gitcrawl-304-dedupe-only-20260429-remote
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
  - "#38640"
candidates:
  - "#38640"
  - "#61443"
  - "#62542"
cluster_refs:
  - "#38640"
  - "#45762"
  - "#61443"
  - "#62542"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #38640 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 304 on 2026-04-29."
---

# Gitcrawl Cluster 304

Generated from local gitcrawl run cluster 304 for `openclaw/openclaw`.

Display title:

> feat: Add LLM retry mechanism with exponential backoff

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 3
- representative: #38640, currently open in local store
- latest member update: 2026-04-27T22:51:34.899979742Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45762 feat(agents): auto-retry with exponential backoff on 429 rate limits

Open candidates:

- #38640 feat: Add LLM retry mechanism with exponential backoff
- #61443 feat: add configurable retry for LLM provider API calls
- #62542 feat(models): add per-provider retry config with retryOnStatus
