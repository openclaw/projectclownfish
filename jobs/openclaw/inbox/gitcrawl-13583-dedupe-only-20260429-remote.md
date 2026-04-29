---
repo: openclaw/openclaw
cluster_id: gitcrawl-13583-dedupe-only-20260429-remote
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
  - "#55834"
candidates:
  - "#44353"
  - "#62022"
  - "#64224"
  - "#64902"
cluster_refs:
  - "#44353"
  - "#44435"
  - "#47689"
  - "#49732"
  - "#52550"
  - "#53233"
  - "#53906"
  - "#55834"
  - "#55941"
  - "#56112"
  - "#58039"
  - "#62022"
  - "#63821"
  - "#64224"
  - "#64902"
  - "#65813"
  - "#69719"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #55834 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13583 on 2026-04-29."
---

# Gitcrawl Cluster 13583

Generated from local gitcrawl run cluster 13583 for `openclaw/openclaw`.

Display title:

> Model fallback fails when provider auth profile is put in cooldown due to overload

Cluster shape from gitcrawl:

- total members: 17
- issues: 17
- pull requests: 0
- open candidates in local store: 4
- representative: #55834, currently closed in local store
- latest member update: 2026-04-28T07:04:52.191338056Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44435 Bedrock provider error does not trigger fallback to configured backup provider
- #47689 Auth fallback crashes when all Anthropic profiles hit cooldown simultaneously
- #49732 Cascade failure: per-provider cooldown kills fallback chain when one model is overloaded
- #52550 [Feature]: Fallback from cloud profile (anthropic, etc) to local model without extensive cooldown
- #53233 [Bug]: Anthropic rate limit cooldown propagates to independent google-vertex fallback provider
- #53906 [Bug]: Rate limit cooldown cascade blocks all recovery — model switch, fallback, and restart all fail
- #55834 Model fallback fails when provider auth profile is put in cooldown due to overload
- #55941 [Bug]: Auth profile cooldown blocks model fallback — Sonnet blocked by Opus rate limit on same profile
- #56112 Provider-level cooldown still blocks healthy models within same provider (Anthropic Opus outage skips Sonnet)
- #58039 /model can become unusable when the current provider is unavailable, and configured fallbacks do not recover the session
- #63821 Bug: model fallback via skip_candidate (cooldown) produces no log entries — silent failover undetectable
- #65813 openai-codex auth profile rotation burns through both profiles before escalating to model fallback
- #69719 Model fallback does not trigger on auth/credential errors (ExpiredTokenException)

Open candidates:

- #44353 Fallback models not triggered on provider-level errors (e.g., AWS Bedrock model ID changes)
- #62022 Codex profile rotation skips remaining profiles and jumps to fallback model chain on rate limit
- #64224 Billing cooldown flags entire provider instead of individual model — breaks proxy/litellm setups
- #64902 [Bug]: Failed primary model attempt not logged when fallback succeeds — no forensic audit trail
