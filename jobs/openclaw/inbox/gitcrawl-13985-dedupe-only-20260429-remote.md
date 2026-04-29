---
repo: openclaw/openclaw
cluster_id: gitcrawl-13985-dedupe-only-20260429-remote
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
  - "#57428"
candidates:
  - "#38836"
  - "#44925"
  - "#50165"
  - "#53684"
  - "#55790"
  - "#63279"
  - "#64585"
  - "#67777"
  - "#69767"
  - "#69778"
cluster_refs:
  - "#38836"
  - "#39922"
  - "#43680"
  - "#43755"
  - "#43768"
  - "#44925"
  - "#45075"
  - "#45413"
  - "#46081"
  - "#46225"
  - "#46379"
  - "#46540"
  - "#46595"
  - "#46860"
  - "#47358"
  - "#48255"
  - "#48271"
  - "#50095"
  - "#50165"
  - "#50263"
  - "#50791"
  - "#50888"
  - "#51130"
  - "#51545"
  - "#51814"
  - "#51818"
  - "#51854"
  - "#51917"
  - "#53202"
  - "#53613"
  - "#53684"
  - "#54162"
  - "#54276"
  - "#55790"
  - "#57306"
  - "#57428"
  - "#57532"
  - "#57851"
  - "#57965"
  - "#58206"
  - "#58305"
  - "#58539"
  - "#58786"
  - "#60320"
  - "#61170"
  - "#61359"
  - "#61439"
  - "#62054"
  - "#62445"
  - "#62562"
  - "#62755"
  - "#63221"
  - "#63279"
  - "#63388"
  - "#63400"
  - "#64585"
  - "#65000"
  - "#65086"
  - "#65519"
  - "#66683"
  - "#67777"
  - "#69767"
  - "#69778"
  - "#70555"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57428 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13985 on 2026-04-29."
---

# Gitcrawl Cluster 13985

Generated from local gitcrawl run cluster 13985 for `openclaw/openclaw`.

Display title:

> [Bug]: sessions_spawn with runtime="subagent" does not respect agent's model.primary config

Cluster shape from gitcrawl:

