---
repo: openclaw/openclaw
cluster_id: ghcrawl-156762-autonomous-smoke
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
  - "#69108"
candidates:
  - "#35241"
  - "#60621"
  - "#69108"
cluster_refs:
  - "#35241"
  - "#60621"
  - "#69108"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #69108 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156762 on 2026-04-26."
---

# GHCrawl Cluster 156762

Generated from local ghcrawl run cluster 156762 for `openclaw/openclaw`.

Display title:

> fix(agent): honor --session-id when --agent is present + add --new-session flag

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #69108, currently open in local store
- latest member update: 2026-04-25T07:30:10.784Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #35241 CLI: add --session-key flag to openclaw agent
- #60621 fix: allow --session-id to override --agent in agent command (fixes #60614)
- #69108 fix(agent): honor --session-id when --agent is present + add --new-session flag
