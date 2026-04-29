---
repo: openclaw/openclaw
cluster_id: gitcrawl-14436-dedupe-only-20260429-remote
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
  - "#54475"
candidates:
  - "#54475"
  - "#54774"
  - "#65641"
cluster_refs:
  - "#54475"
  - "#54774"
  - "#65641"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #54475 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14436 on 2026-04-29."
---

# Gitcrawl Cluster 14436

Generated from local gitcrawl run cluster 14436 for `openclaw/openclaw`.

Display title:

> fix(gateway): tolerate transient pre-hello closes in CLI calls

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #54475, currently open in local store
- latest member update: 2026-04-28T22:51:07.342731582Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #54475 fix(gateway): tolerate transient pre-hello closes in CLI calls
- #54774 fix(gateway): ignore transient pre-hello close in one-shot calls
- #65641 Improve local gateway RPC diagnostics
