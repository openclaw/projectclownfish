---
repo: openclaw/openclaw
cluster_id: gitcrawl-6807-dedupe-only-20260429-remote
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
  - "#48400"
candidates:
  - "#53889"
cluster_refs:
  - "#48400"
  - "#53889"
  - "#65924"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48400 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 6807 on 2026-04-29."
---

# Gitcrawl Cluster 6807

Generated from local gitcrawl run cluster 6807 for `openclaw/openclaw`.

Display title:

> Session JSONL loses tool call entries after auto-retry of overloaded_error; model loses context of its own actions

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #48400, currently closed in local store
- latest member update: 2026-04-28T07:04:52.352243504Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #48400 Session JSONL loses tool call entries after auto-retry of overloaded_error; model loses context of its own actions
- #65924 Retry on engine_overloaded stores both failed and successful assistant messages, creating duplicate tool_call IDs

Open candidates:

- #53889 Session deadlock: dangling toolCall with no toolResult blocks agent loop permanently
