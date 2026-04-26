---
repo: openclaw/openclaw
cluster_id: ghcrawl-143816-autonomous-smoke
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#70180"
candidates:
  - "#33185"
  - "#38816"
  - "#48234"
  - "#57059"
  - "#60280"
  - "#64111"
  - "#65283"
  - "#65431"
  - "#65450"
  - "#65832"
  - "#66017"
  - "#66625"
  - "#66758"
  - "#67406"
  - "#69648"
  - "#70180"
cluster_refs:
  - "#33185"
  - "#38816"
  - "#45240"
  - "#45277"
  - "#48234"
  - "#55170"
  - "#56417"
  - "#57059"
  - "#60280"
  - "#64111"
  - "#64628"
  - "#65283"
  - "#65431"
  - "#65450"
  - "#65832"
  - "#66017"
  - "#66625"
  - "#66758"
  - "#67406"
  - "#69648"
  - "#70180"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #70180 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 143816 on 2026-04-25."
---

# GHCrawl Cluster 143816

Generated from local ghcrawl run cluster 143816 for `openclaw/openclaw`.

Display title:

> Bug: Image tool reports 'Unknown model' for all custom providers

Cluster shape from ghcrawl:

- total members: 21
- issues: 21
- pull requests: 0
- open candidates in local store: 16
- representative: #70180, currently open in local store
- latest member update: 2026-04-25T17:12:54.171Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45240 image tool reports Unknown model for custom LiteLLM image-capable model via agents.defaults.imageModel
- #45277 [Bug] MiniMax Vision Model (VL-01) not available in imageModel
- #55170 [Bug] image tool reports 'Unknown model' for all configured vision models
- #56417 [Bug]: Issue: Image tool returns "No media-understanding provider registered" for configured vision models
- #64628 Bug: image tool reports 'No API provider registered for api: ollama' despite OLLAMA_API_KEY and correct config

Open candidates:

- #33185 [Bug]: Critical Bug: imageModel fails with "Unknown model" despite valid config
- #38816 [Bug]: Image tool incorrectly adds anthropic provider prefix to all model IDs / 图像工具自动为所有模型ID错误添加anthropic provider前缀
- #48234 Bug: Image tool with MiniMax vision model not working
- #57059 [Bug] imageModel 配置已启用 vision-model 但调用时报错 No media-understanding provider
- #60280 [Bug] image tool fails to recognize Ollama vision models (adds anthropic/ prefix)
- #64111 [Bug]: Ollama vision models not accessible via `image` tool
- #65283 image tool fails with MiniMax Coding Plan API key: Model does not support images
- #65431 [Bug] image tool: Model does not support images despite input: ["text", "image"] in config
- #65450 Image Tool Fails with 'Unknown model' on v2026.4.11 (worked on v2026.4.8)
- #65832 [Bug]: image tool fails with custom provider — ModelRegistry doesn't recognize custom providers from models.json
- #66017 [Bug]: image 工具无法识别 models.providers 中定义的自定义 provider
- #66625 image tool fails with Minimax VLM model
- #66758 Image tool fails with 'Unknown model' for all ollama/ provider models despite #59943 fix
- #67406 image tool doesn't recognise Ollama cloud vision models
- #69648 [Bug] MiniMax-M2.7 image understanding not working - isMinimaxVlmModel hardcoded to only accept MiniMax-VL-01
- #70180 Bug: Image tool reports 'Unknown model' for all custom providers
