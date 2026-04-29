---
repo: openclaw/openclaw
cluster_id: gitcrawl-238810-dedupe-only-20260429b
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
  - "#46069"
candidates:
  - "#41670"
  - "#42531"
  - "#45986"
  - "#46069"
  - "#59141"
cluster_refs:
  - "#41670"
  - "#42531"
  - "#45986"
  - "#46069"
  - "#59141"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #46069 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238810 on 2026-04-29."
---

# Gitcrawl Cluster 238810

Generated from local gitcrawl run cluster 238810 for `openclaw/openclaw`.

Display title:

> fix(memory-lancedb): use float encoding for Ollama embedding compatibility

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #46069, currently open in local store
- latest member update: 2026-04-29T08:43:40.150Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41670 fix(embedding): add encoding_format parameter to OpenAI-compatible requests
- #42531 fix(memory-lancedb): preserve dimensions for baseUrl embeddings
- #45986 fix(memory-lancedb): add encoding_format: float to fix Ollama embedding dimension mismatch
- #46069 fix(memory-lancedb): use float encoding for Ollama embedding compatibility
- #59141 fix(memory-lancedb): prefer newer memories for latest queries
