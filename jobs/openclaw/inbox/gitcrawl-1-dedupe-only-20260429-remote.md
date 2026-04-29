---
repo: openclaw/openclaw
cluster_id: gitcrawl-1-dedupe-only-20260429-remote
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
  - "#69236"
candidates:
  - "#60551"
  - "#64316"
  - "#64819"
  - "#66063"
  - "#66755"
  - "#67461"
  - "#67586"
  - "#67916"
  - "#68418"
  - "#68669"
  - "#68765"
  - "#69201"
  - "#69346"
  - "#69363"
  - "#69394"
  - "#69943"
  - "#69961"
  - "#70347"
  - "#70418"
  - "#70664"
  - "#70681"
  - "#70734"
  - "#70824"
  - "#70900"
cluster_refs:
  - "#55983"
  - "#57707"
  - "#60551"
  - "#62008"
  - "#64316"
  - "#64380"
  - "#64819"
  - "#65554"
  - "#65979"
  - "#66054"
  - "#66063"
  - "#66407"
  - "#66755"
  - "#67326"
  - "#67461"
  - "#67586"
  - "#67790"
  - "#67799"
  - "#67916"
  - "#68157"
  - "#68339"
  - "#68418"
  - "#68471"
  - "#68669"
  - "#68765"
  - "#68991"
  - "#69201"
  - "#69236"
  - "#69278"
  - "#69346"
  - "#69363"
  - "#69394"
  - "#69834"
  - "#69920"
  - "#69943"
  - "#69961"
  - "#70037"
  - "#70053"
  - "#70066"
  - "#70067"
  - "#70068"
  - "#70071"
  - "#70088"
  - "#70089"
  - "#70101"
  - "#70104"
  - "#70139"
  - "#70142"
  - "#70250"
  - "#70301"
  - "#70347"
  - "#70360"
  - "#70364"
  - "#70367"
  - "#70389"
  - "#70417"
  - "#70418"
  - "#70465"
  - "#70534"
  - "#70619"
  - "#70664"
  - "#70665"
  - "#70681"
  - "#70734"
  - "#70743"
  - "#70772"
  - "#70808"
  - "#70816"
  - "#70824"
  - "#70860"
  - "#70900"
  - "#70947"
  - "#70975"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #69236 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1 on 2026-04-29."
---

# Gitcrawl Cluster 1

Generated from local gitcrawl run cluster 1 for `openclaw/openclaw`.

Display title:

