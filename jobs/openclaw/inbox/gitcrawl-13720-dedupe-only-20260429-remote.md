---
repo: openclaw/openclaw
cluster_id: gitcrawl-13720-dedupe-only-20260429-remote
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
  - "#11057"
candidates:
  - "#11057"
  - "#41444"
  - "#46733"
  - "#66766"
cluster_refs:
  - "#11057"
  - "#41444"
  - "#46733"
  - "#47440"
  - "#49939"
  - "#57292"
  - "#66766"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #11057 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13720 on 2026-04-29."
---

# Gitcrawl Cluster 13720

Generated from local gitcrawl run cluster 13720 for `openclaw/openclaw`.

Display title:

> Support for 1M context window with Claude Max subscription

Cluster shape from gitcrawl:

- total members: 7
- issues: 7
- pull requests: 0
- open candidates in local store: 4
- representative: #11057, currently open in local store
- latest member update: 2026-04-28T21:55:43.844183253Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #47440 Update built-in Anthropic model context windows to 1M tokens
- #49939 Update Anthropic Claude Opus 4.6 / Sonnet 4.6 context window to 1M tokens
- #57292 context1m beta header stripped for OAuth token auth — breaks Max plan users

Open candidates:

- #11057 Support for 1M context window with Claude Max subscription
- #41444 OAuth 401 regression: oauth-2025-04-20 beta not injected when context1m set via model headers
- #46733 [Bug]: opus 4.6 1M context now allowed with oauth, broken in openclaw
- #66766 [Bug]: Session context limit shows 200k instead of 1M for Anthropic Opus/Sonnet 4 models
