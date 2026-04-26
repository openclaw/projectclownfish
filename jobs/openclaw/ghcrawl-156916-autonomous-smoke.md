---
repo: openclaw/openclaw
cluster_id: ghcrawl-156916-autonomous-smoke
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
  - "#65694"
candidates:
  - "#64984"
  - "#65694"
  - "#70364"
cluster_refs:
  - "#64984"
  - "#65694"
  - "#70364"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #65694 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156916 on 2026-04-26."
---

# GHCrawl Cluster 156916

Generated from local ghcrawl run cluster 156916 for `openclaw/openclaw`.

Display title:

> MCP Server Resource Leak - Orphaned processes cause memory exhaustion and hanging commands

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #65694, currently open in local store
- latest member update: 2026-04-25T07:30:10.981Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #64984 MCP server subprocesses not cleaned up on gateway reconnect — OOM
- #65694 MCP Server Resource Leak - Orphaned processes cause memory exhaustion and hanging commands
- #70364 [Bug]: MCP child process leak: sessions_send via gateway never calls disposeSessionMcpRuntime