> fix(agents): exclude volatile inbound metadata from CLI session reuse hash (#68471)

Cluster shape from gitcrawl:

- total members: 73
- issues: 23
- pull requests: 50
- open candidates in local store: 24
- representative: #69236, currently closed in local store
- latest member update: 2026-04-29T11:09:44.776113908Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #55983 sessions: tree visibility honors spawn lineage before cross-agent gate [AI assisted with amp code]
- #57707 feat: support all file types as webchat attachments
- #62008 fix: preserve audio transcription multipart and upload filenames
- #64380 Agents/CLI backends: exclude inbound-meta from CLI session-reuse hash
- #65554 Jdc4429 media support v2 - Updated to work with latest version 2026.4.11
- #65979 fix(cron): normalize missing persisted job state
- #66054 fix(cron): guard against missing job.state in start() (#66016)
- #66407 fix(acp): bypass ACP dispatch for /acp text commands in bound threads
- #67326 fix: Issue 67056 image runtime headers
- #67790 fix(agents): make sessions_spawn mode=session errors actionable when thread binding is unavailable (#67400)
- #67799 [Bug] sessions_spawn fails with gateway closed (1008): pairing required - scope-upgrade to operator.admin
- #68157 [Bug] Cron isolated agentTurn: "already-running" survives restart, run history always empty
- #68339 fix(nvidia): wire onboarding auth and document NIM endpoint
- #68471 [Bug]: Heartbeat triggers unnecessary `cli session reset: reason=system-prompt` every 30 minutes
- #68991 fix(auto-reply): don't persist automatic fallback runtime as next-turn selected model
- #69236 fix(agents): exclude volatile inbound metadata from CLI session reuse hash (#68471)
- #69278 fix(agents): stop injecting heartbeat system prompt on non-heartbeat runs (#69079)
- #69834 fix(cron): validate delivery.channel ambiguity at add/edit time
- #69920 Unhandled promise rejection: Agent listener invoked outside active run
- #70037 fix(agents): preserve CLI session across heartbeat runs and gateway restarts
- #70053 sub-agent dispatch: in-process spawn hits gateway pairing gate (no in-process lane shortcut)
- #70066 [Plan Mode 2/6] Core backend MVP
- #70067 [Plan Mode 3/6] Advanced plan interactions
- #70068 [Plan Mode 4/6] Web UI + i18n
- #70071 [Plan Mode FULL] Integrated bundle for testing (Parts 1\u20136 + automation + executing-state lifecycle)
- #70088 [Plan Mode INJECTIONS] Typed pending-injection queue foundation
- #70089 [Plan Mode AUTOMATION] Cron nudges + auto-enable + subagent follow-ups
- #70101 [Plan Mode] Master tracker for the 9-PR upstream rollout
- #70104 [Bug]: Dreaming REM phase re-pins to stale corpus after state reset; signal pipeline never accumulates hits (0 promoted every night)
- #70139 gateway/chat.send: attachment branch race — chatAbortControllers check/set separated by image+media I/O spawns duplicate agent runs
- #70142 fix(gateway): re-check chatAbortControllers after attachment parse (protect user abort pathway)
- #70250 feat(openai-responses): add llmStateful incremental transmission via previous_response_id
- #70301 fix(qqbot): auth-gate bot approve command
- #70360 Cron: jobs without sessionTarget crash with TypeError in assertSupportedJobSpec (load path bypasses normalize defaulter)
- #70364 [Bug]: MCP child process leak: sessions_send via gateway never calls disposeSessionMcpRuntime
- #70367 fix(cron): default missing sessionTarget on load and guard assertSupportedJobSpec
- #70389 Subagent bundle-MCP runtimes can leak stdio child processes across sessions
- #70417 Heartbeat runs defeat their own cache-keep-alive purpose via tool-set and system-prompt divergence
- #70465 fix(gateway): cleanup MCP runtime for nested-lane agent runs to plug sessions_send leak (#70364)
- #70534 [Bug]: Dreaming fallback triggers constantly when using named agent   (agents/<name>/sessions/ path not recognized)
- #70619 [Bug]: isolated cron run session rows can inherit stale lifecycle fields (status/startedAt/endedAt) from prior runs
- #70665 fix(discord): repair ACP child thread binding
- #70743 [codex] Harden GPT-5.4 runtime paths
- #70772 [codex] Add Pi/Codex harness extension seams
- #70808 [Bug] Gateway never disposes stdio MCP runtimes on session end — child processes accumulate
- #70816 fix(agents): preserve explicit input modalities through provider merge (#70557)
- #70860 [Bug]: ACP Claude sessions leave orphaned processes after completion (memory leak)
- #70947 fix(webchat): support non-image file attachments
- #70975 Beta blocker: ollama - qwen3.5:9b produces garbage output under full agent system prompt

Open candidates:

- #60551 Strip leaked reasoning preambles before outbound send
- #64316 fix(agents): release bundle MCP runtime on mid-run session reset
- #64819 feat(cli): add --spawn flag for isolated subagent sessions
- #66063 fix(cron): guard legacy jobs without state on startup
- #66755 fix(auto-reply): detect silent NO_REPLY wrapped in model reasoning
- #67461 Gateway leaks undici sockets on every streamed Anthropic API call (buildManagedResponse missing finalize on GC)
- #67586 fix: register AbortController for agent RPC runs so chat.abort works
- #67916 fix(ui): don't block local attachments before bootstrap roots load
- #68418 fix(agents): unpack typed-block delta.content arrays in openai-completions stream
- #68669 fix(agents): dedupe subagent browser session cleanup wrapper with dispatch flag
- #68765 fix(gateway): preserve chat history across compaction checkpoint chains
- #69201 fix(delivery-context): drop fallback threadId on `to` mismatch and orphan-threadId merges
- #69346 fix(embedded-runner): actionable diagnostic for empty-stream config errors
- #69363 fix(agents): ignore SessionStart hook session_ids when resuming claude-cli
- #69394 fix(auto-reply): suppress entire payload when trailing NO_REPLY token present
- #69943 [Bug]: session-memory hook persists raw chat-template tokens and unparsed tool calls — re-injected context creates self-reinforcing poisoning loop, agents emit role tokens / NO_REPLY across all subsequent /new sessions
- #69961 fix(hooks/session-memory): sanitize chat-template tokens + tool_call XML before persisting (closes #69943)
- #70347 Cron outer timeout should emit lifecycle.error so sessions.json finalizes immediately
- #70418 Proposal: Cache TTL Warmer — preserve Anthropic prompt-cache across idle periods independent of heartbeats
- #70664 [Bug]: [macOS] findGatewayPidsOnPortSync drops all PIDs due to lsof p_comm vs argv[0] mismatch
- #70681 fix(infra/restart): verify gateway PIDs via ps argv on Unix, not lsof p_comm
- #70734 [Bug]: Fresh-session `[object Object]` hallucination persists after session/database wipe on fix branch for #69079
- #70824 fix: merge mode no longer drops image attachments when one provider lacks apiKey
- #70900 fix(runner): gate surface_error throw on failoverFailure
