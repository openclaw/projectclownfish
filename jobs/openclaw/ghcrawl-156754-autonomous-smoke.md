---
repo: openclaw/openclaw
cluster_id: ghcrawl-156754-autonomous-smoke
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
  - "#9912"
candidates:
  - "#9912"
  - "#46140"
  - "#47175"
cluster_refs:
  - "#9912"
  - "#46140"
  - "#47175"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #9912 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156754 on 2026-04-26."
---

# GHCrawl Cluster 156754

Generated from local ghcrawl run cluster 156754 for `openclaw/openclaw`.

Display title:

> Feature: Add maxTurns/maxToolCalls config option to limit agent iterations

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #9912, currently open in local store
- latest member update: 2026-04-26T00:46:52.053Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #9912 Feature: Add maxTurns/maxToolCalls config option to limit agent iterations
- #46140 Feature request: per-agent maxToolCalls limit
- #47175 [Feature]: Add maxToolCallsPerTurn config to limit rapid-fire tool call bursts
