---
repo: openclaw/openclaw
cluster_id: ghcrawl-156663-autonomous-smoke
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
  - "#41461"
candidates:
  - "#41461"
  - "#44319"
  - "#45395"
  - "#46607"
  - "#67843"
cluster_refs:
  - "#41461"
  - "#44319"
  - "#45395"
  - "#46607"
  - "#67843"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #41461 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156663 on 2026-04-26."
---

# GHCrawl Cluster 156663

Generated from local ghcrawl run cluster 156663 for `openclaw/openclaw`.

Display title:

> fix: always apply Anthropic beta headers wrapper for OAuth token support

Cluster shape from ghcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #41461, currently open in local store
- latest member update: 2026-04-24T18:56:28.746Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41461 fix: always apply Anthropic beta headers wrapper for OAuth token support
- #44319 fix: canonicalize model key in resolveExtraParams for provider-prefixed model IDs
- #45395 fix(agents): restore Grok tool calls by stripping xAI strict field
- #46607 Support inline Google audio @file refs in headless payloads
- #67843 fix: pass directories to provider stream wrappers
