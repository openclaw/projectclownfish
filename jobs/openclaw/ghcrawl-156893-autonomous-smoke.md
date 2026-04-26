---
repo: openclaw/openclaw
cluster_id: ghcrawl-156893-autonomous-smoke
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
  - "#60265"
candidates:
  - "#59702"
  - "#60265"
  - "#60929"
cluster_refs:
  - "#59702"
  - "#60265"
  - "#60929"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #60265 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156893 on 2026-04-26."
---

# GHCrawl Cluster 156893

Generated from local ghcrawl run cluster 156893 for `openclaw/openclaw`.

Display title:

> sessions_spawn fails with "gateway closed (1008): pairing required" in local gateway mode

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #60265, currently open in local store
- latest member update: 2026-04-24T18:56:24.230Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #59702 sessions_spawn and internal RPC fail with 'gateway closed (1008): pairing required' on Windows Server 2025
- #60265 sessions_spawn fails with "gateway closed (1008): pairing required" in local gateway mode
- #60929 sessions_spawn subagent fails with 1008 pairing required - never enters pending queue
