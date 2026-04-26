---
repo: openclaw/openclaw
cluster_id: ghcrawl-156954-autonomous-smoke
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
  - "#29736"
candidates:
  - "#29736"
  - "#62917"
cluster_refs:
  - "#29736"
  - "#62917"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #29736 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156954 on 2026-04-26."
---

# GHCrawl Cluster 156954

Generated from local ghcrawl run cluster 156954 for `openclaw/openclaw`.

Display title:

> Exec approvals path ignores active state root and writes to ~/.openclaw

Cluster shape from ghcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #29736, currently open in local store
- latest member update: 2026-04-24T18:56:22.984Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #29736 Exec approvals path ignores active state root and writes to ~/.openclaw
- #62917 fix: exec-approvals does not respect OPENCLAW_STATE_DIR, causing duplicate state-dir doctor warning
