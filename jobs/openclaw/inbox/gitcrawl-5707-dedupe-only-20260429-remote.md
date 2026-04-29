---
repo: openclaw/openclaw
cluster_id: gitcrawl-5707-dedupe-only-20260429-remote
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
  - "#44348"
candidates:
  - "#18889"
  - "#40044"
  - "#44011"
  - "#44348"
  - "#47491"
  - "#54725"
  - "#55742"
  - "#56036"
  - "#56672"
  - "#59312"
  - "#66312"
cluster_refs:
  - "#18889"
  - "#29590"
  - "#33914"
  - "#40044"
  - "#44011"
  - "#44348"
  - "#47491"
  - "#54725"
  - "#55742"
  - "#55839"
  - "#56036"
  - "#56474"
  - "#56672"
  - "#59312"
  - "#62295"
  - "#65150"
  - "#65186"
  - "#66292"
  - "#66312"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #44348 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 5707 on 2026-04-29."
---

# Gitcrawl Cluster 5707

Generated from local gitcrawl run cluster 5707 for `openclaw/openclaw`.

Display title:

> fix(hooks): expose sessionKey and agentId in agent_end and before_agent_start events

Cluster shape from gitcrawl:

- total members: 19
- issues: 1
- pull requests: 18
- open candidates in local store: 11
- representative: #44348, currently open in local store
- latest member update: 2026-04-28T22:51:06.871174453Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #29590 feat(hooks): bridge after_tool_call to internal hook handlers
- #33914 feat(hooks): add sender identity and session context to plugin hook agent context [claude, human developer oversight]
- #55839 fix: inject context.agentId into tool-call dispatch for built-in tools
- #56474 fix: inject pluginConfig into plugin tool factory context
- #62295 feat(plugins): add sessionKey to PluginHookMessageContext
- #65150 feat: add tool:beforeExecute/afterExecute internal hooks
- #65186 feat: add <example> trigger mechanism for Skills
- #66292 [Feature]: inject sessionKey into system prompt Runtime line

Open candidates:

- #18889 feat(hooks): add agent and tool lifecycle boundaries
- #40044 feat: inject sessionId into runtime context
- #44011 fix(hooks): expose session context in typed message hooks
- #44348 fix(hooks): expose sessionKey and agentId in agent_end and before_agent_start events
- #47491 fix: preserve agent context in plugin hooks
- #54725 feat: thread sessionKey/sessionId into ProviderPrepareExtraParamsContext
- #55742 feat(plugins): inject execute context (agentId) into plugin tool calls
- #56036 fix: inject context.agentId into toToolDefinitions hook dispatch
- #56672 feat: fire session_end hook on subagent completion and cron session end
- #59312 feat(plugins): add executeTool(toolName, params) to OpenClawPluginApi
- #66312 feat(system-prompt): inject sessionKey into Runtime line
