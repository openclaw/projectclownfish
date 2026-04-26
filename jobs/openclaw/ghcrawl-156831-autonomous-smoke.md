---
repo: openclaw/openclaw
cluster_id: ghcrawl-156831-autonomous-smoke
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
  - "#56516"
candidates:
  - "#47975"
  - "#56516"
  - "#67902"
cluster_refs:
  - "#47975"
  - "#56516"
  - "#67902"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #56516 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156831 on 2026-04-26."
---

# GHCrawl Cluster 156831

Generated from local ghcrawl run cluster 156831 for `openclaw/openclaw`.

Display title:

> Subagent sessions persist in web UI after completion

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #56516, currently open in local store
- latest member update: 2026-04-25T07:30:09.419Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #47975 Subagent sessions persist after completion, main session becomes unresponsive
- #56516 Subagent sessions persist in web UI after completion
- #67902 subagent sessions left as "running" in sessions.json after crash — no cleanup mechanism
