---
repo: openclaw/openclaw
cluster_id: gitcrawl-238879-dedupe-only-20260429c
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
  - "#54435"
candidates:
  - "#43737"
  - "#54435"
  - "#59933"
cluster_refs:
  - "#43737"
  - "#54435"
  - "#59933"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #54435 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238879 on 2026-04-29."
---

# Gitcrawl Cluster 238879

Generated from local gitcrawl run cluster 238879 for `openclaw/openclaw`.

Display title:

> [Bug]: sessions_list API only returns main session — all other sessions missing from dashboard and API

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #54435, currently open in local store
- latest member update: 2026-04-28T17:52:26.542Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #43737 [Bug]: 'main' session is missing from the dropdown menu (only 'heartbeat' is visible)
- #54435 [Bug]: sessions_list API only returns main session — all other sessions missing from dashboard and API
- #59933 [Bug]: sessions_list does not surface group sessions for the same agent
