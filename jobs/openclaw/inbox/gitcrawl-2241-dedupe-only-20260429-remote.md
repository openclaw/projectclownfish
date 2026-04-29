---
repo: openclaw/openclaw
cluster_id: gitcrawl-2241-dedupe-only-20260429-remote
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
  - "#57086"
candidates:
  - "#45044"
  - "#57086"
  - "#57126"
cluster_refs:
  - "#45044"
  - "#47839"
  - "#57086"
  - "#57126"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57086 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2241 on 2026-04-29."
---

# Gitcrawl Cluster 2241

Generated from local gitcrawl run cluster 2241 for `openclaw/openclaw`.

Display title:

> fix(gateway): avoid pinning stale session ids in agent runs

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 3
- representative: #57086, currently open in local store
- latest member update: 2026-04-28T17:25:21.503856417Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #47839 fix: gateway agent method bypasses session daily/idle reset

Open candidates:

- #45044 fix(session): preserve mid-turn messages on gateway restart
- #57086 fix(gateway): avoid pinning stale session ids in agent runs
- #57126 fix: rewrite sessionFile to match new sessionId on gateway session reset
