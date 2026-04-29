---
repo: openclaw/openclaw
cluster_id: gitcrawl-2964-dedupe-only-20260429-remote
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
  - "#47174"
candidates:
  - "#51421"
cluster_refs:
  - "#45424"
  - "#47174"
  - "#51421"
  - "#66845"
  - "#69138"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #47174 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2964 on 2026-04-29."
---

# Gitcrawl Cluster 2964

Generated from local gitcrawl run cluster 2964 for `openclaw/openclaw`.

Display title:

> fix(memory-flush): allow first flush when compactionCount is 0

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 1
- representative: #47174, currently closed in local store
- latest member update: 2026-04-28T22:51:07.461227071Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45424 fix(memory-flush): include outputTokens in flush threshold estimate
- #47174 fix(memory-flush): allow first flush when compactionCount is 0
- #66845 fix(memory): handle zero-initialization in flush compaction dedup
- #69138 fix(memory): preserve pre-increment compaction count in memoryFlushCompactionCount (#12590)

Open candidates:

- #51421 fix(memory): memoryFlush fires every compaction cycle instead of every other
