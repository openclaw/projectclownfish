---
repo: openclaw/openclaw
cluster_id: gitcrawl-238821-dedupe-only-20260429c
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
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#57306"
candidates:
  - "#57306"
  - "#57900"
  - "#58305"
  - "#58539"
  - "#65519"
cluster_refs:
  - "#57306"
  - "#57900"
  - "#58305"
  - "#58539"
  - "#65519"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57306 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238821 on 2026-04-29."
---

# Gitcrawl Cluster 238821

Generated from local gitcrawl run cluster 238821 for `openclaw/openclaw`.

Display title:

> sessions_spawn model parameter triggers LiveSessionModelSwitchError instead of setting initial model

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #57306, currently open in local store
- latest member update: 2026-04-24T18:56:26.259Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #57306 sessions_spawn model parameter triggers LiveSessionModelSwitchError instead of setting initial model
- #57900 Subagent runs don't use model fallback chain on 429/rate-limit errors
- #58305 Regression v2026.3.28: LiveSessionModelSwitchError when spawning subagent with different model than parent
- #58539 [Bug]: Spawned subagent with explicit model can fail before first attempt with LiveSessionModelSwitchError
- #65519 sessions_spawn model override silently ignored — sub-agents always use primary model
