---
repo: openclaw/openclaw
cluster_id: gitcrawl-238876-dedupe-only-20260429c
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
  - "#41880"
candidates:
  - "#41880"
  - "#41946"
  - "#68514"
cluster_refs:
  - "#41880"
  - "#41946"
  - "#68514"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41880 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238876 on 2026-04-29."
---

# Gitcrawl Cluster 238876

Generated from local gitcrawl run cluster 238876 for `openclaw/openclaw`.

Display title:

> fix(feishu): preserve bare URL links with underscores

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #41880, currently open in local store
- latest member update: 2026-04-28T10:53:10.970Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41880 fix(feishu): preserve bare URL links with underscores
- #41946 fix(feishu): escape underscores in markdown URLs to prevent display issues
- #68514 fix(feishu): preserve URL boundaries in post markdown messages
