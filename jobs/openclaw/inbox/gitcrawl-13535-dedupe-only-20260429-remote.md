---
repo: openclaw/openclaw
cluster_id: gitcrawl-13535-dedupe-only-20260429-remote
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
  - "#65283"
candidates:
  - "#53738"
  - "#64213"
  - "#65165"
  - "#65746"
  - "#67976"
cluster_refs:
  - "#31486"
  - "#33185"
  - "#38816"
  - "#44496"
  - "#44647"
  - "#45221"
  - "#45240"
  - "#45277"
  - "#48234"
  - "#49911"
  - "#50569"
  - "#51123"
  - "#51798"
  - "#53738"
  - "#54400"
  - "#55170"
  - "#55200"
  - "#56237"
  - "#56417"
  - "#57059"
  - "#58761"
  - "#60280"
  - "#61064"
  - "#61149"
  - "#61789"
  - "#62266"
  - "#62561"
  - "#63236"
  - "#63667"
  - "#63717"
  - "#64111"
  - "#64213"
  - "#64244"
  - "#64628"
  - "#64644"
  - "#64839"
  - "#64866"
  - "#65165"
  - "#65283"
  - "#65424"
  - "#65431"
  - "#65450"
  - "#65742"
  - "#65746"
  - "#65832"
  - "#65840"
  - "#66017"
  - "#66095"
  - "#66253"
  - "#66486"
  - "#66625"
  - "#66639"
  - "#66758"
  - "#67406"
  - "#67976"
  - "#68012"
  - "#68272"
  - "#68895"
  - "#69239"
  - "#69648"
  - "#70180"
  - "#70256"
  - "#70482"
  - "#70557"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65283 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13535 on 2026-04-29."
---

# Gitcrawl Cluster 13535

Generated from local gitcrawl run cluster 13535 for `openclaw/openclaw`.

Display title:

> image tool fails with MiniMax Coding Plan API key: Model does not support images

Cluster shape from gitcrawl:

