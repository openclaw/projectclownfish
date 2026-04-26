---
repo: openclaw/openclaw
cluster_id: ghcrawl-156712-autonomous-smoke
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
  - "#42192"
candidates:
  - "#42192"
  - "#45900"
  - "#48673"
  - "#58796"
cluster_refs:
  - "#42192"
  - "#45900"
  - "#48673"
  - "#58796"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #42192 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156712 on 2026-04-26."
---

# GHCrawl Cluster 156712

Generated from local ghcrawl run cluster 156712 for `openclaw/openclaw`.

Display title:

> plugins: suppress false duplicate-id warning across origins

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #42192, currently open in local store
- latest member update: 2026-04-24T18:56:28.900Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42192 plugins: suppress false duplicate-id warning across origins
- #45900 fix(plugins): suppress false-positive duplicate id warning for channel registration pattern
- #48673 fix(plugins): suppress duplicate warning for npm-installed plugin overriding bundled
- #58796 Plugins: dedupe manifest registry rows and suppress benign bundled shadow warnings
