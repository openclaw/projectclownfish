---
repo: openclaw/openclaw
cluster_id: gitcrawl-2966-dedupe-only-20260429-remote
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
  - "#47243"
candidates:
  - "#47243"
  - "#48396"
  - "#53445"
cluster_refs:
  - "#47243"
  - "#48396"
  - "#53445"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #47243 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2966 on 2026-04-29."
---

# Gitcrawl Cluster 2966

Generated from local gitcrawl run cluster 2966 for `openclaw/openclaw`.

Display title:

> feat(ui): add timestamp and preview to session list

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #47243, currently open in local store
- latest member update: 2026-04-28T18:04:42.690577275Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #47243 feat(ui): add timestamp and preview to session list
- #48396 feat(ui): add message preview to session list
- #53445 Control UI: show full date-time in session list (fixes #53088)
