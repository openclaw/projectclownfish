---
repo: openclaw/openclaw
cluster_id: gitcrawl-3135-dedupe-only-20260429-remote
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
  - "#52786"
candidates:
  - "#70575"
cluster_refs:
  - "#40159"
  - "#52786"
  - "#70575"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #52786 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 3135 on 2026-04-29."
---

# Gitcrawl Cluster 3135

Generated from local gitcrawl run cluster 3135 for `openclaw/openclaw`.

Display title:

> sessions.patch modelOverride lost due to stale-cache race in agent handler

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #52786, currently closed in local store
- latest member update: 2026-04-28T04:44:24.482051337Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40159 [Bug]: Subagent modelOverride silently discarded by initSessionState
- #52786 sessions.patch modelOverride lost due to stale-cache race in agent handler

Open candidates:

- #70575 Stale-entry writeback races for lastChannel/channel in agent handler session patch
