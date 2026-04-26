---
repo: openclaw/openclaw
cluster_id: ghcrawl-156746-autonomous-smoke
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
  - "#63045"
candidates:
  - "#63045"
  - "#63072"
  - "#63078"
  - "#63081"
cluster_refs:
  - "#63045"
  - "#63072"
  - "#63078"
  - "#63081"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #63045 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156746 on 2026-04-26."
---

# GHCrawl Cluster 156746

Generated from local ghcrawl run cluster 156746 for `openclaw/openclaw`.

Display title:

> fix(device-pairing): guard against array-typed state files in loadState

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #63045, currently open in local store
- latest member update: 2026-04-25T07:30:09.421Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #63045 fix(device-pairing): guard against array-typed state files in loadState
- #63072 fix: guard loadState against array-typed pending/paired JSON files
- #63078 fix: guard loadState against array-typed state files
- #63081 fix(gateway): guard loadState against array-typed pairing state files
