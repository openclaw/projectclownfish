---
repo: openclaw/openclaw
cluster_id: ghcrawl-191456-agentic-merge
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
  - "#64846"
candidates:
  - "#39551"
  - "#41255"
  - "#47255"
  - "#56203"
  - "#57483"
  - "#59324"
  - "#59477"
  - "#63339"
  - "#63377"
  - "#63556"
  - "#64846"
cluster_refs:
  - "#39551"
  - "#41255"
  - "#47255"
  - "#56203"
  - "#57483"
  - "#59324"
  - "#59477"
  - "#63339"
  - "#63377"
  - "#63556"
  - "#64846"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #64846 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 191456 on 2026-04-26."
---

# GHCrawl Cluster 191456

Generated from local ghcrawl run cluster 191456 for `openclaw/openclaw`.

Display title:

> fix(tools): tolerate duplicate sessionKey/label in sessions_send

Cluster shape from ghcrawl:

- total members: 11
- issues: 0
- pull requests: 11
- open candidates in local store: 11
- representative: #64846, currently open in local store
- latest member update: 2026-04-26T21:32:46.192Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39551 fix: prefer sessionKey over label in sessions_send
- #41255 fix: prefer sessionKey over label in sessions_send instead of rejecting both
- #47255 feat: add async parameter to sessions_send
- #56203 fix(sessions_send): prefer sessionKey over label when both are present (AI-assisted)
- #57483 fix(sessions): let a2a policy gate cross-agent sends independently of visibility
- #59324 fix(agents): prefer sessionKey in sessions_send
- #59477 fix(sessions_send): allow cross-agent messaging for sandboxed agents with a2a enabled
- #63339 tools: clarify sessions_send schema field guidance
- #63377 fix: Clarify sessions_send schema field guidance for sessionKey/label
- #63556 tools: clarify sessions_send tool description
- #64846 fix(tools): tolerate duplicate sessionKey/label in sessions_send
