---
repo: openclaw/openclaw
cluster_id: ghcrawl-156721-autonomous-smoke
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
  - "#45592"
candidates:
  - "#45550"
  - "#45592"
  - "#45613"
  - "#57187"
cluster_refs:
  - "#45550"
  - "#45592"
  - "#45613"
  - "#57187"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #45592 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156721 on 2026-04-26."
---

# GHCrawl Cluster 156721

Generated from local ghcrawl run cluster 156721 for `openclaw/openclaw`.

Display title:

> feat(anthropic): migrate 1M context from beta to GA

Cluster shape from ghcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 4
- representative: #45592, currently open in local store
- latest member update: 2026-04-24T18:56:30.350Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45550 feat(anthropic): migrate 1M context from beta to GA
- #45592 feat(anthropic): migrate 1M context from beta to GA
- #45613 feat(anthropic): migrate 1M context from beta to GA
- #57187 fix: strip context-1m beta when apiKey is unresolved (OAuth compat)
