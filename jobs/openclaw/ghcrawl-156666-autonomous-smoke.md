---
repo: openclaw/openclaw
cluster_id: ghcrawl-156666-autonomous-smoke
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
  - "#59681"
candidates:
  - "#43211"
  - "#59681"
  - "#59932"
  - "#62100"
  - "#69029"
cluster_refs:
  - "#43211"
  - "#59681"
  - "#59932"
  - "#62100"
  - "#69029"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #59681 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156666 on 2026-04-26."
---

# GHCrawl Cluster 156666

Generated from local ghcrawl run cluster 156666 for `openclaw/openclaw`.

Display title:

> fix(agents): resolve model aliases in sessions_spawn

Cluster shape from ghcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #59681, currently open in local store
- latest member update: 2026-04-24T18:56:28.392Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #43211 fix: accept hyphen-stripped provider variants in model allowlist
- #59681 fix(agents): resolve model aliases in sessions_spawn
- #59932 fix: protect active subagent sessions from maintenance pruning
- #62100 fix: resolve OpenRouter native slash model refs
- #69029 fix: resolve model alias P1/P2 review feedback
