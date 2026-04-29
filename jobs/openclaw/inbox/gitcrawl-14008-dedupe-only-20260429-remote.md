---
repo: openclaw/openclaw
cluster_id: gitcrawl-14008-dedupe-only-20260429-remote
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
  - "#59518"
candidates:
  - "#46570"
  - "#48300"
  - "#52115"
  - "#56862"
  - "#59451"
  - "#62328"
  - "#64187"
  - "#65156"
  - "#65704"
  - "#66746"
  - "#66977"
cluster_refs:
  - "#39224"
  - "#39484"
  - "#41911"
  - "#43262"
  - "#44352"
  - "#46570"
  - "#46599"
  - "#46671"
  - "#47730"
  - "#48300"
  - "#50453"
  - "#51904"
  - "#52115"
  - "#52199"
  - "#55608"
  - "#56862"
  - "#59451"
  - "#59518"
  - "#61098"
  - "#61727"
  - "#62328"
  - "#64187"
  - "#64776"
  - "#64778"
  - "#65156"
  - "#65244"
  - "#65704"
  - "#66746"
  - "#66977"
  - "#67549"
  - "#67566"
  - "#68892"
  - "#70577"
  - "#71143"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59518 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14008 on 2026-04-29."
---

# Gitcrawl Cluster 14008

Generated from local gitcrawl run cluster 14008 for `openclaw/openclaw`.

Display title:

> [BUG] FTS5 unavailable in node:sqlite runtime breaks memory_search and degrades LCM on Node 23.6.1

Cluster shape from gitcrawl:

- total members: 34
- issues: 34
- pull requests: 0
- open candidates in local store: 11
- representative: #59518, currently closed in local store
- latest member update: 2026-04-28T22:51:07.515258629Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39224 [Bug] memory index/search breaks in FTS-only mode (provider=none) / FTS-only 模式下 memory 索引与检索异常
- #39484 memory_search returns 0 hits for specific terms despite indexed content
- #41911 [Bug] memory_search returns empty for freshly indexed chunks
- #43262 [Bug] Memory Search - Inconsistent Search Results
- #44352 [Bug]: Memory search shows "no such module: fts5" on Debian systems
- #46599 Memory SQLite index empty after long session — memory_search returns 'database is not open'
- #46671 [Bug] memory_search returns empty results in 2026.3.13 (regression from #29112 fix)
- #47730 [Bug]: Memory search shows only beginning of files instead of relevant snippets
- #50453 Memory Search FTS5 unavailable on Windows due to node:sqlite missing FTS5 module
- #51904 memory_search tool ignores memorySearch.provider config, always uses OpenAI embeddings
- #52199 Memory search CLI vs agent internal behavior inconsistency + poor error messages
- #55608 openclaw memory search CLI ignores agents.defaults.memorySearch config
- #59518 [BUG] FTS5 unavailable in node:sqlite runtime breaks memory_search and degrades LCM on Node 23.6.1
- #61098 memory_search uses stale embedding provider after config.patch + restart
- #61727 CLI memory search returns 'No matches' despite SQLite having indexed data
- #64776 sqlite-vec extension not loaded during gateway runtime memory sync
- #64778 FTS5 index not rebuilt after memory index --force — stale FTS returns 0 results
- #65244 [Bug]: sqlite-vec extension cannot be loaded - missing allowExtension option in DatabaseSync
- #67549 [Bug] memory_search tool throws 'Cannot read properties of undefined' in OpenClaw 4.14 (CLI works fine)
- #67566 [Bug]: memorySearch tool fails with 'Cannot read properties of undefined (reading get)' - memory-core plugin meta table empty on v2026.4.14
- #68892 sqlite-vec unavailable on Windows — vector embeddings not generated (v4.11+)
- #70577 memory_search tool can fail with CredentialsProviderError while CLI works after switching to local embeddings
- #71143 memory_search auto-selects Bedrock after update and fails with Could not load credentials from any providers when only local memory/session recall is needed

Open candidates:

- #46570 Memory search never returns results from memory files (only sessions)
- #48300 Bug: memory_search hybrid mode not returning FTS matches
- #52115 [Feature]: memory_search returns stale/invalid results when gateway is long-running
- #56862 builtin memory_search can return empty results until builtin index is forced to reindex
- #59451 [Feature]: Add file-based fallback search when `node:sqlite` is unavailable
- #62328 node:sqlite missing FTS5 module — memory search keyword fallback broken
- #64187 [Bug]: Windows memory search hits EBUSY during sqlite atomic reindex swap
- #65156 [Bug] Memory vector search broken in v4.11 — sqlite-vec loads but registers no functions (SQLite ABI mismatch)
- #65704 sqlite-vec extension fails to load on Windows (better-sqlite3 12.8.0 / Node 24)
- #66746 [Bug] Windows memory indexing falls back to FTS-only in 2026.4.14 even though direct node:sqlite + sqlite-vec works
- #66977 [Bug]: sqlite-vec extension cannot load on macOS — node:sqlite compiled with OMIT_LOAD_EXTENSION
