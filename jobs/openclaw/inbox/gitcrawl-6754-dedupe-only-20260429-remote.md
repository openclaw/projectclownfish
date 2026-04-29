---
repo: openclaw/openclaw
cluster_id: gitcrawl-6754-dedupe-only-20260429-remote
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
  - "#48283"
candidates:
  - "#48283"
  - "#55477"
cluster_refs:
  - "#48283"
  - "#55477"
  - "#55696"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48283 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 6754 on 2026-04-29."
---

# Gitcrawl Cluster 6754

Generated from local gitcrawl run cluster 6754 for `openclaw/openclaw`.

Display title:

> fix(agent): discard aborted assistant messages to prevent stale content (fixes #48241)

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 2
- representative: #48283, currently open in local store
- latest member update: 2026-04-28T16:45:59.390348813Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #55696 fix(plugin-sdk): route attempt runner telegram helpers through sdk barrel

Open candidates:

- #48283 fix(agent): discard aborted assistant messages to prevent stale content (fixes #48241)
- #55477 feat: stamp session_key, message_channel, context_limit into LiteLLM request metadata
