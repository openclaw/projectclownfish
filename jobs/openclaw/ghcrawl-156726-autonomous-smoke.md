---
repo: openclaw/openclaw
cluster_id: ghcrawl-156726-autonomous-smoke
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
  - "#50158"
candidates:
  - "#50076"
  - "#50158"
  - "#50159"
  - "#50160"
cluster_refs:
  - "#50076"
  - "#50158"
  - "#50159"
  - "#50160"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #50158 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156726 on 2026-04-26."
---

# GHCrawl Cluster 156726

Generated from local ghcrawl run cluster 156726 for `openclaw/openclaw`.

Display title:

> fix: add format validation for gateway.nodes.denyCommands

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #50158, currently open in local store
- latest member update: 2026-04-24T18:56:29.096Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #50076 fix(config): validate denyCommands after gateway.nodes writes
- #50158 fix: add format validation for gateway.nodes.denyCommands
- #50159 fix: add path existence check for config set command
- #50160 fix: throw error on Discord delivery failure instead of returning unknown
