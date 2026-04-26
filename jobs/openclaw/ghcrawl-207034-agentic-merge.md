---
repo: openclaw/openclaw
cluster_id: ghcrawl-207034-agentic-merge
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
  - "#51065"
candidates:
  - "#39631"
  - "#51065"
  - "#66161"
  - "#71575"
cluster_refs:
  - "#39631"
  - "#51065"
  - "#66161"
  - "#71575"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #51065 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 207034 on 2026-04-26."
---

# GHCrawl Cluster 207034

Generated from local ghcrawl run cluster 207034 for `openclaw/openclaw`.

Display title:

> Failed tool call narrations leak to Telegram as user-visible messages

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #51065, currently open in local store
- latest member update: 2026-04-26T21:32:45.583Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39631 Telegram: internal tool error message leaks into user chat on failed edit()
- #51065 Failed tool call narrations leak to Telegram as user-visible messages
- #66161 Telegram surface leaks assistant pre-tool scratch/commentary into user-visible chat
- #71575 Telegram channel renders intermediate tool call steps as visible messages
