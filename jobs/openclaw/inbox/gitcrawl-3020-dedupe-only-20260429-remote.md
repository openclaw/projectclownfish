---
repo: openclaw/openclaw
cluster_id: gitcrawl-3020-dedupe-only-20260429-remote
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
  - "#48876"
candidates:
  - "#68615"
cluster_refs:
  - "#48876"
  - "#59122"
  - "#64705"
  - "#68615"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48876 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 3020 on 2026-04-29."
---

# Gitcrawl Cluster 3020

Generated from local gitcrawl run cluster 3020 for `openclaw/openclaw`.

Display title:

> [Bug]: Embedded runs send full model path to API instead of resolved model ID

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 1
- representative: #48876, currently closed in local store
- latest member update: 2026-04-28T05:49:58.073557736Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #48876 [Bug]: Embedded runs send full model path to API instead of resolved model ID
- #59122 Provider layer sends full model path to Ollama API instead of model name, causing "model not found" errors
- #64705 Bug: Embedded runs resolve model=default for openai-codex instead of explicit configured model

Open candidates:

- #68615 Bug: message-channel runs can still route to stale codex/openai-codex paths after Codex is disabled
