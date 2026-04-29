---
repo: openclaw/openclaw
cluster_id: gitcrawl-14011-dedupe-only-20260429-remote
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
  - "#59048"
candidates:
  - "#40578"
  - "#41670"
  - "#43910"
  - "#47285"
  - "#56532"
  - "#59141"
  - "#63413"
  - "#65066"
  - "#66913"
  - "#67952"
  - "#68060"
  - "#68116"
  - "#69707"
  - "#70040"
cluster_refs:
  - "#40578"
  - "#41670"
  - "#42083"
  - "#42531"
  - "#43898"
  - "#43910"
  - "#45982"
  - "#45985"
  - "#45986"
  - "#46069"
  - "#47285"
  - "#54229"
  - "#56070"
  - "#56532"
  - "#59048"
  - "#59141"
  - "#62741"
  - "#63323"
  - "#63326"
  - "#63413"
  - "#63655"
  - "#63682"
  - "#63726"
  - "#65066"
  - "#66913"
  - "#67952"
  - "#68060"
  - "#68116"
  - "#69707"
  - "#70040"
  - "#71112"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59048 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14011 on 2026-04-29."
---

# Gitcrawl Cluster 14011

Generated from local gitcrawl run cluster 14011 for `openclaw/openclaw`.

Display title:

> fix(memory-lancedb): force float encoding for local embedding servers

Cluster shape from gitcrawl:

- total members: 31
- issues: 2
- pull requests: 29
- open candidates in local store: 14
- representative: #59048, currently closed in local store
- latest member update: 2026-04-29T11:09:44.866857381Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #42083 fix(memory-lancedb): skip already-processed messages in auto-capture
- #42531 fix(memory-lancedb): preserve dimensions for baseUrl embeddings
- #43898 Fix memory-lancedb auto-capture when recall context is injected
- #45982 memory-lancedb: Ollama embedding returns wrong dimensions due to base64 encoding
- #45985 fix(memory-lancedb): add encoding_format float for Ollama compatibility
- #45986 fix(memory-lancedb): add encoding_format: float to fix Ollama embedding dimension mismatch
- #46069 fix(memory-lancedb): use float encoding for Ollama embedding compatibility
- #54229 fix(memory-lancedb): show full UUID in memory_forget candidate list
- #56070 fix(memory-lancedb): add missing radix to parseInt call
- #59048 fix(memory-lancedb): force float encoding for local embedding servers
- #62741 fix(memory-lancedb): guard against empty embeddings response
- #63323 fix: use Number.parseFloat instead of global parseFloat for consistency
- #63326 fix: use Number.parseInt instead of global parseInt for consistency
- #63655 memory-lancedb: OpenAI SDK base64 encoding breaks non-OpenAI embedding providers
- #63682 fix(memory-lancedb): prevent infinite loop in autoRecall
- #63726 memory-lancedb: isolate per-agent lancedb by agentId
- #71112 feat(memory-lancedb): support query cmd for llm CLI

Open candidates:

- #40578 Feature(memory-lancedb): Agent Scoping #38797
- #41670 fix(embedding): add encoding_format parameter to OpenAI-compatible requests
- #43910 feat(memory): add configurable encoding_format for embedding requests
- #47285 feat(memory-lancedb): native Azure OpenAI support
- #56532 memory-lancedb: add configurable timeout/retry for embedding calls
- #59141 fix(memory-lancedb): prefer newer memories for latest queries
- #63413 fix(memory-lancedb): validate CLI search limit to prevent NaN propagation
- #65066 fix(memory-lancedb): register runtime for doctor and status
- #66913 fix(memory-lancedb): show full IDs in memory_forget candidate list
- #67952 fix(memory-lancedb): get memory records through ltm list command
- #68060 feat(memory-lancedb): add smart extraction with atomic fact decomposition
- #68116 feat(memory-lancedb): support reindex and drop-index command
- #69707 fix(memory-lancedb): stop forwarding embedding dimensions upstream
- #70040 feat(memory-lancedb): support Chinese memory trigger keywords
