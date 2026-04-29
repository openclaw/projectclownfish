---
repo: openclaw/openclaw
cluster_id: gitcrawl-13598-dedupe-only-20260429-remote
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
  - "#51815"
candidates:
  - "#49012"
  - "#57570"
  - "#59361"
  - "#68966"
cluster_refs:
  - "#44172"
  - "#46609"
  - "#47021"
  - "#48545"
  - "#49012"
  - "#49338"
  - "#49806"
  - "#49933"
  - "#51815"
  - "#52347"
  - "#52885"
  - "#53497"
  - "#53498"
  - "#54515"
  - "#54689"
  - "#55060"
  - "#55076"
  - "#55180"
  - "#55191"
  - "#55195"
  - "#56626"
  - "#56780"
  - "#56892"
  - "#56943"
  - "#57011"
  - "#57095"
  - "#57570"
  - "#58911"
  - "#59131"
  - "#59361"
  - "#59435"
  - "#60416"
  - "#60856"
  - "#62086"
  - "#62285"
  - "#62335"
  - "#62511"
  - "#62842"
  - "#62844"
  - "#63100"
  - "#63231"
  - "#63242"
  - "#63444"
  - "#63681"
  - "#64118"
  - "#64552"
  - "#64704"
  - "#65031"
  - "#65032"
  - "#66077"
  - "#66238"
  - "#66688"
  - "#67114"
  - "#68151"
  - "#68251"
  - "#68966"
  - "#68988"
  - "#68997"
  - "#69180"
  - "#69466"
  - "#69526"
  - "#70492"
  - "#71144"
  - "#71210"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #51815 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13598 on 2026-04-29."
---

# Gitcrawl Cluster 13598

Generated from local gitcrawl run cluster 13598 for `openclaw/openclaw`.

Display title:

> [Bug]: Telegram plugin fails to load

Cluster shape from gitcrawl:

- total members: 64
- issues: 64
- pull requests: 0
- open candidates in local store: 4
- representative: #51815, currently closed in local store
- latest member update: 2026-04-28T22:51:07.170841589Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44172 [Help]: Gateway reliability — recurring process death requiring manual restart (@mtiplea)
- #46609 [Bug]: Signal plugin failed to load (Cannot find module ../../../src/infra/outbound/send-deps.js)
- #47021 [Bug]: Telegram plugin fails to load after refactor: Cannot find module '../../../src/infra/outbound/deliver.js'
- #48545 Channel extensions fail to load: broken relative import to src/infra/outbound/send-deps.js
- #49338 Bug: OpenClaw 2026.3.13 npm package missing dist/gateway.js - Gateway fails to start, ERR_CONNECTION_REFUSED
- #49806 [Bug]: iMessage channel plugin fails to load: Cannot find package 'openclaw'
- #49933 [Bug]: Builtin memory indexing ignores configured remote embedding batch timeout
- #51815 [Bug]: Telegram plugin fails to load
- #52347 [Bug]: memory_search fails - Gemini embedding model unsupported
- #52885 微信插件 @tencent-weixin/openclaw-weixin 与 OpenClaw 2026.3.22+ 不兼容
- #53497 openclaw-weixin 1.0.3 fails to load on OpenClaw 2026.3.23-2: plugin-sdk top-level barrel missing exports
- #53498 [Bug]: telegram 无法将运行 openclaw 主机上的文件当成附件发送远程主机
- #54515 Published package openclaw@2026.3.23-2 contains bundled metadata/extensions still marked 2026.3.14
- #54689 [Bug]: Telegram file sending broken after 2026.3.24 update
- #55060 [Bug] OpenClaw 更新到 latest (2026.3.24) 后 doctor 和 gateway 命令无法运行
- #55076 Memory/context plugins (openviking, mem9, memos) prevent Telegram channel from initializing
- #55180 message tool: 'Unable to resolve plugin runtime module' since 2026.3.23-2
- #55191 [Bug]: Telegram message dispatch broken on 2026.3.24: Unable to resolve plugin runtime module
- #55195 [Bug]: lancedb plugin load error
- #56626 External plugin loading prevents Telegram channel from initializing
- #56780 v2026.3.28: memory-lancedb fails to load (missing dist/package.json + @lancedb/lancedb) and recall broken with embedding context length error
- #56892 [Bug]: Error: ENOENT: no such file or directory, open '.../openclaw/dist/package.json'
- #56943 [Bug]:
- #57011 [Bug]: 2026.3.28 breaks builtin memory on update: status multimodal validation failure + missing memory-tool.runtime dist chunk
- #57095 openclaw status crashes when multimodal memory is enabled (2026.3.28)
- #58911 [Bug]: Published package is missing plugin-sdk Telegram exports used by third-party plugins
- #59131 Bug: openclaw@2026.3.28 npm package is incomplete (missing extensions/runtime-api files)
- #59435 [Bug] openclaw update 命令会错误覆盖 ai.openclaw.gateway.plist 的配置路径
- #60416 Plugin SDK 兼容性问题: @tencent-weixin/openclaw-weixin 在 2026.4.2 加载失败
- #60856 [Bug]: Memory index with Ollama embeddings times out after 120s even though embeddings are ready and batch is disabled
- #62086 [Bug]: [2026.4.5] CLI SIGTERM after ~10s via exec/runtime wrapper (OPENCLAW_SHELL=exec path)
- #62285 openclaw command hang and gateway service not working after upgrading to 2026.4.5
- #62335 CLI commands hang indefinitely after upgrade to 2026.4.5, cannot interrupt with Ctrl+C
- #62511 [Bug]: External plugins fail to load on 2026.4.5: normalizeAccountId is not a function
- #62842 [Bug]: openclaw config command extremely slow (6-9 seconds) while other commands are fast
- #62844 [Bug]: Telegram loader/config-read bug
- #63100 [Bug][P1] Frequent internal SIGTERM self-restarts (14 times in 2 days) + deliver silent failures (orphan delivers)
- #63231 [Bug]: v2026.4.8, [gateway-http] unhandled error in request handler: Error: Cannot find module '@buape/carbon'
- #63242 [Bug]: CLI Performance Regression: 20-40s hang after hook loading since v4.5+
- #63444 Bug: openclaw memory status fails when memorySearch.provider is bedrock
- #63681 [Bug]: CLI `openclaw memory index` fails with 'Unknown memory embedding provider: ollama'
- #64118 CLI extremely slow on Windows 11 (30-60s) in v2026.4.9, fast in v2026.4.2
- #64552 [Bug]: Severe Performance Regression - 30-60 Second Delay Per API Call (v2026.4.9)
- #64704 [Bug]: active-memory plugin package not found on npm or ClawHub (2026.4.10)
- #65031 [Bug]: dist/index.js subcommands in official Docker image take 24s-49s to start
- #65032 [Bug]: node dist/index.js subcommands take 42s-49s to start in official Docker image
- #66077 memory status --deep fails with "Unknown memory embedding provider: ollama" while runtime memory_search works
- #66238 [Bug]: JSON CLI paths eagerly load unrelated plugin/runtime work
- #66688 [Bug]: `memory index` fails with `Unknown memory embedding provider: ollama`
- #67114 [Bug]: openclaw status / health hangs or stalls on Windows after restart, likely related to CLI runtime/plugin loading
- #68151 npm global install 2026.4.15 on macOS produces incomplete dist/runtime files and unhealthy gateway
- #68251 Memory search embed timeout — model not found for embeddings
- #68988 [Bug]: CLI subcommands are extremely slow on Raspberry Pi 5 (20s for `openclaw config --help`)
- #68997 Bug: `task-registry-control.runtime.{js,ts}` missing from published npm tarballs, breaks `openclaw tasks cancel`
- #69180 [Bug]: Unknown memory embedding provider: github-copilot
- #69466 Bug: `openclaw security audit` hangs indefinitely (no output)
- #69526 [Bug]: CLI subcommand dispatch remains 60-180s on modern laptop hardware after #5871 fixes
- #70492 Bug: openclaw status / status --json hang or die under 2026.4.21 due to heavy status runtime/plugin load path
- #71144 CLI `openclaw memory status` fails with "Unknown memory embedding provider: local"
- #71210 [Bug]: openclaw memory status fails with 'Unknown memory embedding provider: local'

Open candidates:

- #49012 [Bug]: The OpenClaw gateway is "frozen" and experiencing "port conflicts," preventing web pages from loading.
- #57570 [Bug]:  openclaw config no response
- #59361 [Bug]: openclaw agent exits 0 with no output on v2026.3.31; lobster CLI unregistered as command
- #68966 [Bug]: [WSL] openclaw browser command terminated by SIGKILL causing timeout
