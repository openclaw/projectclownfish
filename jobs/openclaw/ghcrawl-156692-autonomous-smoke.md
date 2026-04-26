---
repo: openclaw/openclaw
cluster_id: ghcrawl-156692-autonomous-smoke
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
  - "#37630"
candidates:
  - "#20950"
  - "#37630"
  - "#41206"
  - "#70531"
cluster_refs:
  - "#20950"
  - "#37630"
  - "#41206"
  - "#70531"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #37630 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156692 on 2026-04-26."
---

# GHCrawl Cluster 156692

Generated from local ghcrawl run cluster 156692 for `openclaw/openclaw`.

Display title:

> feat(cron): hierarchical job store — one file per cron job in cron/jobs/ directory

Cluster shape from ghcrawl:

- total members: 4
- issues: 3
- pull requests: 1
- open candidates in local store: 4
- representative: #37630, currently open in local store
- latest member update: 2026-04-26T00:46:51.632Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #20950 [Feature]: cron jobs.d/ directory support (one file per job, for NixOS/GitOps declarative setups)
- #37630 feat(cron): hierarchical job store — one file per cron job in cron/jobs/ directory
- #41206 feat(cron): hierarchical job store — one file per cron job in cron/jobs/ directory
- #70531 [Feature]: Split jobs.json into per-job config files
