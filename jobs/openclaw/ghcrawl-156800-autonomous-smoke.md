---
repo: openclaw/openclaw
cluster_id: ghcrawl-156800-autonomous-smoke
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
  - "#44919"
candidates:
  - "#43632"
  - "#44616"
  - "#44919"
cluster_refs:
  - "#43632"
  - "#44616"
  - "#44919"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #44919 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156800 on 2026-04-26."
---

# GHCrawl Cluster 156800

Generated from local ghcrawl run cluster 156800 for `openclaw/openclaw`.

Display title:

> [Bug]: Anthropic OAuth credentials desync between ~/.claude/.credentials.json and auth-profiles.json — silent subagent failures

Cluster shape from ghcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- representative: #44919, currently open in local store
- latest member update: 2026-04-24T18:56:30.453Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #43632 fix(auth): sync Claude CLI credentials during OAuth refresh
- #44616 Bug: Anthropic OAuth refresh intermittently fails across chats/topics
- #44919 [Bug]: Anthropic OAuth credentials desync between ~/.claude/.credentials.json and auth-profiles.json — silent subagent failures
