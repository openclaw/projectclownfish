---
repo: openclaw/openclaw
cluster_id: gitcrawl-13990-dedupe-only-20260429-remote
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
  - "#65207"
candidates:
  - "#48680"
  - "#66561"
cluster_refs:
  - "#40040"
  - "#40434"
  - "#41673"
  - "#41871"
  - "#41874"
  - "#43372"
  - "#44556"
  - "#46492"
  - "#48213"
  - "#48680"
  - "#49168"
  - "#49684"
  - "#49687"
  - "#50759"
  - "#51452"
  - "#54754"
  - "#54946"
  - "#55178"
  - "#56053"
  - "#56826"
  - "#57013"
  - "#57099"
  - "#57659"
  - "#57681"
  - "#57725"
  - "#57814"
  - "#58384"
  - "#58415"
  - "#58457"
  - "#58842"
  - "#59482"
  - "#59524"
  - "#59916"
  - "#60089"
  - "#60330"
  - "#60679"
  - "#60753"
  - "#60994"
  - "#62047"
  - "#62406"
  - "#62533"
  - "#62864"
  - "#62958"
  - "#63085"
  - "#63766"
  - "#63775"
  - "#64186"
  - "#64541"
  - "#64710"
  - "#64840"
  - "#65119"
  - "#65207"
  - "#65314"
  - "#65343"
  - "#65362"
  - "#65500"
  - "#65810"
  - "#65846"
  - "#66561"
  - "#68002"
  - "#68344"
  - "#68662"
  - "#69092"
  - "#69390"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65207 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13990 on 2026-04-29."
---

# Gitcrawl Cluster 13990

Generated from local gitcrawl run cluster 13990 for `openclaw/openclaw`.

Display title:

> [Bug] Ollama models not displayed in openclaw models list (2026.4.11)

Cluster shape from gitcrawl:

