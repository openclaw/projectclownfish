---
repo: openclaw/openclaw
cluster_id: gitcrawl-2457-dedupe-only-20260429-remote
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
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#47992"
candidates:
  - "#47992"
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
require_fix_before_close: false
canonical_hint: "gitcrawl representative #47992 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2457 on 2026-04-29."
---

# Gitcrawl Cluster 2457

Generated from local gitcrawl run cluster 2457 for `openclaw/openclaw`.

Display title:

> feat(ui): preserve chat draft per session on switch

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 2
- representative: #47992, currently open in local store
- latest member update: 2026-04-28T04:44:24.637474479Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #54649 webchat: persist draft messages on session switch + add stop/cancel button for agent turns

Open candidates:

- #47992 feat(ui): preserve chat draft per session on switch
- #54655 webchat: persist per-session drafts on session switch + fix stop button visibility
