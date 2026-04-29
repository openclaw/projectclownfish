---
repo: openclaw/openclaw
cluster_id: gitcrawl-1871-dedupe-only-20260429-remote
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
  - "#48638"
candidates:
  - "#54240"
  - "#67988"
cluster_refs:
  - "#46091"
  - "#46975"
  - "#48096"
  - "#48106"
  - "#48128"
  - "#48224"
  - "#48256"
  - "#48634"
  - "#48638"
  - "#48665"
  - "#48878"
  - "#48907"
  - "#48997"
  - "#49288"
  - "#49432"
  - "#49441"
  - "#49544"
  - "#49686"
  - "#49718"
  - "#49829"
  - "#49867"
  - "#50050"
  - "#50115"
  - "#50197"
  - "#50293"
  - "#50344"
  - "#50509"
  - "#50534"
  - "#50536"
  - "#50647"
  - "#50651"
  - "#50711"
  - "#50748"
  - "#50778"
  - "#50939"
  - "#51023"
  - "#51439"
  - "#51506"
  - "#51510"
  - "#51788"
  - "#51957"
  - "#52001"
  - "#52002"
  - "#52040"
  - "#52061"
  - "#52127"
  - "#52233"
  - "#52471"
  - "#52474"
  - "#52551"
  - "#53758"
  - "#54096"
  - "#54240"
  - "#54503"
  - "#56449"
  - "#56487"
  - "#57917"
  - "#58152"
  - "#59764"
  - "#62405"
  - "#62933"
  - "#67494"
  - "#67988"
  - "#69128"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48638 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1871 on 2026-04-29."
---

# Gitcrawl Cluster 1871

Generated from local gitcrawl run cluster 1871 for `openclaw/openclaw`.

Display title:

> Bug: Control UI uses wrong provider prefix when switching models

Cluster shape from gitcrawl:

