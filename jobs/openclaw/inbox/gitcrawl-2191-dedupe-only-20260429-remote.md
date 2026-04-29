---
repo: openclaw/openclaw
cluster_id: gitcrawl-2191-dedupe-only-20260429-remote
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
  - "#39245"
candidates:
  - "#39245"
  - "#64301"
cluster_refs:
  - "#39091"
  - "#39245"
  - "#41119"
  - "#41189"
  - "#64301"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39245 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2191 on 2026-04-29."
---

# Gitcrawl Cluster 2191

Generated from local gitcrawl run cluster 2191 for `openclaw/openclaw`.

Display title:

> fix(agents): normalize mangled tool names and IDs from OpenAI-compati…

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 2
- representative: #39245, currently open in local store
- latest member update: 2026-04-28T22:51:06.912456349Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39091 fix: normalize mangled tool names and IDs from OpenAI-compatible 
- #41119 Fix: Deduplicate tool call IDs in normalizeToolCallIdsInMessage
- #41189 fix(agents): deduplicate tool_call_ids within a single message

Open candidates:

- #39245 fix(agents): normalize mangled tool names and IDs from OpenAI-compati…
- #64301  fix: improve tool name normalization for malformed LLM outputs
