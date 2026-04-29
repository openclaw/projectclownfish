---
repo: openclaw/openclaw
cluster_id: gitcrawl-2339-dedupe-only-20260429-remote
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
  - "#39220"
candidates:
  - "#39191"
cluster_refs:
  - "#39191"
  - "#39220"
  - "#39774"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39220 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2339 on 2026-04-29."
---

# Gitcrawl Cluster 2339

Generated from local gitcrawl run cluster 2339 for `openclaw/openclaw`.

Display title:

> fix(synology-chat): respect SYNOLOGY_RATE_LIMIT=0 by using ?? instead of ||

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- representative: #39220, currently closed in local store
- latest member update: 2026-04-25T08:47:53.679Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39220 fix(synology-chat): respect SYNOLOGY_RATE_LIMIT=0 by using ?? instead of ||
- #39774 fix(synology-chat): preserve 0 rate limit and fallback invalid env to default

Open candidates:

- #39191 bug: synology-chat ignores SYNOLOGY_RATE_LIMIT=0 (parseInt || 30 truthy check)
