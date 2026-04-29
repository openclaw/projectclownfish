---
repo: openclaw/openclaw
cluster_id: gitcrawl-13641-dedupe-only-20260429-remote
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
  - "#69379"
candidates:
  - "#40875"
  - "#50694"
  - "#51389"
  - "#52012"
  - "#54392"
  - "#54406"
  - "#63636"
  - "#64384"
  - "#65263"
  - "#67706"
  - "#69379"
  - "#69495"
cluster_refs:
  - "#40875"
  - "#43647"
  - "#49863"
  - "#50673"
  - "#50694"
  - "#51316"
  - "#51389"
  - "#52012"
  - "#52080"
  - "#52469"
  - "#52906"
  - "#54392"
  - "#54406"
  - "#56660"
  - "#59929"
  - "#63636"
  - "#64384"
  - "#65263"
  - "#67297"
  - "#67701"
  - "#67706"
  - "#69379"
  - "#69495"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #69379 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13641 on 2026-04-29."
---

# Gitcrawl Cluster 13641

Generated from local gitcrawl run cluster 13641 for `openclaw/openclaw`.

Display title:

> fix(compaction): preflight/memoryFlush gates respect reserveTokens above floor

Cluster shape from gitcrawl:

- total members: 23
- issues: 0
- pull requests: 23
- open candidates in local store: 12
- representative: #69379, currently open in local store
- latest member update: 2026-04-28T22:51:07.49400033Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43647 feat: proactive auto-compaction when session context exceeds threshold
- #49863 Agents: respect compaction.model override in safeguard extension
- #50673 Compaction safeguard: prefer runtime compaction model over chat-selected model
- #51316 fix: clamp reserveTokensFloor to prevent negative memory flush threshold
- #52080 fix: re-inject AGENTS.md context after overflow compaction
- #52469 fix(compaction): add token-based override for safeguard (fixes #49272)
- #52906 fix(ollama): register API provider in compaction safeguard extension
- #56660 fix(compaction): use model override in overflow and timeout recovery paths
- #59929 fix(compaction): prioritize runtime override model in safeguard
- #67297 fix(compaction): use reserveTokens instead of reserveTokensFloor for memoryFlush and preflight thresholds
- #67701 fix: save compaction tokensAfter to session totalTokens (#67667)

Open candidates:

- #40875 docs: document that heartbeat does not support model fallback
- #50694 fix(compaction): clamp reserveTokensFloor to prevent negative flush threshold
- #51389 feat: add fallbackOnErrors config for model fallback behavior
- #52012 feat(compaction): add modelFallbacks for compaction model resolution
- #54392 fix: clamp compaction max_tokens to model output limit
- #54406 fix(agents): add compaction event observability
- #63636 fix(compaction): guard malformed token estimation
- #64384 fix(reply): gate preflight compaction fast-path on token threshold (#63892)
- #65263 fix(compaction): clamp reserveTokens to at most 90% of context window in precheck
- #67706 fix(agents): emit compaction events during overflow/timeout recovery [AI]
- #69379 fix(compaction): preflight/memoryFlush gates respect reserveTokens above floor
- #69495 feat(heartbeat): support model fallbacks via {primary,fallbacks} (#69434)
