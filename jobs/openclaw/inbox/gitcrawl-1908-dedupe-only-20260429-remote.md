---
repo: openclaw/openclaw
cluster_id: gitcrawl-1908-dedupe-only-20260429-remote
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
  - "#48479"
candidates:
  - "#9986"
  - "#39857"
  - "#41398"
  - "#41517"
  - "#50619"
  - "#50719"
  - "#51205"
  - "#52648"
  - "#53578"
  - "#56594"
  - "#58775"
  - "#58957"
  - "#62212"
  - "#63685"
cluster_refs:
  - "#9986"
  - "#39253"
  - "#39857"
  - "#40152"
  - "#40211"
  - "#41249"
  - "#41398"
  - "#41517"
  - "#42854"
  - "#43086"
  - "#44303"
  - "#44498"
  - "#44955"
  - "#45294"
  - "#46700"
  - "#47304"
  - "#47557"
  - "#48033"
  - "#48086"
  - "#48479"
  - "#48689"
  - "#48910"
  - "#49039"
  - "#49191"
  - "#49566"
  - "#49885"
  - "#50053"
  - "#50619"
  - "#50719"
  - "#51205"
  - "#51629"
  - "#51638"
  - "#52402"
  - "#52476"
  - "#52648"
  - "#53566"
  - "#53578"
  - "#55541"
  - "#56253"
  - "#56594"
  - "#58355"
  - "#58775"
  - "#58957"
  - "#59188"
  - "#60947"
  - "#61007"
  - "#62212"
  - "#62309"
  - "#62326"
  - "#62823"
  - "#63008"
  - "#63029"
  - "#63685"
  - "#64238"
  - "#64653"
  - "#64852"
  - "#65318"
  - "#65363"
  - "#66046"
  - "#66127"
  - "#66740"
  - "#68447"
  - "#68984"
  - "#70159"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48479 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1908 on 2026-04-29."
---

# Gitcrawl Cluster 1908

Generated from local gitcrawl run cluster 1908 for `openclaw/openclaw`.

Display title:

> [Bug]: google-vertex on 2026.3.13 appears to use API-key auth instead of ADC/Bearer for Gemini 3.x (global)

Cluster shape from gitcrawl:

