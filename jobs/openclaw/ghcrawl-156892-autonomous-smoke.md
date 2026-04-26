---
repo: openclaw/openclaw
cluster_id: ghcrawl-156892-autonomous-smoke
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
  - "#59626"
candidates:
  - "#59625"
  - "#59626"
  - "#64243"
cluster_refs:
  - "#59625"
  - "#59626"
  - "#64243"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #59626 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156892 on 2026-04-26."
---

# GHCrawl Cluster 156892

Generated from local ghcrawl run cluster 156892 for `openclaw/openclaw`.

Display title:

> Bug: obfuscation scanner blocks commands despite tools.exec.security: full (v2026.4.1)

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #59626, currently open in local store
- latest member update: 2026-04-24T18:56:24.041Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #59625 Bug: obfuscation scanner blocks commands despite tools.exec.security: full
- #59626 Bug: obfuscation scanner blocks commands despite tools.exec.security: full (v2026.4.1)
- #64243 Mattermost deploy probe can still hit exec approval timeout in v2026.3.24 despite tools.exec.ask=off
