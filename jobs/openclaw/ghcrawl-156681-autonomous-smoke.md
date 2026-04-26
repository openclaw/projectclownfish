---
repo: openclaw/openclaw
cluster_id: ghcrawl-156681-autonomous-smoke
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
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#65010"
candidates:
  - "#52351"
  - "#60604"
  - "#65010"
  - "#65221"
  - "#65222"
cluster_refs:
  - "#52351"
  - "#60604"
  - "#65010"
  - "#65221"
  - "#65222"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #65010 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156681 on 2026-04-26."
---

# GHCrawl Cluster 156681

Generated from local ghcrawl run cluster 156681 for `openclaw/openclaw`.

Display title:

> fix: use isActive+isStopped instead of isStreaming for steer message injection

Cluster shape from ghcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #65010, currently open in local store
- latest member update: 2026-04-24T18:56:29.319Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #52351 fix: use isActive instead of isStreaming for steer mode message injection
- #60604 fix(telegram): use per-message sequential key to unblock steer-mode message injection
- #65010 fix: use isActive+isStopped instead of isStreaming for steer message injection
- #65221 fix: resolve interrupt scheduling race between embedded run and ReplyOperation registries
- #65222 fix(telegram): bypass grammY sequential key for interrupt/steer message delivery
