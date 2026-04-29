---
repo: openclaw/openclaw
cluster_id: gitcrawl-772-dedupe-only-20260429-remote
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
  - "#65359"
candidates:
  - "#65305"
  - "#65359"
  - "#65425"
cluster_refs:
  - "#65305"
  - "#65359"
  - "#65425"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65359 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 772 on 2026-04-29."
---

# Gitcrawl Cluster 772

Generated from local gitcrawl run cluster 772 for `openclaw/openclaw`.

Display title:

> fix(config): allow historyLimit: 0 in GroupChatSchema

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #65359, currently open in local store
- latest member update: 2026-04-27T22:51:33.427439328Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #65305 [Bug]: GroupChatSchema historyLimit rejects 0 (uses .positive() instead of .min(0))
- #65359 fix(config): allow historyLimit: 0 in GroupChatSchema
- #65425 Allow zero group chat history limit
