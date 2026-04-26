---
repo: openclaw/openclaw
cluster_id: ghcrawl-156758-autonomous-smoke
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
  - "#50558"
candidates:
  - "#18160"
  - "#37651"
  - "#50558"
cluster_refs:
  - "#18160"
  - "#37651"
  - "#50558"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #50558 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156758 on 2026-04-26."
---

# GHCrawl Cluster 156758

Generated from local ghcrawl run cluster 156758 for `openclaw/openclaw`.

Display title:

> Add shell/exec payload type for cron jobs

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #50558, currently open in local store
- latest member update: 2026-04-26T00:46:51.719Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #18160 [Feature]: Direct Exec Mode for Cron Jobs
- #37651 Feature request: Add lightweight shell payload type for cron jobs
- #50558 Add shell/exec payload type for cron jobs