- total members: 64
- issues: 61
- pull requests: 3
- open candidates in local store: 5
- representative: #65283, currently closed in local store
- latest member update: 2026-04-28T10:02:37.370099831Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #31486 image tool does not support custom providers configured in openclaw.json
- #33185 [Bug]: Critical Bug: imageModel fails with "Unknown model" despite valid config
- #38816 [Bug]: Image tool incorrectly adds anthropic provider prefix to all model IDs / 图像工具自动为所有模型ID错误添加anthropic provider前缀
- #44496 Image model cannot recognize LM Studio deployed models (qwen3-vl)
- #44647 Ollama model discovery doesn't check /api/show for vision capabilities
- #45221 [Bug]: image tool ignores current imageModel and uses stale runtime image/fallback state
- #45240 image tool reports Unknown model for custom LiteLLM image-capable model via agents.defaults.imageModel
- #45277 [Bug] MiniMax Vision Model (VL-01) not available in imageModel
- #48234 Bug: Image tool with MiniMax vision model not working
- #49911 image tool 无法正确解析 ollama-local 模型标识符
- #50569 Ollama vision models (qwen3-vl, llama3.2-vision) not detected as supporting images
- #51123 Image analysis fails with MiniMax VLM API 400 error
- #51798 Bug: image tool returns 'Model does not support images' for ollama/qwen3-vl:2b despite VL model working via direct API
- #54400 [Bug] image tool 不支持 minimax provider 作为图片理解后端
- #55170 [Bug] image tool reports 'Unknown model' for all configured vision models
- #55200 [Bug] MiniMax-VL-01 图像理解 - 手动模型配置无法使用
- #56237 [Bug] image_generate with reference image fails: 'minimax-portal edit does not support resolution overrides'
- #56417 [Bug]: Issue: Image tool returns "No media-understanding provider registered" for configured vision models
- #57059 [Bug] imageModel 配置已启用 vision-model 但调用时报错 No media-understanding provider
- #58761 [Bug] image tool fails with minimax-portal/MiniMax-M2.7: chat content is empty (2013)
- #60280 [Bug] image tool fails to recognize Ollama vision models (adds anthropic/ prefix)
- #61064 Bug: MiniMax image-01 image-to-image blocked by resolution override check in providers manifest
- #61149 [Bug]: minimax image generation fails with error 2049 (invalid api key) — wrong API endpoint
- #61789 [Bug]: image tool not available when using provider aliases (e.g. opencode/xxx models)
- #62266 fix(image): keep tool available for vision-capable runtime models
- #62561 [Bug]: Inline image attachments dropped before `imageModel` fallback fires (catalog normalization + routing issue)
- #63236 image tool: MiniMax API returns 'chat content is empty (2013)' when processing iMessage images
- #63667 [Bug] Image tool fails with 'chat content is empty' after 2026.4.9 upgrade
- #63717 Image tool: 'No API provider registered for api: ollama' — Ollama not registered for generic complete() calls
- #64111 [Bug]: Ollama vision models not accessible via `image` tool
- #64244 [Bug]: MiniMax image tool bypasses plugin VL-01 routing in 2026.4.8, sends image request directly to M2.7 chat endpoint
- #64628 Bug: image tool reports 'No API provider registered for api: ollama' despite OLLAMA_API_KEY and correct config
- #64644 [Bug] MiniMax M2.7 图像理解功能调用失败 - chat content is empty (2013)
- #64839 [Bug]: qwen3.6-plus via bailian cannot handle images after upgrade: image tool says Unknown model and QQ media URL is blocked
- #64866 [Bug] minimax-portal OAuth login VLM image understanding not working despite having coding-plan-vlm quota
- #65283 image tool fails with MiniMax Coding Plan API key: Model does not support images
- #65424 [Bug] minimax/MiniMax-M2.7 image attachments silently dropped in chat.send — buildMinimaxCatalog() hardcodes input: ["text"]
- #65431 [Bug] image tool: Model does not support images despite input: ["text", "image"] in config
- #65450 Image Tool Fails with 'Unknown model' on v2026.4.11 (worked on v2026.4.8)
- #65742 [Bug]: pdf tool reports Unknown model for config-defined custom providers even when models list shows the model
- #65832 [Bug]: image tool fails with custom provider — ModelRegistry doesn't recognize custom providers from models.json
- #65840 [Bug]: image tool reports "Unknown model" for registered imageModel (qwen/qwen3.6-plus)
- #66017 [Bug]: image 工具无法识别 models.providers 中定义的自定义 provider
- #66095 parseMessageWithAttachments drops images for qwen/qwen3.6-plus despite model declaring input: [text, image]
- #66253 parseMessageWithAttachments drops images for bigmodel/glm-5v-turbo despite model declaring input: [text, image]
- #66486 [Bug]: [Bug] image tool 报 Unknown model 当 本地模型 被设为 imageModel 而非主模型时
- #66625 image tool fails with Minimax VLM model
- #66639 [Bug] image tool 不支持 minimax provider 作为图片理解后端
- #66758 Image tool fails with 'Unknown model' for all ollama/ provider models despite #59943 fix
- #67406 image tool doesn't recognise Ollama cloud vision models
- #68012 Gateway drops image attachments for custom providers despite image input configured
- #68272 [Bug]: Image attachments dropped even when model supports images Description
- #68895 [Bug] Bailian provider image model lookup fails due to double provider prefix
- #69239 [Bug] Image tool silently drops all custom models when any provider lacks apiKey
- #69648 [Bug] MiniMax-M2.7 image understanding not working - isMinimaxVlmModel hardcoded to only accept MiniMax-VL-01
- #70180 Bug: Image tool reports 'Unknown model' for all custom providers
- #70256 image tool fails with Unknown model for non-built-in providers (validateConfig rejects missing apiKey)
- #70482 [Bug]: opencode-go vision-capable models cannot use image tool — missing MediaUnderstandingProvider
- #70557 [Bug]: models.mode=merge may incorrectly drop image attachments when one provider is missing apiKey

Open candidates:

- #53738 fix(media-tools): apply models.providers baseUrl override in image and pdf tools
- #64213 [Bug] Custom provider models with input: ["text", "image"] are treated as text-only when missing from gateway model catalog
- #65165 [Bug]:  图片上传失败：模型不支持图片，但配置了 input: ["text", "image"]
- #65746 fix(pdf): resolve custom provider models with config-aware resolver
- #67976 [Bug] imageModel调用火山引擎API返回404错误
