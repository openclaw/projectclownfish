---
repo: openclaw/openclaw
cluster_id: ghcrawl-157043-autonomous-smoke
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
  - "#42219"
candidates:
  - "#42219"
  - "#46847"
cluster_refs:
  - "#42219"
  - "#46847"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #42219 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 157043 on 2026-04-26."
---

# GHCrawl Cluster 157043

Generated from local ghcrawl run cluster 157043 for `openclaw/openclaw`.

Display title:

> [Bug]: When `fetchUser("@me")` fails during Discord provider startup (e.g. due to transient network issues after a proxy reconnect), the bot continues running with `botUserId = undefined`. This causes multiple security and routing failures.

Cluster shape from ghcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #42219, currently open in local store
- latest member update: 2026-04-24T18:56:30.719Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42219 [Bug]: When `fetchUser("@me")` fails during Discord provider startup (e.g. due to transient network issues after a proxy reconnect), the bot continues running with `botUserId = undefined`. This causes multiple security and routing failures.
- #46847 [Bug]: Discord fetchUser failure causes botUserId = undefined
