---
repo: openclaw/openclaw
cluster_id: gitcrawl-1923-dedupe-only-20260429-remote
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
  - "#41642"
candidates:
  - "#65502"
cluster_refs:
  - "#37505"
  - "#41371"
  - "#41642"
  - "#43400"
  - "#43946"
  - "#44310"
  - "#44936"
  - "#45637"
  - "#49921"
  - "#52818"
  - "#55490"
  - "#64854"
  - "#65502"
  - "#65646"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41642 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1923 on 2026-04-29."
---

# Gitcrawl Cluster 1923

Generated from local gitcrawl run cluster 1923 for `openclaw/openclaw`.

Display title:

> Model fallback starvation: primary model timeout consumes entire session budget

Cluster shape from gitcrawl:

- total members: 14
- issues: 14
- pull requests: 0
- open candidates in local store: 1
- representative: #41642, currently closed in local store
- latest member update: 2026-04-28T21:29:55.526151829Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #37505 Cron job timeout aborts entire model fallback chain via shared AbortController
- #41371 [Feature]: Add connection Timeout
- #41642 Model fallback starvation: primary model timeout consumes entire session budget
- #43400 Fix: Fallback mechanism never triggers due to per-model timeout equaling global run timeout
- #43946 Configurable LLM request timeout per provider/model (Ollama cold-start causes silent fallback)
- #44310 [Feature]: per-model request timeout support for multi-model routing
- #44936 [Enhancement] Support fallback on LLM request timeout (not just API errors)
- #45637 [Feature]: Add timeoutMs config support for LLM Providers
- #49921 Model fallback not triggered on agent execution timeout (fallbacks configured but never attempted)
- #52818 [Bug] Ollama cold-start timeout silently exfiltrates data via fallback chain
- #55490 feat: add timeoutMs to ModelProviderConfig for per-provider request timeout
- #64854 Feature request: per-model request timeout so fallback chain triggers on hangs
- #65646 Fallback pollutes session runtime model, causing silent model drift

Open candidates:

- #65502 feat(agents): resilient model fallback with retry + context-aware safe mode
