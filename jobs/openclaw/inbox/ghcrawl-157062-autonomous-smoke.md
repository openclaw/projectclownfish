---
repo: openclaw/openclaw
cluster_id: ghcrawl-157062-autonomous-smoke
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
  - "#43109"
candidates:
  - "#43109"
  - "#64181"
cluster_refs:
  - "#43109"
  - "#64181"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #43109 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 157062 on 2026-04-26."
---

# GHCrawl Cluster 157062

Generated from local ghcrawl run cluster 157062 for `openclaw/openclaw`.

Display title:

> fix: resolve model alias in llm-slug-generator hook

Cluster shape from ghcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #43109, currently open in local store
- latest member update: 2026-04-24T18:56:28.356Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #43109 fix: resolve model alias in llm-slug-generator hook
- #64181 fix(hooks): reject error responses from slug generator and strip post-truncation dashes
