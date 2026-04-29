---
repo: openclaw/openclaw
cluster_id: gitcrawl-2425-dedupe-only-20260429-remote
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
  - "#44150"
candidates:
  - "#44150"
  - "#61447"
cluster_refs:
  - "#44150"
  - "#44152"
  - "#44154"
  - "#44163"
  - "#61447"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #44150 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2425 on 2026-04-29."
---

# Gitcrawl Cluster 2425

Generated from local gitcrawl run cluster 2425 for `openclaw/openclaw`.

Display title:

> feat(compaction): expose messages to before_compaction hooks

Cluster shape from gitcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 2
- representative: #44150, currently open in local store
- latest member update: 2026-04-28T04:44:23.844350721Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44152 feat(compaction): include sessionFile in before_compaction hooks
- #44154 feat(compaction): include sessionFile in after_compaction hooks
- #44163 feat(compaction): expose summary in after_compaction hooks

Open candidates:

- #44150 feat(compaction): expose messages to before_compaction hooks
- #61447 feat(hooks): include compaction summary text in after_compaction hook payload
