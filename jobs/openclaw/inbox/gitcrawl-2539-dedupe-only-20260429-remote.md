---
repo: openclaw/openclaw
cluster_id: gitcrawl-2539-dedupe-only-20260429-remote
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
  - "#63062"
candidates:
  - "#57987"
  - "#63034"
  - "#63062"
cluster_refs:
  - "#57987"
  - "#63034"
  - "#63062"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #63062 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2539 on 2026-04-29."
---

# Gitcrawl Cluster 2539

Generated from local gitcrawl run cluster 2539 for `openclaw/openclaw`.

Display title:

> fix: apply cache_control to conversation messages on OpenRouter path

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #63062, currently open in local store
- latest member update: 2026-04-27T22:51:33.535052257Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #57987 feat(cache): add conversation-history caching for OpenRouter Anthropic models
- #63034 Bug: OpenRouter path does not apply cache_control to conversation messages (only system prompt)
- #63062 fix: apply cache_control to conversation messages on OpenRouter path
