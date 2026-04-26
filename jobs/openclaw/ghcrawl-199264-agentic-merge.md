---
repo: openclaw/openclaw
cluster_id: ghcrawl-199264-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#42873"
candidates:
  - "#42873"
  - "#46626"
  - "#66755"
  - "#69394"
  - "#69472"
cluster_refs:
  - "#42873"
  - "#46626"
  - "#66755"
  - "#69394"
  - "#69472"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #42873 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 199264 on 2026-04-26."
---

# GHCrawl Cluster 199264

Generated from local ghcrawl run cluster 199264 for `openclaw/openclaw`.

Display title:

> fix(reply): suppress entire message when NO_REPLY appears on its own line

Cluster shape from ghcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #42873, currently open in local store
- latest member update: 2026-04-24T18:56:28.738Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42873 fix(reply): suppress entire message when NO_REPLY appears on its own line
- #46626 fix(reply): use isSilentTokenOnOwnLine in all delivery paths
- #66755 fix(auto-reply): detect silent NO_REPLY wrapped in model reasoning
- #69394 fix(auto-reply): suppress entire payload when trailing NO_REPLY token present
- #69472 auto-reply: suppress reasoning-prefaced silent replies
