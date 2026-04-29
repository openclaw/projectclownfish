---
repo: openclaw/openclaw
cluster_id: gitcrawl-2419-dedupe-only-20260429-remote
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
  - "#44023"
candidates:
  - "#44023"
  - "#45871"
  - "#52400"
cluster_refs:
  - "#44023"
  - "#45871"
  - "#52400"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #44023 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2419 on 2026-04-29."
---

# Gitcrawl Cluster 2419

Generated from local gitcrawl run cluster 2419 for `openclaw/openclaw`.

Display title:

> Increase agent-to-agent ping-pong cap

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #44023, currently open in local store
- latest member update: 2026-04-28T11:40:35.821179177Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #44023 Increase agent-to-agent ping-pong cap
- #45871 ping pong max value
- #52400 feat(session): raise maxPingPongTurns ceiling from 5 to 20 (#52382)
