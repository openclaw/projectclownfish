---
repo: openclaw/openclaw
cluster_id: ghcrawl-156672-autonomous-smoke
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
  - "#62381"
candidates:
  - "#47266"
  - "#47280"
  - "#54381"
  - "#62381"
  - "#64049"
cluster_refs:
  - "#47266"
  - "#47280"
  - "#54381"
  - "#62381"
  - "#64049"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #62381 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156672 on 2026-04-26."
---

# GHCrawl Cluster 156672

Generated from local ghcrawl run cluster 156672 for `openclaw/openclaw`.

Display title:

> [Bug]: Subsystem File Logger Writes to Stale Date-Rolled Log File

Cluster shape from ghcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #62381, currently open in local store
- latest member update: 2026-04-24T18:56:30.641Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #47266 [Bug]: Logfile rotation ineffective
- #47280 [Bug] Logfile rotation ineffective - logger transport retains stale file reference
- #54381 [Bug]: Subsystem logger caches file path on first call, logs written to wrong date file after midnight
- #62381 [Bug]: Subsystem File Logger Writes to Stale Date-Rolled Log File
- #64049 Subsystem loggers silently write to stale log file after midnight rollover
