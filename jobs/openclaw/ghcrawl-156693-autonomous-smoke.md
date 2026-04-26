---
repo: openclaw/openclaw
cluster_id: ghcrawl-156693-autonomous-smoke
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
  - "#51292"
candidates:
  - "#25789"
  - "#51287"
  - "#51292"
  - "#60151"
cluster_refs:
  - "#25789"
  - "#51287"
  - "#51292"
  - "#60151"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #51292 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156693 on 2026-04-26."
---

# GHCrawl Cluster 156693

Generated from local ghcrawl run cluster 156693 for `openclaw/openclaw`.

Display title:

> feat: configurable exec approval timeout via approvals.timeoutMs

Cluster shape from ghcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 4
- representative: #51292, currently open in local store
- latest member update: 2026-04-24T18:56:29.915Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #25789 tools(exec): add configurable approval timeout
- #51287 [Feature]: Configurable Exec Approval timeout
- #51292 feat: configurable exec approval timeout via approvals.timeoutMs
- #60151 [Feature] Configurable exec tool timeout upper bound in openclaw.json
