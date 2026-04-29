---
repo: openclaw/openclaw
cluster_id: gitcrawl-2005-dedupe-only-20260429-remote
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
  - "#47641"
candidates:
  - "#46362"
  - "#56574"
  - "#57080"
  - "#58640"
  - "#58991"
  - "#59713"
  - "#63146"
  - "#65476"
  - "#67080"
  - "#67329"
  - "#68300"
  - "#69690"
cluster_refs:
  - "#45105"
  - "#45606"
  - "#46195"
  - "#46362"
  - "#46741"
  - "#46742"
  - "#47463"
  - "#47641"
  - "#48769"
  - "#48791"
  - "#49514"
  - "#49526"
  - "#52590"
  - "#52592"
  - "#52764"
  - "#53461"
  - "#53642"
  - "#53967"
  - "#53970"
  - "#54686"
  - "#54817"
  - "#54828"
  - "#54835"
  - "#54845"
  - "#55319"
  - "#56244"
  - "#56353"
  - "#56355"
  - "#56358"
  - "#56574"
  - "#56666"
  - "#56756"
  - "#57080"
  - "#57525"
  - "#58640"
  - "#58991"
  - "#59713"
  - "#61366"
  - "#61785"
  - "#62556"
  - "#62559"
  - "#63146"
  - "#63168"
  - "#63810"
  - "#63847"
  - "#65476"
  - "#65497"
  - "#65800"
  - "#67063"
  - "#67080"
  - "#67208"
  - "#67329"
  - "#68041"
  - "#68121"
  - "#68300"
  - "#68334"
  - "#68335"
  - "#68523"
  - "#68586"
  - "#68745"
  - "#69458"
  - "#69690"
  - "#69952"
  - "#70185"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #47641 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2005 on 2026-04-29."
---

# Gitcrawl Cluster 2005

Generated from local gitcrawl run cluster 2005 for `openclaw/openclaw`.

Display title:

> fix(plugins): guard activatePluginRegistry against overwriting established gateway registry

Cluster shape from gitcrawl:

- total members: 64
- issues: 0
- pull requests: 64
- open candidates in local store: 12
- representative: #47641, currently closed in local store
- latest member update: 2026-04-28T18:04:42.396470478Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45105 fix(gateway): bridge plugin registry across jiti VM realm boundaries
- #45606 fix: use live plugin registry for HTTP route matching after reload
- #46195 Prevent multiple registrations of Feishu tools on reconnect
- #46741 fix: defer sessions_yield announce until concurrent tool executions settle
- #46742 [AI-assisted] Plugins: keep read-only loads from replacing the active runtime registry
- #47463 fix(cli): prevent plugin double-registration via runtime boundary
- #47641 fix(plugins): guard activatePluginRegistry against overwriting established gateway registry
- #48769 fix(plugins): resolve gateway auth against active http route registry
- #48791 fix(plugins): pin channel registry to prevent desync on runtime reload
- #49514 Fix/slack http webhook module split
- #49526 Gateway: rebind plugin registry before channel lifecycle
- #52590 fix(feishu): remove duplicate tool registration
- #52592 fix(plugins): deduplicate tool registration to prevent double-register
- #52764 fix(plugins): resolve BlueBubbles webhook 404 when pinned registry empty (#52095)
- #53461 fix(plugins): pin channel registry to prevent announce delivery failures (#48790)
- #53642 fix(plugins): ensure httpRouteRegistry fields exist across bundle chunks
- #53967 fix: implement plugin deduplication and improve gateway restart stability
- #53970 fix: pin channel registry at startup to survive registry swaps
- #54686 Fix for hooks and bluebubbles webhook 404 (closes #52605 and others)
- #54817 Plugins: reload gateway-bindable runtimes when active registry is incompatible
- #54828 fix: deduplicate Feishu plugin tool registration on MCP reconnect
- #54835 fix: prevent duplicate plugin registration logs during CLI init
- #54845 fix(plugins): use pinned channel registry for outbound message resolution
- #55319 fix: use active channel registry version for channel loader cache invalidation
- #56244 fix: guard against duplicate Feishu tool registration on config hot-reload
- #56353 fix(plugins): gateway-bindable registry satisfies default requests in agent_end hooks
- #56355 fix(channels): pin outbound registry loader
- #56358 fix(plugins): deduplicate tool registration on config hot-reload
- #56666 fix: use pinned channel registry in outbound adapter loader
- #56756 fix(plugins): warn when configured channel plugin is excluded by plugins.allow (fixes #56714)
- #57525 fix: make registerChannel/registerHttpRoute idempotent for same-plugin re-registration
- #61366 fix: resolve intermittent 'unknown channel' errors for plugin channels in sessions_spawn
- #61785 fix(plugins): reuse gateway-bindable active registry for default runtime requests
- #62556 fix(plugins): avoid loading disabled channel plugins for status
- #62559 fix(cli): preload configured channels for status paths
- #63168 plugins: preserve gateway-bindable hook runner
- #63810 Avoid runtime plugin loads during status inspection
- #63847 fix(cli): load plugins for memory commands so embedding providers register
- #65497 fix: reuse gateway provider registry in worker sessions (#62051)
- #65800 fix(cli): load runtime plugins for wiki commands
- #67063 fix(plugins): include memory slot plugin in primary wiki CLI scope
- #67208 fix(memory-wiki): route wiki bridge import CLI through gateway RPC
- #68041 fix: load all plugins for wiki/memory CLI + preserve memory capability during snapshot loads
- #68121 fix(memory): preserve publicArtifacts when multiple memory plugins register capability
- #68334 fix(memory): split restoreMemoryPluginState into restore/merge for cache-hit bug
- #68335 fix(memory-core): activate on wiki CLI subcommand
- #68523 Fix to Slack HTTP Registry
- #68586 fix(memory-core): resolve runtime artifacts before wiki bridge status
- #68745 fix(slack): share HTTP route registry via globalThis across module instances
- #69458 fix(memory): keep active memory capability visible across plugin scopes
- #69952 fix(wiki): load memory-core plugin runtime before bridge artifact import
- #70185 fix(wiki): register memory publicArtifacts in CLI-metadata mode

Open candidates:

- #46362 discord/voice: add voice-triggered model escalation
- #56574 fix(plugins): dedupe tool registration and preserve plugin tool config
- #57080 fix(cli): preload all plugins for status route
- #58640 fix(slack): add warning log when channel is dropped due to allow:false
- #58991 fix(hooks): deduplicate internal hook handlers on config reload
- #59713 fix(cli): skip full plugin preload for channels login/logout when --channel is explicit
- #63146 fix(memory): stabilize corpus supplement ordering for prompt-cache and performance stability
- #65476 fix(memory-wiki): persist capability in plugin registry cache rollback paths
- #67080 feat(plugins): narrow gateway route loads from manifests
- #67329 Fix: [Bug]: memory-wiki: wiki status and wiki doctor report 0 bridge artifacts despite populated memory
- #68300 fix(hooks): include stack trace and event context in internal hook error logs
- #69690 fix: reuse gateway-bindable plugin registries for runtime loads
