---
repo: openclaw/openclaw
cluster_id: gitcrawl-13538-dedupe-only-20260429-remote
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
  - "#57999"
candidates:
  - "#32296"
  - "#47975"
  - "#51767"
  - "#54797"
  - "#55807"
  - "#56516"
  - "#58411"
  - "#60780"
  - "#61885"
  - "#64199"
  - "#68162"
  - "#69443"
cluster_refs:
  - "#32296"
  - "#37238"
  - "#38141"
  - "#39662"
  - "#40077"
  - "#41116"
  - "#42725"
  - "#42789"
  - "#43037"
  - "#43706"
  - "#44153"
  - "#46645"
  - "#47457"
  - "#47975"
  - "#48250"
  - "#49373"
  - "#50487"
  - "#50747"
  - "#51724"
  - "#51767"
  - "#51780"
  - "#52248"
  - "#52327"
  - "#53375"
  - "#53674"
  - "#54797"
  - "#54936"
  - "#55568"
  - "#55807"
  - "#55931"
  - "#56143"
  - "#56299"
  - "#56516"
  - "#57333"
  - "#57742"
  - "#57774"
  - "#57920"
  - "#57999"
  - "#58411"
  - "#58429"
  - "#58520"
  - "#58649"
  - "#58892"
  - "#59025"
  - "#59026"
  - "#60211"
  - "#60389"
  - "#60549"
  - "#60780"
  - "#61165"
  - "#61324"
  - "#61885"
  - "#63342"
  - "#63927"
  - "#64199"
  - "#65396"
  - "#65568"
  - "#65801"
  - "#66004"
  - "#66298"
  - "#66800"
  - "#67400"
  - "#67902"
  - "#68018"
  - "#68162"
  - "#69131"
  - "#69443"
  - "#71054"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57999 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13538 on 2026-04-29."
---

# Gitcrawl Cluster 13538

Generated from local gitcrawl run cluster 13538 for `openclaw/openclaw`.

Display title:

> Subagent deliveryContext loses to/threadId/accountId when spawned from group topics

Cluster shape from gitcrawl:

