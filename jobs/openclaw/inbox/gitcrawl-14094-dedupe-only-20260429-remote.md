---
repo: openclaw/openclaw
cluster_id: gitcrawl-14094-dedupe-only-20260429-remote
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
  - "#57249"
candidates:
  - "#55412"
cluster_refs:
  - "#48063"
  - "#55412"
  - "#57249"
  - "#66130"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57249 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14094 on 2026-04-29."
---

# Gitcrawl Cluster 14094

Generated from local gitcrawl run cluster 14094 for `openclaw/openclaw`.

Display title:

> [BUG] Gateway drain ignores embedded runs causing 5+ min restart stalls

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 1
- representative: #57249, currently closed in local store
- latest member update: 2026-04-28T05:49:56.354294405Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #48063 fix(gateway): full process restart fails to respawn when forced drain timeout fires with active embedded runs
- #57249 [BUG] Gateway drain ignores embedded runs causing 5+ min restart stalls
- #66130 [Bug]: Gateway drain blocks ALL channels for 5+ minutes when config change requires restart

Open candidates:

- #55412 GatewayDrainingError should auto-retry, not surface to user
