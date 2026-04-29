---
repo: openclaw/openclaw
cluster_id: gitcrawl-3043-dedupe-only-20260429-remote
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
  - "#49937"
candidates:
  - "#49981"
cluster_refs:
  - "#49937"
  - "#49963"
  - "#49981"
  - "#53820"
  - "#57733"
  - "#66931"
  - "#67616"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #49937 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 3043 on 2026-04-29."
---

# Gitcrawl Cluster 3043

Generated from local gitcrawl run cluster 3043 for `openclaw/openclaw`.

Display title:

> Fix memory timeout on 2026 03 13 1

Cluster shape from gitcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 1
- representative: #49937, currently closed in local store
- latest member update: 2026-04-28T20:12:58.626508497Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #49937 Fix memory timeout on 2026 03 13 1
- #49963 fix(memory): respect configured batch timeout for direct embedding calls
- #53820 Memory: cap Ollama embed batch fan-out to prevent index fetch failures
- #57733 Add non-batch memory embedding concurrency control
- #66931 fix(memory): respect user batch.concurrency even when batch mode is disabled
- #67616 [AI-assisted] feat(memory): add configurable embedding batch timeout

Open candidates:

- #49981 memory: thread timeoutMs through remote embedding batch HTTP calls
