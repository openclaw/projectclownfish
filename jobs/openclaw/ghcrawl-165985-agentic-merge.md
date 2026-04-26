---
repo: openclaw/openclaw
cluster_id: ghcrawl-165985-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#67979"
candidates:
  - "#63146"
  - "#65476"
  - "#65722"
  - "#65800"
  - "#65976"
  - "#66082"
  - "#66925"
  - "#67063"
  - "#67658"
  - "#67979"
  - "#68041"
  - "#68121"
  - "#68335"
  - "#68371"
  - "#68586"
  - "#68828"
  - "#69019"
  - "#69458"
  - "#69952"
  - "#70181"
  - "#70185"
  - "#70242"
  - "#70842"
  - "#71479"
cluster_refs:
  - "#63146"
  - "#65476"
  - "#65722"
  - "#65800"
  - "#65976"
  - "#66082"
  - "#66925"
  - "#67063"
  - "#67658"
  - "#67979"
  - "#68041"
  - "#68121"
  - "#68335"
  - "#68371"
  - "#68586"
  - "#68828"
  - "#69019"
  - "#69458"
  - "#69952"
  - "#70181"
  - "#70185"
  - "#70242"
  - "#70842"
  - "#71479"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #67979 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 165985 on 2026-04-26."
---

# GHCrawl Cluster 165985

Generated from local ghcrawl run cluster 165985 for `openclaw/openclaw`.

Display title:

> memory-wiki bridge mode not exporting artifacts (memoryPluginState.capability undefined in CLI context)

Cluster shape from ghcrawl:

- total members: 24
- issues: 12
- pull requests: 12
- open candidates in local store: 24
- representative: #67979, currently open in local store
- latest member update: 2026-04-25T10:21:16.310Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #63146 fix(memory): stabilize corpus supplement ordering for prompt-cache and performance stability
- #65476 fix(memory-wiki): persist capability in plugin registry cache rollback paths
- #65722 [Bug] `openclaw wiki bridge import` always returns 0 artifacts — CLI does not initialize memory-core plugin runtime
- #65800 fix(cli): load runtime plugins for wiki commands
- #65976 memory-wiki bridge mode reports zero public artifacts and can remove existing bridge pages even when QMD memory is healthy
- #66082 [Bug]: memory-wiki bridge mode reports 0 exported artifacts even though memory-core has MEMORY.md / memory/*.md available
- #66925 [Bug] registerMemoryCapability is overwrite-only — active-memory overrides memory-core's publicArtifacts, breaking wiki bridge import
- #67063 fix(plugins): include memory slot plugin in primary wiki CLI scope
- #67658 [Bug]: Wiki Bridge deletes all sources when memory plugin artifacts unavailable
- #67979 memory-wiki bridge mode not exporting artifacts (memoryPluginState.capability undefined in CLI context)
- #68041 fix: load all plugins for wiki/memory CLI + preserve memory capability during snapshot loads
- #68121 fix(memory): preserve publicArtifacts when multiple memory plugins register capability
- #68335 fix(memory-core): activate on wiki CLI subcommand
- #68371 memory-wiki bridge mode shows 0 exported artifacts without QMD
- #68586 fix(memory-core): resolve runtime artifacts before wiki bridge status
- #68828 memory-wiki bridge import returns 0 artifacts — publicArtifacts capability not accessible to wiki plugin
- #69019 [Bug]: memory-wiki bridge still imports 0 artifacts on packaged stable 2026.4.15 with QMD + active-memory + memory-core
- #69458 fix(memory): keep active memory capability visible across plugin scopes
- #69952 fix(wiki): load memory-core plugin runtime before bridge artifact import
- #70181 CLI `wiki bridge import` returns 0 artifacts while runtime bridge works correctly
- #70185 fix(wiki): register memory publicArtifacts in CLI-metadata mode
- #70242 wiki.bridge.import returns 0 artifacts on 4.21 despite memory-core publicArtifacts registered
- #70842 memory-wiki bridge mode: 0 artifacts with QMD on 2026.4.21 (regression from #65976 #69019)
- #71479 fix(memory-wiki): route bridge CLI through gateway
