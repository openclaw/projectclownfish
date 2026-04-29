---
repo: openclaw/openclaw
cluster_id: gitcrawl-13645-dedupe-only-20260429-remote
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
  - "#55038"
candidates:
  - "#40953"
  - "#40961"
  - "#49117"
  - "#50981"
  - "#51926"
  - "#54495"
  - "#54646"
  - "#56419"
  - "#56454"
  - "#56796"
  - "#57223"
  - "#58133"
  - "#59046"
  - "#59382"
  - "#59397"
  - "#59472"
  - "#59484"
  - "#60661"
  - "#62249"
  - "#62802"
  - "#63915"
  - "#65415"
  - "#68196"
  - "#69159"
  - "#70886"
cluster_refs:
  - "#36407"
  - "#40953"
  - "#40961"
  - "#42590"
  - "#46273"
  - "#48625"
  - "#49068"
  - "#49117"
  - "#50981"
  - "#51926"
  - "#54495"
  - "#54646"
  - "#54999"
  - "#55038"
  - "#56419"
  - "#56454"
  - "#56796"
  - "#57223"
  - "#58071"
  - "#58133"
  - "#59046"
  - "#59382"
  - "#59397"
  - "#59472"
  - "#59484"
  - "#60661"
  - "#62249"
  - "#62802"
  - "#62944"
  - "#63046"
  - "#63060"
  - "#63207"
  - "#63483"
  - "#63915"
  - "#65415"
  - "#66608"
  - "#67220"
  - "#67889"
  - "#67929"
  - "#68196"
  - "#68700"
  - "#69159"
  - "#69871"
  - "#70604"
  - "#70886"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #55038 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13645 on 2026-04-29."
---

# Gitcrawl Cluster 13645

Generated from local gitcrawl run cluster 13645 for `openclaw/openclaw`.

Display title:

> fix(subagent): resolve subagent-specific runTimeoutSeconds from config

Cluster shape from gitcrawl:

- total members: 45
- issues: 12
- pull requests: 33
- open candidates in local store: 25
- representative: #55038, currently closed in local store
- latest member update: 2026-04-28T22:51:07.259679095Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #36407 fix(subagents): raise sessions_spawn gateway timeout budget (replacement for #29468)
- #42590 Fix/nodes run timeout propagation
- #46273 [Bug] GLM-5 Image Recognition Broken After 2026.3.12 Update
- #48625 fix: allow /tmp paths in sandboxed image tool
- #49068 fix(agent): suppress silent gateway wait summaries
- #54999 fix: honor default subagent run timeout
- #55038 fix(subagent): resolve subagent-specific runTimeoutSeconds from config
- #58071 Image tool aborts on slow vision models despite successful direct API calls
- #62944 [Bug]: image tool uses hardcoded 30s timeout, ignores tools.media.models.timeoutSeconds config
- #63046 fix: image tool respects tools.media.image.timeoutSeconds config
- #63060 [Bug] 2026.4.5 regression: ZAI-backed GLM requests hit /v4/v1/messages while same GLM models still work via Nano-GPT
- #63207 fix: respect agents.defaults.timeoutSeconds in HTTP request timeout
- #63483 fix(agents): honor image tool timeoutSeconds #62944
- #66608 Bug: Z.ai glm-4.6v vision model always aborts with 'Request was aborted'
- #67220 [Bug]: Pi's OpenAI SDK appends /v1 to provider baseUrl for image/vision calls, but text agent loop does not — causing 404
- #67889 Image understanding tool has hardcoded 60s timeout, ignoring configured timeoutSeconds
- #67929 fix(image): respect configured timeout on MiniMax VLM fallback path
- #68700 fix(agents): stop treating session lock waits as timeout
- #69871 [Bug] Image tool uses openai-completions instead of provider-zai-endpoint, causing 404 on zai VL models
- #70604 [Bug]: Image tool ignores user-configured provider baseUrl for zai/glm-5v-turbo, routes to vercel-ai-gateway instead (404)

Open candidates:

- #40953 fix(CLI): validate gateway-facing timeout input
- #40961 fix(a2a): extend default announce timeout and remove 60s cap
- #49117 Gateway/Agent: suppress false no-reply logs for silent completions
- #50981 fix(agents): propagate sessions_send timeout to target runs and session lock waits
- #51926 Agents: default nodes describe to current node
- #54495 fix(image-gen): make image generation timeout configurable via AgentModelConfig
- #54646 fix(cli): validate gateway-rpc --timeout
- #56419 [Bug]: image tool uses a fixed 30s provider timeout and aborts slow image-analysis requests
- #56454 fix: make image tool timeout configurable
- #56796 Fail closed on ambiguous gateway agent errors
- #57223 Agents: resolve image tool relative paths from workspace
- #58133 Keep sessions_send delivery pending after wait timeout
- #59046 Keep channels status JSON output on gateway failure
- #59382 Validate channels status timeout values
- #59397 Validate nodes CLI timeout values
- #59472 Keep channels list JSON output when usage loading fails
- #59484 Avoid config fallback for channels status probe failures
- #60661 Keep gateway CLI timeout client-side after accepted runs
- #62249 fix(mcp): increase tool call timeout from 60s to 5 minutes
- #62802 fix: subagent runTimeoutSeconds default fallback resolves to infinite timeout
- #63915 [Bug]: zai/glm-4.6v imageModel fails with "Request was aborted" — direct API call works fine
- #65415 feat(agents): configurable gateway timeout floor for subagent calls
- #68196 fix(agents): post-timeout compensation in sessions_send
- #69159 fix(agent): pass --timeout to session write lock and expose SessionWriteLockError
- #70886 Image tool returns 404 for ZAI vision models (zai/glm-4.6v)
