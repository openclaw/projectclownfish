---
repo: openclaw/openclaw
cluster_id: ghcrawl-156934-autonomous-smoke
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
  - "#8147"
candidates:
  - "#8147"
  - "#39821"
cluster_refs:
  - "#8147"
  - "#39821"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #8147 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156934 on 2026-04-26."
---

# GHCrawl Cluster 156934

Generated from local ghcrawl run cluster 156934 for `openclaw/openclaw`.

Display title:

> [Feature]:   Add configurable send hotkey for WebChat (Cmd+Enter instead of Enter)

Cluster shape from ghcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #8147, currently open in local store
- latest member update: 2026-04-26T00:46:51.568Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #8147 [Feature]:   Add configurable send hotkey for WebChat (Cmd+Enter instead of Enter)
- #39821 [Feature]: Add Cmd+Enter (Mac) / Ctrl+Enter (Windows) shortcut to send messages in Control UI
