---
repo: openclaw/openclaw
cluster_id: ghcrawl-156683-autonomous-smoke
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
  - "#57755"
candidates:
  - "#53961"
  - "#57730"
  - "#57755"
  - "#62453"
  - "#70589"
cluster_refs:
  - "#53961"
  - "#57730"
  - "#57755"
  - "#62453"
  - "#70589"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #57755 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156683 on 2026-04-26."
---

# GHCrawl Cluster 156683

Generated from local ghcrawl run cluster 156683 for `openclaw/openclaw`.

Display title:

> feat(delivery): surface deliveryStatus in --json output

Cluster shape from ghcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 5
- representative: #57755, currently open in local store
- latest member update: 2026-04-24T18:56:26.086Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #53961 fix(delivery): track and log silent delivery failures
- #57730 feat(delivery): surface deliveryStatus in --json output for openclaw agent --deliver
- #57755 feat(delivery): surface deliveryStatus in --json output
- #62453 fix: write JSON envelope to stdout in local agent --json mode
- #70589 Agent CLI: write local JSON to stdout
