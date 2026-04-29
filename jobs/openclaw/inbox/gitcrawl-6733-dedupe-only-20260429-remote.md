---
repo: openclaw/openclaw
cluster_id: gitcrawl-6733-dedupe-only-20260429-remote
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
  - "#48200"
candidates:
  - "#48200"
  - "#65194"
  - "#65383"
cluster_refs:
  - "#42546"
  - "#48200"
  - "#65194"
  - "#65383"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48200 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 6733 on 2026-04-29."
---

# Gitcrawl Cluster 6733

Generated from local gitcrawl run cluster 6733 for `openclaw/openclaw`.

Display title:

> fix(imessage): prevent infinite loop when running on personal account

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 3
- representative: #48200, currently open in local store
- latest member update: 2026-04-27T22:51:33.448550404Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #42546 fix(imessage): prevent self-echo message loop

Open candidates:

- #48200 fix(imessage): prevent infinite loop when running on personal account
- #65194 fix(imessage): avoid duplicate default monitor startup
- #65383 fix(imessage): avoid duplicate default watcher
