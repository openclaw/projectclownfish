---
repo: openclaw/openclaw
cluster_id: gitcrawl-603-dedupe-only-20260429-remote
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
  - "#39768"
candidates:
  - "#39768"
cluster_refs:
  - "#39768"
  - "#41209"
  - "#58084"
  - "#63602"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39768 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 603 on 2026-04-29."
---

# Gitcrawl Cluster 603

Generated from local gitcrawl run cluster 603 for `openclaw/openclaw`.

Display title:

> [Bug]: MCP tool failure

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 1
- representative: #39768, currently open in local store
- latest member update: 2026-04-28T05:49:57.793446146Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41209 [Bug]: Tool Validation Errors After Upgrading to 2026.3.8 - File Read/Write Broken
- #58084 [Bug] HTTP 400 tools.N.custom.input_schema: JSON schema is invalid — blocks all tool use
- #63602 [Bug]: MCP server fails to load — invalid_value expected "object" in inputSchema.type

Open candidates:

- #39768 [Bug]: MCP tool failure
