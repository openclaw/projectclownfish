---
repo: openclaw/openclaw
cluster_id: gitcrawl-13587-dedupe-only-20260429-remote
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
  - "#59118"
candidates:
  - "#40873"
  - "#41172"
  - "#41803"
  - "#44581"
  - "#45016"
  - "#45216"
  - "#45393"
  - "#46373"
  - "#49550"
  - "#50425"
  - "#50802"
  - "#55923"
  - "#57499"
  - "#59118"
  - "#59517"
  - "#61151"
  - "#62201"
  - "#62206"
  - "#63786"
  - "#68152"
  - "#68565"
  - "#69664"
cluster_refs:
  - "#37671"
  - "#39079"
  - "#39353"
  - "#39850"
  - "#39919"
  - "#39940"
  - "#40150"
  - "#40777"
  - "#40873"
  - "#41172"
  - "#41578"
  - "#41643"
  - "#41803"
  - "#44318"
  - "#44499"
  - "#44581"
  - "#44650"
  - "#44827"
  - "#44832"
  - "#45016"
  - "#45072"
  - "#45216"
  - "#45393"
  - "#46373"
  - "#46478"
  - "#47714"
  - "#48221"
  - "#48888"
  - "#48925"
  - "#49550"
  - "#49668"
  - "#49714"
  - "#50089"
  - "#50142"
  - "#50284"
  - "#50425"
  - "#50802"
  - "#51308"
  - "#51323"
  - "#51615"
  - "#51711"
  - "#51894"
  - "#52505"
  - "#53603"
  - "#55923"
  - "#57499"
  - "#57805"
  - "#58015"
  - "#58166"
  - "#59118"
  - "#59517"
  - "#61151"
  - "#61349"
  - "#62201"
  - "#62206"
  - "#62429"
  - "#63786"
  - "#68152"
  - "#68565"
  - "#68763"
  - "#69288"
  - "#69664"
  - "#70054"
  - "#70437"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59118 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13587 on 2026-04-29."
---

# Gitcrawl Cluster 13587

Generated from local gitcrawl run cluster 13587 for `openclaw/openclaw`.

Display title:

> fix: suppress raw JSON parse errors from leaking to Discord channels (#59076) [AI-assisted]

Cluster shape from gitcrawl:

- total members: 64
- issues: 1
- pull requests: 63
- open candidates in local store: 22
- representative: #59118, currently open in local store
- latest member update: 2026-04-28T22:51:07.49305032Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #37671 fix(agents): re-run tool_use/tool_result pairing repair after late me…
- #39079 fix(agents): prevent limitHistoryTurns from orphaning toolResult messages
- #39353 fix: prevent phantom toolResult from corrupting sessions
- #39850 fix: drop thinking blocks for kimi provider to prevent crashes
- #39919 fix: strip thinking/redacted_thinking blocks from non-latest assistant messages for Anthropic
- #39940 fix(compaction): drop thinking/redacted_thinking blocks for Anthropic models
- #40150 fix(agent): surface fake tool runs and legacy ws auth failures
- #40777 fix(agents): strip thinking tags from non-reasoning providers when thinking is off
- #41578 fix: strip dangling tool calls and error stubs from Anthropic session history
- #41643 fix(anthropic): recover from empty session error stubs
- #44318 fix: classify HTTP 500 as transient in status-based failover classifier
- #44499 fix: handle tool_use_id mismatch error to prevent infinite retry loops
- #44650 fix: boot-time patch for Anthropic thinking block signature corruption
- #44827 fix(agents): preserve thinking/redacted_thinking blocks in session history
- #44832 fix(pi-embedded-helpers): handle tool_use_id mismatch errors
- #45072 fix(agents): strip thinking blocks with invalid signatures before API replay
- #46478 fix(thinking): auto-recover from thinking block modification errors
- #47714 fix: add Mistral tool call ID hints to OpenRouter provider
- #48221 fix(agent): drop thinking blocks for non-native anthropic-messages proxies
- #48888 fix(repair): strip tool_use blocks from error/aborted messages instead of skipping
- #48925 fix: check "toolCall" instead of "toolUse" in stripDanglingAnthropicToolUses (closes #41571)
- #49668 Fix: Preserve Anthropic thinking blocks during compaction
- #49714 fix: handle thinking/redacted_thinking block immutability on context pruning
- #50089 fix: generalize api_error detection for fallback model triggering
- #50142 fix: strip orphaned tool_use blocks before sending to Anthropic API
- #50284 fix: preserve thinking signatures for all anthropic-messages API providers
- #51308 fix: redact raw error messages from channel-facing agent failure replies
- #51323 fix(sandbox): sanitize security errors before posting to channels
- #51615 fix(errors): exclude Jinja template errors from context overflow detection
- #51711 fix(session): sanitize orphaned tool_result API errors before posting to channels
- #51894 fix: preserve signed thinking blocks to prevent API signature rejection
- #52505 fix: sanitize reasoning content to prevent JSON parse errors (Issue #46637)
- #53603 fix(agents): drop thinking blocks uniformly for all models to prevent…
- #57805 fix: detect Mistral strict9 tool call ID mode through proxy providers
- #58015 fix(openrouter): enable strict9 tool call ID sanitization
- #58166 fix: skip phantom toolResult synthesis for empty toolCallIds
- #61349 fix: suppress raw JSON parse errors from truncated tool call streams
- #62429 fix: sanitize control characters in Anthropic streaming JSON parse
- #68763 fix: strip reasoning_content from conversation history for Gemma 4 models
- #69288 fix(agents): strip antml thinking tags in streaming
- #70054 fix(agents): strip thinking blocks with invalid signatures before API replay
- #70437 fix(agents): preserve Anthropic thinking signatures on replay (#69579)

Open candidates:

- #40873 fix(tui): strip tagged thinking from string content
- #41172 fix(errors): recognize Groq tool call validation error format
- #41803 fix(agents): suppress unrecognized errors from user surface
- #44581 fix(agents): preserve fallback thinking signatures at replay boundary
- #45016 feat: Strip thinking blocks from history except last assistant message (token savings)
- #45216 fix(agents): handle FastAPI `detail` error payloads to prevent raw JSON leaking to chat
- #45393 fix(errors): friendly message and last-message repair for tool_use/tool_result mismatch (#45385)
- #46373 fix(ui): i18n locale before render + fix: tool_use mismatch suggest /new (#46366, #46365)
- #49550 fix: handle MiniMax HTTP 520 and api_error body without 'internal server error'
- #50425 fix: strip reasoning blocks from sessions_history
- #50802 fix: recognize snake_case tool call types in session history repair
- #55923 fix: surface fake tool runs, placeholder replies, and legacy WS auth failures
- #57499 fix: strip reasoning replay for Azure OpenAI Responses API
- #59118 fix: suppress raw JSON parse errors from leaking to Discord channels (#59076) [AI-assisted]
- #59517 fix: drop replayed tool-call stubs from malformed assistant history
- #61151 fix(agents): drop partialJson streaming artifacts from session history repair
- #62201   fix: mitigate stale toolResult replay pollution
- #62206 feat: add assistant conclusion freshness gate
- #63786 fix: restore Copilot replay sanitization and ACP thread guards
- #68152 fix(ui): use i18n t() for Node option in exec approvals target select
- #68565 fix(agents/anthropic-replay): preserve signed/redacted thinking block…
- #69664 fix(bootstrap): recognize Bun error shape in isDirectModuleNotFoundError
