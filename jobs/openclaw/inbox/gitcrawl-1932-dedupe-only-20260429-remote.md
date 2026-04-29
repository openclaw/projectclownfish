---
repo: openclaw/openclaw
cluster_id: gitcrawl-1932-dedupe-only-20260429-remote
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
  - "#45846"
candidates:
  - "#44107"
  - "#45698"
  - "#45846"
  - "#47979"
  - "#49776"
  - "#54874"
  - "#58702"
  - "#63432"
  - "#64004"
  - "#64220"
  - "#66409"
  - "#67035"
  - "#67709"
  - "#68264"
cluster_refs:
  - "#39908"
  - "#41014"
  - "#42514"
  - "#43649"
  - "#43857"
  - "#44107"
  - "#44147"
  - "#44491"
  - "#44717"
  - "#44895"
  - "#44906"
  - "#44985"
  - "#45035"
  - "#45089"
  - "#45135"
  - "#45148"
  - "#45187"
  - "#45192"
  - "#45201"
  - "#45260"
  - "#45283"
  - "#45340"
  - "#45471"
  - "#45617"
  - "#45651"
  - "#45687"
  - "#45690"
  - "#45694"
  - "#45698"
  - "#45707"
  - "#45731"
  - "#45794"
  - "#45846"
  - "#45850"
  - "#46123"
  - "#46158"
  - "#46164"
  - "#46207"
  - "#47144"
  - "#47979"
  - "#49482"
  - "#49776"
  - "#50329"
  - "#51685"
  - "#52039"
  - "#52361"
  - "#54378"
  - "#54874"
  - "#55003"
  - "#57079"
  - "#57431"
  - "#58353"
  - "#58702"
  - "#61025"
  - "#62486"
  - "#63432"
  - "#64004"
  - "#64220"
  - "#64706"
  - "#66409"
  - "#66564"
  - "#67035"
  - "#67709"
  - "#68264"
  - "#69550"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #45846 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1932 on 2026-04-29."
---

# Gitcrawl Cluster 1932

Generated from local gitcrawl run cluster 1932 for `openclaw/openclaw`.

Display title:

> [Bug]: Web UI chat images display too large

Cluster shape from gitcrawl:

