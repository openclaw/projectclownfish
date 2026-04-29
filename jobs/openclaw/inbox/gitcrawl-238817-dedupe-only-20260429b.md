---
repo: openclaw/openclaw
cluster_id: gitcrawl-238817-dedupe-only-20260429b
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
  - "#47975"
candidates:
  - "#47975"
  - "#56516"
  - "#58534"
  - "#58649"
  - "#67902"
cluster_refs:
  - "#47975"
  - "#56516"
  - "#58534"
  - "#58649"
  - "#67902"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #47975 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238817 on 2026-04-29."
---

# Gitcrawl Cluster 238817

Generated from local gitcrawl run cluster 238817 for `openclaw/openclaw`.

Display title:

> Subagent sessions persist after completion, main session becomes unresponsive

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #47975, currently open in local store
- latest member update: 2026-04-29T08:43:37.712Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #47975 Subagent sessions persist after completion, main session becomes unresponsive
- #56516 Subagent sessions persist in web UI after completion
- #58534 Session management performance degrades severely with subagent usage (100%+ CPU at ~400 sessions)
- #58649 Subagent Session Timeout and Unresponsiveness in Production Use
- #67902 subagent sessions left as "running" in sessions.json after crash — no cleanup mechanism
