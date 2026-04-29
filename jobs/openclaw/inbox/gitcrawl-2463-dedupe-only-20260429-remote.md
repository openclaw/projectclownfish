---
repo: openclaw/openclaw
cluster_id: gitcrawl-2463-dedupe-only-20260429-remote
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
  - "#69065"
candidates:
  - "#48855"
cluster_refs:
  - "#48855"
  - "#69035"
  - "#69065"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #69065 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2463 on 2026-04-29."
---

# Gitcrawl Cluster 2463

Generated from local gitcrawl run cluster 2463 for `openclaw/openclaw`.

Display title:

> [Bug]: Android: Gateway service install not supported

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #69065, currently closed in local store
- latest member update: 2026-04-28T05:49:59.057998888Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #69035 [Bug]: Android/Termux gateway crashes during mDNS discovery on rmnet1; no reliable workaround in v2026.3.24
- #69065 [Bug]: Android: Gateway service install not supported

Open candidates:

- #48855 [Feature]: Android Gateway Support
