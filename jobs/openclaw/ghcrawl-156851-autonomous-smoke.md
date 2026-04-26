---
repo: openclaw/openclaw
cluster_id: ghcrawl-156851-autonomous-smoke
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
  - "#51251"
candidates:
  - "#51251"
  - "#66334"
  - "#68472"
cluster_refs:
  - "#51251"
  - "#66334"
  - "#68472"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #51251 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156851 on 2026-04-26."
---

# GHCrawl Cluster 156851

Generated from local ghcrawl run cluster 156851 for `openclaw/openclaw`.

Display title:

> Session modelOverride persists across gateway restarts, silently overrides config default

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #51251, currently open in local store
- latest member update: 2026-04-25T17:12:43.595Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #51251 Session modelOverride persists across gateway restarts, silently overrides config default
- #66334 [Bug] Session model_change record persists and silently overrides agent primary model during session lifetime
- #68472 [Bug]: openclaw agent explicit-session turns lose session model overrides before the next turn
