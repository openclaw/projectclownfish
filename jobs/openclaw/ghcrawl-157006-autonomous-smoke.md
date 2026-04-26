---
repo: openclaw/openclaw
cluster_id: ghcrawl-157006-autonomous-smoke
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
  - "#40200"
candidates:
  - "#40200"
  - "#65271"
cluster_refs:
  - "#40200"
  - "#65271"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #40200 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 157006 on 2026-04-26."
---

# GHCrawl Cluster 157006

Generated from local ghcrawl run cluster 157006 for `openclaw/openclaw`.

Display title:

> fix(exec): prevent shell startup files from overriding daemon env

Cluster shape from ghcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #40200, currently open in local store
- latest member update: 2026-04-24T18:56:21.769Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40200 fix(exec): prevent shell startup files from overriding daemon env
- #65271 shell: support custom shells on Windows
