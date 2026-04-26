---
repo: openclaw/openclaw
cluster_id: ghcrawl-156717-autonomous-smoke
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
  - "#45048"
candidates:
  - "#45048"
  - "#46398"
  - "#50071"
  - "#62167"
cluster_refs:
  - "#45048"
  - "#46398"
  - "#50071"
  - "#62167"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #45048 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156717 on 2026-04-26."
---

# GHCrawl Cluster 156717

Generated from local ghcrawl run cluster 156717 for `openclaw/openclaw`.

Display title:

> [Feature Request]: Persistent context usage indicator in chat window

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #45048, currently open in local store
- latest member update: 2026-04-24T18:56:31.015Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45048 [Feature Request]: Persistent context usage indicator in chat window
- #46398 [Feature]: Add persistent token usage indicator to Control UI / WebChat
- #50071 Feature Request: Context usage bar above chat input in Control UI
- #62167 [Feature]: token usage widged in chat UI
