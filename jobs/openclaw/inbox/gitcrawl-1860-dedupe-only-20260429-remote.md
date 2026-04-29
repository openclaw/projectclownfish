---
repo: openclaw/openclaw
cluster_id: gitcrawl-1860-dedupe-only-20260429-remote
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
  - "#61288"
candidates:
  - "#41645"
  - "#43009"
  - "#44845"
  - "#55678"
  - "#63425"
cluster_refs:
  - "#39620"
  - "#39809"
  - "#40479"
  - "#40809"
  - "#41645"
  - "#41905"
  - "#41963"
  - "#42850"
  - "#42947"
  - "#42958"
  - "#43009"
  - "#43027"
  - "#43987"
  - "#44184"
  - "#44711"
  - "#44845"
  - "#44869"
  - "#45230"
  - "#45513"
  - "#46517"
  - "#46582"
  - "#46616"
  - "#46632"
  - "#47281"
  - "#47314"
  - "#47431"
  - "#47450"
  - "#47483"
  - "#47885"
  - "#48206"
  - "#48252"
  - "#48343"
  - "#48787"
  - "#49076"
  - "#49442"
  - "#49527"
  - "#49590"
  - "#49824"
  - "#49896"
  - "#50196"
  - "#50609"
  - "#50726"
  - "#51060"
  - "#51507"
  - "#51551"
  - "#52069"
  - "#52221"
  - "#52258"
  - "#52591"
  - "#55217"
  - "#55678"
  - "#59105"
  - "#59328"
  - "#59345"
  - "#60366"
  - "#61288"
  - "#63425"
  - "#65210"
  - "#65360"
  - "#67135"
  - "#68794"
  - "#68999"
  - "#69151"
  - "#70972"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #61288 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1860 on 2026-04-29."
---

# Gitcrawl Cluster 1860

Generated from local gitcrawl run cluster 1860 for `openclaw/openclaw`.

Display title:

> [Bug]: Token Usage Not Captured for Bailian API (Streaming Mode)

Cluster shape from gitcrawl:

- total members: 64
- issues: 64
- pull requests: 0
- open candidates in local store: 5
- representative: #61288, currently closed in local store
- latest member update: 2026-04-28T19:37:22.115024827Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39620 [Bug]: Token usage shows as 'unknown' in 2026.3.7 (regression from 3.2)
- #39809 Token usage not updating when using DeepSeek provider
- #40479 [Bug]:  session_status shows Context: 0/1.0m (0%) in container environment
- #40809 [Bug]: token statistics of current session is n/a
- #41905 Streaming usage not captured for Bailian/OpenAI-compatible providers — token counter stuck at 0
- #41963 openai-completions providers: allow supportsUsageInStreaming override
- #42850 [Bug] Token usage 统计在 2026.3.8 版本中始终返回 0
- #42947 contextTokens shows 0% even when session has substantial content
- #42958 [Bug] Dashscope API usage not being recorded
- #43027 Context tokens counter shows 0 after model switch
- #43987 Token usage display: session_status shows 0/200k despite active conversation
- #44184 [Bug] Context usage always shows 0% in status - 2026.3.11
- #44711 阿里云 DashScope API 无法正确显示 token 使用量
- #44869 [Bug]: Control UI shows error triangle with no input box when switching to main session
- #45230 Control UI: Context warning blocks screen on refresh with incorrect values
- #45513 [Bug]: Control UI - Chat input hidden behind warning overlay when context exceeds limit; token count mismatch in sessions view
- #46517 Control UI: Context display shows misleading '378k/128k' vs actual 58k/128k (46%)
- #46582 [Bug]:  banner uses cumulative Tokens in instead of Context"
- #46616 [Bug]: bailian provider token usage not recorded (usage field mapping mismatch)
- #46632 Chat UI shows incorrect token count (647.6k vs actual 173k)
- #47281 [Bug]: Web UI incorrectly displays cumulative token count as context usage (shows 857k/128k when actual is 75k/128k)
- #47314 Token usage not captured for Alibaba Bailian (GLM-5) streaming API
- #47431 Control UI Context Display Bug (Misleading Usage)
- #47450 Bug: vLLM usage 解析问题 - 本地模型返回 0 tokens
- #47483 Slack 会话的 context 统计显示为 0
- #47885 [Bug]: Control UI token display shows incorrect values - shows cumulative tokens instead of current context
- #48206 [Bug]: Status shows Context: 0/200k but session file has ~97k tokens
- #48252 [Bug]: Control UI shows 100% context when actual is ~56%
- #48343 [Bug]: Usage stats shows abnormal inputTokens (44M)
- #48787 [Bug]: Token统计显示混乱 - 历史累积值与当前Context使用量混淆
- #49076 [Bug]: Control UI "100% context used" warning can be incorrect / stale and does not match actual session context
- #49442 [Bug]: Dashboard Token 统计不准
- #49527 [Bug]: 系统没有统计tokens，升级到v2026.3.8及之后的版本以后，使用情况里tokens都是0
- #49590 [Bug]: 系统始终统计不到tokens
- #49824 Bug: webchat status bar shows incorrect remaining tokens and context percentage
- #49896 Control UI Context Usage 显示错误 - 显示 98% 实际 11%
- #50196 [Bug]: Control UI shows incorrect context usage (510.4k/128k) that disappears after page refresh
- #50609 [Bug] Session token usage shows unknown (?%) - regression in 2026.3.13
- #50726 [Bug]:  Context监控显示永远0% - contextTokens被写死为200000
- #51060 Control UI shows incorrect context percentage (always 100% after compaction)
- #51507 [Bug]: [WebChat/Control-UI] Context calculation is inaccurate - shows 100% before actual limit reached, while TUI works correctly
- #51551 Bug: Context Window shows unknown/0 despite extensive conversation
- #52069 [Bug] Token usage 显示为 0，dashscope-coding-plan API 返回的字段名不匹配
- #52221 [Bug] Context monitor shows 0% forever - contextTokens hardcoded, not dynamic
- #52258 Feature Request: Support token usage tracking for Bailian Coding Plan
- #52591 Control UI shows incorrect context usage percentage (87%) in Chat tab
- #55217 Web UI context percentage shows 0% or >100% when using LCM
- #59105 Token count not displayed in TUI status bar for openai-completions API providers
- #59328 [Bug] openai-completions streaming: Context always shows 0 — missing stream_options include_usage
- #59345 Control UI: subagent context badge can show historical total tokens as current context usage
- #60366 /status may keep showing the previous model's context window after switching models
- #61288 [Bug]: Token Usage Not Captured for Bailian API (Streaming Mode)
- #65210 [Bug]: Control UI token usage shows N/A, usage page missing token counts, and auto-compression fails after 2026.4.9
- #65360 [Bug]: Control UI and session_status display incorrect context window for claude-sonnet-4-6
- #67135 [Bug]: Webchat context meter shows false overflow after /new and fresh sessions start with excessive prompt weight
- #68794 Control UI: context token counter inflates to >4× window (claude-cli) — cacheRead summed as fresh input
- #68999 session_status 显示的 Context 百分比始终为 0%，无法正确统计当前会话的上下文使用量
- #69151 [Bug] session_status tool reports 0% context — contextTokens not passed to buildStatusText()
- #70972 Status bar ctx% shows 0% when context is mostly cached

Open candidates:

- #41645 [Feature]: [Feature Request] 按用户维度统计 Token 使用量
- #43009 TUI displays Context Tokens as ?/200k instead of actual value
- #44845 [Bug]: Token usage shows 0/200k for Volcengine coding plan
- #55678 [Feature]: UI 用量显示为 0，实际在消耗 token
- #63425 modelByChannel override does not update session's persisted contextTokens — /status shows stale value
