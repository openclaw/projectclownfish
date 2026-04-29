---
repo: openclaw/openclaw
cluster_id: gitcrawl-7342-dedupe-only-20260429-remote
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
  - "#50131"
candidates:
  - "#55517"
cluster_refs:
  - "#39920"
  - "#41757"
  - "#45059"
  - "#47573"
  - "#47683"
  - "#47938"
  - "#48919"
  - "#49496"
  - "#50131"
  - "#50173"
  - "#50328"
  - "#52633"
  - "#53764"
  - "#55455"
  - "#55517"
  - "#56432"
  - "#56853"
  - "#57320"
  - "#58427"
  - "#58628"
  - "#59047"
  - "#59571"
  - "#59661"
  - "#61790"
  - "#65159"
  - "#68606"
  - "#68616"
  - "#70754"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #50131 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 7342 on 2026-04-29."
---

# Gitcrawl Cluster 7342

Generated from local gitcrawl run cluster 7342 for `openclaw/openclaw`.

Display title:

> [Bug]: Plugin tools loaded in chat/agent execution do not inherit gateway subagent runtime/scope, causing delegated plugin tools like lcm_expand_query to fail

Cluster shape from gitcrawl:

- total members: 28
- issues: 28
- pull requests: 0
- open candidates in local store: 1
- representative: #50131, currently closed in local store
- latest member update: 2026-04-28T15:57:31.17471424Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39920 [Bug]: Feishu plugin tools are registered but not exposed to embedded agent tool calls in chat sessions
- #41757 [Bug]: Custom plugin tool is not surfaced to sandboxed agent sessions, but appears immediately when sandbox is removed
- #45059 ContextEngine plugin runtime.subagent access intermittently unavailable during gateway requests in 2026.3.12
- #47573 [Bug]: Plugin-registered tool results silently dropped by session layer (memory_forget, memory_store_batch)
- #47683 Plugin-registered tools via registerTool not surfaced to agent runtime
- #47938 Built-in tools (gateway, cron) not showing in agent tool list despite being enabled
- #48919 [Bug]: Slot plugin tools not exposed to Agent due to Rollup code-splitting state isolation
- #49496 [Bug]: Feishu plugin tools are registered and agent tools profile is full, but plugin tools are not exposed to the model/tool list in Feishu group sessions
- #50131 [Bug]: Plugin tools loaded in chat/agent execution do not inherit gateway subagent runtime/scope, causing delegated plugin tools like lcm_expand_query to fail
- #50173 [Bug]: memory_search tool not injected in new sessions despite plugin loaded
- #50328 Bug: Plugin tools registered via api.registerTool() not available in agent runtime
- #52633 [Bug]: openclaw-mem0 插件加载正常，但 agent 不调用 memory_store 工具，autoCapture 也未触发
- #53764 Tavily plugin tools (tavily_search, tavily_extract) not accessible in agent runtime
- #55455 [Bug]: Non-compliant
- #56432 Plugin tool execute() receives no pluginConfig — inconsistent with hooks
- #56853 Bug: tools.alsoAllow not injected in Feishu channel sessions (gateway tool unavailable)
- #57320 Plugin tools registered via api.registerTool() not available in channel sessions (Telegram)
- #58427 [Bug]: Plugin subagent calls intermittently fail with "Plugin runtime subagent methods are only available during a gateway request."
- #58628 [Bug]: Browser enabled and running, but browser tool is missing from agent tool list
- #59047 [Bug]: External plugin tools register in metadata but are not surfaced to agent sessions [in TUI]
- #59571 [Bug]: feishu_doc 插件加载正常，但工具未暴露给 agent 调用
- #59661 [Bug]: tool not registered
- #61790 Plugin tools registered via api.registerTool() are not visible to agents
- #65159 [Bug]: Active Memory plugin configured and loaded but not triggering/injecting memory on conversational sessions
- #68606 [Bug]: Plugin tool is exposed in TUI/webchat, but runtime invocation bypasses or corrupts installed plugin executor arguments
- #68616 [Bug]:
- #70754 [Bug]: sandboxed embedded session shows browser in /tools, but browser is missing from injected tool schemas

Open candidates:

- #55517 [Bug]: plugin runtime subagent.run from before_dispatch does not trigger subagent_delivery_target or final external delivery
