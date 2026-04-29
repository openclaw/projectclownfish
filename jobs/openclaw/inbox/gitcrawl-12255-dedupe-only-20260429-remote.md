---
repo: openclaw/openclaw
cluster_id: gitcrawl-12255-dedupe-only-20260429-remote
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
  - "#65894"
candidates:
  - "#52261"
  - "#53459"
  - "#65894"
cluster_refs:
  - "#52261"
  - "#53459"
  - "#65894"
  - "#68702"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65894 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 12255 on 2026-04-29."
---

# Gitcrawl Cluster 12255

Generated from local gitcrawl run cluster 12255 for `openclaw/openclaw`.

Display title:

> fix: add local build context to docker-compose

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 3
- representative: #65894, currently open in local store
- latest member update: 2026-04-27T22:51:33.756058885Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #68702 fix(docker): enable host.docker.internal for local providers

Open candidates:

- #52261 1. add WAHA comments
- #53459 fix(config): replace hardcoded API keys with env var substitution
- #65894 fix: add local build context to docker-compose
