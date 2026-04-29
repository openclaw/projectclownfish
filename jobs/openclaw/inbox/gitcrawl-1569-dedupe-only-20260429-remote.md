---
repo: openclaw/openclaw
cluster_id: gitcrawl-1569-dedupe-only-20260429-remote
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
  - "#65010"
candidates:
  - "#64758"
  - "#65221"
  - "#65222"
  - "#66247"
cluster_refs:
  - "#52351"
  - "#60604"
  - "#64758"
  - "#65010"
  - "#65221"
  - "#65222"
  - "#66247"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65010 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1569 on 2026-04-29."
---

# Gitcrawl Cluster 1569

Generated from local gitcrawl run cluster 1569 for `openclaw/openclaw`.

Display title:

> fix: use isActive+isStopped instead of isStreaming for steer message injection

Cluster shape from gitcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 4
- representative: #65010, currently closed in local store
- latest member update: 2026-04-28T22:51:07.229012618Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #52351 fix: use isActive instead of isStreaming for steer mode message injection
- #60604 fix(telegram): use per-message sequential key to unblock steer-mode message injection
- #65010 fix: use isActive+isStopped instead of isStreaming for steer message injection

Open candidates:

- #64758 fix: unblock steer-mode followups when active runs stop streaming
- #65221 fix: resolve interrupt scheduling race between embedded run and ReplyOperation registries
- #65222 fix(telegram): bypass grammY sequential key for interrupt/steer message delivery
- #66247 [codex] Telegram: let immediate queue modes bypass busy topic lanes
