---
repo: openclaw/openclaw
cluster_id: gitcrawl-238863-dedupe-only-20260429c
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
  - "#38808"
candidates:
  - "#38808"
  - "#73972"
  - "#74001"
cluster_refs:
  - "#38808"
  - "#73972"
  - "#74001"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #38808 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238863 on 2026-04-29."
---

# Gitcrawl Cluster 238863

Generated from local gitcrawl run cluster 238863 for `openclaw/openclaw`.

Display title:

> fix(feishu): reply inside thread for P2P direct messages

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #38808, currently open in local store
- latest member update: 2026-04-29T08:43:39.151Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38808 fix(feishu): reply inside thread for P2P direct messages
- #73972 fix(feishu): reply inside P2P direct-message threads
- #74001 fix(feishu): reply inside P2P direct-message threads
