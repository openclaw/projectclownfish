---
repo: openclaw/openclaw
cluster_id: ghcrawl-156709-autonomous-smoke
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
  - "#41764"
candidates:
  - "#41764"
  - "#49258"
  - "#50170"
  - "#65464"
cluster_refs:
  - "#41764"
  - "#49258"
  - "#50170"
  - "#65464"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #41764 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156709 on 2026-04-26."
---

# GHCrawl Cluster 156709

Generated from local ghcrawl run cluster 156709 for `openclaw/openclaw`.

Display title:

> [Bug] Cron job reports lastError even when message was delivered

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #41764, currently open in local store
- latest member update: 2026-04-24T18:56:32.282Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41764 [Bug] Cron job reports lastError even when message was delivered
- #49258 Bug: Cron job state inconsistency - lastDelivered: true but lastRunStatus: error
- #50170 [Bug]: Cron jobs report status: "error" with "Message failed" despite successful Discord delivery
- #65464 Cron lastError persists when later retry delivers successfully
