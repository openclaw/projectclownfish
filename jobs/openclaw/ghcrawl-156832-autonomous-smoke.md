---
repo: openclaw/openclaw
cluster_id: ghcrawl-156832-autonomous-smoke
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
  - "#54655"
candidates:
  - "#47992"
  - "#54649"
  - "#54655"
cluster_refs:
  - "#47992"
  - "#54649"
  - "#54655"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #54655 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156832 on 2026-04-26."
---

# GHCrawl Cluster 156832

Generated from local ghcrawl run cluster 156832 for `openclaw/openclaw`.

Display title:

> webchat: persist per-session drafts on session switch + fix stop button visibility

Cluster shape from ghcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #54655, currently open in local store
- latest member update: 2026-04-24T18:56:28.842Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #47992 feat(ui): preserve chat draft per session on switch
- #54649 webchat: persist draft messages on session switch + add stop/cancel button for agent turns
- #54655 webchat: persist per-session drafts on session switch + fix stop button visibility
