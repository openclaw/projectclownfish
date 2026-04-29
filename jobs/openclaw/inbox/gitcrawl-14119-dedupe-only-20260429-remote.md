---
repo: openclaw/openclaw
cluster_id: gitcrawl-14119-dedupe-only-20260429-remote
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
  - "#65544"
candidates:
  - "#48534"
  - "#52353"
cluster_refs:
  - "#48534"
  - "#52353"
  - "#65544"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65544 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14119 on 2026-04-29."
---

# Gitcrawl Cluster 14119

Generated from local gitcrawl run cluster 14119 for `openclaw/openclaw`.

Display title:

> agent_end hook has no timeout: hung embedding endpoint silently drops memory extraction

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 2
- representative: #65544, currently closed in local store
- latest member update: 2026-04-28T22:51:07.394885082Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #65544 agent_end hook has no timeout: hung embedding endpoint silently drops memory extraction

Open candidates:

- #48534 [Bug]: Plugin before_agent_start hook hang permanently blocks all agent runs with zero diagnostic output
- #52353 Feature Request: Emit Agent Event on Embedded Run Timeout