- total members: 64
- issues: 56
- pull requests: 8
- open candidates in local store: 14
- representative: #48479, currently closed in local store
- latest member update: 2026-04-28T22:51:07.5524258Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39253 Gemini OpenAI-compatible API regression: provider/model format sent to Google instead of bare model ID
- #40152 Google provider/model resolution: google/<model> ids not normalized (e.g. google/gemini-2.5-flash)
- #40211 fix: normalize google/<model> ids for direct Google provider resolution (#40152)
- #41249 [Bug]: Google model provider prefix not stripped in 2026.3.8 — causes 404 on all Google model API calls (regression)
- #42854 Model picker shows stale Gemini preview alias for google/gemini-3.1-pro
- #43086 Gemini models return 400: store parameter not supported by Google AI API
- #44303 Switching to a smaller-context model mid-session causes hard crash instead of graceful truncation
- #44498 [Bug] NVIDIA Provider: Multiple models silent failure
- #44955 fix: respect provider-level contextWindow over model metadata
- #45294 [Bug]: google/gemini-3.0-flash accepted in config, fails at runtime with "Unknown model" — Google model catalog not validated at startup
- #46700 [Bug]: Invalid model ID after switching model
- #47304 [Bug]:
- #47557 systemPromptReport not updated when model is switched, causing Unknown model error
- #48033 google-vertex ADC broken: '<authenticated>' marker passed as apiKey to @google/genai SDK
- #48086 [Bug]: Google Gemini 3.x models return 404 but manual API call succeeds
- #48479 [Bug]: google-vertex on 2026.3.13 appears to use API-key auth instead of ADC/Bearer for Gemini 3.x (global)
- #48689 [Bug] google-vertex auth broken on Windows in 2026.3.13 — GOOGLE_APPLICATION_CREDENTIALS treated as API key
- #48910 [Bug]: google-vertex provider broken with ADC auth: "<authenticated>" sentinel passed as API key + gaxios@7.1.3 incompatible with Node 24
- #49039 google-vertex provider sends authenticated sentinel as literal API key, causing 401 on Vertex AI
- #49191 google-vertex ADC auth broken: "<authenticated>" sentinel passed as literal API key → 401
- #49566 fix: normalize same-provider embedded model refs
- #49885 [Bug]: google-vertex fails with "No credentials found for profile google-vertex:default" even when ADC is valid
- #50053 google-vertex provider: "<authenticated>" sentinel passed as API key breaks ADC auth
- #51629 Gemini 2.5 Flash: model_not_found (empty 404) in agent/embedded runtime despite API key working directly
- #51638 Context window not enforced on model switch — oversized prompts sent to smaller models
- #52402 fix: respect user-configured context window for Ollama native API
- #52476 Bug: google-vertex sentinel '<authenticated>' passed as literal API key to pi-ai, causing silent auth failure in isolated sessions
- #53566 [Bug]: google-vertex provider rejects gemini-3.1-flash-lite-preview as Unknown model
- #55541 [Bug]: google vertex report FAILED_PRECONDITION
- #56253 [Bug]: `google-vertex` provider ignores ADC credentials — throws 'No API key found'
- #58355 [Bug]: Failed to set model: GatewayRequestError: model not allowed: ollama/qwen3.5:35b-a3b-coding-nvfp4
- #59188 fix(provider): strip provider prefix from model ID before API call
- #60947 Feature: Degraded mode for model fallback — prevent death spiral when cloud model is throttled
- #61007 [Bug] Gemini models displayed as anthropic in openclaw models list
- #62309 [Bug]: video_generate tool fails with 404 for Google Veo models (API key is valid)
- #62326 [Bug]: openclaw devices 命令没有反应。
- #62823 [Bug]: updated from 2026.4.2 to 2026.4.5,google-vertex doesn't work anymore
- #63008 [Bug]: video_generate: Google Veo 3.1 returns 404 'No such model' due to wrong API endpoint
- #63029 [Bug]:Openclaw update to  2026.4.5-2026.4.8 Nvidia Api Switching models triggers an error,
- #64238 [Bug]: Regression: OpenClaw 2026.4.9 fails with "Unknown model: qwen/qwen3.6-plus" while 2026.4.5 works
- #64653 fix: honor provider-prefixed configured model ids for routed providers
- #64852 [Bug]: google-vertex OAuth/service-account auth works on 2026.4.9, fails on 2026.4.10 with 401 CREDENTIALS_MISSING
- #65318 [Bug]: [Regression]: Gemini CLI OAuth (google-gemini-cli) orphaned and broken in v2026.4.10
- #65363 [Bug]: Gemini CLI communication failure caused by outdated template ID mapping in provider-models.ts
- #66046 [Bug]: Regression: google-vertex models fail with 401 UNAUTHENTICATED on 2026.4.12 (works on 2026.3.28)
- #66127 [Feature] Pre-fallback automatic context compaction for smaller context models
- #66740 [Bug]: Google Provider: gemma-4-26b-a4b-it incorrectly displays 1024k context window
- #68447 [Bug]: Model ID with provider prefix (google/gemma-4-26b-a4b) routes to wrong provider when using LM Studio
- #68984 [Bug] Google provider does not work with Gemma models - OpenAI API format incompatibility
- #70159 [Bug]:  Google Models Connection Failure After Upgrading to OpenClaw 4.21

Open candidates:

- #9986 Feature: Trigger model fallback on context length exceeded
- #39857 Status/session context window can over-report the selected model's actual window
- #41398 fix(models): strip google/ provider prefix before sending model ID to Google API
- #41517 fix(models): strip redundant same-provider model prefixes
- #50619 Feature: /model switch should check context size against target model limits
- #50719 [Bug]: 404 status code (body not found)
- #51205 [Bug]: openclw cli 工具无法使用 以及 models模型切换错误。
- #52648 google-vertex provider authentication fails when running through proxychains
- #53578 [Bug]: google-gemini-cli OAuth became consistently slow per turn after upgrading to OpenClaw 2026.3.23-2
- #56594 [Bug 2026.3.24] All model calls return "404 status code (no body)" after doctor command
- #58775 Bug: google-vertex provider merged into google transport path in 2026.3.28 (regression)
- #58957 Model switch can fail silently when carried-over session context is too large
- #62212 Vertex AI ADC OAuth Authentication Fails with 401 Error
- #63685 [Bug]: Cannot run gemma 4 models from google ai studio
