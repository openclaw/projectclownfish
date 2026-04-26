---
repo: openclaw/openclaw
cluster_id: ghcrawl-156730-autonomous-smoke
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
  - "#51584"
candidates:
  - "#51286"
  - "#51584"
  - "#53198"
  - "#53259"
cluster_refs:
  - "#51286"
  - "#51584"
  - "#53198"
  - "#53259"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #51584 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156730 on 2026-04-26."
---

# GHCrawl Cluster 156730

Generated from local ghcrawl run cluster 156730 for `openclaw/openclaw`.

Display title:

> fix(sandbox): fall back to static channel registry for sandbox explain channel resolution

Cluster shape from ghcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 4
- representative: #51584, currently open in local store
- latest member update: 2026-04-24T18:56:29.421Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #51286 fix(sandbox): normalize non-agent-scoped session keys in sandbox explain
- #51584 fix(sandbox): fall back to static channel registry for sandbox explain channel resolution
- #53198 [Bug]: Discord elevated allowFrom fallback from channels.discord.allowFrom does not work on 2026.3.22
- #53259 fix(elevated): restore Discord allowFrom fallback