- total members: 68
- issues: 68
- pull requests: 0
- open candidates in local store: 12
- representative: #57999, currently closed in local store
- latest member update: 2026-04-28T22:51:07.337459461Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #37238 Dashboard dropdown shows all historical subagent sessions (completed/killed) with no cleanup option
- #38141 Discord thread-bound subagent session binding fails (session mode unavailable)
- #39662 Discord subagent messaging intermittent: announce timeouts + no-reply bursts (sessions_send still delivers)
- #40077 [Bug]: sessions_spawn thread=true fails on Discord guild channels — "Unable to create or bind a Discord thread"
- #41116 Discord DM thread-bound ACP spawn fails with 'Session binding adapter failed to bind target conversation'
- #42725 [Bug]: Discord subagent session inherits incomplete deliveryContext, announce ends in silent ANNOUNCE_SKIP
- #42789 Discord thread-bound ACP child replies appear to be mirrored into the main Discord route transcript instead of the child session transcript
- #43037 Control UI loses gateway token when switching between agent sessions
- #43706 [Bug/UX] Control UI loses gateway token after container rebuild
- #44153 sessions_send from sub-agent flips parent session deliveryContext from Telegram to webchat
- #46645 [Bug]: ACP sessions_send replies are not mirrored into the target worker’s bound Discord thread
- #47457 Feature request: mode="session" without thread binding for headless sub-agent orchestration
- #48250 [Bug]: WebChat UI WebSocket Stalls on Subagent Yield
- #49373 Discord thread-bound subagent sessions do not exclusively own the thread across multiple bots
- #50487 Agent-to-agent announce step does not fire for sessions_send to ACP-bound sessions
- #50747 [Bug]: [Bug] Subagent completion signal not received by parent session, message queue stuck    子Agent完成后主会话收不到完成信号，消息队列卡住
- #51724 sessions_send 触发的子智能体任务完成后 auto-announce 未正常触发
- #51780 [Bug]: UI Running Indicator Stuck After Subagent Completion on Remote Server OpenClaw Gateway • Subagent Sessions • WebSocket Lifecycle Events Product
- #52248 sessions_yield leaves control-ui frozen: WebSocket RPC response routes to wrong connection
- #52327 Feature: Persistent session retention for subagent/ACP sessions (analogous to cron.sessionRetention)
- #53375 WebChat/TUI should resume prior session after reconnect instead of silently starting a new one
- #53674 [Bug]: Subagent deliveryContext inheritance broken - responses never reach parent session
- #54936 BUG: Subagent runTimeoutSeconds default fallback resolves to infinite timeout instead of configured default
- #55568 [Bug]: ACP thread-bound sessions deliver duplicate messages to Discord thread
- #55931 [Bug]: sessions_spawn creates subagent with sourceChannel = "webchat" instead of original message channel
- #56143 [Bug]: ACP thread-bound Discord sessions can lose deliveryContext.threadId, causing completion to route to wrong surface
- #56299 [Feature]: Control UI should auto-reconnect after gateway restart
- #57333 [Bug] Webchat messages routed to subagent session instead of main session
- #57742 [Bug]: ACP Codex replies are routed to main session, while thread binding is unavailable in current TUI session
- #57774 [Bug]: 子agent的session没有正确退出，导致死循环
- #57920 Stale ended subagent runs persist in childSessions, ghost agents on Floor
- #57999 Subagent deliveryContext loses to/threadId/accountId when spawned from group topics
- #58429 Feature request: auto-cleanup completed subagent sessions (like cron.sessionRetention)
- #58520 [Bug]: TUI never registers with gateway — sessions.resolve fails, causing input echo lag and web UI sync issues
- #58649 Subagent Session Timeout and Unresponsiveness in Production Use
- #58892 ACP block replies not marked as visible text on Discord, causing full message duplication
- #59025 [Bug]: Task flow completion leaks internal routing metadata into Discord channel
- #59026 [Bug]: Discord thread binding not released after ACP task completion — channel messages misrouted to thread
- #60211 [Bug]: subagent runTimeoutSeconds triggers unexpected model fallback retry instead of hard termination
- #60389 Persistent thread-bound ACP sessions retain delivery context after end, hijacking unrelated agent chats
- #60549 TUI sessions lost on reconnect — gateway returns 'No session found' for existing session
- #61165 [Bug]: ACP dead session repair: unrecoverable retry loop + duplicate Discord thread messages
- #61324 ACP thread-bound sessions deliver duplicate text on Discord (block reply not treated as visible)
- #63342 [Bug]: [TUI] WebSocket session not cleaned up on /agent switch causes seq gap and missing responses
- #63927 ACP sessions_spawn thread binding fails on Discord: 'Session binding adapter failed to bind target conversation'
- #65396 [Feature]:mode=session + thread decoupling issue: local subagent persistent sessions unavailable
- #65568 [Bug]: Discord-bound persistent Codex ACP session created with /acp spawn codex --bind here cannot be resumed; /acp status remains healthy but next turn fails with Resource not found
- #65801 [Bug]: Messages are not passed to ACP
- #66004 [Bug]: subagent with timeoutSeconds>0 returns ok but frozenResultText null, causes Cannot read properties of undefined
- #66298 [Bug]: /acp text commands inside a bound Discord thread get swallowed by the ACP LLM session instead of reaching handleAcpCommand
- #66800 Dashboard WebSocket disconnects with token_mismatch after gateway restart
- #67400 [Bug]: The agent is unable to create persistent sub-agent sessions.
- #67902 subagent sessions left as "running" in sessions.json after crash — no cleanup mechanism
- #68018 Bug: Subagent deliveryContext does not inherit parent group session — falls back to DM
- #69131 Discord ACP execution fails on clean latest baseline: thread binding invalid, ACP_TURN_FAILED, and codex-acp prompt/session divergence
- #71054 [Bug]: Discord thread-bound native subagent sessions fail before binding without runtime config

Open candidates:

- #32296 [Bug]: Agent replies to previous message instead of current message (session context confusion)
- #47975 Subagent sessions persist after completion, main session becomes unresponsive
- #51767 sessionRetention does not apply to subagent sessions — only cron-run sessions are swept
- #54797 Control UI: Add 'clear completed' for subagent sessions in session dropdown
- #55807 [Bug]: Discord visible ACP threads render parent relay progress/stall/resumed as chat messages
- #56516 Subagent sessions persist in web UI after completion
- #58411 sessions_spawn lacks --bind here equivalent — agent cannot bind ACP session to existing Discord thread
- #60780 Discord thread-bound ACP sessions (mode=session) deliver each response twice
- #61885 Control UI: Gateway token not persisted — disappears after closing browser
- #64199 [Bug]: ACP configured binding uses parent channel ID for session key — all threads under same channel share one persistent Claude Code process
- #68162 [Bug] Control UI (webchat) creates new session on WebSocket reconnection instead of resuming
- #69443 [Bug] Subagent RPC callback to WeChat session key routed to main session instead
