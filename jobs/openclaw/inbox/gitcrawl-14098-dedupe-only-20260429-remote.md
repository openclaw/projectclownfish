---
repo: openclaw/openclaw
cluster_id: gitcrawl-14098-dedupe-only-20260429-remote
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
  - "#62648"
candidates:
  - "#62648"
  - "#66137"
cluster_refs:
  - "#56792"
  - "#62648"
  - "#66137"
  - "#71036"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #62648 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14098 on 2026-04-29."
---

# Gitcrawl Cluster 14098

Generated from local gitcrawl run cluster 14098 for `openclaw/openclaw`.

Display title:

> fix: include property name in additionalProperties validation errors

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 2
- representative: #62648, currently open in local store
- latest member update: 2026-04-27T22:51:36.167430964Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #56792 fix(schema-validator): report specific property name for additionalProperties errors
- #71036 fix(mcp): add Ajv 2020-12 meta-schema support for external MCP server tools

Open candidates:

- #62648 fix: include property name in additionalProperties validation errors
- #66137 fix(ajv): validate MCP tool schemas against draft/2020-12 [AI-assisted]
