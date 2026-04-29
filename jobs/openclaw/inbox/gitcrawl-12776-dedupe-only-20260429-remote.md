---
repo: openclaw/openclaw
cluster_id: gitcrawl-12776-dedupe-only-20260429-remote
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
  - "#67601"
candidates:
  - "#68774"
cluster_refs:
  - "#67442"
  - "#67601"
  - "#68774"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #67601 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 12776 on 2026-04-29."
---

# Gitcrawl Cluster 12776

Generated from local gitcrawl run cluster 12776 for `openclaw/openclaw`.

Display title:

> fix(memory-core): stop dreaming from promoting transport metadata

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- representative: #67601, currently closed in local store
- latest member update: 2026-04-28T05:49:58.772840418Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #67442 [Bug]: Dreaming can promote transport/session metadata into MEMORY.md as durable memory
- #67601 fix(memory-core): stop dreaming from promoting transport metadata

Open candidates:

- #68774 fix(memory-core): prevent staged dream candidates from leaking into MEMORY.md
