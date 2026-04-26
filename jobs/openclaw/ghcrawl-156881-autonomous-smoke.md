---
repo: openclaw/openclaw
cluster_id: ghcrawl-156881-autonomous-smoke
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
  - "#57230"
candidates:
  - "#57230"
  - "#59063"
  - "#65316"
cluster_refs:
  - "#57230"
  - "#59063"
  - "#65316"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #57230 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156881 on 2026-04-26."
---

# GHCrawl Cluster 156881

Generated from local ghcrawl run cluster 156881 for `openclaw/openclaw`.

Display title:

> [Bug]: sandboxed agents fail file access and file sending for host absolute workspace paths

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #57230, currently open in local store
- latest member update: 2026-04-24T18:56:26.297Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #57230 [Bug]: sandboxed agents fail file access and file sending for host absolute workspace paths
- #59063 Sandboxed agents cannot reliably consume downloaded files because host workspace paths are returned instead of /workspace paths
- #65316 [Bug]: Sandboxed sessions can expose write-capable file tools even when no effective writable workspace target is available
