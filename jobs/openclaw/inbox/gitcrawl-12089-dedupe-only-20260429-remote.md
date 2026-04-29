---
repo: openclaw/openclaw
cluster_id: gitcrawl-12089-dedupe-only-20260429-remote
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
  - "#65422"
candidates:
  - "#69249"
cluster_refs:
  - "#52112"
  - "#65422"
  - "#69249"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65422 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 12089 on 2026-04-29."
---

# Gitcrawl Cluster 12089

Generated from local gitcrawl run cluster 12089 for `openclaw/openclaw`.

Display title:

> Slack threads do not reliably auto-recover after gateway restart

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #65422, currently closed in local store
- latest member update: 2026-04-28T05:49:58.2848884Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #52112 Discord: Thread context lost on gateway restart — no ThreadHistoryBody parity with Slack
- #65422 Slack threads do not reliably auto-recover after gateway restart

Open candidates:

- #69249 Gateway restart can silently abort an in-flight Discord turn, with no automatic recovery message to the user
