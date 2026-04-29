---
repo: openclaw/openclaw
cluster_id: gitcrawl-1463-dedupe-only-20260429-remote
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
  - "#68870"
candidates:
  - "#68449"
cluster_refs:
  - "#68449"
  - "#68473"
  - "#68534"
  - "#68870"
  - "#68876"
  - "#70023"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #68870 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1463 on 2026-04-29."
---

# Gitcrawl Cluster 1463

Generated from local gitcrawl run cluster 1463 for `openclaw/openclaw`.

Display title:

> fix(memory): expand English stopword list for concept vocabulary

Cluster shape from gitcrawl:

- total members: 6
- issues: 2
- pull requests: 4
- open candidates in local store: 1
- representative: #68870, currently closed in local store
- latest member update: 2026-04-28T07:59:25.688294751Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #68473 fix(memory-core): expand concept stopword list to filter transcript noise
- #68534 fix(memory-core): add cooldown guard to prevent dreaming-narrative from spawning on every heartbeat
- #68870 fix(memory): expand English stopword list for concept vocabulary
- #68876 fix(memory): filter cron-triggered sessions and NO_REPLY sentinels from dreaming corpus (addresses #68449)
- #70023 Bug: CONCEPT_STOP_WORDS missing common English stop words, producing garbage dream reflections

Open candidates:

- #68449 [Bug]: Dreaming plugin: stopword list too narrow and no filter for cron-triggered sessions
