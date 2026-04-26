---
repo: openclaw/openclaw
cluster_id: ghcrawl-156740-autonomous-smoke
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
  - "#58772"
candidates:
  - "#58259"
  - "#58772"
  - "#58858"
  - "#59510"
cluster_refs:
  - "#58259"
  - "#58772"
  - "#58858"
  - "#59510"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #58772 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156740 on 2026-04-26."
---

# GHCrawl Cluster 156740

Generated from local ghcrawl run cluster 156740 for `openclaw/openclaw`.

Display title:

> [Feature]: Support allow-always exec security policy

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #58772, currently open in local store
- latest member update: 2026-04-25T08:49:23.593Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #58259 [Feature]: Add exec command allowlist or trusted paths configuration
- #58772 [Feature]: Support allow-always exec security policy
- #58858 Feature request: Allow users to configure exec approval policy (strict/moderate/permissive)
- #59510 [Feature]: Simplify exec approval process
