---
repo: openclaw/openclaw
cluster_id: gitcrawl-7158-dedupe-only-20260429-remote
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
  - "#49457"
candidates:
  - "#46303"
  - "#69121"
cluster_refs:
  - "#46303"
  - "#49457"
  - "#55470"
  - "#69121"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #49457 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 7158 on 2026-04-29."
---

# Gitcrawl Cluster 7158

Generated from local gitcrawl run cluster 7158 for `openclaw/openclaw`.

Display title:

> fix: suppress drain error replies to prevent chat flooding

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 2
- representative: #49457, currently closed in local store
- latest member update: 2026-04-28T17:25:21.176103679Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #49457 fix: suppress drain error replies to prevent chat flooding
- #55470 fix: auto-retry GatewayDrainingError instead of surfacing to user (#55412)

Open candidates:

- #46303 fix: drain inbound debounce buffer and followup queues before SIGUSR1 reload
- #69121 fix(gateway): drain pending replies before restart shutdown
