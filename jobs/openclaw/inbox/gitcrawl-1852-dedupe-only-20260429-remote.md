---
repo: openclaw/openclaw
cluster_id: gitcrawl-1852-dedupe-only-20260429-remote
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
  - "#59390"
candidates:
  - "#18967"
  - "#38907"
  - "#47596"
  - "#47597"
  - "#52457"
  - "#53319"
  - "#54471"
  - "#58686"
  - "#59251"
  - "#66720"
cluster_refs:
  - "#18967"
  - "#35028"
  - "#38907"
  - "#40102"
  - "#40393"
  - "#40981"
  - "#41463"
  - "#41756"
  - "#43518"
  - "#43521"
  - "#43544"
  - "#43556"
  - "#44198"
  - "#44200"
  - "#46084"
  - "#46476"
  - "#47339"
  - "#47596"
  - "#47597"
  - "#48359"
  - "#48362"
  - "#50470"
  - "#51328"
  - "#51345"
  - "#51909"
  - "#52242"
  - "#52457"
  - "#52792"
  - "#53319"
  - "#53370"
  - "#53415"
  - "#54471"
  - "#56193"
  - "#56326"
  - "#56342"
  - "#58359"
  - "#58686"
  - "#59251"
  - "#59274"
  - "#59390"
  - "#59561"
  - "#59605"
  - "#60077"
  - "#60585"
  - "#60672"
  - "#60904"
  - "#60965"
  - "#61724"
  - "#62997"
  - "#63120"
  - "#63121"
  - "#63914"
  - "#64292"
  - "#64714"
  - "#64787"
  - "#64889"
  - "#65282"
  - "#66720"
  - "#67248"
  - "#68081"
  - "#68275"
  - "#68397"
  - "#69166"
  - "#69170"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59390 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1852 on 2026-04-29."
---

# Gitcrawl Cluster 1852

Generated from local gitcrawl run cluster 1852 for `openclaw/openclaw`.

Display title:

> sessions_spawn(runtime="subagent") can fail because unified schema exposes ACP-only streamTo

Cluster shape from gitcrawl:

