---
repo: openclaw/openclaw
cluster_id: ghcrawl-156817-autonomous-smoke
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
  - "#53326"
candidates:
  - "#45760"
  - "#53326"
  - "#65509"
cluster_refs:
  - "#45760"
  - "#53326"
  - "#65509"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #53326 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156817 on 2026-04-26."
---

# GHCrawl Cluster 156817

Generated from local ghcrawl run cluster 156817 for `openclaw/openclaw`.

Display title:

> fix(workspace): store workspace-state.json in workspace root, not .openclaw/ subdir

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #53326, currently open in local store
- latest member update: 2026-04-24T18:56:28.664Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45760 fix(agents): add MEMORY.md to minimal bootstrap allowlist
- #53326 fix(workspace): store workspace-state.json in workspace root, not .openclaw/ subdir
- #65509 feat(workspace): respect OPENCLAW_STATE_DIR for workspace base path
