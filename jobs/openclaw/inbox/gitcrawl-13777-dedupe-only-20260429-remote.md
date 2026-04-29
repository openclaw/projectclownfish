---
repo: openclaw/openclaw
cluster_id: gitcrawl-13777-dedupe-only-20260429-remote
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
  - "#68188"
candidates:
  - "#68188"
cluster_refs:
  - "#60442"
  - "#61773"
  - "#68188"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #68188 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13777 on 2026-04-29."
---

# Gitcrawl Cluster 13777

Generated from local gitcrawl run cluster 13777 for `openclaw/openclaw`.

Display title:

> Matrix: bot receives messages but they are not delivered to agent session

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #68188, currently open in local store
- latest member update: 2026-04-28T05:49:57.360549607Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #60442 Matrix plugin: room messages received via sync but not routed to agent sessions
- #61773 [Bug]: Matrix channel syncs (HTTP 200) but receives no messages - similar to #54069

Open candidates:

- #68188 Matrix: bot receives messages but they are not delivered to agent session
