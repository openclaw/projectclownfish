---
repo: openclaw/openclaw
cluster_id: ghcrawl-156823-autonomous-smoke
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
  - "#46683"
candidates:
  - "#46683"
  - "#54753"
  - "#67724"
cluster_refs:
  - "#46683"
  - "#54753"
  - "#67724"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #46683 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156823 on 2026-04-26."
---

# GHCrawl Cluster 156823

Generated from local ghcrawl run cluster 156823 for `openclaw/openclaw`.

Display title:

> Slack interactive reply button clicks not routed to agent sessions

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #46683, currently open in local store
- latest member update: 2026-04-24T18:56:29.394Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #46683 Slack interactive reply button clicks not routed to agent sessions
- #54753 Slack interactive button clicks not routed to agent session (message tool + interactive param)
- #67724 [Bug]: interactiveReplies button clicks not waking agent session (event received, no dispatch)
