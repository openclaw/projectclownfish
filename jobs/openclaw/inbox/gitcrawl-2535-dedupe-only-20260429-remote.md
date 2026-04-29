---
repo: openclaw/openclaw
cluster_id: gitcrawl-2535-dedupe-only-20260429-remote
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
  - "#57483"
candidates:
  - "#57447"
  - "#57483"
cluster_refs:
  - "#57447"
  - "#57483"
  - "#59477"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #57483 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2535 on 2026-04-29."
---

# Gitcrawl Cluster 2535

Generated from local gitcrawl run cluster 2535 for `openclaw/openclaw`.

Display title:

> fix(sessions): let a2a policy gate cross-agent sends independently of visibility

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 2
- representative: #57483, currently open in local store
- latest member update: 2026-04-28T15:57:31.192955311Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #59477 fix(sessions_send): allow cross-agent messaging for sandboxed agents with a2a enabled

Open candidates:

- #57447 sessions_send blocked by visibility guard even when a2a policy allows cross-agent messaging
- #57483 fix(sessions): let a2a policy gate cross-agent sends independently of visibility
