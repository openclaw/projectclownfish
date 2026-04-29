---
repo: openclaw/openclaw
cluster_id: gitcrawl-1982-dedupe-only-20260429-remote
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
  - "#56203"
candidates:
  - "#39551"
  - "#41255"
  - "#56203"
  - "#59324"
  - "#63339"
  - "#63377"
  - "#63556"
  - "#64846"
cluster_refs:
  - "#39551"
  - "#41255"
  - "#56203"
  - "#59324"
  - "#63334"
  - "#63339"
  - "#63377"
  - "#63556"
  - "#64846"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #56203 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1982 on 2026-04-29."
---

# Gitcrawl Cluster 1982

Generated from local gitcrawl run cluster 1982 for `openclaw/openclaw`.

Display title:

> fix(sessions_send): prefer sessionKey over label when both are present (AI-assisted)

Cluster shape from gitcrawl:

- total members: 9
- issues: 0
- pull requests: 9
- open candidates in local store: 8
- representative: #56203, currently open in local store
- latest member update: 2026-04-28T22:51:07.564245369Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #63334 docs: clarify sessions_send sessionKey/label usage

Open candidates:

- #39551 fix: prefer sessionKey over label in sessions_send
- #41255 fix: prefer sessionKey over label in sessions_send instead of rejecting both
- #56203 fix(sessions_send): prefer sessionKey over label when both are present (AI-assisted)
- #59324 fix(agents): prefer sessionKey in sessions_send
- #63339 tools: clarify sessions_send schema field guidance
- #63377 fix: Clarify sessions_send schema field guidance for sessionKey/label
- #63556 tools: clarify sessions_send tool description
- #64846 fix(tools): tolerate duplicate sessionKey/label in sessions_send
