---
repo: openclaw/openclaw
cluster_id: gitcrawl-238898-dedupe-only-20260429c
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
  - "#58457"
candidates:
  - "#48420"
  - "#58384"
  - "#58457"
cluster_refs:
  - "#48420"
  - "#58384"
  - "#58457"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #58457 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238898 on 2026-04-29."
---

# Gitcrawl Cluster 238898

Generated from local gitcrawl run cluster 238898 for `openclaw/openclaw`.

Display title:

> [Bug]: Ollama Cloud provider returns HTTP 401 despite valid API key (v2026.3.28)

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #58457, currently open in local store
- latest member update: 2026-04-24T18:56:30.004Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #48420 [Bug]: OAuth authentication broken for Anthropic and OpenAI providers in v2026.2.17+
- #58384 Bug: direct ollama provider to Ollama Cloud returns 401 on inference, while ollama-local ...:cloud works
- #58457 [Bug]: Ollama Cloud provider returns HTTP 401 despite valid API key (v2026.3.28)
