---
repo: openclaw/openclaw
cluster_id: gitcrawl-2329-dedupe-only-20260429-remote
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
  - "#58150"
candidates:
  - "#46080"
  - "#46637"
  - "#50178"
  - "#54253"
  - "#55520"
  - "#59416"
  - "#64267"
  - "#64613"
  - "#66125"
  - "#68970"
cluster_refs:
  - "#37566"
  - "#37647"
  - "#37696"
  - "#40024"
  - "#40824"
  - "#41438"
  - "#41481"
  - "#41827"
  - "#42062"
  - "#42203"
  - "#42550"
  - "#43657"
  - "#43807"
  - "#45249"
  - "#45882"
  - "#45965"
  - "#46080"
  - "#46637"
  - "#46667"
  - "#47993"
  - "#48314"
  - "#49438"
  - "#50178"
  - "#50601"
  - "#50788"
  - "#51036"
  - "#53455"
  - "#53696"
  - "#54253"
  - "#55520"
  - "#55825"
  - "#56841"
  - "#57242"
  - "#58150"
  - "#58195"
  - "#58821"
  - "#59416"
  - "#59824"
  - "#59826"
  - "#62709"
  - "#62833"
  - "#62874"
  - "#63189"
  - "#63660"
  - "#64267"
  - "#64543"
  - "#64613"
  - "#65189"
  - "#65533"
  - "#66125"
  - "#66470"
  - "#67092"
  - "#67745"
  - "#68689"
  - "#68970"
  - "#69111"
  - "#69410"
  - "#69843"
  - "#70622"
  - "#70736"
  - "#70996"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #58150 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2329 on 2026-04-29."
---

# Gitcrawl Cluster 2329

Generated from local gitcrawl run cluster 2329 for `openclaw/openclaw`.

Display title:

> [Bug]: RISC-V64: OpenClaw fails with LLM request failed: network connection error even though direct HTTP requests work

Cluster shape from gitcrawl:

- total members: 61
- issues: 61
- pull requests: 0
- open candidates in local store: 10
- representative: #58150, currently closed in local store
- latest member update: 2026-04-28T22:51:07.500384091Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #37566 [Bug]: TUI 不显示推送消息
- #37647 [Bug]: TUI doesn't display assistant replies, but webchat works fine
- #37696 unclosed <think> tags silently drop entire response on all channels
- #40024 [Bug]: Embedded agent 不向配置的 OpenAI 兼容 proxy 发送 POST /v1/chat/completions
- #40824 [Bug]: TUI doesn't refresh output
- #41438 [Bug]: openai-completions provider: assistant content serialized as array instead of string, breaking multi-turn tool calls
- #41481 openai-completions: assistant content sent as array causes recursive nesting on some models
- #41827 [Feature]:
- #42062 GLM-5 via Ollama: plain-text thinking leaks to users (similar to #33242)
- #42203 TUI exposes <relevant-memories> context block to user (should be hidden)
- #42550 Bug: TUI displays <relevant-memories> block in assistant responses
- #43657 [Bug]: openai-completions custom API (school CSU) returns JSON-wrapped response instead of plain text
- #43807 [Bug] Reasoning mode 'On' sends only thinking content, no final response in Telegram
- #45249 [Bug]: 回复只能显示一部分
- #45882 [Bug]: MiniMax streaming not working - output displays all at once instead of streaming
- #45965 Bug: Duplicate messages on Telegram when using reasoning models
- #46667 [Bug] reasoning_content control characters not escaped in openai-completions API payload
- #47993 [Bug]:Assistant can finish with an empty visible reply when provider returns malformed thinking/tool-call output
- #48314 [Bug]: /status shows "Think:" for reasoning visibility while /reasoning controls visibility, while /think controls effort
- #49438 Bug: 模型的 Think/Reasoning 内容被错误泄露给用户
- #50601 [Bug]: [Bug]: Thinking status can report high even when persisted session thinking level is xhigh
- #50788 Control UI displays internal relevant-memories metadata to users
- #51036 [Bug]: [Bug]: agent completes with payloads [] and zero usage on custom OpenAI-compatible provider
- #53455 WebChat UI displays <relevant-memories> metadata block after each reply
- #53696 <relevant-memories> block visible in webchat UI after v3.23 update
- #55825 webchat 前端显示内部 memory 上下文片段
- #56841 [Bug]: Custom OpenAI-compatible provider works via direct /v1/chat/completions, but OpenClaw 2026.3.28 always fails with "Connection error"
- #57242 [Bug]: Anthropic Claude reasoning/thinking content leaks to Discord on v2026.3.28
- #58150 [Bug]: RISC-V64: OpenClaw fails with LLM request failed: network connection error even though direct HTTP requests work
- #58195 [Bug]: Reasoning issue
- #58821 webchat: system prompt context (MemOS <memories> block + startup instructions) leaked into user-visible chat
- #59824 [Bug] MiniMax-M2.7 streaming not working - content field contains thinking tags mixed with response
- #59826 [Bug] stepfun/step-3.5-flash: thinking content leaks to channel because reasoning cannot be disabled
- #62709 Custom model provider: agent returns empty payloads despite 200 response
- #62833 Webchat: ephemeral prependContext from plugins leaks into user-visible messages
- #62874 [Bug]: Tool calls not properly returned in tool_calls field when using local vLLM + Qwen models with tool_choice: "auto"
- #63189 [Bug]: Streaming never ends (UI stuck)
- #63660 Bug: 工具返回内容截断后产生空响应
- #64543 Tool calling broken when user message content is multipart array on OpenAI-compatible providers
- #65189 OpenViking 记忆引擎的上下文块泄露到了 UI 层
- #65533 [Bug]: reasoning field missing from plain-text assistant turns in message history (tool-call turns unaffected) — OpenRouter + MiniMax
- #66470 [Bug]: TUI/webchat can stay in pondering after codex/gpt-5.4 has already finished the turn
- #67092 [Bug]: Malformed reasoning output can leak into user-visible and persisted assistant text when reply contains trailing `</think>` without a valid opening tag
- #67745 [Bug]: Custom OpenAI-compatible provider returns valid tool_calls directly, but OpenClaw never executes tools
- #68689 [Bug] Internal reasoning/thinking blocks leaking to WhatsApp channel adapter
- #69111 TUI silently drops assistant responses — WS frame-flush bug
- #69410 [Bug]: Custom OpenAI-compatible provider returns valid assistant content, but embedded agent ends with `payloads=0` / "Agent couldn't generate a response"
- #69843 Internal thinking tags (<think>) are leaked to user
- #70622 [Bug]: assistant turn can enter repeated terminated state immediately after a tool error instead of reporting the failure
- #70736 [Bug]: ollama-cloud provider (openai-completions) doesn't use native tool calling — model hallucinates exec outputs
- #70996 lossless-claw + thinking + tool-call triggers 400 invalid_request_error, causing fallback

Open candidates:

- #46080 Bug: Anthropic tool_result succeeds but final assistant content is empty, causing 'No reply from agent'
- #46637 [Bug]:reasoning_content in conversation history causes oMLX JSON parse error on subsequent turns
- #50178 [Bug]: 400 thinking is enabled, but reasoning_content is missing in assistant tool call message at index 12
- #54253 [Bug]: OpenClaw returns "run Error : LLM Request Failed" on RISC-V64 System.
- #55520 [Bug] 流式消息组装导致 thinking/text 归类不一致（空消息或思考链冒充正文）
- #59416 [Bug]: Thinking level displayed inconsistently almost everywhere; XHIGH support for models should be enhanced.
- #64267 Bug: OpenClaw 2026.4.9 exposes agent internal thinking (English) to user
- #64613 chat.history leaks system-level memory injection blocks to WebChat UI
- #66125 [Bug]: openai-completions fallback candidate is selected, but fallback does not complete successfully through an OpenAI-compatible proxy
- #68970 TUI misses post-restart heartbeat reply, while the same reply is visible in Web UI
