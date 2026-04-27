---
repo: openclaw/openclaw
cluster_id: ghcrawl-156614-autonomous-smoke
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
  - "#67766"
candidates:
  - "#43984"
  - "#54647"
  - "#65178"
  - "#67766"
  - "#67768"
  - "#68047"
  - "#70302"
  - "#70981"
cluster_refs:
  - "#43984"
  - "#54647"
  - "#65178"
  - "#67766"
  - "#67768"
  - "#68047"
  - "#70302"
  - "#70981"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #67766 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156614 on 2026-04-26."
---

# GHCrawl Cluster 156614

Generated from local ghcrawl run cluster 156614 for `openclaw/openclaw`.

Display title:

> fix(gateway): fall back to explicit provider config for image capability when catalog misses [AI-assisted]

Cluster shape from ghcrawl:

- total members: 8
- issues: 0
- pull requests: 8
- open candidates in local store: 8
- representative: #67766, currently open in local store
- latest member update: 2026-04-25T07:30:11.259Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #43984 fix(gateway): keep main sessions visible in active session lists
- #54647 Fix ACP session model reporting in sessions list
- #65178 fix: case-insensitive model lookup for image support resolution
- #67766 fix(gateway): fall back to explicit provider config for image capability when catalog misses [AI-assisted]
- #67768 fix(webchat): trust Qwen vision models when not found in catalog
- #68047 fix(gateway): extend image-support name fallback to direct anthropic provider
- #70302 gateway/session-utils: honor per-agent thinkingDefault in buildGatewaySessionRow
- #70981 fix(gateway): use config-resolved thinking default in session rows
