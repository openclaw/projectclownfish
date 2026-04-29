---
repo: openclaw/openclaw
cluster_id: gitcrawl-14095-dedupe-only-20260429-remote
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
  - "#52231"
candidates:
  - "#64888"
cluster_refs:
  - "#48518"
  - "#52224"
  - "#52231"
  - "#64888"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #52231 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14095 on 2026-04-29."
---

# Gitcrawl Cluster 14095

Generated from local gitcrawl run cluster 14095 for `openclaw/openclaw`.

Display title:

> [Bug]: Embedded run timeout leaves zombie handle blocking heartbeat delivery

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 1
- representative: #52231, currently closed in local store
- latest member update: 2026-04-27T22:51:32.745183197Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #48518 Embedded run deadlocks after triggering compaction (zombie state until timeout)
- #52224 Zombie embedded run blocks heartbeats permanently after provider timeout
- #52231 [Bug]: Embedded run timeout leaves zombie handle blocking heartbeat delivery

Open candidates:

- #64888 agents: wrap runEmbeddedAttempt in error boundary + add cancelled liveness state
