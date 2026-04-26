---
repo: openclaw/openclaw
cluster_id: ghcrawl-156760-autonomous-smoke
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
  - "#69979"
candidates:
  - "#34528"
  - "#66406"
  - "#69979"
cluster_refs:
  - "#34528"
  - "#66406"
  - "#69979"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #69979 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156760 on 2026-04-26."
---

# GHCrawl Cluster 156760

Generated from local ghcrawl run cluster 156760 for `openclaw/openclaw`.

Display title:

> [Bug] Feishu reaction returns HTTP 400 - emoji reaction fails while text send works

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #69979, currently open in local store
- latest member update: 2026-04-24T18:56:20.132Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #34528 Feishu: reaction message_id with suffix causes 400 error on API calls
- #66406 [Bug]: Feishu reactions API 返回 reaction type is invalid (code: 231001)
- #69979 [Bug] Feishu reaction returns HTTP 400 - emoji reaction fails while text send works
