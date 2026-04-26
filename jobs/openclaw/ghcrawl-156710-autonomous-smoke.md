---
repo: openclaw/openclaw
cluster_id: ghcrawl-156710-autonomous-smoke
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
  - "#41862"
candidates:
  - "#41862"
  - "#43616"
  - "#43620"
  - "#49957"
cluster_refs:
  - "#41862"
  - "#43616"
  - "#43620"
  - "#49957"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #41862 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156710 on 2026-04-26."
---

# GHCrawl Cluster 156710

Generated from local ghcrawl run cluster 156710 for `openclaw/openclaw`.

Display title:

> export-session HTML renders blank — template placeholders broken by formatter

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #41862, currently open in local store
- latest member update: 2026-04-24T18:56:31.574Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41862 export-session HTML renders blank — template placeholders broken by formatter
- #43616 export-html template.html 被格式化工具错误处理导致导出失败
- #43620 export-html template.html malformed by formatter causing export failure
- #49957 Bug: Session export HTML is empty due to reformatted JS placeholders in template
