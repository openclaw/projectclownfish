---
repo: openclaw/openclaw
cluster_id: gitcrawl-13663-dedupe-only-20260429-remote
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
  - "#46071"
candidates:
  - "#45269"
  - "#62516"
cluster_refs:
  - "#42726"
  - "#43066"
  - "#45269"
  - "#46071"
  - "#49362"
  - "#62516"
  - "#66558"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #46071 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13663 on 2026-04-29."
---

# Gitcrawl Cluster 13663

Generated from local gitcrawl run cluster 13663 for `openclaw/openclaw`.

Display title:

> [Bug]: tools.profile (coding) allowlist contains unknown entries (apply_patch). These entries are shipped core tools but unavailable in the current runtime/provider/model/config.

Cluster shape from gitcrawl:

- total members: 7
- issues: 7
- pull requests: 0
- open candidates in local store: 2
- representative: #46071, currently closed in local store
- latest member update: 2026-04-28T05:49:58.599657514Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #42726 [Bug]: [tools] tools.profile (coding) allowlist contains unknown entries (apply_patch, memory_search, memory_get). These entries won't match any tool unless the plugin is enabled.
- #43066 [Feature]:  tools.profile (coding) allowlist contains unknown entries (apply_patch). These entries won't match any tool unless the plugin is enabled.
- #46071 [Bug]: tools.profile (coding) allowlist contains unknown entries (apply_patch). These entries are shipped core tools but unavailable in the current runtime/provider/model/config.
- #49362 [Bug]: Why tools.profile (coding) allowlist contains unknown entries ?
- #66558 [Bug] sessions_spawn / sessions_send not available in main agent session despite tools.profile: "coding"

Open candidates:

- #45269 [Bug]: `apply_patch` is treated as an unknown/plugin-only tool in agent policy pipeline, so agent-routed runs cannot execute it
- #62516 [Bug]: tools.profile: "coding"