- total members: 64
- issues: 64
- pull requests: 0
- open candidates in local store: 10
- representative: #57428, currently closed in local store
- latest member update: 2026-04-28T22:51:06.921453138Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39922 [Bug]: Agent does not resume in-progress tasks after restart without manual input (v2026.3.7)
- #43680 Agent model configuration ignored—defaults override explicit agent.list[*].model settings
- #43755 [Bug]: Subagent result not delivered to parent session (sessions_spawn with claude)
- #43768 [Bug]: sessions_spawn(runtime="subagent") does not honor agents.defaults.subagents.model or explicit model override
- #45075 [Bug] Subagent announce completion fails consistently on v2026.3.7+ — lane wait times up to 60min
- #45413 [Bug]: sessions_spawn subagent can inherit caller workspace instead of target agent workspace
- #46081 Subagent announce retry too short — fails silently on transient WhatsApp disconnects
- #46225 [Bug]: OpenClaw 子 Agent Workspace 隔离问题报告
- #46379 Sub-agent and cron agentTurn model parameter is silently ignored
- #46540 sessions_spawn model override silently ignored for Ollama provider
- #46595 sessions_spawn with agentId does not use target agent's workspace
- #46860 Agents do not proactively resume or notify after gateway restart
- #47358 [Bug]: Subagents ignore configured model routing and fall back to primary/default model
- #48255 [Bug]: Per-agent model override not inherited by embedded/subagent runs
- #48271 Subagent model parameter not honored - spawns use main model despite modelApplied: true
- #50095 Feature: Auto-notify user when gateway restarts
- #50263 Feature: Inject target agent's persona files (SOUL.md, IDENTITY.md, USER.md) when sessions_spawn uses agentId
- #50791 [Bug]: Auto-resume pending sessions after Gateway restart
- #50888 [Bug]: CLI-backend sub-agent announce delivers empty payload despite non-empty child output
- #51130 Feature Request: Gateway restart notification to user
- #51545 Bug: Sub-agent model override not working in 2026.3.13
- #51814 Feature Request: Native Agent Wake-Up After Gateway Restart
- #51818 Sub-agent completion results silently lost when parent session expires — channel-direct fallback proposal
- #51854 agents.defaults.subagents.model config not applied to spawned sub-agents
- #51917 Feature: Auto-resume unanswered sessions after gateway restart
- #53202 [Bug]: Subagent announce hits repeated gateway timeouts (90s) in cron isolated sessions
- #53613 Fix: spawned subagent sessions inherit parent agentId instead of spawned agentId
- #54162 Sub-agent announce timeout — investigation report (2026-03-25)
- #54276 Subagent announce gives up when requester session is busy (direct call timeout → should queue)
- #57306 sessions_spawn model parameter triggers LiveSessionModelSwitchError instead of setting initial model
- #57428 [Bug]: sessions_spawn with runtime="subagent" does not respect agent's model.primary config
- #57532 sessions_spawn model param does not resolve aliases
- #57851 Gateway does not resume orphaned sessions after crash/restart
- #57965 Sub-agent exec output not returned to parent session
- #58206 Subagents don't load target agent's workspace context
- #58305 Regression v2026.3.28: LiveSessionModelSwitchError when spawning subagent with different model than parent
- #58539 [Bug]: Spawned subagent with explicit model can fail before first attempt with LiveSessionModelSwitchError
- #58786 Subagent announce timeout can destabilize gateway
- #60320 Restart command loses agent coherence — session state not preserved across restart
- #61170 [Bug] Subagent completion announcement permanently lost when channel is temporarily unreachable (QQ + upgrade scenario)
- #61359 [Bug]: Sub-agent model override not working - always falls back to MiniMax-M2.7
- #61439 bug(subagents): completion can be lost even when child run succeeded
- #62054 Subagent announce silently drops results after retry exhaustion
- #62445 Gateway restart causes session state loss, requiring manual intervention to resume autonomous tasks
- #62562 sessions_spawn returns modelApplied:true while running stale resumed model
- #62755 sessions_spawn returns modelApplied:true while running stale resumed model
- #63221 sessions_spawn returns modelApplied:true while actually running a stale resumed model
- #63388 Sub-agent session resumes after gateway reload with 9-hour delay
- #63400 sessions_spawn model parameter ignored — sub-agents always inherit primary model
- #65000 [Bug]: Make subagent completion delivery durable across retry and reconnect gaps
- #65086 [Bug]: sessions_spawn model override accepted with modelApplied:true, but child subagent initialized on fallback model
- #65519 sessions_spawn model override silently ignored — sub-agents always use primary model
- #66683 Subagent completions can resolve before parent reply delivery succeeds
- #70555 [Bug]: Session stuck after gateway restart during tool-use loop — stale lock not recovered

Open candidates:

- #38836 Gateway restart silently drops in-flight Feishu sessions — no user notification
- #44925 [Bug]: Subagent completion silently lost — no retry, no notification, no auto-restart on timeout
- #50165 [Bug]: Subagents can appear completed before the underlying delegated work is actually finished
- #53684 Feature Request: Gateway failure recovery and notification mechanism
- #55790 sessions_spawn(runtime="subagent") ignores inherited/per-agent subagent thinking defaults and initializes children at low
- #63279 2026.4.8: Large-session overflow/compaction timeout can cascade into GatewayDrainingError + subagent announce loss; fallback chain stale until restart
- #64585 Auto-recover stuck gateway sessions after restart
- #67777 [Bug]: Subagent completion delivery can be lost on direct-announce timeout, drain, or orphan prune
- #69767 [Bug] Async/subagent completion can be announced before the result payload exists
- #69778 [Bug]: Gateway restart resurrects ancient interrupted CLI subagent tasks regardless of age — old prompts auto-execute
