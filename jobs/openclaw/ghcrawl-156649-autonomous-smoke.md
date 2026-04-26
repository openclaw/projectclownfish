---
repo: openclaw/openclaw
cluster_id: ghcrawl-156649-autonomous-smoke
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
  - "#65519"
candidates:
  - "#57306"
  - "#57428"
  - "#58305"
  - "#58539"
  - "#61359"
  - "#65519"
cluster_refs:
  - "#57306"
  - "#57428"
  - "#58305"
  - "#58539"
  - "#61359"
  - "#65519"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #65519 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156649 on 2026-04-26."
---

# GHCrawl Cluster 156649

Generated from local ghcrawl run cluster 156649 for `openclaw/openclaw`.

Display title:

> sessions_spawn model override silently ignored — sub-agents always use primary model

Cluster shape from ghcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 6
- representative: #65519, currently open in local store
- latest member update: 2026-04-24T18:56:26.259Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #57306 sessions_spawn model parameter triggers LiveSessionModelSwitchError instead of setting initial model
- #57428 [Bug]: sessions_spawn with runtime="subagent" does not respect agent's model.primary config
- #58305 Regression v2026.3.28: LiveSessionModelSwitchError when spawning subagent with different model than parent
- #58539 [Bug]: Spawned subagent with explicit model can fail before first attempt with LiveSessionModelSwitchError
- #61359 [Bug]: Sub-agent model override not working - always falls back to MiniMax-M2.7
- #65519 sessions_spawn model override silently ignored — sub-agents always use primary model
