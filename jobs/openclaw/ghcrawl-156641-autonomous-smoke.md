---
repo: openclaw/openclaw
cluster_id: ghcrawl-156641-autonomous-smoke
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
  - "#45857"
candidates:
  - "#45857"
  - "#47831"
  - "#52527"
  - "#53989"
  - "#57844"
  - "#66989"
cluster_refs:
  - "#45857"
  - "#47831"
  - "#52527"
  - "#53989"
  - "#57844"
  - "#66989"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #45857 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156641 on 2026-04-26."
---

# GHCrawl Cluster 156641

Generated from local ghcrawl run cluster 156641 for `openclaw/openclaw`.

Display title:

> [Bug] Slack Socket Mode: inbound events silently dropped on v2026.3.12 / v2026.3.13 (regression from v2026.3.11)

Cluster shape from ghcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 6
- representative: #45857, currently open in local store
- latest member update: 2026-04-24T18:56:30.280Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45857 [Bug] Slack Socket Mode: inbound events silently dropped on v2026.3.12 / v2026.3.13 (regression from v2026.3.11)
- #47831 Slack Socket Mode not receiving app_mention events in channels
- #52527 [Bug]: 2026.3.13 Breaks Slack Socket Mode - needed to roll back to 2026.3.8
- #53989 Slack event dispatch broken after 2026.3.23-1 → 2026.3.23-2 update (regression)
- #57844 Slack Socket Mode: inbound events silently dropped on v2026.3.11+ (works on v2026.3.8)
- #66989 [Bug]: Slack Socket Mode connects but no inbound events are received (app_mention in channel) on 2026.4.14/macOS
