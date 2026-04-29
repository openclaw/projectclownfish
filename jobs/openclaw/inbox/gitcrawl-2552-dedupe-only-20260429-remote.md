---
repo: openclaw/openclaw
cluster_id: gitcrawl-2552-dedupe-only-20260429-remote
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
  - "#62134"
candidates:
  - "#62134"
cluster_refs:
  - "#61611"
  - "#62134"
  - "#62776"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #62134 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2552 on 2026-04-29."
---

# Gitcrawl Cluster 2552

Generated from local gitcrawl run cluster 2552 for `openclaw/openclaw`.

Display title:

> feat: OAuth authentication for remote MCP servers

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 1
- representative: #62134, currently open in local store
- latest member update: 2026-04-28T04:44:24.823185645Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #61611 [Feature]: OAuth authentication for remote MCP servers
- #62776 [Feature]: Support OAuth-based remote MCP authentication flows (Heptabase MCP)

Open candidates:

- #62134 feat: OAuth authentication for remote MCP servers
