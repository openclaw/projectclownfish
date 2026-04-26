---
repo: openclaw/openclaw
cluster_id: ghcrawl-156804-autonomous-smoke
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
  - "#46494"
candidates:
  - "#44354"
  - "#46494"
  - "#59287"
cluster_refs:
  - "#44354"
  - "#46494"
  - "#59287"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #46494 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156804 on 2026-04-26."
---

# GHCrawl Cluster 156804

Generated from local ghcrawl run cluster 156804 for `openclaw/openclaw`.

Display title:

> [Bug]: `openclaw health --json` reports Telegram `running: false` / `tokenSource: "none"` while `channels status --json` reports `running: true` / `tokenSource: "config"`

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #46494, currently open in local store
- latest member update: 2026-04-24T18:56:30.830Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #44354 Bug: openclaw health --json reports stale Discord state
- #46494 [Bug]: `openclaw health --json` reports Telegram `running: false` / `tokenSource: "none"` while `channels status --json` reports `running: true` / `tokenSource: "config"`
- #59287 [Bug]: openclaw health --json reports telegram.running=false while probe succeeds and status --deep shows Telegram OK