- total members: 64
- issues: 49
- pull requests: 15
- open candidates in local store: 10
- representative: #59390, currently closed in local store
- latest member update: 2026-04-29T10:20:02.854960198Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #35028 ACP sessions: sessions_spawn(acp) produces empty sessions_history; identity reconcile fails; transcriptPath null
- #40102 fix: ignore ACP-only streamTo for subagent spawns
- #40393 [Bug]: Session_spawn runtime:acp accepts model and thinking but silently ignores them.
- #40981 fix: allow spawnedBy and spawnDepth on ACP sessions
- #41463 [Bug]: Custom subagent not listed by /agents and rejected by sessions_spawn (allowed: none) on 2026.3.8 and 2026.2.26
- #41756 fix: allow spawnedBy and spawnDepth for acp:* sessions (#41751)
- #43518 [Bug] sessions_spawn task parameter does not deliver to ACP runtime sessions - sessions spawn with empty history
- #43521 ACP runtime ignores model parameter on sessions_spawn
- #43544 sessions_spawn(runtime="acp") fails: "spawnedBy is only supported for subagent:* sessions"
- #43556 Bug: streamTo in sessions_spawn breaks subagent runtime
- #44198 ACP codex sessions die immediately with "queue owner unavailable" while equivalent manual acpx session works
- #44200 feat(acp): default streamTo to "parent" for ACP sessions
- #46084 [Bug] ACP runtime 输出结果未正确路由回 OpenClaw
- #46476 ACP thread spawn fails: spawnedBy validation rejects agent:*:acp:* session keys
- #47339 Feature Request: allow depth-1 sub-agents to send intermediate progress messages to parent via sessions_send
- #48359 Thread-bound ACP sessions missing metadata causing ACP_SESSION_INIT_FAILED
- #48362 Thread-bound ACP sessions missing metadata causing ACP_SESSION_INIT_FAILED
- #50470 [Bug] acpx exits with code 1 (ACP_TURN_FAILED) when called via sessions_spawn from Feishu
- #51328 [Bug]: ACP session transcript exists but session APIs may return empty history
- #51345 [Bug]: sessions_spawn(runtime="acp") hangs immediately — acpx never produces output, stalls for full relay timeout (6h)
- #51909 bug(acp): acpx gateway runtime fails with 'exited with code 1' — works fine via direct acpx invocation
- #52242 [Feature Request] Add progress callback support for subagent runtime
- #52792 Bug: sessions_spawn fails with 'unexpected property spawnedBy/workspaceDir'
- #53370 [Feature]: Make sessions_spawn more forgiving for ACP-only fields in subagent runtime
- #53415 [Bug]: ACP persistent session for opencode dies immediately after spawn with queue owner unavailable, while acpx opencode exec/prompt works
- #56193 [Bug]: sessions_spawn(runtime="subagent") can receive ACP-only streamTo from the current tool-call bridge
- #56326 Bug: sessions_spawn exposes ACP-only fields and breaks runtime=subagent with schema-following models
- #56342 Fix sessions_spawn for subagent runtime with ACP-only fields
- #58359 [sessions_spawn] agentId parameter returns forbidden allowed none despite valid config
- #59274 [Bug]: ACP sessions die immediately with "queue owner unavailable" on local loopback gateway (v2026.4.1, macOS arm64)
- #59390 sessions_spawn(runtime="subagent") can fail because unified schema exposes ACP-only streamTo
- #59561 [Bug]: ACP sessions created via sessions_spawn can enter stale running state with no close/kill mechanism
- #59605 [Bug]: Malformed agent session key when spawning subagent via sessions_spawn
- #60077 [Bug]: ACP spawn on webchat creates usable shadow session plus broken agent:openclaw:acp:* lane; acpx ensureSession returns no events after sessions ensure/new
- #60585 ACP runtime sessions fail with 'acpx exited with code 1' — sessions_spawn runtime:"acp" broken in 2026.4.2
- #60672 [Bug]: Windows ACP Codex spawn via OpenClaw exits with code 1 while direct acpx codex initializes
- #60904 ACP thread-bound child session key misses `acp` metadata, causing `ACP_SESSION_INIT_FAILED`
- #60965 sessions_spawn schema allows streamTo for runtime=subagent but execute rejects it
- #61724 sessions_spawn(runtime="subagent") fails with "streamTo is only supported for runtime=acp"
- #62997 [Bug]: Spawned ACP background task enters zombie state after billing failure — persists across session resets, gateway restarts, and database wipes
- #63120 sessions_spawn: LLMs pass streamTo for subagent runtime causing 100% spawn failures
- #63121 fix(tools): add acp-only guidance to sessions_spawn streamTo parameter
- #63914 sessions_spawn: LLM-exposed `runtime` parameter creates spawn_failed footgun for in-config agents
- #64292 [Bug]: [2026.4.9] Spawn failed: agentId is not allowed for sessions_spawn (allowed: none)
- #64714 sessions_spawn rejects subagent runtime when streamTo is auto-filled by strict-mode providers
- #64787 fix: ignore auto-filled streamTo for subagent spawns
- #64889 sessions_spawn and /subagents spawn use inconsistent native subagent paths
- #65282 fix(agents): ignore ACP-only streamTo on subagent sessions_spawn
- #67248 [Bug]: sessions_spawn(runtime="subagent") still fails on 2026.4.14 with ACP-only streamTo under GPT-5.4
- #68081 ACP runtime broken for Codex on macOS 2026.4.14: direct Codex/adapter work, OpenClaw ACP fails with identity reconcile + ACP_TURN_FAILED
- #68275 sessions_spawn auto-injects `streamTo:"parent"` for `runtime="subagent"` and causes hard failure
- #68397 fix(sessions_spawn): silently strip ACP-only fields for runtime=subagent
- #69166 sessions_spawn: streamTo schema lacks runtime=acp hint, causes 2x-token retry loop for subagent callers
- #69170 fix(agent): document that sessions_spawn streamTo is ACP-only

Open candidates:

- #18967 [Feature]: Parent-scoped sessions_send for sub-agents
- #38907 ACP bridge sessions fail with acp_session_init_failed (echo + end_turn, no chunks)
- #47596 [Feature Request] Add tool call visibility to streamTo="parent" for ACP runtime
- #47597 [Feature Request] Add streamTo="parent" support for runtime="subagent"
- #52457 feat(acp): enable progress forwarding to parent session by default
- #53319 [Bug]: ACP concurrent session spawns — first agent fails to launch CC process
- #54471 fix(acp): add system_event stream relay to parent session for ACP spawn
- #58686 fix(agents): drop streamTo silently for non-ACP spawn requests
- #59251 fix(sessions): normalize GPT-style redundant args in sessions_spawn and sessions_send
- #66720 fix: strip runtime-specific properties from sessions_spawn tool schema for provider compatibility
