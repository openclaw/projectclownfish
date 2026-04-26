---
repo: openclaw/openclaw
cluster_id: ghcrawl-156719-autonomous-smoke
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
  - "#55978"
candidates:
  - "#45114"
  - "#45536"
  - "#47245"
  - "#55978"
cluster_refs:
  - "#45114"
  - "#45536"
  - "#47245"
  - "#55978"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #55978 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156719 on 2026-04-26."
---

# GHCrawl Cluster 156719

Generated from local ghcrawl run cluster 156719 for `openclaw/openclaw`.

Display title:

> ui: fix cron workspace form sticky offset using CSS variable

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #55978, currently open in local store
- latest member update: 2026-04-24T18:56:28.777Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45114 ui(chat): remove unsupported line-clamp declaration
- #45536 fix: remove unknown line-clamp property to resolve CSS error
- #47245 fix(ui): distinguish command palette hover and selection states
- #55978 ui: fix cron workspace form sticky offset using CSS variable
