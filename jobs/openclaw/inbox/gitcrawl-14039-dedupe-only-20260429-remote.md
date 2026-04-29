---
repo: openclaw/openclaw
cluster_id: gitcrawl-14039-dedupe-only-20260429-remote
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
  - "#38544"
candidates:
  - "#39269"
  - "#44735"
  - "#58796"
  - "#69292"
cluster_refs:
  - "#38544"
  - "#39042"
  - "#39269"
  - "#42192"
  - "#44567"
  - "#44735"
  - "#45900"
  - "#48673"
  - "#48819"
  - "#58796"
  - "#69292"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #38544 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14039 on 2026-04-29."
---

# Gitcrawl Cluster 14039

Generated from local gitcrawl run cluster 14039 for `openclaw/openclaw`.

Display title:

> fix(plugins): suppress false-positive duplicate-id warning when user overrides bundled plugin (#38437)

Cluster shape from gitcrawl:

- total members: 11
- issues: 0
- pull requests: 11
- open candidates in local store: 4
- representative: #38544, currently closed in local store
- latest member update: 2026-04-28T18:04:42.776989208Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38544 fix(plugins): suppress false-positive duplicate-id warning when user overrides bundled plugin (#38437)
- #39042 fix(plugins): silence duplicate warning for bundled+config channel plugins
- #42192 plugins: suppress false duplicate-id warning across origins
- #44567 fix(feishu): prevent duplicate plugin id by respecting channels.* config for extension-based channels
- #45900 fix(plugins): suppress false-positive duplicate id warning for channel registration pattern
- #48673 fix(plugins): suppress duplicate warning for npm-installed plugin overriding bundled
- #48819 fix: suppress false-positive duplicate plugin warning for npm installs

Open candidates:

- #39269 fix: batch bug fixes — routing, delivery, errors, plugins
- #44735 fix(doctor): skip feishu auto-enable when alternative feishu plugin is enabled
- #58796 Plugins: dedupe manifest registry rows and suppress benign bundled shadow warnings
- #69292 fix(doctor): skip plugins.entries for installed plugins already auto-loaded via manifest channels
