---
repo: openclaw/openclaw
cluster_id: gitcrawl-14017-dedupe-only-20260429-remote
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
  - "#52897"
candidates:
  - "#43912"
  - "#51930"
  - "#61618"
  - "#65040"
  - "#68389"
cluster_refs:
  - "#40834"
  - "#42375"
  - "#43723"
  - "#43815"
  - "#43912"
  - "#45744"
  - "#48247"
  - "#48251"
  - "#49745"
  - "#50538"
  - "#51035"
  - "#51930"
  - "#52160"
  - "#52188"
  - "#52897"
  - "#53277"
  - "#54204"
  - "#55194"
  - "#55533"
  - "#56402"
  - "#56404"
  - "#57170"
  - "#61618"
  - "#62194"
  - "#63206"
  - "#63586"
  - "#65040"
  - "#68389"
  - "#71122"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #52897 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14017 on 2026-04-29."
---

# Gitcrawl Cluster 14017

Generated from local gitcrawl run cluster 14017 for `openclaw/openclaw`.

Display title:

> fix(plugins): resolve plugin-sdk alias for external extensions

Cluster shape from gitcrawl:

- total members: 29
- issues: 3
- pull requests: 26
- open candidates in local store: 5
- representative: #52897, currently closed in local store
- latest member update: 2026-04-28T18:51:14.97263768Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40834 Surface install hints for stable/beta bundled plugins with unresolved package dependencies
- #42375 fix: prefer plugin manifest ids for package discovery
- #43723 fix(plugins): suppress provenance warning for plugins in plugins.allow
- #43815 fix(plugins): skip node_modules and other heavy dirs in plugin discovery scan
- #45744 fix: follow symlinks when discovering plugins in extensions directory
- #48247 fix(plugins): normalize renamed web search plugin ids
- #48251 fix(plugins): normalize renamed plugin id hints
- #49745 fix(plugin-loader): disable tryNative to fix channel runtime crash on Node 22.6+
- #50538 Plugins: fix source plugin-sdk alias resolution
- #51035 fix: skip path escape validation for bundled extensions on npm installs
- #52160 plugins: fix SDK alias package-root fallback
- #52188 fix(plugins): prefer manifest id as idHint during discovery
- #52897 fix(plugins): resolve plugin-sdk alias for external extensions
- #53277 fix(cli): allow bundled plugin resolution when catalog npmSpec is bare pluginId
- #54204 fix(plugins): resolve plugin-sdk alias via import.meta.url for external plugins
- #55194 fix(plugins): fix regression where cwd source checkout overrides installed plugin root
- #55533 Plugin SDK needs a backwards compatibility strategy for external plugins
- #56402 Plan staged retirement of plugin-sdk compat and reduce root alias to a minimal stable barrel
- #56404 Phase 1 implementation plan for plugin-sdk migration clarity and compatibility prep
- #57170 fix: resolveOpenClawPackageRootSync incorrectly resolves dist/ as package root
- #62194 fix(plugin-sdk): normalize bundled entry imports on Windows
- #63206 fix: discover symlinked plugin directories
- #63586 fix(plugins): ignore non-allowlisted load errors #63575
- #71122 perf(plugins): use native require for compiled JS before jiti

Open candidates:

- #43912 CLI: prefer bundled installs for scoped plugin specs
- #51930 fix: normalize OpenClawBrain plugin install identity
- #61618 fix(win): re-enable native jiti loading for dist .js to prevent dual module instances
- #65040 fix(doctor): warn that plugins.allow is an exclusive allowlist [AI-assisted]
- #68389 plugins: clarify allowlist warning when entries don't match discovered ids
