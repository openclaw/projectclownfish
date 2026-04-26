---
repo: openclaw/openclaw
cluster_id: ghcrawl-199230-agentic-merge
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
  - "#59048"
candidates:
  - "#41670"
  - "#42531"
  - "#45986"
  - "#46069"
  - "#59048"
  - "#59141"
  - "#65066"
  - "#66913"
  - "#69707"
cluster_refs:
  - "#41670"
  - "#42531"
  - "#45986"
  - "#46069"
  - "#59048"
  - "#59141"
  - "#65066"
  - "#66913"
  - "#69707"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #59048 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 199230 on 2026-04-26."
---

# GHCrawl Cluster 199230

Generated from local ghcrawl run cluster 199230 for `openclaw/openclaw`.

Display title:

> fix(memory-lancedb): force float encoding for local embedding servers

Cluster shape from ghcrawl:

- total members: 9
- issues: 0
- pull requests: 9
- open candidates in local store: 9
- representative: #59048, currently open in local store
- latest member update: 2026-04-26T06:40:56.778Z

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
- #59048 fix(memory-lancedb): force float encoding for local embedding servers
- #59141 fix(memory-lancedb): prefer newer memories for latest queries
- #65066 fix(memory-lancedb): register runtime for doctor and status
- #66913 fix(memory-lancedb): show full IDs in memory_forget candidate list
- #69707 fix(memory-lancedb): stop forwarding embedding dimensions upstream
