---
repo: openclaw/openclaw
cluster_id: ghcrawl-156856-autonomous-smoke
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
  - "#51596"
candidates:
  - "#51596"
  - "#59650"
  - "#67153"
cluster_refs:
  - "#51596"
  - "#59650"
  - "#67153"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #51596 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156856 on 2026-04-26."
---

# GHCrawl Cluster 156856

Generated from local ghcrawl run cluster 156856 for `openclaw/openclaw`.

Display title:

> docs: fix custom skill naming example

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #51596, currently open in local store
- latest member update: 2026-04-24T18:56:29.245Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #51596 docs: fix custom skill naming example
- #59650 docs(skills): add advanced features section to creating-skills guide
- #67153 Update creating-skills.md
