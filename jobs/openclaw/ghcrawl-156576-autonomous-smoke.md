---
repo: openclaw/openclaw
cluster_id: ghcrawl-156576-autonomous-smoke
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
  - "#57812"
candidates:
  - "#57471"
  - "#57812"
  - "#57961"
  - "#58045"
  - "#58069"
  - "#58213"
  - "#58232"
  - "#58288"
  - "#58303"
  - "#58308"
  - "#58392"
  - "#58496"
  - "#58510"
  - "#58531"
  - "#58532"
  - "#58556"
  - "#58578"
  - "#58600"
  - "#59213"
  - "#59252"
  - "#59303"
  - "#59861"
  - "#59928"
  - "#65676"
  - "#66951"
cluster_refs:
  - "#57471"
  - "#57812"
  - "#57961"
  - "#58045"
  - "#58069"
  - "#58213"
  - "#58232"
  - "#58288"
  - "#58303"
  - "#58308"
  - "#58392"
  - "#58496"
  - "#58510"
  - "#58531"
  - "#58532"
  - "#58556"
  - "#58578"
  - "#58600"
  - "#59213"
  - "#59252"
  - "#59303"
  - "#59861"
  - "#59928"
  - "#65676"
  - "#66951"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #57812 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156576 on 2026-04-26."
---

# GHCrawl Cluster 156576

Generated from local ghcrawl run cluster 156576 for `openclaw/openclaw`.

Display title:

> LiveSessionModelSwitchError overrides model failover, creating infinite retry loop

Cluster shape from ghcrawl:

- total members: 25
- issues: 25
- pull requests: 0
- open candidates in local store: 25
- representative: #57812, currently open in local store
- latest member update: 2026-04-24T18:56:26.190Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #57471 runWithModelFallback() treats LiveSessionModelSwitchError as candidate_failed, causing unnecessary fallback chain
- #57812 LiveSessionModelSwitchError overrides model failover, creating infinite retry loop
- #57961 [Bug]: Live session model switch detector blocks programmatic fallback during rate limits
- #58045 LiveSessionModelSwitchError prevents cross-provider model fallback
- #58069 [Bug]: Live session model switch overrides active fallback during rate-limit cooldown, creating infinite retry loop
- #58213 Bug: Session model preference overrides failover, causing infinite retry loop
- #58232 Bug: session level model override does not trigger fallback models on rate limit
- #58288 Fallback model fails mid-session with 'Live session model switch requested' after overloaded_error
- #58303 LiveSessionModelSwitch silently hijacks fallback in live sessions, creating infinite retry loop
- #58308 Fallback mechanism incorrectly requests primary model switch instead of using fallback model
- #58392 Model fallback fails when session has modelOverride: LiveSessionModelSwitchError not recognized as failover error
- #58496 [Critical Bug] Session Model Override Prevents Fallback Mechanism
- #58510 resolvePersistedLiveSelection() overrides emergency failover decisions, causing infinite overload retry loops
- #58531 resolvePersistedLiveSelection() overrides emergency failover decisions, causing infinite overload retry loops
- #58532 resolvePersistedLiveSelection() overrides emergency failover decisions, causing infinite overload retry loops
- #58556 Live model switch check prevents model fallback from working
- #58578 [bug] Fallback chain aborted by premature primary restore when cooldown expires mid-flight
- #58600 LiveSessionModelSwitchError blocks fallback-driven cross-provider model changes
- #59213 Fallback model selection overridden by session model reconciliation — causes infinite 429 loop
- #59252 v2026.3.28: Rate-limited primary model causes LiveSessionModelSwitchError cascade, fallbacks never used
- #59303 Model fallback not triggered on 429 rate_limit_error — retries same provider indefinitely
- #59861 Provider quota/rate-limit errors should trigger model fallback chain, not crash the session
- #59928 [Bug]: Primary model not respected after fallback in OpenClaw 2026.4.2
- #65676 [Bug]: Model fallback never actually executes — live session model switch overrides fallback selection in a loop
- #66951 Bug: Main agent falls back to 3rd-priority model (claude-sonnet) instead of 2nd (gpt-5.4-mini) on Ollama init failure
