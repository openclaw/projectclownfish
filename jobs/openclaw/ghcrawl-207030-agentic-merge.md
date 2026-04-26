---
repo: openclaw/openclaw
cluster_id: ghcrawl-207030-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#52861"
candidates:
  - "#14785"
  - "#52861"
  - "#58743"
  - "#64760"
cluster_refs:
  - "#14785"
  - "#52861"
  - "#58743"
  - "#64760"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #52861 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 207030 on 2026-04-26."
---

# GHCrawl Cluster 207030

Generated from local ghcrawl run cluster 207030 for `openclaw/openclaw`.

Display title:

> perf: reduce per-turn token overhead via conditional tool/skill injection

Cluster shape from ghcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #52861, currently open in local store
- latest member update: 2026-04-26T21:32:45.918Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #14785 Reduce tool schema token overhead (~3,500 tok/session)
- #52861 perf: reduce per-turn token overhead via conditional tool/skill injection
- #58743 Feature Request: Lazy Skill Loading + Auto Context Compression
- #64760 Optimize: Lazy-load skill descriptions in system prompt
