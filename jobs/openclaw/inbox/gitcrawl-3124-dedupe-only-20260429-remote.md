---
repo: openclaw/openclaw
cluster_id: gitcrawl-3124-dedupe-only-20260429-remote
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
  - "#52573"
candidates:
  - "#52573"
cluster_refs:
  - "#42676"
  - "#43550"
  - "#45563"
  - "#50916"
  - "#52573"
  - "#58363"
  - "#61843"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #52573 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 3124 on 2026-04-29."
---

# Gitcrawl Cluster 3124

Generated from local gitcrawl run cluster 3124 for `openclaw/openclaw`.

Display title:

> [Bug]: Kimi web_search often degrades into generic chat answers instead of actual search results

Cluster shape from gitcrawl:

- total members: 7
- issues: 7
- pull requests: 0
- open candidates in local store: 1
- representative: #52573, currently open in local store
- latest member update: 2026-04-28T22:51:07.375409793Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #42676 Kimi web search API URL 路径拼接错误
- #43550 [Bug] Kimi web_search tool uses incorrect tool type format
- #45563 [BUG] web_search with Kimi provider returns 401 Authentication Error
- #50916 优化 Kimi web_search：实现完整的两轮对话流程
- #58363 [Bug]: kimi web_search run error
- #61843 [Bug]: Kimi web search is still fail

Open candidates:

- #52573 [Bug]: Kimi web_search often degrades into generic chat answers instead of actual search results
