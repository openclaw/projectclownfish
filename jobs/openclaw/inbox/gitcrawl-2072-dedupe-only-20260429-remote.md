---
repo: openclaw/openclaw
cluster_id: gitcrawl-2072-dedupe-only-20260429-remote
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
  - "#68315"
candidates:
  - "#61238"
cluster_refs:
  - "#46539"
  - "#49170"
  - "#61238"
  - "#63732"
  - "#68315"
  - "#69083"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #68315 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2072 on 2026-04-29."
---

# Gitcrawl Cluster 2072

Generated from local gitcrawl run cluster 2072 for `openclaw/openclaw`.

Display title:

> [Bug]: Daily session reset stopped working in 4.14+ (regression from 4.5)

Cluster shape from gitcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 1
- representative: #68315, currently closed in local store
- latest member update: 2026-04-28T18:04:42.440988425Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #46539 [Bug]: resetByType daily mode never resets channel conversation sessions — mergeSessionEntry() refreshes updatedAt before freshness check
- #49170 [Bug]: Daily session reset wipes actively used sessions at the daily boundary
- #63732 [Bug]: 2026.4.8 regression: daily atHour reset no longer fires, causing unbounded session growth
- #68315 [Bug]: Daily session reset stopped working in 4.14+ (regression from 4.5)
- #69083 [Bug]: session.reset is not ocurring.

Open candidates:

- #61238 [Bug]: Critical Data Loss Due to Silent Daily Session Reset (No user warning, no opt-out discovery) #42100
