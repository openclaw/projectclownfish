---
repo: openclaw/openclaw
cluster_id: gitcrawl-13577-dedupe-only-20260429-remote
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
  - "#40619"
candidates:
  - "#45049"
  - "#46810"
  - "#51628"
  - "#53250"
  - "#55743"
  - "#58687"
  - "#63956"
  - "#66953"
cluster_refs:
  - "#38961"
  - "#39289"
  - "#39466"
  - "#39469"
  - "#39686"
  - "#39971"
  - "#40493"
  - "#40619"
  - "#41257"
  - "#41321"
  - "#41839"
  - "#43153"
  - "#43284"
  - "#44467"
  - "#45040"
  - "#45046"
  - "#45049"
  - "#45642"
  - "#46005"
  - "#46708"
  - "#46810"
  - "#47188"
  - "#47211"
  - "#47418"
  - "#49282"
  - "#49328"
  - "#51522"
  - "#51628"
  - "#52257"
  - "#53250"
  - "#55089"
  - "#55234"
  - "#55743"
  - "#56914"
  - "#57145"
  - "#58687"
  - "#59195"
  - "#59377"
  - "#59827"
  - "#59984"
  - "#59987"
  - "#60125"
  - "#60293"
  - "#60496"
  - "#61135"
  - "#62089"
  - "#63631"
  - "#63956"
  - "#64523"
  - "#65493"
  - "#65723"
  - "#65794"
  - "#66403"
  - "#66906"
  - "#66953"
  - "#67106"
  - "#67250"
  - "#67323"
  - "#68239"
  - "#69576"
  - "#69713"
  - "#70178"
  - "#70558"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #40619 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13577 on 2026-04-29."
---

# Gitcrawl Cluster 13577

Generated from local gitcrawl run cluster 13577 for `openclaw/openclaw`.

Display title:

> Control UI: exec approval modal should be scrollable; Approve/Deny buttons can be pushed off-screen by long commands

Cluster shape from gitcrawl:

- total members: 63
- issues: 63
- pull requests: 0
- open candidates in local store: 8
- representative: #40619, currently closed in local store
- latest member update: 2026-04-28T22:51:07.445334467Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38961 [Bug]: [WebChat] 回复重复发送两次 (delivery-mirror + original)
- #39289 [Bug]: Duplicate messages in Webchat
- #39466 [Bug] Webchat: Assistant text vanishes when tool calls follow text output in same response
- #39469 BUG: Control UI (webchat) double-records assistant messages in session JSONL
- #39686 WebUI: duplicate messages after WebSocket reconnect (v2026.3.7)
- #39971 main agent outputs tool call text instead of executing tools
- #40493 Bug: UI 重复显示 AI 回复
- #40619 Control UI: exec approval modal should be scrollable; Approve/Deny buttons can be pushed off-screen by long commands
- #41257 [Bug]: MiniMax models' tool calls are stripped instead of executed
- #41321 [Bug]: Gateway Dashboard UI duplicates messages and causes API rate limiting
- #41839 [Bug]: MiniMax M2.5 tool calls have no effect — XML tool invocations are stripped instead of executed
- #43153 [Bug]: Chat tool card sidebar does not show full command for long exec commands
- #43284 [Bug]: Chat tool card sidebar does not show full command for long exec commands
- #44467 message.send triggers duplicate delivery-mirror replies
- #45040 [Bug]: Web UI popup window appears when tool output is too long
- #45046 Agents simulate tool usage instead of invoking tools
- #45642 [Bug]: Tool output gets mangled in the v2 UI
- #46005 webchat: single chat.send creates 3-4 duplicate user messages in session JSONL
- #46708 Exec approval UX can fail across Web UI / TUI, and Discord has no usable approval path
- #47188 [Bug]:  Webchat streaming renders duplicate bubbles instead of updating in-place
- #47211 [Bug] Assistant 消息出现临时重复现象
- #47418 [Bug]: macOS app exec approval popup truncates/hides command and provides no details/expand view
- #49282 Discord exec approval buttons silently fail after 2-minute timeout (no user feedback)
- #49328 [Bug]: [Control UI] Duplicate messages appear in chat when AI replies complete (intermittent)
- #51522 Exec approval dialog: no scroll + buttons unreachable when command is too long
- #52257 Bug: Control UI 授权弹窗超出浏览器界面，无法点击确认
- #55089 Telegram forum topic: message lands in wrong topic after SIGTERM delivery-recovery
- #55234 Forum group messages silently lost after crash-restart (sendMessage ok but invisible)
- #56914 bug: session.message events from sessions.send not rendered in webchat UI or TUI
- #57145 [Bug] Duplicate messages sent via delivery-mirror on QQBot channel
- #59195 [Bug]: Long Pop-up Windows Blocking UI
- #59377 [Bug] 审批弹窗内容过长时超出视口，无法点击批准按钮
- #59827 [Bug]: Tool calls not executing after upgrade to 2026.4.1 - displayed as plain text instead
- #59984 UI Bug: exec approval popup should be scrollable when content is long
- #59987 If the command in the authorization window is too long and cannot be scrolled, it may lead to the inability to operate and determine whether to authorize.[Bug]:
- #60125 Control UI: long exec approval cards can be slow/unscrollable, hiding allow buttons
- #60293 [Bug]: Command too long to allow
- #60496 Control UI: Long command outputs push approval buttons off screen
- #61135 Agent often said tool but not use tool
- #62089 [Bug]: Tool calls rendered as raw text in all UIs (control-ui, telegram, tui)
- #63631 [Bug]: too much information pop out, I can't approve it without button to press
- #64523 [Bug]: Control UI webchat re-injects assistant responses as new user input (hybrid mirror routing bug)
- #65493 Bug: delivery-mirror duplicates messages sent via message(action=send) tool
- #65723 Discord exec approvals should poll DM for responses instead of timing out
- #65794 [Bug]: Web Chat tool-call blocks truncate tool arguments / parameters
- #66403 [Bug]: Control UI: exec approval popup can push action buttons below viewport on long commands
- #66906 Discord exec approval buttons spam 'Failed to submit' errors when elevated mode auto-resolves
- #67106 Control UI: Pre-tool-call text disappears in Safari when tool results arrive
- #67250 [Bug]: Control UI: streaming text disappears when tool calls display is hidden (4.14 regression)
- #67323 [Bug]: MSTeams DM inbound messages appear duplicated in agent session context
- #68239 Duplicate message accumulation in webchat session (MiniMax-M2.7)
- #69576 [Bug]: Delivery-mirror leaks messages across agents when multiple Telegram accounts bind to same peer
- #69713 [Bug]: Double bubble / streaming artifact visible in Teams DM during bot response
- #70178 [Bug]: [Teams] Duplicate message rendering — same response appears twice in chat
- #70558 [Bug]: Bug: User message appears twice in webchat (session JSONL correct, UI renders duplicate)

Open candidates:

- #45049 Agent loop allows simulated tool calls instead of enforcing real tool invocation
- #46810 Control UI: Exec approval modal with command highlighting
- #51628 Bug: Telegram delivery queue recovery can replay old sendMessage replies and duplicate delivery-mirror transcript entries
- #53250 [UX] Exec approval timeout message should include Control UI link and setup hints
- #55743 Add an "Approve and Run" action for assistant-suggested terminal commands in the Control UI
- #58687 [Bug]: Security prompt is too long to approve, and clicking "Allow All" on the security prompt is ineffective
- #63956 [Bug]: Streaming response creates multiple chat bubbles before collapsing into one
- #66953 [Bug]: delivery-mirror transcript written to wrong agent session in multi-account multi-agent config