- total members: 64
- issues: 64
- pull requests: 0
- open candidates in local store: 2
- representative: #48638, currently closed in local store
- latest member update: 2026-04-28T05:49:59.081401237Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #46091 [Bug]: Control UI /model command shows short model name in suggestion but requires provider/model format
- #46975 [Bug]: Discord /model picker drops openrouter / prefix for OpenRouter nested ids (deepseek/deepseek-v3.2) → "model not allowed"
- #48096 [Bug]: Web UI Chat model dropdown does not sync with active session model and prepends incorrect provider on change
- #48106 Control UI model picker sends bare model IDs instead of provider-qualified refs
- #48128 Control UI: model switcher sends wrong provider prefix
- #48224 [Bug]: Model selector in webchat UI incorrectly concatenates provider prefix
- #48256 Control UI prepends wrong provider prefix when switching models
- #48634 [Bug]: Webchat agent dropdown loses other agents after switching sessions
- #48638 Bug: Control UI uses wrong provider prefix when switching models
- #48665 [Bug]: Web UI model switcher uses wrong provider prefix when switching cross-provider models
- #48878 Bug: webchat model dropdown sends model name without provider prefix, causing 'model not allowed' error
- #48907 [Bug]: Control UI model selector prepends wrong provider prefix to all models
- #48997 [Bug]: Control UI: Incorrect model prefix sent for glm-5-external (deepseek/ vs zai/)
- #49288 Control panel UI bug: Anthropic models incorrectly prefixed with 'ollama/' when selecting model
- #49432 Control UI model switcher prepends active provider to new model ID on provider change
- #49441 Control UI model switcher prepends wrong provider to model ID
- #49544 [Bug] Webchat model switcher prepends wrong provider when switching between providers
- #49686 [BUG] Model selection fails: "model not allowed: starflow/Qwen3.5-35B-A3B" when selecting qwen-local model
- #49718 [Bug] WebUI /model 命令错误拼接 provider 导致模型切换失败
- #49829 [Bug] Webchat Control UI model selector cannot switch to non-Anthropic models
- #49867 Control UI model picker sends bare model ID instead of provider/model
- #50050 [Bug]: Control UI model switcher sends wrong provider prefix for cross-provider model switching
- #50115 Model toggle: non-Anthropic provider prefix stripped, all models routed to anthropic
- #50197 [Bug]:Control UI dropdown fails to reset provider prefix after model switch
- #50293 [Bug]: OpenClaw Control UI 模型下拉列表显示错误
- #50344 [Bug] Control UI model switch uses wrong provider prefix when crossing providers
- #50509 [Bug]: Control UI cannot switch Ollama models when model name contains slashes
- #50534 Control UI: Agent settings model switch sends model ID without provider prefix
- #50536 [Bug]:  Control UI model selector sends wrong provider prefix when switching from OpenAI to Qwen models
- #50647 [Bug]: Model dropdown strips provider prefix, causing "model not allowed" error for non-Anthropic models
- #50651 [Control UI Bug] Model dropdown doesn't show models with duplicate model IDs
- #50711 [Bug]: Control UI model picker strips openrouter/ prefix from model IDs
- #50748 [Bug]: Behavior bug
- #50778 Control UI: model switcher prepends wrong provider prefix
- #50939 [Bug] Model switch displays wrong prefix: moonshot/qwen3.5-plus
- #51023 [Bug]:  UI/Interface
- #51439 [Bug]: UI  Model selection Normalisation & Deduplication
- #51506 [Bug] Webchat model selector prefixes all models with "anthropic/" regardless of actual provider
- #51510 [Bug] Model selector UI incorrectly combines provider name with model ID
- #51788 Bug: Control UI prefixes xAI model IDs with 'anthropic/' causing GatewayRequestError
- #51957 Control UI: Chat model picker uses bare catalog id, resolves to wrong provider (e.g. openai-codex/deepseek-chat)
- #52001 Web UI model selector assigns wrong provider prefix for models shared across multiple providers
- #52002 Web UI model selector assigns wrong provider prefix for models shared across multiple providers
- #52040 Control UI: Model selector dropdown sends bare model ID without provider prefix
- #52061 [Bug]: Control UI model picker prefixes openai/ when selecting Anthropic Claude → model not allowed
- #52127 [Bug] Control UI 选择 DeepSeek 模型时错误添加 moonshot/ 前缀
- #52233 [Bug]: The UI fails to correctly update the provider prefix when switching models across different providers, resulting in invalid model paths.
- #52471 Control UI: Model selector uses wrong provider prefix (ollama/ instead of ollama-remote/)
- #52474 Desktop UI model dropdown prepends 'anthropic/' to all non-Anthropic models
- #52551 [Bug]: Dashboard model selector concatenates wrong provider ID
- #53758 [control-ui] Model dropdown shows duplicates and strips provider prefix on selection
- #54096 [Bug]:  WebUI model switcher incorrectly uses wrong provider prefix when switching models
- #54503 [Bug]: OpenRouter models fail to switch via Control UI — "model not allowed" / "Unknown model"
- #56449 Control UI: GPT dropdown constructs wrong model string
- #56487 Control UI: GPT dropdown constructs wrong model string (anthropic/gpt-5.4 instead of openai-codex/gpt-5.4)
- #57917 Control UI model switch misparses aliases like gpt-5.4 as anthropic/*
- #58152 Control UI: session model override dropdown does not take effect (webchat)
- #59764 Control UI: Default model label shows underlying provider (anthropic) instead of routing provider (openrouter)
- #62405 [Bug]: Control UI dropdown uses wrong value for OpenRouter models
- #62933 [Bug]: Control UI Model Selection Returns "model not allowed" Error - Cannot Switch Custom Provider Models
- #67494 Bug: Model selector not working in Chat panel (only Primary Model setting works)
- #69128 [Bug]: Webchat model selector drops to 2 models after WebSocket reconnect / session switch

Open candidates:

- #54240 Control UI race: model dropdown selection is not guaranteed to apply before next chat.send
- #67988 Control UI: Model dropdown shows alias/key instead of display name for Claude Opus 4.7 and Claude Sonnet 4.6
