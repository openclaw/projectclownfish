---
repo: openclaw/openclaw
cluster_id: gitcrawl-14124-dedupe-only-20260429-remote
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
  - "#61623"
candidates:
  - "#61623"
  - "#68801"
cluster_refs:
  - "#51829"
  - "#61623"
  - "#68801"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #61623 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14124 on 2026-04-29."
---

# Gitcrawl Cluster 14124

Generated from local gitcrawl run cluster 14124 for `openclaw/openclaw`.

Display title:

> fix: clean up seqByRun entries when agent runs end

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 2
- representative: #61623, currently open in local store
- latest member update: 2026-04-28T22:51:07.188506648Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #51829 fix(agent-events): delete seqByRun entry in clearAgentRunContext

Open candidates:

- #61623 fix: clean up seqByRun entries when agent runs end
- #68801 Gateway: prune orphaned agentRunStarts entries
