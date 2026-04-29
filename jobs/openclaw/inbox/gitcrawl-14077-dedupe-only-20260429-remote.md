---
repo: openclaw/openclaw
cluster_id: gitcrawl-14077-dedupe-only-20260429-remote
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
  - "#63030"
candidates:
  - "#63030"
  - "#64217"
cluster_refs:
  - "#43148"
  - "#54256"
  - "#63030"
  - "#63071"
  - "#64217"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #63030 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14077 on 2026-04-29."
---

# Gitcrawl Cluster 14077

Generated from local gitcrawl run cluster 14077 for `openclaw/openclaw`.

Display title:

> System prompt assembled differently across code paths (chat/heartbeat/announce), causing continuous Anthropic cache invalidation

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 2
- representative: #63030, currently open in local store
- latest member update: 2026-04-28T07:04:52.192283994Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43148 [Bug]: Changing system prompt causes cache invalidations
- #54256 System prompt runtime stats (usageLine, cacheLine, contextLine) invalidate Anthropic prompt cache on every turn
- #63071 [Bug]: System prompt timestamp injection breaks Anthropic prompt cache (always cache_creation, never cache_read)

Open candidates:

- #63030 System prompt assembled differently across code paths (chat/heartbeat/announce), causing continuous Anthropic cache invalidation
- #64217 [Bug]: Source-dependent instructions/tools drift invalidates OpenAI prompt cache within the same session
