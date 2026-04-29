---
repo: openclaw/openclaw
cluster_id: gitcrawl-13730-dedupe-only-20260429-remote
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
  - "#39915"
candidates:
  - "#38255"
  - "#49135"
cluster_refs:
  - "#38255"
  - "#39915"
  - "#49135"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39915 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13730 on 2026-04-29."
---

# Gitcrawl Cluster 13730

Generated from local gitcrawl run cluster 13730 for `openclaw/openclaw`.

Display title:

> feat(telegram): optimize streaming throttle for smoother user experience

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 2
- representative: #39915, currently closed in local store
- latest member update: 2026-04-28T15:00:42.951489936Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39915 feat(telegram): optimize streaming throttle for smoother user experience

Open candidates:

- #38255 feat(telegram): expose streamThrottleMs and minInitialChars config for preview streaming
- #49135 fix(telegram): add block streaming coalesce defaults to prevent message splitting
