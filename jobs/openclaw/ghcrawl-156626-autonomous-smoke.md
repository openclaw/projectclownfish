---
repo: openclaw/openclaw
cluster_id: ghcrawl-156626-autonomous-smoke
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
  - "#42083"
candidates:
  - "#42083"
  - "#47285"
  - "#62741"
  - "#63413"
  - "#67952"
  - "#68116"
  - "#70040"
cluster_refs:
  - "#42083"
  - "#47285"
  - "#62741"
  - "#63413"
  - "#67952"
  - "#68116"
  - "#70040"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #42083 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156626 on 2026-04-26."
---

# GHCrawl Cluster 156626

Generated from local ghcrawl run cluster 156626 for `openclaw/openclaw`.

Display title:

> fix(memory-lancedb): skip already-processed messages in auto-capture

Cluster shape from ghcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 7
- representative: #42083, currently open in local store
- latest member update: 2026-04-24T18:56:28.775Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42083 fix(memory-lancedb): skip already-processed messages in auto-capture
- #47285 feat(memory-lancedb): native Azure OpenAI support
- #62741 fix(memory-lancedb): guard against empty embeddings response
- #63413 fix(memory-lancedb): validate CLI search limit to prevent NaN propagation
- #67952 fix(memory-lancedb): get memory records through ltm list command
- #68116 feat(memory-lancedb): support reindex and drop-index command
- #70040 feat(memory-lancedb): support Chinese memory trigger keywords
