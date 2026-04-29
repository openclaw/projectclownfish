---
repo: openclaw/openclaw
cluster_id: gitcrawl-696-dedupe-only-20260429-remote
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
  - "#57587"
candidates:
  - "#57587"
cluster_refs:
  - "#43901"
  - "#56721"
  - "#56725"
  - "#57587"
  - "#59344"
  - "#64871"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57587 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 696 on 2026-04-29."
---

# Gitcrawl Cluster 696

Generated from local gitcrawl run cluster 696 for `openclaw/openclaw`.

Display title:

> fix(agents): deduplicate bootstrap files by path

Cluster shape from gitcrawl:

- total members: 6
- issues: 0
- pull requests: 6
- open candidates in local store: 1
- representative: #57587, currently open in local store
- latest member update: 2026-04-27T22:51:36.172744674Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43901 fix: remove L1 bootstrap snapshot cache to fix workspace file staleness
- #56721 fix(agents): deduplicate bootstrap context files by path
- #56725 fix: deduplicate bootstrap files by path to prevent accumulation on restart
- #59344 fix(agents): dedupe bootstrap context files by path
- #64871 Fix main-session workspace reload after on-disk bootstrap/context updates

Open candidates:

- #57587 fix(agents): deduplicate bootstrap files by path
