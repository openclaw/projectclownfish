---
repo: openclaw/openclaw
cluster_id: ghcrawl-156813-autonomous-smoke
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
  - "#55789"
candidates:
  - "#45344"
  - "#55789"
  - "#55928"
cluster_refs:
  - "#45344"
  - "#55789"
  - "#55928"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #55789 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156813 on 2026-04-26."
---

# GHCrawl Cluster 156813

Generated from local ghcrawl run cluster 156813 for `openclaw/openclaw`.

Display title:

> fix(gateway): block internal HTTP session overrides

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #55789, currently open in local store
- latest member update: 2026-04-24T18:56:28.599Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45344 fix(gateway): reject unknown agent IDs on OpenAI + OpenResponses HTTP paths
- #55789 fix(gateway): block internal HTTP session overrides
- #55928 fix(gateway): block internal session history over HTTP
