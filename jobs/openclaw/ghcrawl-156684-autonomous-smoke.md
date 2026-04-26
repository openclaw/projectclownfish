---
repo: openclaw/openclaw
cluster_id: ghcrawl-156684-autonomous-smoke
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
  - "#57587"
candidates:
  - "#56721"
  - "#56725"
  - "#57587"
  - "#59344"
  - "#64871"
cluster_refs:
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
canonical_hint: "ghcrawl representative #57587 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156684 on 2026-04-26."
---

# GHCrawl Cluster 156684

Generated from local ghcrawl run cluster 156684 for `openclaw/openclaw`.

Display title:

> fix(agents): deduplicate bootstrap files by path

Cluster shape from ghcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #57587, currently open in local store
- latest member update: 2026-04-24T18:56:26.491Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #56721 fix(agents): deduplicate bootstrap context files by path
- #56725 fix: deduplicate bootstrap files by path to prevent accumulation on restart
- #57587 fix(agents): deduplicate bootstrap files by path
- #59344 fix(agents): dedupe bootstrap context files by path
- #64871 Fix main-session workspace reload after on-disk bootstrap/context updates
