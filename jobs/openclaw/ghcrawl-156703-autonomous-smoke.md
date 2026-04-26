---
repo: openclaw/openclaw
cluster_id: ghcrawl-156703-autonomous-smoke
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
  - "#40091"
candidates:
  - "#40091"
  - "#58317"
  - "#65330"
  - "#67591"
cluster_refs:
  - "#40091"
  - "#58317"
  - "#65330"
  - "#67591"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #40091 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156703 on 2026-04-26."
---

# GHCrawl Cluster 156703

Generated from local ghcrawl run cluster 156703 for `openclaw/openclaw`.

Display title:

> 🤖 fix(session): clear model override on /new to restore agent default

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #40091, currently open in local store
- latest member update: 2026-04-25T07:30:10.491Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40091 🤖 fix(session): clear model override on /new to restore agent default
- #58317 session: clear model overrides on /reset and /new (#58302)
- #65330 fix(sessions): clear model override on /new and /reset
- #67591 fix(session): clear auto-fallback model overrides on /new and /reset
