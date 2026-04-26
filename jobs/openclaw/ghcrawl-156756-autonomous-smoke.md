---
repo: openclaw/openclaw
cluster_id: ghcrawl-156756-autonomous-smoke
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
  - "#62461"
candidates:
  - "#13616"
  - "#45993"
  - "#62461"
cluster_refs:
  - "#13616"
  - "#45993"
  - "#62461"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #62461 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156756 on 2026-04-26."
---

# GHCrawl Cluster 156756

Generated from local ghcrawl run cluster 156756 for `openclaw/openclaw`.

Display title:

> [Feature]: Disaster-recovery-grade backup/restore for OpenClaw state

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #62461, currently open in local store
- latest member update: 2026-04-26T00:46:51.820Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #13616 Add backup/restore utility for config, cron jobs, and session history
- #45993 Feature Request: Cross-platform migration tool (migrate export/import)
- #62461 [Feature]: Disaster-recovery-grade backup/restore for OpenClaw state
