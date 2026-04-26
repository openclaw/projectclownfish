---
repo: openclaw/openclaw
cluster_id: ghcrawl-156785-autonomous-smoke
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
  - "#59070"
candidates:
  - "#41344"
  - "#59070"
  - "#65565"
cluster_refs:
  - "#41344"
  - "#59070"
  - "#65565"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #59070 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156785 on 2026-04-26."
---

# GHCrawl Cluster 156785

Generated from local ghcrawl run cluster 156785 for `openclaw/openclaw`.

Display title:

> [Bug]: GatewayRequestError: invalid config: agents: Unrecognized key: "defaultId" + permanent "unsaved config changes" when changing model on new agent

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #59070, currently open in local store
- latest member update: 2026-04-24T18:56:27.317Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41344 [Bug]: Control UI Agent form shows wrong Primary model and Save fails with GatewayRequestError: invalid config
- #59070 [Bug]: GatewayRequestError: invalid config: agents: Unrecognized key: "defaultId" + permanent "unsaved config changes" when changing model on new agent
- #65565 [Bug]: Dashboard "Set Default" for agent fails with invalid config: agents: Unrecognized key: "defaultId" and default agent falls back to first agent in agents.list
