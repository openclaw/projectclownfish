---
repo: openclaw/openclaw
cluster_id: ghcrawl-156748-autonomous-smoke
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
  - "#65476"
candidates:
  - "#63146"
  - "#65476"
  - "#68121"
  - "#69458"
cluster_refs:
  - "#63146"
  - "#65476"
  - "#68121"
  - "#69458"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #65476 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156748 on 2026-04-26."
---

# GHCrawl Cluster 156748

Generated from local ghcrawl run cluster 156748 for `openclaw/openclaw`.

Display title:

> fix(memory-wiki): persist capability in plugin registry cache rollback paths

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #65476, currently open in local store
- latest member update: 2026-04-24T18:56:22.752Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #63146 fix(memory): stabilize corpus supplement ordering for prompt-cache and performance stability
- #65476 fix(memory-wiki): persist capability in plugin registry cache rollback paths
- #68121 fix(memory): preserve publicArtifacts when multiple memory plugins register capability
- #69458 fix(memory): keep active memory capability visible across plugin scopes
