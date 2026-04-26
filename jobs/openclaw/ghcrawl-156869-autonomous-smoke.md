---
repo: openclaw/openclaw
cluster_id: ghcrawl-156869-autonomous-smoke
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
  - "#54408"
candidates:
  - "#54408"
  - "#58956"
  - "#63865"
cluster_refs:
  - "#54408"
  - "#58956"
  - "#63865"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #54408 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156869 on 2026-04-26."
---

# GHCrawl Cluster 156869

Generated from local ghcrawl run cluster 156869 for `openclaw/openclaw`.

Display title:

> [Bug]: Pre-compaction memory flush leaks into main session as user messages and causes compaction loop

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #54408, currently open in local store
- latest member update: 2026-04-24T18:56:27.681Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #54408 [Bug]: Pre-compaction memory flush leaks into main session as user messages and causes compaction loop
- #58956 [Bug]: Pre-compaction memory flush leaks into chat UI and blocks the user’s active turn in 2026.3.31
- #63865 Critical: Pre-compaction flush prompts replace user messages in web UI
