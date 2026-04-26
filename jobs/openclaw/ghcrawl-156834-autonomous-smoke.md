---
repo: openclaw/openclaw
cluster_id: ghcrawl-156834-autonomous-smoke
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
  - "#48578"
candidates:
  - "#48578"
  - "#50435"
  - "#59431"
cluster_refs:
  - "#48578"
  - "#50435"
  - "#59431"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #48578 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156834 on 2026-04-26."
---

# GHCrawl Cluster 156834

Generated from local ghcrawl run cluster 156834 for `openclaw/openclaw`.

Display title:

> fix(feishu): recover UTF-8 filenames from Latin-1 encoded Content-Disposition

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #48578, currently open in local store
- latest member update: 2026-04-24T18:56:28.907Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #48578 fix(feishu): recover UTF-8 filenames from Latin-1 encoded Content-Disposition
- #50435 fix(feishu): recover Chinese filenames from Latin-1 mojibake in Content-Disposition
- #59431 fix(feishu): correct Chinese filename encoding in attachments
