---
repo: openclaw/openclaw
cluster_id: gitcrawl-238886-dedupe-only-20260429c
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
  - "#45421"
candidates:
  - "#45421"
  - "#45449"
  - "#46258"
cluster_refs:
  - "#45421"
  - "#45449"
  - "#46258"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #45421 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238886 on 2026-04-29."
---

# Gitcrawl Cluster 238886

Generated from local gitcrawl run cluster 238886 for `openclaw/openclaw`.

Display title:

> slack: add optional run-start timing for ack reactions

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #45421, currently open in local store
- latest member update: 2026-04-28T17:52:28.003Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45421 slack: add optional run-start timing for ack reactions
- #45449 discord: add optional run-start timing for ack reactions
- #46258 Add Telegram ack reaction timing control
