---
repo: openclaw/openclaw
cluster_id: ghcrawl-156667-autonomous-smoke
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
  - "#46721"
candidates:
  - "#44123"
  - "#46721"
  - "#50584"
  - "#62298"
  - "#67545"
cluster_refs:
  - "#44123"
  - "#46721"
  - "#50584"
  - "#62298"
  - "#67545"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #46721 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156667 on 2026-04-26."
---

# GHCrawl Cluster 156667

Generated from local ghcrawl run cluster 156667 for `openclaw/openclaw`.

Display title:

> fix(hooks): use local timezone for session-memory filenames

Cluster shape from ghcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #46721, currently open in local store
- latest member update: 2026-04-24T18:56:29.121Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #44123 fix(hooks): use session creation date for memory filename
- #46721 fix(hooks): use local timezone for session-memory filenames
- #50584 feat(hooks): add LLM synthesis mode and canonical daily file for session-memory
- #62298 fix(hooks): align session-memory filename with canonical YYYY-MM-DD.md convention
- #67545 Hooks: stabilize session-memory filenames
