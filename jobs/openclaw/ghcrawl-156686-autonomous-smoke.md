---
repo: openclaw/openclaw
cluster_id: ghcrawl-156686-autonomous-smoke
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
  - "#69645"
candidates:
  - "#58352"
  - "#63593"
  - "#67702"
  - "#69421"
  - "#69645"
cluster_refs:
  - "#58352"
  - "#63593"
  - "#67702"
  - "#69421"
  - "#69645"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #69645 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156686 on 2026-04-26."
---

# GHCrawl Cluster 156686

Generated from local ghcrawl run cluster 156686 for `openclaw/openclaw`.

Display title:

> fix: skip update when already on target version

Cluster shape from ghcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #69645, currently open in local store
- latest member update: 2026-04-24T18:56:24.903Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #58352 fix(update-cli): respawn plugin refresh after self-update
- #63593 fix(cli): avoid false downgrade prompt for latest tag
- #67702 fix(update): block git-mode update when gateway is running
- #69421 update: skip package install when already on target version (#69412)
- #69645 fix: skip update when already on target version
