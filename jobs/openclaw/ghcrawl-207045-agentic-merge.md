---
repo: openclaw/openclaw
cluster_id: ghcrawl-207045-agentic-merge
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
  - "#44319"
candidates:
  - "#44319"
  - "#45395"
  - "#46607"
  - "#67843"
cluster_refs:
  - "#44319"
  - "#45395"
  - "#46607"
  - "#67843"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #44319 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 207045 on 2026-04-26."
---

# GHCrawl Cluster 207045

Generated from local ghcrawl run cluster 207045 for `openclaw/openclaw`.

Display title:

> fix: canonicalize model key in resolveExtraParams for provider-prefixed model IDs

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #44319, currently open in local store
- latest member update: 2026-04-24T18:56:28.746Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #44319 fix: canonicalize model key in resolveExtraParams for provider-prefixed model IDs
- #45395 fix(agents): restore Grok tool calls by stripping xAI strict field
- #46607 Support inline Google audio @file refs in headless payloads
- #67843 fix: pass directories to provider stream wrappers
