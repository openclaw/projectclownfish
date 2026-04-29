---
repo: openclaw/openclaw
cluster_id: gitcrawl-14045-dedupe-only-20260429-remote
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
  - "#54435"
candidates:
  - "#41685"
  - "#43737"
  - "#48108"
  - "#50646"
  - "#54435"
cluster_refs:
  - "#39450"
  - "#41685"
  - "#43737"
  - "#45754"
  - "#48108"
  - "#50478"
  - "#50491"
  - "#50646"
  - "#52175"
  - "#54435"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #54435 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14045 on 2026-04-29."
---

# Gitcrawl Cluster 14045

Generated from local gitcrawl run cluster 14045 for `openclaw/openclaw`.

Display title:

> [Bug]: sessions_list API only returns main session — all other sessions missing from dashboard and API

Cluster shape from gitcrawl:

- total members: 10
- issues: 10
- pull requests: 0
- open candidates in local store: 5
- representative: #54435, currently open in local store
- latest member update: 2026-04-28T21:55:43.8092639Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39450 Control UI: main:local session disappears from dropdown after switching to main:main and refreshing
- #45754 [Bug]:  Gateway sessions_list RPC doesn't return agent:main:main session
- #50478 sessions_list in Discord channels appears scoped to current session instead of showing full active session set
- #50491 sessions_list returns only current session while openclaw status shows all active sessions
- #52175 [Bug]: Isolated agentTurn sessions not registered in sessions.json, invisible in Control UI

Open candidates:

- #41685 [Bug]: Control UI displays sessions from unregistered agents
- #43737 [Bug]: 'main' session is missing from the dropdown menu (only 'heartbeat' is visible)
- #48108 Control UI sessions dropdown shows deleted sessions from cache
- #50646 [Feature]: sessions.list returns misleading results when visibility is restricted (no indication of scope)
- #54435 [Bug]: sessions_list API only returns main session — all other sessions missing from dashboard and API
