---
repo: openclaw/openclaw
cluster_id: ghcrawl-156678-autonomous-smoke
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
  - "#69287"
candidates:
  - "#50795"
  - "#69269"
  - "#69270"
  - "#69286"
  - "#69287"
cluster_refs:
  - "#50795"
  - "#69269"
  - "#69270"
  - "#69286"
  - "#69287"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #69287 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156678 on 2026-04-26."
---

# GHCrawl Cluster 156678

Generated from local ghcrawl run cluster 156678 for `openclaw/openclaw`.

Display title:

> Bug: Session token count not reset after compaction

Cluster shape from ghcrawl:

- total members: 5
- issues: 4
- pull requests: 1
- open candidates in local store: 5
- representative: #69287, currently open in local store
- latest member update: 2026-04-25T11:13:27.707Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #50795 Bug: Context token count always shows 0 after compaction
- #69269 Bug: compaction/reset paths can break session invariants (messageProvider + token accounting)
- #69270 fix(compaction): restore session invariants across compaction and reset
- #69286 Bug: session totalTokens not reset after compaction causes infinite safeguard loop
- #69287 Bug: Session token count not reset after compaction
