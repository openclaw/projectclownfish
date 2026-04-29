---
repo: openclaw/openclaw
cluster_id: gitcrawl-13978-dedupe-only-20260429-remote
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
  - "#58485"
candidates:
  - "#37843"
  - "#42397"
  - "#42631"
  - "#45494"
  - "#51251"
  - "#57076"
cluster_refs:
  - "#37843"
  - "#40168"
  - "#42397"
  - "#42631"
  - "#43604"
  - "#45422"
  - "#45494"
  - "#46600"
  - "#47381"
  - "#47478"
  - "#47592"
  - "#49452"
  - "#51251"
  - "#51677"
  - "#55063"
  - "#56788"
  - "#57076"
  - "#57112"
  - "#57178"
  - "#57501"
  - "#57947"
  - "#57968"
  - "#57997"
  - "#58285"
  - "#58302"
  - "#58307"
  - "#58377"
  - "#58459"
  - "#58484"
  - "#58485"
  - "#58506"
  - "#58511"
  - "#58517"
  - "#58518"
  - "#58533"
  - "#58575"
  - "#58585"
  - "#58592"
  - "#58927"
  - "#59257"
  - "#59295"
  - "#59996"
  - "#60036"
  - "#61294"
  - "#61573"
  - "#61879"
  - "#62017"
  - "#62344"
  - "#62424"
  - "#62587"
  - "#62598"
  - "#63455"
  - "#64475"
  - "#64571"
  - "#64844"
  - "#65129"
  - "#65200"
  - "#65875"
  - "#66334"
  - "#67118"
  - "#67573"
  - "#67598"
  - "#68472"
  - "#69469"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #58485 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13978 on 2026-04-29."
---

# Gitcrawl Cluster 13978

Generated from local gitcrawl run cluster 13978 for `openclaw/openclaw`.

Display title:

> [Bug]: Isolated cron sessions ignore `payload.model` override — always use agent default model

Cluster shape from gitcrawl:

