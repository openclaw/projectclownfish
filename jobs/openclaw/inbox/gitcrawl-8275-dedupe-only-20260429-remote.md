---
repo: openclaw/openclaw
cluster_id: gitcrawl-8275-dedupe-only-20260429-remote
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
  - "#53243"
candidates:
  - "#44015"
  - "#53243"
  - "#66650"
cluster_refs:
  - "#44015"
  - "#53243"
  - "#66615"
  - "#66650"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #53243 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 8275 on 2026-04-29."
---

# Gitcrawl Cluster 8275

Generated from local gitcrawl run cluster 8275 for `openclaw/openclaw`.

Display title:

> Raise chat.history text cap to avoid premature truncation

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 3
- representative: #53243, currently open in local store
- latest member update: 2026-04-28T07:04:52.451530175Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #66615 fix(gateway): increase chat.history limit from 1000 to 2000

Open candidates:

- #44015 gateway: enforce 512 KB max length for chat.send message
- #53243 Raise chat.history text cap to avoid premature truncation
- #66650 fix(tools): clamp sessions_history limit to chat.history max
