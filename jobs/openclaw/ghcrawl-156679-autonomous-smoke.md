---
repo: openclaw/openclaw
cluster_id: ghcrawl-156679-autonomous-smoke
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
  - "#50796"
candidates:
  - "#50796"
  - "#50920"
  - "#51288"
  - "#53588"
  - "#59697"
cluster_refs:
  - "#50796"
  - "#50920"
  - "#51288"
  - "#53588"
  - "#59697"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #50796 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156679 on 2026-04-26."
---

# GHCrawl Cluster 156679

Generated from local ghcrawl run cluster 156679 for `openclaw/openclaw`.

Display title:

> fix(control-ui): hide relevant-memories scaffolding in chat output

Cluster shape from ghcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #50796, currently open in local store
- latest member update: 2026-04-24T18:56:29.368Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #50796 fix(control-ui): hide relevant-memories scaffolding in chat output
- #50920 fix(ui): hide assistant internal scaffolding in webchat
- #51288 fix: strip relevant-memories blocks from user messages in Control UI
- #53588 fix: strip <relevant-memories> tags from user messages in WebChat UI
- #59697 fix: strip <relevant-memories> injected by memory plugin from user messages in WebUI
