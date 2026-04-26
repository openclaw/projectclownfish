---
repo: openclaw/openclaw
cluster_id: ghcrawl-157044-autonomous-smoke
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
  - "#42245"
candidates:
  - "#42245"
  - "#54307"
cluster_refs:
  - "#42245"
  - "#54307"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #42245 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 157044 on 2026-04-26."
---

# GHCrawl Cluster 157044

Generated from local ghcrawl run cluster 157044 for `openclaw/openclaw`.

Display title:

> fix(cron): warn when --agent is not specified on cron add

Cluster shape from ghcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #42245, currently open in local store
- latest member update: 2026-04-24T18:56:28.254Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42245 fix(cron): warn when --agent is not specified on cron add
- #54307 fix(cron): infer agentId from workspace when adding jobs
