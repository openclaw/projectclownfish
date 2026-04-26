---
repo: openclaw/openclaw
cluster_id: ghcrawl-157030-autonomous-smoke
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
  - "#41632"
candidates:
  - "#41632"
  - "#41771"
cluster_refs:
  - "#41632"
  - "#41771"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #41632 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 157030 on 2026-04-26."
---

# GHCrawl Cluster 157030

Generated from local ghcrawl run cluster 157030 for `openclaw/openclaw`.

Display title:

> [Feature]: image 工具支持配置图片压缩质量

Cluster shape from ghcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #41632, currently open in local store
- latest member update: 2026-04-24T18:56:32.378Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41632 [Feature]: image 工具支持配置图片压缩质量
- #41771 [Feature]: Add image compression config to image tool