- total members: 64
- issues: 63
- pull requests: 1
- open candidates in local store: 6
- representative: #58485, currently closed in local store
- latest member update: 2026-04-28T22:51:07.474586616Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40168 Agent config model shows 'not found' on gateway restart but works via /model command
- #43604 [Bug]: Cron jobs report 'ok' status when agent model is unreachable — silent backup failures
- #45422 [Bug] heartbeat.model configuration not working in v2026.3.11
- #46600 [Bug]: Fallback model not applied to cron sessions
- #47381 Model override in cron agentTurn payload is ignored — falls back to default model
- #47478 [Bug]: isolated cron agentTurn jobs can ignore the target agent model and start on the global default model
- #47592 [Bug]: model override in cron job agentTurn payloads is not being honored
- #49452 [Feature Request] Support heartbeat.model configuration to use separate lightweight model for heartbeats
- #51677 sessions.json caches stale model after config change — session does not re-resolve on restart
- #55063 [Bug]: /new and /reset preserve session model override; reset banner default can differ from agents.defaults.model.primary
- #56788 [Bug] Heartbeat model override ignored in v2026.3.28 - falls back to main session model
- #57112 [Bug]: Cron payload model override ignored - LiveSessionModelSwitchError on 2026.3.28
- #57178 Heartbeat isolatedSession: model override ignored, force-switched to main session model
- #57501 isolated session 模型切换死循环
- #57947 [Bug]: Cron payload model override ignored — always resolves to agent default
- #57968 Cron payload.model override ignored — agent primary model wins via 'live session model switch'
- #57997 Cron jobs ignore payload.model and run on agent default model (Opus instead of GPT-5.4)
- #58285 Cron isolated jobs ignore payload.model override — always use agent primary model
- #58302 [Bug]: /reset and /new commands do not reset model to default
- #58307 Cron payload model field ignored — LiveSessionModelSwitchError overrides job-level model with agent default
- #58377 cron: LiveSessionModelSwitchError treated as transient failure — triggers retry loop and Sonnet budget leak
- #58459 [Bug]: LiveSessionModelSwitchError in cron jobs with payload.model override on 2026.3.28
- #58484 Heartbeat session gets permanently stuck on fallback model after single failure
- #58485 [Bug]: Isolated cron sessions ignore `payload.model` override — always use agent default model
- #58506 payload.model in cron agentTurn jobs is ignored at runtime — always falls back to agent default
- #58511 Cron sessions inherit persisted model override instead of honoring payload.model, causing thundering herd under overload
- #58517 Heartbeat model override ignored — always falls back to default model (LiveSessionModelSwitch)
- #58518 Bug: LiveSessionModelSwitchError triggers for isolated sessions on heartbeat/cron when defaults differ
- #58533 Cron sessions inherit persisted model override instead of honoring payload.model, causing thundering herd under overload
- #58575 [Bug]: --model flag on isolated cron jobs does not override session model
- #58585 LiveSessionModelSwitchError persists across isolated cron sessions
- #58592 Cron isolated sessions fail with LiveSessionModelSwitchError when agent primary model differs from payload.model
- #58927 [Bug]: Cron jobs ignore payload.model and agentId, always resolving to the default/main agent model
- #59257 [Bug]: Isolated cron sessions silently ignore model override — modelApplied: true returned but wrong model runs
- #59295 [Bug]: LiveSessionModelSwitchError double-fires after model correction due to stale baseline comparison
- #59996 [Bug]: Heartbeat model config is ignored unless heartbeat session has persisted override
- #60036 [Feature]: per-agent model override for heartbeat sessions
- #61294 [Bug] Cron isolated session model parameter ignored, falls back to default agent model
- #61573 Cron sessions permanently cache fallback model in sessions.json
- #61879 Isolated cron agentTurn ignores model override and still executes with agent default model
- #62017 Heartbeat agent ignores its own fallback chain, uses agents.defaults.model.fallbacks instead
- #62344 Model state bleeds from cron sessions to parent session
- #62424 Cron jobs show stale/partial failure state after model recovery; fallback errors hide successful reruns
- #62587 /new or /reset does not clear session-level authProfileOverride and modelOverride between sessions
- #62598 session_status model=default does not clear session override
- #63455 [Bug]: Cron job fails with FallbackSummaryError: All models failed — LLM request times out
- #64475 [Feature] Clear session model override on /new and /reset
- #64571 Failover model permanently locks session — agent config changes ignored
- #64844 [Bug]: /new session ignores agents.defaults.model.primary — injects wrong model
- #65129 Cron job --model override is ignored during execution
- #65200 /new and /reset should clear session model overrides
- #65875 [Bug] Session model override not cleared on /new - falls back to openrouter/free instead of configured primary model
- #66334 [Bug] Session model_change record persists and silently overrides agent primary model during session lifetime
- #67118 Cron isolated agentTurn may not advance to model fallback when embedded run returns meta.error payload
- #67573 /new and /reset commands should clear session-level model override to respect agents.defaults.model configuration
- #67598 Cron job payload.model override ignored — isolated sessions run on agent primary instead
- #68472 [Bug]: openclaw agent explicit-session turns lose session model overrides before the next turn
- #69469 Hot reload of agents.defaults.model.primary overrides channels.modelByChannel for existing sessions

Open candidates:

- #37843 Cron Job Model Should Support default as Special Value for Runtime Resolution
- #42397 [Feature]: Per-task model override in HEARTBEAT.md
- #42631 [Feature]: Allow job-level model override for cron jobs using sessionTarget=main + payload.kind=systemEvent
- #45494 [Bug]: Cron agent jobs silently time out during sustained LLM API outages instead of fast-failing on definitive errors
- #51251 Session modelOverride persists across gateway restarts, silently overrides config default
- #57076 fix(heartbeat): respect heartbeat.model override — three-location fix
