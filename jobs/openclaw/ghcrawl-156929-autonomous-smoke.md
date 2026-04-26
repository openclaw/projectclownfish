---
repo: openclaw/openclaw
cluster_id: ghcrawl-156929-autonomous-smoke
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
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#68161"
candidates:
  - "#68160"
  - "#68161"
  - "#68227"
cluster_refs:
  - "#68160"
  - "#68161"
  - "#68227"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #68161 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156929 on 2026-04-26."
---

# GHCrawl Cluster 156929

Generated from local ghcrawl run cluster 156929 for `openclaw/openclaw`.

Display title:

> fix(gateway/schema): drop stale Type.Optional wrapper on hello-ok auth

Cluster shape from ghcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #68161, currently open in local store
- latest member update: 2026-04-24T18:56:19.874Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #68160 [Bug]: stale Type.Optional wrapper on HelloOkSchema.auth after #67810
- #68161 fix(gateway/schema): drop stale Type.Optional wrapper on hello-ok auth
- #68227 fix(protocol): require hello-ok auth
