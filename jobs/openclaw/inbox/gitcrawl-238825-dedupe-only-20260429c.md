---
repo: openclaw/openclaw
cluster_id: gitcrawl-238825-dedupe-only-20260429c
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
  - "#73546"
candidates:
  - "#59018"
  - "#59839"
  - "#60549"
  - "#68162"
  - "#73546"
cluster_refs:
  - "#59018"
  - "#59839"
  - "#60549"
  - "#68162"
  - "#73546"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #73546 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238825 on 2026-04-29."
---

# Gitcrawl Cluster 238825

Generated from local gitcrawl run cluster 238825 for `openclaw/openclaw`.

Display title:

> Bug: TUI reconnect creates new session instead of resuming previous one, causing silent conversation reset

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #73546, currently open in local store
- latest member update: 2026-04-28T17:52:27.881Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #59018 [Bug]: TUI session resets spontaneously — loses all context and switches agent without user action
- #59839 [Bug]: Control UI/WebChat previous chat becomes inaccessible after New session
- #60549 TUI sessions lost on reconnect — gateway returns 'No session found' for existing session
- #68162 [Bug] Control UI (webchat) creates new session on WebSocket reconnection instead of resuming
- #73546 Bug: TUI reconnect creates new session instead of resuming previous one, causing silent conversation reset
