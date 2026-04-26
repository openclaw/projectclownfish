---
repo: openclaw/openclaw
cluster_id: ghcrawl-156749-autonomous-smoke
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
  - "#66876"
candidates:
  - "#64825"
  - "#66876"
  - "#67052"
  - "#67053"
cluster_refs:
  - "#64825"
  - "#66876"
  - "#67052"
  - "#67053"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #66876 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156749 on 2026-04-26."
---

# GHCrawl Cluster 156749

Generated from local ghcrawl run cluster 156749 for `openclaw/openclaw`.

Display title:

> TUI: status bar stuck on "streaming" after response completes

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #66876, currently open in local store
- latest member update: 2026-04-24T18:56:21.997Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #64825 TUI stuck on 'streaming' indicator after run completes — finalizeRun() doesn't transition UI when wasActiveRun is false
- #66876 TUI: status bar stuck on "streaming" after response completes
- #67052 TUI streaming indicator stays active long after response content finishes
- #67053 TUI streaming indicator stays active long after response content finishes