- total members: 65
- issues: 65
- pull requests: 0
- open candidates in local store: 14
- representative: #45846, currently open in local store
- latest member update: 2026-04-28T21:55:43.714667123Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39908 [Bug]: In wechat page, always show compacting context....
- #41014 [Bug] 5-second fixed delay between pressing Enter and sending text to LLM (regression since v2026.2.26)
- #42514 [Bug]: AnyClaw dashboard loads on :19001 but disconnects from gateway (1006), forced ws://localhost:18789 after update
- #43649 [Web UI] 会话页面加载时卡死，Loading data 卡住
- #43857 [Bug]:Dashboard Chat page freezes browser — infinite "Loading chat…" on v2026.3.8 and v2026.3.11-beta.1
- #44147 [Bug]: # OpenClaw 网页端无法显示问题
- #44491 Bug: Control UI 聊天记录在 session 重启后丢失
- #44717 [Bug]: webchat display errors
- #44895 [Bug]: 聊天窗口出现图片覆盖
- #44906 [Bug]: UI Bug: Context limit warning icon scales abnormally and blocks chat view in v2026.3.12
- #44985 Bug: Web UI enters a broken state after session becomes context-full until /new or /reset
- #45035 [Bug]: If the dialogue context length exceeds the limit, the conversation window will display abnormally.
- #45089 [Bug]: chat box GUI some view problem
- #45135 Control UI main session crashes into Error Boundary when rendering oversized historical main session on 2026.3.12
- #45148 [Bug]: Oversized SVG placeholder in empty sessions (e.g., heartbeat) on Web UI
- #45187 [Bug]: Chat panel can be covered by oversized empty-state SVG during render/send, and may sometimes stay stuck queued until full page reload
- #45192 [Bug] Control UI chat page shows abnormal notification blocking input after refresh
- #45201 [Bug] Web UI: Gigantic background logo taking over the chat screen after upgrading to 2026.3.12
- #45260 会话页面被图标全盖住了[Bug]:
- #45283 [Bug]: Control UI freezes when auto-opening /chat?session=main (session-specific crash); other sessions work
- #45340 [Bug]: Bug: Chat UI gets covered by repeated SVG warning icon (context-notice__icon) after agent response
- #45471 [Bug]: UI chat not opening
- #45617 [Bug]: 巨大的感叹号遮挡整个聊天框
- #45651 [UI] context-notice icon 挡住对话页面
- #45687 [Bug]: Control UI Crashes When Session Conversation History Is Too Large
- #45690 [Bug]: Control UI chat area renders blank with black triangle artifact
- #45694 [Bug] Chat UI: oversized warning icon hides message input (desktop layout)
- #45707 [Bug]: WebChat empty state placeholder covers input box, making session unusable
- #45731 [Bug]: Web UI extremely slow or unresponsive after upgrading to v2026.3.12
- #45794 [Bug]: Control UI chat pane can break at 100% context used even when context-notice CSS is already fixed
- #45850 [Bug]: 发送消息有时会弹出空白窗口
- #46123 [Bug] chat.send with attachments causes RangeError: Maximum call stack size exceeded
- #46158 [Bug] WebChat UI: Chat area blacks out during AI response, click to recover
- #46164 [Bug]: Webchat bug: Black triangle overlay covers chat area, requires manual click to dismiss (Edge 145.0.3800.97, 8 occurrences today)
- #46207 [Bug]: [UI Bug] 聊天框出现无法消除的警示图标，只能通过删除 DOM 元素消除
- #47144 [bug]：WWeb UI Conversation Display Error
- #49482 [Bug]: Control UI freezes frequently, requires deleting sessions folder to recover
- #50329 [Bug]: WebChat "New messages" scroll pill intermittently renders as a large black triangle
- #51685 [Bug]: Control UI freezes with high CPU when switching sessions via dropdown menu
- #52039 [Bug]: 对话框频繁出现大感叹号
- #52361 RangeError: Maximum call stack size exceeded in chat.send WebSocket handler
- #54378 Webchat: Maximum call stack size exceeded when adding photo/image attachment
- #55003 [Bug]: openclaw dashboard opens localhost URL even when the local gateway is unreachable
- #57079 macOS: mixed CLI/Gateway installs can break 'openclaw browser status' with misleading browser/plugin errors
- #57431 [Regression] Canvas/Node browser tools broken on macOS after v2026.3.24 → v2026.3.28
- #58353 [Bug]: Control UI /new or /reset can prepend stale system-summary text to the first message of a new session
- #61025 UI Bug: Assistant avatar rendered inline instead of as message bubble icon
- #62486 [Bug]: 2026.4.2 版本三个影响体验的问题
- #64706 [Bug]: RangeError when sending large images via WebChat
- #66564 [Bug]:Control UI feels significantly laggier in 2026.4.12 during normal chat use
- #69550 [Bug]:

Open candidates:

- #44107 [Bug]: Two Independent Control UI (`openclaw dashboard`) Blank/Freeze Issues
- #45698 Bug: Control UI becomes progressively stuck after being open for a while (2026.3.12)
- #45846 [Bug]: Web UI chat images display too large
- #47979 Control UI Dashboard v2 freezes on Chrome 146 (works fine in Firefox)
- #49776 [Bug]: WebUI Dashboard page freezes, unresponsive after static resources load
- #54874 [Bug] Slow typing in webchat input with keystroke delay
- #58702 [Bug] WebChat: Message text covered by action icons after upgrade to 2026.3.31
- #63432 [Bug]: Control UI on iPad/Tailscale fails on image send with `RangeError: Maximum call stack size exceeded`
- #64004 [Bug]: Control UI remains slow although `sessions.list` returns quickly
- #64220 [Bug]: Control UI can leave "Compacting context..." stuck even when no compaction is running
- #66409 [Bug]: 最近的版本网页端卡,频繁对话,还有{输出太多了}的提示....
- #67035 [Bug]: 2026.4.14 Windows chat UI regression: input text swallowed, streamed replies often invisible until refresh, typing indicator flashes then blanks
- #67709 [Bug]: WebChat Control UI extremely slow startup (chat.history 352s, models.list 352s)
- #68264 [Bug] Canvas/Browser UI Visualization Fails to Render in Chat Environment
