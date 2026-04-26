---
repo: openclaw/openclaw
cluster_id: ghcrawl-156964-autonomous-smoke
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
  - "#37855"
candidates:
  - "#37855"
  - "#47903"
cluster_refs:
  - "#37855"
  - "#47903"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #37855 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156964 on 2026-04-26."
---

# GHCrawl Cluster 156964

Generated from local ghcrawl run cluster 156964 for `openclaw/openclaw`.

Display title:

> [Feature]: Extend Internal Hooks to support cron lifecycle events

Cluster shape from ghcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #37855, currently open in local store
- latest member update: 2026-04-24T18:56:32.957Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #37855 [Feature]: Extend Internal Hooks to support cron lifecycle events
- #47903 feat(hooks): add cron event type to internal hook system
