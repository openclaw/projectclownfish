---
repo: openclaw/openclaw
cluster_id: ghcrawl-207042-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#57587"
candidates:
  - "#43901"
  - "#57587"
  - "#59344"
  - "#64871"
cluster_refs:
  - "#43901"
  - "#57587"
  - "#59344"
  - "#64871"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #57587 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 207042 on 2026-04-26."
---

# GHCrawl Cluster 207042

Generated from local ghcrawl run cluster 207042 for `openclaw/openclaw`.

Display title:

> fix(agents): deduplicate bootstrap files by path

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #57587, currently open in local store
- latest member update: 2026-04-24T18:56:28.439Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #43901 fix: remove L1 bootstrap snapshot cache to fix workspace file staleness
- #57587 fix(agents): deduplicate bootstrap files by path
- #59344 fix(agents): dedupe bootstrap context files by path
- #64871 Fix main-session workspace reload after on-disk bootstrap/context updates
