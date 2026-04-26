---
repo: openclaw/openclaw
cluster_id: ghcrawl-156728-autonomous-smoke
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
  - "#50929"
candidates:
  - "#50929"
  - "#57887"
  - "#67036"
  - "#68518"
cluster_refs:
  - "#50929"
  - "#57887"
  - "#67036"
  - "#68518"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #50929 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156728 on 2026-04-26."
---

# GHCrawl Cluster 156728

Generated from local ghcrawl run cluster 156728 for `openclaw/openclaw`.

Display title:

> fix(ui): suppress leaked TUI debug lines in chat

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #50929, currently open in local store
- latest member update: 2026-04-24T18:56:29.158Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #50929 fix(ui): suppress leaked TUI debug lines in chat
- #57887 fix(ui): clear pending run state on cross-run final to fix stuck typing indicator
- #67036 fix(ui): filter leaked control ui transcript rows
- #68518 fix(ui): filter system event messages from chat transcript (#68508)
