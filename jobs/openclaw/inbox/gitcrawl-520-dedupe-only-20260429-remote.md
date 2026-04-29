---
repo: openclaw/openclaw
cluster_id: gitcrawl-520-dedupe-only-20260429-remote
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
  - "#39476"
candidates:
  - "#39476"
  - "#62872"
cluster_refs:
  - "#39476"
  - "#62814"
  - "#62872"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39476 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 520 on 2026-04-29."
---

# Gitcrawl Cluster 520

Generated from local gitcrawl run cluster 520 for `openclaw/openclaw`.

Display title:

> A2A sessions_send: target agent can call sessions_send back, causing duplicate messages

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 2
- representative: #39476, currently open in local store
- latest member update: 2026-04-28T22:51:06.905333541Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #62814 sessions_send A2A flow ping-pong causes duplicate messages in persistent sessions

Open candidates:

- #39476 A2A sessions_send: target agent can call sessions_send back, causing duplicate messages
- #62872 sessions_send A2A flow ping-pong causes duplicate messages in persistent sessions
