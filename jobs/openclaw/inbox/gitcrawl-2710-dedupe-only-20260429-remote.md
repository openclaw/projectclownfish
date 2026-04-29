---
repo: openclaw/openclaw
cluster_id: gitcrawl-2710-dedupe-only-20260429-remote
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
  - "#40260"
candidates:
  - "#48450"
cluster_refs:
  - "#40260"
  - "#40262"
  - "#48450"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #40260 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2710 on 2026-04-29."
---

# Gitcrawl Cluster 2710

Generated from local gitcrawl run cluster 2710 for `openclaw/openclaw`.

Display title:

> [Bug]: message action=thread-create silently fails on Discord forum channels (type 15)

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #40260, currently closed in local store
- latest member update: 2026-04-28T21:55:43.68840075Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40260 [Bug]: message action=thread-create silently fails on Discord forum channels (type 15)
- #40262 [Bug]: message action=thread-create silently fails on Discord forum channels (type 15)

Open candidates:

- #48450 Discord: thread-create returns error but thread is created (ghost duplicate threads)
