---
repo: openclaw/openclaw
cluster_id: ghcrawl-157063-autonomous-smoke
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
  - "#43117"
candidates:
  - "#43117"
  - "#47651"
cluster_refs:
  - "#43117"
  - "#47651"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #43117 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 157063 on 2026-04-26."
---

# GHCrawl Cluster 157063

Generated from local ghcrawl run cluster 157063 for `openclaw/openclaw`.

Display title:

> feat(memorySearch): Support multimodal embedding with gemini-embedding-2-preview

Cluster shape from ghcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #43117, currently open in local store
- latest member update: 2026-04-24T18:56:31.520Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #43117 feat(memorySearch): Support multimodal embedding with gemini-embedding-2-preview
- #47651 Feature request: Multimodal memory indexing via Gemini Embedding 2
