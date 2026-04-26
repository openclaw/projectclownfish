---
repo: openclaw/openclaw
cluster_id: ghcrawl-156899-autonomous-smoke
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
  - "#65982"
candidates:
  - "#60188"
  - "#65643"
  - "#65982"
cluster_refs:
  - "#60188"
  - "#65643"
  - "#65982"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #65982 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156899 on 2026-04-26."
---

# GHCrawl Cluster 156899

Generated from local ghcrawl run cluster 156899 for `openclaw/openclaw`.

Display title:

> Multi-gateway: `--profile` flag routes restart/status to wrong LaunchAgent

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #65982, currently open in local store
- latest member update: 2026-04-24T18:56:24.227Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #60188 CLI --profile flag does not propagate gateway.port to RPC probe/service discovery
- #65643 `--profile` flag does not clear OPENCLAW_LAUNCHD_LABEL, causing gateway status to resolve wrong plist
- #65982 Multi-gateway: `--profile` flag routes restart/status to wrong LaunchAgent
