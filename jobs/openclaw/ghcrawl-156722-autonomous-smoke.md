---
repo: openclaw/openclaw
cluster_id: ghcrawl-156722-autonomous-smoke
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
  - "#46703"
candidates:
  - "#46703"
  - "#55963"
  - "#64990"
  - "#67568"
cluster_refs:
  - "#46703"
  - "#55963"
  - "#64990"
  - "#67568"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #46703 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156722 on 2026-04-26."
---

# GHCrawl Cluster 156722

Generated from local ghcrawl run cluster 156722 for `openclaw/openclaw`.

Display title:

> Bug: session-memory hook uses UTC date for filenames instead of local timezone

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #46703, currently open in local store
- latest member update: 2026-04-24T18:56:30.770Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #46703 Bug: session-memory hook uses UTC date for filenames instead of local timezone
- #55963 session-memory hook: UTC date in filename + subagent_ended not handled
- #64990 Bug: session-memory hook uses UTC date instead of local timezone for daily memory filenames
- #67568 Session memory files use UTC timestamps, causing date mismatch with local timezone
