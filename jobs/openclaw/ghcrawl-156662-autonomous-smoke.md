---
repo: openclaw/openclaw
cluster_id: ghcrawl-156662-autonomous-smoke
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
  - "#59118"
candidates:
  - "#41172"
  - "#41803"
  - "#49550"
  - "#59118"
  - "#61349"
cluster_refs:
  - "#41172"
  - "#41803"
  - "#49550"
  - "#59118"
  - "#61349"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #59118 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156662 on 2026-04-26."
---

# GHCrawl Cluster 156662

Generated from local ghcrawl run cluster 156662 for `openclaw/openclaw`.

Display title:

> fix: suppress raw JSON parse errors from leaking to Discord channels (#59076) [AI-assisted]

Cluster shape from ghcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #59118, currently open in local store
- latest member update: 2026-04-24T18:56:29.010Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41172 fix(errors): recognize Groq tool call validation error format
- #41803 fix(agents): suppress unrecognized errors from user surface
- #49550 fix: handle MiniMax HTTP 520 and api_error body without 'internal server error'
- #59118 fix: suppress raw JSON parse errors from leaking to Discord channels (#59076) [AI-assisted]
- #61349 fix: suppress raw JSON parse errors from truncated tool call streams
