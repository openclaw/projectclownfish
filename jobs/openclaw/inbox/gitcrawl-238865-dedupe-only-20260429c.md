---
repo: openclaw/openclaw
cluster_id: gitcrawl-238865-dedupe-only-20260429c
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
  - "#55564"
candidates:
  - "#39138"
  - "#55231"
  - "#55564"
cluster_refs:
  - "#39138"
  - "#55231"
  - "#55564"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #55564 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238865 on 2026-04-29."
---

# Gitcrawl Cluster 238865

Generated from local gitcrawl run cluster 238865 for `openclaw/openclaw`.

Display title:

> Gateway replays stale queued messages after restart

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #55564, currently open in local store
- latest member update: 2026-04-29T08:43:39.600Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39138 Gateway 重启后 delivery recovery 重新发送大量旧消息（包括 15 小时前的）
- #55231 delivery-recovery flushes stale pending messages as batch on every restart
- #55564 Gateway replays stale queued messages after restart
