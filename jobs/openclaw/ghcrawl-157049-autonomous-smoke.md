---
repo: openclaw/openclaw
cluster_id: ghcrawl-157049-autonomous-smoke
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
  - "#42639"
candidates:
  - "#42639"
  - "#57057"
cluster_refs:
  - "#42639"
  - "#57057"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #42639 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 157049 on 2026-04-26."
---

# GHCrawl Cluster 157049

Generated from local ghcrawl run cluster 157049 for `openclaw/openclaw`.

Display title:

> [Feature]: Add Perplexity Agent API as a built-in provider (openai-responses)

Cluster shape from ghcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #42639, currently open in local store
- latest member update: 2026-04-24T18:56:31.836Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42639 [Feature]: Add Perplexity Agent API as a built-in provider (openai-responses)
- #57057 [Feature]: Agent model provider doesn't support Perplexity API despite OpenAI compatibility
