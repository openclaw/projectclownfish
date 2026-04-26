---
repo: openclaw/openclaw
cluster_id: ghcrawl-156778-autonomous-smoke
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
  - "#41957"
candidates:
  - "#40760"
  - "#41956"
  - "#41957"
cluster_refs:
  - "#40760"
  - "#41956"
  - "#41957"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #41957 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156778 on 2026-04-26."
---

# GHCrawl Cluster 156778

Generated from local ghcrawl run cluster 156778 for `openclaw/openclaw`.

Display title:

> fix(auto-reply): split typing-timeout stability fix from #41883

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #41957, currently open in local store
- latest member update: 2026-04-25T07:30:10.007Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40760 fix(auto-reply): extend typing TTL and clarify timeouts [AI]
- #41956 fix(telegram): split watchdog stability fixes from #41883
- #41957 fix(auto-reply): split typing-timeout stability fix from #41883
