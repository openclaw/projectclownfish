---
repo: openclaw/openclaw
cluster_id: ghcrawl-156995-autonomous-smoke
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
  - "#39726"
candidates:
  - "#39726"
  - "#46926"
cluster_refs:
  - "#39726"
  - "#46926"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #39726 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156995 on 2026-04-26."
---

# GHCrawl Cluster 156995

Generated from local ghcrawl run cluster 156995 for `openclaw/openclaw`.

Display title:

> agents: notify chat sessions on empty bg success

Cluster shape from ghcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #39726, currently open in local store
- latest member update: 2026-04-24T18:56:28.764Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39726 agents: notify chat sessions on empty bg success
- #46926 fix: notify agent session on background exec completion by default
