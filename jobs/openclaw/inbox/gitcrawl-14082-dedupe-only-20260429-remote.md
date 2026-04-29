---
repo: openclaw/openclaw
cluster_id: gitcrawl-14082-dedupe-only-20260429-remote
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
  - "#71030"
candidates:
  - "#67363"
  - "#67580"
  - "#70072"
cluster_refs:
  - "#67363"
  - "#67580"
  - "#68882"
  - "#70072"
  - "#71030"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #71030 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14082 on 2026-04-29."
---

# Gitcrawl Cluster 14082

Generated from local gitcrawl run cluster 14082 for `openclaw/openclaw`.

Display title:

> Dreaming deep promotion: candidates ranked but never promoted due to diff-format snippets

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 3
- representative: #71030, currently closed in local store
- latest member update: 2026-04-28T16:45:59.822407772Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #68882 Deep dreaming promotes zero candidates: recallCount stays at 0 and maxScore caps at 0.62
- #71030 Dreaming deep promotion: candidates ranked but never promoted due to diff-format snippets

Open candidates:

- #67363 [Behavior]: memory-core dreaming deep phase promotes raw verbatim daily-log snippets to MEMORY.md without distillation
- #67580 Dreaming promotion writes raw Candidate data into MEMORY.md (no distillation)
- #70072 Deep dreaming: expose per-candidate ranking/promotion reasoning (a dream should be introspectable)
