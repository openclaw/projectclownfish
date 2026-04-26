---
repo: openclaw/openclaw
cluster_id: ghcrawl-156854-autonomous-smoke
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
  - "#51521"
candidates:
  - "#51521"
  - "#60217"
  - "#61034"
cluster_refs:
  - "#51521"
  - "#60217"
  - "#61034"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #51521 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156854 on 2026-04-26."
---

# GHCrawl Cluster 156854

Generated from local ghcrawl run cluster 156854 for `openclaw/openclaw`.

Display title:

> Feature Request: Support custom reasoning language / 中文推理语言支持

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #51521, currently open in local store
- latest member update: 2026-04-24T18:56:24.253Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #51521 Feature Request: Support custom reasoning language / 中文推理语言支持
- #60217 [Feature] Reasoning output language localization support for /reasoning command
- #61034 [Feature Request] Add reasoning language option for non-English users
