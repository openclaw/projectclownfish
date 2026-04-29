---
repo: openclaw/openclaw
cluster_id: gitcrawl-13540-dedupe-only-20260429-remote
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
  - "#65234"
candidates:
  - "#37813"
  - "#44935"
  - "#64676"
cluster_refs:
  - "#37813"
  - "#40410"
  - "#41492"
  - "#44381"
  - "#44935"
  - "#47705"
  - "#48955"
  - "#49079"
  - "#49122"
  - "#49696"
  - "#51209"
  - "#52383"
  - "#54698"
  - "#55879"
  - "#56058"
  - "#56875"
  - "#57437"
  - "#57471"
  - "#57812"
  - "#57906"
  - "#57939"
  - "#57961"
  - "#58045"
  - "#58069"
  - "#58213"
  - "#58232"
  - "#58258"
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
  - "#61318"
  - "#62141"
  - "#63178"
  - "#63608"
  - "#63712"
  - "#64083"
  - "#64419"
  - "#64676"
  - "#65234"
  - "#65676"
  - "#66530"
  - "#66951"
  - "#67045"
  - "#67260"
  - "#67858"
  - "#68696"
  - "#69642"
  - "#69750"
  - "#70583"
  - "#71059"
  - "#71111"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65234 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13540 on 2026-04-29."
---

# Gitcrawl Cluster 13540

Generated from local gitcrawl run cluster 13540 for `openclaw/openclaw`.

Display title:

> Fallback models not attempted when session started on a different primary model (live session model switch skipped)

Cluster shape from gitcrawl:

- total members: 64
- issues: 63
- pull requests: 1
- open candidates in local store: 3
- representative: #65234, currently closed in local store
- latest member update: 2026-04-28T05:49:59.018804859Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40410 [Bug]: Config file wiped on Gateway restart
- #41492 Regression: Google 429 still kills fallback chain on v2026.3.8 (originally #13623)
- #44381 feat: retry same model on transient errors before falling to next candidate
- #47705 [Bug]: Fallback model permanently overwrites agent config in openclaw.json    — primary model never retried
- #48955 Model fallback chain inconsistent when session has model override — CLI exits code 1 with no useful error
- #49079 [Bug]: HTTP 529 (Anthropic overloaded) does not trigger model fallback chain
- #49122 [Bug]: Configured primary model is overridden by auto-selected Ollama model
- #49696 overloaded_error from Anthropic API does not trigger model fallback
- #51209 Fallback chain does not cascade on HTTP 401/404 provider errors
- #52383 feat: configurable fallbackAfterRetries for model failover under sustained 429s
- #54698 Embedded agent runs do not use model fallback chain
- #55879 bug: session model does not revert to primary after failover recovery
- #56058 [Bug]: agents.defaults.model.fallbacks not used on Anthropic 529 overload_error
- #56875 [Bug]: rawError="terminated" does not trigger model fallback (classifyFailoverReason returns null)
- #57437 Gateway dashboard UI Save wipes entire openclaw.json config, resetting provider keys, models, channels, and all settings
- #57471 runWithModelFallback() treats LiveSessionModelSwitchError as candidate_failed, causing unnecessary fallback chain
- #57812 LiveSessionModelSwitchError overrides model failover, creating infinite retry loop
- #57906 Model fallback retries primary too aggressively before moving to next fallback
- #57939 [Bug]: Gateway default model not updated after `openclaw models set` + service restart
- #57961 [Bug]: Live session model switch detector blocks programmatic fallback during rate limits
- #58045 LiveSessionModelSwitchError prevents cross-provider model fallback
- #58069 [Bug]: Live session model switch overrides active fallback during rate-limit cooldown, creating infinite retry loop
- #58213 Bug: Session model preference overrides failover, causing infinite retry loop
- #58232 Bug: session level model override does not trigger fallback models on rate limit
- #58258 Live model switch creates duplicate messages during cross-provider failover loop
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
- #61318 Fallback model configuration not loading after gateway restart
- #62141 [Bug]: OpenClaw 2026.4.5 fails to fallback on Anthropic overloaded_error (503), retries indefinitely
- #63178 Bug: Per-session /model override lost after compaction/fallback
- #63608 Compaction produces invalid tool_use/tool_result ordering → silent fallback to wrong model
- #63712 Fallback model persistence overrides channel-level model overrides permanently
- #64083 Fallback model sticks for entire session — no auto-recovery to primary
- #64419 [Bug]: Gateway startup clobbers openclaw.json (config truncated on boot)
- #65234 Fallback models not attempted when session started on a different primary model (live session model switch skipped)
- #65676 [Bug]: Model fallback never actually executes — live session model switch overrides fallback selection in a loop
- #66530 [Feature]: Primary model should be probed for recovery after fallback due to timeout
- #66951 Bug: Main agent falls back to 3rd-priority model (claude-sonnet) instead of 2nd (gpt-5.4-mini) on Ollama init failure
- #67045 Sticky model fallback after compaction-triggered tool_use formatting error
- #67260 [Bug]: Native Ollama primary falls back in long-lived Telegram session while fresh runs succeed
- #67858 Fallback model gets persisted as sticky session override after primary model failure
- #68696 [Bug]:
- #69642 [Bug]: 529 overload errors don't trigger automatic failover to fallback providers
- #69750 [Bug] Telegram /model picker shows stale catalog: loadModelCatalog module-level cache never invalidates on config change
- #70583 Model menu: bypass stale catalog cache
- #71059 [Bug]: Gateway restart strips channel credentials during config hydration
- #71111 [Bug]: Global model fallbacks not inherited by session runner (fallbackConfigured: false)

Open candidates:

- #37813 [Bug]: Unrecognised model IDs silently fall back to primary default — bypasses configured fallback chain and tool permissions
- #44935 [Feature]: Auto-recover to primary model after fallback — with health probe, not blind switchback
- #64676 [Bug]: Gateway Configuration Persistence Issue
