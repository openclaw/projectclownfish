---
repo: openclaw/openclaw
cluster_id: gitcrawl-9417-dedupe-only-20260429-remote
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
  - "#56982"
candidates:
  - "#65201"
cluster_refs:
  - "#43561"
  - "#56982"
  - "#57087"
  - "#65201"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #56982 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 9417 on 2026-04-29."
---

# Gitcrawl Cluster 9417

Generated from local gitcrawl run cluster 9417 for `openclaw/openclaw`.

Display title:

> [Bug]: openclaw doctor reporting gateway error when trusted proxy auth mode is enabled

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 1
- representative: #56982, currently closed in local store
- latest member update: 2026-04-28T05:49:56.307252662Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43561 trusted-proxy mode is broken with nginx — proxy headers are never evaluated, making production multi-node deployments insecure
- #56982 [Bug]: openclaw doctor reporting gateway error when trusted proxy auth mode is enabled
- #57087 Trusted-proxy mode lacks safety guardrails when upstream authentication is missing

Open candidates:

- #65201 doctor false positive warning on Gateway auth token handled in secrets