- total members: 64
- issues: 64
- pull requests: 0
- open candidates in local store: 2
- representative: #65207, currently closed in local store
- latest member update: 2026-04-28T21:55:43.662437027Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40040 Agent does not properly wait for exec tool with long-running commands
- #40434 [Bug]: Local Ollama model stuck on typing forever via Telegram — multiple silent failure modes in 2026.3.x
- #41673 [Bug]: embedded run agent end: runId=xxxxxxxxx isError=true error=LLM request timed out.
- #41871 Local Ollama models still hang in OpenClaw 2026.3.8 (retest of #31399)
- #41874 openclaw models status --probe returns LLM request timed out on 2026.3.8
- #43372 Embedded agent error: 'No tool call found for function call output with call_id' under tool-heavy / retry conditions
- #44556 [Bug]: Local Ollama agent runs intermittently fail with 'fetch failed' / timeout on 2026.3.8-beta.1
- #46492 [Bug]: Failed to switch the Ollama model
- #48213 [Bug]: [agent/embedded] embedded run agent end: runId=xxxxxx isError=true model=gpt-5.4 provider=openai-codex error=terminated
- #49168 Bug: ollama models return HTTP 404 when used in agent fallback chain (model_not_found)
- #49684 [Bug]: Gateway blocks Ollama connections and causes model unresponsiveness
- #49687 [Bug]: Gateway blocks Ollama connections and causes model unresponsiveness
- #50759 [Bug]:Local Ollama provider incorrectly requires API key in auth preflight (v2026.3.13)
- #51452 [Bug] Persistent HTTP 401 with Valid Aliyun ModelStudio Key (Direct API Calls Work, CLI Fails)
- #54754 # Bug: OpenClaw ignores Ollama provider `baseURL` — always connects to localhost (127.0.0.1)
- #54946 [Bug]: The OpenCLAW TUI has been loading...
- #55178 Ollama Model Fallback Not Triggering on 503 Errors
- #56053 [Bug]: Model fallback chain does not trigger on HTTP 402 (Insufficient Balance) from provider
- #56826 Embedded websocket stream falls back to HTTP after 500 during WS setup
- #57013 agent/embedded ws-stream repeatedly fails with HTTP 500 and falls back to HTTP
- #57099 [Bug]: Explicit api ollama provider config fails with No API provider registered after upgrade to 2026.3.28
- #57659 Bug: Corrupted/oversized session causes infinite WebSocket 500 retry loop
- #57681 [Bug]: Noddling forever on macOS with different providers/models
- #57725 [bug] Embedded ws-stream websocket upgrade fails with HTTP 500 (falls back to HTTP)
- #57814 [Bug] [agent/embedded] [ws-stream] WebSocket connect failed 500 on openai-codex/gpt-5.4, not on other models
- #58384 Bug: direct ollama provider to Ollama Cloud returns 401 on inference, while ollama-local ...:cloud works
- #58415 [Bug]: ws-stream WebSocket connect fails with 500 and always falls back to HTTP (Telegram still works)
- #58457 [Bug]: Ollama Cloud provider returns HTTP 401 despite valid API key (v2026.3.28)
- #58842 [Bug]: model hanging
- #59482 [Bug]: OpenCalw hang after a couple of dialog with skill call using local model qwen3.5 27b
- #59524 Model fallback treats finish_reason:error as success, stops fallback chain
- #59916 [Bug]: openclaw stuck at loading after switching to Ollama/gemma4:26b (stuck at `Wake up, my friend`)
- #60089 [Bug]: Ollama provider routing bug: model selection shows ollama7/ollama8 but requests sent to ollama:default (localhost)
- #60330 [Bug]: OpenClaw local web chat hangs when using local Ollama, while direct Ollama API works normally
- #60679 [Bug]: Ollama provider fails silently in Web/TUI in v2026.3.28+ with fallback chain and model allowlist validation
- #60753 [Bug]: Can't use ollama(llama3.1:8b) on may macmini
- #60994 [Bug]: OpenClaw cannot reliably connect to remote Ollama/LM Studio instances via LAN IP — fetch failed / Connection error on every request despite direct curl and Node.js fetch working fine
- #62047 [Bug]: fallover loop
- #62406 [Bug]: Ollama local run works, but openclaw agent --local times out (0 tokens) on Ubuntu VPS
- #62533 [Bug]: Model "Not Found" (404) errors when using a remote Ollama provider as a fallback
- #62864 [Bug]: [agent] embedded run failover decision: runId=13b741fe-d9fc-4401-ae0f-4f9970201ead stage=assistant decision=surface_error reason=timeout provider=lm-studio/qwen3.5-35b-a3b profile=-
- #62958 [Bug]: openclaw agent times out/hangs with local Ollama on macOS while TUI interactive chat works
- #63085 [Bug]:OpenClaw and Ollama remote server (in local network)
- #63766 openclaw agent sometimes hangs after successful agent response
- #63775 [Bug]: Multi-ollama provider routing still broken after #61776 — requests silently go to first provider
- #64186 [Bug Again]:  OpenClaw tries to use local Ollama CLI instead of remote API endpoint
- #64541 [Bug]: Ollama gemma4:26b first heavy OpenClaw turn is extremely slow or times out, while later turns in same session are fast
- #64710 [Bug]: Agent timeout when calling Ollama - qwen2.5:7b works via direct API but OpenClaw agent times out
- #64840 Model fallback not triggered on HTTP 400 model_not_supported error
- #65119 [Bug]: Ollama local models used to be detected until all of a sudden, theyre not, even cloud models
- #65207 [Bug] Ollama models not displayed in openclaw models list (2026.4.11)
- #65314 [Bug]: Ollama models time out in OpenClaw agent mode, even though `ollama run` responds in 5s
- #65343 Ollama provider times out after 120 seconds on every request
- #65362 [Bug]: Openclaw can't find Ollama local models, 10.4.2026 it worked fine, but now it doesn't
- #65500 [Bug]: Custom models not shown by /models in Telegram or Web Console UI
- #65810 [Bug]: Fallbacks does not work. Connection errors (ECONNREFUSED, network offline) should trigger model fallback to cloud providers
- #65846 [Bug]: Agent process does not exit after task completion when used via CLI
- #68002 [Bug]: Configuring the local ollama model does not reply properly after asking a question in tui
- #68344 [Bug]: Ollama integration issues: context window ignored + tool support blocking local models
- #68662 [Bug]: Llama 3.1 8B via Ollama hangs indefinitely — gateway blocks on first request
- #69092 [Bug]:
- #69390 [Bug]: Ollama local model still hits ~5 minute "Headers Timeout Error" on 2026.4.15 despite increased OpenClaw timeouts

Open candidates:

- #48680 [Bug] Model fallback treats HTTP 403 business rejection as 'candidate_succeeded', skipping remaining fallback models
- #66561 [Bug]: openai-codex SSE stream begins, but embedded run aborts locally and is surfaced as timeout (408)
