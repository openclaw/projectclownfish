---
repo: openclaw/openclaw
cluster_id: ghcrawl-156698-autonomous-smoke
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
  - "#38789"
candidates:
  - "#38789"
  - "#43526"
  - "#43789"
  - "#51471"
cluster_refs:
  - "#38789"
  - "#43526"
  - "#43789"
  - "#51471"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #38789 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156698 on 2026-04-26."
---

# GHCrawl Cluster 156698

Generated from local ghcrawl run cluster 156698 for `openclaw/openclaw`.

Display title:

> fix(agents): rebuild sandbox skill prompt paths

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #38789, currently open in local store
- latest member update: 2026-04-24T18:56:29.254Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38789 fix(agents): rebuild sandbox skill prompt paths
- #43526 fix: remap skill paths to sandbox workspace in non-main sessions
- #43789 [AI-assisted] fix(agents): compact sandbox skill paths
- #51471 Refresh skill prompts inside sandbox workspaces
