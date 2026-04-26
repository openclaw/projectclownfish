---
repo: openclaw/openclaw
cluster_id: ghcrawl-156786-autonomous-smoke
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
  - "#41355"
candidates:
  - "#41355"
  - "#44447"
  - "#44449"
cluster_refs:
  - "#41355"
  - "#44447"
  - "#44449"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #41355 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156786 on 2026-04-26."
---

# GHCrawl Cluster 156786

Generated from local ghcrawl run cluster 156786 for `openclaw/openclaw`.

Display title:

> Discord: ThreadStarterBody re-injected on every turn (echo contamination)

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #41355, currently open in local store
- latest member update: 2026-04-24T18:56:31.282Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41355 Discord: ThreadStarterBody re-injected on every turn (echo contamination)
- #44447 [Bug] v2026.3.11: Discord thread context re-injected every turn (context pollution + cache bust)
- #44449 [Bug] v2026.3.11: Discord thread metadata re-injected every turn (context pollution)
