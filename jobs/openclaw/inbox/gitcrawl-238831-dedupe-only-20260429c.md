---
repo: openclaw/openclaw
cluster_id: gitcrawl-238831-dedupe-only-20260429c
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
  - "#51065"
candidates:
  - "#25592"
  - "#51065"
  - "#66161"
  - "#71575"
cluster_refs:
  - "#25592"
  - "#51065"
  - "#66161"
  - "#71575"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #51065 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238831 on 2026-04-29."
---

# Gitcrawl Cluster 238831

Generated from local gitcrawl run cluster 238831 for `openclaw/openclaw`.

Display title:

> Failed tool call narrations leak to Telegram as user-visible messages

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #51065, currently open in local store
- latest member update: 2026-04-29T08:43:40.721Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #25592 Text between tool calls leaks to messaging channels
- #51065 Failed tool call narrations leak to Telegram as user-visible messages
- #66161 Telegram surface leaks assistant pre-tool scratch/commentary into user-visible chat
- #71575 Telegram channel renders intermediate tool call steps as visible messages
