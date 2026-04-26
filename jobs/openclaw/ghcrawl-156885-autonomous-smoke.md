---
repo: openclaw/openclaw
cluster_id: ghcrawl-156885-autonomous-smoke
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
  - "#57997"
candidates:
  - "#57997"
  - "#58506"
  - "#58927"
cluster_refs:
  - "#57997"
  - "#58506"
  - "#58927"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #57997 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156885 on 2026-04-26."
---

# GHCrawl Cluster 156885

Generated from local ghcrawl run cluster 156885 for `openclaw/openclaw`.

Display title:

> Cron jobs ignore payload.model and run on agent default model (Opus instead of GPT-5.4)

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #57997, currently open in local store
- latest member update: 2026-04-24T18:56:25.404Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #57997 Cron jobs ignore payload.model and run on agent default model (Opus instead of GPT-5.4)
- #58506 payload.model in cron agentTurn jobs is ignored at runtime — always falls back to agent default
- #58927 [Bug]: Cron jobs ignore payload.model and agentId, always resolving to the default/main agent model
