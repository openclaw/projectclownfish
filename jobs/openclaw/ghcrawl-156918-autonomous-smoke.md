---
repo: openclaw/openclaw
cluster_id: ghcrawl-156918-autonomous-smoke
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
  - "#65584"
candidates:
  - "#65584"
  - "#66227"
  - "#67439"
cluster_refs:
  - "#65584"
  - "#66227"
  - "#67439"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #65584 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156918 on 2026-04-26."
---

# GHCrawl Cluster 156918

Generated from local ghcrawl run cluster 156918 for `openclaw/openclaw`.

Display title:

> Bug: cron CLI commands can succeed but hang instead of exiting cleanly

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #65584, currently open in local store
- latest member update: 2026-04-24T18:56:21.572Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #65584 Bug: cron CLI commands can succeed but hang instead of exiting cleanly
- #66227 [Bug]: CLI exit hang bug: cron list / agents list hang after data output
- #67439 Cron CLI commands extremely slow (~20s) and exit abnormally after successful mutations
