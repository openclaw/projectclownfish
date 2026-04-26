---
repo: openclaw/openclaw
cluster_id: ghcrawl-156960-autonomous-smoke
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
  - "#34565"
candidates:
  - "#34565"
  - "#39558"
cluster_refs:
  - "#34565"
  - "#39558"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #34565 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156960 on 2026-04-26."
---

# GHCrawl Cluster 156960

Generated from local ghcrawl run cluster 156960 for `openclaw/openclaw`.

Display title:

> fix(feishu): strip reaction suffix from message_id before API calls

Cluster shape from ghcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #34565, currently open in local store
- latest member update: 2026-04-24T18:56:17.788Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #34565 fix(feishu): strip reaction suffix from message_id before API calls
- #39558 fix(feishu): strip reaction suffix from message_id before API calls
