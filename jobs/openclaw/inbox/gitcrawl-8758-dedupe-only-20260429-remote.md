---
repo: openclaw/openclaw
cluster_id: gitcrawl-8758-dedupe-only-20260429-remote
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
  - "#54818"
candidates:
  - "#55321"
cluster_refs:
  - "#54818"
  - "#55321"
  - "#56022"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #54818 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 8758 on 2026-04-29."
---

# Gitcrawl Cluster 8758

Generated from local gitcrawl run cluster 8758 for `openclaw/openclaw`.

Display title:

> CI: activate live runtime benchmark on main

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 1
- representative: #54818, currently closed in local store
- latest member update: 2026-04-27T22:51:36.614316242Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #54818 CI: activate live runtime benchmark on main
- #56022 [codex] verify handoff freshness guardrail on main

Open candidates:

- #55321 CI: add canonical live benchmark scaffold
