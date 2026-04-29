---
repo: openclaw/openclaw
cluster_id: gitcrawl-2218-dedupe-only-20260429-remote
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
  - "#41448"
candidates:
  - "#44086"
  - "#44676"
  - "#52278"
  - "#56697"
  - "#59108"
cluster_refs:
  - "#41448"
  - "#41490"
  - "#42334"
  - "#44086"
  - "#44676"
  - "#46415"
  - "#48670"
  - "#50152"
  - "#52278"
  - "#54448"
  - "#56697"
  - "#56807"
  - "#59108"
  - "#68072"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41448 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2218 on 2026-04-29."
---

# Gitcrawl Cluster 2218

Generated from local gitcrawl run cluster 2218 for `openclaw/openclaw`.

Display title:

> fix(openai-completions): flatten assistant content arrays to plain strings

Cluster shape from gitcrawl:

- total members: 14
- issues: 0
- pull requests: 14
- open candidates in local store: 5
- representative: #41448, currently closed in local store
- latest member update: 2026-04-28T18:51:14.845401965Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41448 fix(openai-completions): flatten assistant content arrays to plain strings
- #41490 fix(openai-completions): flatten assistant tool history content
- #42334 fix: default OpenAI transport to SSE for non-OpenAI baseUrl
- #46415 fix(ollama): use isOllamaCompatProvider for stream routing
- #48670 edit/write/read: add tool-specific hints to parameter validation errors
- #50152 fix: normalize text-only content arrays to strings for OpenAI-compatible providers
- #54448 fix: preserve Kimi tool call arguments instead of clearing valid JSON
- #56807 Agents: flatten text-only user content for OpenAI completions
- #68072 fix(agents): normalize assistant content before transport iteration

Open candidates:

- #44086 fix(agents): assistant message content null instead of empty string breaks OpenAI-compatible providers
- #44676 fix(agents): fail closed on malformed kimi tool-call JSON
- #52278 [codex] fix(embedded): recover orphaned turns without dropping repeats
- #56697 fix(tools): include parameter examples in validation errors to help models self-correct
- #59108 fix: edit tool CLAUDE_PARAM_GROUPS expects edits[] array
