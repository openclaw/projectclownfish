---
repo: openclaw/openclaw
cluster_id: ghcrawl-156658-autonomous-smoke
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
  - "#39350"
candidates:
  - "#39350"
  - "#41964"
  - "#47739"
  - "#62845"
  - "#69084"
cluster_refs:
  - "#39350"
  - "#41964"
  - "#47739"
  - "#62845"
  - "#69084"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #39350 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156658 on 2026-04-26."
---

# GHCrawl Cluster 156658

Generated from local ghcrawl run cluster 156658 for `openclaw/openclaw`.

Display title:

> fix(gateway): suppress NO_REPLY lead fragment in chat final message

Cluster shape from ghcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #39350, currently open in local store
- latest member update: 2026-04-24T18:56:28.231Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39350 fix(gateway): suppress NO_REPLY lead fragment in chat final message
- #41964 fix(tui): render external-channel session messages live
- #47739 gateway: suppress colon-ending narration flush before tool calls
- #62845 fix(webchat): suppress NO_REPLY prefix fragments and case variants in chat stream
- #69084 fix(webchat): hide heartbeat chat output using showAlerts
